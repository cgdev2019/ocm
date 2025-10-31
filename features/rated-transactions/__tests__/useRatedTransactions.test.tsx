import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useRatedTransactions } from '@/features/rated-transactions/api';
import {
  ratedTransactionsListFixture,
  ratedTransactionsResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useRatedTransactions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns rated transactions with pagination metadata', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: ratedTransactionsResponseFixture });

    const { result } = renderHook(
      () =>
        useRatedTransactions({
          filters: { query: 'TRX-001' },
          page: 0,
          pageSize: 20,
          sortBy: 'usageDate',
          sortOrder: 'DESCENDING',
        }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/ratedTransaction/list', {
      body: {
        filters: { code: 'TRX-001' },
        limit: 20,
        offset: 0,
        sortBy: 'usageDate',
        sortOrder: 'DESCENDING',
      },
    });
    expect(result.current.data).toEqual({
      items: ratedTransactionsListFixture,
      totalRecords: ratedTransactionsResponseFixture.paging?.totalNumberOfRecords ?? 0,
    });
  });
});
