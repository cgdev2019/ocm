import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetLanguageIsoResponse,
  GetLanguagesIsoResponse,
  LanguageIsoDto,
  LanguageIsoFormValues,
  LanguageIsoListItem,
} from '@/features/language-iso/types';

export const DEFAULT_LANGUAGE_ISO_PAGE_SIZE = 20;

const adaptList = (items: LanguageIsoDto[] | undefined): LanguageIsoListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
  }));

const mapDtoToForm = (dto: LanguageIsoDto): LanguageIsoFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
});

const mapFormToDto = (values: LanguageIsoFormValues): LanguageIsoDto => ({
  code: values.code,
  description: values.description,
});

export const useLanguageIsos = () =>
  useQuery({
    queryKey: queryKeys.languageIso.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/languageIso/listGetAll');
      const payload = unwrapResponse<GetLanguagesIsoResponse>(
        { data: result.data, error: result.error },
        'Unable to load languages ISO',
      );
      assertActionSuccess(payload.actionStatus, 'Language ISO list failed');
      return adaptList(payload.languages);
    },
  });

export const useLanguageIso = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.languageIso.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/languageIso', {
        params: { query: { languageCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetLanguageIsoResponse>(
        { data: result.data, error: result.error },
        'Unable to load language ISO',
      );
      assertActionSuccess(payload.actionStatus, 'Language ISO request failed');
      return payload.language ? mapDtoToForm(payload.language) : null;
    },
  });

export const useLanguageIsoMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.languageIso.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.languageIso.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: LanguageIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/languageIso', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language ISO creation failed',
      );
      assertActionSuccess(payload, 'Language ISO creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: LanguageIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/languageIso', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language ISO update failed',
      );
      assertActionSuccess(payload, 'Language ISO update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/languageIso/{languageCode}', {
        params: { path: { languageCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language ISO deletion failed',
      );
      assertActionSuccess(payload, 'Language ISO deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: LanguageIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/languageIso/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language ISO upsert failed',
      );
      assertActionSuccess(payload, 'Language ISO upsert failed');
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
    [create, remove, update, upsert],
  );
};
