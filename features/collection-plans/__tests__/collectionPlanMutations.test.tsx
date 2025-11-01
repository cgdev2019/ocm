import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import {
  __internals,
  useAddDunningActionInstance,
  useAddDunningLevelInstance,
  useMassPauseCollectionPlans,
  useMassStopCollectionPlans,
  usePauseCollectionPlan,
  useRemoveDunningActionInstance,
  useRemoveDunningLevelInstance,
  useResumeCollectionPlan,
  useStopCollectionPlan,
  useUpdateDunningActionInstance,
  useUpdateDunningLevelInstance,
} from '@/features/collection-plans/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import type { ActionStatus } from '@/lib/api/helpers';
import {
  collectionPlanMutationResultFixture,
  dunningActionInstanceInputFixture,
  dunningCollectionPlanPauseFixture,
  dunningCollectionPlanStopFixture,
  dunningLevelInstanceInputFixture,
  massPauseCollectionPlanFixture,
  massStopCollectionPlanFixture,
  removeActionInstanceInputFixture,
  removeLevelInstanceInputFixture,
  updateLevelInstanceInputFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return { wrapper };
};

describe('collection plan mutations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('normalizes numeric identifiers from strings', () => {
    expect(__internals.normalizeId(42)).toBe(42);
    expect(__internals.normalizeId(' 101 ')).toBe(101);
    expect(() => __internals.normalizeId('abc')).toThrow('A valid identifier is required');
    expect(() => __internals.normalizeId(null)).toThrow('A valid identifier is required');
  });

  it('extracts the first nested action status', () => {
    const status: ActionStatus = { status: 'SUCCESS', message: 'ok' };
    const nested = { result: [{ payload: { actionStatus: status } }] };
    expect(__internals.extractActionStatus(nested)).toBe(status);
  });

  it('throws with nested action status error message during unwrap', () => {
    expect(() =>
      __internals.unwrapActionResponse(
        { error: { actionStatus: { status: 'FAIL', message: 'Not allowed' } } },
        __internals.COLLECTION_PLAN_ERROR_MESSAGE,
      ),
    ).toThrow('Not allowed');
  });

  it('adds a dunning action instance', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAddDunningActionInstance(), { wrapper });

    await result.current.mutateAsync(dunningActionInstanceInputFixture);

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/dunning/collectionPlan/addDunningActionInstance',
      { body: dunningActionInstanceInputFixture },
    );
  });

  it('adds a dunning level instance', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useAddDunningLevelInstance(), { wrapper });

    await result.current.mutateAsync(dunningLevelInstanceInputFixture);

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/dunning/collectionPlan/addDunningLevelInstance',
      { body: dunningLevelInstanceInputFixture },
    );
  });

  it('pauses multiple collection plans', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useMassPauseCollectionPlans(), { wrapper });

    await result.current.mutateAsync(massPauseCollectionPlanFixture);

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/dunning/collectionPlan/massPause',
      { body: massPauseCollectionPlanFixture },
    );
  });

  it('stops multiple collection plans', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useMassStopCollectionPlans(), { wrapper });

    await result.current.mutateAsync(massStopCollectionPlanFixture);

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/dunning/collectionPlan/massStop',
      { body: massStopCollectionPlanFixture },
    );
  });

  it('pauses a specific collection plan', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => usePauseCollectionPlan(), { wrapper });

    await result.current.mutateAsync({ id: ' 501 ', payload: dunningCollectionPlanPauseFixture });

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/dunning/collectionPlan/pause/{id}',
      { params: { path: { id: 501 } }, body: dunningCollectionPlanPauseFixture },
    );
  });

  it('fails fast when resume mutation returns an error action status', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({
      data: { actionStatus: { status: 'FAIL', message: 'Cannot resume' } },
    });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useResumeCollectionPlan(), { wrapper });

    await expect(result.current.mutateAsync(77)).rejects.toThrow('Cannot resume');
  });

  it('removes action and level instances', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const actionHook = renderHook(() => useRemoveDunningActionInstance(), { wrapper });
    const levelHook = renderHook(() => useRemoveDunningLevelInstance(), { wrapper });

    await actionHook.result.current.mutateAsync(removeActionInstanceInputFixture);
    await levelHook.result.current.mutateAsync(removeLevelInstanceInputFixture);

    expect(apiClient.POST).toHaveBeenNthCalledWith(
      1,
      '/api/rest/v2/dunning/collectionPlan/removeDunningActionInstance',
      { body: removeActionInstanceInputFixture },
    );
    expect(apiClient.POST).toHaveBeenNthCalledWith(
      2,
      '/api/rest/v2/dunning/collectionPlan/removeDunningLevelInstance',
      { body: removeLevelInstanceInputFixture },
    );
  });

  it('stops a collection plan and updates instances', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: collectionPlanMutationResultFixture });

    const { wrapper } = createWrapper();
    const stopHook = renderHook(() => useStopCollectionPlan(), { wrapper });
    const updateActionHook = renderHook(() => useUpdateDunningActionInstance(), { wrapper });
    const updateLevelHook = renderHook(() => useUpdateDunningLevelInstance(), { wrapper });

    await stopHook.result.current.mutateAsync({ id: 301, payload: dunningCollectionPlanStopFixture });
    await updateActionHook.result.current.mutateAsync({
      actionInstanceId: '701',
      payload: dunningActionInstanceInputFixture,
    });
    await updateLevelHook.result.current.mutateAsync({
      levelInstanceId: '702',
      payload: updateLevelInstanceInputFixture,
    });

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/dunning/collectionPlan/stop/{id}',
      { params: { path: { id: 301 } }, body: dunningCollectionPlanStopFixture },
    );
    expect(apiClient.PUT).toHaveBeenNthCalledWith(
      1,
      '/api/rest/v2/dunning/collectionPlan/updateDunningActionInstance/{actionInstanceId}',
      {
        params: { path: { actionInstanceId: 701 } },
        body: dunningActionInstanceInputFixture,
      },
    );
    expect(apiClient.PUT).toHaveBeenNthCalledWith(
      2,
      '/api/rest/v2/dunning/collectionPlan/updateDunningLevelInstance/{levelInstanceId}',
      {
        params: { path: { levelInstanceId: 702 } },
        body: updateLevelInstanceInputFixture,
      },
    );
  });
});
