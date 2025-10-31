import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';
import type {
  CustomerFormValues,
  CustomerListItem,
  CustomersResponseDto,
} from '@/features/customers/types';
import type { InvoiceDto } from '@/features/invoices/types';
import type { TaxFormValues } from '@/features/taxes/types';
import type {
  BillingCycleFormValues,
  BillingCycleListItem,
  BillingCyclesResponseDto,
} from '@/features/billing-cycles/types';
import type {
  CalendarFormValues,
  CalendarListItem,
  ListCalendarResponse,
} from '@/features/calendars/types';
import type {
  ConfigurationListItem,
  GetConfigurationResponse,
} from '@/features/configuration/types';
import type {
  CountryIsoFormValues,
  CountryIsoListItem,
  GetCountriesIsoResponse,
} from '@/features/country-iso/types';
import type {
  CountryFormValues,
  CountryListItem,
  TradingCountriesResponseDto,
} from '@/features/countries/types';
import type {
  CurrencyIsoFormValues,
  CurrencyIsoListItem,
  GetCurrenciesIsoResponse,
} from '@/features/currency-iso/types';
import type {
  CurrencyFormValues,
  CurrencyListItem,
  TradingCurrenciesResponseDto as CurrencyTradingResponse,
} from '@/features/currency/types';
import type {
  FilterFormValues,
  FilterListItem,
  GetFilterResponseDto,
} from '@/features/filter/types';
import type {
  GenericCodeDto,
  GenericCodeFormValues,
  GenericCodeListItem,
  GetGenericCodeResponseDto,
} from '@/features/generic-code/types';
import type {
  GetInvoiceCategoryResponse,
  InvoiceCategoryFormValues,
  InvoiceCategoryListItem,
  InvoiceCategoryResponseDto,
} from '@/features/invoice-categories/types';
import type {
  GetInvoiceSequenceResponse,
  GetInvoiceSequencesResponse,
  InvoiceSequenceFormValues,
  InvoiceSequenceListItem,
} from '@/features/invoice-sequences/types';
import type {
  GetInvoiceSubCategoryResponse,
  InvoiceSubCategoryFormValues,
  InvoiceSubCategoryListItem,
  InvoiceSubCategoryResponseDto,
} from '@/features/invoice-sub-categories/types';

export const DATASET_INVOICE_DATE = '2024-05-15T10:00:00.000Z';
export const DATASET_INVOICE_DUE_DATE = '2024-05-29T10:00:00.000Z';

export const customersResponseFixture: CustomersResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Jeu de données mock' },
  paging: {
    offset: 0,
    limit: 20,
    sortBy: 'c.code',
    sortOrder: 'ASCENDING',
    totalNumberOfRecords: 2,
  },
  customers: {
    customer: [
      {
        code: 'CUST-001',
        description: 'Médiapost Paris',
        customerCategory: 'ENTERPRISE',
        customerBrand: 'Mediapost',
        seller: 'SELLER-01',
        vatNo: 'FR123456789',
        registrationNo: '852 963 741',
        contactInformation: {
          email: 'contact@mediapost.fr',
          phone: '+33123456789',
          address: {
            address1: '12 rue du Général',
            city: 'Paris',
            country: 'FR',
          },
        },
      },
      {
        code: 'CUST-002',
        description: 'Agence Lyon',
        customerCategory: 'SMB',
        customerBrand: 'Mediapost',
        seller: 'SELLER-01',
        vatNo: 'FR987654321',
        registrationNo: '753 159 456',
        contactInformation: {
          email: 'lyon@mediapost.fr',
          phone: '+33412345678',
          address: {
            address1: '5 avenue des Lilas',
            city: 'Lyon',
            country: 'FR',
          },
        },
      },
    ],
  },
};

