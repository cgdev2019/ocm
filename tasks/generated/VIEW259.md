# VIEW259 — Ligne de facture – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.569Z à partir de `tasks/vues/VIEW259.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Ligne de facture
- Ressource : invoice-lines
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Ligne de facture.
- EN : Invoice lines.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoiceLine

```text
getListV2({
  url: 'v2/generic/all/invoiceLine',
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
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoiceLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-lines, operation/mass-adjustments
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L99) -> v2/generic/all/invoiceLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { amountWithoutTax = {}, amountWithTax = {}, amountTax = {}, taxRate = {}, discountAmount = {}, unitPrice = {}, accountingArticle = {}, ...restFilter } = filter; const { description = '' } = accountingArticle; const aaDescriptionFilter = isNumber(description) ? { accountingArticle: { id: description } } : {}; const transformedFilter = { ...restFilter, ...(!isEmpty(amountWithoutTax) ? getMinMaxFromRangeNumber(amountWithoutTax, 'amountWithoutTax') : {}), ...(!isEmpty(amountWithTax) ? getMinMaxFromRangeNumber(amountWithTax, 'amountWithTax') : {}), ...(!isEmpty(amountTax) ? getMinMaxFromRangeNumber(amountTax, 'amountTax') : {}), ...(!isEmpty(taxRate) ? getMinMaxFromRangeNumber(taxRate, 'taxRate') : {}), ...(!isEmpty(discountAmount) ? getMinMaxFromRangeNumber(discountAmount, 'discountAmount') : {}), ...(!isEmpty(unitPrice) ? getMinMaxFromRangeNumber(unitPrice, 'unitPrice') : {}), ...(!isEmpty(aaDescriptionFilter) ? aaDescriptionFilter : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L151) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L6) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L13) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/mass-adjustments/provider/provider.js#L20) -> v2/generic/all/invoiceLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoiceLine', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /manualInvoice/invoiceLine

```text
getOneV2({
  url: 'manualInvoice/invoiceLine/',
  responseContainer: 'data',
  nestedEntities: nestedEntitiesForGetOne
}).
```

- Opérations correspondantes :
  - Chemin /manualInvoice/invoiceLine
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-lines
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L160) -> manualInvoice/invoiceLine/ | request: helper.nestedEntities: nestedEntitiesForGetOne / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'manualInvoice/invoiceLine/', responseContainer: 'data', nestedEntities: nestedEntitiesForGetOne }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/billing/invoices/{invoiceId}/invoiceLines
  - /manualInvoice/{invoiceId}/invoiceLines

```text
getCreateProvider({
  url: ({
    params: {
      data
    }
  }) => {
    // return `v2/billing/invoices/${data.invoiceLines[0].invoiceId}/invoiceLines`;
    return `manualInvoice/${data.invoiceLines[0].invoiceId}/invoiceLines`;
  },
  responseContainer: 'invoiceLines.0',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/billing/invoices/${data.invoiceLines[0].invoiceId}/invoiceLines
  - manualInvoice/${data.invoiceLines[0].invoiceId}/invoiceLines

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/billing/invoices/{invoiceId}/invoiceLines/{id}
  - /manualInvoice/{invoiceId}/invoiceLines/{id}

```text
getUpdateProvider({
  url: ({
    params: {
      data
    }
  }) => {
    // return `v2/billing/invoices/${data.invoiceLine.invoiceId}/invoiceLines/${data.invoiceLine.id}`;
    return `manualInvoice/${data.invoiceLine.invoiceId}/invoiceLines/${data.invoiceLine.id}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/billing/invoices/${data.invoiceLine.invoiceId}/invoiceLines/${data.invoiceLine.id}
  - manualInvoice/${data.invoiceLine.invoiceId}/invoiceLines/${data.invoiceLine.id}

### DELETE_INVOICE_LINE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"DELETE"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_CONTRACT_LINE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/invoiceLine/code

```text
getDeleteProvider({
  url: 'v2/generic/invoiceLine/code',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/invoiceLine/code
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoice-lines
      - Description: - DELETE_CONTRACT_LINE (src/srcProject/layout/B2B-customer-care/modules/invoice-lines/provider/provider.js#L205) -> v2/generic/invoiceLine/code | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/generic/invoiceLine/code', method: 'DELETE' }

### REFRESH_DISCOUNT_LINE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `manualInvoice/discountedLine/refresh/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
