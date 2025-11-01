import type {
  AccountingCodeMappingDto,
  AccountingCodeMappingFormValues,
  AccountingCodeMappingInputDto,
} from '@/features/accounting-code-mappings/types';

const ACCOUNTING_ARTICLE_CODE = 'ART-100';
const ACCOUNTING_CODE = 'ACCT-1000';
const SELLER_CODE = 'SELLER-1';
const COUNTRY_CODE = 'FR';
const CURRENCY_CODE = 'EUR';
const CRITERIA = "country == 'FR'";

export const accountingCodeMappingDtoFixture: AccountingCodeMappingDto = {
  id: 101,
  accountingCode: {
    code: ACCOUNTING_CODE,
    disabled: false,
    chartOfAccountTypeEnum: 'REVENUE',
    chartOfAccountViewTypeEnum: 'REGULAR',
  },
  accountingArticle: {
    code: ACCOUNTING_ARTICLE_CODE,
    disabled: false,
    uuid: 'article-uuid',
  },
  seller: {
    code: SELLER_CODE,
    uuid: 'seller-uuid',
  },
  sellerCountry: {
    code: COUNTRY_CODE,
    disabled: false,
    uuid: 'seller-country-uuid',
  },
  billingCountry: {
    code: COUNTRY_CODE,
    disabled: false,
    uuid: 'billing-country-uuid',
  },
  billingCurrency: {
    disabled: false,
    currencyCode: CURRENCY_CODE,
  },
  criteriaElValue: CRITERIA,
};

export const accountingCodeMappingInputFixture: AccountingCodeMappingInputDto = {
  accountingArticleCode: ACCOUNTING_ARTICLE_CODE,
  accountingCodeMappings: [
    {
      id: 101,
      accountingArticleCode: ACCOUNTING_ARTICLE_CODE,
      accountingCode: ACCOUNTING_CODE,
      sellerCode: SELLER_CODE,
      sellerCountryCode: COUNTRY_CODE,
      billingCountryCode: COUNTRY_CODE,
      billingCurrencyCode: CURRENCY_CODE,
      criteriaElValue: CRITERIA,
    },
  ],
};

export const accountingCodeMappingFormFixture: AccountingCodeMappingFormValues = {
  accountingArticleCode: ACCOUNTING_ARTICLE_CODE,
  mappings: [
    {
      id: 101,
      accountingArticleCode: ACCOUNTING_ARTICLE_CODE,
      accountingCode: ACCOUNTING_CODE,
      sellerCode: SELLER_CODE,
      sellerCountryCode: COUNTRY_CODE,
      billingCountryCode: COUNTRY_CODE,
      billingCurrencyCode: CURRENCY_CODE,
      criteriaElValue: CRITERIA,
    },
  ],
};
