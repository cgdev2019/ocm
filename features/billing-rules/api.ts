import { useMemo } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess } from '@/lib/api/helpers';
import type { ActionStatus } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  BillingRuleDeleteVariables,
  BillingRuleDetail,
  BillingRuleDto,
  BillingRuleFormValues,
  BillingRuleMutationVariables,
  BillingRuleResponseDto,
} from '@/features/billing-rules/types';

const ACTION_STATUS_ERROR_MESSAGE = 'Billing rule endpoint returned an error';
const CREATE_ERROR_MESSAGE = 'Unable to create billing rule';
const UPDATE_ERROR_MESSAGE = 'Unable to update billing rule';
const DELETE_ERROR_MESSAGE = 'Unable to delete billing rule';

const trimString = (value: string | null | undefined): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeContractCode = (code: string | null | undefined): string =>
  trimString(code) ?? '';

const normalizeBillingRuleCode = (code: string | null | undefined): string =>
  trimString(code) ?? '';

const normalizeId = (value: number | string | null | undefined): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return null;
    }

    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

const normalizePriority = (value: number | string | null | undefined): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return undefined;
    }

    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  return undefined;
};

const mapDtoToDetail = (dto: BillingRuleDto): BillingRuleDetail => ({
  id: dto.id ?? undefined,
  code: dto.code?.trim() ?? '',
  criteriaEL: dto.criteriaEL?.trim() ?? '',
  invoicedBACodeEL: dto.invoicedBACodeEL?.trim() ?? '',
  priority: typeof dto.priority === 'number' && Number.isFinite(dto.priority) ? dto.priority : undefined,
});

const mapFormToDto = (values: BillingRuleFormValues): BillingRuleDto => ({
  id: values.id,
  code: values.code.trim(),
  criteriaEL: values.criteriaEL.trim(),
  invoicedBACodeEL: values.invoicedBACodeEL.trim(),
  priority: normalizePriority(values.priority),
});

const mapFormToDetail = (values: BillingRuleFormValues): BillingRuleDetail =>
  mapDtoToDetail(mapFormToDto(values));

const isActionStatus = (value: unknown): value is ActionStatus =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'status' in (value as Record<string, unknown>) &&
      typeof (value as Record<string, unknown>).status === 'string',
  );

const extractBillingRule = (payload: unknown): BillingRuleDto | undefined => {
  if (!payload) {
    return undefined;
  }

  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== 'object') {
      continue;
    }

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);

    if (Array.isArray(current)) {
      queue.push(...current);
      continue;
    }

    const container = current as BillingRuleResponseDto;

    if (isActionStatus(container)) {
      assertActionSuccess(container, ACTION_STATUS_ERROR_MESSAGE);
    }

    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, ACTION_STATUS_ERROR_MESSAGE);
    }

    if ('criteriaEL' in container || 'invoicedBACodeEL' in container || 'code' in container) {
      return container as BillingRuleDto;
    }

    queue.push(...Object.values(container));
  }

  return undefined;
};

const unwrapMutationResponse = (result: { data?: unknown; error?: unknown }, fallbackMessage: string) => {
  if (result.error) {
    if (result.error instanceof Error) {
      throw result.error;
    }

    if (typeof result.error === 'object' && result.error !== null) {
      const message =
        // @ts-expect-error — best effort
        result.error?.message ??
        // @ts-expect-error — nested under actionStatus
        result.error?.actionStatus?.message;
      if (typeof message === 'string' && message.length > 0) {
        throw new Error(message);
      }
    }

    throw new Error(fallbackMessage);
  }

  const data = result.data;
  if (data && typeof data === 'object') {
    if (isActionStatus(data)) {
      assertActionSuccess(data, fallbackMessage);
    }

    const container = data as BillingRuleResponseDto;
    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, fallbackMessage);
    }
  }

  return data;
};

const processMutationResult = (
  result: { data?: unknown; error?: unknown },
  fallbackValues: BillingRuleFormValues,
  fallbackMessage: string,
): BillingRuleDetail => {
  const data = unwrapMutationResponse(result, fallbackMessage);
  const dto = extractBillingRule(data);
  return dto ? mapDtoToDetail(dto) : mapFormToDetail(fallbackValues);
};

export const __internals = {
  trimString,
  normalizeContractCode,
  normalizeBillingRuleCode,
  normalizeId,
  normalizePriority,
  mapDtoToDetail,
  mapFormToDto,
  mapFormToDetail,
  extractBillingRule,
  unwrapMutationResponse,
  processMutationResult,
};

