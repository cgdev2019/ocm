import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetInvoiceCategoryResponse,
  InvoiceCategoryDto,
  InvoiceCategoryFormValues,
  InvoiceCategoryListItem,
  InvoiceCategoryResponseDto,
} from '@/features/invoice-categories/types';

export const DEFAULT_INVOICE_CATEGORY_PAGE_SIZE = 20;

const adaptList = (items: InvoiceCategoryDto[] | undefined): InvoiceCategoryListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    occTemplateCode: item.occTemplateCode ?? '',
    occTemplateNegativeCode: item.occTemplateNegativeCode ?? undefined,
    sortIndex: item.sortIndex ?? undefined,
  }));

const mapDtoToForm = (dto: InvoiceCategoryDto): InvoiceCategoryFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  occTemplateCode: dto.occTemplateCode ?? '',
  occTemplateNegativeCode: dto.occTemplateNegativeCode ?? undefined,
  sortIndex: dto.sortIndex ?? undefined,
});

const mapFormToDto = (values: InvoiceCategoryFormValues): InvoiceCategoryDto => ({
  code: values.code,
  description: values.description,
  occTemplateCode: values.occTemplateCode,
  occTemplateNegativeCode: values.occTemplateNegativeCode,
  sortIndex: values.sortIndex,
});

export const useInvoiceCategories = () =>
  useQuery({
    queryKey: queryKeys.invoiceCategories.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceCategory/list');
      const payload = unwrapResponse<InvoiceCategoryResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoice categories',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice categories request failed');
      return adaptList(payload.invoiceCategories?.invoiceCategory);
    },
  });

export const useInvoiceCategory = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.invoiceCategories.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceCategory', {
        params: { query: { invoiceCategoryCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetInvoiceCategoryResponse>(
        { data: result.data, error: result.error },
        'Unable to load invoice category',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice category request failed');
      return payload.invoiceCategory ? mapDtoToForm(payload.invoiceCategory) : null;
    },
  });

export const useInvoiceCategoryMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.invoiceCategories.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoiceCategories.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: InvoiceCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceCategory', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice category creation failed',
      );
      assertActionSuccess(payload, 'Invoice category creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: InvoiceCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/invoiceCategory', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice category update failed',
      );
      assertActionSuccess(payload, 'Invoice category update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/invoiceCategory/{invoiceCategoryCode}', {
        params: { path: { invoiceCategoryCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice category deletion failed',
      );
      assertActionSuccess(payload, 'Invoice category deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: InvoiceCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceCategory/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice category upsert failed',
      );
      assertActionSuccess(payload, 'Invoice category upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return {
    create,
    update,
    remove,
    upsert,
  };
};
