# VIEW015 — Cycle de facturation – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.328Z à partir de `tasks/vues/VIEW015.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Cycle de facturation
- Ressource : billing-run
- Clé / route : list
- Type d'écran : Liste simple
- Icône : Update

### Libellés
- FR : Cycle de facturation.
- EN : Billing run.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/billingRun

```text
getListV2({
  url: 'v2/generic/all/billingRun',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingRun
    - POST — Used in 7 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run, operation/cycle-run
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L108) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L125) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L299) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L98) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L114) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L287) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/cycle-run/provider/provider.js#L11) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/billingRun

```text
getListV2({
  url: 'v2/generic/all/billingRun',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingRun
    - POST — Used in 7 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run, operation/cycle-run
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L108) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L125) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L299) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L98) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L114) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L287) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/cycle-run/provider/provider.js#L11) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/billing/invoicing/exceptionalBillingRun

```text
getCreateProvider({
  url: 'v2/billing/invoicing/exceptionalBillingRun',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/invoicing/exceptionalBillingRun
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run
      - Description: - CREATE (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L133) -> v2/billing/invoicing/exceptionalBillingRun | request: helper.nestedEntities: nestedEntities / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoicing/exceptionalBillingRun', nestedEntities } - CREATE (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L122) -> v2/billing/invoicing/exceptionalBillingRun | request: helper.nestedEntities: nestedEntities / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoicing/exceptionalBillingRun', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/BillingRun

```text
getOneV2({
  url: 'v2/generic/BillingRun/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/BillingRun
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L139) -> v2/generic/BillingRun/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/BillingRun/', nestedEntities } - GET_ONE (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L128) -> v2/generic/BillingRun/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/BillingRun/', nestedEntities }

### UPDATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /billing/invoicing/createOrUpdateBillingRun

```text
getUpdateProvider({
  url: 'billing/invoicing/createOrUpdateBillingRun',
  method: 'POST',
  showErrorFromContainer: true
}).
```

- Opérations correspondantes :
  - Chemin /billing/invoicing/createOrUpdateBillingRun
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run
      - Description: - UPDATE (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L145) -> billing/invoicing/createOrUpdateBillingRun | request: helper.method: POST | helper.showErrorFromContainer: true / info: helper: getUpdateProvider | helperArgs: { url: 'billing/invoicing/createOrUpdateBillingRun', method: 'POST', showErrorFromContainer: true } - UPDATE (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L134) -> billing/invoicing/createOrUpdateBillingRun | request: helper.method: POST | helper.showErrorFromContainer: true / info: helper: getUpdateProvider | helperArgs: { url: 'billing/invoicing/createOrUpdateBillingRun', method: 'POST', showErrorFromContainer: true }

### ADVANCE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_XML

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execution`.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_JOB

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/jobReport/?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL_JOB

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/stop/XMLInvoiceGenerationJobV2`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVALIDATE_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execution`.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL_JOB_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/stop/PDF_Job`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_LIST_ORIGINAL

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/billingRun

```text
getListV2({
  url: 'v2/generic/all/billingRun'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingRun
    - POST — Used in 7 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run, operation/cycle-run
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L108) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L125) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L299) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L98) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L114) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L287) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/cycle-run/provider/provider.js#L11) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
