import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useInvoiceSubCategories } from '@/features/invoice-sub-categories/api';
import {
  invoiceSubCategoryListFixture,
  invoiceSubCategoryResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useInvoiceSubCategories', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped invoice sub categories from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: invoiceSubCategoryResponseFixture });

    const { result } = renderHook(() => useInvoiceSubCategories(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/invoiceSubCategory/list');
    expect(result.current.data).toEqual(invoiceSubCategoryListFixture);
  });
});
