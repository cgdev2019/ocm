import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type { GetTaxResponse, GetTaxesResponse, TaxDto, TaxFormValues } from '@/features/taxes/types';

export const DEFAULT_TAXES_PAGE_SIZE = 20;

const adaptList = (items: TaxDto[] | undefined) =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    percent: item.percent ?? undefined,
    accountingCode: item.accountingCode ?? undefined,
  }));

const mapToDto = (values: TaxFormValues): TaxDto => ({
  code: values.code,
  description: values.description,
  percent: values.percent,
  accountingCode: values.accountingCode,
  subTaxes: [],
});

export const useTaxes = () =>
  useQuery({
    queryKey: queryKeys.taxes.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/tax/listGetAll');
      const payload = unwrapResponse<GetTaxesResponse>(
        { data: result.data, error: result.error },
        'Unable to load taxes',
      );
      assertActionSuccess(payload.actionStatus, 'Taxes endpoint returned an error');
      return adaptList(payload.taxesDto?.tax);
    },
  });

export const useTax = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.taxes.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/tax', {
        params: { query: { taxCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetTaxResponse>(
        { data: result.data, error: result.error },
        'Unable to load tax',
      );
      assertActionSuccess(payload.actionStatus, 'Tax retrieval failed');
      return payload.tax ?? null;
    },
  });

export const useTaxMutations = () => {
  const queryClient = useQueryClient();

  const upsert = useMutation({
    mutationFn: async (values: TaxFormValues) => {
      const apiClient = getApiClient();
      const dto = mapToDto(values);
      const result = await apiClient.PUT('/api/rest/tax', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Tax save failed',
      );
      assertActionSuccess(payload, 'Tax save failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.taxes.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.taxes.detail(variables.code) });
    },
  });

  const create = useMutation({
    mutationFn: async (values: TaxFormValues) => {
      const apiClient = getApiClient();
      const dto = mapToDto(values);
      const result = await apiClient.POST('/api/rest/tax', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Tax creation failed',
      );
      assertActionSuccess(payload, 'Tax creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.taxes.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.taxes.detail(variables.code) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/tax/{taxCode}', {
        params: { path: { taxCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Tax delete failed',
      );
      assertActionSuccess(payload, 'Tax delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.taxes.list() });
    },
  });

  return useMemo(() => ({ create, upsert, remove }), [create, remove, upsert]);
};
