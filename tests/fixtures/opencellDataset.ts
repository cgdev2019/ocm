import type { CustomerAccountFormValues } from '@/features/customer-accounts/types';
import type {
  CustomerFormValues,
  CustomerListItem,
  CustomersResponseDto,
} from '@/features/customers/types';
import type { InvoiceDto } from '@/features/invoices/types';
import type { GetTaxesResponse, TaxFormValues, TaxListItem } from '@/features/taxes/types';
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
import type {
  GetInvoiceTypeResponse,
  GetInvoiceTypesResponse,
  InvoiceTypeFormValues,
  InvoiceTypeListItem,
} from '@/features/invoice-types/types';
import type {
  InvoicingPlanFormValues,
  InvoicingPlanListItem,
  InvoicingPlansResponseDto,
} from '@/features/invoicing-plans/types';
import type {
  InvoicingPlanItemFormValues,
  InvoicingPlanItemListItem,
  InvoicingPlanItemsResponseDto,
} from '@/features/invoicing-plan-items/types';
import type {
  GetLanguageIsoResponse,
  GetLanguagesIsoResponse,
  LanguageIsoFormValues,
  LanguageIsoListItem,
} from '@/features/language-iso/types';
import type {
  GetTradingLanguageResponse,
  LanguageDetailValues,
  LanguageFormValues,
  LanguageListItem,
  TradingLanguagesResponseDto,
} from '@/features/languages/types';
import type { ImportFileTypeDto } from '@/features/mass-import/types';
import type {
  GetOccTemplateResponse,
  GetOccTemplatesResponse,
  OccTemplateFormValues,
  OccTemplateListItem,
} from '@/features/occ-templates/types';
import type { PdfInvoiceResponse } from '@/features/pdf-invoices/types';
import type {
  GetScriptInstanceResponseDto,
  ScriptInstanceListItem,
} from '@/features/script-instances/types';
import type {
  FileFormatFormValues,
  FileFormatListItem,
  FileFormatListResponseDto,
  FileFormatResponseDto,
} from '@/features/file-formats/types';
import type {
  AccountingArticleDetailValues,
  AccountingArticleDto,
  AccountingArticleFormValues,
  AccountingArticleList,
  AccountingArticleListItem,
  AccountingArticleListResponseDto,
  AccountingArticleResponseDto,
} from '@/features/accounting-articles/types';
import type {
  TitleDetailValues,
  TitleListItem,
  TitleResponseDto,
  TitlesResponseDto,
} from '@/features/titles/types';
import type { FileListItem, GetFilesResponseDto } from '@/features/files/types';
import type {
  AccountingCodeDetailValues,
  AccountingCodeDto,
  AccountingCodeFormValues,
  AccountingCodeGetResponseDto,
  AccountingCodeListItem,
  AccountingCodeListResponseDto,
} from '@/features/accounting-codes/types';
import type {
  GetCustomerAccountConfigurationResponseDto,
  GetCustomerConfigurationResponseDto,
  GetInvoicingConfigurationResponseDto,
  GetProviderResponse,
  GetTradingConfigurationResponseDto,
  ProviderFormValues,
  ProviderTenantListItem,
  ProvidersResponse,
} from '@/features/provider/types';
import type { QueryResponse } from '@/features/query/types';
import type { SellerListItem, SellerResponseDto } from '@/features/sellers/types';
import type {
  GetTerminationReasonResponse,
  TerminationReasonListItem,
} from '@/features/termination-reasons/types';
import type { AccessesResponseDto, AccessListItem } from '@/features/access/types';
import type {
  BusinessAccountModelListItem,
  MeveoModuleDtosResponse,
} from '@/features/business-account-model/types';
import type {
  ProviderContactListItem,
  ProviderContactsResponseDto,
} from '@/features/provider-contact/types';
import type {
  UsageChargeAggregateListItem,
  UsageChargeAggregateResponseDto,
  UsageListItem,
  UsageResponseDto,
} from '@/features/usage/types';
import type {
  ActionStatus,
  BillingAccountInRunListItem,
  BillingRunIdFormValues,
  BillingRunInfoSummary,
  CreateBillingRunFormValues,
  GetBillingAccountListInRunResponseDto,
  GetBillingRunInfoResponseDto,
  GetPostInvoicingReportsResponseDto,
  GetPreInvoicingReportsResponseDto,
  InvoiceActionFormValues,
  InvalidateInvoiceDocumentsFormValues,
  PostInvoicingReportSummary,
  PreInvoicingReportSummary,
} from '@/features/invoicing/types';
import type {
  RatedTransactionDto,
  RatedTransactionListItem,
  RatedTransactionListResponseDto,
} from '@/features/rated-transactions/types';
import type {
  GetSubscriptionResponseDto,
  SubscriptionDto,
  SubscriptionList,
  SubscriptionListItem,
  SubscriptionsListResponseDto,
} from '@/features/subscriptions/types';
import { DEFAULT_SUBSCRIPTIONS_PAGE_SIZE } from '@/features/subscriptions/api';
import type {
  ChargeCdrFormValues,
  ChargeCdrResponseDto,
  ChargeCdrSummary,
  CdrReservationResponseDto,
  RegisterCdrFormValues,
  ReserveCdrFormValues,
} from '@/features/mediation/types';

export const DATASET_INVOICE_DATE = '2024-05-15T10:00:00.000Z';
export const DATASET_INVOICE_DUE_DATE = '2024-05-29T10:00:00.000Z';