const useInvalidateBillingRuleQueries = () => {
  const queryClient = useQueryClient();

  return (contractCode: string, billingRuleId: number | null, billingRuleCode?: string | null | undefined) => {
    if (!contractCode) {
      return;
    }

    queryClient.invalidateQueries({ queryKey: queryKeys.contracts.billingRules(contractCode) });
    queryClient.invalidateQueries({ queryKey: queryKeys.contracts.detail(contractCode) });

    if (billingRuleId !== null) {
      queryClient.invalidateQueries({ queryKey: queryKeys.contracts.billingRule(contractCode, billingRuleId) });
    }

    const normalizedCode = normalizeBillingRuleCode(billingRuleCode ?? undefined);
    if (normalizedCode) {
      queryClient.invalidateQueries({
        queryKey: queryKeys.contracts.billingRuleByCode(contractCode, normalizedCode),
      });
    }
  };
};

export const useBillingRuleMutations = () => {
  const invalidate = useInvalidateBillingRuleQueries();

  const create = useMutation({
    mutationFn: async ({ contractCode, values }: BillingRuleMutationVariables) => {
      const apiClient = getApiClient();
      const normalizedContractCode = normalizeContractCode(contractCode);
      if (!normalizedContractCode) {
        throw new Error('Contract code is required to create a billing rule');
      }

      const body = mapFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/cpq/contracts/{contractCode}/billingRule' as never,
        {
          params: { path: { contractCode: normalizedContractCode } },
          body,
        } as never,
      );

      return processMutationResult(
        { data: result.data as unknown, error: result.error },
        values,
        CREATE_ERROR_MESSAGE,
      );
    },
    onSuccess: (data, variables) => {
      const contractCode = normalizeContractCode(variables.contractCode);
      const id = normalizeId(data?.id ?? variables.values.id ?? null);
      invalidate(contractCode, id, data?.code ?? variables.values.code);
    },
  });

  const update = useMutation({
    mutationFn: async ({ contractCode, values }: BillingRuleMutationVariables) => {
      const apiClient = getApiClient();
      const normalizedContractCode = normalizeContractCode(contractCode);
      const id = normalizeId(values.id ?? null);

      if (!normalizedContractCode) {
        throw new Error('Contract code is required to update a billing rule');
      }

      if (id === null) {
        throw new Error('Billing rule id is required to update a billing rule');
      }

      const body = mapFormToDto(values);
      const result = await apiClient.PUT(
        '/api/rest/v2/cpq/contracts/{contractCode}/billingRule/{id}' as never,
        {
          params: { path: { contractCode: normalizedContractCode, id } },
          body,
        } as never,
      );

      return processMutationResult(
        { data: result.data as unknown, error: result.error },
        values,
        UPDATE_ERROR_MESSAGE,
      );
    },
    onSuccess: (data, variables) => {
      const contractCode = normalizeContractCode(variables.contractCode);
      const id = normalizeId(data?.id ?? variables.values.id ?? null);
      invalidate(contractCode, id, data?.code ?? variables.values.code);
    },
  });

  const remove = useMutation({
    mutationFn: async ({ contractCode, id, code }: BillingRuleDeleteVariables) => {
      const apiClient = getApiClient();
      const normalizedContractCode = normalizeContractCode(contractCode);
      const normalizedId = normalizeId(id);

      if (!normalizedContractCode) {
        throw new Error('Contract code is required to delete a billing rule');
      }

      if (normalizedId === null) {
        throw new Error('Billing rule id is required to delete a billing rule');
      }

      const result = await apiClient.DELETE(
        '/api/rest/v2/cpq/contracts/{contractCode}/billingRule/{id}' as never,
        {
          params: { path: { contractCode: normalizedContractCode, id: normalizedId } },
        } as never,
      );

      const data = unwrapMutationResponse({ data: result.data as unknown, error: result.error }, DELETE_ERROR_MESSAGE);
      const dto = extractBillingRule(data);
      return {
        contractCode: normalizedContractCode,
        id: normalizedId,
        code: dto?.code ?? normalizeBillingRuleCode(code ?? undefined),
      } as const;
    },
    onSuccess: (payload, variables) => {
      const contractCode = payload?.contractCode ?? normalizeContractCode(variables.contractCode);
      const id = payload?.id ?? normalizeId(variables.id);
      const code = payload?.code ?? normalizeBillingRuleCode(variables.code ?? undefined);
      invalidate(contractCode, id, code);
    },
  });

  return useMemo(
    () => ({
      create,
      update,
      remove,
    }),
    [create, remove, update],
  );
};
