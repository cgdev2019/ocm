import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { counterTemplateFormSchema, type CounterTemplateFormSchema } from '@/features/counter-templates/schema';
import type {
  ActionStatus,
  CounterTemplateDto,
  CounterTemplateFormValues,
  CounterTemplateListItem,
  CounterTemplateListParams,
  CounterTemplatesResponseDto,
  GetCounterTemplateResponseDto,
} from '@/features/counter-templates/types';

const adaptSingle = (payload: GetCounterTemplateResponseDto | null | undefined): CounterTemplateListItem[] => {
  const template = payload?.counterTemplate;
  if (!template) {
    return [];
  }
  return [
    {
      code: template.code ?? '',
      description: template.description ?? undefined,
      type: template.type ?? undefined,
      counterLevel: template.counterLevel ?? undefined,
      unity: template.unity ?? undefined,
    },
  ];
};

const adaptMany = (payload: CounterTemplatesResponseDto | null | undefined): CounterTemplateListItem[] => {
  const items = payload?.counterTemplates ?? [];
  return items.map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    type: item.type ?? undefined,
    counterLevel: item.counterLevel ?? undefined,
    unity: item.unity ?? undefined,
  }));
};

const mapDtoToForm = (dto: CounterTemplateDto): CounterTemplateFormValues => ({
  code: dto.code,
  description: dto.description ?? '',
  calendar: dto.calendar ?? '',
  calendarCodeEl: dto.calendarCodeEl ?? '',
  unity: dto.unity ?? '',
  type: (dto.type ?? 'USAGE') as CounterTemplateFormValues['type'],
  ceiling: dto.ceiling != null ? String(dto.ceiling) : '',
  counterLevel: dto.counterLevel ?? undefined,
  ceilingExpressionEl: dto.ceilingExpressionEl ?? '',
  notificationLevels: dto.notificationLevels ?? '',
  accumulator: dto.accumulator ?? false,
  accumulatorType: dto.accumulatorType ?? 'SINGLE_VALUE',
  filterEl: dto.filterEl ?? '',
  keyEl: dto.keyEl ?? '',
  valueEl: dto.valueEl ?? '',
});

const mapFormToDto = (values: CounterTemplateFormValues): CounterTemplateDto => ({
  code: values.code,
  description: values.description,
  calendar: values.calendar,
  calendarCodeEl: values.calendarCodeEl,
  unity: values.unity,
  type: values.type,
  ceiling: values.ceiling ? Number(values.ceiling) : undefined,
  counterLevel: values.counterLevel,
  ceilingExpressionEl: values.ceilingExpressionEl,
  notificationLevels: values.notificationLevels,
  accumulator: values.accumulator,
  accumulatorType: values.accumulatorType,
  filterEl: values.filterEl,
  keyEl: values.keyEl,
  valueEl: values.valueEl,
});

export const useCounterTemplates = (params?: CounterTemplateListParams) =>
  useQuery({
    queryKey: queryKeys.counterTemplates.list(params ?? {}),
    queryFn: async () => {
      if (!params?.query) {
        return [] as CounterTemplateListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/counterTemplate', {
        params: { query: { counterTemplateCode: params.query } },
      });
      const payload = unwrapResponse<GetCounterTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load counter template',
      );
      assertActionSuccess(payload?.actionStatus, 'Counter template request failed');
      return adaptSingle(payload);
    },
  });

export const useCounterTemplateListAll = () =>
  useQuery({
    queryKey: queryKeys.counterTemplates.listAll(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/counterTemplate/listGetAll');
      const payload = unwrapResponse<CounterTemplatesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load counter templates',
      );
      assertActionSuccess(payload?.actionStatus, 'Counter templates request failed');
      return adaptMany(payload);
    },
  });

export const useCounterTemplate = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.counterTemplates.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as CounterTemplateFormValues | null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/counterTemplate', {
        params: { query: { counterTemplateCode: code } },
      });
      const payload = unwrapResponse<GetCounterTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load counter template detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Counter template detail failed');
      if (!payload?.counterTemplate) {
        return null;
      }
      const parsed = counterTemplateFormSchema.safeParse(mapDtoToForm(payload.counterTemplate));
      return parsed.success ? parsed.data : mapDtoToForm(payload.counterTemplate);
    },
  });

export const useCounterTemplateMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.counterTemplates.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.counterTemplates.listAll() });
    queryClient.invalidateQueries({ queryKey: queryKeys.counterTemplates.version() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.counterTemplates.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: CounterTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/counterTemplate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create counter template',
      );
      assertActionSuccess(payload, 'Counter template creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: CounterTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/counterTemplate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update counter template',
      );
      assertActionSuccess(payload, 'Counter template update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: CounterTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/counterTemplate/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update counter template',
      );
      assertActionSuccess(payload, 'Counter template createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/counterTemplate/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to enable counter template',
      );
      assertActionSuccess(payload, 'Counter template enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/counterTemplate/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to disable counter template',
      );
      assertActionSuccess(payload, 'Counter template disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/catalog/counterTemplate/{counterTemplateCode}', {
        params: { path: { counterTemplateCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete counter template',
      );
      assertActionSuccess(payload, 'Counter template deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, enable, disable, remove }),
    [create, createOrUpdate, disable, enable, remove, update],
  );
};

export const useCounterTemplateVersion = () =>
  useQuery({
    queryKey: queryKeys.counterTemplates.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/counterTemplate/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load counter template version',
      );
      assertActionSuccess(payload, 'Counter template version request failed');
      return payload.message ?? '';
    },
  });
