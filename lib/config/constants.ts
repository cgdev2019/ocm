export const APP_TITLE = 'Opencell Console';
export const DASHBOARD_ROUTE = '/';

export const NAV_SECTIONS: Array<{
  label: string;
  path: string;
  icon:
    | 'dashboard'
    | 'customers'
    | 'accounts'
    | 'invoices'
    | 'taxes'
    | 'jobs'
    | 'billing'
    | 'calendar'
    | 'settings'
    | 'globe'
    | 'genericCode'
    | 'invoiceCategory'
    | 'invoiceSequence'
    | 'invoiceSubCategory'
    | 'invoiceType'
    | 'languageIso'
    | 'language'
    | 'massImport';
}> = [
  { label: 'navigation.dashboard', path: '/', icon: 'dashboard' },
  { label: 'navigation.customers', path: '/customers', icon: 'customers' },
  { label: 'navigation.customerAccounts', path: '/customer-accounts', icon: 'accounts' },
  { label: 'navigation.invoices', path: '/invoices', icon: 'invoices' },
  { label: 'navigation.taxes', path: '/taxes', icon: 'taxes' },
  { label: 'navigation.billingCycles', path: '/billing-cycles', icon: 'billing' },
  { label: 'navigation.calendars', path: '/calendars', icon: 'calendar' },
  { label: 'navigation.configuration', path: '/configuration', icon: 'settings' },
  { label: 'navigation.currencyIso', path: '/currency-iso', icon: 'globe' },
  { label: 'navigation.currency', path: '/currency', icon: 'billing' },
  { label: 'navigation.countryIso', path: '/country-iso', icon: 'globe' },
  { label: 'navigation.countries', path: '/countries', icon: 'globe' },
  { label: 'navigation.filters', path: '/filters', icon: 'settings' },
  { label: 'navigation.genericCodes', path: '/generic-codes', icon: 'genericCode' },
  { label: 'navigation.invoiceCategories', path: '/invoice-categories', icon: 'invoiceCategory' },
  { label: 'navigation.invoiceSequences', path: '/invoice-sequences', icon: 'invoiceSequence' },
  { label: 'navigation.invoiceSubCategories', path: '/invoice-sub-categories', icon: 'invoiceSubCategory' },
  { label: 'navigation.invoiceTypes', path: '/invoice-types', icon: 'invoiceType' },
  { label: 'navigation.languageIso', path: '/language-iso', icon: 'languageIso' },
  { label: 'navigation.languages', path: '/languages', icon: 'language' },
  { label: 'navigation.massImport', path: '/mass-import', icon: 'massImport' },
];