export const ratedTransactionsFixture: RatedTransactionDto[] = [
  {
    code: 'TRX-001',
    usageDate: '2024-05-20T09:30:00.000Z',
    unitAmountWithoutTax: 12.5,
    unitAmountWithTax: 15,
    unitAmountTax: 2.5,
    quantity: 2,
    inputQuantity: 2,
    rawAmountWithoutTax: 25,
    rawAmountWithTax: 30,
    amountWithoutTax: 25,
    amountWithTax: 30,
    amountTax: 5,
    status: 'OPEN',
    description: 'VoIP minutes',
    unityDescription: 'Minute',
    priceplanCode: 'PLAN-VOICE',
    userAccountCode: 'UA-001',
    invoiceSubCategoryCode: 'VOICE',
    sellerCode: 'SELLER-01',
    billingAccountCode: 'ACC-001',
    taxCode: 'VAT-20',
    taxPercent: 20,
    doNotTriggerInvoicing: false,
  },
  {
    code: 'TRX-002',
    usageDate: '2024-05-21T11:15:00.000Z',
    unitAmountWithoutTax: 5,
    unitAmountWithTax: 6,
    unitAmountTax: 1,
    quantity: 10,
    inputQuantity: 10,
    rawAmountWithoutTax: 50,
    rawAmountWithTax: 60,
    amountWithoutTax: 50,
    amountWithTax: 60,
    amountTax: 10,
    status: 'BILLED',
    description: 'SMS bundle',
    unityDescription: 'SMS',
    priceplanCode: 'PLAN-SMS',
    userAccountCode: 'UA-002',
    invoiceSubCategoryCode: 'SMS',
    sellerCode: 'SELLER-01',
    billingAccountCode: 'ACC-002',
    taxCode: 'VAT-20',
    taxPercent: 20,
    doNotTriggerInvoicing: false,
  },
];

export const subscriptionDtoFixture: SubscriptionDto = {
  code: 'SUB-0001',
  description: 'Fiber Premium Plan',
  versionNumber: 1,
  userAccount: 'UA-0001',
  offerTemplate: 'OFFER-FIBER',
  subscriptionDate: '2024-05-01T08:00:00.000Z',
  billingCycle: 'MONTHLY',
  seller: 'SELLER-01',
  status: 'ACTIVE',
  endAgreementDate: '2025-05-01T08:00:00.000Z',
  validityDate: '2024-05-01T08:00:00.000Z',
  autoEndOfEngagement: false,
  renewed: false,
  email: 'customer@example.com',
};

export const subscriptionListResponseFixture: SubscriptionsListResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  paging: {
    limit: DEFAULT_SUBSCRIPTIONS_PAGE_SIZE,
    offset: 0,
    sortBy: 'code',
    sortOrder: 'ASCENDING',
    totalNumberOfRecords: 1,
  },
  subscriptions: { listSize: 1, subscription: [subscriptionDtoFixture] },
};

export const subscriptionListItemsFixture: SubscriptionListItem[] = [
  {
    code: subscriptionDtoFixture.code,
    description: subscriptionDtoFixture.description,
    userAccount: subscriptionDtoFixture.userAccount,
    offerTemplate: subscriptionDtoFixture.offerTemplate,
    subscriptionDate: subscriptionDtoFixture.subscriptionDate,
    status: subscriptionDtoFixture.status,
    billingCycle: subscriptionDtoFixture.billingCycle,
    seller: subscriptionDtoFixture.seller,
  },
];

export const subscriptionListFixture: SubscriptionList = {
  items: subscriptionListItemsFixture,
  paging: {
    totalRecords: 1,
    limit: DEFAULT_SUBSCRIPTIONS_PAGE_SIZE,
    offset: 0,
    sortBy: 'code',
    sortOrder: 'ASCENDING',
  },
};

export const subscriptionResponseFixture: GetSubscriptionResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  subscription: subscriptionDtoFixture,
};

export const ratedTransactionsListFixture: RatedTransactionListItem[] = ratedTransactionsFixture.map((transaction, index) => ({
  id: transaction.code ? `${transaction.code}-${transaction.usageDate ?? index}` : `transaction-${index}`,
  code: transaction.code ?? '—',
  usageDate: transaction.usageDate ?? '',
  status: transaction.status ?? undefined,
  description: transaction.description ?? undefined,
  unityDescription: transaction.unityDescription ?? undefined,
  quantity: transaction.quantity ?? undefined,
  unitAmountWithoutTax: transaction.unitAmountWithoutTax ?? undefined,
  unitAmountWithTax: transaction.unitAmountWithTax ?? undefined,
  amountWithoutTax: transaction.amountWithoutTax ?? undefined,
  amountWithTax: transaction.amountWithTax ?? undefined,
  amountTax: transaction.amountTax ?? undefined,
  priceplanCode: transaction.priceplanCode ?? undefined,
  userAccountCode: transaction.userAccountCode ?? undefined,
  invoiceSubCategoryCode: transaction.invoiceSubCategoryCode ?? undefined,
  sellerCode: transaction.sellerCode ?? undefined,
  billingAccountCode: transaction.billingAccountCode ?? undefined,
}));

export const ratedTransactionsResponseFixture: RatedTransactionListResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Rated transactions loaded' },
  paging: {
    offset: 0,
    limit: 20,
    totalNumberOfRecords: ratedTransactionsFixture.length,
  },
  ratedTransactions: ratedTransactionsFixture,
};

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

export const taxesResponseFixture: GetTaxesResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Taxes retrieved' },
  taxesDto: {
    tax: [
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
    ],
  },
};

