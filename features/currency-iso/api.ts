import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  CurrencyIsoDto,
  CurrencyIsoFormValues,
  CurrencyIsoListItem,
  GetCurrenciesIsoResponse,
  GetCurrencyIsoResponse,
} from '@/features/currency-iso/types';

export const DEFAULT_CURRENCY_ISO_PAGE_SIZE = 20;

const adaptList = (items: CurrencyIsoDto[] | undefined): CurrencyIsoListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
  }));

const mapDtoToForm = (dto: CurrencyIsoDto): CurrencyIsoFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
});

const mapFormToDto = (values: CurrencyIsoFormValues): CurrencyIsoDto => ({
  code: values.code,
  description: values.description,
});

export const useCurrencyIsos = () =>
  useQuery({
    queryKey: queryKeys.currencyIso.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/currencyIso/listGetAll');
      const payload = unwrapResponse<GetCurrenciesIsoResponse>(
        { data: result.data, error: result.error },
        'Unable to load currencies ISO',
      );
      assertActionSuccess(payload.actionStatus, 'Currency ISO list returned an error');
      return adaptList(payload.currencies);
    },
  });

export const useCurrencyIso = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.currencyIso.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/currencyIso', {
        params: { query: { currencyCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetCurrencyIsoResponse>(
        { data: result.data, error: result.error },
        'Unable to load currency ISO',
      );
      assertActionSuccess(payload.actionStatus, 'Currency ISO retrieval failed');
      return payload.currency ? mapDtoToForm(payload.currency) : null;
    },
  });

export const useCurrencyIsoMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: CurrencyIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/currencyIso', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency ISO creation failed',
      );
      assertActionSuccess(payload, 'Currency ISO creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.currencyIso.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.currencyIso.detail(variables.code) });
    },
  });

  const upsert = useMutation({
    mutationFn: async (values: CurrencyIsoFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/currencyIso', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency ISO update failed',
      );
      assertActionSuccess(payload, 'Currency ISO update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.currencyIso.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.currencyIso.detail(variables.code) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/currencyIso/{currencyCode}', {
        params: { path: { currencyCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Currency ISO delete failed',
      );
      assertActionSuccess(payload, 'Currency ISO delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.currencyIso.list() });
    },
  });

  return useMemo(() => ({ create, upsert, remove }), [create, remove, upsert]);
};
