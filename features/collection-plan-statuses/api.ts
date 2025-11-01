import { useMemo } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess } from '@/lib/api/helpers';
import type { ActionStatus } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  DunningCollectionPlanStatusDeletePayload,
  DunningCollectionPlanStatusDetail,
  DunningCollectionPlanStatusDto,
  DunningCollectionPlanStatusFormValues,
  DunningCollectionPlanStatusResponseDto,
  ResourceDto,
} from '@/features/collection-plan-statuses/types';

const ACTION_STATUS_ERROR_MESSAGE = 'Collection plan status endpoint returned an error';
const CREATE_ERROR_MESSAGE = 'Unable to create collection plan status';
const UPDATE_ERROR_MESSAGE = 'Unable to update collection plan status';
const DELETE_ERROR_MESSAGE = 'Unable to delete collection plan status';

const DEFAULT_STATUS: DunningCollectionPlanStatusDto['status'] = 'ACTIVE';

const trimString = (value: string | null | undefined): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeCode = (code: string | null | undefined): string => trimString(code) ?? '';

const normalizeStatus = (
  status: string | null | undefined,
): DunningCollectionPlanStatusDto['status'] => {
  if (!status) {
    return DEFAULT_STATUS;
  }

  const upper = status.trim().toUpperCase();
  if (
    upper === 'ACTIVE' ||
    upper === 'SUCCESS' ||
    upper === 'FAILED' ||
    upper === 'PAUSED' ||
    upper === 'STOPPED'
  ) {
    return upper;
  }

  return DEFAULT_STATUS;
};

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

const toResource = (code: string | null | undefined): ResourceDto | undefined => {
  const normalized = trimString(code ?? undefined);
  return normalized ? ({ code: normalized } as ResourceDto) : undefined;
};

const mapDtoToDetail = (dto: DunningCollectionPlanStatusDto): DunningCollectionPlanStatusDetail => ({
  id: dto.id ?? undefined,
  code: normalizeCode(dto.code ?? undefined),
  status: normalizeStatus(dto.status ?? undefined),
  description: trimString(dto.description ?? undefined) ?? '',
  colorCode: trimString(dto.colorCode ?? undefined),
  dunningSettingsCode: trimString(dto.dunningSettings?.code ?? undefined),
});

const mapFormToDto = (
  values: DunningCollectionPlanStatusFormValues,
): DunningCollectionPlanStatusDto => {
  const colorCode = trimString(values.colorCode ?? undefined);

  return {
    id: values.id,
    code: values.code.trim(),
    status: normalizeStatus(values.status),
    description: values.description.trim(),
    ...(colorCode ? { colorCode } : {}),
    dunningSettings: toResource(values.dunningSettingsCode ?? undefined),
  } satisfies DunningCollectionPlanStatusDto;
};

const mapFormToDetail = (
  values: DunningCollectionPlanStatusFormValues,
): DunningCollectionPlanStatusDetail => ({
  id: values.id,
  code: values.code.trim(),
  status: normalizeStatus(values.status),
  description: values.description.trim(),
  colorCode: trimString(values.colorCode ?? undefined),
  dunningSettingsCode: trimString(values.dunningSettingsCode ?? undefined),
});

const isActionStatus = (value: unknown): value is ActionStatus =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'status' in (value as Record<string, unknown>) &&
      typeof (value as Record<string, unknown>).status === 'string' &&
      !('code' in (value as Record<string, unknown>)),
  );

const extractCollectionPlanStatus = (
  payload: unknown,
): DunningCollectionPlanStatusDto | undefined => {
  if (!payload) {
    return undefined;
  }

  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current) {
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

    if (typeof current !== 'object') {
      continue;
    }

    const container = current as DunningCollectionPlanStatusResponseDto;

    if (isActionStatus(container)) {
      assertActionSuccess(container, ACTION_STATUS_ERROR_MESSAGE);
      continue;
    }

    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, ACTION_STATUS_ERROR_MESSAGE);
    }

    if ('code' in container && typeof container.code === 'string') {
      return container as DunningCollectionPlanStatusDto;
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
        // @ts-expect-error — best effort extraction
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

    const container = data as DunningCollectionPlanStatusResponseDto;
    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, fallbackMessage);
    }
  }

  return data;
};

