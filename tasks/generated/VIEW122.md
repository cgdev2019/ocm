# VIEW122 — Devis open order – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.443Z à partir de `tasks/vues/VIEW122.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Devis open order
- Ressource : open-order-quotes
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition
- Icône : AccountTree

### Libellés
- FR : Devis open order.
- EN : Open order quotes.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/openOrderQuote

```text
getListV2({
  url: 'v2/generic/all/openOrderQuote',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/openOrderQuote
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L26) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L33) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L39) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/openOrderQuote

```text
getListV2({
  url: 'v2/generic/all/openOrderQuote',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/openOrderQuote
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L26) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L33) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L39) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/openOrderQuote

```text
getListV2({
  url: 'v2/generic/all/openOrderQuote',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/openOrderQuote
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L26) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L33) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L39) -> v2/generic/all/openOrderQuote | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/openOrderQuote', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/openOrderQuote

```text
getOneV2({
  url: 'v2/generic/openOrderQuote/',
  keyColumn,
  nestedEntities
  //transformResponse
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/openOrderQuote
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L46) -> v2/generic/openOrderQuote/ | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/openOrderQuote/', keyColumn, nestedEntities //transformResponse }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/ordering/open-order-quote

```text
getCreateProvider({
  url: 'v2/ordering/open-order-quote',
  method: 'POST',
  responseContainerId,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/ordering/open-order-quote
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L74) -> v2/ordering/open-order-quote | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/ordering/open-order-quote', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L55) -> v2/ordering/open-order-quote | request: helper.method: POST | helper.keyColumn: keyColumn / response: helper.responseContainerId: {responseContainerId} / info: helper: getCreateProvider | helperArgs: { url: 'v2/ordering/open-order-quote', method: 'POST', responseContainerId, keyColumn }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/ordering/open-order-quote/:id

```text
getUpdateProvider({
  url: 'v2/ordering/open-order-quote/:id',
  method: 'PUT',
  responseContainerId,
  keyColumn
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/ordering/open-order-quote/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/ordering/open-order-quote

```text
getDeleteProvider({
  url: 'v2/ordering/open-order-quote',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/ordering/open-order-quote
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L74) -> v2/ordering/open-order-quote | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/ordering/open-order-quote', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/open-order-quotes
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/open-order-quotes/provider/provider.js#L55) -> v2/ordering/open-order-quote | request: helper.method: POST | helper.keyColumn: keyColumn / response: helper.responseContainerId: {responseContainerId} / info: helper: getCreateProvider | helperArgs: { url: 'v2/ordering/open-order-quote', method: 'POST', responseContainerId, keyColumn }

### CHANGE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/ordering/open-order-quote/:code/status/:toStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### AVAILABLE_OPEN_ORDERS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/cpq/quotes/:code/availableOpenOrders`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### AVAILABLE_OPEN_ORDERS_ORDER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/commercialOrders/:code/availableOpenOrders`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/ordering/open-order-quote/:id/duplicate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
