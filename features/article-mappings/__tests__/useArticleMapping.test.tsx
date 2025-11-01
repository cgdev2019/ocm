import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { __internals, useArticleMapping } from '@/features/article-mappings/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  articleMappingDetailFixture,
  articleMappingDtoFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

describe('article mapping api', () => {
  const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper };
  };

  it('normalizes the input code', () => {
    expect(__internals.normalizeCode('  AM-001  ')).toBe('AM-001');
    expect(__internals.normalizeCode(null)).toBe('');
  });

  it('maps dto to detail model', () => {
    expect(__internals.mapDtoToDetail(articleMappingDtoFixture)).toEqual(articleMappingDetailFixture);
  });

  it('extracts the article mapping from nested responses', () => {
    expect(
      __internals.extractArticleMapping({
        actionStatus: { status: 'SUCCESS' },
        data: { articleMapping: articleMappingDtoFixture },
      }),
    ).toEqual(articleMappingDtoFixture);
  });

  it('loads article mapping detail using API V2', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'SUCCESS' }, articleMapping: articleMappingDtoFixture },
    });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useArticleMapping('  ART-MAP-001  '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith(
      '/api/rest/v2/articleMapping/{code}',
      { params: { path: { code: 'ART-MAP-001' } } },
    );
    expect(result.current.data).toEqual(articleMappingDetailFixture);
  });

  it('does not trigger the query when code is missing', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useArticleMapping('   '), { wrapper });

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'));
    expect(apiClient.GET).not.toHaveBeenCalled();
  });
});
