import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import {
  useDiscountPlan,
  useDiscountPlanList,
  useDiscountPlanMutations,
  useDiscountPlanVersion,
  useDiscountPlans,
} from '@/features/discount-plans/api';
import type { DiscountPlanFormValues } from '@/features/discount-plans/types';
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

describe('discount plan api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('searches discount plans by code', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        discountPlanDto: {
          code: 'DP-001',
          discountPlanType: 'OFFER',
          status: 'ACTIVE',
        },
      },
    });

    const { result } = renderHook(() => useDiscountPlans({ query: 'DP-001' }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlan', {
      params: { query: { discountPlanCode: 'DP-001' } },
    });
    expect(result.current.data).toEqual([
      {
        code: 'DP-001',
        description: undefined,
        discountPlanType: 'OFFER',
        status: 'ACTIVE',
        startDate: undefined,
        endDate: undefined,
      },
    ]);
  });

  it('lists discount plans', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        discountPlan: {
          discountPlan: [
            { code: 'DP-001', discountPlanType: 'OFFER', status: 'ACTIVE' },
            { code: 'DP-002', discountPlanType: 'PRODUCT', status: 'DRAFT' },
          ],
        },
      },
    });

    const { result } = renderHook(() => useDiscountPlanList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlan/list');
    expect(result.current.data).toHaveLength(2);
  });

  it('loads a discount plan detail', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        discountPlanDto: {
          code: 'DP-003',
          discountPlanType: 'INVOICE',
          status: 'INACTIVE',
          defaultDuration: 12,
          durationUnit: 'MONTH',
        },
      },
    });

    const { result } = renderHook(() => useDiscountPlan('DP-003'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlan', {
      params: { query: { discountPlanCode: 'DP-003' } },
    });
    expect(result.current.data).toEqual(
      expect.objectContaining({ code: 'DP-003', discountPlanType: 'INVOICE', defaultDuration: '12' }),
    );
  });

  it('handles discount plan mutations', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useDiscountPlanMutations(), { wrapper });

    const formValues: DiscountPlanFormValues = {
      code: 'DP-010',
      description: 'Test plan',
      discountPlanType: 'OFFER',
      status: 'DRAFT',
      disabled: false,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      defaultDuration: '12',
      durationUnit: 'MONTH',
      expressionEl: '',
      applicationFilterEL: '',
      initialQuantity: '10',
      usedQuantity: '5',
      applicationLimit: '3',
      sequence: '1',
      applicableOnDiscountedPrice: true,
      applicableOnContractPrice: false,
      applicableOnOverriddenPrice: true,
    };

    await act(async () => {
      await result.current.create.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlan', {
      body: expect.objectContaining({ code: 'DP-010', defaultDuration: 12 }),
    });

    await act(async () => {
      await result.current.update.mutateAsync(formValues);
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/catalog/discountPlan', {
      body: expect.objectContaining({ code: 'DP-010', durationUnit: 'MONTH' }),
    });

    await act(async () => {
      await result.current.createOrUpdate.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlan/createOrUpdate', {
      body: expect.objectContaining({ applicationLimit: 3 }),
    });

    await act(async () => {
      await result.current.enable.mutateAsync('DP-010');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlan/{code}/enable', {
      params: { path: { code: 'DP-010' } },
    });

    await act(async () => {
      await result.current.disable.mutateAsync('DP-010');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/discountPlan/{code}/disable', {
      params: { path: { code: 'DP-010' } },
    });

    await act(async () => {
      await result.current.remove.mutateAsync('DP-010');
    });

    expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/catalog/discountPlan', {
      params: { query: { discountPlanCode: 'DP-010' } },
    });
  });

  it('loads discount plan version', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: { status: 'SUCCESS', message: '2.0.0' },
    });

    const { result } = renderHook(() => useDiscountPlanVersion(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/discountPlan/version');
    expect(result.current.data).toBe('2.0.0');
  });
});
