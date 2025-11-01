import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  AccountingCodeDetailValues,
  AccountingCodeDto,
  AccountingCodeFormValues,
  AccountingCodeGetResponseDto,
  AccountingCodeListItem,
  AccountingCodeListResponseDto,
} from '@/features/accounting-codes/types';

export const DEFAULT_ACCOUNTING_CODES_PAGE_SIZE = 20;

const adaptList = (items: AccountingCodeDto[] | undefined): AccountingCodeListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    chartOfAccountTypeEnum: item.chartOfAccountTypeEnum ?? undefined,
    chartOfAccountViewTypeEnum: item.chartOfAccountViewTypeEnum ?? undefined,
    parentAccountingCode: item.parentAccountingCode ?? undefined,
    disabled: item.disabled ?? undefined,
  }));

const mapDtoToForm = (dto: AccountingCodeDto): AccountingCodeDetailValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  parentAccountingCode: dto.parentAccountingCode ?? undefined,
  chartOfAccountTypeEnum: dto.chartOfAccountTypeEnum ?? undefined,
  chartOfAccountViewTypeEnum: dto.chartOfAccountViewTypeEnum ?? undefined,
  reportingAccount: dto.reportingAccount ?? undefined,
  notes: dto.notes ?? undefined,
  disabled: dto.disabled ?? undefined,
  migrated: dto.migrated ?? undefined,
});

const mapFormToDto = (values: AccountingCodeFormValues): AccountingCodeDto => ({
  code: values.code,
  description: values.description,
  parentAccountingCode: values.parentAccountingCode,
  chartOfAccountTypeEnum: values.chartOfAccountTypeEnum,
  chartOfAccountViewTypeEnum: values.chartOfAccountViewTypeEnum,
  reportingAccount: values.reportingAccount,
  notes: values.notes,
  disabled: values.disabled,
  migrated: values.migrated,
});

export const useAccountingCodes = () =>
  useQuery({
    queryKey: queryKeys.accountingCodes.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/accountingCode/listGetAll');
      const payload = unwrapResponse<AccountingCodeListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load accounting codes',
      );
      assertActionSuccess(payload.actionStatus, 'Accounting codes endpoint returned an error');
      return adaptList(payload.accountingCodes);
    },
  });

export const useAccountingCode = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.accountingCodes.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/accountingCode', {
        params: { query: { accountingCode: code ?? '' } },
      });
      const payload = unwrapResponse<AccountingCodeGetResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load accounting code',
      );
      assertActionSuccess(payload.actionStatus, 'Accounting code retrieval failed');
      return payload.accountingCode ? mapDtoToForm(payload.accountingCode) : null;
    },
  });

export const useAccountingCodeMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.accountingCodes.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.accountingCodes.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: AccountingCodeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/accountingCode', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Accounting code creation failed',
      );
      assertActionSuccess(payload, 'Accounting code creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: AccountingCodeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billing/accountingCode', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Accounting code update failed',
      );
      assertActionSuccess(payload, 'Accounting code update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: AccountingCodeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/accountingCode/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Accounting code upsert failed',
      );
      assertActionSuccess(payload, 'Accounting code upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billing/accountingCode/{accountingCode}', {
        params: { path: { accountingCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Accounting code deletion failed',
      );
      assertActionSuccess(payload, 'Accounting code deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/accountingCode/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Accounting code enable failed',
      );
      assertActionSuccess(payload, 'Accounting code enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/accountingCode/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Accounting code disable failed',
      );
      assertActionSuccess(payload, 'Accounting code disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, upsert, remove, enable, disable }),
    [create, disable, enable, remove, update, upsert],
  );
};
