import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  BusinessOfferModelDto,
  BusinessOfferModelFormValues,
  BusinessOfferModelListItem,
  BusinessOfferModelListParams,
  GetBusinessOfferModelResponseDto,
  MeveoModuleDtosResponse,
  PagingAndFiltering,
} from '@/features/business-offer-models/types';

const adaptList = (payload: MeveoModuleDtosResponse | null | undefined): BusinessOfferModelListItem[] =>
  payload?.modules?.map((module) => ({
    code: module?.code ?? '',
    description: module?.description ?? undefined,
    license: module?.license as BusinessOfferModelDto['license'] | undefined,
    disabled: module?.disabled ?? undefined,
  })) ?? [];

const mapDtoToForm = (dto: BusinessOfferModelDto): BusinessOfferModelFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  disabled: dto.disabled ?? undefined,
  license: dto.license ?? undefined,
  offerTemplateCode: dto.offerTemplate?.code ?? '',
});

const mapFormToDto = (values: BusinessOfferModelFormValues): BusinessOfferModelDto => ({
  code: values.code,
  description: values.description,
  disabled: values.disabled,
  license: values.license,
  offerTemplate: { code: values.offerTemplateCode } as BusinessOfferModelDto['offerTemplate'],
  moduleItems: [],
  script: undefined,
  languageDescriptions: [],
  codeOnly: false,
  transient: false,
});

export const useBusinessOfferModels = (params?: BusinessOfferModelListParams) =>
  useQuery({
    queryKey: queryKeys.businessOfferModels.list(params ?? {}),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/businessOfferModel/list', {
        params: { query: params?.query ? { query: params.query } : undefined },
      });
      const payload = unwrapResponse<MeveoModuleDtosResponse>(
        { data: result.data, error: result.error },
        'Unable to load business offer models',
      );
      assertActionSuccess(payload?.actionStatus, 'Business offer models request failed');
      return adaptList(payload);
    },
  });

export const useBusinessOfferModel = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.businessOfferModels.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as BusinessOfferModelFormValues | null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/businessOfferModel', {
        params: { query: { businessOfferModelCode: code } },
      });
      const payload = unwrapResponse<GetBusinessOfferModelResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load business offer model',
      );
      assertActionSuccess(payload?.actionStatus, 'Business offer model request failed');
      return payload?.businessOfferModel ? mapDtoToForm(payload.businessOfferModel) : null;
    },
  });

export const useBusinessOfferModelMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.businessOfferModels.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.businessOfferModels.version() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.businessOfferModels.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: BusinessOfferModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/businessOfferModel', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create business offer model',
      );
      assertActionSuccess(payload, 'Business offer model creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: BusinessOfferModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/businessOfferModel', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update business offer model',
      );
      assertActionSuccess(payload, 'Business offer model update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: BusinessOfferModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/businessOfferModel/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update business offer model',
      );
      assertActionSuccess(payload, 'Business offer model createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const install = useMutation({
    mutationFn: async (values: BusinessOfferModelFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/businessOfferModel/install', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to install business offer model',
      );
      assertActionSuccess(payload, 'Business offer model install failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/catalog/businessOfferModel/{businessOfferModelCode}', {
        params: { path: { businessOfferModelCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete business offer model',
      );
      assertActionSuccess(payload, 'Business offer model deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, install, remove }),
    [create, createOrUpdate, install, remove, update],
  );
};

export const useBusinessOfferModelVersion = () =>
  useQuery({
    queryKey: queryKeys.businessOfferModels.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/businessOfferModel/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load business offer model version',
      );
      assertActionSuccess(payload, 'Business offer model version request failed');
      return payload.message ?? '';
    },
  });
