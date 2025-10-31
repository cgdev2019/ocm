import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  CountryIsoDto,
  CountryIsoFormValues,
  CountryIsoListItem,
  GetCountriesIsoResponse,
  GetCountryIsoResponse,
} from '@/features/country-iso/types';

export const DEFAULT_COUNTRY_ISO_PAGE_SIZE = 20;

const adaptList = (items: CountryIsoDto[] | undefined): CountryIsoListItem[] =>
  (items ?? []).map((item) => ({
    countryCode: item.countryCode ?? '',
    description: item.description ?? undefined,
    currencyCode: item.currencyCode,
    languageCode: item.languageCode,
  }));

const mapDtoToForm = (dto: CountryIsoDto): CountryIsoFormValues => ({
  countryCode: dto.countryCode ?? '',
  description: dto.description ?? undefined,
  currencyCode: dto.currencyCode,
  languageCode: dto.languageCode,
});

const mapFormToDto = (values: CountryIsoFormValues): CountryIsoDto => ({
  countryCode: values.countryCode,
  description: values.description,
  currencyCode: values.currencyCode,
  languageCode: values.languageCode,
});

export const useCountryIsos = () =>
  useQuery({
    queryKey: queryKeys.countryIso.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/countryIso/listGetAll');
      const payload = unwrapResponse<GetCountriesIsoResponse>(
        { data: result.data, error: result.error },
        'Unable to load countries ISO',
      );
      assertActionSuccess(payload.actionStatus, 'Country ISO list returned an error');
      return adaptList(payload.countries);
    },
  });

export const useCountryIso = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.countryIso.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/countryIso', {
        params: { query: { countryCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetCountryIsoResponse>(
        { data: result.data, error: result.error },
        'Unable to load country ISO',
      );
      assertActionSuccess(payload.actionStatus, 'Country ISO retrieval failed');
      return payload.country ? mapDtoToForm(payload.country) : null;
    },
  });

export const useCountryIsoMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: CountryIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/countryIso', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Country ISO creation failed',
      );
      assertActionSuccess(payload, 'Country ISO creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.countryIso.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.countryIso.detail(variables.countryCode) });
    },
  });

  const upsert = useMutation({
    mutationFn: async (values: CountryIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/countryIso', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Country ISO update failed',
      );
      assertActionSuccess(payload, 'Country ISO update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.countryIso.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.countryIso.detail(variables.countryCode) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/countryIso/{countryCode}', {
        params: { path: { countryCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Country ISO delete failed',
      );
      assertActionSuccess(payload, 'Country ISO delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.countryIso.list() });
    },
  });

  return useMemo(() => ({ create, upsert, remove }), [create, remove, upsert]);
};
