import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  AccountingCodeMappingDto,
  AccountingCodeMappingFormItem,
  AccountingCodeMappingFormValues,
  AccountingCodeMappingInputDto,
  AccountingCodeMappingInputMapping,
  AccountingCodeMappingMutationResult,
} from '@/features/accounting-code-mappings/types';

const getTradingCountryCode = (
  country: AccountingCodeMappingDto['billingCountry'] | undefined,
) => country?.code ?? country?.country?.countryCode;

const getTradingCurrencyCode = (
  currency: AccountingCodeMappingDto['billingCurrency'] | undefined,
) => currency?.currencyCode ?? currency?.currency?.currencyCode;

const mapDtoToFormItem = (dto: AccountingCodeMappingDto): AccountingCodeMappingFormItem => ({
  id: dto.id ?? undefined,
  accountingCode: dto.accountingCode?.code ?? undefined,
  accountingArticleCode: dto.accountingArticle?.code ?? undefined,
  sellerCode: dto.seller?.code ?? undefined,
  sellerCountryCode: getTradingCountryCode(dto.sellerCountry),
  billingCountryCode: getTradingCountryCode(dto.billingCountry),
  billingCurrencyCode: getTradingCurrencyCode(dto.billingCurrency),
  criteriaElValue: dto.criteriaElValue ?? undefined,
});

const mapFormItemToDto = (
  item: AccountingCodeMappingFormItem,
  accountingArticleCode: string,
): AccountingCodeMappingInputMapping => ({
  id: item.id,
  accountingCode: item.accountingCode,
  accountingArticleCode: item.accountingArticleCode ?? accountingArticleCode,
  sellerCode: item.sellerCode,
  sellerCountryCode: item.sellerCountryCode,
  billingCountryCode: item.billingCountryCode,
  billingCurrencyCode: item.billingCurrencyCode,
  criteriaElValue: item.criteriaElValue,
});

const mapInputToFormItem = (
  mapping: AccountingCodeMappingInputDto['accountingCodeMappings'][number],
  fallbackArticleCode: string,
): AccountingCodeMappingFormItem => {
  if (isAccountingCodeMappingDto(mapping)) {
    return mapDtoToFormItem(mapping);
  }

  return {
    id: mapping.id ?? undefined,
    accountingCode: mapping.accountingCode ?? undefined,
    accountingArticleCode: mapping.accountingArticleCode ?? fallbackArticleCode,
    sellerCode: mapping.sellerCode ?? undefined,
    sellerCountryCode: mapping.sellerCountryCode ?? undefined,
    billingCountryCode: mapping.billingCountryCode ?? undefined,
    billingCurrencyCode: mapping.billingCurrencyCode ?? undefined,
    criteriaElValue: mapping.criteriaElValue ?? undefined,
  };
};

const isAccountingCodeMappingDto = (
  mapping: AccountingCodeMappingInputDto['accountingCodeMappings'][number],
): mapping is AccountingCodeMappingDto =>
  typeof mapping === 'object' && mapping !== null && 'accountingArticle' in mapping;

export const mapAccountingCodeMappingInputToForm = (
  input: AccountingCodeMappingInputDto,
): AccountingCodeMappingFormValues => ({
  accountingArticleCode: input.accountingArticleCode ?? '',
  mappings: (input.accountingCodeMappings ?? []).map((mapping) =>
    mapInputToFormItem(mapping, input.accountingArticleCode ?? ''),
  ),
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
