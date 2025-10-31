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
import type { TaxFormValues } from '@/features/taxes/types';
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
  languageIsoListFixture,
  languageListFixture,
  importFileTypeFixture,
  taxFormFixtures,
} from '@/tests/fixtures/opencellDataset';

export const customers: CustomerFormValues[] = customerFormFixtures;

export const customerAccounts: CustomerAccountFormValues[] = customerAccountFormFixtures;

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
