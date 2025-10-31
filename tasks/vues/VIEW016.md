# Cycle de facturation – PATH BILLING RUN CREATE

- **Groupe fonctionnel** : Administration
- **Module** : Cycle de facturation
- **Ressource** : billing-run
- **Clé / route** : PATH_BILLING_RUN_CREATE
- **Type d'écran** : Vue composite
- **Icône** : Update

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Billing Run Query Builder — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/billingRun',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/billingRun',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/billing/invoicing/exceptionalBillingRun',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/BillingRun/',
  nestedEntities
}).
- UPDATE : getUpdateProvider({
  url: 'billing/invoicing/createOrUpdateBillingRun',
  method: 'POST',
  showErrorFromContainer: true
}).
- ADVANCE_STATUS : url `[object Object]`, options {"method":"PUT"}.
- CANCEL_STATUS : url `[object Object]`, options {"method":"POST"}.
- GENERATE_XML : url `job/execution`.
- GET_JOB : url `job/jobReport/?`, options {"method":"GET"}.
- CANCEL_JOB : url `job/stop/XMLInvoiceGenerationJobV2`, options {"method":"PUT"}.
- INVALIDATE_INVOICE : url `[object Object]`, options {"method":"PUT"}.
- GENERATE_PDF : url `job/execution`.
- CANCEL_JOB_PDF : url `job/stop/PDF_Job`, options {"method":"PUT"}.
- GET_LIST_ORIGINAL : getListV2({
  url: 'v2/generic/all/billingRun'
}).

## Localisation et libellés
- Libellé FR : Cycle de facturation.
- Libellé EN : Billing run.