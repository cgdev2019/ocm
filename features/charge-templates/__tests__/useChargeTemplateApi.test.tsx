import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useChargeTemplate, useChargeTemplateMutations, useChargeTemplates } from '@/features/charge-templates/api';
import type { ChargeTemplateFormValues } from '@/features/charge-templates/types';
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

describe('charge template api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('searches charge templates by code', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        chargeTemplate: {
          code: 'CHARGE-001',
          description: 'Charge template',
          status: 'ACTIVE',
          invoiceSubCategory: 'INV-1',
        },
      },
    });

    const { result } = renderHook(() => useChargeTemplates({ query: 'CHARGE-001' }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/chargeTemplate', {
      params: { query: { chargeTemplateCode: 'CHARGE-001' } },
    });
    expect(result.current.data).toEqual([
      {
        code: 'CHARGE-001',
        description: 'Charge template',
        invoiceSubCategory: 'INV-1',
        status: 'ACTIVE',
      },
    ]);
  });

  it('loads a charge template detail', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        chargeTemplate: {
          code: 'CHARGE-002',
          description: 'Another template',
          status: 'DRAFT',
          invoiceSubCategory: 'INV-2',
        },
      },
    });

    const { result } = renderHook(() => useChargeTemplate('CHARGE-002'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/chargeTemplates/{chargeTemplateCode}', {
      params: { path: { chargeTemplateCode: 'CHARGE-002' } },
    });
    expect(result.current.data).toEqual(
      expect.objectContaining({ code: 'CHARGE-002', description: 'Another template', status: 'DRAFT' }),
    );
  });

  it('handles duplicate and status update mutations', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn(), POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'SUCCESS', message: 'duplicated' }, chargeTemplate: { code: 'CHARGE-001' } },
    });
    (apiClient.PUT as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'SUCCESS', message: 'updated' }, chargeTemplate: { code: 'CHARGE-001' } },
    });

    const { result } = renderHook(() => useChargeTemplateMutations(), { wrapper });

    await act(async () => {
      await result.current.duplicate.mutateAsync('CHARGE-001');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/chargeTemplates/{chargeTemplateCode}/duplicate', {
      params: { path: { chargeTemplateCode: 'CHARGE-001' } },
    });

    const formValues: ChargeTemplateFormValues = {
      code: 'CHARGE-001',
      description: 'Charge template',
      invoiceSubCategory: 'INV-1',
      amountEditable: false,
      ratingScriptCode: '',
      taxClassCode: '',
      status: 'ACTIVE',
      revenueRecognitionRuleCode: '',
      unitMultiplicator: '',
      unitNbDecimal: '',
      dropZeroWo: false,
    };

    await act(async () => {
      await result.current.updateStatus.mutateAsync({ code: formValues.code, status: formValues.status ?? 'ACTIVE' });
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/catalog/chargeTemplates/{chargeTemplateCode}/status/{status}', {
      params: { path: { chargeTemplateCode: 'CHARGE-001', status: 'ACTIVE' } },
    });
  });
});
