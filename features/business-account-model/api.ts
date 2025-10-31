import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  BusinessAccountModelDto,
  BusinessAccountModelFormValues,
  BusinessAccountModelListItem,
  BusinessAccountModelResponseDto,
  MeveoModuleDtosResponse,
  ParentEntityListItem,
  ParentListResponse,
} from '@/features/business-account-model/types';

export const DEFAULT_BUSINESS_ACCOUNT_MODELS_PAGE_SIZE = 20;

const adaptList = (payload: MeveoModuleDtosResponse | null | undefined): BusinessAccountModelListItem[] =>
  payload?.modules?.map((module) => ({
    code: module?.code ?? '',
    description: module?.description ?? undefined,
    hierarchyType: module?.script?.scriptInstanceCategoryCode ?? undefined,
    license: module?.license ?? undefined,
    disabled: module?.disabled ?? undefined,
  })) ?? [];

const mapDtoToForm = (dto: BusinessAccountModelDto): BusinessAccountModelFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  hierarchyType: dto.hierarchyType ?? undefined,
  license: dto.license ?? undefined,
  disabled: dto.disabled ?? undefined,
});

const mapFormToDto = (values: BusinessAccountModelFormValues): BusinessAccountModelDto => ({
  code: values.code,
  description: values.description,
  hierarchyType: values.hierarchyType,
  license: values.license,
  disabled: values.disabled,
  moduleItems: [],
  script: undefined,
  codeOnly: false,
  transient: false,
});

const adaptParents = (payload: ParentListResponse | null | undefined): ParentEntityListItem[] =>
  payload?.parents?.parent?.map((parent) => ({
    code: parent?.code ?? '',
    description: parent?.description ?? undefined,
  })) ?? [];

export const useBusinessAccountModels = () =>
  useQuery({
    queryKey: queryKeys.businessAccountModels.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/businessAccountModel/listGetAll');
      const payload = unwrapResponse<MeveoModuleDtosResponse>(
        { data: result.data, error: result.error },
        'Unable to load business account models',
      );
      assertActionSuccess(payload?.actionStatus, 'Business account models request failed');
      return adaptList(payload);
    },
  });

export const useBusinessAccountModel = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.businessAccountModels.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/businessAccountModel', {
        params: { query: { businessAccountModelCode: code } },
      });
      const payload = unwrapResponse<BusinessAccountModelResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load business account model',
      );
      assertActionSuccess(payload?.actionStatus, 'Business account model request failed');
      return payload?.businessAccountModel ? mapDtoToForm(payload.businessAccountModel) : null;
    },
  });

export const useBusinessAccountModelVersion = () =>
  useQuery({
    queryKey: queryKeys.businessAccountModels.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/businessAccountModel/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load business account model version',
      );
      assertActionSuccess(payload, 'Business account model version request failed');
      return payload.message ?? '';
    },
  });

export const useBusinessAccountModelParents = () =>
  useMutation({
    mutationFn: async (params: { accountTypeCode: string; searchTerm?: string; limit?: number }) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/account/businessAccountModel/findParents', {
        body: {
          accountTypeCode: params.accountTypeCode,
          searchTerm: params.searchTerm,
          limit: params.limit,
        },
      });
      const payload = unwrapResponse<ParentListResponse>(
        { data: result.data, error: result.error },
        'Unable to load parent entities',
      );
      assertActionSuccess(payload?.actionStatus, 'Parent entities request failed');
      return adaptParents(payload);
    },
  });

export const useBusinessAccountModelMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.businessAccountModels.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.businessAccountModels.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: BusinessAccountModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/businessAccountModel', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Business account model creation failed',
      );
      assertActionSuccess(payload, 'Business account model creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: BusinessAccountModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/account/businessAccountModel', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Business account model update failed',
      );
      assertActionSuccess(payload, 'Business account model update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/account/businessAccountModel/{businessAccountModelCode}', {
        params: { path: { businessAccountModelCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Business account model deletion failed',
      );
      assertActionSuccess(payload, 'Business account model deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const install = useMutation({
    mutationFn: async (values: BusinessAccountModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/account/businessAccountModel/install', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Business account model install failed',
      );
      assertActionSuccess(payload, 'Business account model install failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return useMemo(
    () => ({ create, update, remove, install }),
    [create, install, remove, update],
  );
};
