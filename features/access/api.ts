import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
export const DEFAULT_ACCESS_PAGE_SIZE = 20;

import type {
  AccessDetailParams,
  AccessDto,
  AccessFormValues,
  AccessIdentifier,
  AccessListItem,
  AccessesResponseDto,
  GetAccessResponseDto,
} from '@/features/access/types';

const adaptAccessList = (payload: AccessesResponseDto | null | undefined): AccessListItem[] =>
  payload?.accesses?.access?.map((item) => ({
    code: item?.code ?? '',
    subscription: item?.subscription ?? '',
    startDate: item?.startDate ?? undefined,
    endDate: item?.endDate ?? undefined,
    disabled: item?.disabled ?? undefined,
  })) ?? [];

const mapDtoToForm = (dto: AccessDto): AccessFormValues => ({
  code: dto.code ?? '',
  subscription: dto.subscription ?? '',
  subscriptionValidityDate: dto.subscriptionValidityDate ?? undefined,
  startDate: dto.startDate ?? undefined,
  endDate: dto.endDate ?? undefined,
  usageDate: dto.usageDate ?? undefined,
  disabled: dto.disabled ?? undefined,
});

const mapFormToDto = (values: AccessFormValues): AccessDto => ({
  code: values.code,
  subscription: values.subscription,
  subscriptionValidityDate: values.subscriptionValidityDate,
  startDate: values.startDate,
  endDate: values.endDate,
  usageDate: values.usageDate,
  disabled: values.disabled,
  customFields: undefined,
});

const toPathParams = (identifier: AccessIdentifier) => {
  if (!identifier.startDate || !identifier.endDate) {
    throw new Error('Access period is required for this operation');
  }
  return {
    accessCode: identifier.code,
    subscriptionCode: identifier.subscription,
    startDate: identifier.startDate,
    endDate: identifier.endDate,
  } as const;
};

export const useAccesses = (filters?: { subscriptionCode?: string | null }) => {
  const queryFilters = filters?.subscriptionCode ? { subscriptionCode: filters.subscriptionCode } : undefined;

  return useQuery({
    queryKey: queryKeys.access.list(queryFilters),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/access/list', {
        params: {
          query: queryFilters,
        },
      });
      const payload = unwrapResponse<AccessesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load access list',
      );
      assertActionSuccess(payload?.actionStatus, 'Access list request failed');
      return adaptAccessList(payload);
    },
  });
};

export const useAccessDetail = (params: AccessDetailParams | null) => {
  const queryKeyParams = useMemo(
    () => ({ accessCode: params?.accessCode ?? 'unknown', subscriptionCode: params?.subscriptionCode ?? null }),
    [params?.accessCode, params?.subscriptionCode],
  );

  return useQuery({
    queryKey: queryKeys.access.detail(queryKeyParams),
    enabled: Boolean(params?.accessCode),
    queryFn: async () => {
      if (!params?.accessCode) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/access', {
        params: {
          query: {
            accessCode: params.accessCode,
            subscriptionCode: params.subscriptionCode ?? undefined,
          },
        },
      });
      const payload = unwrapResponse<GetAccessResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load access detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Access detail request failed');
      return payload?.access ? mapDtoToForm(payload.access) : null;
    },
  });
};

export const useAccessVersion = () =>
  useQuery({
    queryKey: queryKeys.access.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/access/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load access service version',
      );
      assertActionSuccess(payload, 'Access version request failed');
      return payload.message ?? '';
    },
  });

export const useAccessMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (identifier?: AccessIdentifier) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.access.list() });
    if (identifier) {
      queryClient.invalidateQueries({
        queryKey: queryKeys.access.detail({
          accessCode: identifier.code,
          subscriptionCode: identifier.subscription,
        }),
      });
    }
  };

  const create = useMutation({
    mutationFn: async (values: AccessFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/access', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Access creation failed',
      );
      assertActionSuccess(payload, 'Access creation failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  const update = useMutation({
    mutationFn: async (values: AccessFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/account/access', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Access update failed',
      );
      assertActionSuccess(payload, 'Access update failed');
      return payload;
    },
    onSuccess: (_data, variables) =>
      invalidate({ code: variables.code, subscription: variables.subscription, startDate: variables.startDate, endDate: variables.endDate }),
  });

  const upsert = useMutation({
    mutationFn: async (values: AccessFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/access/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Access upsert failed',
      );
      assertActionSuccess(payload, 'Access upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) =>
      invalidate({ code: variables.code, subscription: variables.subscription, startDate: variables.startDate, endDate: variables.endDate }),
  });

  const remove = useMutation({
    mutationFn: async (identifier: AccessIdentifier) => {
      const apiClient = getApiClient();
      const params = toPathParams(identifier);
      const result = await apiClient.DELETE(
        '/api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}',
        {
          params: { path: params },
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Access delete failed',
      );
      assertActionSuccess(payload, 'Access delete failed');
      return payload;
    },
    onSuccess: (_data, identifier) => invalidate(identifier),
  });

  const disable = useMutation({
    mutationFn: async (identifier: AccessIdentifier) => {
      const apiClient = getApiClient();
      const params = toPathParams(identifier);
      const result = await apiClient.POST(
        '/api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}/disable',
        {
          params: { path: params },
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Access disable failed',
      );
      assertActionSuccess(payload, 'Access disable failed');
      return payload;
    },
    onSuccess: (_data, identifier) => invalidate(identifier),
  });

  const enable = useMutation({
    mutationFn: async (identifier: AccessIdentifier) => {
      const apiClient = getApiClient();
      const params = toPathParams(identifier);
      const result = await apiClient.POST(
        '/api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}/enable',
        {
          params: { path: params },
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Access enable failed',
      );
      assertActionSuccess(payload, 'Access enable failed');
      return payload;
    },
    onSuccess: (_data, identifier) => invalidate(identifier),
  });

  return useMemo(
    () => ({ create, update, upsert, remove, enable, disable }),
    [create, disable, enable, remove, update, upsert],
  );
};
