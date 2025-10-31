import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useScriptInstances } from '@/features/script-instances/api';
import { scriptInstanceListFixture, scriptInstanceResponseFixture } from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useScriptInstances', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped script instances from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: scriptInstanceResponseFixture });

    const { result } = renderHook(() => useScriptInstances('SCRIPT-001'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/scriptInstance', {
      params: { query: { scriptInstanceCode: 'SCRIPT-001' } },
    });
    expect(result.current.data).toEqual(scriptInstanceListFixture);
  });
});
