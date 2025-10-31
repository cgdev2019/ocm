import type { CustomerFormValues } from '@/features/customers/types';
import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';
import type { InvoiceDto } from '@/features/invoices/types';
import type { TaxFormValues } from '@/features/taxes/types';

export const customers: CustomerFormValues[] = [
  {
    code: 'CUST-001',
    description: 'Médiapost Paris',
    customerCategory: 'ENTERPRISE',
    customerBrand: 'Mediapost',
    seller: 'SELLER-01',
    vatNo: 'FR123456789',
    contactEmail: 'contact@mediapost.fr',
    address1: '12 rue du Général',
    city: 'Paris',
    country: 'FR',
  },
  {
    code: 'CUST-002',
    description: 'Agence Lyon',
    customerCategory: 'SMB',
    customerBrand: 'Mediapost',
    seller: 'SELLER-01',
    contactEmail: 'lyon@mediapost.fr',
    address1: '5 avenue des Lilas',
    city: 'Lyon',
    country: 'FR',
  },
];

export const customerAccounts: CustomerAccountFormValues[] = [
  {
    code: 'ACC-001',
    description: 'Compte principal Paris',
    customer: 'CUST-001',
    currency: 'EUR',
    language: 'fr',
    paymentMethod: 'WIRETRANSFER',
  },
  {
    code: 'ACC-002',
    description: 'Compte Lyon',
    customer: 'CUST-002',
    currency: 'EUR',
    language: 'fr',
    paymentMethod: 'DIRECTDEBIT',
  },
];

export const invoices: InvoiceDto[] = [
  {
    invoiceId: 1001,
    invoiceNumber: 'INV-2024-0001',
    invoiceType: 'STANDARD',
    invoiceMode: 'AGGREGATED',
    billingAccountCode: 'ACC-001',
    invoiceDate: new Date().toISOString(),
    dueDate: new Date(Date.now() + 7 * 86400000).toISOString(),
    amountWithTax: 1290.4,
    amountWithoutTax: 1075.33,
    rawAmount: 1290.4,
    discountAmount: 0,
    taxAggregates: [],
    status: 'VALIDATED',
    autoValidation: false,
    sentByEmail: false,
  },
  {
    invoiceId: 1002,
    invoiceNumber: 'INV-2024-0002',
    invoiceType: 'STANDARD',
    invoiceMode: 'DETAILLED',
    billingAccountCode: 'ACC-002',
    invoiceDate: new Date().toISOString(),
    dueDate: new Date(Date.now() + 14 * 86400000).toISOString(),
    amountWithTax: 640.0,
    amountWithoutTax: 533.33,
    rawAmount: 640.0,
    discountAmount: 0,
    taxAggregates: [],
    status: 'NEW',
    autoValidation: false,
    sentByEmail: false,
  },
];

export const taxes: TaxFormValues[] = [
  {
    code: 'VAT-20',
    description: 'TVA 20%',
    percent: 20,
    accountingCode: '4457',
  },
  {
    code: 'VAT-5.5',
    description: 'TVA réduite 5,5%',
    percent: 5.5,
    accountingCode: '4456',
  },
];
