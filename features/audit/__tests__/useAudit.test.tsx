import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useAuditMutations, useAuditVersion } from '@/features/audit/api';
import { auditVersionResponseFixture } from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('audit api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns audit version from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: auditVersionResponseFixture });

    const { result } = renderHook(() => useAuditVersion(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/admin/audit/version');
    expect(result.current.data).toEqual(auditVersionResponseFixture.message);
  });

  it('triggers audit enable mutation', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { PUT: jest.fn(), GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useAuditMutations(), { wrapper });

    await act(async () => {
      await result.current.enable.mutateAsync();
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/admin/audit/{enableORdisable}', {
      params: { path: { enableORdisable: 'enable' } },
    });
  });
});
