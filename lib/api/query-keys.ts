export const queryKeys = {
  customers: {
    root: ['customers'] as const,
    list: (filters?: Record<string, unknown>) =>
      filters ? ['customers', 'list', filters] as const : ['customers', 'list'] as const,
    detail: (code: string) => ['customers', 'detail', code] as const,
  },
  customerAccounts: {
    root: ['customerAccounts'] as const,
    list: (filters?: Record<string, unknown>) =>
      filters ? ['customerAccounts', 'list', filters] as const : ['customerAccounts', 'list'] as const,
    detail: (code: string) => ['customerAccounts', 'detail', code] as const,
  },
  invoices: {
    list: (filters?: Record<string, unknown>) =>
      filters ? ['invoices', 'list', filters] as const : ['invoices', 'list'] as const,
    detail: (id: number | string) => ['invoices', 'detail', id] as const,
  },
  taxes: {
    list: () => ['taxes', 'list'] as const,
    detail: (code: string) => ['taxes', 'detail', code] as const,
  },
  billingCycles: {
    list: () => ['billingCycles', 'list'] as const,
    detail: (code: string) => ['billingCycles', 'detail', code] as const,
  },
  calendars: {
    list: () => ['calendars', 'list'] as const,
    detail: (code: string) => ['calendars', 'detail', code] as const,
  },
  configuration: {
    list: () => ['configuration', 'list'] as const,
    detail: (key: string) => ['configuration', 'detail', key] as const,
  },
  countryIso: {
    list: () => ['countryIso', 'list'] as const,
    detail: (code: string) => ['countryIso', 'detail', code] as const,
  },
  countries: {
    list: () => ['countries', 'list'] as const,
    detail: (code: string) => ['countries', 'detail', code] as const,
  },
};
