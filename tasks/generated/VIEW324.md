# VIEW324 — Validation des factures – PATH INVOICE VALIDATION EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.610Z à partir de `tasks/vues/VIEW324.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Validation des factures
- Ressource : invoice-validation
- Clé / route : PATH_INVOICE_VALIDATION_EDIT
- Type d'écran : Formulaire d'édition
- Menu : billing-rules (priorité 3)
- Icône : InsertDriveFile

### Libellés
- FR : Validation des factures.
- EN : Invoice validation.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceType

```text
getListV2({
  url: 'v2/generic/all/invoiceType',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceType
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals, operation/invoice-validation
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L128) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_MANY (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L132) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L128) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L132) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_LIST (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L39) -> v2/generic/all/invoiceType | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L48) -> v2/generic/all/invoiceType | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceType

```text
getListV2({
  url: 'v2/generic/all/invoiceType',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceType
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals, operation/invoice-validation
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L128) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_MANY (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L132) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L128) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L132) -> v2/generic/all/invoiceType | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType' } - GET_LIST (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L39) -> v2/generic/all/invoiceType | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L48) -> v2/generic/all/invoiceType | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceType', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/invoiceType

```text
getListV2({
  url: 'v2/generic/invoiceType/',
  responseContainer: 'data',
  nestedEntities,
  otherParams: {
    sortBy: 'invoiceValidationRules.priority',
    sortOrder: 'ASCENDING'
  }
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/invoiceType
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals, operation/invoice-validation
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/invoiceType/ | request: helper.sync: true | helper.transformResponse: transformRecord | urls[0].params: { nestedEntities } / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/invoiceType/ | request: helper.sync: true | helper.transformResponse: transformRecord | urls[0].params: { nestedEntities } / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord } - GET_ONE (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L55) -> v2/generic/invoiceType/ | request: helper.nestedEntities: nestedEntities | helper.otherParams: { sortBy: 'invoiceValidationRules.priority', sortOrder: 'ASCENDING' } / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/invoiceType/', responseContainer: 'data', nestedEntities, otherParams: { sortBy: 'invoiceValidationRules.priority', sortOrder: 'ASCENDING' } }

### ENTITY_CHOICES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/billing/invoicevalidationrules

```text
getCreateProvider({
  url: 'v2/billing/invoicevalidationrules',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/invoicevalidationrules
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/invoice-validation
      - Description: - DELETE (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L101) -> v2/billing/invoicevalidationrules/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: `v2/billing/invoicevalidationrules/`, method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/invoice-validation
      - Description: - CREATE (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L79) -> v2/billing/invoicevalidationrules | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoicevalidationrules', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getUpdateProvider({
  url: ({
    params
  }) => `v2/billing/invoicevalidationrules/${params.id}`,
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_INVOICE_SCRIPT

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getUpdateProvider({
  url: ({
    params
  }) => `invoiceType`,
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/billing/invoicevalidationrules

```text
getDeleteProvider({
  url: `v2/billing/invoicevalidationrules/`,
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/invoicevalidationrules
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/invoice-validation
      - Description: - DELETE (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L101) -> v2/billing/invoicevalidationrules/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: `v2/billing/invoicevalidationrules/`, method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/invoice-validation
      - Description: - CREATE (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L79) -> v2/billing/invoicevalidationrules | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoicevalidationrules', method: 'POST' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
