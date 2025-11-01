import { useMutation } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess } from '@/lib/api/helpers';
import type { ActionStatus } from '@/lib/api/helpers';
import type {
  CollectionPlanMutationResult,
  DunningActionInstanceInput,
  DunningCollectionPlanPause,
  DunningCollectionPlanStop,
  DunningLevelInstanceInput,
  MassPauseDunningCollectionPlan,
  MassStopDunningCollectionPlan,
  RemoveActionInstanceInput,
  RemoveLevelInstanceInput,
  UpdateLevelInstanceInput,
} from '@/features/collection-plans/types';

const COLLECTION_PLAN_ERROR_MESSAGE = 'Collection plan endpoint returned an error';

const isActionStatus = (value: unknown): value is ActionStatus =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'status' in (value as Record<string, unknown>) &&
      typeof (value as Record<string, unknown>).status === 'string',
  );

const collectActionStatuses = (payload: unknown): ActionStatus[] => {
  if (!payload) {
    return [];
  }

  const statuses: ActionStatus[] = [];
  const seenStatuses = new Set<ActionStatus>();
  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== 'object') {
      continue;
    }

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);

    if (isActionStatus(current) && !seenStatuses.has(current)) {
      statuses.push(current);
      seenStatuses.add(current);
    }

    if (Array.isArray(current)) {
      queue.push(...current);
      continue;
    }

    const values = Object.values(current as Record<string, unknown>);
    for (const value of values) {
      if (!value || (typeof value !== 'object' && !Array.isArray(value))) {
        continue;
      }

      queue.push(value);
    }
  }

  return statuses;
};

const extractActionStatus = (payload: unknown): ActionStatus | undefined =>
  collectActionStatuses(payload)[0];

const unwrapActionResponse = (
  result: { data?: unknown; error?: unknown | null },
  fallbackMessage: string,
): CollectionPlanMutationResult | undefined => {
  if (result.error) {
    if (result.error instanceof Error) {
      throw result.error;
    }

    if (typeof result.error === 'object' && result.error !== null) {
      const message =
        // @ts-expect-error — best effort
        result.error?.message ??
        // @ts-expect-error — nested under actionStatus
        result.error?.actionStatus?.message;
      if (typeof message === 'string' && message.length > 0) {
        throw new Error(message);
      }
    }

    throw new Error(fallbackMessage);
  }

  const data = result.data;

  if (data && typeof data === 'object') {
    if (isActionStatus(data)) {
      assertActionSuccess(data, fallbackMessage);
    }

    const container = data as CollectionPlanMutationResult;
    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, fallbackMessage);
    }
  }

  return data as CollectionPlanMutationResult | undefined;
};

const processActionResponse = (
  result: { data?: unknown; error?: unknown | null },
  fallbackMessage: string,
): CollectionPlanMutationResult | undefined => {
  const data = unwrapActionResponse(result, fallbackMessage);
  const actionStatuses = collectActionStatuses(data);
  for (const status of actionStatuses) {
    assertActionSuccess(status, fallbackMessage);
  }
  return data;
};

const normalizeId = (value: number | string | null | undefined): number => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      throw new Error('A valid identifier is required');
    }

    const parsed = Number(trimmed);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  throw new Error('A valid identifier is required');
};

export const useAddDunningActionInstance = () =>
  useMutation({
    mutationFn: async (payload: DunningActionInstanceInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/addDunningActionInstance' as never,
        { body: payload } as never,
      );
      return processActionResponse(result, 'Unable to add dunning action instance');
    },
  });

export const useAddDunningLevelInstance = () =>
  useMutation({
    mutationFn: async (payload: DunningLevelInstanceInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/addDunningLevelInstance' as never,
        { body: payload } as never,
      );
      return processActionResponse(result, 'Unable to add dunning level instance');
    },
  });

export const useMassPauseCollectionPlans = () =>
  useMutation({
    mutationFn: async (payload: MassPauseDunningCollectionPlan) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/massPause' as never,
        { body: payload } as never,
      );
      return processActionResponse(result, 'Unable to pause collection plans');
    },
  });

