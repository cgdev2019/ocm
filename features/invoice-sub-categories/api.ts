import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetInvoiceSubCategoryResponse,
  InvoiceSubCategoryDto,
  InvoiceSubCategoryFormValues,
  InvoiceSubCategoryListItem,
  InvoiceSubCategoryResponseDto,
} from '@/features/invoice-sub-categories/types';

export const DEFAULT_INVOICE_SUB_CATEGORY_PAGE_SIZE = 20;

const adaptList = (items: InvoiceSubCategoryDto[] | undefined): InvoiceSubCategoryListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    invoiceCategory: item.invoiceCategory ?? '',
    accountingCode: item.accountingCode ?? '',
    occTemplateCode: item.occTemplateCode ?? '',
    occTemplateNegativeCode: item.occTemplateNegativeCode ?? undefined,
    sortIndex: item.sortIndex ?? undefined,
  }));

const mapDtoToForm = (dto: InvoiceSubCategoryDto): InvoiceSubCategoryFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  invoiceCategory: dto.invoiceCategory ?? '',
  accountingCode: dto.accountingCode ?? '',
  occTemplateCode: dto.occTemplateCode ?? '',
  occTemplateNegativeCode: dto.occTemplateNegativeCode ?? undefined,
  sortIndex: dto.sortIndex ?? undefined,
});

const mapFormToDto = (values: InvoiceSubCategoryFormValues): InvoiceSubCategoryDto => ({
  code: values.code,
  description: values.description,
  invoiceCategory: values.invoiceCategory,
  accountingCode: values.accountingCode,
  occTemplateCode: values.occTemplateCode,
  occTemplateNegativeCode: values.occTemplateNegativeCode,
  sortIndex: values.sortIndex,
});

export const useInvoiceSubCategories = () =>
  useQuery({
    queryKey: queryKeys.invoiceSubCategories.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceSubCategory/list');
      const payload = unwrapResponse<InvoiceSubCategoryResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoice sub-categories',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice sub-categories request failed');
      return adaptList(payload.invoiceSubCategories?.invoiceSubCategory);
    },
  });

export const useInvoiceSubCategory = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.invoiceSubCategories.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceSubCategory', {
        params: { query: { invoiceSubCategoryCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetInvoiceSubCategoryResponse>(
        { data: result.data, error: result.error },
        'Unable to load invoice sub-category',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice sub-category request failed');
      return payload.invoiceSubCategory ? mapDtoToForm(payload.invoiceSubCategory) : null;
    },
  });

export const useInvoiceSubCategoryMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.invoiceSubCategories.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoiceSubCategories.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: InvoiceSubCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceSubCategory', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sub-category creation failed',
      );
      assertActionSuccess(payload, 'Invoice sub-category creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: InvoiceSubCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/invoiceSubCategory', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sub-category update failed',
      );
      assertActionSuccess(payload, 'Invoice sub-category update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/invoiceSubCategory/{invoiceSubCategoryCode}', {
        params: { path: { invoiceSubCategoryCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sub-category deletion failed',
      );
      assertActionSuccess(payload, 'Invoice sub-category deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: InvoiceSubCategoryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceSubCategory/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sub-category upsert failed',
      );
      assertActionSuccess(payload, 'Invoice sub-category upsert failed');
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
