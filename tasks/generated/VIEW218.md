# VIEW218 — Catégories mots-clés – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.536Z à partir de `tasks/vues/VIEW218.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Catégories mots-clés
- Ressource : type-tags
- Clé / route : list
- Type d'écran : Liste simple
- Menu : catalog-manager (priorité 6)
- Icône : ChromeReaderMode

### Libellés
- FR : Catégories mots-clés.
- EN : Tag categories.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tagType

```text
getListV2({
  url: 'v2/generic/all/tagType',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tagType
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/catalog, catalog/type-tags
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/catalog/type-tags/provider/provider.js#L12) -> v2/generic/all/tagType | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/catalog/type-tags/provider/provider.js#L15) -> v2/generic/all/tagType | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', keyColumn: 'code', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L30) -> v2/generic/all/tagType | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { seller = {}, ...restFilter } = filter; const { code: sellerCode } = seller; const transformedFilters = { filter: { ...(!isUndefined(sellerCode) ? { 'seller.code': sellerCode } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...restFilter }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L54) -> v2/generic/all/tagType | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tagType

```text
getListV2({
  url: 'v2/generic/all/tagType',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tagType
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/catalog, catalog/type-tags
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/catalog/type-tags/provider/provider.js#L12) -> v2/generic/all/tagType | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/catalog/type-tags/provider/provider.js#L15) -> v2/generic/all/tagType | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', keyColumn: 'code', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L30) -> v2/generic/all/tagType | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { seller = {}, ...restFilter } = filter; const { code: sellerCode } = seller; const transformedFilters = { filter: { ...(!isUndefined(sellerCode) ? { 'seller.code': sellerCode } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...restFilter }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L54) -> v2/generic/all/tagType | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tagType', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/tagType

```text
getOneV2({
  url: 'v2/generic/tagType/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/tagType
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/catalog, catalog/type-tags
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/catalog/type-tags/provider/provider.js#L22) -> v2/generic/tagType/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/tagType/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L60) -> v2/generic/tagType/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/tagType/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/tags/tagTypes

```text
getCreateProvider({
  url: 'cpq/tags/tagTypes',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags/tagTypes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - DELETE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L79) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L83) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - CREATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L63) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L70) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: PUT / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /cpq/tags/tagTypes

```text
getUpdateProvider({
  url: 'cpq/tags/tagTypes',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags/tagTypes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - DELETE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L79) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L83) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - CREATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L63) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L70) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: PUT / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/tags/tagTypes

```text
getDeleteProvider({
  url: 'cpq/tags/tagTypes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags/tagTypes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - DELETE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L79) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L83) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - CREATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L63) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L70) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: PUT / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/tags/tagTypes

```text
getDeleteProvider({
  url: 'cpq/tags/tagTypes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags/tagTypes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - DELETE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L79) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L83) -> cpq/tags/tagTypes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/tagTypes/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - CREATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L63) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/type-tags
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/type-tags/provider/provider.js#L70) -> cpq/tags/tagTypes | request: prepareParams: prepareParams | helper.method: PUT / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'cpq/tags/tagTypes', method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
