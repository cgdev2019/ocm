# VIEW129 — Commandes – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.447Z à partir de `tasks/vues/VIEW129.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Commandes
- Ressource : orders
- Clé / route : list
- Type d'écran : Liste simple
- Icône : Dns

### Libellés
- FR : Commandes.
- EN : Orders.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/commercialOrder

```text
getListV2({
  url: 'v2/generic/all/commercialOrder',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/commercialOrder
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L31) -> v2/generic/all/commercialOrder | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, quote: { quoteNumber } = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...(quoteNumber && { 'wildcardOrIgnoreCase quote.quoteNumber': quoteNumber }), ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L66) -> v2/generic/all/commercialOrder | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L73) -> v2/generic/all/commercialOrder | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/commercialOrder

```text
getOneV2({
  url: 'v2/generic/commercialOrder/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/commercialOrder
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L59) -> v2/generic/commercialOrder/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/commercialOrder/', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/commercialOrder

```text
getListV2({
  url: 'v2/generic/all/commercialOrder',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/commercialOrder
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L31) -> v2/generic/all/commercialOrder | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, quote: { quoteNumber } = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...(quoteNumber && { 'wildcardOrIgnoreCase quote.quoteNumber': quoteNumber }), ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L66) -> v2/generic/all/commercialOrder | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L73) -> v2/generic/all/commercialOrder | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', responseContainer: 'data', nestedEntities }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/commercialOrder

```text
getListV2({
  url: 'v2/generic/all/commercialOrder',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/commercialOrder
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L31) -> v2/generic/all/commercialOrder | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, quote: { quoteNumber } = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...(quoteNumber && { 'wildcardOrIgnoreCase quote.quoteNumber': quoteNumber }), ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L66) -> v2/generic/all/commercialOrder | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L73) -> v2/generic/all/commercialOrder | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialOrder', responseContainer: 'data', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /orderManagement/commercialOrders

```text
getCreateProvider({
  url: 'orderManagement/commercialOrders/',
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /orderManagement/commercialOrders
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L80) -> orderManagement/commercialOrders/ | request: helper.keyColumn: keyColumn / response: responseContainer: 'commercialOrderDto' / info: helper: getCreateProvider | helperArgs: { url: 'orderManagement/commercialOrders/', keyColumn }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L87) -> orderManagement/commercialOrders | request: helper.keyColumn: keyColumn | helper.method: PUT / response: responseContainer: 'commercialOrderDto' / info: helper: getUpdateProvider | helperArgs: { url: 'orderManagement/commercialOrders', keyColumn, method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /orderManagement/commercialOrders

```text
getUpdateProvider({
  url: 'orderManagement/commercialOrders',
  keyColumn,
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /orderManagement/commercialOrders
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L80) -> orderManagement/commercialOrders/ | request: helper.keyColumn: keyColumn / response: responseContainer: 'commercialOrderDto' / info: helper: getCreateProvider | helperArgs: { url: 'orderManagement/commercialOrders/', keyColumn }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/orders
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/orders/provider/provider.js#L87) -> orderManagement/commercialOrders | request: helper.keyColumn: keyColumn | helper.method: PUT / response: responseContainer: 'commercialOrderDto' / info: helper: getUpdateProvider | helperArgs: { url: 'orderManagement/commercialOrders', keyColumn, method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/order/:id

```text
getDeleteProvider({
  url: 'v2/generic/order/:id',
  responseContainer: 'data',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/order/:id

### DELETE_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/order/:id

```text
getDeleteProvider({
  url: 'v2/generic/order/:id',
  responseContainer: 'data',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/order/:id

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `orderManagement/commercialOrders/:id/duplication`.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `orderManagement/commercialOrders/:id/orderValidation`.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `orderManagement/commercialOrders/:id/status/:newStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_PROGRESS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `orderManagement/commercialOrders/:commercialOrderId/orderProgress/:progress`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ADD_ORDER_TYPE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `orderManagement/orderTypes`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
