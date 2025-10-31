import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useUsageChargeAggregate, useUsageSearch } from '@/features/usage/api';
import {
  usageAggregateListFixture,
  usageChargeAggregateResponseFixture,
  usageListFixture,
  usageResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('usage service hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped usage list from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: usageResponseFixture });

    const criteria = { userAccountCode: 'ACC001', fromDate: undefined, toDate: undefined };

    const { result } = renderHook(() => useUsageSearch(criteria), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/usage', {
      params: { query: { userAccountCode: 'ACC001', fromDate: undefined, toDate: undefined } },
    });
    expect(result.current.data).toEqual(usageListFixture);
  });

  it('returns mapped usage aggregates from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: usageChargeAggregateResponseFixture });

    const criteria = { userAccountCode: 'ACC001', fromDate: undefined, toDate: undefined };

    const { result } = renderHook(() => useUsageChargeAggregate(criteria), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/usage/chargeAggregate', {
      params: { query: { userAccountCode: 'ACC001', fromDate: undefined, toDate: undefined } },
    });
    expect(result.current.data).toEqual(usageAggregateListFixture);
  });
});
