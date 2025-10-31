import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useSubscriptions } from '@/features/subscriptions/api';
import {
  subscriptionListFixture,
  subscriptionListResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useSubscriptions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped subscriptions from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: subscriptionListResponseFixture });

    const { result } = renderHook(() => useSubscriptions(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/billing/subscription/list', {
      params: { query: { userAccountCode: undefined, query: undefined } },
    });
    expect(result.current.data).toEqual(subscriptionListFixture);
  });
});
