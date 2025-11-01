import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { useInvoicingPlanItems } from '@/features/invoicing-plan-items/api';
import {
  invoicingPlanItemListFixture,
  invoicingPlanItemsResponseFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useInvoicingPlanItems', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns mapped invoicing plan items from API', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: invoicingPlanItemsResponseFixture });

    const { result } = renderHook(() => useInvoicingPlanItems(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/invoicingPlanItems/list', {
      body: { paging: { offset: 0, limit: 20 } },
    });
    expect(result.current.data).toEqual(invoicingPlanItemListFixture);
  });
});
