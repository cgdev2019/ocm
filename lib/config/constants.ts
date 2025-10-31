export const APP_TITLE = 'Opencell Console';
export const DASHBOARD_ROUTE = '/';

export const NAV_SECTIONS: Array<{
  label: string;
  path: string;
  icon: 'dashboard' | 'customers' | 'accounts' | 'invoices' | 'taxes' | 'jobs' | 'billing' | 'calendar' | 'settings' | 'globe';
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
];
