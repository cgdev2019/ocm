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
  currencyIso: {
    list: () => ['currencyIso', 'list'] as const,
    detail: (code: string) => ['currencyIso', 'detail', code] as const,
  },
  currency: {
    list: () => ['currency', 'list'] as const,
    detail: (code: string) => ['currency', 'detail', code] as const,
  },
  filters: {
    list: (code: string) => ['filters', 'list', code] as const,
    detail: (code: string) => ['filters', 'detail', code] as const,
  },
  genericCodes: {
    list: (entityClass?: string) =>
      entityClass
        ? (['genericCodes', 'list', entityClass] as const)
        : (['genericCodes', 'list'] as const),
    detail: (entityClass: string) => ['genericCodes', 'detail', entityClass] as const,
    version: () => ['genericCodes', 'version'] as const,
  },
  invoiceCategories: {
    list: () => ['invoiceCategories', 'list'] as const,
    detail: (code: string) => ['invoiceCategories', 'detail', code] as const,
  },
  invoiceSequences: {
    list: () => ['invoiceSequences', 'list'] as const,
    detail: (code: string) => ['invoiceSequences', 'detail', code] as const,
  },
  invoiceSubCategories: {
    list: () => ['invoiceSubCategories', 'list'] as const,
    detail: (code: string) => ['invoiceSubCategories', 'detail', code] as const,
  },
};
