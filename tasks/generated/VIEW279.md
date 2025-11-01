# VIEW279 — Générateur de requêtes – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.588Z à partir de `tasks/vues/VIEW279.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Générateur de requêtes
- Ressource : query-builder
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire de création
- Icône : QueryBuilder

### Libellés
- FR : Générateur de requêtes.
- EN : Query builder.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET","apiSeparator":";"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ONE_QUERY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/queryManagement/reportQueries/:id`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/queryManagement/reportQueries

```text
getListV2({
  url: 'v2/queryManagement/reportQueries?limit=999999',
  nestedEntities,
  method: 'GET'
}).
```

- Opérations correspondantes :
  - Chemin /v2/queryManagement/reportQueries
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/query-builder, operation/query-builder
      - Description: - DELETE (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L97) -> v2/queryManagement/reportQueries/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/queryManagement/reportQueries/', method: 'DELETE' } - DELETE (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L97) -> v2/queryManagement/reportQueries/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/queryManagement/reportQueries/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: finance/query-builder, operation/query-builder
      - Description: - GET_MANY (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L71) -> v2/queryManagement/reportQueries?limit=999999 | request: helper.nestedEntities: nestedEntities | helper.method: GET / response: helper.responseContainer: data / info: autoAppendQuery: false | helper: getListV2 | helperArgs: { url: 'v2/queryManagement/reportQueries?limit=999999', nestedEntities, method: 'GET' } - CREATE (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L79) -> v2/queryManagement/reportQueries | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/queryManagement/reportQueries', method: 'POST' } - GET_MANY (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L71) -> v2/queryManagement/reportQueries?limit=999999 | request: helper.nestedEntities: nestedEntities | helper.method: GET / response: helper.responseContainer: data / info: autoAppendQuery: false | helper: getListV2 | helperArgs: { url: 'v2/queryManagement/reportQueries?limit=999999', nestedEntities, method: 'GET' } - CREATE (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L79) -> v2/queryManagement/reportQueries | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/queryManagement/reportQueries', method: 'POST' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/queryManagement/reportQueries

```text
getCreateProvider({
  url: 'v2/queryManagement/reportQueries',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/queryManagement/reportQueries
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/query-builder, operation/query-builder
      - Description: - DELETE (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L97) -> v2/queryManagement/reportQueries/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/queryManagement/reportQueries/', method: 'DELETE' } - DELETE (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L97) -> v2/queryManagement/reportQueries/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/queryManagement/reportQueries/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: finance/query-builder, operation/query-builder
      - Description: - GET_MANY (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L71) -> v2/queryManagement/reportQueries?limit=999999 | request: helper.nestedEntities: nestedEntities | helper.method: GET / response: helper.responseContainer: data / info: autoAppendQuery: false | helper: getListV2 | helperArgs: { url: 'v2/queryManagement/reportQueries?limit=999999', nestedEntities, method: 'GET' } - CREATE (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L79) -> v2/queryManagement/reportQueries | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/queryManagement/reportQueries', method: 'POST' } - GET_MANY (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L71) -> v2/queryManagement/reportQueries?limit=999999 | request: helper.nestedEntities: nestedEntities | helper.method: GET / response: helper.responseContainer: data / info: autoAppendQuery: false | helper: getListV2 | helperArgs: { url: 'v2/queryManagement/reportQueries?limit=999999', nestedEntities, method: 'GET' } - CREATE (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L79) -> v2/queryManagement/reportQueries | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/queryManagement/reportQueries', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
url `v2/queryManagement/reportQueries/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/queryManagement/reportQueries

```text
getDeleteProvider({
  url: 'v2/queryManagement/reportQueries/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/queryManagement/reportQueries
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/query-builder, operation/query-builder
      - Description: - DELETE (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L97) -> v2/queryManagement/reportQueries/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/queryManagement/reportQueries/', method: 'DELETE' } - DELETE (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L97) -> v2/queryManagement/reportQueries/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/queryManagement/reportQueries/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: finance/query-builder, operation/query-builder
      - Description: - GET_MANY (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L71) -> v2/queryManagement/reportQueries?limit=999999 | request: helper.nestedEntities: nestedEntities | helper.method: GET / response: helper.responseContainer: data / info: autoAppendQuery: false | helper: getListV2 | helperArgs: { url: 'v2/queryManagement/reportQueries?limit=999999', nestedEntities, method: 'GET' } - CREATE (src/srcProject/layout/finance/modules/query-builder/provider/provider.js#L79) -> v2/queryManagement/reportQueries | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/queryManagement/reportQueries', method: 'POST' } - GET_MANY (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L71) -> v2/queryManagement/reportQueries?limit=999999 | request: helper.nestedEntities: nestedEntities | helper.method: GET / response: helper.responseContainer: data / info: autoAppendQuery: false | helper: getListV2 | helperArgs: { url: 'v2/queryManagement/reportQueries?limit=999999', nestedEntities, method: 'GET' } - CREATE (src/srcProject/layout/operation/modules/query-builder/provider/provider.js#L79) -> v2/queryManagement/reportQueries | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/queryManagement/reportQueries', method: 'POST' }

### DELETE_QUERY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/queryManagement/reportQueries/:id`, options {"method":"DELETE"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ADD_QUERY_SCHEDULER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLOAD_QUERY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### EXECUTE_QUERY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SAVE_EMAIL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `user/external`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_QUERY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/queryManagement/reportQueries/verify`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
