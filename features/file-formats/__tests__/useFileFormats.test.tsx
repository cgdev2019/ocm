import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useFileFormat, useFileFormats } from '@/features/file-formats/api';
import {
  fileFormatDetailFixture,
  fileFormatListFixture,
  fileFormatListResponseFixture,
  fileFormatResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('file formats api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped file formats from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: fileFormatListResponseFixture });

    const { result } = renderHook(() => useFileFormats(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/admin/fileFormat/list');
    expect(result.current.data).toEqual(fileFormatListFixture);
  });

  it('returns a mapped file format from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: fileFormatResponseFixture });

    const { result } = renderHook(() => useFileFormat('CSV_IMPORT'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/admin/fileFormat', {
      params: { query: { code: 'CSV_IMPORT' } },
    });
    expect(result.current.data).toEqual(fileFormatDetailFixture);
  });
});
