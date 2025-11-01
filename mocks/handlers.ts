import { http, HttpResponse } from 'msw';
import type { CurrencyIsoFormValues } from '@/features/currency-iso/types';
import type { CurrencyFormValues } from '@/features/currency/types';
import type { FilterFormValues } from '@/features/filter/types';
import type {
  CancelBillingRunFormValues,
  CreateBillingRunDto,
  InvoiceValidationDto,
  InvalidateInvoiceDocumentsDto,
} from '@/features/invoicing/types';
import {
  customers,
  customerAccounts,
  currencies,
  currencyIsos,
  filtersData,
  genericCodes,
  invoiceCategoriesData,
  invoiceSequencesData,
  invoiceSubCategoriesData,
  invoiceTypesData,
  invoicingPlansData,
  invoicingPlanItemsData,
  languageIsosData,
  languagesData,
  massImportDetection,
  invoices,
  taxes,
  ratedTransactionsData,
} from '@/mocks/data';

const customersStore = [...customers];
const customerAccountsStore = [...customerAccounts];
const invoicesStore = [...invoices];
const taxesStore = [...taxes];
const currencyIsoStore = [...currencyIsos];
const currenciesStore = [...currencies];
const filtersStore = [...filtersData];
const genericCodesStore = [...genericCodes];
const invoiceCategoriesStore = [...invoiceCategoriesData];
const invoiceSequencesStore = [...invoiceSequencesData];
const invoiceSubCategoriesStore = [...invoiceSubCategoriesData];
const invoiceTypesStore = [...invoiceTypesData];
const invoicingPlansStore = [...invoicingPlansData];
const invoicingPlanItemsStore = [...invoicingPlanItemsData];
const languageIsosStore = [...languageIsosData];
const languagesStore = [...languagesData];
const ratedTransactionsStore = [...ratedTransactionsData];

const success = (message = 'OK') => ({ status: 'SUCCESS', message });

const extractBillingRunId = (input: unknown): number | undefined => {
  if (typeof input === 'number') {
    return input;
  }
  if (input && typeof input === 'object' && 'billingRunId' in input) {
    const value = (input as CancelBillingRunFormValues).billingRunId;
    return typeof value === 'number' ? value : undefined;
  }
  return undefined;
};

const findCustomer = (code: string) => customersStore.find((c) => c.code === code);
const findCustomerAccount = (code: string) => customerAccountsStore.find((c) => c.code === code);
const findTax = (code: string) => taxesStore.find((t) => t.code === code);
const findCurrencyIso = (code: string) => currencyIsoStore.find((item) => item.code === code);
const findCurrency = (code: string) => currenciesStore.find((item) => item.code === code);
const findFilter = (code: string) => filtersStore.find((item) => item.code === code);
const findGenericCode = (entityClass: string) =>
  genericCodesStore.find((item) => item.entityClass === entityClass);
const findInvoiceCategory = (code: string) =>
  invoiceCategoriesStore.find((item) => item.code === code);
const findInvoiceSequence = (code: string) => invoiceSequencesStore.find((item) => item.code === code);
const findInvoiceSubCategory = (code: string) =>
  invoiceSubCategoriesStore.find((item) => item.code === code);
const findInvoiceType = (code: string) => invoiceTypesStore.find((item) => item.code === code);
const findInvoicingPlan = (code: string) => invoicingPlansStore.find((item) => item.code === code);
const findInvoicingPlanItem = (code: string) =>
  invoicingPlanItemsStore.find((item) => item.code === code);
const findLanguageIso = (code: string) => languageIsosStore.find((item) => item.code === code);
const findLanguage = (code: string) => languagesStore.find((item) => item.code === code);