export const taxesListFixture: TaxListItem[] = [
  { code: 'VAT-20', description: 'TVA 20%', percent: 20, accountingCode: '4457' },
  { code: 'VAT-5.5', description: 'TVA réduite 5,5%', percent: 5.5, accountingCode: '4456' },
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

export const invoiceTypeFormFixture: InvoiceTypeFormValues = {
  code: 'INV-TYPE-STD',
  description: 'Facture standard',
  occTemplateCode: 'OCC-INVOICE',
  occTemplateNegativeCode: 'OCC-INVOICE-NEG',
  invoiceValidationScriptCode: 'VALIDATE_INVOICE',
  customInvoiceXmlScriptInstanceCode: 'XML_SCRIPT',
  billingTemplateName: 'default-billing',
  emailTemplateCode: 'invoice-email',
  matchingAuto: true,
  invoiceAccountable: true,
  useSelfSequence: false,
};

export const invoiceTypeListFixture: InvoiceTypeListItem[] = [
  {
    code: 'INV-TYPE-STD',
    description: 'Facture standard',
    occTemplateCode: 'OCC-INVOICE',
    occTemplateNegativeCode: 'OCC-INVOICE-NEG',
    matchingAuto: true,
    invoiceAccountable: true,
    useSelfSequence: false,
  },
];

export const invoiceTypesResponseFixture: GetInvoiceTypesResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceTypesDto: {
    invoiceTypes: [
      {
        code: 'INV-TYPE-STD',
        description: 'Facture standard',
        occTemplateCode: 'OCC-INVOICE',
        occTemplateNegativeCode: 'OCC-INVOICE-NEG',
        invoiceValidationScriptCode: 'VALIDATE_INVOICE',
        customInvoiceXmlScriptInstanceCode: 'XML_SCRIPT',
        billingTemplateName: 'default-billing',
        emailTemplateCode: 'invoice-email',
        matchingAuto: true,
        invoiceAccountable: true,
        useSelfSequence: false,
      },
    ],
  },
};

export const invoiceTypeDetailFixture: GetInvoiceTypeResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoiceTypeDto: {
    code: 'INV-TYPE-STD',
    description: 'Facture standard',
    occTemplateCode: 'OCC-INVOICE',
    occTemplateNegativeCode: 'OCC-INVOICE-NEG',
    invoiceValidationScriptCode: 'VALIDATE_INVOICE',
    customInvoiceXmlScriptInstanceCode: 'XML_SCRIPT',
    billingTemplateName: 'default-billing',
    emailTemplateCode: 'invoice-email',
    matchingAuto: true,
    invoiceAccountable: true,
    useSelfSequence: false,
  },
};

export const invoicingPlanFormFixture: InvoicingPlanFormValues = {
  code: 'PLAN-2024',
  description: 'Plan annuel',
};

export const invoicingPlanListFixture: InvoicingPlanListItem[] = [
  {
    code: 'PLAN-2024',
    description: 'Plan annuel',
  },
];

export const invoicingPlansResponseFixture: InvoicingPlansResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoicingPlans: {
    invoicingPlan: [
      {
        code: 'PLAN-2024',
        description: 'Plan annuel',
      },
    ],
  },
};

export const invoicingPlanItemFormFixture: InvoicingPlanItemFormValues = {
  code: 'PLAN-ITEM-01',
  description: '1ère échéance',
  billingPlanCode: 'PLAN-2024',
  advancement: 50,
  rateToBill: 1200,
};

export const invoicingPlanItemListFixture: InvoicingPlanItemListItem[] = [
  {
    code: 'PLAN-ITEM-01',
    description: '1ère échéance',
    billingPlanCode: 'PLAN-2024',
    advancement: 50,
    rateToBill: 1200,
  },
];

export const invoicingPlanItemsResponseFixture: InvoicingPlanItemsResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  invoicingPlanItems: {
    invoicingPlanItem: [
      {
        code: 'PLAN-ITEM-01',
        description: '1ère échéance',
        billingPlanCode: 'PLAN-2024',
        advancement: 50,
        rateToBill: 1200,
      },
    ],
  },
};

export const billingRunIdFormFixture: BillingRunIdFormValues = {
  billingRunId: 101,
};

export const invoiceActionFormFixture: InvoiceActionFormValues = {
  billingRunId: billingRunIdFormFixture.billingRunId,
  invoiceIds: '101, 202 303',
  deleteCanceledInvoices: true,
};

export const invalidateInvoiceDocumentsFormFixture: InvalidateInvoiceDocumentsFormValues = {
  billingRunId: billingRunIdFormFixture.billingRunId,
  invalidateXMLInvoices: true,
  invalidatePDFInvoices: false,
};

export const createBillingRunFormFixture: CreateBillingRunFormValues = {
  billingCycleCode: 'PLAN-2024',
  billingRunTypeEnum: 'AUTOMATIC',
  startDate: '2024-01-01T00:00:00.000Z',
  endDate: '2024-01-31T23:59:59.000Z',
  invoiceDate: '2024-02-01T00:00:00.000Z',
  lastTransactionDate: '2024-01-31T12:00:00.000Z',
  referenceDate: 'END_DATE',
  collectionDate: '2024-02-10T00:00:00.000Z',
  computeDatesAtValidation: true,
  skipValidationScript: true,
  rejectAutoAction: 'MOVE',
  suspectAutoAction: 'MANUAL_ACTION',
  generateAO: true,
};

export const billingAccountListInRunResponseFixture: GetBillingAccountListInRunResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Accounts ready' },
  billingAccountsDto: {
    billingAccount: [
      {
        code: 'BA-001',
        description: 'Compte principal',
        customerAccount: 'CA-001',
        billingCycle: 'PLAN-2024',
        country: 'FR',
        language: 'fr',
      },
      {
        code: 'BA-002',
        description: 'Compte secondaire',
        customerAccount: 'CA-002',
        billingCycle: 'PLAN-2024',
        country: 'FR',
        language: 'fr',
      },
      {
        code: 'BA-003',
        description: 'Compte supplémentaire',
        customerAccount: 'CA-003',
        billingCycle: 'PLAN-2024',
        country: 'FR',
        language: 'fr',
      },
    ],
  },
};

export const billingAccountListInRunSummaryFixture: BillingAccountInRunListItem[] = [
  { id: 'BA-001', code: 'BA-001', description: 'Compte principal' },
  { id: 'BA-002', code: 'BA-002', description: 'Compte secondaire' },
  { id: 'BA-003', code: 'BA-003', description: 'Compte supplémentaire' },
];

