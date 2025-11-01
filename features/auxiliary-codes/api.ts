import { useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import type { ActionStatus } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { AuxiliaryAccountDetail, AuxiliaryAccountDto } from '@/features/auxiliary-codes/types';

const LOAD_ERROR_MESSAGE = 'Unable to load auxiliary account information';
const ACTION_STATUS_ERROR_MESSAGE = 'Auxiliary account endpoint returned an error';

const normalizeString = (value: unknown): string | undefined => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) ? String(value) : undefined;
  }

  return undefined;
};

const extractAuxiliaryAccount = (payload: unknown): AuxiliaryAccountDto | undefined => {
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

    const container = current as Record<string, unknown>;

    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus as ActionStatus | undefined, ACTION_STATUS_ERROR_MESSAGE);
    }

    if ('auxiliaryAccountCode' in container || 'auxiliaryAccountLabel' in container) {
      return {
        customerAccountCode: container.customerAccountCode as string | null | undefined,
        auxiliaryAccountCode: container.auxiliaryAccountCode as string | null | undefined,
        auxiliaryAccountLabel: container.auxiliaryAccountLabel as string | null | undefined,
      } satisfies AuxiliaryAccountDto;
    }

    if ('auxiliaryAccount' in container && container.auxiliaryAccount) {
      queue.push(container.auxiliaryAccount);
    }

    queue.push(...Object.values(container));
  }

  return undefined;
};

const mapDtoToDetail = (
  dto: AuxiliaryAccountDto | undefined,
  fallbackCustomerAccountCode: string,
): AuxiliaryAccountDetail => {
  const customerAccountCode = normalizeString(dto?.customerAccountCode) ?? fallbackCustomerAccountCode;
  const auxiliaryAccountCode = normalizeString(dto?.auxiliaryAccountCode);
  const auxiliaryAccountLabel = normalizeString(dto?.auxiliaryAccountLabel);

  return {
    customerAccountCode,
    ...(auxiliaryAccountCode ? { auxiliaryAccountCode } : {}),
    ...(auxiliaryAccountLabel ? { auxiliaryAccountLabel } : {}),
  } satisfies AuxiliaryAccountDetail;
};

export const __internals = {
  normalizeString,
  extractAuxiliaryAccount,
  mapDtoToDetail,
};

export const useAuxiliaryAccount = (customerAccountCode: string | null | undefined) => {
  const sanitizedCode = normalizeString(customerAccountCode) ?? '';
  const hasCustomerAccount = sanitizedCode.length > 0;
  const queryKey = queryKeys.auxiliaryCodes.detail(hasCustomerAccount ? sanitizedCode : '__empty__');

  return useQuery<AuxiliaryAccountDetail>({
    queryKey,
    enabled: hasCustomerAccount,
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/accounting/auxiliaryAccounts/{customerAccountCode}' as never,
        {
          params: { path: { customerAccountCode: sanitizedCode } },
        } as never,
      );

      const payload = unwrapResponse<unknown>(
        {
          data: (result.data ?? null) as unknown,
          error: result.error,
        },
        LOAD_ERROR_MESSAGE,
      );

      const dto = extractAuxiliaryAccount(payload);
      return mapDtoToDetail(dto, sanitizedCode);
    },
    staleTime: 60_000,
  });
};
