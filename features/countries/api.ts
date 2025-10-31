import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  CountryDto,
  CountryFormValues,
  CountryListItem,
  GetTradingCountryResponse,
  TradingCountriesResponseDto,
  TradingCountryDto,
} from '@/features/countries/types';

export const DEFAULT_COUNTRIES_PAGE_SIZE = 20;

const adaptList = (items: TradingCountryDto[] | undefined): CountryListItem[] =>
  (items ?? []).map((item) => ({
    countryCode: item.countryCode ?? '',
    name: item.description ?? undefined,
    currencyCode: item.currencyCode,
    languageCode: item.languageCode ?? undefined,
    disabled: false,
  }));

const mapDtoToForm = (dto: CountryDto): CountryFormValues => ({
  countryCode: dto.countryCode ?? '',
  name: dto.name ?? undefined,
  currencyCode: dto.currencyCode,
  languageCode: dto.languageCode ?? undefined,
  disabled: dto.disabled ?? undefined,
});

const mapFormToDto = (values: CountryFormValues): CountryDto => ({
  countryCode: values.countryCode,
  name: values.name,
  currencyCode: values.currencyCode,
  languageCode: values.languageCode,
  disabled: values.disabled,
});

export const useCountries = () =>
  useQuery({
    queryKey: queryKeys.countries.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/country/list');
      const payload = unwrapResponse<TradingCountriesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load trading countries',
      );
      assertActionSuccess(payload.actionStatus, 'Country list returned an error');
      return adaptList(payload.tradingCountries?.country);
    },
  });

export const useCountry = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.countries.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/country', {
        params: { query: { countryCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetTradingCountryResponse>(
        { data: result.data, error: result.error },
        'Unable to load trading country',
      );
      assertActionSuccess(payload.actionStatus, 'Trading country retrieval failed');
      return payload.country ? mapDtoToForm(payload.country) : null;
    },
  });

export const useCountryMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: CountryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/country', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Country creation failed',
      );
      assertActionSuccess(payload, 'Country creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.countries.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.countries.detail(variables.countryCode) });
    },
  });

  const upsert = useMutation({
    mutationFn: async (values: CountryFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/country', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Country update failed',
      );
      assertActionSuccess(payload, 'Country update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.countries.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.countries.detail(variables.countryCode) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/country/{countryCode}', {
        params: { path: { countryCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Country delete failed',
      );
      assertActionSuccess(payload, 'Country delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.countries.list() });
    },
  });

  return useMemo(() => ({ create, upsert, remove }), [create, remove, upsert]);
};
