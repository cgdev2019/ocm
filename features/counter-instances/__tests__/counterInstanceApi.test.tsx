import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import {
  __internals,
  useCounterInstance,
  useCounterInstanceMutations,
  useCounterInstances,
} from '@/features/counter-instances/api';
import { counterPeriodFormSchema } from '@/features/counter-instances/schema';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  counterInstanceDetailFixture,
  counterInstanceDtoFixture,
  counterInstanceFormFixture,
  counterInstanceListItemFixture,
  counterInstanceListResponseFixture,
} from '@/tests/fixtures/counterInstance';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('counter instance api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper, queryClient, invalidateSpy };
  };

  it('maps DTO to detail form values', () => {
    expect(__internals.mapDtoToDetail(counterInstanceDtoFixture)).toEqual(
      counterInstanceDetailFixture,
    );
  });

  it('maps form values to dto payload', () => {
    expect(__internals.mapCounterInstanceFormToDto(counterInstanceFormFixture)).toEqual(
      counterInstanceDtoFixture,
    );
  });

  it('rejects invalid accumulated values json at validation layer', () => {
    const period = {
      ...counterInstanceFormFixture.counterPeriods[0],
      accumulatedValuesJson: '{"voice":"oops"}',
    };

    const result = counterPeriodFormSchema.safeParse(period);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toEqual(['accumulatedValuesJson']);
    expect(result.error?.issues[0]?.message).toBe(
      'forms.counterInstance.invalidAccumulatedValues',
    );
  });

  it('loads counter instances list using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: counterInstanceListResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(
      () => useCounterInstances({ page: 0, pageSize: 20, search: '' }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/generic/all/{entityName}',
      expect.objectContaining({ params: { path: { entityName: 'CounterInstance' } } }),
    );
    expect(result.current.data?.items).toEqual([counterInstanceListItemFixture]);
    expect(result.current.data?.paging.totalRecords).toBe(1);
  });

  it('loads a single counter instance detail using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: counterInstanceListResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useCounterInstance('CINST-001'), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(counterInstanceDetailFixture));

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/generic/all/{entityName}',
      expect.objectContaining({
        params: { path: { entityName: 'CounterInstance' } },
        body: expect.objectContaining({ filters: { code: 'CINST-001' } }),
      }),
    );
  });

  it('executes counter instance mutations', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useCounterInstanceMutations(), { wrapper });

    const createPayload = { ...counterInstanceFormFixture, id: undefined };
    const expectedCreateDto = __internals.mapCounterInstanceFormToDto(createPayload);

    await result.current.create.mutateAsync(createPayload);

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/accountsManagement/counterInstance',
      { body: expectedCreateDto },
    );

    const updatePayload = counterInstanceFormFixture;
    const expectedUpdateDto = __internals.mapCounterInstanceFormToDto(updatePayload);

    await result.current.update.mutateAsync(updatePayload);

    expect(apiClient.PUT).toHaveBeenCalledWith(
      '/api/rest/v2/accountsManagement/counterInstance/{id}',
      {
        params: { path: { id: expectedUpdateDto.id } },
        body: expectedUpdateDto,
      },
    );

    expect(invalidateSpy).toHaveBeenCalled();
  });
});