export const customerListItemsFixture: CustomerListItem[] = [
  {
    code: 'CUST-001',
    description: 'Médiapost Paris',
    customerCategory: 'ENTERPRISE',
    customerBrand: 'Mediapost',
    seller: 'SELLER-01',
    vatNo: 'FR123456789',
    contactEmail: 'contact@mediapost.fr',
    city: 'Paris',
  },
  {
    code: 'CUST-002',
    description: 'Agence Lyon',
    customerCategory: 'SMB',
    customerBrand: 'Mediapost',
    seller: 'SELLER-01',
    vatNo: 'FR987654321',
    contactEmail: 'lyon@mediapost.fr',
    city: 'Lyon',
  },
];

export const customerFormFixtures: CustomerFormValues[] = [
  {
    code: 'CUST-001',
    description: 'Médiapost Paris',
    customerCategory: 'ENTERPRISE',
    customerBrand: 'Mediapost',
    seller: 'SELLER-01',
    vatNo: 'FR123456789',
    registrationNo: '852 963 741',
    contactEmail: 'contact@mediapost.fr',
    contactPhone: '+33123456789',
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
    vatNo: 'FR987654321',
    registrationNo: '753 159 456',
    contactEmail: 'lyon@mediapost.fr',
    contactPhone: '+33412345678',
    address1: '5 avenue des Lilas',
    city: 'Lyon',
    country: 'FR',
  },
];

export const customerAccountFormFixtures: CustomerAccountFormValues[] = [
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

export const invoiceFixtures: InvoiceDto[] = [
  {
    invoiceId: 1001,
    invoiceNumber: 'INV-2024-0001',
    invoiceType: 'STANDARD',
    invoiceMode: 'AGGREGATED',
    billingAccountCode: 'ACC-001',
    invoiceDate: DATASET_INVOICE_DATE,
    dueDate: DATASET_INVOICE_DUE_DATE,
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
    invoiceDate: DATASET_INVOICE_DATE,
    dueDate: '2024-06-05T10:00:00.000Z',
    amountWithTax: 640,
    amountWithoutTax: 533.33,
    rawAmount: 640,
    discountAmount: 0,
    taxAggregates: [],
    status: 'NEW',
    autoValidation: false,
    sentByEmail: false,
  },
];

export const taxFormFixtures: TaxFormValues[] = [
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

export const billingCyclesResponseFixture: BillingCyclesResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  billingCycles: {
    billingCycle: [
      {
        code: 'BC-MONTHLY',
        description: 'Cycle mensuel',
        calendar: 'CAL-MONTH',
        invoiceDateDelayEL: '0',
        type: 'BILLINGACCOUNT',
        referenceDate: 'NEXT_INVOICE_DATE',
      },
    ],
  },
};

export const billingCycleListItemsFixture: BillingCycleListItem[] = [
  {
    code: 'BC-MONTHLY',
    description: 'Cycle mensuel',
    calendar: 'CAL-MONTH',
    type: 'BILLINGACCOUNT',
  },
];

export const billingCycleFormFixture: BillingCycleFormValues = {
  code: 'BC-MONTHLY',
  description: 'Cycle mensuel',
  calendar: 'CAL-MONTH',
  invoiceDateDelayEL: '0',
  referenceDate: 'NEXT_INVOICE_DATE',
};

export const calendarResponseFixture: ListCalendarResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  calendars: {
    calendar: [
      {
        code: 'CAL-MONTH',
        description: 'Calendrier mensuel',
        calendarType: 'PERIOD',
        periodLength: 1,
        periodUnit: 'MONTH',
      },
    ],
  },
};

export const calendarListItemsFixture: CalendarListItem[] = [
  {
    code: 'CAL-MONTH',
    description: 'Calendrier mensuel',
    calendarType: 'PERIOD',
    periodLength: 1,
    periodUnit: 'MONTH',
  },
];

export const calendarFormFixture: CalendarFormValues = {
  code: 'CAL-MONTH',
  calendarType: 'PERIOD',
  periodLength: 1,
  periodUnit: 'MONTH',
};

export const configurationResponseFixture: GetConfigurationResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  properties: [
    { key: 'billing.threshold', value: '150' },
    { key: 'ui.locale', value: 'fr-FR' },
  ],
};

