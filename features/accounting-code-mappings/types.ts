import type { components } from '@/lib/api/generated/schema';

export type AccountingCodeMappingDto = components['schemas']['AccountingCodeMapping'];
export type AccountingCodeMappingInputDto = components['schemas']['AccountingCodeMappingInput'];

export type AccountingCodeMappingFormItem = {
  id?: number;
  code?: string;
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

export type AccountingCodeMappingMutationResult =
  | AccountingCodeMappingInputDto
  | AccountingCodeMappingDto
  | {
      id?: number;
      code?: string;
    };
