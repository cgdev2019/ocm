# Factures – PATH INVOICE CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Factures
- **Ressource** : invoices
- **Entité métier** : org.meveo.model.billing.Invoice
- **Clé / route** : PATH_INVOICE_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : InsertDriveFile

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Invoice — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/invoice',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/invoice',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/invoice',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/invoice/',
  responseContainer: 'data',
  nestedEntities: nestedEntitiesForGetOne,
  genericFields: genericFieldsDetailed
}).
- CREATE : getCreateProvider({
  //url: 'v2/billing/invoices/basicInvoices',
  url: 'manualInvoice/create',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/billing/invoices/:id',
  method: 'PUT'
}).
- UPDATE_INVOICE : getUpdateProvider({
  url: 'v2/billing/invoices/:id',
  method: 'PUT'
}).
- UPDATE_INVOICE_GENERIC : url `v2/generic/invoice/:id`, options {"method":"PUT"}.
- UPDATE_BILLING_ACCOUNT : url `v2/generic/BillingAccount/:id`, options {"method":"PUT"}.
- DOWNLOAD_E_DEVIS_SIGNE : url `[object Object]`, options {"method":"POST"}.
- DELETE : getDeleteProvider({
  url: '/api/rest/catalog/invoice/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: '/api/rest/catalog/invoice/',
  method: 'DELETE'
}).
- UPDATE_STATUS : url `catalog/invoice/:invoiceCode/update/status`.
- DUPLICATE : url `v2/billing/invoices/:id/duplication`.
- REJECT : url `v2/billing/invoices/:id/rejection`, options {"method":"PUT"}.
- VALIDATE : url `invoice/validate`, options {"method":"PUT"}.
- CANCEL : url `[object Object]`, options {"method":"PUT"}.
- GENERATE_PDF : url `v2/billing/invoices/:invoiceId/pdf?generateIfMissing=true`, options {"method":"GET"}.
- DELETE_PDF : url `v2/billing/invoices/:invoiceId/deletePdfFile`, options {"method":"POST"}.
- GENERATE_XML : url `invoice/getXMLInvoice?`, options {"method":"GET"}.
- DELETE_XML : url `v2/billing/invoices/:invoiceId/deleteXmlFile`, options {"method":"POST"}.
- GET_TAX_DETAILS : url `v2/generic/all/taxInvoiceAgregate`, options {"method":"POST"}.
- INVOICE_LINE_CALCULATION : url `v2/billing/invoices/:invoiceId/calculation`, options {"method":"PUT"}.
- INVOICE_LINES_CREATE : url `[object Object]`.
- INVOICE_LINES_UPDATE : url `[object Object]`, options {"method":"PUT"}.
- GENERATE_INVOICE : url `v2/billing/invoices/generate`, options {"method":"POST"}.
- MATCHING_PAYMENT : url `[object Object]`, options {"method":"GET"}.
- INVOICE_ADJUSTMENT : url `[object Object]`, options {"method":"POST"}.
- INVOICE_AVOIR_FINAL : url `[object Object]`, options {"method":"POST"}.
- INVOICE_DUPLICATION : url `[object Object]`, options {"method":"POST"}.
- IMPORT_LINES : url `[object Object]`, options {"method":"POST"}.
- UNMATCH_ACCOUNT_OPERATIONS : url `v2/accountReceivable/accountOperation/unMatchOperations`, options {"method":"POST"}.
- CREATE_BILLING_RUN : url `billing/invoicing/createBillingRun`, options {"method":"POST"}.
- QUARANTINE_INVOICE : url `[object Object]`, options {"method":"PUT"}.
- REFRESH_RATE : url `[object Object]`, options {"method":"PUT"}.
- GENERATE_INVOICES : url `invoice/generateInvoice`, options {"method":"POST"}.
- CALCULATE_SUBTOTALS : url `[object Object]`, options {"method":"POST"}.
- UPDATE_VALIDATED : url `[object Object]`, options {"method":"PATCH"}.
- LINKED_INVOICES : url `v2/generic/all/LinkedInvoice`, options {"method":"POST"}.
- VALIDATE_MANUAL_INVOICE : url `manualInvoice/updateStatus/:id/:status`, options {"method":"PUT"}.
- UPDATE_FACTURE_MANUELLE : getUpdateProvider({
  url: 'manualInvoice/:id',
  method: 'PUT'
}).
- GENERATE_PDF_FACTURE_MANUELLE : url `generateInvoicePDF/archive/:invoiceId/pdf`, options {"method":"GET"}.
- GENERATE_PDF_DUPLICATA_ENRICHI : url `generateInvoicePDF/duplicata/enrichi/:invoiceId/pdf`, options {"method":"GET"}.
- GET_SERVICE_EXECUTANT : url `customTable/list/CE_SERVICE_EXECUTANT`, options {"method":"POST"}.
- GET_ENGAGEMENT_JURIDIQUE : url `customTable/list/CE_ENGAGEMENT_JURIDIQUE`, options {"method":"POST"}.
- INIT_WORKFLOW_AVOIR_INVOICE_BROUILLON : url `manualInvoice/avoir/wf/:id?status=BROUILLON`, options {"method":"POST"}.
- INIT_WORKFLOW_AVOIR_INVOICE : url `manualInvoice/avoir/wf/:id`, options {"method":"POST"}.
- VALIDATE_INVOICE_REFACT_LP : url `[object Object]`, options {"method":"POST"}.
- VALIDATE_AVOIR_REFACT_INVOICE : url `[object Object]`, options {"method":"POST"}.
- RESEND_PAYMENT_LINK : url `endEmailURLPaiement/invoice/:id`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Factures.
- Libellé EN : Invoices.