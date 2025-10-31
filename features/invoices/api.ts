import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  CreateInvoiceResponseDto,
  InvoiceDto,
  InvoiceFormValues,
  InvoiceListItem,
  InvoicesList,
  InvoicesListParams,
  InvoicesResponseDto,
  GetInvoiceResponseDto,
} from '@/features/invoices/types';

export const DEFAULT_INVOICES_PAGE_SIZE = 20;

const fallbackId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `tmp-${Math.random().toString(36).slice(2)}`;

const adaptInvoiceList = (items: InvoiceDto[] | undefined): InvoiceListItem[] =>
  (items ?? []).map((item) => ({
    id: item.invoiceId != null ? String(item.invoiceId) : item.invoiceNumber ?? fallbackId(),
    invoiceNumber: item.invoiceNumber ?? undefined,
    status: item.status ?? undefined,
    invoiceType: item.invoiceType ?? undefined,
    amountWithTax: item.amountWithTax ?? item.rawAmount ?? undefined,
    dueDate: item.dueDate ?? undefined,
    customerAccount: item.billingAccountCode ?? undefined,
  }));

const toDto = (values: InvoiceFormValues): InvoiceDto => ({
  invoiceType: values.invoiceType,
  invoiceMode: values.invoiceMode as InvoiceDto['invoiceMode'],
  billingAccountCode: values.billingAccountCode,
  invoiceDate: values.invoiceDate,
  dueDate: values.dueDate,
  rawAmount: values.rawAmount,
  discountAmount: values.discountAmount,
  amountWithTax: values.amountWithTax,
  amountWithoutTax: values.amountWithoutTax,
  taxAggregates: [],
  autoValidation: false,
  sentByEmail: false,
});

const normalizeFilters = (filters: InvoicesListParams = {}) => ({
  limit: filters.limit ?? DEFAULT_INVOICES_PAGE_SIZE,
  offset: filters.offset ?? 0,
  sortBy: filters.sortBy,
  sortOrder: filters.sortOrder,
  query: filters.query,
});

export const useInvoices = (filters?: InvoicesListParams) => {
  const normalizedFilters = normalizeFilters(filters);
  const requestQuery = {
    limit: normalizedFilters.limit,
    offset: normalizedFilters.offset,
    ...(normalizedFilters.query ? { query: normalizedFilters.query } : {}),
    ...(normalizedFilters.sortBy ? { sortBy: normalizedFilters.sortBy } : {}),
    ...(normalizedFilters.sortOrder ? { sortOrder: normalizedFilters.sortOrder } : {}),
  } as const;

  return useQuery<InvoicesList>({
    queryKey: queryKeys.invoices.list(normalizedFilters),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoice/list', {
        params: {
          query: requestQuery,
        },
      });
      const payload = unwrapResponse<InvoicesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoices',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice list returned an error');

      const items = adaptInvoiceList(payload.invoices);
      const paging = payload.paging ?? {};
      const limit = paging.limit ?? normalizedFilters.limit ?? DEFAULT_INVOICES_PAGE_SIZE;
      const offset = paging.offset ?? normalizedFilters.offset ?? 0;
      const totalRecords = paging.totalNumberOfRecords ?? items.length;

      return {
        items,
        paging: {
          totalRecords,
          limit,
          offset,
          sortBy: paging.sortBy ?? normalizedFilters.sortBy,
          sortOrder: paging.sortOrder ?? normalizedFilters.sortOrder,
        },
      } satisfies InvoicesList;
    },
  });
};

export const useInvoice = (id: number | string | null) =>
  useQuery({
    queryKey: queryKeys.invoices.detail(id ?? 'unknown'),
    enabled: Boolean(id),
    queryFn: async () => {
      const apiClient = getApiClient();
      const numericId = typeof id === 'string' ? Number(id) : id ?? undefined;
      const result = await apiClient.GET('/api/rest/invoice', {
        params: { query: { id: numericId } },
      });
      const payload = unwrapResponse<GetInvoiceResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoice',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice retrieval failed');
      return payload.invoice ?? null;
    },
  });

export const useInvoiceMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: InvoiceFormValues) => {
      const apiClient = getApiClient();
      const dto = toDto(values);
      const result = await apiClient.POST('/api/rest/invoice', {
        body: dto,
      });
      const payload = unwrapResponse<CreateInvoiceResponseDto>(
        { data: result.data, error: result.error },
        'Invoice creation failed',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice creation failed');
      return payload as { invoiceId?: number };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoices.list() });
    },
  });

  return useMemo(() => ({ create }), [create]);
};
