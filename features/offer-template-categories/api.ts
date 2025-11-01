import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { offerTemplateCategoryFormSchema } from '@/features/offer-template-categories/schema';
import type {
  ActionStatus,
  GetOfferTemplateCategoryResponseDto,
  OfferTemplateCategoriesResponseDto,
  OfferTemplateCategoryDto,
  OfferTemplateCategoryFormValues,
  OfferTemplateCategoryListItem,
  OfferTemplateCategoryListParams,
} from '@/features/offer-template-categories/types';

const mapDtoToListItem = (
  dto: OfferTemplateCategoryDto | null | undefined,
): OfferTemplateCategoryListItem | null => {
  if (!dto) {
    return null;
  }
  return {
    code: dto.code,
    name: dto.name ?? undefined,
    description: dto.description ?? undefined,
    active: dto.active ?? undefined,
    disabled: dto.disabled ?? undefined,
  };
};

const adaptList = (
  payload: OfferTemplateCategoriesResponseDto | null | undefined,
): OfferTemplateCategoryListItem[] => {
  const items = payload?.offerTemplateCategories ?? [];
  return items
    .map((item) => mapDtoToListItem(item))
    .filter((item): item is OfferTemplateCategoryListItem => Boolean(item));
};

const mapDtoToForm = (dto: OfferTemplateCategoryDto): OfferTemplateCategoryFormValues => ({
  code: dto.code,
  name: dto.name ?? '',
  description: dto.description ?? '',
  parentId: dto.parentId != null ? String(dto.parentId) : '',
  active: dto.active ?? false,
  disabled: dto.disabled ?? false,
});

const parseParentId = (value?: string) => {
  if (!value) {
    return undefined;
  }
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const mapFormToDto = (values: OfferTemplateCategoryFormValues): OfferTemplateCategoryDto => ({
  code: values.code,
  name: values.name,
  description: values.description,
  parentId: parseParentId(values.parentId),
  active: values.active ?? false,
  disabled: values.disabled ?? false,
});

export const useOfferTemplateCategories = (params?: OfferTemplateCategoryListParams) =>
  useQuery({
    queryKey: queryKeys.offerTemplateCategories.list(params ?? {}),
    queryFn: async () => {
      if (!params?.query) {
        return [] as OfferTemplateCategoryListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/offerTemplateCategory', {
        params: { query: { offerTemplateCategoryCode: params.query } },
      });
      const payload = unwrapResponse<GetOfferTemplateCategoryResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load offer template category',
      );
      assertActionSuccess(payload?.actionStatus, 'Offer template category request failed');
      const listItem = mapDtoToListItem(payload?.offerTemplateCategory);
      return listItem ? [listItem] : [];
    },
  });

export const useOfferTemplateCategoryListAll = () =>
  useQuery({
    queryKey: queryKeys.offerTemplateCategories.listAll(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/offerTemplateCategory/listGetAll');
      const payload = unwrapResponse<OfferTemplateCategoriesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load offer template categories',
      );
      assertActionSuccess(payload?.actionStatus, 'Offer template category list request failed');
      return adaptList(payload);
    },
  });

export const useOfferTemplateCategory = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.offerTemplateCategories.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as OfferTemplateCategoryFormValues | null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/offerTemplateCategory', {
        params: { query: { offerTemplateCategoryCode: code } },
      });
      const payload = unwrapResponse<GetOfferTemplateCategoryResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load offer template category detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Offer template category detail failed');
      if (!payload?.offerTemplateCategory) {
        return null;
      }
      const parsed = offerTemplateCategoryFormSchema.safeParse(mapDtoToForm(payload.offerTemplateCategory));
      return parsed.success ? parsed.data : mapDtoToForm(payload.offerTemplateCategory);
    },
  });

export const useOfferTemplateCategoryMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.offerTemplateCategories.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.offerTemplateCategories.listAll() });
    queryClient.invalidateQueries({ queryKey: queryKeys.offerTemplateCategories.version() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.offerTemplateCategories.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: OfferTemplateCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/offerTemplateCategory', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create offer template category',
      );
      assertActionSuccess(payload, 'Offer template category creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: OfferTemplateCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/offerTemplateCategory', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update offer template category',
      );
      assertActionSuccess(payload, 'Offer template category update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: OfferTemplateCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/offerTemplateCategory/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update offer template category',
      );
      assertActionSuccess(payload, 'Offer template category createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/catalog/offerTemplateCategory', {
        params: { query: { offerTemplateCategoryCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete offer template category',
      );
      assertActionSuccess(payload, 'Offer template category deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/offerTemplateCategory/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to enable offer template category',
      );
      assertActionSuccess(payload, 'Offer template category enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/offerTemplateCategory/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to disable offer template category',
      );
      assertActionSuccess(payload, 'Offer template category disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, remove, enable, disable }),
    [create, createOrUpdate, disable, enable, remove, update],
  );
};

export const useOfferTemplateCategoryVersion = () =>
  useQuery({
    queryKey: queryKeys.offerTemplateCategories.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/offerTemplateCategory/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load offer template category version',
      );
      assertActionSuccess(payload, 'Offer template category version request failed');
      return payload.message ?? '';
    },
  });
