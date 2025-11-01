import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import {
  useAccountingPeriod,
  useAccountingPeriods,
} from '@/features/accounting-periods/api';
import {
  accountingPeriodDetailFixture,
  accountingPeriodListItemsFixture,
  accountingPeriodListResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('useAccountingPeriods', () => {
  it('returns mapped accounting periods from API response', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: accountingPeriodListResponseFixture });

    const { result } = renderHook(
      () =>
        useAccountingPeriods({
          page: 0,
          pageSize: 20,
          sortBy: 'fiscalYear',
          sortOrder: 'DESCENDING',
          filters: { query: null, status: null },
        }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.POST).toHaveBeenCalledWith(
      '/v2/generic/all/{entityName}',
      expect.objectContaining({ params: { path: { entityName: 'accountingPeriod' } } }),
    );
    expect(result.current.data?.items).toEqual(accountingPeriodListItemsFixture);
    expect(result.current.data?.paging.totalRecords).toBe(1);
  });
});

describe('useAccountingPeriod', () => {
  it('returns detail information for a fiscal year', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: accountingPeriodListResponseFixture });

    const { result } = renderHook(() => useAccountingPeriod('2024'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.POST).toHaveBeenCalledWith(
      '/v2/generic/all/{entityName}',
      expect.objectContaining({
        params: { path: { entityName: 'accountingPeriod' } },
        body: expect.objectContaining({ filters: { fiscalYear: '2024' } }),
      }),
    );
    expect(result.current.data).toEqual(accountingPeriodDetailFixture);
  });
});
