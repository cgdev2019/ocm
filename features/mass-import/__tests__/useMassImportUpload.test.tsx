import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { useMassImportUpload } from '@/features/mass-import/api';
import { importFileTypeFixture } from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useMassImportUpload', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('uploads file data and returns detected type', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: importFileTypeFixture });

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useMassImportUpload(), { wrapper });

    await act(async () => {
      const response = await result.current.upload.mutateAsync({
        fileName: 'customers.csv',
        base64Data: 'dGVzdA==',
      });
      expect(response).toEqual(importFileTypeFixture);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/massImport/uploadAndImport', {
      body: {
        filename: 'customers.csv',
        data: ['dGVzdA=='],
      },
    });
  });
});
