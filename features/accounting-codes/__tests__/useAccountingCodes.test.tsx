import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useAccountingCode, useAccountingCodes } from '@/features/accounting-codes/api';
import {
  accountingCodeDetailFixture,
  accountingCodeListFixture,
  accountingCodeListResponseFixture,
  accountingCodeResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('accounting codes hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const renderWithClient = () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper };
  };

  it('lists accounting codes with mapped fields', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: accountingCodeListResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useAccountingCodes(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/billing/accountingCode/listGetAll');
    expect(result.current.data).toEqual(accountingCodeListFixture);
  });

  it('loads accounting code detail mapped to form values', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: accountingCodeResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useAccountingCode('ACCT-1000'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/billing/accountingCode', {
      params: { query: { accountingCode: 'ACCT-1000' } },
    });
    expect(result.current.data).toEqual(accountingCodeDetailFixture);
  });
});
