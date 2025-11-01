# VIEW315 — CDR – PATH BILLING RUN CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.606Z à partir de `tasks/vues/VIEW315.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : CDR
- Ressource : cdr
- Clé / route : PATH_BILLING_RUN_CREATE
- Type d'écran : Formulaire de création
- Icône : InsertDriveFile

### Libellés
- FR : CDR.
- EN : CDR.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/cdr

```text
getListV2({
  url: 'v2/generic/all/cdr',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/cdr
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L93) -> v2/generic/all/cdr | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], search, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; if (restFilter.eventDate) restFilter.eventDate = setTimeInStamp(restFilter.eventDate); const transformedFilters = { filter: { ...restFilter, 'or accessCode parameter1 parameter2 parameter3 parameter4': search, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(status.length === 0 ? {} : { status: status }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: rep => { const { total, data } = rep; const dataMapped = data.map(i => { const { id, eventDate, quantity, accessCode, parameter1, parameter2, parameter3, parameter4, status, rejectReason, parameter5, parameter6, parameter7, parameter8, parameter9, dateParam1, dateParam2, dateParam3, dateParam4, dateParam5, decimalParam1, decimalParam2, decimalParam3, decimalParam4, decimalParam5, extraParam } = i; return { id, eventDate, quantity, accessCode, parameter1, parameter2, parameter3, parameter4, status, rejectReason, parameter5, parameter6, parameter7, parameter8, parameter9, dateParam1, dateParam2, dateParam3, dateParam4, dateParam5, decimalParam1, decimalParam2, decimalParam3, decimalParam4, decimalParam5, extraParam, items: [{ parameter: trans('rejectReason'), value: rejectReason }, { parameter: trans('parameter5'), value: parameter5 }, { parameter: trans('parameter6'), value: parameter6 }, { parameter: trans('parameter7'), value: parameter7 }, { parameter: trans('parameter8'), value: parameter8 }, { parameter: trans('parameter9'), value: parameter9 }, { parameter: trans('dateParam1'), value: getDate(dateParam1) }, { parameter: trans('dateParam2'), value: getDate(dateParam2) }, { parameter: trans('dateParam3'), value: getDate(dateParam3) }, { parameter: trans('dateParam4'), value: getDate(dateParam4) }, { parameter: trans('dateParam5'), value: getDate(dateParam4) }, { parameter: trans('decimalParam1'), value: decimalParam1 }, { parameter: trans('decimalParam2'), value: decimalParam2 }, { parameter: trans('decimalParam3'), value: decimalParam3 }, { parameter: trans('decimalParam4'), value: decimalParam4 }, { parameter: trans('decimalParam5'), value: decimalParam5 }, { parameter: trans('extraParam'), value: extraParam }] }; }); return { total, data: dataMapped }; } | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L202) -> v2/generic/all/cdr | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L205) -> v2/generic/all/cdr | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/cdr

```text
getListV2({
  url: 'v2/generic/all/cdr',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/cdr
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L93) -> v2/generic/all/cdr | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], search, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; if (restFilter.eventDate) restFilter.eventDate = setTimeInStamp(restFilter.eventDate); const transformedFilters = { filter: { ...restFilter, 'or accessCode parameter1 parameter2 parameter3 parameter4': search, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(status.length === 0 ? {} : { status: status }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: rep => { const { total, data } = rep; const dataMapped = data.map(i => { const { id, eventDate, quantity, accessCode, parameter1, parameter2, parameter3, parameter4, status, rejectReason, parameter5, parameter6, parameter7, parameter8, parameter9, dateParam1, dateParam2, dateParam3, dateParam4, dateParam5, decimalParam1, decimalParam2, decimalParam3, decimalParam4, decimalParam5, extraParam } = i; return { id, eventDate, quantity, accessCode, parameter1, parameter2, parameter3, parameter4, status, rejectReason, parameter5, parameter6, parameter7, parameter8, parameter9, dateParam1, dateParam2, dateParam3, dateParam4, dateParam5, decimalParam1, decimalParam2, decimalParam3, decimalParam4, decimalParam5, extraParam, items: [{ parameter: trans('rejectReason'), value: rejectReason }, { parameter: trans('parameter5'), value: parameter5 }, { parameter: trans('parameter6'), value: parameter6 }, { parameter: trans('parameter7'), value: parameter7 }, { parameter: trans('parameter8'), value: parameter8 }, { parameter: trans('parameter9'), value: parameter9 }, { parameter: trans('dateParam1'), value: getDate(dateParam1) }, { parameter: trans('dateParam2'), value: getDate(dateParam2) }, { parameter: trans('dateParam3'), value: getDate(dateParam3) }, { parameter: trans('dateParam4'), value: getDate(dateParam4) }, { parameter: trans('dateParam5'), value: getDate(dateParam4) }, { parameter: trans('decimalParam1'), value: decimalParam1 }, { parameter: trans('decimalParam2'), value: decimalParam2 }, { parameter: trans('decimalParam3'), value: decimalParam3 }, { parameter: trans('decimalParam4'), value: decimalParam4 }, { parameter: trans('decimalParam5'), value: decimalParam5 }, { parameter: trans('extraParam'), value: extraParam }] }; }); return { total, data: dataMapped }; } | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L202) -> v2/generic/all/cdr | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L205) -> v2/generic/all/cdr | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/cdr

```text
getListV2({
  url: 'v2/generic/all/cdr',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/cdr
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L93) -> v2/generic/all/cdr | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], search, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; if (restFilter.eventDate) restFilter.eventDate = setTimeInStamp(restFilter.eventDate); const transformedFilters = { filter: { ...restFilter, 'or accessCode parameter1 parameter2 parameter3 parameter4': search, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(status.length === 0 ? {} : { status: status }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: rep => { const { total, data } = rep; const dataMapped = data.map(i => { const { id, eventDate, quantity, accessCode, parameter1, parameter2, parameter3, parameter4, status, rejectReason, parameter5, parameter6, parameter7, parameter8, parameter9, dateParam1, dateParam2, dateParam3, dateParam4, dateParam5, decimalParam1, decimalParam2, decimalParam3, decimalParam4, decimalParam5, extraParam } = i; return { id, eventDate, quantity, accessCode, parameter1, parameter2, parameter3, parameter4, status, rejectReason, parameter5, parameter6, parameter7, parameter8, parameter9, dateParam1, dateParam2, dateParam3, dateParam4, dateParam5, decimalParam1, decimalParam2, decimalParam3, decimalParam4, decimalParam5, extraParam, items: [{ parameter: trans('rejectReason'), value: rejectReason }, { parameter: trans('parameter5'), value: parameter5 }, { parameter: trans('parameter6'), value: parameter6 }, { parameter: trans('parameter7'), value: parameter7 }, { parameter: trans('parameter8'), value: parameter8 }, { parameter: trans('parameter9'), value: parameter9 }, { parameter: trans('dateParam1'), value: getDate(dateParam1) }, { parameter: trans('dateParam2'), value: getDate(dateParam2) }, { parameter: trans('dateParam3'), value: getDate(dateParam3) }, { parameter: trans('dateParam4'), value: getDate(dateParam4) }, { parameter: trans('dateParam5'), value: getDate(dateParam4) }, { parameter: trans('decimalParam1'), value: decimalParam1 }, { parameter: trans('decimalParam2'), value: decimalParam2 }, { parameter: trans('decimalParam3'), value: decimalParam3 }, { parameter: trans('decimalParam4'), value: decimalParam4 }, { parameter: trans('decimalParam5'), value: decimalParam5 }, { parameter: trans('extraParam'), value: extraParam }] }; }); return { total, data: dataMapped }; } | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L202) -> v2/generic/all/cdr | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L205) -> v2/generic/all/cdr | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cdr', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/cdr

```text
getOneV2({
  urls: [{
    url: 'v2/generic/cdr/',
    params: {
      nestedEntities
    }
  }],
  sync: true,
  transformResponse: rep => {
    return rep;
  } //transformRecord
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/cdr
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - GET_ONE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L209) -> v2/generic/cdr/ | request: helper.sync: true | helper.transformResponse: rep => { return rep; } | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/cdr/', params: { nestedEntities } }], sync: true, transformResponse: rep => { return rep; } //transformRecord }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/mediation/cdrs

```text
getCreateProvider({
  url: 'v2/mediation/cdrs',
  method: 'POST',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/mediation/cdrs
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/import-cdr
      - Description: - DELETE_MANY (src/srcProject/layout/operation/modules/import-cdr/provider/provider.js#L51) -> v2/mediation/cdrs | request: prepareParams: params => { const { data } = params; const { code } = data; return { ids: code }; } | helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/mediation/cdrs', method: 'DELETE' // keyColumn: nestedEntities, }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - CREATE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L226) -> v2/mediation/cdrs | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/mediation/cdrs', method: 'POST', responseContainerId: 'id' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/mediation/cdrs/:id

```text
getUpdateProvider({
  keyColumn,
  url: 'v2/mediation/cdrs/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/mediation/cdrs/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/cdr

```text
getDeleteProvider({
  url: 'v2/cdr/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/cdr
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - DELETE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L247) -> v2/cdr/ | request: prepareParams: params => { return params; } | helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/cdr/', method: 'DELETE' }

### PROCEED_MEDIATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  urls: [],
  sync: true
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_BILLING_PLAN

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /billing/invoicingPlans/{0}

```text
getDeleteProvider({
  url: ({
    params
  }) => {
    const {
      data: {
        code
      }
    } = params;
    return `billing/invoicingPlans/${code[0]}`;
  },
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlans/${code[0]}

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /api/rest/catalog/invoice

```text
getDeleteProvider({
  url: '/api/rest/catalog/invoice/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /api/rest/catalog/invoice
    - DELETE — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/related-invoices, operation/cdr
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L247) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L254) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L200) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L207) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L320) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' }

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/invoice/:invoiceCode/update/status`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:id/duplication`.
```

- Aucune opération correspondante dans `complement-api.json`.

### REJECT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:id/rejection`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `invoice/validate`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:id/cancellation`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
