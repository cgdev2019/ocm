import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useAgedReceivables } from '@/features/aged-receivables/api';
import {
  agedReceivablesListFixture,
  agedReceivablesResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useAgedReceivables', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('loads aged receivables with pagination metadata and buckets', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: agedReceivablesResponseFixture });

    const { result } = renderHook(
      () =>
        useAgedReceivables({
          filters: {
            customerAccountCode: 'CUST-001',
            sellerCode: 'SELLER-1',
            invoiceNumber: 'INV-2024-001',
            stepInDays: 30,
            numberOfPeriods: 4,
          },
          page: 0,
          pageSize: 20,
          sortBy: 'dueDate',
          sortOrder: 'ASCENDING',
        }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith(
      '/api/rest/v2/standardReports/AgedReceivables',
      {
        params: {
          query: {
            customerAccountCode: 'CUST-001',
            sellerCode: 'SELLER-1',
            invoiceNumber: 'INV-2024-001',
            stepInDays: 30,
            numberOfPeriods: 4,
            offset: 0,
            limit: 20,
            sortBy: 'dueDate',
            sortOrder: 'ASCENDING',
          },
        },
      },
    );

    expect(result.current.data).toEqual({
      items: agedReceivablesListFixture,
      totalRecords: agedReceivablesResponseFixture.paging?.totalNumberOfRecords ?? 0,
      bucketLabels: agedReceivablesResponseFixture.bucketLabels ?? [],
    });
  });
});
