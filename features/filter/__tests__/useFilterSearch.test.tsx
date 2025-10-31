import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useFilterSearch } from '@/features/filter/api';
import { filterListFixture, filterResponseFixture } from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('useFilterSearch', () => {
  it('returns mapped filter entries from API response when code is provided', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: filterResponseFixture });

    const { result } = renderHook(() => useFilterSearch('TEST_FILTER'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/filter', {
      params: { query: { filterCode: 'TEST_FILTER' } },
    });
    expect(result.current.data).toEqual(filterListFixture);
  });
});