export const billingRunInfoResponseFixture: GetBillingRunInfoResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Run info ready' },
  billingRunDto: {
    status: 'VALIDATED',
    billingCycle: { code: 'PLAN-2024', invoiceDateDelayEL: '0', calendar: 'MAIN' },
    processDate: '2024-02-02T10:00:00.000Z',
    invoiceDate: '2024-02-03T10:00:00.000Z',
    statusDate: '2024-02-04T10:00:00.000Z',
    prAmountWithoutTax: 1500,
    prAmountTax: 300,
    prAmountWithTax: 1800,
    invoiceNumber: 101,
  },
};

export const billingRunInfoSummaryFixture: BillingRunInfoSummary = {
  code: '101',
  status: 'VALIDATED',
  billingCycle: 'PLAN-2024',
  processDate: '2024-02-02T10:00:00.000Z',
  invoiceDate: '2024-02-03T10:00:00.000Z',
  statusDate: '2024-02-04T10:00:00.000Z',
  amountWithoutTax: 1500,
  amountTax: 300,
  amountWithTax: 1800,
};

export const preInvoicingReportResponseFixture: GetPreInvoicingReportsResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Pre report ready' },
  preInvoicingReportsDTO: {
    billingCycleCode: 'PLAN-2024',
    billableBillingAccountNumber: 5,
    amoutWitountTax: 2500,
    taxesAmount: 500,
    lastTransactionDate: '2024-01-31T12:00:00.000Z',
    invoiceDate: '2024-02-01T00:00:00.000Z',
  },
};

export const preInvoicingReportSummaryFixture: PreInvoicingReportSummary = {
  billingCycleCode: 'PLAN-2024',
  billableAccounts: 5,
  totalAmountWithoutTax: 2500,
  taxesAmount: 500,
  lastTransactionDate: '2024-01-31T12:00:00.000Z',
  invoiceDate: '2024-02-01T00:00:00.000Z',
};

export const postInvoicingReportResponseFixture: GetPostInvoicingReportsResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Post report ready' },
  postInvoicingReportsDTO: {
    invoicesNumber: 4,
    positiveInvoicesAmount: 1800,
    negativeInvoicesAmount: 150,
    globalAmount: 1650,
  },
};

export const postInvoicingReportSummaryFixture: PostInvoicingReportSummary = {
  invoicesNumber: 4,
  positiveInvoicesAmount: 1800,
  negativeInvoicesAmount: 150,
  globalAmount: 1650,
};

export const actionStatusSuccessFixture: ActionStatus = {
  status: 'SUCCESS',
  message: 'OK',
};

export const accountingCodeDtoFixture: AccountingCodeDto = {
  code: 'ACC-1000',
  description: 'Ventes France',
  parentAccountingCode: 'ACC-100',
  chartOfAccountTypeEnum: 'REVENUE',
  chartOfAccountViewTypeEnum: 'REGULAR',
  reportingAccount: '701000',
  notes: 'Code principal ventes',
  disabled: false,
  migrated: false,
};

export const accountingCodeFormFixture: AccountingCodeFormValues = {
  code: accountingCodeDtoFixture.code!,
  description: accountingCodeDtoFixture.description!,
  parentAccountingCode: accountingCodeDtoFixture.parentAccountingCode!,
  chartOfAccountTypeEnum: accountingCodeDtoFixture.chartOfAccountTypeEnum,
  chartOfAccountViewTypeEnum: accountingCodeDtoFixture.chartOfAccountViewTypeEnum,
  reportingAccount: accountingCodeDtoFixture.reportingAccount!,
  notes: accountingCodeDtoFixture.notes!,
  disabled: accountingCodeDtoFixture.disabled!,
  migrated: accountingCodeDtoFixture.migrated!,
};

export const accountingCodeListFixture: AccountingCodeListItem[] = [
  {
    code: accountingCodeDtoFixture.code!,
    description: accountingCodeDtoFixture.description!,
    chartOfAccountTypeEnum: accountingCodeDtoFixture.chartOfAccountTypeEnum,
    chartOfAccountViewTypeEnum: accountingCodeDtoFixture.chartOfAccountViewTypeEnum,
    parentAccountingCode: accountingCodeDtoFixture.parentAccountingCode!,
    disabled: accountingCodeDtoFixture.disabled!,
  },
];

export { accountingCodeMappingFormFixture, accountingCodeMappingInputFixture } from './accountingCodeMapping';

export const accountingCodeListResponseFixture: AccountingCodeListResponseDto = {
  actionStatus: actionStatusSuccessFixture,
  accountingCodes: [accountingCodeDtoFixture],
};

export const accountingCodeResponseFixture: AccountingCodeGetResponseDto = {
  actionStatus: actionStatusSuccessFixture,
  accountingCode: accountingCodeDtoFixture,
};

export const accountingCodeDetailFixture: AccountingCodeDetailValues = {
  code: accountingCodeDtoFixture.code!,
  description: accountingCodeDtoFixture.description!,
  parentAccountingCode: accountingCodeDtoFixture.parentAccountingCode!,
  chartOfAccountTypeEnum: accountingCodeDtoFixture.chartOfAccountTypeEnum,
  chartOfAccountViewTypeEnum: accountingCodeDtoFixture.chartOfAccountViewTypeEnum,
  reportingAccount: accountingCodeDtoFixture.reportingAccount!,
  notes: accountingCodeDtoFixture.notes!,
  disabled: accountingCodeDtoFixture.disabled!,
  migrated: accountingCodeDtoFixture.migrated!,
};

