# VIEW327 — Avoirs en masse – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.614Z à partir de `tasks/vues/VIEW327.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Avoirs en masse
- Ressource : mass-adjustments
- Clé / route : racine du module
- Type d'écran : Vue composite
- Icône : QueryBuilder

### Libellés
- FR : Avoirs en masse.
- EN : Mass adjustments.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceLine

```text
getListV2({
  url: 'v2/generic/all/invoiceLine',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-lines, operation/mass-adjustments
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L99) -> v2/generic/all/invoiceLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { amountWithoutTax = {}, amountWithTax = {}, amountTax = {}, taxRate = {}, discountAmount = {}, unitPrice = {}, accountingArticle = {}, ...restFilter } = filter; const { description = '' } = accountingArticle; const aaDescriptionFilter = isNumber(description) ? { accountingArticle: { id: description } } : {}; const transformedFilter = { ...restFilter, ...(!isEmpty(amountWithoutTax) ? getMinMaxFromRangeNumber(amountWithoutTax, 'amountWithoutTax') : {}), ...(!isEmpty(amountWithTax) ? getMinMaxFromRangeNumber(amountWithTax, 'amountWithTax') : {}), ...(!isEmpty(amountTax) ? getMinMaxFromRangeNumber(amountTax, 'amountTax') : {}), ...(!isEmpty(taxRate) ? getMinMaxFromRangeNumber(taxRate, 'taxRate') : {}), ...(!isEmpty(discountAmount) ? getMinMaxFromRangeNumber(discountAmount, 'discountAmount') : {}), ...(!isEmpty(unitPrice) ? getMinMaxFromRangeNumber(unitPrice, 'unitPrice') : {}), ...(!isEmpty(aaDescriptionFilter) ? aaDescriptionFilter : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L151) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L6) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L13) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L20) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceLine

```text
getListV2({
  url: 'v2/generic/all/invoiceLine',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-lines, operation/mass-adjustments
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L99) -> v2/generic/all/invoiceLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { amountWithoutTax = {}, amountWithTax = {}, amountTax = {}, taxRate = {}, discountAmount = {}, unitPrice = {}, accountingArticle = {}, ...restFilter } = filter; const { description = '' } = accountingArticle; const aaDescriptionFilter = isNumber(description) ? { accountingArticle: { id: description } } : {}; const transformedFilter = { ...restFilter, ...(!isEmpty(amountWithoutTax) ? getMinMaxFromRangeNumber(amountWithoutTax, 'amountWithoutTax') : {}), ...(!isEmpty(amountWithTax) ? getMinMaxFromRangeNumber(amountWithTax, 'amountWithTax') : {}), ...(!isEmpty(amountTax) ? getMinMaxFromRangeNumber(amountTax, 'amountTax') : {}), ...(!isEmpty(taxRate) ? getMinMaxFromRangeNumber(taxRate, 'taxRate') : {}), ...(!isEmpty(discountAmount) ? getMinMaxFromRangeNumber(discountAmount, 'discountAmount') : {}), ...(!isEmpty(unitPrice) ? getMinMaxFromRangeNumber(unitPrice, 'unitPrice') : {}), ...(!isEmpty(aaDescriptionFilter) ? aaDescriptionFilter : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L151) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L6) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L13) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L20) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceLine

```text
getListV2({
  url: 'v2/generic/all/invoiceLine',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-lines, operation/mass-adjustments
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L99) -> v2/generic/all/invoiceLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { amountWithoutTax = {}, amountWithTax = {}, amountTax = {}, taxRate = {}, discountAmount = {}, unitPrice = {}, accountingArticle = {}, ...restFilter } = filter; const { description = '' } = accountingArticle; const aaDescriptionFilter = isNumber(description) ? { accountingArticle: { id: description } } : {}; const transformedFilter = { ...restFilter, ...(!isEmpty(amountWithoutTax) ? getMinMaxFromRangeNumber(amountWithoutTax, 'amountWithoutTax') : {}), ...(!isEmpty(amountWithTax) ? getMinMaxFromRangeNumber(amountWithTax, 'amountWithTax') : {}), ...(!isEmpty(amountTax) ? getMinMaxFromRangeNumber(amountTax, 'amountTax') : {}), ...(!isEmpty(taxRate) ? getMinMaxFromRangeNumber(taxRate, 'taxRate') : {}), ...(!isEmpty(discountAmount) ? getMinMaxFromRangeNumber(discountAmount, 'discountAmount') : {}), ...(!isEmpty(unitPrice) ? getMinMaxFromRangeNumber(unitPrice, 'unitPrice') : {}), ...(!isEmpty(aaDescriptionFilter) ? aaDescriptionFilter : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L151) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L6) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L13) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L20) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities }

### MARK_FOR_ADJUSTMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoiceLines/markForAdjustment`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UNMARK_FOR_ADJUSTMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoiceLines/unmarkForAdjustment`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### EXECUTE_MASS_ADJUSTMENT_JOB

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execute`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
