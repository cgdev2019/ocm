import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  AccountingCodeMappingDto,
  AccountingCodeMappingFormItem,
  AccountingCodeMappingFormValues,
  AccountingCodeMappingInputDto,
  AccountingCodeMappingMutationResult,
} from '@/features/accounting-code-mappings/types';

const mapDtoToFormItem = (dto: AccountingCodeMappingDto): AccountingCodeMappingFormItem => ({
  id: dto.id ?? undefined,
  code: dto.code ?? undefined,
  accountingCode: dto.accountingCode ?? undefined,
  accountingArticleCode: dto.accountingArticleCode ?? undefined,
  sellerCode: dto.sellerCode ?? undefined,
  sellerCountryCode: dto.sellerCountryCode ?? undefined,
  billingCountryCode: dto.billingCountryCode ?? undefined,
  billingCurrencyCode: dto.billingCurrencyCode ?? undefined,
  criteriaElValue: dto.criteriaElValue ?? undefined,
});

const mapFormItemToDto = (
  item: AccountingCodeMappingFormItem,
  accountingArticleCode: string,
): AccountingCodeMappingDto => ({
  id: item.id,
  code: item.code,
  accountingCode: item.accountingCode,
  accountingArticleCode: item.accountingArticleCode ?? accountingArticleCode,
  sellerCode: item.sellerCode,
  sellerCountryCode: item.sellerCountryCode,
  billingCountryCode: item.billingCountryCode,
  billingCurrencyCode: item.billingCurrencyCode,
  criteriaElValue: item.criteriaElValue,
});

export const mapAccountingCodeMappingInputToForm = (
  input: AccountingCodeMappingInputDto,
): AccountingCodeMappingFormValues => ({
  accountingArticleCode: input.accountingArticleCode ?? '',
  mappings: (input.accountingCodeMappings ?? []).map(mapDtoToFormItem),
});

export const mapAccountingCodeMappingFormToDto = (
  values: AccountingCodeMappingFormValues,
): AccountingCodeMappingInputDto => ({
  accountingArticleCode: values.accountingArticleCode,
  accountingCodeMappings: values.mappings.map((item) =>
    mapFormItemToDto(item, values.accountingArticleCode),
  ),
});

export const useAccountingCodeMappingMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (accountingArticleCode: string) => {
    if (!accountingArticleCode) {
      return;
    }
    queryClient.invalidateQueries({
      queryKey: queryKeys.accountingCodeMappings.detail(accountingArticleCode),
    });
  };

  const create = useMutation({
    mutationFn: async (values: AccountingCodeMappingFormValues) => {
      const apiClient = getApiClient();
      const body = mapAccountingCodeMappingFormToDto(values);
      const result = await apiClient.POST('/v2/articles/accountingCodeMapping', { body });
      return unwrapResponse<AccountingCodeMappingMutationResult>(
        { data: result.data, error: result.error },
        'Unable to create accounting code mapping',
      );
    },
    onSuccess: (_data, variables) => invalidate(variables.accountingArticleCode),
  });

  const update = useMutation({
    mutationFn: async (values: AccountingCodeMappingFormValues) => {
      const apiClient = getApiClient();
      const body = mapAccountingCodeMappingFormToDto(values);
      const result = await apiClient.PUT('/v2/articles/{accountingArticleCode}/accountingCodeMapping', {
        params: { path: { accountingArticleCode: values.accountingArticleCode } },
        body,
      });
      return unwrapResponse<AccountingCodeMappingMutationResult>(
        { data: result.data, error: result.error },
        'Unable to update accounting code mapping',
      );
    },
    onSuccess: (_data, variables) => invalidate(variables.accountingArticleCode),
  });

  return { create, update };
};
