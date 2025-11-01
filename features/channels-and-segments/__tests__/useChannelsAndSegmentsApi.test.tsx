import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useChannelsAndSegments, useChannelsAndSegmentsVersion } from '@/features/channels-and-segments/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';

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

describe('channels and segments api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetches channels and segments with filters', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        channels: [
          { code: 'CH-1', description: 'Channel 1', disabled: false },
          { code: 'CH-2', description: 'Channel 2', disabled: true },
        ],
        segments: [
          { code: 'SEG-1', description: 'Segment 1', active: true },
          { code: 'SEG-2', description: 'Segment 2', active: false },
        ],
      },
    });

    const { result } = renderHook(() => useChannelsAndSegments({ active: true }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/channelsAndSegments', {
      params: { query: { active: true } },
    });
    expect(result.current.data?.channels).toEqual([
      { code: 'CH-1', description: 'Channel 1', disabled: false, languages: [] },
      { code: 'CH-2', description: 'Channel 2', disabled: true, languages: [] },
    ]);
    expect(result.current.data?.segments).toEqual([
      { code: 'SEG-1', description: 'Segment 1', active: true, parentId: undefined },
      { code: 'SEG-2', description: 'Segment 2', active: false, parentId: undefined },
    ]);
  });

  it('loads channels and segments version', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: { status: 'SUCCESS', message: '1.2.3' },
    });

    const { result } = renderHook(() => useChannelsAndSegmentsVersion(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/channelsAndSegments/version');
    expect(result.current.data).toBe('1.2.3');
  });
});
