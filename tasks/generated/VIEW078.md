# VIEW078 — Devis – PATH CONTRACT LINE CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.389Z à partir de `tasks/vues/VIEW078.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Devis
- Ressource : contracts-line
- Clé / route : PATH_CONTRACT_LINE_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Devis.
- EN : Contract Line.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contractItem

```text
getListV2({
  url: 'v2/generic/all/contractItem',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contractItem
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L30) -> v2/generic/all/contractItem | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contractItem', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L43) -> v2/generic/all/contractItem | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contractItem', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contractItem

```text
getListV2({
  url: 'v2/generic/all/contractItem',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contractItem
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L30) -> v2/generic/all/contractItem | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contractItem', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L43) -> v2/generic/all/contractItem | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contractItem', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/contractItem

```text
getOneV2({
  url: 'v2/generic/contractItem/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/contractItem
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L52) -> v2/generic/contractItem/ | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/contractItem/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/contracts/contractLines

```text
getCreateProvider({
  url: 'cpq/contracts/contractLines',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/contracts/contractLines
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L61) -> cpq/contracts/contractLines | request: helper.method: POST / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'cpq/contracts/contractLines', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L69) -> cpq/contracts/contractLines | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts/contractLines', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /cpq/contracts/contractLines

```text
getUpdateProvider({
  url: 'cpq/contracts/contractLines',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/contracts/contractLines
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L61) -> cpq/contracts/contractLines | request: helper.method: POST / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'cpq/contracts/contractLines', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contracts-line
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contracts-line/provider/provider.js#L69) -> cpq/contracts/contractLines | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts/contractLines', method: 'PUT' }

### DELETE_CONTRACT_LINE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/contracts/contractLines/:code

```text
getDeleteProvider({
  url: 'cpq/contracts/contractLines/:code',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - cpq/contracts/contractLines/:code

### DUPLICATE_PRICE_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
