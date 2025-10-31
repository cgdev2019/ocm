import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  FilterDto,
  FilterFormValues,
  FilterListItem,
  GetFilterResponseDto,
} from '@/features/filter/types';

export const DEFAULT_FILTER_PAGE_SIZE = 20;

const adaptToListItem = (dto: FilterDto): FilterListItem => ({
  code: dto.code,
  description: dto.description ?? undefined,
  entityClass: dto.entityClass ?? undefined,
  shared: dto.shared ?? undefined,
  disabled: dto.disabled ?? undefined,
});

const mapDtoToForm = (dto: FilterDto): FilterFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  entityClass: dto.entityClass ?? undefined,
  inputXml: dto.inputXml ?? undefined,
  pollingQuery: dto.pollingQuery ?? undefined,
  shared: dto.shared ?? undefined,
  disabled: dto.disabled ?? undefined,
});

const mapFormToDto = (values: FilterFormValues): FilterDto => ({
  code: values.code,
  description: values.description,
  entityClass: values.entityClass,
  inputXml: values.inputXml,
  pollingQuery: values.pollingQuery,
  shared: values.shared,
  disabled: values.disabled,
});

const fetchFilter = async (code: string) => {
  const apiClient = getApiClient();
  const result = await apiClient.GET('/api/rest/filter', {
    params: { query: { filterCode: code } },
  });
  const payload = unwrapResponse<GetFilterResponseDto>(
    { data: result.data, error: result.error },
    'Unable to load filter',
  );
  assertActionSuccess(payload.actionStatus, 'Filter retrieval failed');
  return payload.filter ?? null;
};

export const useFilterSearch = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.filters.list(code ?? ''),
    enabled: Boolean(code),
    queryFn: async () => {
      const filter = await fetchFilter(code ?? '');
      return filter ? [adaptToListItem(filter)] : [];
    },
  });

export const useFilter = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.filters.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const filter = await fetchFilter(code ?? '');
      return filter ? mapDtoToForm(filter) : null;
    },
  });

export const useFilterMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.filters.detail(code) });
      queryClient.invalidateQueries({ queryKey: queryKeys.filters.list(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: FilterFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/filter', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Filter creation failed',
      );
      assertActionSuccess(payload, 'Filter creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: FilterFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/filter', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Filter update failed',
      );
      assertActionSuccess(payload, 'Filter update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: FilterFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/filter/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Filter createOrUpdate failed',
      );
      assertActionSuccess(payload, 'Filter createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/filter/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Filter enable failed',
      );
      assertActionSuccess(payload, 'Filter enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/filter/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Filter disable failed',
      );
      assertActionSuccess(payload, 'Filter disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, enable, disable }),
    [create, createOrUpdate, disable, enable, update],
  );
};
