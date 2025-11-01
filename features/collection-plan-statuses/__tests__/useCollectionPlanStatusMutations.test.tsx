import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { __internals, useCollectionPlanStatusMutations } from '@/features/collection-plan-statuses/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  collectionPlanStatusDetailFixture,
  collectionPlanStatusDtoFixture,
  collectionPlanStatusFormValuesFixture,
  collectionPlanStatusResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('collection plan status api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });
    const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper, invalidateSpy };
  };

  it('normalizes identifiers', () => {
    expect(__internals.normalizeId(401)).toBe(401);
    expect(__internals.normalizeId(' 401 ')).toBe(401);
    expect(__internals.normalizeId('abc')).toBeNull();
    expect(__internals.normalizeId(null)).toBeNull();
  });

  it('normalizes status values', () => {
    expect(__internals.normalizeStatus(' success ')).toBe('SUCCESS');
    expect(__internals.normalizeStatus('unknown')).toBe(__internals.DEFAULT_STATUS);
    expect(__internals.normalizeStatus(undefined)).toBe(__internals.DEFAULT_STATUS);
  });

  it('maps dto to detail values', () => {
    expect(__internals.mapDtoToDetail(collectionPlanStatusDtoFixture)).toEqual(
      collectionPlanStatusDetailFixture,
    );
  });

  it('maps form values to dto payload', () => {
    expect(
      __internals.mapFormToDto({
        ...collectionPlanStatusFormValuesFixture,
        code: '  STATUS-001  ',
        description: '  Statut actif pour le recouvrement  ',
        colorCode: '  #2ECC71  ',
        dunningSettingsCode: '  DUNNING-001  ',
      }),
    ).toEqual({
      id: 401,
      code: 'STATUS-001',
      status: 'ACTIVE',
      description: 'Statut actif pour le recouvrement',
      colorCode: '#2ECC71',
      dunningSettings: { code: 'DUNNING-001' },
    });
  });

  it('extracts collection plan status from nested responses', () => {
    expect(
      __internals.extractCollectionPlanStatus({
        actionStatus: { status: 'SUCCESS' },
        result: {
          data: {
            dunningCollectionPlanStatus: collectionPlanStatusDtoFixture,
          },
        },
      }),
    ).toEqual(collectionPlanStatusDtoFixture);
  });

  it('throws when the action status indicates a failure', () => {
    expect(() =>
      __internals.unwrapMutationResponse(
        {
          data: { actionStatus: { status: 'FAIL', message: 'Erreur' } },
          error: null,
        },
        'Echec de traitement',
      ),
    ).toThrow('Erreur');
  });

  describe('mutations', () => {
    it('creates a collection plan status using API V2', async () => {
      const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.POST as jest.Mock).mockResolvedValue({
        data: collectionPlanStatusResponseFixture,
      });

      const { wrapper, invalidateSpy } = createWrapper();
      const { result } = renderHook(() => useCollectionPlanStatusMutations(), { wrapper });

      await result.current.create.mutateAsync(collectionPlanStatusFormValuesFixture);

      expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/v2/dunning/collectionPlanStatus', {
        body: __internals.mapFormToDto(collectionPlanStatusFormValuesFixture),
      });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['collectionPlanStatuses'] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['collectionPlanStatuses', 'list'] });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['collectionPlanStatuses', 'detail', 401],
      });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['collectionPlanStatuses', 'detailByCode', 'STATUS-001'],
      });
    });

    it('updates a collection plan status using API V2', async () => {
      const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.PUT as jest.Mock).mockResolvedValue({
        data: collectionPlanStatusResponseFixture,
      });

      const { wrapper, invalidateSpy } = createWrapper();
      const { result } = renderHook(() => useCollectionPlanStatusMutations(), { wrapper });

      await result.current.update.mutateAsync(collectionPlanStatusFormValuesFixture);

      expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/v2/dunning/collectionPlanStatus/{id}', {
        params: { path: { id: 401 } },
        body: __internals.mapFormToDto(collectionPlanStatusFormValuesFixture),
      });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['collectionPlanStatuses'] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['collectionPlanStatuses', 'list'] });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['collectionPlanStatuses', 'detail', 401],
      });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['collectionPlanStatuses', 'detailByCode', 'STATUS-001'],
      });
    });

    it('requires an identifier when updating a collection plan status', async () => {
      const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

      const { wrapper } = createWrapper();
      const { result } = renderHook(() => useCollectionPlanStatusMutations(), { wrapper });

      await expect(
        result.current.update.mutateAsync({ ...collectionPlanStatusFormValuesFixture, id: undefined }),
      ).rejects.toThrow('Identifier is required to update a collection plan status');
      expect(apiClient.PUT).not.toHaveBeenCalled();
    });

    it('deletes a collection plan status using API V2', async () => {
      const apiClient = { DELETE: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.DELETE as jest.Mock).mockResolvedValue({
        data: {
          actionStatus: { status: 'SUCCESS' },
          result: {
            data: { dunningCollectionPlanStatus: collectionPlanStatusDtoFixture },
          },
        },
      });

      const { wrapper, invalidateSpy } = createWrapper();
      const { result } = renderHook(() => useCollectionPlanStatusMutations(), { wrapper });

      await result.current.remove.mutateAsync({ id: ' 401 ', code: ' STATUS-001 ' });

      expect(apiClient.DELETE).toHaveBeenCalledWith(
        '/api/rest/v2/dunning/collectionPlanStatus/{id}',
        { params: { path: { id: 401 } } },
      );
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['collectionPlanStatuses'] });
      expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['collectionPlanStatuses', 'list'] });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['collectionPlanStatuses', 'detail', 401],
      });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['collectionPlanStatuses', 'detailByCode', 'STATUS-001'],
      });
    });

    it('requires an identifier when deleting a collection plan status', async () => {
      const apiClient = { DELETE: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);

      const { wrapper } = createWrapper();
      const { result } = renderHook(() => useCollectionPlanStatusMutations(), { wrapper });

      await expect(
        result.current.remove.mutateAsync({ id: undefined, code: 'STATUS-001' }),
      ).rejects.toThrow('Identifier is required to delete a collection plan status');
      expect(apiClient.DELETE).not.toHaveBeenCalled();
    });
  });
});
