# Cycle de facturation – List

- **Groupe fonctionnel** : Operation
- **Module** : Cycle de facturation
- **Ressource** : billing-run
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : Update

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `id` ; type number ; utilisable en filtre
- Colonne 2 : source `billingCycle.description`
- Colonne 3 : source `runType` ; choix (2) ; utilisable en filtre
- Colonne 4 : source `processDate` ; type date ; utilisable en filtre
- Colonne 5 : source `processType` ; choix (undefined) ; utilisable en filtre
- Colonne 6 : source `status` ; type status
- Colonne 7 : source `invoiceDate` ; type date ; utilisable en filtre
- Colonne 8 : source `billableBillingAcountNumber` ; type number ; utilisable en filtre
- Colonne 9 : source `invoicesSize`
- Colonne 10 : source `prAmountWithoutTax` ; type number ; utilisable en filtre
- Colonne 11 : source `prAmountWithTax` ; type number ; utilisable en filtre

### Recherche et filtres
- champ `billingCycle` (type reference list, référence {{modulePath}}/{{OPERATION_BILLING_CYCLES_V2}}, filtre {"nestedField":{"source":"description","prefix":"wildcardOrIgnoreCase"}})
- champ `status` (type autocomplete array, sélection multiple, filtre true)

### Actions et interactions
- Suppression possible depuis la liste.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Choix de pagination : [5,10,20].

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