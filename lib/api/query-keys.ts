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
  subscriptions: {
    root: ['subscriptions'] as const,
    list: (filters?: Record<string, unknown> | null) =>
      filters ? (['subscriptions', 'list', filters] as const) : (['subscriptions', 'list'] as const),
    detail: (code: string) => ['subscriptions', 'detail', code] as const,
    byCustomer: (customerCode: string) => ['subscriptions', 'byCustomer', customerCode] as const,
    dueDateDelay: (criteria?: Record<string, unknown> | null) =>
      criteria
        ? (['subscriptions', 'dueDateDelay', criteria] as const)
        : (['subscriptions', 'dueDateDelay'] as const),
    serviceInstances: (criteria?: Record<string, unknown> | null) =>
      criteria
        ? (['subscriptions', 'serviceInstances', criteria] as const)
        : (['subscriptions', 'serviceInstances'] as const),
    serviceInstance: (criteria: Record<string, unknown>) =>
      ['subscriptions', 'serviceInstance', criteria] as const,
    oneShotCharges: (criteria?: Record<string, unknown> | null) =>
      criteria
        ? (['subscriptions', 'oneShotCharges', criteria] as const)
        : (['subscriptions', 'oneShotCharges'] as const),
    version: () => ['subscriptions', 'version'] as const,
  },
  accountingCodes: {
    list: () => ['accountingCodes', 'list'] as const,
    detail: (code: string) => ['accountingCodes', 'detail', code] as const,
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
  invoiceTypes: {
    list: () => ['invoiceTypes', 'list'] as const,
    detail: (code: string) => ['invoiceTypes', 'detail', code] as const,
  },
  languageIso: {
    list: () => ['languageIso', 'list'] as const,
    detail: (code: string) => ['languageIso', 'detail', code] as const,
  },
  languages: {
    list: () => ['languages', 'list'] as const,
    detail: (code: string) => ['languages', 'detail', code] as const,
  },
  titles: {
    list: (filters?: Record<string, unknown>) =>
      filters ? (['titles', 'list', filters] as const) : (['titles', 'list'] as const),
    all: () => ['titles', 'all'] as const,
    detail: (code: string) => ['titles', 'detail', code] as const,
    version: () => ['titles', 'version'] as const,
  },
  audit: {
    version: () => ['audit', 'version'] as const,
  },
  fileFormats: {
    list: (filters?: Record<string, unknown>) =>
      filters ? (['fileFormats', 'list', filters] as const) : (['fileFormats', 'list'] as const),
    all: () => ['fileFormats', 'all'] as const,
    detail: (code: string) => ['fileFormats', 'detail', code] as const,
    version: () => ['fileFormats', 'version'] as const,
  },
  occTemplates: {
    list: () => ['occTemplates', 'list'] as const,
    detail: (code: string) => ['occTemplates', 'detail', code] as const,
    version: () => ['occTemplates', 'version'] as const,
  },
  pdfInvoices: {
    search: (criteria?: { invoiceNumber?: string; customerAccountCode?: string }) =>
      criteria
        ? (['pdfInvoices', 'search', criteria] as const)
        : (['pdfInvoices', 'search'] as const),
    version: () => ['pdfInvoices', 'version'] as const,
  },
  provider: {
    detail: () => ['provider', 'detail'] as const,
    customerConfiguration: () => ['provider', 'customerConfiguration'] as const,
    customerAccountConfiguration: () => ['provider', 'customerAccountConfiguration'] as const,
    invoicingConfiguration: () => ['provider', 'invoicingConfiguration'] as const,
    tradingConfiguration: () => ['provider', 'tradingConfiguration'] as const,
    tenants: () => ['provider', 'tenants'] as const,
  },
  queryService: {
    search: (query?: string) => (query ? (['queryService', 'search', query] as const) : (['queryService', 'search'] as const)),
  },
  usage: {
    search: (criteria?: { userAccountCode?: string | null; fromDate?: string | null; toDate?: string | null }) =>
      criteria
        ? (['usage', 'search', criteria] as const)
        : (['usage', 'search'] as const),
    chargeAggregate: (criteria?: { userAccountCode?: string | null; fromDate?: string | null; toDate?: string | null }) =>
      criteria
        ? (['usage', 'chargeAggregate', criteria] as const)
        : (['usage', 'chargeAggregate'] as const),
    version: () => ['usage', 'version'] as const,
  },
  access: {
    list: (filters?: { subscriptionCode?: string | null }) =>
      filters ? (['access', 'list', filters] as const) : (['access', 'list'] as const),
    detail: (params: { accessCode: string; subscriptionCode?: string | null }) =>
      ['access', 'detail', params] as const,
    version: () => ['access', 'version'] as const,
  },
  businessAccountModels: {
    list: () => ['businessAccountModels', 'list'] as const,
    detail: (code: string) => ['businessAccountModels', 'detail', code] as const,
    parents: (code: string) => ['businessAccountModels', 'parents', code] as const,
    version: () => ['businessAccountModels', 'version'] as const,
  },
  providerContacts: {
    list: () => ['providerContacts', 'list'] as const,
    detail: (code: string) => ['providerContacts', 'detail', code] as const,
    version: () => ['providerContacts', 'version'] as const,
  },
  scriptInstances: {
    list: (code?: string) =>
      code ? (['scriptInstances', 'list', code] as const) : (['scriptInstances', 'list'] as const),
    detail: (code: string) => ['scriptInstances', 'detail', code] as const,
    version: () => ['scriptInstances', 'version'] as const,
  },
  sellers: {
    list: () => ['sellers', 'list'] as const,
    detail: (code: string) => ['sellers', 'detail', code] as const,
    codes: () => ['sellers', 'codes'] as const,
  },
  terminationReasons: {
    list: () => ['terminationReasons', 'list'] as const,
    detail: (code: string) => ['terminationReasons', 'detail', code] as const,
    version: () => ['terminationReasons', 'version'] as const,
  },
  files: {
    list: (path?: string | null) =>
      path ? (['files', 'list', path] as const) : (['files', 'list'] as const),
    all: () => ['files', 'all'] as const,
    version: () => ['files', 'version'] as const,
  },
  invoicingPlanItems: {
    list: (criteria?: Record<string, unknown>) =>
      criteria
        ? (['invoicingPlanItems', 'list', criteria] as const)
        : (['invoicingPlanItems', 'list'] as const),
    detail: (code: string) => ['invoicingPlanItems', 'detail', code] as const,
    version: () => ['invoicingPlanItems', 'version'] as const,
  },
  invoicingPlans: {
    list: (criteria?: Record<string, unknown>) =>
      criteria
        ? (['invoicingPlans', 'list', criteria] as const)
        : (['invoicingPlans', 'list'] as const),
    detail: (code: string) => ['invoicingPlans', 'detail', code] as const,
    version: () => ['invoicingPlans', 'version'] as const,
  },
  invoicing: {
    version: () => ['invoicing', 'version'] as const,
    billingAccounts: () => ['invoicing', 'billingAccounts'] as const,
    billingRunInfo: () => ['invoicing', 'billingRunInfo'] as const,
    preInvoicingReport: () => ['invoicing', 'preInvoicingReport'] as const,
    postInvoicingReport: () => ['invoicing', 'postInvoicingReport'] as const,
  },
  ratedTransactions: {
    root: ['ratedTransactions'] as const,
    list: (params: {
      filters: { query: string | null; status: string | null; userAccountCode: string | null } | null;
      page: number;
      pageSize: number;
      sortBy: string | null;
      sortOrder: 'ASCENDING' | 'DESCENDING' | null;
    }) => ['ratedTransactions', 'list', params] as const,
    detail: (code: string) => ['ratedTransactions', 'detail', code] as const,
    export: () => ['ratedTransactions', 'export'] as const,
    version: () => ['ratedTransactions', 'version'] as const,
  },
  mediation: {
    root: ['mediation'] as const,
  },
};
