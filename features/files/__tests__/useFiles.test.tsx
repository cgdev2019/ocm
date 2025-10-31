import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useFiles, useFilesMutations } from '@/features/files/api';
import { filesListFixture, filesResponseFixture } from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('files api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped files from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: filesResponseFixture });

    const { result } = renderHook(() => useFiles(null), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/admin/files', { params: undefined });
    expect(result.current.data).toEqual(filesListFixture);
  });

  it('calls directory creation mutation', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn(), GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useFilesMutations(), { wrapper });

    await act(async () => {
      await result.current.createDirectory.mutateAsync('tmp');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/admin/files/createDir', { body: 'tmp' });
  });
});
