import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { usePdfInvoiceSearch } from '@/features/pdf-invoices/api';
import { pdfInvoiceResponseFixture } from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('usePdfInvoiceSearch', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('retrieves pdf invoice payload from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: pdfInvoiceResponseFixture });

    const { result } = renderHook(() => usePdfInvoiceSearch(), { wrapper });

    await act(async () => {
      await result.current.mutateAsync({ invoiceNumber: 'INV-001', customerAccountCode: 'CUST-01' });
    });

    await waitFor(() => expect(result.current.data).toBeDefined());
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/PdfInvoice', {
      params: { query: { invoiceNumber: 'INV-001', customerAccountCode: 'CUST-01' } },
    });
    expect(result.current.data).toEqual({
      actionMessage: '2 documents',
      pdfInvoice: pdfInvoiceResponseFixture.pdfInvoice ?? [],
    });
  });
});
