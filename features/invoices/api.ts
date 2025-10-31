import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { apiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  CreateInvoiceResponseDto,
  InvoiceDto,
  InvoiceFormValues,
  InvoiceListItem,
  InvoicesResponseDto,
  GetInvoiceResponseDto,
} from '@/features/invoices/types';

export type InvoiceFilters = {
  query?: string;
  limit?: number;
  offset?: number;
};

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

export const useInvoices = (filters: InvoiceFilters) =>
  useQuery({
    queryKey: queryKeys.invoices.list(filters),
    queryFn: async () => {
      const result = await apiClient.GET('/api/rest/invoice/list', {
        params: {
          query: {
            query: filters.query,
            limit: filters.limit,
            offset: filters.offset,
          },
        },
      });
      const payload = unwrapResponse<InvoicesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoices',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice list returned an error');
      return adaptInvoiceList(payload.invoices);
    },
  });

export const useInvoice = (id: number | string | null) =>
  useQuery({
    queryKey: queryKeys.invoices.detail(id ?? 'unknown'),
    enabled: Boolean(id),
    queryFn: async () => {
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
      queryClient.invalidateQueries({ queryKey: queryKeys.invoices.list({}) });
    },
  });

  return useMemo(() => ({ create }), [create]);
};
