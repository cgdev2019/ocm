import { http, HttpResponse } from 'msw';
import type { CurrencyIsoFormValues } from '@/features/currency-iso/types';
import type { CurrencyFormValues } from '@/features/currency/types';
import type { FilterFormValues } from '@/features/filter/types';
import { customers, customerAccounts, currencies, currencyIsos, filtersData, invoices, taxes } from '@/mocks/data';

const customersStore = [...customers];
const customerAccountsStore = [...customerAccounts];
const invoicesStore = [...invoices];
const taxesStore = [...taxes];
const currencyIsoStore = [...currencyIsos];
const currenciesStore = [...currencies];
const filtersStore = [...filtersData];

const success = (message = 'OK') => ({ status: 'SUCCESS', message });

const findCustomer = (code: string) => customersStore.find((c) => c.code === code);
const findCustomerAccount = (code: string) => customerAccountsStore.find((c) => c.code === code);
const findTax = (code: string) => taxesStore.find((t) => t.code === code);
const findCurrencyIso = (code: string) => currencyIsoStore.find((item) => item.code === code);
const findCurrency = (code: string) => currenciesStore.find((item) => item.code === code);
const findFilter = (code: string) => filtersStore.find((item) => item.code === code);

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
];
