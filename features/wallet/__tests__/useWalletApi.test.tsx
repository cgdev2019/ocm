import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import {
  useWalletBalanceOpen,
  useWalletOperationCreate,
  useWalletReservationMutations,
  useWalletTemplateMutations,
} from '@/features/wallet/api';
import type {
  WalletBalanceFormValues,
  WalletOperationFormValues,
  WalletReservationFormValues,
  WalletTemplateFormValues,
} from '@/features/wallet/types';
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

describe('wallet api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('creates wallet operations with mapped payload', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useWalletOperationCreate(), { wrapper });

    const formValues: WalletOperationFormValues = {
      code: 'WOP-1',
      description: 'Manual adjustment',
      userAccount: 'UA001',
      subscription: 'SUB001',
      walletTemplate: 'WT-01',
      seller: 'SELLER',
      currency: 'EUR',
      type: 'CREDIT',
      operationDate: '2024-01-01T10:00:00Z',
      quantity: 2,
      unitAmountWithoutTax: 50,
      unitAmountWithTax: 60,
      amountWithoutTax: 100,
      amountWithTax: 120,
      amountTax: 20,
    };

    await act(async () => {
      await result.current.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/wallet/operation', {
      body: expect.objectContaining({
        code: 'WOP-1',
        userAccount: 'UA001',
        amountWithTax: 120,
        amountWithoutTax: 100,
      }),
    });
  });

  it('handles reservation actions and cancellation id conversion', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useWalletReservationMutations(), { wrapper });

    const formValues: WalletReservationFormValues = {
      reservationId: 12,
      providerCode: 'PROV',
      sellerCode: 'SELL',
      offerCode: 'OFFER',
      userAccountCode: 'UA001',
      subscriptionDate: '2024-01-01',
      expirationDate: '2024-02-01',
      terminationDate: '2024-03-01',
      creditLimit: 500,
      param1: 'P1',
      param2: 'P2',
      param3: 'P3',
      amountWithTax: true,
    };

    await act(async () => {
      await result.current.create.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/wallet/reservation', {
      body: expect.objectContaining({
        reservationId: 12,
        userAccountCode: 'UA001',
        amountWithTax: true,
      }),
    });

    await act(async () => {
      await result.current.cancel.mutateAsync('45');
    });

    expect(apiClient.DELETE).toHaveBeenCalledWith(
      '/api/rest/billing/wallet/reservation/{reservationId}',
      { params: { path: { reservationId: 45 } } },
    );
  });

  it('maps template mutations payloads with codeOnly flag', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useWalletTemplateMutations(), { wrapper });

    const formValues: WalletTemplateFormValues = {
      code: 'WT-01',
      description: 'Prepaid wallet',
      walletType: 'PREPAID',
      fastRatingLevel: 1,
      lowBalanceLevel: 10,
      rejectLevel: 0,
      rejectLevelEl: 'balance < 0',
      lowBalanceLevelEl: 'balance < 10',
    };

    await act(async () => {
      await result.current.createOrUpdate.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/wallet/template/createOrUpdate', {
      body: expect.objectContaining({
        code: 'WT-01',
        walletType: 'PREPAID',
        codeOnly: false,
      }),
    });
  });

  it('calls balance endpoint with parsed criteria', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        amounts: { amountWithTax: 42, amountWithoutTax: 21 },
      },
    });

    const { result } = renderHook(() => useWalletBalanceOpen(), { wrapper });

    const criteria: WalletBalanceFormValues = {
      sellerCode: 'SELL',
      customerCode: 'CUST',
      customerAccountCode: 'ACC',
      billingAccountCode: 'BILL',
      userAccountCode: 'UA001',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      walletCode: 'WALLET',
      amountWithTax: true,
    };

    await act(async () => {
      const response = await result.current.mutateAsync(criteria);
      expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/wallet/balance/open', {
        body: expect.objectContaining({
          sellerCode: 'SELL',
          walletCode: 'WALLET',
          amountWithTax: true,
        }),
      });
      expect(response).toEqual({ amountWithTax: 42, amountWithoutTax: 21, message: 'ok' });
    });
  });
});