export const configurationListFixture: ConfigurationListItem[] = [
  { key: 'billing.threshold', value: '150' },
  { key: 'ui.locale', value: 'fr-FR' },
];

export const countryIsoResponseFixture: GetCountriesIsoResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  countries: [
    {
      countryCode: 'FR',
      description: 'France',
      currencyCode: 'EUR',
      languageCode: 'fr',
    },
  ],
};

export const countryIsoListFixture: CountryIsoListItem[] = [
  { countryCode: 'FR', description: 'France', currencyCode: 'EUR', languageCode: 'fr' },
];

export const countryIsoFormFixture: CountryIsoFormValues = {
  countryCode: 'FR',
  description: 'France',
  currencyCode: 'EUR',
  languageCode: 'fr',
};

export const countriesResponseFixture: TradingCountriesResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  tradingCountries: {
    country: [
      {
        countryCode: 'FR',
        description: 'France',
        currencyCode: 'EUR',
        languageCode: 'fr',
      },
    ],
  },
};

export const countryListFixture: CountryListItem[] = [
  { countryCode: 'FR', name: 'France', currencyCode: 'EUR', languageCode: 'fr', disabled: false },
];

export const countryFormFixture: CountryFormValues = {
  countryCode: 'FR',
  name: 'France',
  currencyCode: 'EUR',
  languageCode: 'fr',
  disabled: false,
};

export const currencyIsoResponseFixture: GetCurrenciesIsoResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  currencies: [
    { code: 'EUR', description: 'Euro' },
    { code: 'USD', description: 'US Dollar' },
  ],
};

export const currencyIsoListFixture: CurrencyIsoListItem[] = [
  { code: 'EUR', description: 'Euro' },
  { code: 'USD', description: 'US Dollar' },
];

export const currencyIsoFormFixture: CurrencyIsoFormValues = { code: 'EUR', description: 'Euro' };

export const currencyResponseFixture: CurrencyTradingResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  tradingCurrencies: {
    currency: [
      {
        code: 'EUR',
        description: 'Euro',
        symbol: '€',
        decimalPlaces: 2,
        disabled: false,
      },
      {
        code: 'USD',
        description: 'US Dollar',
        symbol: '$',
        decimalPlaces: 2,
        disabled: true,
      },
    ],
  },
};

export const currencyListFixture: CurrencyListItem[] = [
  { code: 'EUR', description: 'Euro', symbol: '€', decimalPlaces: 2, disabled: false },
  { code: 'USD', description: 'US Dollar', symbol: '$', decimalPlaces: 2, disabled: true },
];

export const currencyFormFixture: CurrencyFormValues = {
  code: 'EUR',
  description: 'Euro',
  symbol: '€',
  decimalPlaces: 2,
  prCurrencyToThis: 1,
  disabled: false,
};

export const filterResponseFixture: GetFilterResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  filter: {
    code: 'TEST_FILTER',
    description: 'Filtre de test',
    entityClass: 'org.meveo.model.billing.Invoice',
    shared: true,
    disabled: false,
    inputXml: '<filter></filter>',
    pollingQuery: 'SELECT * FROM invoices',
  },
};

export const filterListFixture: FilterListItem[] = [
  {
    code: 'TEST_FILTER',
    description: 'Filtre de test',
    entityClass: 'org.meveo.model.billing.Invoice',
    shared: true,
    disabled: false,
  },
];

export const filterFormFixture: FilterFormValues = {
  code: 'TEST_FILTER',
  description: 'Filtre de test',
  entityClass: 'org.meveo.model.billing.Invoice',
  inputXml: '<filter></filter>',
  pollingQuery: 'SELECT * FROM invoices',
  shared: true,
  disabled: false,
};

export const genericCodeDtoFixture: GenericCodeDto = {
  entityClass: 'org.meveo.model.Invoice',
  formatEL: 'INV-${sequence}',
  prefixOverride: 'INV',
  sequence: {
    invoiceSequenceCode: 'INV',
    sequencePattern: 'INV-{0000}',
    sequenceSize: 4,
    currentInvoiceNb: 125,
    sequenceType: 'SEQUENCE',
    prefixEL: 'INV-',
  },
};

