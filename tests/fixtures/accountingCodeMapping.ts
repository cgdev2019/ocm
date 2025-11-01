import type {
  AccountingCodeMappingFormValues,
  AccountingCodeMappingInputDto,
} from '@/features/accounting-code-mappings/types';

export const accountingCodeMappingInputFixture: AccountingCodeMappingInputDto = {
  accountingArticleCode: 'ART-100',
  accountingCodeMappings: [
    {
      id: 101,
      code: 'MAP-001',
      accountingArticleCode: 'ART-100',
      accountingCode: 'ACCT-1000',
      sellerCode: 'SELLER-1',
      sellerCountryCode: 'FR',
      billingCountryCode: 'FR',
      billingCurrencyCode: 'EUR',
      criteriaElValue: "country == 'FR'",
    },
  ],
};

export const accountingCodeMappingFormFixture: AccountingCodeMappingFormValues = {
  accountingArticleCode: 'ART-100',
  mappings: [
    {
      id: 101,
      code: 'MAP-001',
      accountingArticleCode: 'ART-100',
      accountingCode: 'ACCT-1000',
      sellerCode: 'SELLER-1',
      sellerCountryCode: 'FR',
      billingCountryCode: 'FR',
      billingCurrencyCode: 'EUR',
      criteriaElValue: "country == 'FR'",
    },
  ],
};
