import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import {
  useBusinessOfferModel,
  useBusinessOfferModelMutations,
  useBusinessOfferModels,
} from '@/features/business-offer-models/api';
import type { BusinessOfferModelFormValues } from '@/features/business-offer-models/types';
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

describe('business offer model api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('lists business offer models with mapped fields', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        modules: [
          { code: 'BOM-1', description: 'Default offer', license: 'MIT', disabled: false },
        ],
      },
    });

    const { result } = renderHook(() => useBusinessOfferModels(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/businessOfferModel/list', {
      params: { query: undefined },
    });
    expect(result.current.data).toEqual([
      { code: 'BOM-1', description: 'Default offer', license: 'MIT', disabled: false },
    ]);
  });

  it('loads business offer model detail and maps offer template', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        businessOfferModel: {
          code: 'BOM-1',
          description: 'Default offer',
          license: 'MIT',
          disabled: false,
          offerTemplate: { code: 'OFFER-1' },
        },
      },
    });

    const { result } = renderHook(() => useBusinessOfferModel('BOM-1'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/businessOfferModel', {
      params: { query: { businessOfferModelCode: 'BOM-1' } },
    });
    expect(result.current.data).toEqual({
      code: 'BOM-1',
      description: 'Default offer',
      license: 'MIT',
      disabled: false,
      offerTemplateCode: 'OFFER-1',
    });
  });

  it('maps mutation payloads for create, install and delete', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useBusinessOfferModelMutations(), { wrapper });

    const formValues: BusinessOfferModelFormValues = {
      code: 'BOM-1',
      description: 'Default offer',
      disabled: false,
      license: 'MIT',
      offerTemplateCode: 'OFFER-1',
    };

    await act(async () => {
      await result.current.create.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/businessOfferModel', {
      body: expect.objectContaining({
        code: 'BOM-1',
        offerTemplate: { code: 'OFFER-1' },
        moduleItems: [],
      }),
    });

    await act(async () => {
      await result.current.install.mutateAsync(formValues);
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/catalog/businessOfferModel/install', {
      body: expect.objectContaining({ offerTemplate: { code: 'OFFER-1' } }),
    });

    await act(async () => {
      await result.current.remove.mutateAsync('BOM-1');
    });

    expect(apiClient.DELETE).toHaveBeenCalledWith(
      '/api/rest/catalog/businessOfferModel/{businessOfferModelCode}',
      { params: { path: { businessOfferModelCode: 'BOM-1' } } },
    );
  });
});