export const accountingArticleDtoFixture: AccountingArticleDto = {
  id: 101,
  code: 'ART-STD',
  description: 'Standard accounting article',
  invoiceSubCategory: { code: 'INV-SUB-CAT' },
  taxClass: { code: 'VAT-20' },
  accountingCode: { code: accountingCodeDtoFixture.code! },
  articleFamily: { code: 'ART-FAMILY' },
  invoiceType: { code: 'INV-TYPE-STD' },
  invoiceTypeEl: "return invoice.invoiceType.code",
  accountingCodeEl: "return invoice.accountingCode.code",
  columCriteriaEL: "billingAccount.code == 'ACC-001'",
  analyticCode1: 'AN-001',
  analyticCode2: 'AN-002',
  analyticCode3: 'AN-003',
  unitPrice: 49.99,
  ignoreAggregation: false,
  languageDescriptions: [
    { languageCode: 'en', description: 'Standard article' },
    { languageCode: 'fr', description: 'Article standard' },
  ],
  customFields: {
    customField: [
      {
        code: 'LABEL',
        description: 'Display label',
        fieldType: 'STRING',
        stringValue: 'Standard',
        languageDescriptions: [],
        empty: false,
      },
    ],
    inheritedCustomField: [],
    empty: false,
  },
};

export const accountingArticleFormFixture: AccountingArticleFormValues = {
  id: accountingArticleDtoFixture.id!,
  code: accountingArticleDtoFixture.code!,
  description: accountingArticleDtoFixture.description!,
  invoiceSubCategoryCode: accountingArticleDtoFixture.invoiceSubCategory?.code ?? '',
  taxClassCode: accountingArticleDtoFixture.taxClass?.code ?? '',
  accountingCode: accountingArticleDtoFixture.accountingCode?.code ?? undefined,
  articleFamilyCode: accountingArticleDtoFixture.articleFamily?.code ?? undefined,
  invoiceTypeCode: accountingArticleDtoFixture.invoiceType?.code ?? undefined,
  invoiceTypeEl: accountingArticleDtoFixture.invoiceTypeEl ?? undefined,
  accountingCodeEl: accountingArticleDtoFixture.accountingCodeEl ?? undefined,
  columnCriteriaEl: accountingArticleDtoFixture.columCriteriaEL ?? undefined,
  analyticCode1: accountingArticleDtoFixture.analyticCode1 ?? undefined,
  analyticCode2: accountingArticleDtoFixture.analyticCode2 ?? undefined,
  analyticCode3: accountingArticleDtoFixture.analyticCode3 ?? undefined,
  unitPrice:
    accountingArticleDtoFixture.unitPrice !== undefined
      ? String(accountingArticleDtoFixture.unitPrice)
      : undefined,
  ignoreAggregation: Boolean(accountingArticleDtoFixture.ignoreAggregation),
  languageDescriptions:
    accountingArticleDtoFixture.languageDescriptions?.map((item) => ({
      languageCode: item.languageCode ?? '',
      description: item.description ?? '',
    })) ?? [],
  customFieldsJson: accountingArticleDtoFixture.customFields
    ? JSON.stringify(accountingArticleDtoFixture.customFields, null, 2)
    : undefined,
};

export const accountingArticleListFixture: AccountingArticleListItem[] = [
  {
    code: accountingArticleDtoFixture.code!,
    description: accountingArticleDtoFixture.description!,
    invoiceSubCategoryCode: accountingArticleDtoFixture.invoiceSubCategory?.code ?? undefined,
    taxClassCode: accountingArticleDtoFixture.taxClass?.code ?? undefined,
    accountingCode: accountingArticleDtoFixture.accountingCode?.code ?? undefined,
    articleFamilyCode: accountingArticleDtoFixture.articleFamily?.code ?? undefined,
    unitPrice: accountingArticleDtoFixture.unitPrice ?? undefined,
    ignoreAggregation: accountingArticleDtoFixture.ignoreAggregation ?? undefined,
  },
];

export const accountingArticleListResponseFixture: AccountingArticleListResponseDto = {
  actionStatus: actionStatusSuccessFixture,
  accountingArticles: [accountingArticleDtoFixture],
  totalRecords: 1,
};

export const accountingArticleResponseFixture: AccountingArticleResponseDto = {
  actionStatus: actionStatusSuccessFixture,
  accountingArticle: accountingArticleDtoFixture,
};

export const accountingArticleDetailFixture: AccountingArticleDetailValues = accountingArticleFormFixture;

export const accountingArticleListResultFixture: AccountingArticleList = {
  items: accountingArticleListFixture,
  paging: {
    totalRecords: 1,
    limit: 20,
    offset: 0,
    sort: null,
    orderBy: null,
  },
};

export const mediationRegisterFixture: RegisterCdrFormValues = {
  payload: 'CDR|REGISTER|demo',
};

export const mediationChargeFormFixture: ChargeCdrFormValues = {
  payload: 'CDR|CHARGE|demo',
  isVirtual: true,
  rateTriggeredEdr: true,
  maxDepth: 3,
  returnEDRs: true,
  returnWalletOperations: false,
  returnWalletOperationDetails: false,
  returnCounters: false,
  generateRTs: false,
};

export const mediationChargeResponseFixture: ChargeCdrResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Charged' },
  amountWithoutTax: 1250.5,
  amountTax: 250.1,
  amountWithTax: 1500.6,
  walletOperationCount: 4,
  reservationIds: [12, 18],
  edrIds: [101, 102],
};

export const mediationChargeSummaryFixture: ChargeCdrSummary = {
  message: 'Charged',
  amountWithoutTax: mediationChargeResponseFixture.amountWithoutTax,
  amountTax: mediationChargeResponseFixture.amountTax,
  amountWithTax: mediationChargeResponseFixture.amountWithTax,
  walletOperationCount: mediationChargeResponseFixture.walletOperationCount,
  reservationIds: mediationChargeResponseFixture.reservationIds,
  edrIds: mediationChargeResponseFixture.edrIds,
};