const filterRatedTransactions = (filters: Record<string, unknown> | undefined) => {
  if (!filters || Object.keys(filters).length === 0) {
    return ratedTransactionsStore;
  }

  const code = typeof filters.code === 'string' ? filters.code : undefined;
  const status = typeof filters.status === 'string' ? filters.status : undefined;
  const userAccountCode = typeof filters.userAccountCode === 'string' ? filters.userAccountCode : undefined;

  return ratedTransactionsStore.filter((transaction) => {
    if (code && transaction.code !== code) {
      return false;
    }
    if (status && transaction.status !== status) {
      return false;
    }
    if (userAccountCode && transaction.userAccountCode !== userAccountCode) {
      return false;
    }
    return true;
  });
};

export const handlers = [
  http.get('*/api/rest/account/customer/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      customers: {
        customer: customersStore.map((customer) => ({
          ...customer,
          contactInformation: {
            email: customer.contactEmail,
            phone: customer.contactPhone,
            address: {
              address1: customer.address1,
              city: customer.city,
              country: customer.country,
            },
          },
        })),
      },
    }),
  ),
  http.get('*/api/rest/account/customer/{customerCode}', ({ params }) => {
    const customer = findCustomer(String(params.customerCode));
    if (!customer) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({
      actionStatus: success(),
      customer: {
        ...customer,
        contactInformation: {
          email: customer.contactEmail,
          phone: customer.contactPhone,
          address: {
            address1: customer.address1,
            city: customer.city,
            country: customer.country,
          },
        },
      },
    });
  }),
  http.post('*/api/rest/account/customer/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof customersStore)[number];
    const existingIndex = customersStore.findIndex((c) => c.code === payload.code);
    if (existingIndex >= 0) {
      customersStore[existingIndex] = { ...customersStore[existingIndex], ...payload };
    } else {
      customersStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/account/customer/{customerCode}', ({ params }) => {
    const index = customersStore.findIndex((c) => c.code === params.customerCode);
    if (index >= 0) {
      customersStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/account/customerAccount/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      customerAccounts: {
        customerAccount: customerAccountsStore,
      },
    }),
  ),
  http.get('*/api/rest/account/customerAccount/{customerAccountCode}', ({ params }) => {
    const account = findCustomerAccount(String(params.customerAccountCode));
    if (!account) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), customerAccount: account });
  }),
  http.post('*/api/rest/account/customerAccount/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof customerAccountsStore)[number];
    const index = customerAccountsStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      customerAccountsStore[index] = { ...customerAccountsStore[index], ...payload };
    } else {
      customerAccountsStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/account/customerAccount/{customerAccountCode}', ({ params }) => {
    const index = customerAccountsStore.findIndex((item) => item.code === params.customerAccountCode);
    if (index >= 0) {
      customerAccountsStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/invoice/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoices: invoicesStore,
    }),
  ),
  http.get('*/api/rest/invoice', ({ request }) => {
    const url = new URL(request.url);
    const idParam = url.searchParams.get('id');
    const invoice = invoicesStore.find((item) => String(item.invoiceId) === idParam);
    if (!invoice) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoice });
  }),
  http.post('*/api/rest/invoice', async ({ request }) => {
    const payload = (await request.json()) as typeof invoicesStore[number];
    const invoiceId = Date.now();
    const invoice = { ...payload, invoiceId, invoiceNumber: `INV-${invoiceId}` };
    invoicesStore.push(invoice);
    return HttpResponse.json({ actionStatus: success(), invoiceId, invoiceNumber: invoice.invoiceNumber });
  }),

  http.post('*/api/rest/billing/ratedTransaction/list', async ({ request }) => {
    const payload = (await request.json()) as {
      filters?: Record<string, unknown>;
      offset?: number;
      limit?: number;
    };
    const filtered = filterRatedTransactions(payload?.filters);
    const offset = payload?.offset ?? 0;
    const limit = payload?.limit ?? filtered.length;
    const paginated = filtered.slice(offset, offset + limit);
    return HttpResponse.json({
      actionStatus: success(),
      paging: {
        offset,
        limit,
        totalNumberOfRecords: filtered.length,
      },
      ratedTransactions: paginated,
    });
  }),

  http.get('*/api/rest/billing/ratedTransaction/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      paging: {
        offset: 0,
        limit: ratedTransactionsStore.length,
        totalNumberOfRecords: ratedTransactionsStore.length,
      },
      ratedTransactions: ratedTransactionsStore,
    }),
  ),

  http.post('*/api/rest/billing/ratedTransaction/cancelRatedTransactions', async ({ request }) => {
    const payload = (await request.json()) as { filters?: Record<string, unknown> };
    const filteredCodes = new Set(filterRatedTransactions(payload?.filters).map((item) => item.code));
    let affected = 0;
    ratedTransactionsStore.forEach((transaction, index) => {
      if (transaction.code && filteredCodes.has(transaction.code)) {
        ratedTransactionsStore[index] = { ...transaction, status: 'CANCELED' };
        affected += 1;
      }
    });
    return HttpResponse.json({ status: 'SUCCESS', message: `Cancelled ${affected} transactions`, nrAffected: affected });
  }),

  http.get('*/api/rest/billing/ratedTransaction/version', () =>
    HttpResponse.json({ status: 'SUCCESS', message: '5.2.1' }),
  ),

  http.get('*/api/rest/tax/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      taxesDto: {
        tax: taxesStore,
      },
    }),
  ),
  http.get('*/api/rest/tax', ({ request }) => {
    const url = new URL(request.url);
    const taxCode = url.searchParams.get('taxCode');
    const tax = findTax(taxCode ?? '');
    if (!tax) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), tax });
  }),
  http.post('*/api/rest/tax', async ({ request }) => {
    const payload = (await request.json()) as (typeof taxesStore)[number];
    if (findTax(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    taxesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/tax', async ({ request }) => {
    const payload = (await request.json()) as (typeof taxesStore)[number];
    const index = taxesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      taxesStore[index] = { ...taxesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/tax/{taxCode}', ({ params }) => {
    const index = taxesStore.findIndex((item) => item.code === params.taxCode);
    if (index >= 0) {
      taxesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/currencyIso/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      currencies: currencyIsoStore,
    }),
  ),
  http.get('*/api/rest/currencyIso', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('currencyCode');
    const item = findCurrencyIso(code ?? '');
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), currency: item });
  }),
  http.post('*/api/rest/currencyIso', async ({ request }) => {
    const payload = (await request.json()) as CurrencyIsoFormValues;
    if (findCurrencyIso(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    currencyIsoStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/currencyIso', async ({ request }) => {
    const payload = (await request.json()) as CurrencyIsoFormValues;
    const index = currencyIsoStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      currencyIsoStore[index] = { ...currencyIsoStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/currencyIso/{currencyCode}', ({ params }) => {
    const index = currencyIsoStore.findIndex((item) => item.code === params.currencyCode);
    if (index >= 0) {
      currencyIsoStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/genericCode', ({ request }) => {
    const url = new URL(request.url);
    const entityClass = url.searchParams.get('entityClass');
    const item = entityClass ? findGenericCode(entityClass) : genericCodesStore[0];
    if (!item) {
      return HttpResponse.json({ genericCodeDto: null }, { status: 404 });
    }
    return HttpResponse.json({ genericCodeDto: item });
  }),
  http.post('*/api/rest/genericCode', async ({ request }) => {
    const payload = (await request.json()) as (typeof genericCodesStore)[number];
    if (findGenericCode(payload.entityClass)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    genericCodesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/genericCode', async ({ request }) => {
    const payload = (await request.json()) as (typeof genericCodesStore)[number];
    const index = genericCodesStore.findIndex((item) => item.entityClass === payload.entityClass);
    if (index >= 0) {
      genericCodesStore[index] = { ...genericCodesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/genericCode/generateCode', async ({ request }) => {
    const payload = (await request.json()) as (typeof genericCodesStore)[number];
    const item = findGenericCode(payload.entityClass) ?? payload;
    const current = item.sequence?.currentInvoiceNb ?? 0;
    const generated = `${item.prefixOverride ?? ''}${String(current + 1).padStart(item.sequence?.sequenceSize ?? 4, '0')}`;
    if (item.sequence) {
      item.sequence.currentInvoiceNb = current + 1;
    }
    return HttpResponse.json({
      actionStatus: success(),
      generatedCode: generated,
      sequenceType: item.sequence?.sequenceType,
      pattern: item.sequence?.sequencePattern,
    });
  }),
  http.post('*/api/rest/genericCode/sequence', async ({ request }) => {
    const payload = (await request.json()) as Partial<(typeof genericCodesStore)[number]['sequence']>;
    const target = genericCodesStore[0];
    if (target) {
      target.sequence = { ...target.sequence, ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/genericCode/version', () =>
    HttpResponse.json({ actionStatus: success('1.0.0') }),
  ),
  http.get('*/api/rest/invoiceCategory/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceCategories: { invoiceCategory: invoiceCategoriesStore },
    }),
  ),
  http.get('*/api/rest/invoiceCategory', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceCategoryCode');
    const item = code ? findInvoiceCategory(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceCategory: item });
  }),
  http.post('*/api/rest/invoiceCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceCategoriesStore)[number];
    if (findInvoiceCategory(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceCategoriesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceCategoriesStore)[number];
    const index = invoiceCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceCategoriesStore[index] = { ...invoiceCategoriesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceCategory/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceCategoriesStore)[number];
    const index = invoiceCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceCategoriesStore[index] = { ...invoiceCategoriesStore[index], ...payload };
    } else {
      invoiceCategoriesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/invoiceCategory/{invoiceCategoryCode}', ({ params }) => {
    const index = invoiceCategoriesStore.findIndex((item) => item.code === params.invoiceCategoryCode);
    if (index >= 0) {
      invoiceCategoriesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/invoiceSequence/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceSequencesDto: { invoiceSequences: invoiceSequencesStore },
    }),
  ),
  http.get('*/api/rest/invoiceSequence', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceSequenceCode');
    const item = code ? findInvoiceSequence(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceSequenceDto: item });
  }),
  http.post('*/api/rest/invoiceSequence', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSequencesStore)[number];
    if (findInvoiceSequence(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceSequencesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceSequence', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSequencesStore)[number];
    const index = invoiceSequencesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSequencesStore[index] = { ...invoiceSequencesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceSequence/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSequencesStore)[number];
    const index = invoiceSequencesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSequencesStore[index] = { ...invoiceSequencesStore[index], ...payload };
    } else {
      invoiceSequencesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/invoiceSubCategory/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceSubCategories: { invoiceSubCategory: invoiceSubCategoriesStore },
    }),
  ),
  http.get('*/api/rest/invoiceSubCategory', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceSubCategoryCode');
    const item = code ? findInvoiceSubCategory(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceSubCategory: item });
  }),
  http.post('*/api/rest/invoiceSubCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSubCategoriesStore)[number];
    if (findInvoiceSubCategory(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceSubCategoriesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceSubCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSubCategoriesStore)[number];
    const index = invoiceSubCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSubCategoriesStore[index] = { ...invoiceSubCategoriesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceSubCategory/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSubCategoriesStore)[number];
    const index = invoiceSubCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSubCategoriesStore[index] = { ...invoiceSubCategoriesStore[index], ...payload };
    } else {
      invoiceSubCategoriesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/invoiceSubCategory/{invoiceSubCategoryCode}', ({ params }) => {
    const index = invoiceSubCategoriesStore.findIndex((item) => item.code === params.invoiceSubCategoryCode);
    if (index >= 0) {
      invoiceSubCategoriesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/invoiceType/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceTypesDto: { invoiceTypes: invoiceTypesStore },
    }),
  ),
  http.get('*/api/rest/invoiceType', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceTypeCode');
    const item = code ? findInvoiceType(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceTypeDto: item });
  }),
  http.post('*/api/rest/invoiceType', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceTypesStore)[number];
    if (findInvoiceType(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceTypesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceType', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceTypesStore)[number];
    const index = invoiceTypesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceTypesStore[index] = { ...invoiceTypesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceType/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceTypesStore)[number];
    const index = invoiceTypesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceTypesStore[index] = { ...invoiceTypesStore[index], ...payload };
    } else {
      invoiceTypesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/invoiceType/{invoiceTypeCode}', ({ params }) => {
    const index = invoiceTypesStore.findIndex((item) => item.code === params.invoiceTypeCode);
    if (index >= 0) {
      invoiceTypesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.post('*/api/rest/billing/invoicingPlans/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoicingPlans: { invoicingPlan: invoicingPlansStore },
    }),
  ),
  http.get('*/api/rest/billing/invoicingPlans', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoicingPlanCode');
    const plan = code ? findInvoicingPlan(code) : undefined;
    if (!plan) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoicingPlanDto: plan });
  }),
  http.post('*/api/rest/billing/invoicingPlans', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlansStore)[number];
    invoicingPlansStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/billing/invoicingPlans', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlansStore)[number];
    const index = invoicingPlansStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoicingPlansStore[index] = { ...invoicingPlansStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/billing/invoicingPlans/{invoicingPlanCode}', ({ params }) => {
    const index = invoicingPlansStore.findIndex((item) => item.code === params.invoicingPlanCode);
    if (index >= 0) {
      invoicingPlansStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/billing/invoicingPlans/version', () =>
    HttpResponse.json(success('1.0.0')),
  ),

  http.post('*/api/rest/billing/invoicingPlanItems/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoicingPlanItems: { invoicingPlanItem: invoicingPlanItemsStore },
    }),
  ),
  http.get('*/api/rest/billing/invoicingPlanItems', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoicingPlanItemCode');
    const item = code ? findInvoicingPlanItem(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoicingPlanItemDto: item });
  }),
  http.post('*/api/rest/billing/invoicingPlanItems', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlanItemsStore)[number];
    invoicingPlanItemsStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/billing/invoicingPlanItems', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlanItemsStore)[number];
    const index = invoicingPlanItemsStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoicingPlanItemsStore[index] = { ...invoicingPlanItemsStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/billing/invoicingPlanItems/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlanItemsStore)[number];
    const index = invoicingPlanItemsStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoicingPlanItemsStore[index] = { ...invoicingPlanItemsStore[index], ...payload };
    } else {
      invoicingPlanItemsStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/billing/invoicingPlanItems/{invoicingPlanItemCode}', ({ params }) => {
    const index = invoicingPlanItemsStore.findIndex((item) => item.code === params.invoicingPlanItemCode);
    if (index >= 0) {
      invoicingPlanItemsStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/billing/invoicingPlanItems/version', () =>
    HttpResponse.json(success('1.0.0')),
  ),

  http.get('*/api/rest/languageIso/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      languages: languageIsosStore,
    }),
  ),
  http.get('*/api/rest/languageIso', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('languageCode');
    const item = code ? findLanguageIso(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), language: item });
  }),
  http.post('*/api/rest/languageIso', async ({ request }) => {
    const payload = (await request.json()) as (typeof languageIsosStore)[number];
    if (payload.code && findLanguageIso(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    languageIsosStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/languageIso', async ({ request }) => {
    const payload = (await request.json()) as (typeof languageIsosStore)[number];
    const index = payload.code ? languageIsosStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languageIsosStore[index] = { ...languageIsosStore[index], ...payload };
    } else if (payload.code) {
      languageIsosStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/languageIso/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof languageIsosStore)[number];
    const index = payload.code ? languageIsosStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languageIsosStore[index] = { ...languageIsosStore[index], ...payload };
    } else if (payload.code) {
      languageIsosStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/languageIso/{languageCode}', ({ params }) => {
    const index = languageIsosStore.findIndex((item) => item.code === params.languageCode);
    if (index >= 0) {
      languageIsosStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/language/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      tradingLanguages: { language: languagesStore },
    }),
  ),
  http.get('*/api/rest/language', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('languageCode');
    const item = code ? findLanguage(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), language: item });
  }),
  http.post('*/api/rest/language', async ({ request }) => {
    const payload = (await request.json()) as (typeof languagesStore)[number];
    if (payload.code && findLanguage(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    languagesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/language', async ({ request }) => {
    const payload = (await request.json()) as (typeof languagesStore)[number];
    const index = payload.code ? languagesStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languagesStore[index] = { ...languagesStore[index], ...payload };
    } else if (payload.code) {
      languagesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/language/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof languagesStore)[number];
    const index = payload.code ? languagesStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languagesStore[index] = { ...languagesStore[index], ...payload };
    } else if (payload.code) {
      languagesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/language/{languageCode}', ({ params }) => {
    const index = languagesStore.findIndex((item) => item.code === params.languageCode);
    if (index >= 0) {
      languagesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/language/{code}/enable', ({ params }) => {
    const item = findLanguage(String(params.code));
    if (item) {
      item.disabled = false;
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/language/{code}/disable', ({ params }) => {
    const item = findLanguage(String(params.code));
    if (item) {
      item.disabled = true;
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/currency/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      tradingCurrencies: { currency: currenciesStore },
    }),
  ),
  http.get('*/api/rest/currency', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('currencyCode');
    const currency = findCurrency(code ?? '');
    if (!currency) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), currency });
  }),
  http.post('*/api/rest/currency', async ({ request }) => {
    const payload = (await request.json()) as CurrencyFormValues;
    if (findCurrency(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    currenciesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/currency', async ({ request }) => {
    const payload = (await request.json()) as CurrencyFormValues;
    const index = currenciesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      currenciesStore[index] = { ...currenciesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/currency/{code}/enable', ({ params }) => {
    const currency = findCurrency(String(params.code));
    if (currency) {
      currency.disabled = false;
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/currency/{code}/disable', ({ params }) => {
    const currency = findCurrency(String(params.code));
    if (currency) {
      currency.disabled = true;
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/currency/{currencyCode}', ({ params }) => {
    const index = currenciesStore.findIndex((item) => item.code === params.currencyCode);
    if (index >= 0) {
      currenciesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/filter', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('filterCode');
    if (!code) {
      return HttpResponse.json({ actionStatus: success(), filter: undefined });
    }
    const filter = findFilter(code);
    if (!filter) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), filter });
  }),
  http.post('*/api/rest/filter', async ({ request }) => {
    const payload = (await request.json()) as FilterFormValues;
    if (findFilter(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    filtersStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/filter', async ({ request }) => {
    const payload = (await request.json()) as FilterFormValues;
    const index = filtersStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      filtersStore[index] = { ...filtersStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/filter/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as FilterFormValues;
    const index = filtersStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      filtersStore[index] = { ...filtersStore[index], ...payload };
    } else {
      filtersStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/filter/{code}/enable', ({ params }) => {
    const filter = findFilter(String(params.code));
    if (filter) {
      filter.disabled = false;
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/filter/{code}/disable', ({ params }) => {
    const filter = findFilter(String(params.code));
    if (filter) {
      filter.disabled = true;
    }
    return HttpResponse.json(success());
  }),

  http.delete('*/api/rest/billing/invoicing/billingRun/{billingRunId}/canceledInvoices', ({ params }) =>
    HttpResponse.json(success(`Billing run ${params.billingRunId} canceled invoices deleted`)),
  ),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/cancelInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) canceled for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/moveInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) moved for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/rejectInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) rejected for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/validateInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) validated for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put(
    '*/api/rest/billing/invoicing/billingRun/{billingRunId}/invalidateInvoiceDocuments',
    async ({ request, params }) => {
      const payload = (await request.json()) as InvalidateInvoiceDocumentsDto;
      const xml = payload?.invalidateXMLInvoices ? 'XML' : undefined;
      const pdf = payload?.invalidatePDFInvoices ? 'PDF' : undefined;
      const invalidated = [xml, pdf].filter(Boolean).join(' & ') || 'no documents';
      return HttpResponse.json(
        success(`${invalidated} invalidated for run ${params.billingRunId ?? 'unknown'}`),
      );
    },
  ),
  http.post('*/api/rest/billing/invoicing/cancelBillingRun', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json(
      success(
        billingRunId ? `Billing run ${billingRunId} canceled` : 'Billing run cancellation requested',
      ),
    );
  }),
  http.put('*/api/rest/billing/invoicing/cancelBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CancelBillingRunFormValues;
    return HttpResponse.json(
      success(`Billing run ${payload?.billingRunId ?? 'unknown'} cancelation scheduled`),
    );
  }),
  http.post('*/api/rest/billing/invoicing/createBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CreateBillingRunDto;
    const code = payload?.billingCycleCode ? `${payload.billingCycleCode}-BR-001` : 'BR-2024-01';
    return HttpResponse.json({ ...success('Billing run created'), entityCode: code });
  }),
  http.post('*/api/rest/billing/invoicing/createOrUpdateBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CreateBillingRunDto;
    const code = payload?.billingCycleCode ? `${payload.billingCycleCode}-BR-001` : 'BR-2024-01';
    return HttpResponse.json({ ...success('Billing run saved'), entityCode: code });
  }),
  http.put('*/api/rest/billing/invoicing/rebuildInvoice', async ({ request }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(success(`${invoiceCount} invoice(s) queued for rebuild`));
  }),
  http.post('*/api/rest/billing/invoicing/validateBillingRun', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json(
      success(
        billingRunId ? `Billing run ${billingRunId} validated` : 'Billing run validation requested',
      ),
    );
  }),
  http.put('*/api/rest/billing/invoicing/validateBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CancelBillingRunFormValues;
    return HttpResponse.json(
      success(`Billing run ${payload?.billingRunId ?? 'unknown'} validation scheduled`),
    );
  }),
  http.post('*/api/rest/billing/invoicing/getBillingAccountListInRun', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    const billingAccounts = customerAccountsStore.slice(0, 3).map((account, index) => ({
      code: index === 2 ? undefined : account.code,
      description: account.description ?? `Billing account ${index + 1}`,
    }));
    return HttpResponse.json({
      actionStatus: success(`Run ${billingRunId ?? 'N/A'} accounts retrieved`),
      billingAccountsDto: {
        billingRunId,
        billingAccount: billingAccounts,
      },
    });
  }),
  http.post('*/api/rest/billing/invoicing/getBillingRunInfo', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json({
      actionStatus: success(),
      billingRunDto: {
        code: billingRunId ? `BR-${billingRunId}` : 'BR-2024-01',
        status: 'VALIDATED',
        billingCycle: { code: 'PLAN-2024' },
        processDate: new Date().toISOString(),
        invoiceDate: new Date().toISOString(),
        statusDate: new Date().toISOString(),
        amountWithoutTax: 1200,
        amountTax: 240,
        amountWithTax: 1440,
      },
    });
  }),
  http.post('*/api/rest/billing/invoicing/getPreInvoicingReport', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json({
      actionStatus: success(),
      preInvoicingReportsDTO: {
        billingCycleCode: 'PLAN-2024',
        billableBillingAccountNumber: 3,
        amoutWitountTax: 1200,
        taxesAmount: 240,
        lastTransactionDate: new Date().toISOString(),
        invoiceDate: new Date().toISOString(),
        billingRunId,
      },
    });
  }),
  http.post('*/api/rest/billing/invoicing/getPostInvoicingReport', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json({
      actionStatus: success(),
      postInvoicingReportsDTO: {
        invoicesNumber: 3,
        positiveInvoicesAmount: 1500,
        negativeInvoicesAmount: 100,
        globalAmount: 1400,
        billingRunId,
      },
    });
  }),
  http.get('*/api/rest/billing/invoicing/version', () => HttpResponse.json(success('1.0.0'))),

  http.post('*/api/rest/massImport/uploadAndImport', async ({ request }) => {
    const payload = (await request.json()) as { filename?: string };
    const fileName = typeof payload?.filename === 'string' ? payload.filename : massImportDetection.fileName;
    return HttpResponse.json({ ...massImportDetection, fileName });
  }),
];
