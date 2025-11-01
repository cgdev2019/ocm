import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import {
  useDiscountPlanItem,
  useDiscountPlanItemList,
  useDiscountPlanItemMutations,
  useDiscountPlanItems,
  useDiscountPlanItemVersion,
} from '@/features/discount-plan-items/api';
import type { DiscountPlanItemFormValues } from '@/features/discount-plan-items/types';
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

describe('discount plan item api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('searches discount plan items by code', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        discountPlanItem: {
          code: 'DPI-001',
          discountPlanCode: 'DP-001',
          discountPlanItemType: 'PERCENTAGE',
          discountValue: 10,
        },
      },
    });

    const { result } = renderHook(() => useDiscountPlanItems({ query: 'DPI-001' }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem', {
      params: { query: { discountPlanItemCode: 'DPI-001' } },
    });
    expect(result.current.data).toEqual([
      {
        code: 'DPI-001',
        discountPlanCode: 'DP-001',
        discountPlanItemType: 'PERCENTAGE',
        discountValue: 10,
        description: undefined,
      },
    ]);
  });

  it('lists discount plan items', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        discountPlanItems: [
          { code: 'DPI-001', discountPlanCode: 'DP-001', discountValue: 10 },
          { code: 'DPI-002', discountPlanCode: 'DP-002', discountValue: 5 },
        ],
      },
    });

    const { result } = renderHook(() => useDiscountPlanItemList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem/list');
    expect(result.current.data).toHaveLength(2);
  });

  it('loads a discount plan item detail', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        discountPlanItem: {
          code: 'DPI-003',
          discountPlanCode: 'DP-003',
          discountPlanItemType: 'FIXED',
          discountValue: 20,
          discountValueEL: '20',
        },
      },
    });

    const { result } = renderHook(() => useDiscountPlanItem('DPI-003'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem', {
      params: { query: { discountPlanItemCode: 'DPI-003' } },
    });
    expect(result.current.data).toEqual(
      expect.objectContaining({ code: 'DPI-003', discountPlanItemType: 'FIXED', discountValue: '20' }),
    );
  });

  it('handles discount plan item mutations', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useDiscountPlanItemMutations(), { wrapper });

    const formValues: DiscountPlanItemFormValues = {
      code: 'DPI-010',
      discountPlanCode: 'DP-010',
      description: 'Test item',
      invoiceCategoryCode: 'INV',
      invoiceSubCategoryCode: 'INV-SUB',
      discountPlanItemType: 'PERCENTAGE',
      discountValue: '15',
      discountValueEL: '15',
      expressionEl: '',
      allowToNegate: false,
      applyByArticle: false,
      pricePlanMatrixCode: '',
      targetAccountingArticleCodes: 'AA-1, AA-2',
      sequence: '1',
      priority: '2',
      accountingArticleCode: 'AC-01',
      lastDiscount: true,
    };

    await act(async () => {
      await result.current.create.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem', {
      body: expect.objectContaining({ discountValue: 15, discountPlanCode: 'DP-010' }),
    });

    await act(async () => {
      await result.current.update.mutateAsync(formValues);
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem', {
      body: expect.objectContaining({ code: 'DPI-010' }),
    });

    await act(async () => {
      await result.current.createOrUpdate.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem/createOrUpdate', {
      body: expect.objectContaining({ discountPlanCode: 'DP-010' }),
    });

    await act(async () => {
      await result.current.enable.mutateAsync('DPI-010');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem/{code}/enable', {
      params: { path: { code: 'DPI-010' } },
    });

    await act(async () => {
      await result.current.disable.mutateAsync('DPI-010');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem/{code}/disable', {
      params: { path: { code: 'DPI-010' } },
    });

    await act(async () => {
      await result.current.remove.mutateAsync('DPI-010');
    });

    expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem/{discountPlanItemCode}', {
      params: { path: { discountPlanItemCode: 'DPI-010' } },
    });
  });

  it('loads discount plan item version', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: { status: 'SUCCESS', message: '1.2.3' },
    });

    const { result } = renderHook(() => useDiscountPlanItemVersion(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlanItem/version');
    expect(result.current.data).toBe('1.2.3');
  });
});