export const mediationReservationFormFixture: ReserveCdrFormValues = {
  payload: 'CDR|RESERVE|demo',
};

export const mediationReservationResponseFixture: CdrReservationResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Reservation created' },
  reservationId: 42,
  availableQuantity: 120.5,
};

export const languageIsoFormFixture: LanguageIsoFormValues = {
  code: 'fr',
  description: 'Français',
};

export const languageIsoListFixture: LanguageIsoListItem[] = [
  { code: 'fr', description: 'Français' },
  { code: 'en', description: 'Anglais' },
];

export const languagesIsoResponseFixture: GetLanguagesIsoResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  languages: languageIsoListFixture.map(({ code, description }) => ({ code, description })),
};

export const languageIsoDetailFixture: GetLanguageIsoResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  language: { code: 'fr', description: 'Français' },
};

export const languageFormFixture: LanguageFormValues = {
  code: 'fr_FR',
  description: 'Français (France)',
  disabled: false,
};

export const languageListFixture: LanguageListItem[] = [
  { code: 'fr_FR', description: 'Français (France)', disabled: false },
  { code: 'en_GB', description: 'Anglais (UK)', disabled: true },
];

export const languagesResponseFixture: TradingLanguagesResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  tradingLanguages: {
    language: languageListFixture.map((item) => ({
      code: item.code,
      description: item.description,
      disabled: item.disabled,
    })),
  },
};

export const languageDetailFixture: GetTradingLanguageResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  language: {
    code: 'fr_FR',
    description: 'Français (France)',
    disabled: false,
    languageDescriptions: [
      { languageCode: 'en', description: 'French (France)' },
      { languageCode: 'fr', description: 'Français (France)' },
    ],
  },
};

export const importFileTypeFixture: ImportFileTypeDto = {
  fileName: 'customers.csv',
  fileType: 'CUSTOMER',
};

const occTemplateDtoFixture = {
  code: 'OCC_DEBIT',
  description: 'Template débit',
  accountingCode: '7010',
  accountCode: 'ACC-01',
  occCategory: 'DEBIT' as const,
  accountCodeClientSide: 'ACC-CLIENT',
  journalCode: 'JNL-1',
  accountingScheme: { code: 'SCH-1', scriptCode: 'ACCOUNT-SCRIPT' },
  contractAccountingCode: 'CONTRACT-01',
  contraAccountingCode2: 'CONTRA-02',
};

export const occTemplatesResponseFixture: GetOccTemplatesResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Liste OCC templates' },
  occTemplates: {
    occTemplate: [occTemplateDtoFixture],
  },
};

export const occTemplateListFixture: OccTemplateListItem[] = [
  {
    code: 'OCC_DEBIT',
    description: 'Template débit',
    occCategory: 'DEBIT',
    accountingCode: '7010',
    accountCode: 'ACC-01',
  },
];

export const occTemplateFormFixture: OccTemplateFormValues = {
  code: 'OCC_DEBIT',
  description: 'Template débit',
  accountingCode: '7010',
  accountCode: 'ACC-01',
  occCategory: 'DEBIT',
  accountCodeClientSide: 'ACC-CLIENT',
  journalCode: 'JNL-1',
  accountingSchemeCode: 'SCH-1',
  contractAccountingCode: 'CONTRACT-01',
  contraAccountingCode2: 'CONTRA-02',
};

export const occTemplateResponseFixture: GetOccTemplateResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Détail OCC template' },
  occTemplate: occTemplateDtoFixture,
};

export const pdfInvoiceResponseFixture: PdfInvoiceResponse = {
  actionStatus: { status: 'SUCCESS', message: '2 documents' },
  pdfInvoice: ['JVBERi0xLjQK', 'JVBERi0xLjMK'],
};

export const providerResponseFixture: GetProviderResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Provider loaded' },
  provider: {
    code: 'OPENCELL',
    description: 'Opencell France',
    currency: 'EUR',
    country: 'FR',
    language: 'fr',
    multiCurrency: true,
    multiCountry: false,
    multiLanguage: true,
    enterprise: true,
    rounding: 2,
    roundingMode: 'HALF_EVEN',
    invoiceRounding: 2,
    invoiceRoundingMode: 'NEAREST',
    discountAccountingCode: 'DISC-01',
    email: 'billing@opencell.com',
    recognizeRevenue: true,
  },
};

export const providerFormFixture: ProviderFormValues = {
  code: 'OPENCELL',
  description: 'Opencell France',
  currency: 'EUR',
  country: 'FR',
  language: 'fr',
  multiCurrency: true,
  multiCountry: false,
  multiLanguage: true,
  enterprise: true,
  rounding: 2,
  roundingMode: 'HALF_EVEN',
  invoiceRounding: 2,
  invoiceRoundingMode: 'NEAREST',
  discountAccountingCode: 'DISC-01',
  email: 'billing@opencell.com',
  recognizeRevenue: true,
};

export const providerTenantsResponseFixture: ProvidersResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Tenants' },
  providers: [
    { code: 'TENANT-A', description: 'Tenant A', currency: 'EUR', country: 'FR' },
    { code: 'TENANT-B', description: 'Tenant B', currency: 'USD', country: 'US' },
  ],
};

export const providerTenantsFixture: ProviderTenantListItem[] = [
  { code: 'TENANT-A', description: 'Tenant A', currency: 'EUR', country: 'FR' },
  { code: 'TENANT-B', description: 'Tenant B', currency: 'USD', country: 'US' },
];

export const providerCustomerConfigurationFixture: GetCustomerConfigurationResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Customer config' },
  customerBrands: { customerBrand: [{ code: 'BR1', description: 'Brand 1' }] },
  customerCategories: { customerCategory: [{ code: 'CAT1', description: 'Category 1', accountingCode: '7010' }] },
  titles: { title: [{ code: 'MR', description: 'Monsieur', isCompany: false }] },
};

