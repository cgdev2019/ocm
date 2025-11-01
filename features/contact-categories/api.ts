import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse, type ActionStatus } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { contactCategoryFormSchema } from '@/features/contact-categories/schema';
import type {
  ContactCategoryDetail,
  ContactCategoryDto,
  ContactCategoryFormValues,
  ContactCategoryListParams,
  ContactCategoryListResponse,
  ContactCategoryListResult,
  GenericPagingRequest,
} from '@/features/contact-categories/types';

export const DEFAULT_CONTACT_CATEGORIES_PAGE_SIZE = 50;

const ENTITY_NAME = 'ContactCategory';
const GENERIC_FIELDS = ['code', 'description', 'id'] as const;
const DEFAULT_SORT_FIELD = 'auditable.created';
const DEFAULT_SORT_ORDER: GenericPagingRequest['sortOrder'] = 'DESCENDING';

const trimString = (value: unknown): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeCode = (code: unknown): string => trimString(code) ?? '';

const ensureCode = (code: string | null | undefined, message: string): string => {
  const normalized = normalizeCode(code);
  if (!normalized) {
    throw new Error(message);
  }
  return normalized;
};

const buildListRequest = (params: ContactCategoryListParams): GenericPagingRequest => {
  const page = Number.isFinite(params.page) && params.page > 0 ? Math.floor(params.page) : 0;
  const pageSize = Number.isFinite(params.pageSize) && params.pageSize > 0
    ? Math.floor(params.pageSize)
    : DEFAULT_CONTACT_CATEGORIES_PAGE_SIZE;

  const filters: Record<string, unknown> = {};
  const search = trimString(params.search ?? undefined);
  if (search) {
    const normalizedSearch = search.toLowerCase();
    filters.code = normalizedSearch;
    filters.description = normalizedSearch;
  }

  const request: GenericPagingRequest = {
    limit: pageSize,
    offset: page * pageSize,
    genericFields: [...GENERIC_FIELDS],
    sortBy: DEFAULT_SORT_FIELD,
    sortOrder: DEFAULT_SORT_ORDER,
  };

  if (Object.keys(filters).length > 0) {
    request.filters = filters;
  }

  return request;
};

const buildDetailRequest = (code: string): GenericPagingRequest => ({
  limit: 1,
  offset: 0,
  genericFields: [...GENERIC_FIELDS],
  filters: { code },
});

const collectDtos = (
  payload: ContactCategoryListResponse | null | undefined,
): ContactCategoryDto[] => {
  if (!payload) {
    return [];
  }

  const candidates = [
    payload.data,
    payload.results,
    payload.list,
    payload.contactCategories,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate) && candidate.length > 0) {
      return candidate.filter((item): item is ContactCategoryDto => Boolean(item));
    }
  }

  return [];
};

const extractTotalRecords = (
  payload: ContactCategoryListResponse | null | undefined,
  fallback: number,
): number => {
  if (!payload) {
    return fallback;
  }

  const pagingTotal = payload.paging?.totalNumberOfRecords;
  if (typeof pagingTotal === 'number' && pagingTotal >= 0) {
    return pagingTotal;
  }

  if (typeof payload.totalNumberOfRecords === 'number' && payload.totalNumberOfRecords >= 0) {
    return payload.totalNumberOfRecords;
  }

  return fallback;
};

const mapDtoToListItem = (
  dto: ContactCategoryDto,
  fallbackIndex: number,
): ContactCategoryListResult['items'][number] => {
  const code = normalizeCode(dto.code);
  const description = trimString(dto.description ?? undefined);
  const id = typeof dto.id === 'number' && Number.isFinite(dto.id) ? dto.id : undefined;

  const resolvedCode = code || `__contact-category-${fallbackIndex}`;

  return {
    code: resolvedCode,
    ...(description ? { description } : {}),
    ...(typeof id === 'number' ? { id } : {}),
  } satisfies ContactCategoryListResult['items'][number];
};

const mapDtoToDetail = (dto: ContactCategoryDto): ContactCategoryDetail => {
  const code = normalizeCode(dto.code);
  const description = trimString(dto.description ?? undefined);
  const id = typeof dto.id === 'number' && Number.isFinite(dto.id) ? dto.id : undefined;

  const base: ContactCategoryFormValues = {
    code,
    ...(description ? { description } : {}),
    ...(id !== undefined ? { id } : {}),
  };

  const parsed = contactCategoryFormSchema.safeParse(base);
  return parsed.success ? parsed.data : base;
};