export const useMassStopCollectionPlans = () =>
  useMutation({
    mutationFn: async (payload: MassStopDunningCollectionPlan) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/massStop' as never,
        { body: payload } as never,
      );
      return processActionResponse(result, 'Unable to stop collection plans');
    },
  });

export const usePauseCollectionPlan = () =>
  useMutation({
    mutationFn: async ({ id, payload }: { id: number | string | null | undefined; payload: DunningCollectionPlanPause }) => {
      const apiClient = getApiClient();
      const normalizedId = normalizeId(id);
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/pause/{id}' as never,
        { params: { path: { id: normalizedId } }, body: payload } as never,
      );
      return processActionResponse(result, 'Unable to pause collection plan');
    },
  });

export const useRemoveDunningActionInstance = () =>
  useMutation({
    mutationFn: async (payload: RemoveActionInstanceInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/removeDunningActionInstance' as never,
        { body: payload } as never,
      );
      return processActionResponse(result, 'Unable to remove dunning action instance');
    },
  });

export const useRemoveDunningLevelInstance = () =>
  useMutation({
    mutationFn: async (payload: RemoveLevelInstanceInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/removeDunningLevelInstance' as never,
        { body: payload } as never,
      );
      return processActionResponse(result, 'Unable to remove dunning level instance');
    },
  });

export const useResumeCollectionPlan = () =>
  useMutation({
    mutationFn: async (id: number | string | null | undefined) => {
      const apiClient = getApiClient();
      const normalizedId = normalizeId(id);
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/resume/{id}' as never,
        { params: { path: { id: normalizedId } } } as never,
      );
      return processActionResponse(result, 'Unable to resume collection plan');
    },
  });

export const useStopCollectionPlan = () =>
  useMutation({
    mutationFn: async ({ id, payload }: { id: number | string | null | undefined; payload: DunningCollectionPlanStop }) => {
      const apiClient = getApiClient();
      const normalizedId = normalizeId(id);
      const result = await apiClient.POST(
        '/api/rest/v2/dunning/collectionPlan/stop/{id}' as never,
        { params: { path: { id: normalizedId } }, body: payload } as never,
      );
      return processActionResponse(result, 'Unable to stop collection plan');
    },
  });

export const useUpdateDunningActionInstance = () =>
  useMutation({
    mutationFn: async ({
      actionInstanceId,
      payload,
    }: {
      actionInstanceId: number | string | null | undefined;
      payload: DunningActionInstanceInput;
    }) => {
      const apiClient = getApiClient();
      const normalizedId = normalizeId(actionInstanceId);
      const result = await apiClient.PUT(
        '/api/rest/v2/dunning/collectionPlan/updateDunningActionInstance/{actionInstanceId}' as never,
        { params: { path: { actionInstanceId: normalizedId } }, body: payload } as never,
      );
      return processActionResponse(result, 'Unable to update dunning action instance');
    },
  });

export const useUpdateDunningLevelInstance = () =>
  useMutation({
    mutationFn: async ({
      levelInstanceId,
      payload,
    }: {
      levelInstanceId: number | string | null | undefined;
      payload: UpdateLevelInstanceInput;
    }) => {
      const apiClient = getApiClient();
      const normalizedId = normalizeId(levelInstanceId);
      const result = await apiClient.PUT(
        '/api/rest/v2/dunning/collectionPlan/updateDunningLevelInstance/{levelInstanceId}' as never,
        { params: { path: { levelInstanceId: normalizedId } }, body: payload } as never,
      );
      return processActionResponse(result, 'Unable to update dunning level instance');
    },
  });

export const __internals = {
  COLLECTION_PLAN_ERROR_MESSAGE,
  isActionStatus,
  collectActionStatuses,
  extractActionStatus,
  unwrapActionResponse,
  processActionResponse,
  normalizeId,
};
