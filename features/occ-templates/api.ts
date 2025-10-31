import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetOccTemplateResponse,
  GetOccTemplatesResponse,
  OccTemplateDto,
  OccTemplateFormValues,
  OccTemplateListItem,
} from '@/features/occ-templates/types';

export const DEFAULT_OCC_TEMPLATE_PAGE_SIZE = 20;

const adaptList = (items: OccTemplateDto[] | undefined): OccTemplateListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    occCategory: item.occCategory,
    accountingCode: item.accountingCode,
    accountCode: item.accountCode ?? undefined,
  }));

const mapDtoToForm = (dto: OccTemplateDto): OccTemplateFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  accountingCode: dto.accountingCode,
  accountCode: dto.accountCode ?? undefined,
  occCategory: dto.occCategory,
  accountCodeClientSide: dto.accountCodeClientSide ?? undefined,
  journalCode: dto.journalCode ?? undefined,
  accountingSchemeCode: dto.accountingScheme?.code ?? undefined,
  contractAccountingCode: dto.contractAccountingCode ?? undefined,
  contraAccountingCode2: dto.contraAccountingCode2 ?? undefined,
});

const mapFormToDto = (values: OccTemplateFormValues): OccTemplateDto => ({
  code: values.code,
  description: values.description,
  accountingCode: values.accountingCode,
  accountCode: values.accountCode,
  occCategory: values.occCategory,
  accountCodeClientSide: values.accountCodeClientSide,
  journalCode: values.journalCode,
  accountingScheme: values.accountingSchemeCode
    ? {
        code: values.accountingSchemeCode,
        scriptCode: values.accountingSchemeCode,
      }
    : undefined,
  contractAccountingCode: values.contractAccountingCode,
  contraAccountingCode2: values.contraAccountingCode2,
});

export const useOccTemplates = () =>
  useQuery({
    queryKey: queryKeys.occTemplates.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/occTemplate/list');
      const payload = unwrapResponse<GetOccTemplatesResponse>(
        { data: result.data, error: result.error },
        'Unable to load OCC templates',
      );
      assertActionSuccess(payload.actionStatus, 'Occ template list request failed');
      return adaptList(payload.occTemplates?.occTemplate);
    },
  });

export const useOccTemplate = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.occTemplates.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/occTemplate', {
        params: { query: { occTemplateCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetOccTemplateResponse>(
        { data: result.data, error: result.error },
        'Unable to load OCC template',
      );
      assertActionSuccess(payload.actionStatus, 'Occ template request failed');
      return payload.occTemplate ? mapDtoToForm(payload.occTemplate) : null;
    },
  });

export const useOccTemplateVersion = () =>
  useQuery({
    queryKey: queryKeys.occTemplates.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/occTemplate/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to retrieve occ template version',
      );
      assertActionSuccess(payload, 'Occ template version request failed');
      return payload.message ?? '';
    },
  });

export const useOccTemplateMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.occTemplates.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.occTemplates.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: OccTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/occTemplate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Occ template creation failed',
      );
      assertActionSuccess(payload, 'Occ template creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: OccTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/occTemplate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Occ template update failed',
      );
      assertActionSuccess(payload, 'Occ template update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/occTemplate/{occTemplateCode}', {
        params: { path: { occTemplateCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Occ template deletion failed',
      );
      assertActionSuccess(payload, 'Occ template deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: OccTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/occTemplate/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Occ template upsert failed',
      );
      assertActionSuccess(payload, 'Occ template upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return useMemo(
    () => ({
      create,
      update,
      remove,
      upsert,
    }),
    [create, remove, upsert, update],
  );
};
