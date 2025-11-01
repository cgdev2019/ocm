import type { CustomerFormValues } from '@/features/customers/types';
import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';
import type { CurrencyIsoFormValues } from '@/features/currency-iso/types';
import type { CurrencyFormValues } from '@/features/currency/types';
import type { FilterFormValues } from '@/features/filter/types';
import type { GenericCodeFormValues } from '@/features/generic-code/types';
import type { InvoiceCategoryFormValues } from '@/features/invoice-categories/types';
import type { InvoiceSequenceFormValues } from '@/features/invoice-sequences/types';
import type { InvoiceSubCategoryFormValues } from '@/features/invoice-sub-categories/types';
import type { InvoiceTypeFormValues } from '@/features/invoice-types/types';
import type { LanguageIsoFormValues } from '@/features/language-iso/types';
import type { LanguageFormValues } from '@/features/languages/types';
import type { InvoiceDto } from '@/features/invoices/types';
import type { InvoicingPlanFormValues } from '@/features/invoicing-plans/types';
import type { InvoicingPlanItemFormValues } from '@/features/invoicing-plan-items/types';
import type { TaxFormValues } from '@/features/taxes/types';
import type { OccTemplateFormValues } from '@/features/occ-templates/types';
import type { RatedTransactionDto } from '@/features/rated-transactions/types';
import type { AgedReceivableDto } from '@/features/aged-receivables/types';
import type { AccountingCodeFormValues } from '@/features/accounting-codes/types';
import type { AccountingPeriodDetailValues } from '@/features/accounting-periods/types';
import type { AccountingCodeMappingFormValues } from '@/features/accounting-code-mappings/types';
import type { AccountingArticleDto } from '@/features/accounting-articles/types';
import type { AccountOperation } from '@/features/account-operations/types';
import type { AllowedParentDto } from '@/features/allowed-parents/types';
import type { AuxiliaryAccountDto } from '@/features/auxiliary-codes/types';
import type { ArticleMappingDto } from '@/features/article-mappings/types';
import type { BillingRuleDto } from '@/features/billing-rules/types';
import {
  customerAccountFormFixtures,
  customerFormFixtures,
  currencyFormFixture,
  currencyListFixture,
  currencyIsoListFixture,
  filterFormFixture,
  invoiceFixtures,
  genericCodeFormFixture,
  invoiceCategoryFormFixture,
  invoiceSequenceFormFixture,
  invoiceSubCategoryFormFixture,
  invoiceTypeFormFixture,
  invoicingPlanFormFixture,
  invoicingPlanItemFormFixture,
  languageIsoListFixture,
  languageListFixture,
  importFileTypeFixture,
  taxFormFixtures,
  occTemplateFormFixture,
  ratedTransactionsFixture,
  agedReceivablesFixture,
  accountingCodeFormFixture,
  accountingPeriodDetailFixture,
  accountingCodeMappingFormFixture,
  accountingArticleDtoFixture,
  accountOperationsFixture,
  allowedParentDtoFixtures,
  auxiliaryAccountDtoFixtures,
  articleMappingDtoFixture,
  billingRuleDtoFixture,
} from '@/tests/fixtures/opencellDataset';

export const customers: CustomerFormValues[] = customerFormFixtures;

export const customerAccounts: CustomerAccountFormValues[] = customerAccountFormFixtures;

export const allowedParentsData: AllowedParentDto[] = allowedParentDtoFixtures.map((item) => ({
  ...item,
}));

export const auxiliaryAccountsData: AuxiliaryAccountDto[] = auxiliaryAccountDtoFixtures.map((item) => ({
  ...item,
}));

export const invoices: InvoiceDto[] = invoiceFixtures;

export const taxes: TaxFormValues[] = taxFormFixtures;

export const currencyIsos: CurrencyIsoFormValues[] = currencyIsoListFixture.map(({ code, description }) => ({
  code,
  description,
}));

export const currencies: CurrencyFormValues[] = currencyListFixture.map(({
  code,
  description,
  symbol,
  decimalPlaces,
  disabled,
}) => ({
  code,
  description,
  symbol,
  decimalPlaces,
  prCurrencyToThis: code === currencyFormFixture.code ? currencyFormFixture.prCurrencyToThis : undefined,
  disabled,
}));

export const filtersData: FilterFormValues[] = [filterFormFixture];

export const genericCodes: GenericCodeFormValues[] = [genericCodeFormFixture];

export const invoiceCategoriesData: InvoiceCategoryFormValues[] = [invoiceCategoryFormFixture];

export const invoiceSequencesData: InvoiceSequenceFormValues[] = [invoiceSequenceFormFixture];

export const invoiceSubCategoriesData: InvoiceSubCategoryFormValues[] = [invoiceSubCategoryFormFixture];

export const invoiceTypesData: InvoiceTypeFormValues[] = [invoiceTypeFormFixture];

export const invoicingPlansData: InvoicingPlanFormValues[] = [invoicingPlanFormFixture];

export const invoicingPlanItemsData: InvoicingPlanItemFormValues[] = [invoicingPlanItemFormFixture];

export const occTemplatesData: OccTemplateFormValues[] = [occTemplateFormFixture];

export const languageIsosData: LanguageIsoFormValues[] = languageIsoListFixture.map(({ code, description }) => ({
  code,
  description,
}));

export const languagesData: LanguageFormValues[] = languageListFixture.map(({ code, description, disabled }) => ({
  code,
  description,
  disabled,
}));

export const massImportDetection = importFileTypeFixture;

export const ratedTransactionsData: RatedTransactionDto[] = ratedTransactionsFixture;

export const agedReceivablesData: AgedReceivableDto[] = agedReceivablesFixture.map((item) => ({
  ...item,
  buckets: item.buckets?.map((bucket) => ({ ...bucket })) ?? [],
}));

export const accountingCodesData: AccountingCodeFormValues[] = [accountingCodeFormFixture];

export const accountingPeriodsData: AccountingPeriodDetailValues[] = [accountingPeriodDetailFixture];
export const accountingCodeMappingsData: AccountingCodeMappingFormValues[] = [
  accountingCodeMappingFormFixture,
];
export const accountingArticlesData: AccountingArticleDto[] = [accountingArticleDtoFixture];
export const articleMappingsData: ArticleMappingDto[] = [articleMappingDtoFixture];
export const billingRulesData: BillingRuleDto[] = [billingRuleDtoFixture];
export const accountOperationsData: AccountOperation[] = accountOperationsFixture.map((operation) => ({ ...operation }));
