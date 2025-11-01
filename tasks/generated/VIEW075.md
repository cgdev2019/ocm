# VIEW075 — Contrats cadre – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.387Z à partir de `tasks/vues/VIEW075.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Contrats cadre
- Ressource : contracts
- Clé / route : list
- Type d'écran : Liste simple
- Icône : ChromeReaderMode

### Libellés
- FR : Contrats cadre.
- EN : Framework agreements.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contract

```text
getListV2({
  url: 'v2/generic/all/contract',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contract
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L80) -> v2/generic/all/contract | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/contract', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L55) -> v2/generic/all/contract | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { ...restFilter } = filter; const transformDateFilters = key => has(filter, key) && { [key]: getGenericFormatDate(get(filter, key)) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('fromRangeInclusive beginDate'), ...transformDateFilters('toRangeInclusive endDate') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/contract', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L76) -> v2/generic/all/contract | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/contract', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contract

```text
getListV2({
  url: 'v2/generic/all/contract',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contract
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L80) -> v2/generic/all/contract | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/contract', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L55) -> v2/generic/all/contract | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { ...restFilter } = filter; const transformDateFilters = key => has(filter, key) && { [key]: getGenericFormatDate(get(filter, key)) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('fromRangeInclusive beginDate'), ...transformDateFilters('toRangeInclusive endDate') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/contract', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L76) -> v2/generic/all/contract | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/contract', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/contract

```text
getOneV2({
  url: 'v2/generic/contract/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/contract
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L102) -> v2/generic/contract | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/contract', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L99) -> v2/generic/contract | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/contract', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L84) -> v2/generic/contract/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/contract/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L81) -> v2/generic/contract/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/contract/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/contracts

```text
getCreateProvider({
  url: 'cpq/contracts',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/contracts
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L109) -> cpq/contracts/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/contracts/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L106) -> cpq/contracts/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/contracts/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L88) -> cpq/contracts | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/contracts', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L85) -> cpq/contracts | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/contracts', method: 'POST' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L95) -> cpq/contracts | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L92) -> cpq/contracts | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /cpq/contracts

```text
getUpdateProvider({
  url: 'cpq/contracts',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/contracts
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L109) -> cpq/contracts/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/contracts/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L106) -> cpq/contracts/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/contracts/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L88) -> cpq/contracts | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/contracts', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L85) -> cpq/contracts | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/contracts', method: 'POST' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L95) -> cpq/contracts | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L92) -> cpq/contracts | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts', method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/contract

```text
getDeleteProvider({
  url: 'v2/generic/contract',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/contract
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L102) -> v2/generic/contract | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/contract', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L99) -> v2/generic/contract | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/contract', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L84) -> v2/generic/contract/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/contract/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L81) -> v2/generic/contract/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/contract/', nestedEntities }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/contracts

```text
getDeleteProvider({
  url: 'cpq/contracts/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/contracts
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L109) -> cpq/contracts/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/contracts/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L106) -> cpq/contracts/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/contracts/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L88) -> cpq/contracts | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/contracts', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L85) -> cpq/contracts | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/contracts', method: 'POST' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-entity, B2B-customer-care/contracts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/account-entity/provider/provider.js#L95) -> cpq/contracts | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contracts/provider/provider.js#L92) -> cpq/contracts | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/contracts', method: 'PUT' }

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/contracts/:code/status/:toStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
