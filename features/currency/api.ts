import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  CurrencyDto,
  CurrencyFormValues,
  CurrencyListItem,
  GetTradingCurrencyResponse,
  TradingCurrenciesResponseDto,
} from '@/features/currency/types';

export const DEFAULT_CURRENCY_PAGE_SIZE = 20;

const adaptList = (items: CurrencyDto[] | undefined): CurrencyListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    symbol: item.symbol ?? undefined,
    decimalPlaces: item.decimalPlaces ?? undefined,
    disabled: item.disabled ?? undefined,
  }));

const mapDtoToForm = (dto: CurrencyDto): CurrencyFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  symbol: dto.symbol ?? undefined,
  decimalPlaces: dto.decimalPlaces ?? undefined,
  prCurrencyToThis: dto.prCurrencyToThis ?? undefined,
  disabled: dto.disabled ?? undefined,
});

const mapFormToDto = (values: CurrencyFormValues): CurrencyDto => ({
  code: values.code,
  description: values.description,
  symbol: values.symbol,
  decimalPlaces: values.decimalPlaces,
  prCurrencyToThis: values.prCurrencyToThis,
  disabled: values.disabled,
});

export const useCurrencies = () =>
  useQuery({
    queryKey: queryKeys.currency.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/currency/list');
      const payload = unwrapResponse<TradingCurrenciesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load currencies',
      );
      assertActionSuccess(payload.actionStatus, 'Currency list returned an error');
      return adaptList(payload.tradingCurrencies?.currency);
    },
  });

export const useCurrency = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.currency.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/currency', {
        params: { query: { currencyCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetTradingCurrencyResponse>(
        { data: result.data, error: result.error },
        'Unable to load currency',
      );
      assertActionSuccess(payload.actionStatus, 'Currency retrieval failed');
      return payload.currency ? mapDtoToForm(payload.currency) : null;
    },
  });

export const useCurrencyMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.currency.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.currency.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: CurrencyFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/currency', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency creation failed',
      );
      assertActionSuccess(payload, 'Currency creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: CurrencyFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/currency', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency update failed',
      );
      assertActionSuccess(payload, 'Currency update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/currency/{currencyCode}', {
        params: { path: { currencyCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency delete failed',
      );
      assertActionSuccess(payload, 'Currency delete failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/currency/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency enable failed',
      );
      assertActionSuccess(payload, 'Currency enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/currency/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency disable failed',
      );
      assertActionSuccess(payload, 'Currency disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, upsert, remove, enable, disable }),
    [create, disable, enable, remove, upsert],
  );
};
