import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { DEFAULT_CUSTOMERS_PAGE_SIZE, useCustomersList } from '@/features/customers/api';
import {
  customerListItemsFixture,
  customersResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('useCustomersList', () => {
  it('returns mapped customers from API response', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: customersResponseFixture });

    const { result } = renderHook(() => useCustomersList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/account/customer/list47', {
      params: { query: { limit: DEFAULT_CUSTOMERS_PAGE_SIZE, offset: 0 } },
    });
    expect(result.current.data).toEqual({
      items: customerListItemsFixture,
      paging: {
        totalRecords: customersResponseFixture.paging?.totalNumberOfRecords ?? customerListItemsFixture.length,
        limit: customersResponseFixture.paging?.limit ?? DEFAULT_CUSTOMERS_PAGE_SIZE,
        offset: customersResponseFixture.paging?.offset ?? 0,
        sortBy: customersResponseFixture.paging?.sortBy,
        sortOrder: customersResponseFixture.paging?.sortOrder,
      },
    });
  });
});