export const titleListResponseFixture: TitlesResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Titles loaded' },
  titles: { title: [{ code: 'MR', description: 'Mister', isCompany: false }] },
};

export const titleListFixture: TitleListItem[] = [
  { code: 'MR', description: 'Mister', isCompany: false },
];

export const titleResponseFixture: TitleResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Title loaded' },
  titleDto: { code: 'MR', description: 'Mister', isCompany: false },
};

export const titleDetailFixture: TitleDetailValues = {
  code: 'MR',
  description: 'Mister',
  isCompany: false,
  languageDescriptions: undefined,
};

export const providerCustomerAccountConfigurationFixture: GetCustomerAccountConfigurationResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Customer account config' },
  paymentMethods: ['CHECK', 'WIRETRANSFER'],
  creditCategories: { creditCategory: [{ code: 'CRED1', description: 'Credit Cat' }] },
};

export const providerInvoicingConfigurationFixture: GetInvoicingConfigurationResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Invoicing config' },
  calendars: {
    calendar: [
      {
        code: 'CAL',
        description: 'Calendar',
        calendarType: 'YEARLY',
        periodUnit: 'MONTH',
        periodLength: 1,
        nbPeriods: 12,
      },
    ],
  },
  taxes: { tax: [{ code: 'VAT20', description: 'VAT 20%' }] },
  invoiceCategories: {
    invoiceCategory: [{ code: 'INV', description: 'Invoice cat', occTemplateCode: 'OCC-INV' }],
  },
  invoiceSubCategories: {
    invoiceSubCategory: [
      {
        code: 'SUB',
        description: 'Invoice sub',
        invoiceCategory: 'INV',
        accountingCode: '7010',
        occTemplateCode: 'OCC-SUB',
      },
    ],
  },
  billingCycles: {
    billingCycle: [
      {
        code: 'MONTHLY',
        description: 'Mensuel',
        calendar: 'CAL',
        invoiceDateDelayEL: '0',
      },
    ],
  },
  terminationReasons: { terminationReason: [{ code: 'TERM', description: 'Termination' }] },
};

export const providerTradingConfigurationFixture: GetTradingConfigurationResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Trading config' },
  countries: { country: [{ countryCode: 'FR', currencyCode: 'EUR' }] },
  currencies: { currency: [{ code: 'EUR', description: 'Euro' }] },
  languages: { language: [{ code: 'fr_FR', description: 'Français', disabled: false }] },
};

export const scriptInstanceResponseFixture: GetScriptInstanceResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Script loaded' },
  scriptInstance: {
    code: 'SCRIPT-001',
    description: 'Send notification',
    type: 'JAVA',
    reuse: true,
    script: "return 'ok';",
    disabled: false,
    scriptInstanceCategoryCode: 'NOTIFY',
    codeOnly: false,
  },
};

export const fileFormatListResponseFixture: FileFormatListResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'File formats loaded' },
  dtos: [
    {
      code: 'CSV_IMPORT',
      description: 'CSV import format',
      fileNamePattern: 'import_*.csv',
      fileNameUniqueness: true,
      fileTypes: ['CSV'],
      configurationTemplate: 'csv-template',
      recordName: 'importRecord',
      inputDirectory: '/data/in',
      outputDirectory: '/data/out',
      rejectDirectory: '/data/reject',
      archiveDirectory: '/data/archive',
      jobCode: 'JOB_CSV_IMPORT',
    },
  ],
};

export const fileFormatListFixture: FileFormatListItem[] = [
  {
    code: 'CSV_IMPORT',
    description: 'CSV import format',
    fileNamePattern: 'import_*.csv',
    jobCode: 'JOB_CSV_IMPORT',
    fileTypes: ['CSV'],
    fileNameUniqueness: true,
  },
];

export const fileFormatResponseFixture: FileFormatResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'File format loaded' },
  dto: fileFormatListResponseFixture.dtos?.[0],
};

export const fileFormatDetailFixture: FileFormatFormValues = {
  code: 'CSV_IMPORT',
  description: 'CSV import format',
  fileNamePattern: 'import_*.csv',
  fileNameUniqueness: true,
  fileTypes: ['CSV'],
  configurationTemplate: 'csv-template',
  recordName: 'importRecord',
  inputDirectory: '/data/in',
  outputDirectory: '/data/out',
  rejectDirectory: '/data/reject',
  archiveDirectory: '/data/archive',
  jobCode: 'JOB_CSV_IMPORT',
};

export const filesResponseFixture: GetFilesResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Files loaded' },
  files: [
    { name: 'imports', directory: true, lastModified: '2025-01-01T10:00:00.000Z' },
    { name: 'report.csv', directory: false, lastModified: '2025-01-15T08:30:00.000Z' },
  ],
};

export const filesListFixture: FileListItem[] = [
  { name: 'imports', directory: true, lastModified: '2025-01-01T10:00:00.000Z' },
  { name: 'report.csv', directory: false, lastModified: '2025-01-15T08:30:00.000Z' },
];

export const auditVersionResponseFixture = { status: 'SUCCESS', message: '1.2.3' } as const;

export const scriptInstanceListFixture: ScriptInstanceListItem[] = [
  {
    code: 'SCRIPT-001',
    description: 'Send notification',
    type: 'JAVA',
    disabled: false,
  },
];

export const sellerResponseFixture: SellerResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Sellers' },
  sellers: {
    seller: [
      {
        code: 'SELLER-01',
        description: 'Metropolitan sales',
        currencyCode: 'EUR',
        countryCode: 'FR',
      },
      {
        code: 'SELLER-02',
        description: 'International sales',
        currencyCode: 'USD',
        countryCode: 'US',
      },
    ],
  },
};

