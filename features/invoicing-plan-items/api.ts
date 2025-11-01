import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  InvoicingPlanItemDto,
  InvoicingPlanItemFormValues,
  InvoicingPlanItemListItem,
  InvoicingPlanItemResponseDto,
  InvoicingPlanItemsResponseDto,
} from '@/features/invoicing-plan-items/types';

export const DEFAULT_INVOICING_PLAN_ITEM_PAGE_SIZE = 20;

const adaptList = (items: InvoicingPlanItemDto[] | undefined): InvoicingPlanItemListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    billingPlanCode: item.billingPlanCode ?? undefined,
    advancement: item.advancement ?? undefined,
    rateToBill: item.rateToBill ?? undefined,
  }));

const mapDtoToForm = (dto: InvoicingPlanItemDto): InvoicingPlanItemFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  billingPlanCode: dto.billingPlanCode ?? undefined,
  advancement: dto.advancement ?? undefined,
  rateToBill: dto.rateToBill ?? undefined,
  updatedCode: dto.updatedCode ?? undefined,
});

const mapFormToDto = (values: InvoicingPlanItemFormValues): InvoicingPlanItemDto => ({
  code: values.code,
  description: values.description,
  billingPlanCode: values.billingPlanCode,
  advancement: values.advancement,
  rateToBill: values.rateToBill,
  updatedCode: values.updatedCode,
});

export const useInvoicingPlanItems = () =>
  useQuery({
    queryKey: queryKeys.invoicingPlanItems.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/invoicingPlanItems/list', {
        body: { offset: 0, limit: DEFAULT_INVOICING_PLAN_ITEM_PAGE_SIZE },
      });
      const payload = unwrapResponse<InvoicingPlanItemsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoicing plan items',
      );
      assertActionSuccess(payload.actionStatus, 'Invoicing plan items request failed');
      return adaptList(payload.invoicingPlanItems?.invoicingPlanItem);
    },
  });

export const useInvoicingPlanItem = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.invoicingPlanItems.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/invoicingPlanItems', {
        params: { query: { invoicingPlanItemCode: code ?? '' } },
      });
      const payload = unwrapResponse<InvoicingPlanItemResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoicing plan item',
      );
      assertActionSuccess(payload.actionStatus, 'Invoicing plan item request failed');
      return payload.invoicingPlanItemDto ? mapDtoToForm(payload.invoicingPlanItemDto) : null;
    },
  });

export const useInvoicingPlanItemMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.invoicingPlanItems.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoicingPlanItems.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: InvoicingPlanItemFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/invoicingPlanItems', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan item creation failed',
      );
      assertActionSuccess(payload, 'Invoicing plan item creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: InvoicingPlanItemFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billing/invoicingPlanItems', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan item update failed',
      );
      assertActionSuccess(payload, 'Invoicing plan item update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: InvoicingPlanItemFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/invoicingPlanItems/createOrUpdate', {
        body: dto,
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan item upsert failed',
      );
      assertActionSuccess(payload, 'Invoicing plan item upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billing/invoicingPlanItems/{invoicingPlanItemCode}', {
        params: { path: { invoicingPlanItemCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan item deletion failed',
      );
      assertActionSuccess(payload, 'Invoicing plan item deletion failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  return useMemo(
    () => ({
      create,
      update,
      upsert,
      remove,
    }),
    [create, remove, update, upsert],
  );
};
