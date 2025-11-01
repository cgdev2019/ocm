import type { components } from '@/lib/api/generated/schema';

export type AccountingCodeMappingDto = components['schemas']['AccountingCodeMapping'];

export type AccountingCodeMappingFormItem = {
  id?: number;
  accountingCode?: string;
  accountingArticleCode?: string;
  sellerCode?: string;
  sellerCountryCode?: string;
  billingCountryCode?: string;
  billingCurrencyCode?: string;
  criteriaElValue?: string;
};

export type AccountingCodeMappingFormValues = {
  accountingArticleCode: string;
  mappings: AccountingCodeMappingFormItem[];
};

export type AccountingCodeMappingInputMapping = {
  id?: number;
  accountingCode?: string;
  accountingArticleCode?: string;
  sellerCode?: string;
  sellerCountryCode?: string;
  billingCountryCode?: string;
  billingCurrencyCode?: string;
  criteriaElValue?: string;
};

export type AccountingCodeMappingInputDto = {
  accountingArticleCode: string;
  accountingCodeMappings?: (
    | AccountingCodeMappingInputMapping
    | AccountingCodeMappingDto
  )[];
};

export type AccountingCodeMappingMutationResult =
  | AccountingCodeMappingInputDto
  | AccountingCodeMappingDto
  | {
      id?: number;
    };
