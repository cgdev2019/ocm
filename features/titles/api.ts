import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  TitleDto,
  TitleFormValues,
  TitleListItem,
  TitleDetailValues,
  TitlesResponseDto,
  TitleResponseDto,
} from '@/features/titles/types';

export const DEFAULT_TITLE_PAGE_SIZE = 20;

const adaptList = (items: TitleDto[] | undefined): TitleListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    isCompany: Boolean(item.isCompany),
  }));

const mapDtoToForm = (dto: TitleDto): TitleDetailValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  isCompany: Boolean(dto.isCompany),
  languageDescriptions: dto.languageDescriptions,
});

const mapFormToDto = (values: TitleFormValues): TitleDto => ({
  code: values.code,
  description: values.description,
  isCompany: Boolean(values.isCompany),
});

export const useTitles = () =>
  useQuery({
    queryKey: queryKeys.titles.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/title/list');
      const payload = unwrapResponse<TitlesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load titles',
      );
      assertActionSuccess(payload.actionStatus, 'Title list request failed');
      return adaptList(payload.titles?.title);
    },
  });

export const useAllTitles = () =>
  useQuery({
    queryKey: queryKeys.titles.all(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/title/listGetAll');
      const payload = unwrapResponse<TitlesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load all titles',
      );
      assertActionSuccess(payload.actionStatus, 'Title list request failed');
      return adaptList(payload.titles?.title);
    },
  });

export const useTitle = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.titles.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/title', {
        params: { query: { titleCode: code ?? '' } },
      });
      const payload = unwrapResponse<TitleResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load title',
      );
      assertActionSuccess(payload.actionStatus, 'Title request failed');
      return payload.titleDto ? mapDtoToForm(payload.titleDto) : null;
    },
  });

export const useTitleMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.titles.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.titles.all() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.titles.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: TitleFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/title', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Title creation failed',
      );
      assertActionSuccess(payload, 'Title creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: TitleFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/account/title', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Title update failed',
      );
      assertActionSuccess(payload, 'Title update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/account/title/{titleCode}', {
        params: { path: { titleCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Title deletion failed',
      );
      assertActionSuccess(payload, 'Title deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: TitleFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/title/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Title upsert failed',
      );
      assertActionSuccess(payload, 'Title upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return useMemo(() => ({ create, update, remove, upsert }), [create, remove, update, upsert]);
};

export const useTitleVersion = () =>
  useQuery({
    queryKey: queryKeys.titles.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/title/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load title service version',
      );
      assertActionSuccess(payload, 'Title version request failed');
      return payload.message ?? '';
    },
  });