export const sellerListFixture: SellerListItem[] = [
  { code: 'SELLER-01', description: 'Metropolitan sales', currencyCode: 'EUR', countryCode: 'FR' },
  { code: 'SELLER-02', description: 'International sales', currencyCode: 'USD', countryCode: 'US' },
];

export const terminationReasonResponseFixture: GetTerminationReasonResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Termination reasons' },
  terminationReason: [
    {
      code: 'TERM-GOODWILL',
      description: 'Goodwill termination',
      applyAgreement: true,
      invoiceAgreementImmediately: false,
      applyReimbursment: true,
      applyTerminationCharges: false,
      overrideProrata: 'PRORATA',
      reimburseOneshots: true,
    },
  ],
};

export const terminationReasonListFixture: TerminationReasonListItem[] = [
  {
    code: 'TERM-GOODWILL',
    description: 'Goodwill termination',
    overrideProrata: 'PRORATA',
    applyTerminationCharges: false,
  },
];

export const usageResponseFixture: UsageResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Usage sample' },
  listCatUsage: [
    {
      code: 'VOICE',
      description: 'Voice services',
      listSubCatUsage: [
        {
          code: 'OUT',
          description: 'Outgoing calls',
          listUsage: [
            {
              dateEvent: '2024-06-01T10:00:00.000Z',
              code: 'CALL-001',
              description: 'International call',
              unityDescription: 'minute',
              unitAmountWithoutTax: 0.12,
              quantity: 10,
              amountWithoutTax: 1.2,
              parameter1: 'FR',
              parameter2: 'US',
              offerCode: 'VOICE-PACK',
              priceplanCode: 'STANDARD',
            },
          ],
        },
      ],
    },
  ],
};

export const usageListFixture: UsageListItem[] = [
  {
    id: 'VOICE::OUT::CALL-001::2024-06-01T10:00:00.000Z',
    categoryCode: 'VOICE',
    categoryDescription: 'Voice services',
    subCategoryCode: 'OUT',
    subCategoryDescription: 'Outgoing calls',
    dateEvent: '2024-06-01T10:00:00.000Z',
    code: 'CALL-001',
    description: 'International call',
    unityDescription: 'minute',
    unitAmountWithoutTax: 0.12,
    quantity: 10,
    amountWithoutTax: 1.2,
    parameter1: 'FR',
    parameter2: 'US',
    offerCode: 'VOICE-PACK',
    priceplanCode: 'STANDARD',
  },
];

export const usageChargeAggregateResponseFixture: UsageChargeAggregateResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Aggregates' },
  listChargeAggregate: [
    { description: 'Outgoing calls', quantity: '10', amount: '1.2' },
    { description: 'Data usage', quantity: '500', amount: '5.0' },
  ],
};

export const usageAggregateListFixture: UsageChargeAggregateListItem[] = [
  { id: 'Outgoing calls-0', description: 'Outgoing calls', quantity: '10', amount: '1.2' },
  { id: 'Data usage-1', description: 'Data usage', quantity: '500', amount: '5.0' },
];

export const accessesResponseFixture: AccessesResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Access list' },
  paging: { offset: 0, limit: 20, totalNumberOfRecords: 1 },
  accesses: {
    access: [
      {
        code: 'ACC-ACCESS',
        subscription: 'SUB-001',
        startDate: '2024-01-01T00:00:00.000Z',
        endDate: '2024-12-31T23:59:59.000Z',
        disabled: false,
      },
    ],
  },
};

export const accessListFixture: AccessListItem[] = [
  {
    code: 'ACC-ACCESS',
    subscription: 'SUB-001',
    startDate: '2024-01-01T00:00:00.000Z',
    endDate: '2024-12-31T23:59:59.000Z',
    disabled: false,
  },
];

export const businessAccountModelsResponseFixture: MeveoModuleDtosResponse = {
  actionStatus: { status: 'SUCCESS', message: 'Modules' },
  paging: { offset: 0, limit: 20, totalNumberOfRecords: 1 },
  modules: [
    {
      code: 'BAM-STD',
      description: 'Standard business account model',
      license: 'MIT',
      disabled: false,
      moduleItems: [],
      script: {
        code: 'BAM_SCRIPT',
        description: 'Installer script',
        updatedCode: undefined,
        disabled: false,
        type: 'JAVA',
        reuse: false,
        script: '// script',
        executionRoles: [],
        sourcingRoles: [],
        languageDescriptions: [],
        scriptParameters: [],
        codeOnly: false,
      },
    },
  ],
};

export const businessAccountModelListFixture: BusinessAccountModelListItem[] = [
  {
    code: 'BAM-STD',
    description: 'Standard business account model',
    hierarchyType: undefined,
    license: 'MIT',
    disabled: false,
  },
];

export const providerContactsResponseFixture: ProviderContactsResponseDto = {
  actionStatus: { status: 'SUCCESS', message: 'Contacts' },
  providerContacts: [
    {
      code: 'PC-001',
      description: 'Primary contact',
      firstName: 'Alice',
      lastName: 'Martin',
      email: 'alice@example.com',
      phone: '+33102030405',
      mobile: '+33612345678',
      fax: '+33102030406',
      genericMail: 'support@example.com',
      addressDto: {
        address1: '10 rue Victor Hugo',
        address2: 'Bâtiment B',
        address3: undefined,
        address4: undefined,
        address5: undefined,
        zipCode: '75001',
        city: 'Paris',
        country: 'FR',
        state: 'IDF',
      },
    },
  ],
};

export const providerContactListFixture: ProviderContactListItem[] = [
  {
    code: 'PC-001',
    description: 'Primary contact',
    firstName: 'Alice',
    lastName: 'Martin',
    email: 'alice@example.com',
    phone: '+33102030405',
  },
];

export const queryResponseFixture: QueryResponse = {
  actionStatus: { status: 'SUCCESS', message: 'OK' },
  result: '{"items":[]}',
};
