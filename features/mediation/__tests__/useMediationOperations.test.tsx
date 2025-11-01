import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { useMediationOperations } from '@/features/mediation/api';
import {
  mediationChargeFormFixture,
  mediationChargeResponseFixture,
  mediationChargeSummaryFixture,
  mediationRegisterFixture,
  mediationReservationFormFixture,
  mediationReservationResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useMediationOperations', () => {
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

  it('registers a CDR payload', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'Registered' } });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useMediationOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.register.mutateAsync(mediationRegisterFixture);
      expect(response).toEqual({ message: 'Registered' });
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/mediation/registerCdrList', {
      body: mediationRegisterFixture.payload,
    });
  });

  it('charges a CDR payload with query flags and maps summary', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: mediationChargeResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useMediationOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.charge.mutateAsync(mediationChargeFormFixture);
      expect(response).toEqual(mediationChargeSummaryFixture);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/mediation/chargeCdr', {
      params: {
        query: {
          isVirtual: true,
          rateTriggeredEdr: true,
          returnEDRs: true,
          returnWalletOperations: false,
          returnWalletOperationDetails: false,
          returnCounters: false,
          generateRTs: false,
          maxDepth: 3,
        },
      },
      body: mediationChargeFormFixture.payload,
    });
  });

  it('reserves a CDR and returns reservation summary', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: mediationReservationResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useMediationOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.reserve.mutateAsync(mediationReservationFormFixture);
      expect(response).toEqual({
        message: mediationReservationResponseFixture.actionStatus?.message,
        reservationId: mediationReservationResponseFixture.reservationId,
        availableQuantity: mediationReservationResponseFixture.availableQuantity,
      });
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/mediation/reserveCdr', {
      body: mediationReservationFormFixture.payload,
    });
  });
});
