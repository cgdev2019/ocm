import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useCustomersList } from '@/features/customers/api';
import type { CustomersResponseDto } from '@/features/customers/types';
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

    const payload: CustomersResponseDto = {
      actionStatus: { status: 'SUCCESS', message: 'ok' },
      paging: undefined,
      customers: {
        customer: [
          {
            code: 'CUST-001',
            description: 'Test customer',
            customerCategory: 'SMB',
            customerBrand: 'Brand',
            seller: 'SELLER',
            vatNo: 'FR123',
            contactInformation: {
              email: 'user@example.com',
              phone: '0102030405',
              address: { address1: '1 rue', city: 'Paris', country: 'FR' },
            },
          },
        ],
      },
    };

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: payload });

    const { result } = renderHook(() => useCustomersList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual([
      {
        code: 'CUST-001',
        description: 'Test customer',
        customerCategory: 'SMB',
        customerBrand: 'Brand',
        seller: 'SELLER',
        vatNo: 'FR123',
        contactEmail: 'user@example.com',
        city: 'Paris',
      },
    ]);
  });
});
