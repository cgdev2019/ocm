# VIEW035 — Sous-totaux de la facture – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.348Z à partir de `tasks/vues/VIEW035.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Sous-totaux de la facture
- Ressource : invoice-subtotals
- Clé / route : list
- Type d'écran : Liste simple
- Menu : finance-settings (priorité 3)
- Icône : AccountBalance

### Libellés
- FR : Sous-totaux de la facture.
- EN : Invoice subtotals.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceType

```text
getListV2({
  url: 'v2/generic/all/invoiceType'
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
  url: 'v2/generic/all/invoiceType'
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
  - /v2/generic/all/invoiceSubTotals
  - /v2/generic/all/tradingLanguage

```text
getOneV2({
  urls: [{
    url: 'v2/generic/invoiceType/',
    params: {
      nestedEntities
    }
  }, {
    url: 'v2/generic/all/invoiceSubTotals',
    params: {
      nestedEntities,
      filters: {
        'invoiceType.id': '@responses[0].data.id'
      }
    },
    autoAppendId: false
  }, {
    url: 'v2/generic/all/tradingLanguage',
    params: {},
    autoAppendId: false
  }],
  sync: true,
  transformResponse: transformRecord
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceSubTotals
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/all/invoiceSubTotals | request: helper.sync: true | helper.transformResponse: transformRecord | urls[1].params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } } | urls[1].autoAppendId: false / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/all/invoiceSubTotals | request: helper.sync: true | helper.transformResponse: transformRecord | urls[1].params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } } | urls[1].autoAppendId: false / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord }
  - Chemin /v2/generic/all/tradingLanguage
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/all/tradingLanguage | request: helper.sync: true | helper.transformResponse: transformRecord | urls[2].params: {} | urls[2].autoAppendId: false / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/all/tradingLanguage | request: helper.sync: true | helper.transformResponse: transformRecord | urls[2].params: {} | urls[2].autoAppendId: false / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord }
  - Chemin /v2/generic/invoiceType
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals, operation/invoice-validation
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/invoiceType/ | request: helper.sync: true | helper.transformResponse: transformRecord | urls[0].params: { nestedEntities } / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L136) -> v2/generic/invoiceType/ | request: helper.sync: true | helper.transformResponse: transformRecord | urls[0].params: { nestedEntities } / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/invoiceType/', params: { nestedEntities } }, { url: 'v2/generic/all/invoiceSubTotals', params: { nestedEntities, filters: { 'invoiceType.id': '@responses[0].data.id' } }, autoAppendId: false }, { url: 'v2/generic/all/tradingLanguage', params: {}, autoAppendId: false }], sync: true, transformResponse: transformRecord } - GET_ONE (src/srcProject/layout/operation/modules/invoice-validation/provider/provider.js#L55) -> v2/generic/invoiceType/ | request: helper.nestedEntities: nestedEntities | helper.otherParams: { sortBy: 'invoiceValidationRules.priority', sortOrder: 'ASCENDING' } / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/invoiceType/', responseContainer: 'data', nestedEntities, otherParams: { sortBy: 'invoiceValidationRules.priority', sortOrder: 'ASCENDING' } }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/billing/invoices/addSubTotals

```text
getCreateProvider({
  url: 'v2/billing/invoices/addSubTotals',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/invoices/addSubTotals
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-subtotals, administration/invoice-subtotals
      - Description: - CREATE (src/srcProject/layout/administration/modules/invoice-subtotals/provider/provider.js#L166) -> v2/billing/invoices/addSubTotals | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoices/addSubTotals', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/invoice-subtotals/provider/provider.js#L166) -> v2/billing/invoices/addSubTotals | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoices/addSubTotals', method: 'POST' }

### DELETE_SUBTOTALS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/deleteSubTotals`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
