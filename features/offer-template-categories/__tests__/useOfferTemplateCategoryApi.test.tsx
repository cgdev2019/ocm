import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import {
  useOfferTemplateCategories,
  useOfferTemplateCategory,
  useOfferTemplateCategoryListAll,
  useOfferTemplateCategoryMutations,
  useOfferTemplateCategoryVersion,
} from '@/features/offer-template-categories/api';
import type { OfferTemplateCategoryFormValues } from '@/features/offer-template-categories/types';
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

describe('offer template category api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('searches offer template categories by code', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        offerTemplateCategory: {
          code: 'CAT-001',
          name: 'Main category',
          description: 'Primary',
          active: true,
          disabled: false,
        },
      },
    });

    const { result } = renderHook(() => useOfferTemplateCategories({ query: 'CAT-001' }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/offerTemplateCategory', {
      params: { query: { offerTemplateCategoryCode: 'CAT-001' } },
    });
    expect(result.current.data).toEqual([
      {
        code: 'CAT-001',
        name: 'Main category',
        description: 'Primary',
        active: true,
        disabled: false,
      },
    ]);
  });

  it('lists all offer template categories', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        offerTemplateCategories: [
          { code: 'CAT-001', name: 'Main category', description: 'Primary', active: true, disabled: false },
          { code: 'CAT-002', name: 'Secondary', description: 'Secondary', active: false, disabled: true },
        ],
      },
    });

    const { result } = renderHook(() => useOfferTemplateCategoryListAll(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/offerTemplateCategory/listGetAll');
    expect(result.current.data).toEqual([
      { code: 'CAT-001', name: 'Main category', description: 'Primary', active: true, disabled: false },
      { code: 'CAT-002', name: 'Secondary', description: 'Secondary', active: false, disabled: true },
    ]);
  });

  it('loads an offer template category detail', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        offerTemplateCategory: {
          code: 'CAT-002',
          name: 'Secondary',
          description: 'Secondary category',
          parentId: 12,
          active: false,
          disabled: true,
        },
      },
    });

    const { result } = renderHook(() => useOfferTemplateCategory('CAT-002'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/offerTemplateCategory', {
      params: { query: { offerTemplateCategoryCode: 'CAT-002' } },
    });
    expect(result.current.data).toEqual(
      expect.objectContaining({ code: 'CAT-002', name: 'Secondary', parentId: '12', disabled: true }),
    );
  });

  it('handles offer template category mutations', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn(), POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'SUCCESS', message: 'saved' } },
    });
    (apiClient.PUT as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'SUCCESS', message: 'updated' } },
    });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'SUCCESS', message: 'deleted' } },
    });

    const { result } = renderHook(() => useOfferTemplateCategoryMutations(), { wrapper });

    const values: OfferTemplateCategoryFormValues = {
      code: 'CAT-003',
      name: 'New category',
      description: 'Description',
      parentId: '10',
      active: true,
      disabled: false,
    };

    await act(async () => {
      await result.current.create.mutateAsync(values);
    });
    expect(apiClient.POST).toHaveBeenNthCalledWith(1, '/api/rest/catalog/offerTemplateCategory', {
      body: {
        code: 'CAT-003',
        name: 'New category',
        description: 'Description',
        parentId: 10,
        active: true,
        disabled: false,
      },
    });

    await act(async () => {
      await result.current.update.mutateAsync(values);
    });
    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/catalog/offerTemplateCategory', { body: {
      code: 'CAT-003',
      name: 'New category',
      description: 'Description',
      parentId: 10,
      active: true,
      disabled: false,
    } });

    await act(async () => {
      await result.current.createOrUpdate.mutateAsync(values);
    });
    expect(apiClient.POST).toHaveBeenNthCalledWith(2, '/api/rest/catalog/offerTemplateCategory/createOrUpdate', {
      body: {
        code: 'CAT-003',
        name: 'New category',
        description: 'Description',
        parentId: 10,
        active: true,
        disabled: false,
      },
    });

    await act(async () => {
      await result.current.remove.mutateAsync('CAT-003');
    });
    expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/catalog/offerTemplateCategory', {
      params: { query: { offerTemplateCategoryCode: 'CAT-003' } },
    });

    await act(async () => {
      await result.current.enable.mutateAsync('CAT-003');
    });
    expect(apiClient.POST).toHaveBeenNthCalledWith(3, '/api/rest/catalog/offerTemplateCategory/{code}/enable', {
      params: { path: { code: 'CAT-003' } },
    });

    await act(async () => {
      await result.current.disable.mutateAsync('CAT-003');
    });
    expect(apiClient.POST).toHaveBeenNthCalledWith(4, '/api/rest/catalog/offerTemplateCategory/{code}/disable', {
      params: { path: { code: 'CAT-003' } },
    });
  });

  it('fetches offer template category service version', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: { status: 'SUCCESS', message: '1.2.3' },
    });

    const { result } = renderHook(() => useOfferTemplateCategoryVersion(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/offerTemplateCategory/version');
    expect(result.current.data).toBe('1.2.3');
  });
});
