import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetScriptInstanceResponseDto,
  ScriptInstanceDto,
  ScriptInstanceFormValues,
  ScriptInstanceListItem,
  ScriptInstanceReponseDto,
} from '@/features/script-instances/types';

export const DEFAULT_SCRIPT_INSTANCES_PAGE_SIZE = 20;

const mapDtoToForm = (dto: ScriptInstanceDto): ScriptInstanceFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  type: dto.type ?? undefined,
  reuse: dto.reuse ?? undefined,
  script: dto.script ?? '',
  disabled: dto.disabled ?? undefined,
  scriptInstanceCategoryCode: dto.scriptInstanceCategoryCode ?? undefined,
  codeOnly: dto.codeOnly ?? undefined,
});

const mapFormToDto = (values: ScriptInstanceFormValues): ScriptInstanceDto => ({
  code: values.code,
  description: values.description,
  type: values.type,
  reuse: values.reuse,
  script: values.script,
  disabled: values.disabled,
  scriptInstanceCategoryCode: values.scriptInstanceCategoryCode,
  codeOnly: values.codeOnly,
  scriptParameters: [],
  executionRoles: [],
  sourcingRoles: [],
  languageDescriptions: [],
});

const adaptList = (scriptInstance: ScriptInstanceDto | undefined): ScriptInstanceListItem[] =>
  scriptInstance
    ? [
        {
          code: scriptInstance.code,
          description: scriptInstance.description ?? undefined,
          type: scriptInstance.type ?? undefined,
          disabled: scriptInstance.disabled ?? undefined,
        },
      ]
    : [];

export const useScriptInstances = (code?: string) =>
  useQuery({
    queryKey: queryKeys.scriptInstances.list(code ?? 'all'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return [] as ScriptInstanceListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/scriptInstance', {
        params: { query: { scriptInstanceCode: code } },
      });
      const payload = unwrapResponse<GetScriptInstanceResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load script instance',
      );
      assertActionSuccess(payload.actionStatus, 'Script instance request failed');
      return adaptList(payload.scriptInstance);
    },
  });

export const useScriptInstance = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.scriptInstances.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/scriptInstance', {
        params: { query: { scriptInstanceCode: code } },
      });
      const payload = unwrapResponse<GetScriptInstanceResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load script instance',
      );
      assertActionSuccess(payload.actionStatus, 'Script instance request failed');
      return payload.scriptInstance ? mapDtoToForm(payload.scriptInstance) : null;
    },
  });

export const useScriptInstanceVersion = () =>
  useQuery({
    queryKey: queryKeys.scriptInstances.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/scriptInstance/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load script instance version',
      );
      assertActionSuccess(payload, 'Script instance version request failed');
      return payload.message ?? '';
    },
  });

export const useScriptInstanceExecute = () =>
  useMutation({
    mutationFn: async ({
      code,
      parameters,
    }: {
      code: string;
      parameters?: Record<string, string>;
    }) => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/scriptInstance/execute', {
        params: {
          query: {
            scriptInstanceCode: code,
            ...parameters,
          },
        },
      });
      return unwrapResponse<Record<string, unknown>>(
        { data: result.data, error: result.error },
        'Script execution failed',
      );
    },
  });

export const useScriptInstanceMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.scriptInstances.list(code) });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.scriptInstances.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: ScriptInstanceFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/scriptInstance', { body: dto });
      const payload = unwrapResponse<ScriptInstanceReponseDto>(
        { data: result.data, error: result.error },
        'Script instance creation failed',
      );
      assertActionSuccess(payload.actionStatus, 'Script instance creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: ScriptInstanceFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/scriptInstance', { body: dto });
      const payload = unwrapResponse<ScriptInstanceReponseDto>(
        { data: result.data, error: result.error },
        'Script instance update failed',
      );
      assertActionSuccess(payload.actionStatus, 'Script instance update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: ScriptInstanceFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/scriptInstance/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ScriptInstanceReponseDto>(
        { data: result.data, error: result.error },
        'Script instance upsert failed',
      );
      assertActionSuccess(payload.actionStatus, 'Script instance upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/scriptInstance/{scriptInstanceCode}', {
        params: { path: { scriptInstanceCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Script instance deletion failed',
      );
      assertActionSuccess(payload, 'Script instance deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/scriptInstance/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Script instance enable failed',
      );
      assertActionSuccess(payload, 'Script instance enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/scriptInstance/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Script instance disable failed',
      );
      assertActionSuccess(payload, 'Script instance disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({
      create,
      update,
      upsert,
      remove,
      enable,
      disable,
    }),
    [create, disable, enable, remove, update, upsert],
  );
};
