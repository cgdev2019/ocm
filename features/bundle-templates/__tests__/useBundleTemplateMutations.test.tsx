import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, act } from '@testing-library/react';
import { useBundleTemplateMutations } from '@/features/bundle-templates/api';
import type { BundleTemplateFormValues } from '@/features/bundle-templates/types';
import { getApiClient, type ApiClient } from '@/lib/api/client';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('useBundleTemplateMutations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('creates bundle templates with mapped payload', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'OK' } });

    const { result } = renderHook(() => useBundleTemplateMutations(), { wrapper });

    const formValues: BundleTemplateFormValues = {
      code: 'BUNDLE-1',
      name: 'Premium Bundle',
      description: 'Top tier bundle',
      lifeCycleStatus: 'ACTIVE',
      modelCode: 'MODEL-A',
      productChargeTemplateCodes: 'CHG1,CHG2',
      bundleProductTemplateCodes: 'PRD1:2\nPRD2',
      walletTemplateCodes: 'WAL1',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      disabled: false,
    };

    await act(async () => {
      await result.current.create.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/bundleTemplate', {
      body: expect.objectContaining({
        code: 'BUNDLE-1',
        name: 'Premium Bundle',
        lifeCycleStatus: 'ACTIVE',
        productChargeTemplates: [{ code: 'CHG1' }, { code: 'CHG2' }],
        bundleProductTemplates: [
          { productTemplate: { code: 'PRD1' }, quantity: 2 },
          { productTemplate: { code: 'PRD2' }, quantity: 1 },
        ],
        walletTemplates: [{ code: 'WAL1' }],
      }),
    });
  });
});
