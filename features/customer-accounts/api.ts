import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { apiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  CustomerAccountDto,
  CustomerAccountFormValues,
  CustomerAccountListItem,
  CustomerAccountsResponseDto,
  GetCustomerAccountResponseDto,
} from '@/features/customer-accounts/types';

const adaptList = (items: CustomerAccountDto[] | undefined): CustomerAccountListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    customer: item.customer ?? undefined,
    currency: item.currency ?? undefined,
    language: item.language ?? undefined,
    status: item.status ?? undefined,
  }));

const toDto = (values: CustomerAccountFormValues): CustomerAccountDto => ({
  code: values.code,
  description: values.description,
  customer: values.customer,
  currency: values.currency,
  language: values.language,
  paymentMethod: values.paymentMethod as CustomerAccountDto['paymentMethod'],
});

const fromDto = (dto: CustomerAccountDto): CustomerAccountFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  customer: dto.customer ?? '',
  currency: dto.currency ?? '',
  language: dto.language ?? '',
  paymentMethod: dto.paymentMethod ?? undefined,
});

export const useCustomerAccounts = () =>
  useQuery({
    queryKey: queryKeys.customerAccounts.list(),
    queryFn: async () => {
      const result = await apiClient.GET('/api/rest/account/customerAccount/listGetAll');
      const payload = unwrapResponse<CustomerAccountsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customer accounts',
      );
      assertActionSuccess(payload.actionStatus, 'Customer account list returned an error');
      return adaptList(payload.customerAccounts?.customerAccount);
    },
  });

export const useCustomerAccount = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.customerAccounts.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const result = await apiClient.GET('/api/rest/account/customerAccount/{customerAccountCode}', {
        params: { path: { customerAccountCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetCustomerAccountResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customer account',
      );
      assertActionSuccess(payload.actionStatus, 'Customer account retrieval failed');
      return payload.customerAccount ? fromDto(payload.customerAccount) : null;
    },
  });

export const useCustomerAccountMutations = () => {
  const queryClient = useQueryClient();

  const upsert = useMutation({
    mutationFn: async (values: CustomerAccountFormValues) => {
      const dto = toDto(values);
      const result = await apiClient.POST('/api/rest/account/customerAccount/createOrUpdate', {
        body: dto,
      });
      const payload = unwrapResponse<ActionStatus>({ data: result.data, error: result.error }, 'Customer account update failed');
      assertActionSuccess(payload, 'Customer account update failed');
      return payload;
    },
    onSuccess: (_payload, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.customerAccounts.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.customerAccounts.detail(variables.code) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const result = await apiClient.DELETE('/api/rest/account/customerAccount/{customerAccountCode}', {
        params: { path: { customerAccountCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>({ data: result.data, error: result.error }, 'Customer account delete failed');
      assertActionSuccess(payload, 'Customer account delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.customerAccounts.list() });
    },
  });

  return useMemo(() => ({ upsert, remove }), [remove, upsert]);
};
