import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useBusinessAccountModels } from '@/features/business-account-model/api';
import {
  businessAccountModelListFixture,
  businessAccountModelsResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useBusinessAccountModels', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped business account models from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: businessAccountModelsResponseFixture });

    const { result } = renderHook(() => useBusinessAccountModels(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/account/businessAccountModel/listGetAll');
    expect(result.current.data).toEqual(businessAccountModelListFixture);
  });
});