const processMutationResult = (
  result: { data?: unknown; error?: unknown },
  fallbackValues: DunningCollectionPlanStatusFormValues,
  fallbackMessage: string,
): DunningCollectionPlanStatusDetail => {
  const data = unwrapMutationResponse(result, fallbackMessage);
  const dto = extractCollectionPlanStatus(data);
  return dto ? mapDtoToDetail(dto) : mapFormToDetail(fallbackValues);
};

const useInvalidateCollectionPlanStatusQueries = () => {
  const queryClient = useQueryClient();

  return (id: number | null, code?: string | null | undefined) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.collectionPlanStatuses.root });
    queryClient.invalidateQueries({ queryKey: queryKeys.collectionPlanStatuses.list() });

    if (id !== null) {
      queryClient.invalidateQueries({ queryKey: queryKeys.collectionPlanStatuses.detail(id) });
    }

    const normalizedCode = normalizeCode(code ?? undefined);
    if (normalizedCode) {
      queryClient.invalidateQueries({
        queryKey: queryKeys.collectionPlanStatuses.detailByCode(normalizedCode),
      });
    }
  };
};

export const __internals = {
  DEFAULT_STATUS,
  trimString,
  normalizeCode,
  normalizeStatus,
  normalizeId,
  toResource,
  mapDtoToDetail,
  mapFormToDto,
  mapFormToDetail,
  extractCollectionPlanStatus,
  unwrapMutationResponse,
  processMutationResult,
};

export const useCollectionPlanStatusMutations = () => {
  const invalidate = useInvalidateCollectionPlanStatusQueries();

  const create = useMutation({
    mutationFn: async (values: DunningCollectionPlanStatusFormValues) => {
      const apiClient = getApiClient();
      const body = mapFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlanStatus' as never,
        { body } as never,
      );

      return processMutationResult(
        { data: result.data as unknown, error: result.error },
        values,
        CREATE_ERROR_MESSAGE,
      );
    },
    onSuccess: (data, variables) => {
      const id = normalizeId(data?.id ?? variables.id ?? null);
      invalidate(id, data?.code ?? variables.code);
    },
  });

  const update = useMutation({
    mutationFn: async (values: DunningCollectionPlanStatusFormValues) => {
      const apiClient = getApiClient();
      const id = normalizeId(values.id ?? null);

      if (id === null) {
        throw new Error('Identifier is required to update a collection plan status');
      }

      const body = mapFormToDto(values);
      const result = await apiClient.PUT(
        '/api/rest/v2/dunning/collectionPlanStatus/{id}' as never,
        { params: { path: { id } }, body } as never,
      );

      return processMutationResult(
        { data: result.data as unknown, error: result.error },
        values,
        UPDATE_ERROR_MESSAGE,
      );
    },
    onSuccess: (data, variables) => {
      const id = normalizeId(data?.id ?? variables.id ?? null);
      invalidate(id, data?.code ?? variables.code);
    },
  });

  const remove = useMutation({
    mutationFn: async (variables: { id: number | string | null | undefined; code?: string | null | undefined }) => {
      const apiClient = getApiClient();
      const id = normalizeId(variables.id ?? null);

      if (id === null) {
        throw new Error('Identifier is required to delete a collection plan status');
      }

      const result = await apiClient.DELETE(
        '/api/rest/v2/dunning/collectionPlanStatus/{id}' as never,
        { params: { path: { id } } } as never,
      );

      const data = unwrapMutationResponse(
        { data: result.data as unknown, error: result.error },
        DELETE_ERROR_MESSAGE,
      );
      const dto = extractCollectionPlanStatus(data);
      const fallbackCode = normalizeCode(variables.code ?? undefined);
      return {
        id,
        ...(dto?.code ? { code: dto.code } : fallbackCode ? { code: fallbackCode } : {}),
      } satisfies DunningCollectionPlanStatusDeletePayload;
    },
    onSuccess: (payload, variables) => {
      const id = normalizeId(payload?.id ?? variables.id ?? null);
      const fallbackCode = normalizeCode(variables.code ?? undefined);
      const code = payload?.code ?? (fallbackCode ? fallbackCode : undefined);
      invalidate(id, code);
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
