import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { useInvoicingOperations } from '@/features/invoicing/api';
import {
  actionStatusSuccessFixture,
  billingAccountListInRunResponseFixture,
  billingAccountListInRunSummaryFixture,
  billingRunIdFormFixture,
  billingRunInfoResponseFixture,
  billingRunInfoSummaryFixture,
  createBillingRunFormFixture,
  invoiceActionFormFixture,
  postInvoicingReportResponseFixture,
  postInvoicingReportSummaryFixture,
  preInvoicingReportResponseFixture,
  preInvoicingReportSummaryFixture,
} from '@/tests/fixtures/opencellDataset';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useInvoicingOperations', () => {
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

  it('cancels invoices using parsed identifiers', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: actionStatusSuccessFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useInvoicingOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.cancelInvoice.mutateAsync(invoiceActionFormFixture);
      expect(response).toEqual({ message: actionStatusSuccessFixture.message });
    });

    expect(apiClient.PUT).toHaveBeenCalledWith(
      '/api/rest/billing/invoicing/billingRun/{billingRunId}/cancelInvoice',
      {
        params: { path: { billingRunId: invoiceActionFormFixture.billingRunId } },
        body: { invoices: [101, 202, 303], deleteCanceledInvoices: true },
      },
    );
  });

  it('creates a billing run with the provided payload', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    const actionStatus = { status: 'SUCCESS', message: 'Billing run created', entityCode: 'PLAN-2024-BR-001' };
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: actionStatus });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useInvoicingOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.createBillingRun.mutateAsync(createBillingRunFormFixture);
      expect(response).toEqual({ message: actionStatus.message });
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/invoicing/createBillingRun', {
      body: {
        billingCycleCode: 'PLAN-2024',
        billingRunTypeEnum: 'AUTOMATIC',
        startDate: '2024-01-01T00:00:00.000Z',
        endDate: '2024-01-31T23:59:59.000Z',
        invoiceDate: '2024-02-01T00:00:00.000Z',
        lastTransactionDate: '2024-01-31T12:00:00.000Z',
        referenceDate: 'END_DATE',
        collectionDate: '2024-02-10T00:00:00.000Z',
        computeDatesAtValidation: true,
        skipValidationScript: true,
        rejectAutoAction: 'MOVE',
        suspectAutoAction: 'MANUAL_ACTION',
        generateAO: true,
      },
    });
  });

  it('returns billing accounts formatted for display', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: billingAccountListInRunResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useInvoicingOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.billingAccountListInRun.mutateAsync(billingRunIdFormFixture);
      expect(response).toEqual(billingAccountListInRunSummaryFixture);
    });

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/billing/invoicing/getBillingAccountListInRun',
      { body: billingRunIdFormFixture.billingRunId },
    );
  });

  it('adapts billing run information to a summary', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: billingRunInfoResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useInvoicingOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.billingRunInfo.mutateAsync(billingRunIdFormFixture);
      expect(response).toEqual(billingRunInfoSummaryFixture);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/invoicing/getBillingRunInfo', {
      body: billingRunIdFormFixture.billingRunId,
    });
  });

  it('returns the pre-invoicing report summary', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: preInvoicingReportResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useInvoicingOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.preInvoicingReport.mutateAsync(billingRunIdFormFixture);
      expect(response).toEqual(preInvoicingReportSummaryFixture);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/invoicing/getPreInvoicingReport', {
      body: billingRunIdFormFixture.billingRunId,
    });
  });

  it('returns the post-invoicing report summary', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: postInvoicingReportResponseFixture });

    const { wrapper } = renderWithClient();
    const { result } = renderHook(() => useInvoicingOperations(), { wrapper });

    await act(async () => {
      const response = await result.current.postInvoicingReport.mutateAsync(billingRunIdFormFixture);
      expect(response).toEqual(postInvoicingReportSummaryFixture);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/billing/invoicing/getPostInvoicingReport', {
      body: billingRunIdFormFixture.billingRunId,
    });
  });
});
