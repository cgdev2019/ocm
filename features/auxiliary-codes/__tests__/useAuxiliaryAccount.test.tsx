import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { __internals, useAuxiliaryAccount } from '@/features/auxiliary-codes/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  auxiliaryAccountDetailFixtures,
  auxiliaryAccountDtoFixtures,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return { wrapper };
};

describe('useAuxiliaryAccount', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('loads auxiliary account information for a customer account', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        customerAccountCode: ' ACC-001 ',
        auxiliaryAccountCode: ' AUX-0001 ',
        auxiliaryAccountLabel: ' Compte auxiliaire principal ',
      },
    });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAuxiliaryAccount(' ACC-001 '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith(
      '/api/rest/v2/accounting/auxiliaryAccounts/{customerAccountCode}',
      { params: { path: { customerAccountCode: 'ACC-001' } } },
    );
    expect(result.current.data).toEqual(auxiliaryAccountDetailFixtures[0]);
  });

  it('supports nested payloads when extracting the auxiliary account', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS' },
        result: {
          data: [
            {
              auxiliaryAccount: {
                customerAccountCode: auxiliaryAccountDtoFixtures[1].customerAccountCode,
                auxiliaryAccountCode: auxiliaryAccountDtoFixtures[1].auxiliaryAccountCode,
                auxiliaryAccountLabel: auxiliaryAccountDtoFixtures[1].auxiliaryAccountLabel,
              },
            },
          ],
        },
      },
    });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAuxiliaryAccount(auxiliaryAccountDtoFixtures[1].customerAccountCode ?? ''), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(auxiliaryAccountDetailFixtures[1]);
  });

  it('propagates action status errors returned by the API', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'FAIL', message: 'Auxiliary account not found' },
      },
    });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAuxiliaryAccount('ACC-404'), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('Auxiliary account not found');
  });

  it('throws when the auxiliary account action status indicates a failure', () => {
    expect(() =>
      __internals.extractAuxiliaryAccount({
        actionStatus: { status: 'FAIL', message: 'Expected failure' },
      }),
    ).toThrow('Expected failure');
  });

  it('returns a fallback detail when no auxiliary account is provided', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    (apiClient.GET as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAuxiliaryAccount('ACC-EMPTY'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual({
      customerAccountCode: 'ACC-EMPTY',
    });
  });

  it('does not trigger the query when no customer account code is provided', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAuxiliaryAccount('   '), { wrapper });

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'));
    expect(apiClient.GET).not.toHaveBeenCalled();
    expect(result.current.data).toBeUndefined();
  });
});
