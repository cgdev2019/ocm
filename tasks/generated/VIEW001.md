# VIEW001 — Types d'opération de compte – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.292Z à partir de `tasks/vues/VIEW001.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Types d'opération de compte
- Ressource : account-operations-types
- Clé / route : list
- Type d'écran : Liste simple
- Menu : finance-settings (priorité 3)
- Icône : Update

### Libellés
- FR : Types d'opération de compte.
- EN : Account operation types.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OCCTemplate

```text
getListV2({
  url: 'v2/generic/all/OCCTemplate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OCCTemplate
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L40) -> v2/generic/all/OCCTemplate | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L61) -> v2/generic/all/OCCTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L40) -> v2/generic/all/OCCTemplate | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L61) -> v2/generic/all/OCCTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L40) -> v2/generic/all/OCCTemplate | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L61) -> v2/generic/all/OCCTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OCCTemplate

```text
getListV2({
  url: 'v2/generic/all/OCCTemplate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OCCTemplate
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L40) -> v2/generic/all/OCCTemplate | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L61) -> v2/generic/all/OCCTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L40) -> v2/generic/all/OCCTemplate | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L61) -> v2/generic/all/OCCTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L40) -> v2/generic/all/OCCTemplate | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L61) -> v2/generic/all/OCCTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OCCTemplate', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/OCCTemplate

```text
getOneV2({
  url: 'v2/generic/OCCTemplate/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/OCCTemplate
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L69) -> v2/generic/OCCTemplate/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/OCCTemplate/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L69) -> v2/generic/OCCTemplate/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/OCCTemplate/', nestedEntities } - GET_ONE (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L69) -> v2/generic/OCCTemplate/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/OCCTemplate/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /occTemplate

```text
getCreateProvider({
  url: 'occTemplate',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /occTemplate
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - CREATE (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L73) -> occTemplate | request: helper.method: POST / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'occTemplate', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L73) -> occTemplate | request: helper.method: POST / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'occTemplate', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L73) -> occTemplate | request: helper.method: POST / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'occTemplate', method: 'POST' }
    - PUT — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - UPDATE (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L82) -> occTemplate | request: helper.method: PUT / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'occTemplate', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L82) -> occTemplate | request: helper.method: PUT / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'occTemplate', method: 'PUT' } - UPDATE (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L82) -> occTemplate | request: helper.method: PUT / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'occTemplate', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /occTemplate

```text
getUpdateProvider({
  url: 'occTemplate',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /occTemplate
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - CREATE (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L73) -> occTemplate | request: helper.method: POST / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'occTemplate', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L73) -> occTemplate | request: helper.method: POST / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'occTemplate', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L73) -> occTemplate | request: helper.method: POST / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'occTemplate', method: 'POST' }
    - PUT — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/account-operations-types, administration/account-operations-types, finance/account-operations-types
      - Description: - UPDATE (src/srcProject/layout/administration/modules/account-operations-types/provider/provider.js#L82) -> occTemplate | request: helper.method: PUT / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'occTemplate', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/account-operations-types/provider/provider.js#L82) -> occTemplate | request: helper.method: PUT / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'occTemplate', method: 'PUT' } - UPDATE (src/srcProject/layout/finance/modules/account-operations-types/provider/provider.js#L82) -> occTemplate | request: helper.method: PUT / response: responseContainer: 'occTemplate' / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'occTemplate', method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
