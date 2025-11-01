import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import {
  useCounterTemplate,
  useCounterTemplateListAll,
  useCounterTemplateMutations,
  useCounterTemplates,
} from '@/features/counter-templates/api';
import type { CounterTemplateFormValues } from '@/features/counter-templates/types';
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

describe('counter template api hooks', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('searches counter templates by code', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        counterTemplate: {
          code: 'CT-001',
          description: 'Counter template',
          type: 'USAGE',
        },
      },
    });

    const { result } = renderHook(() => useCounterTemplates({ query: 'CT-001' }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate', {
      params: { query: { counterTemplateCode: 'CT-001' } },
    });
    expect(result.current.data).toEqual([
      { code: 'CT-001', description: 'Counter template', type: 'USAGE', counterLevel: undefined, unity: undefined },
    ]);
  });

  it('lists all counter templates', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        counterTemplates: [
          { code: 'CT-001', description: 'Counter template 1' },
          { code: 'CT-002', description: 'Counter template 2' },
        ],
      },
    });

    const { result } = renderHook(() => useCounterTemplateListAll(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate/listGetAll');
    expect(result.current.data).toHaveLength(2);
  });

  it('loads a counter template detail', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({
      data: {
        actionStatus: { status: 'SUCCESS', message: 'ok' },
        counterTemplate: {
          code: 'CT-003',
          description: 'Detailed template',
          type: 'NOTIFICATION',
          counterLevel: 'BA',
          accumulator: true,
        },
      },
    });

    const { result } = renderHook(() => useCounterTemplate('CT-003'), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(apiClient.GET).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate', {
      params: { query: { counterTemplateCode: 'CT-003' } },
    });
    expect(result.current.data).toEqual(expect.objectContaining({ code: 'CT-003', type: 'NOTIFICATION' }));
  });

  it('executes counter template mutations', async () => {
    const { wrapper } = createWrapper();
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { status: 'SUCCESS', message: 'ok' } });

    const { result } = renderHook(() => useCounterTemplateMutations(), { wrapper });

    const formValues: CounterTemplateFormValues = {
      code: 'CT-005',
      description: 'New counter',
      calendar: 'CAL',
      calendarCodeEl: '',
      unity: 'HOUR',
      type: 'USAGE',
      ceiling: '10',
      counterLevel: 'SI',
      ceilingExpressionEl: '',
      notificationLevels: '',
      accumulator: false,
      accumulatorType: 'SINGLE_VALUE',
      filterEl: '',
      keyEl: '',
      valueEl: '',
    };

    await act(async () => {
      await result.current.create.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate', {
      body: expect.objectContaining({ code: 'CT-005', ceiling: 10 }),
    });

    await act(async () => {
      await result.current.update.mutateAsync(formValues);
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate', {
      body: expect.objectContaining({ code: 'CT-005' }),
    });

    await act(async () => {
      await result.current.createOrUpdate.mutateAsync(formValues);
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate/createOrUpdate', {
      body: expect.objectContaining({ code: 'CT-005' }),
    });

    await act(async () => {
      await result.current.enable.mutateAsync('CT-005');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate/{code}/enable', {
      params: { path: { code: 'CT-005' } },
    });

    await act(async () => {
      await result.current.disable.mutateAsync('CT-005');
    });

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate/{code}/disable', {
      params: { path: { code: 'CT-005' } },
    });

    await act(async () => {
      await result.current.remove.mutateAsync('CT-005');
    });

    expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/catalog/counterTemplate/{counterTemplateCode}', {
      params: { path: { counterTemplateCode: 'CT-005' } },
    });
  });
});
