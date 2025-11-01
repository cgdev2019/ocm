# VIEW178 — Attributs métiers – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.510Z à partir de `tasks/vues/VIEW178.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Attributs métiers
- Ressource : business-attributes
- Clé / route : list
- Type d'écran : Liste simple
- Menu : catalog-manager (priorité 6)
- Icône : Update

### Libellés
- FR : Attributs métiers.
- EN : Business attributes.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/attribute

```text
getListV2({
  url: 'v2/generic/all/attribute'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/attribute
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L43) -> v2/generic/all/attribute | request: prepareParams: params => prepareSendedParams(params) / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute' } - GET_MANY (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L51) -> v2/generic/all/attribute | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute' } - GET_LIST (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L26) -> v2/generic/all/attribute | request: prepareParams: params => { const { sort = {}, filter = {}, ...restParams } = params; const transformSort = { ...sort, field: 'auditable.created', order: 'DESC' }; const { isBusiness, disabled = false, ...restFilters } = filter; const { __filterParams = {} } = restFilters; const isBusinessFilter = get(__filterParams, 'isBusiness', {}); return { filter: { ...(isNil(isBusiness) ? { ...restFilters } : !!isBusiness ? { ...omit(restFilters, 'inList id'), attributeCategory: ATTRIBUTES_CATEGORIES.business, ...isBusinessFilter } : { ...restFilters, disabled, attributeCategory: ATTRIBUTES_CATEGORIES.regular }) }, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L64) -> v2/generic/all/attribute | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/attribute

```text
getListV2({
  url: 'v2/generic/all/attribute'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/attribute
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L43) -> v2/generic/all/attribute | request: prepareParams: params => prepareSendedParams(params) / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute' } - GET_MANY (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L51) -> v2/generic/all/attribute | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute' } - GET_LIST (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L26) -> v2/generic/all/attribute | request: prepareParams: params => { const { sort = {}, filter = {}, ...restParams } = params; const transformSort = { ...sort, field: 'auditable.created', order: 'DESC' }; const { isBusiness, disabled = false, ...restFilters } = filter; const { __filterParams = {} } = restFilters; const isBusinessFilter = get(__filterParams, 'isBusiness', {}); return { filter: { ...(isNil(isBusiness) ? { ...restFilters } : !!isBusiness ? { ...omit(restFilters, 'inList id'), attributeCategory: ATTRIBUTES_CATEGORIES.business, ...isBusinessFilter } : { ...restFilters, disabled, attributeCategory: ATTRIBUTES_CATEGORIES.regular }) }, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L64) -> v2/generic/all/attribute | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/attribute', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/attribute

```text
getOneV2({
  url: 'v2/generic/attribute/'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/attribute
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L57) -> v2/generic/attribute/ | info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/attribute/' } - GET_ONE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L95) -> v2/generic/attribute/ | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/attribute/', params: { nestedEntities } }, { url: 'commercialRules/attributeRules?attributeCode=:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /attributes

```text
getDeleteProvider({
  url: 'attributes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /attributes
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - DELETE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L61) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L66) -> attributes/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L87) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - CREATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L74) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L71) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - UPDATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L82) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L79) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /attributes

```text
getDeleteProvider({
  url: 'attributes/',
  method: 'DELETE',
  showErrorFromContainer: true
}).
```

- Opérations correspondantes :
  - Chemin /attributes
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - DELETE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L61) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L66) -> attributes/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L87) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - CREATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L74) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L71) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - UPDATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L82) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L79) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /attributes

```text
getCreateProvider({
  keyColumn,
  url: 'attributes',
  showErrorFromContainer: true,
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /attributes
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - DELETE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L61) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L66) -> attributes/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L87) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - CREATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L74) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L71) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - UPDATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L82) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L79) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /attributes

```text
getUpdateProvider({
  keyColumn,
  url: 'attributes',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /attributes
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - DELETE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L61) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L66) -> attributes/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L87) -> attributes/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'attributes/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - CREATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L74) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L71) -> attributes | request: helper.keyColumn: keyColumn | helper.showErrorFromContainer: true / response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'attributes', showErrorFromContainer: true, responseContainerId: 'id' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/business-attributes, catalog/attributes
      - Description: - UPDATE (src/srcProject/layout/administration/modules/business-attributes/provider/provider.js#L82) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/attributes/provider/provider.js#L79) -> attributes | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'attributes', method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
