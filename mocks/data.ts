import type { CustomerFormValues } from '@/features/customers/types';
import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';
import type { CurrencyIsoFormValues } from '@/features/currency-iso/types';
import type { CurrencyFormValues } from '@/features/currency/types';
import type { FilterFormValues } from '@/features/filter/types';
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