const mapFormToDto = (values: ContactCategoryFormValues): ContactCategoryDto => {
  const description = trimString(values.description ?? undefined);
  return {
    code: values.code.trim(),
    ...(description ? { description } : {}),
    ...(typeof values.id === 'number' ? { id: values.id } : {}),
  } satisfies ContactCategoryDto;
};

const resolveActionStatus = (value: unknown): ActionStatus | undefined => {
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  if ('status' in value && typeof (value as ActionStatus).status === 'string') {
    return value as ActionStatus;
  }

  if ('actionStatus' in value) {
    const nested = (value as { actionStatus?: ActionStatus | null }).actionStatus ?? undefined;
    if (nested) {
      return nested;
    }
  }

  return undefined;
};

export const __internals = {
  buildListRequest,
  buildDetailRequest,
  collectDtos,
  extractTotalRecords,
  mapDtoToListItem,
  mapDtoToDetail,
  mapFormToDto,
  normalizeCode,
  trimString,
  resolveActionStatus,
};

export const useContactCategories = (params: ContactCategoryListParams) =>
  useQuery<ContactCategoryListResult>({
    queryKey: queryKeys.contactCategories.list({
      page: params.page,
      pageSize: params.pageSize,
      search: trimString(params.search ?? undefined) ?? null,
    }),
    queryFn: async () => {
      const apiClient = getApiClient();
      const body = buildListRequest(params);
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );

      const payload = unwrapResponse<ContactCategoryListResponse | null>(
        {
          data: (result.data ?? null) as ContactCategoryListResponse | null,
          error: result.error,
        },
        'Unable to load contact categories',
      );

      const actionStatus = resolveActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to load contact categories');

      const dtos = collectDtos(payload);
      const offset = body.offset ?? 0;
      const items = dtos.map((dto, index) => mapDtoToListItem(dto, offset + index));
      const totalRecords = extractTotalRecords(payload, items.length);

      return {
        items,
        paging: { totalRecords },
      } satisfies ContactCategoryListResult;
    },
    keepPreviousData: true,
  });

export const useContactCategory = (code: string | null | undefined) =>
  useQuery<ContactCategoryDetail | null>({
    queryKey: queryKeys.contactCategories.detail(normalizeCode(code)),
    enabled: Boolean(normalizeCode(code)),
    queryFn: async () => {
      const sanitizedCode = ensureCode(code, 'Contact category code is required');
      const apiClient = getApiClient();
      const body = buildDetailRequest(sanitizedCode);
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );

      const payload = unwrapResponse<ContactCategoryListResponse | null>(
        {
          data: (result.data ?? null) as ContactCategoryListResponse | null,
          error: result.error,
        },
        'Unable to load contact category',
      );

      const actionStatus = resolveActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to load contact category');

      const dto = collectDtos(payload)[0];
      return dto ? mapDtoToDetail(dto) : null;
    },
    staleTime: 60_000,
  });

export const useContactCategoryMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.contactCategories.root });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.contactCategories.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: ContactCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/account/contactCategory' as never,
        { body: dto } as never,
      );

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        'Unable to create contact category',
      );

      const status = resolveActionStatus(payload);
      assertActionSuccess(status, 'Unable to create contact category');
      invalidate(values.code.trim());
      return payload;
    },
  });

  const update = useMutation({
    mutationFn: async (values: ContactCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const code = ensureCode(values.code, 'Contact category code is required for update');
      const result = await apiClient.PUT(
        '/api/rest/v2/account/contactCategory/{contactCategoryCode}' as never,
        {
          params: { path: { contactCategoryCode: code } },
          body: dto,
        } as never,
      );

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        'Unable to update contact category',
      );

      const status = resolveActionStatus(payload);
      assertActionSuccess(status, 'Unable to update contact category');
      invalidate(code);
      return payload;
    },
  });

  const remove = useMutation({
    mutationFn: async (rawCode: string) => {
      const code = ensureCode(rawCode, 'Contact category code is required for deletion');
      const apiClient = getApiClient();
      const result = await apiClient.DELETE(
        '/api/rest/v2/account/contactCategory/{contactCategoryCode}' as never,
        {
          params: { path: { contactCategoryCode: code } },
        } as never,
      );

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        'Unable to delete contact category',
      );

      const status = resolveActionStatus(payload);
      assertActionSuccess(status, 'Unable to delete contact category');
      invalidate(code);
      return payload;
    },
  });

  return useMemo(() => ({ create, update, remove }), [create, remove, update]);
};
