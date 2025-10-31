import type { CustomerFormValues } from '@/features/customers/types';
import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';
import type { InvoiceDto } from '@/features/invoices/types';
import type { TaxFormValues } from '@/features/taxes/types';
import {
  customerAccountFormFixtures,
  customerFormFixtures,
  invoiceFixtures,
  taxFormFixtures,
} from '@/tests/fixtures/opencellDataset';

export const customers: CustomerFormValues[] = customerFormFixtures;

export const customerAccounts: CustomerAccountFormValues[] = customerAccountFormFixtures;

export const invoices: InvoiceDto[] = invoiceFixtures;

export const taxes: TaxFormValues[] = taxFormFixtures;
