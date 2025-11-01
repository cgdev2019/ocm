import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import {
  __internals,
  useArticleMappingLine,
  useArticleMappingLineByCode,
  useArticleMappingLineMutations,
} from '@/features/article-mapping-lines/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  actionStatusSuccessFixture,
  articleMappingLineDetailFixture,
  articleMappingLineDtoFixture,
  articleMappingLineFormValuesFixture,
  articleMappingLineResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('article mapping line api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient();
    const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper, invalidateSpy };
  };

  it('normalizes id values', () => {
    expect(__internals.normalizeId(42)).toBe(42);
    expect(__internals.normalizeId(' 701 ')).toBe(701);
    expect(__internals.normalizeId('abc')).toBeNull();
    expect(__internals.normalizeId(null)).toBeNull();
  });

  it('normalizes code values', () => {
    expect(__internals.normalizeCode('  LINE-001  ')).toBe('LINE-001');
    expect(__internals.normalizeCode(undefined)).toBe('');
  });

  it('maps dto to detail values', () => {
    expect(__internals.mapDtoToDetail(articleMappingLineDtoFixture)).toEqual(
      articleMappingLineDetailFixture,
    );
  });

  it('maps form values to dto payload', () => {
    expect(__internals.mapFormToDto(articleMappingLineFormValuesFixture)).toEqual({
      id: 701,
      code: 'ART-LINE-001',
      description: 'Mapping line description',
      articleMapping: { code: 'ART-MAP-001' },
      accountingArticle: { code: 'ACC-001' },
      attributeOperator: 'AND',
      attributesMapping: [
        {
          id: 8801,
          operator: 'EQUAL',
          attributeValue: 'PREPAID',
          attribute: { code: 'PAYMENT_MODE' },
        },
      ],
      offerTemplate: { code: 'OFFER-001' },
      product: { code: 'PROD-001' },
      chargeTemplate: { code: 'CHARGE-001' },
      parameter1: 'param-1',
      parameter2: 'param-2',
      parameter3: 'param-3',
      mappingKeyEL: 'key == value',
    });
  });

  it('extracts article mapping line from nested responses', () => {
    expect(
      __internals.extractArticleMappingLine({
        actionStatus: actionStatusSuccessFixture,
        data: { result: articleMappingLineResponseFixture },
      }),
    ).toEqual(articleMappingLineDtoFixture);
  });

  it('loads article mapping line detail by id using API V2', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: articleMappingLineDtoFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useArticleMappingLine(' 701 '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/v2/articleMappingLines/{id}', {
      params: { path: { id: 701 } },
    });
    expect(result.current.data).toEqual(articleMappingLineDetailFixture);
  });

  it('does not trigger detail query when id is missing', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useArticleMappingLine('   '), { wrapper });

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'));
    expect(apiClient.GET).not.toHaveBeenCalled();
  });

  it('loads article mapping line detail by code using API V2', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: articleMappingLineResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useArticleMappingLineByCode('  ART-LINE-001  '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/v2/articleMappingLines/find/{code}', {
      params: { path: { code: 'ART-LINE-001' } },
    });
    expect(result.current.data).toEqual(articleMappingLineDetailFixture);
  });

  it('does not trigger detail by code query when code is missing', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useArticleMappingLineByCode('   '), { wrapper });

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'));
    expect(apiClient.GET).not.toHaveBeenCalled();
  });

  describe('mutations', () => {
    it('creates an article mapping line using API V2', async () => {
      const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.POST as jest.Mock).mockResolvedValue({ data: articleMappingLineResponseFixture });

      const { wrapper, invalidateSpy } = createWrapper();
      const { result } = renderHook(() => useArticleMappingLineMutations(), { wrapper });

      await result.current.create.mutateAsync(articleMappingLineFormValuesFixture);

      expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/v2/articleMappingLines', {
        body: __internals.mapFormToDto(articleMappingLineFormValuesFixture),
      });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['articleMappingLines'] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['articleMappingLines', 'detail', 701] });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['articleMappingLines', 'detailByCode', 'ART-LINE-001'],
      });
    });

    it('updates an article mapping line using API V2', async () => {
      const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.PUT as jest.Mock).mockResolvedValue({ data: articleMappingLineResponseFixture });

      const { wrapper, invalidateSpy } = createWrapper();
      const { result } = renderHook(() => useArticleMappingLineMutations(), { wrapper });

      await result.current.update.mutateAsync(articleMappingLineFormValuesFixture);

      expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/v2/articleMappingLines/{id}', {
        params: { path: { id: 701 } },
        body: __internals.mapFormToDto(articleMappingLineFormValuesFixture),
      });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['articleMappingLines'] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['articleMappingLines', 'detail', 701] });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['articleMappingLines', 'detailByCode', 'ART-LINE-001'],
      });
    });

    it('deletes an article mapping line using API V2', async () => {
      const apiClient = { DELETE: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: articleMappingLineDtoFixture });

      const { wrapper, invalidateSpy } = createWrapper();
      const { result } = renderHook(() => useArticleMappingLineMutations(), { wrapper });

      await result.current.remove.mutateAsync({ id: ' 701 ', code: 'ART-LINE-001' });

      expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/v2/articleMappingLines/{id}', {
        params: { path: { id: 701 } },
      });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['articleMappingLines'] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['articleMappingLines', 'detail', 701] });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['articleMappingLines', 'detailByCode', 'ART-LINE-001'],
      });
    });
  });
});
