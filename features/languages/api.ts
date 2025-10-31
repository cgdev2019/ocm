import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetTradingLanguageResponse,
  LanguageDetailValues,
  LanguageDto,
  LanguageFormValues,
  LanguageListItem,
  TradingLanguagesResponseDto,
} from '@/features/languages/types';

export const DEFAULT_LANGUAGE_PAGE_SIZE = 20;

const adaptList = (items: LanguageDto[] | undefined): LanguageListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    disabled: item.disabled ?? undefined,
  }));

const mapDtoToForm = (dto: LanguageDto): LanguageDetailValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  disabled: dto.disabled ?? undefined,
  languageDescriptions: dto.languageDescriptions,
});

const mapFormToDto = (values: LanguageFormValues): LanguageDto => ({
  code: values.code,
  description: values.description,
  disabled: values.disabled,
});

export const useLanguages = () =>
  useQuery({
    queryKey: queryKeys.languages.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/language/list');
      const payload = unwrapResponse<TradingLanguagesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load languages',
      );
      assertActionSuccess(payload.actionStatus, 'Language list failed');
      return adaptList(payload.tradingLanguages?.language);
    },
  });

export const useLanguage = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.languages.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/language', {
        params: { query: { languageCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetTradingLanguageResponse>(
        { data: result.data, error: result.error },
        'Unable to load language',
      );
      assertActionSuccess(payload.actionStatus, 'Language request failed');
      return payload.language ? mapDtoToForm(payload.language) : null;
    },
  });

export const useLanguageMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.languages.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.languages.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: LanguageFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/language', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language creation failed',
      );
      assertActionSuccess(payload, 'Language creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: LanguageFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/language', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language update failed',
      );
      assertActionSuccess(payload, 'Language update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/language/{languageCode}', {
        params: { path: { languageCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language deletion failed',
      );
      assertActionSuccess(payload, 'Language deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: LanguageFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/language/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language upsert failed',
      );
      assertActionSuccess(payload, 'Language upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/language/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language enable failed',
      );
      assertActionSuccess(payload, 'Language enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/language/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Language disable failed',
      );
      assertActionSuccess(payload, 'Language disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({
      create,
      update,
      remove,
      upsert,
      enable,
      disable,
    }),
    [create, disable, enable, remove, update, upsert],
  );
};
