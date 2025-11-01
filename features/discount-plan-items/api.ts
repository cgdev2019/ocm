import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { discountPlanItemFormSchema } from '@/features/discount-plan-items/schema';
import type {
  ActionStatus,
  DiscountPlanItemDto,
  DiscountPlanItemFormValues,
  DiscountPlanItemListItem,
  DiscountPlanItemListParams,
  DiscountPlanItemResponseDto,
  DiscountPlanItemsResponseDto,
} from '@/features/discount-plan-items/types';

const parseTargetAccountingArticleCodes = (value?: string): string[] | undefined => {
  if (!value) {
    return undefined;
  }
  const items = value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  return items.length > 0 ? items : undefined;
};

const adaptSingle = (
  payload: DiscountPlanItemResponseDto | null | undefined,
): DiscountPlanItemListItem[] => {
  const item = payload?.discountPlanItem;
  if (!item) {
    return [];
  }
  return [
    {
      code: item.code ?? '',
      description: item.description ?? undefined,
      discountPlanCode: item.discountPlanCode ?? undefined,
      discountPlanItemType: item.discountPlanItemType ?? undefined,
      discountValue: item.discountValue ?? undefined,
    },
  ];
};

const adaptMany = (
  payload: DiscountPlanItemsResponseDto | null | undefined,
): DiscountPlanItemListItem[] => {
  const items = payload?.discountPlanItems ?? [];
  return items.map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    discountPlanCode: item.discountPlanCode ?? undefined,
    discountPlanItemType: item.discountPlanItemType ?? undefined,
    discountValue: item.discountValue ?? undefined,
  }));
};

const mapDtoToForm = (dto: DiscountPlanItemDto): DiscountPlanItemFormValues => ({
  code: dto.code,
  discountPlanCode: dto.discountPlanCode,
  description: dto.description ?? '',
  invoiceCategoryCode: dto.invoiceCategoryCode ?? '',
  invoiceSubCategoryCode: dto.invoiceSubCategoryCode ?? '',
  discountPlanItemType: dto.discountPlanItemType ?? 'PERCENTAGE',
  discountValue: dto.discountValue != null ? String(dto.discountValue) : '',
  discountValueEL: dto.discountValueEL ?? '',
  expressionEl: dto.expressionEl ?? '',
  allowToNegate: dto.allowToNegate ?? false,
  applyByArticle: dto.applyByArticle ?? false,
  pricePlanMatrixCode: dto.pricePlanMatrixCode ?? '',
  targetAccountingArticleCodes: dto.targetAccountingArticleCodes?.join(', ') ?? '',
  sequence: dto.sequence != null ? String(dto.sequence) : '',
  priority: dto.priority != null ? String(dto.priority) : '',
  accountingArticleCode: dto.accountingArticleCode ?? '',
  lastDiscount: dto.lastDiscount ?? false,
});

const mapFormToDto = (values: DiscountPlanItemFormValues): DiscountPlanItemDto => {
  const discountValue = Number(values.discountValue);
  const sequenceValue = values.sequence ? Number(values.sequence) : undefined;
  const priorityValue = values.priority ? Number(values.priority) : undefined;
  return {
    code: values.code,
    discountPlanCode: values.discountPlanCode,
    description: values.description,
    invoiceCategoryCode: values.invoiceCategoryCode,
    invoiceSubCategoryCode: values.invoiceSubCategoryCode,
    discountPlanItemType: values.discountPlanItemType,
    discountValue: Number.isNaN(discountValue) ? 0 : discountValue,
    discountValueEL: values.discountValueEL,
    expressionEl: values.expressionEl,
    allowToNegate: values.allowToNegate,
    applyByArticle: values.applyByArticle,
    pricePlanMatrixCode: values.pricePlanMatrixCode,
    targetAccountingArticleCodes: parseTargetAccountingArticleCodes(values.targetAccountingArticleCodes),
    sequence:
      sequenceValue == null || Number.isNaN(sequenceValue) ? undefined : sequenceValue,
    priority:
      priorityValue == null || Number.isNaN(priorityValue) ? undefined : priorityValue,
    accountingArticleCode: values.accountingArticleCode,
    lastDiscount: values.lastDiscount,
  } as DiscountPlanItemDto;
};

export const useDiscountPlanItems = (params?: DiscountPlanItemListParams) =>
  useQuery({
    queryKey: queryKeys.discountPlanItems.list(params ?? {}),
    queryFn: async () => {
      if (!params?.query) {
        return [] as DiscountPlanItemListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlanItem', {
        params: { query: { discountPlanItemCode: params.query } },
      });
      const payload = unwrapResponse<DiscountPlanItemResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load discount plan item',
      );
      assertActionSuccess(payload?.actionStatus, 'Discount plan item request failed');
      return adaptSingle(payload);
    },
  });

export const useDiscountPlanItemList = () =>
  useQuery({
    queryKey: queryKeys.discountPlanItems.all(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlanItem/list');
      const payload = unwrapResponse<DiscountPlanItemsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load discount plan items',
      );
      assertActionSuccess(payload?.actionStatus, 'Discount plan items request failed');
      return adaptMany(payload);
    },
  });

export const useDiscountPlanItem = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.discountPlanItems.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as DiscountPlanItemFormValues | null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlanItem', {
        params: { query: { discountPlanItemCode: code } },
      });
      const payload = unwrapResponse<DiscountPlanItemResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load discount plan item detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Discount plan item detail failed');
      const dto = payload?.discountPlanItem;
      if (!dto) {
        return null;
      }
      const parsed = discountPlanItemFormSchema.safeParse(mapDtoToForm(dto));
      return parsed.success ? parsed.data : mapDtoToForm(dto);
    },
  });

export const useDiscountPlanItemMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.discountPlanItems.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.discountPlanItems.all() });
    queryClient.invalidateQueries({ queryKey: queryKeys.discountPlanItems.version() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.discountPlanItems.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: DiscountPlanItemFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/discountPlanItem', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create discount plan item',
      );
      assertActionSuccess(payload, 'Discount plan item creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: DiscountPlanItemFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/discountPlanItem', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update discount plan item',
      );
      assertActionSuccess(payload, 'Discount plan item update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: DiscountPlanItemFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/discountPlanItem/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update discount plan item',
      );
      assertActionSuccess(payload, 'Discount plan item createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/discountPlanItem/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to enable discount plan item',
      );
      assertActionSuccess(payload, 'Discount plan item enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/discountPlanItem/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to disable discount plan item',
      );
      assertActionSuccess(payload, 'Discount plan item disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/catalog/discountPlanItem/{discountPlanItemCode}', {
        params: { path: { discountPlanItemCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete discount plan item',
      );
      assertActionSuccess(payload, 'Discount plan item deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, enable, disable, remove }),
    [create, createOrUpdate, disable, enable, remove, update],
  );
};

export const useDiscountPlanItemVersion = () =>
  useQuery({
    queryKey: queryKeys.discountPlanItems.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlanItem/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load discount plan item version',
      );
      assertActionSuccess(payload, 'Discount plan item version request failed');
      return payload.message ?? '';
    },
  });