export const genericCodeFormFixture: GenericCodeFormValues = {
  entityClass: 'org.meveo.model.Invoice',
  formatEL: 'INV-${sequence}',
  prefixOverride: 'INV',
  sequence: {
    invoiceSequenceCode: 'INV',
    sequencePattern: 'INV-{0000}',
    sequenceSize: 4,
    currentInvoiceNb: 125,
    sequenceType: 'SEQUENCE',
    prefixEL: 'INV-',
  },
};

export const genericCodeListFixture: GenericCodeListItem[] = [
  {
    entityClass: 'org.meveo.model.Invoice',
    formatEL: 'INV-${sequence}',
    prefixOverride: 'INV',
    sequenceType: 'SEQUENCE',
    sequencePattern: 'INV-{0000}',
  },
];

export const genericCodeResponseFixture: GetGenericCodeResponseDto = {
  genericCodeDto: genericCodeDtoFixture,
};

export const invoiceCategoryFormFixture: InvoiceCategoryFormValues = {
  code: 'INV-CAT',
  description: 'Standard billing',
  occTemplateCode: 'OCC-STD',
  occTemplateNegativeCode: 'OCC-STD-NEG',
  sortIndex: 1,
};

export const invoiceCategoryListFixture: InvoiceCategoryListItem[] = [
  {
    code: 'INV-CAT',
    description: 'Standard billing',
    occTemplateCode: 'OCC-STD',
    occTemplateNegativeCode: 'OCC-STD-NEG',
    sortIndex: 1,
  },
];

export const invoiceCategoryResponseFixture: InvoiceCategoryResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceCategories: {
    invoiceCategory: invoiceCategoryListFixture,
  },
};

export const invoiceCategoryDetailFixture: GetInvoiceCategoryResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceCategory: invoiceCategoryFormFixture,
};

export const invoiceSequenceFormFixture: InvoiceSequenceFormValues = {
  code: 'INV-SEQ',
  description: 'Invoice numbering',
  sequencePattern: 'INV-{0000}',
  sequenceType: 'SEQUENCE',
  sequenceSize: 4,
  currentInvoiceNb: 125,
};

export const invoiceSequenceListFixture: InvoiceSequenceListItem[] = [
  {
    code: 'INV-SEQ',
    description: 'Invoice numbering',
    sequencePattern: 'INV-{0000}',
    sequenceType: 'SEQUENCE',
    sequenceSize: 4,
    currentInvoiceNb: 125,
  },
];

export const invoiceSequencesResponseFixture: GetInvoiceSequencesResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceSequencesDto: {
    invoiceSequences: invoiceSequenceListFixture,
  },
};

export const invoiceSequenceResponseFixture: GetInvoiceSequenceResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceSequenceDto: invoiceSequenceFormFixture,
};

export const invoiceSubCategoryFormFixture: InvoiceSubCategoryFormValues = {
  code: 'INV-SUB-CAT',
  description: 'Default VAT subcategory',
  invoiceCategory: 'INV-CAT',
  accountingCode: '7060',
  occTemplateCode: 'OCC-STD',
  occTemplateNegativeCode: 'OCC-STD-NEG',
  sortIndex: 1,
};

export const invoiceSubCategoryListFixture: InvoiceSubCategoryListItem[] = [
  {
    code: 'INV-SUB-CAT',
    description: 'Default VAT subcategory',
    invoiceCategory: 'INV-CAT',
    accountingCode: '7060',
    occTemplateCode: 'OCC-STD',
    occTemplateNegativeCode: 'OCC-STD-NEG',
    sortIndex: 1,
  },
];

export const invoiceSubCategoryResponseFixture: InvoiceSubCategoryResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceSubCategories: {
    invoiceSubCategory: invoiceSubCategoryListFixture,
  },
};

export const invoiceSubCategoryDetailFixture: GetInvoiceSubCategoryResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceSubCategory: invoiceSubCategoryFormFixture,
};
