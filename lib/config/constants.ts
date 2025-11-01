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
    | 'title'
    | 'massImport'
    | 'occTemplate'
    | 'pdfInvoice'
    | 'provider'
    | 'audit'
    | 'fileFormat'
    | 'files'
    | 'query'
    | 'scriptInstance'
    | 'seller'
    | 'terminationReason'
    | 'usage'
    | 'access'
    | 'businessAccountModel'
    | 'businessOfferModel'
    | 'businessProductModel'
    | 'businessServiceModel'
    | 'offerTemplateCategory'
    | 'channel'
    | 'channelsAndSegments'
    | 'chargeTemplate'
    | 'counterTemplate'
    | 'discountPlan'
    | 'discountPlanItem'
    | 'accountingCode'
    | 'accountingPeriod'
    | 'mediation'
    | 'providerContact';
}> = [
  { label: 'navigation.dashboard', path: '/', icon: 'dashboard' },
  { label: 'navigation.customers', path: '/customers', icon: 'customers' },
  { label: 'navigation.customerAccounts', path: '/customer-accounts', icon: 'accounts' },
  { label: 'navigation.invoices', path: '/invoices', icon: 'invoices' },
  { label: 'navigation.invoicing', path: '/invoicing', icon: 'billing' },
  { label: 'navigation.invoicingPlans', path: '/invoicing-plans', icon: 'billing' },
  { label: 'navigation.invoicingPlanItems', path: '/invoicing-plan-items', icon: 'billing' },
  { label: 'navigation.subscriptions', path: '/subscriptions', icon: 'billing' },
  { label: 'navigation.taxes', path: '/taxes', icon: 'taxes' },
  { label: 'navigation.scriptInstances', path: '/script-instances', icon: 'scriptInstance' },
  { label: 'navigation.sellers', path: '/sellers', icon: 'seller' },
  { label: 'navigation.terminationReasons', path: '/termination-reasons', icon: 'terminationReason' },
  { label: 'navigation.usage', path: '/usage', icon: 'usage' },
  { label: 'navigation.ratedTransactions', path: '/rated-transactions', icon: 'billing' },
  { label: 'navigation.wallet', path: '/wallet', icon: 'billing' },
  { label: 'navigation.bundleTemplates', path: '/bundle-templates', icon: 'billing' },
  { label: 'navigation.offerTemplateCategories', path: '/offer-template-categories', icon: 'offerTemplateCategory' },
  { label: 'navigation.businessOfferModels', path: '/business-offer-models', icon: 'businessOfferModel' },
  { label: 'navigation.businessProductModels', path: '/business-product-models', icon: 'businessProductModel' },
  { label: 'navigation.businessServiceModels', path: '/business-service-models', icon: 'businessServiceModel' },
  { label: 'navigation.channels', path: '/channels', icon: 'channel' },
  { label: 'navigation.channelsAndSegments', path: '/channels-and-segments', icon: 'channelsAndSegments' },
  { label: 'navigation.chargeTemplates', path: '/charge-templates', icon: 'chargeTemplate' },
  { label: 'navigation.counterTemplates', path: '/counter-templates', icon: 'counterTemplate' },
  { label: 'navigation.discountPlans', path: '/discount-plans', icon: 'discountPlan' },
  { label: 'navigation.discountPlanItems', path: '/discount-plan-items', icon: 'discountPlanItem' },
  { label: 'navigation.accesses', path: '/access', icon: 'access' },
  { label: 'navigation.billingCycles', path: '/billing-cycles', icon: 'billing' },
  { label: 'navigation.calendars', path: '/calendars', icon: 'calendar' },
  { label: 'navigation.configuration', path: '/configuration', icon: 'settings' },
  { label: 'navigation.audit', path: '/audit', icon: 'audit' },
  { label: 'navigation.titles', path: '/titles', icon: 'title' },
  { label: 'navigation.fileFormats', path: '/file-formats', icon: 'fileFormat' },
  { label: 'navigation.files', path: '/files', icon: 'files' },
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
  { label: 'navigation.occTemplates', path: '/occ-templates', icon: 'occTemplate' },
  { label: 'navigation.pdfInvoices', path: '/pdf-invoices', icon: 'pdfInvoice' },
  { label: 'navigation.provider', path: '/provider', icon: 'provider' },
  { label: 'navigation.query', path: '/query', icon: 'query' },
  { label: 'navigation.accountingCodes', path: '/accounting-codes', icon: 'accountingCode' },
  { label: 'navigation.accountingPeriods', path: '/accounting-periods', icon: 'accountingPeriod' },
  { label: 'navigation.mediation', path: '/mediation', icon: 'mediation' },
  { label: 'navigation.businessAccountModels', path: '/business-account-models', icon: 'businessAccountModel' },
  { label: 'navigation.providerContacts', path: '/provider-contacts', icon: 'providerContact' },
];
