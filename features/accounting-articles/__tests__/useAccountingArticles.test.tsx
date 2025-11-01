import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import {
  useAccountingArticle,
  useAccountingArticles,
} from '@/features/accounting-articles/api';
import {
  accountingArticleDetailFixture,
  accountingArticleListResultFixture,
  accountingArticleListResponseFixture,
  accountingArticleResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('accounting articles hooks', () => {
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

  it('lists accounting articles with mapped fields', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: accountingArticleListResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(
      () => useAccountingArticles({ limit: 20, offset: 0 }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/articles', {
      params: { query: { limit: 20, offset: 0 } },
    });
    expect(result.current.data).toEqual(accountingArticleListResultFixture);
  });

  it('loads accounting article detail', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: accountingArticleResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useAccountingArticle('ART-STD'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/articles/{accountingArticleCode}', {
      params: { path: { accountingArticleCode: 'ART-STD' } },
    });
    expect(result.current.data).toEqual(accountingArticleDetailFixture);
  });
});
