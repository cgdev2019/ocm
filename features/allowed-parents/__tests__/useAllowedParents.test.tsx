import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useAllowedParents } from '@/features/allowed-parents/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  allowedParentDtoFixtures,
  allowedParentListFixtures,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

const createWrapper = () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return { wrapper };
};

describe('useAllowedParents', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('loads allowed parents for a given user account', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const response = allowedParentDtoFixtures.filter(
      (item) => item.userAccountCode === 'UA-0001',
    );
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: response });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAllowedParents(' UA-0001 '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith(
      '/api/rest/v2/accounts/userAccounts/{userAccountCode}/allowedParents',
      { params: { path: { userAccountCode: 'UA-0001' } } },
    );
    expect(result.current.data).toEqual(
      allowedParentListFixtures.filter((item) => ['901', '902'].includes(item.id)),
    );
  });

  it('supports responses wrapped inside an object', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const response = allowedParentDtoFixtures.filter(
      (item) => item.userAccountCode === 'UA-0002',
    );
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: { allowedParents: response } });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAllowedParents('UA-0002'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(
      allowedParentListFixtures.filter((item) => item.id === '903'),
    );
  });

  it('does not trigger the request when no user account code is provided', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAllowedParents('  '), { wrapper });

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'));
    expect(apiClient.GET).not.toHaveBeenCalled();
    expect(result.current.data).toBeUndefined();
  });
});
