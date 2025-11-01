import { useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { AllowedParentDto, AllowedParentListItem } from '@/features/allowed-parents/types';

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

const normalizeNumber = (value: unknown): number | undefined => {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : undefined;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return undefined;
    }
    const parsed = Number(trimmed);
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
};

const extractAllowedParentsArray = (payload: unknown): AllowedParentDto[] => {
  if (Array.isArray(payload)) {
    return payload as AllowedParentDto[];
  }

  if (payload && typeof payload === 'object') {
    const container = payload as Record<string, unknown>;
    const candidates = [
      container.allowedParents,
      container.parents,
      container.data,
      container.items,
    ];
    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate as AllowedParentDto[];
      }
    }
  }

  return [];
};

const mapDtoToListItem = (dto: AllowedParentDto, index: number): AllowedParentListItem => {
  const parentId =
    normalizeNumber(dto.parentId) ??
    normalizeNumber(dto.id) ??
    normalizeNumber(dto.userAccount?.id ?? undefined) ??
    normalizeNumber(dto.customerAccount?.id ?? undefined);

  const code =
    normalizeString(dto.parentCode) ??
    normalizeString(dto.code) ??
    normalizeString(dto.userAccountCode) ??
    normalizeString(dto.userAccount?.code ?? undefined) ??
    normalizeString(dto.customerAccount?.code ?? undefined) ??
    `allowed-parent-${index + 1}`;

  const description =
    normalizeString(dto.parentDescription) ??
    normalizeString(dto.description) ??
    normalizeString(dto.userAccountDescription) ??
    normalizeString(dto.userAccount?.description ?? undefined) ??
    normalizeString(dto.customerAccount?.description ?? undefined);

  const customerAccountCode =
    normalizeString(dto.customerAccountCode) ??
    normalizeString(dto.customerAccount?.code ?? undefined);

  const customerAccountDescription =
    normalizeString(dto.customerAccountDescription) ??
    normalizeString(dto.customerAccount?.description ?? undefined);

  return {
    id: parentId !== undefined ? String(parentId) : code,
    code,
    description,
    parentId: parentId ?? undefined,
    customerAccountCode: customerAccountCode ?? undefined,
    customerAccountDescription: customerAccountDescription ?? undefined,
  };
};

const adaptAllowedParents = (payload: unknown): AllowedParentListItem[] => {
  const entries = extractAllowedParentsArray(payload);
  const seen = new Set<string>();

  return entries
    .map((entry, index) => mapDtoToListItem(entry ?? {}, index))
    .filter((item) => {
      const key = `${item.id}::${item.code}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
};

export const __internals = {
  normalizeString,
  normalizeNumber,
  extractAllowedParentsArray,
  mapDtoToListItem,
  adaptAllowedParents,
};

export const useAllowedParents = (userAccountCode: string | null | undefined) => {
  const sanitizedCode = normalizeString(userAccountCode) ?? '';
  const queryKey = sanitizedCode
    ? queryKeys.allowedParents.list(sanitizedCode)
    : queryKeys.allowedParents.list();

  return useQuery<AllowedParentListItem[]>({
    queryKey,
    enabled: sanitizedCode.length > 0,
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/accounts/userAccounts/{userAccountCode}/allowedParents' as never,
        {
          params: { path: { userAccountCode: sanitizedCode } },
        } as never,
      );

      const payload = unwrapResponse<unknown>(
        {
          data: (result.data ?? []) as unknown,
          error: result.error,
        },
        'Unable to load allowed parent user accounts',
      );

      return adaptAllowedParents(payload);
    },
    staleTime: 60_000,
  });
};
