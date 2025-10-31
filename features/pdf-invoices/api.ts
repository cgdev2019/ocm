import { useMutation, useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  PdfInvoiceResponse,
  PdfInvoiceResult,
  PdfInvoiceSearchParams,
} from '@/features/pdf-invoices/types';

const adaptResponse = (payload: PdfInvoiceResponse): PdfInvoiceResult => ({
  actionMessage: payload.actionStatus?.message ?? undefined,
  pdfInvoice: payload.pdfInvoice ?? [],
});

export const usePdfInvoiceSearch = () =>
  useMutation({
    mutationKey: queryKeys.pdfInvoices.search(),
    mutationFn: async (params: PdfInvoiceSearchParams) => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/PdfInvoice', {
        params: { query: params },
      });
      const payload = unwrapResponse<PdfInvoiceResponse>(
        { data: result.data, error: result.error },
        'Unable to load PDF invoice',
      );
      assertActionSuccess(payload.actionStatus, 'PDF invoice request failed');
      return adaptResponse(payload);
    },
  });

export const usePdfInvoiceVersion = () =>
  useQuery({
    queryKey: queryKeys.pdfInvoices.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/PdfInvoice/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to retrieve PDF invoice version',
      );
      assertActionSuccess(payload, 'PDF invoice version request failed');
      return payload.message ?? '';
    },
  });
