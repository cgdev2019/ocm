import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useAssignAccountOperation } from '@/features/account-operations/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  assignAccountOperationDtoFixture,
  assignAccountOperationFormFixture,
  assignAccountOperationResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('account operation hooks', () => {
  const renderWithClient = () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper };
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('assigns an account operation to a customer account', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: assignAccountOperationResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useAssignAccountOperation(), { wrapper });

    await act(async () => {
      await result.current.mutateAsync(assignAccountOperationFormFixture);
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/accountReceivable/accountOperation/assignOperation/{id}',
      {
        params: {
          path: { id: Number(assignAccountOperationFormFixture.accountOperationId) },
        },
        body: assignAccountOperationDtoFixture,
      },
    );
  });
});
