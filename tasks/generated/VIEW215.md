# VIEW215 — Mots-clés – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.533Z à partir de `tasks/vues/VIEW215.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Mots-clés
- Ressource : tags
- Clé / route : list
- Type d'écran : Liste simple
- Menu : catalog-manager (priorité 6)
- Icône : ChromeReaderMode

### Libellés
- FR : Mots-clés.
- EN : Tags.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tag

```text
getListV2({
  url: 'v2/generic/all/tag',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tag
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L12) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L15) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L32) -> v2/generic/all/tag | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { q, ...restFilter } = filter; if (!isEmpty(q)) { return { filter: { ...restFilter, 'wildcardOrIgnoreCase code': q, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; } const transformedFilters = { filter: { ...restFilter, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L71) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L32) -> v2/generic/all/tag | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { q, ...restFilter } = filter; if (!isEmpty(q)) { return { filter: { ...restFilter, 'wildcardOrIgnoreCase code': q, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; } const transformedFilters = { filter: { ...restFilter, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L71) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/finance/modules/tags/provider/provider.js#L32) -> v2/generic/all/tag | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { q, ...restFilter } = filter; if (!isEmpty(q)) { return { filter: { ...restFilter, 'wildcardOrIgnoreCase code': q, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; } const transformedFilters = { filter: { ...restFilter, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/tags/provider/provider.js#L71) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tag

```text
getListV2({
  url: 'v2/generic/all/tag',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tag
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L12) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L15) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L32) -> v2/generic/all/tag | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { q, ...restFilter } = filter; if (!isEmpty(q)) { return { filter: { ...restFilter, 'wildcardOrIgnoreCase code': q, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; } const transformedFilters = { filter: { ...restFilter, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L71) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L32) -> v2/generic/all/tag | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { q, ...restFilter } = filter; if (!isEmpty(q)) { return { filter: { ...restFilter, 'wildcardOrIgnoreCase code': q, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; } const transformedFilters = { filter: { ...restFilter, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L71) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/finance/modules/tags/provider/provider.js#L32) -> v2/generic/all/tag | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { q, ...restFilter } = filter; if (!isEmpty(q)) { return { filter: { ...restFilter, 'wildcardOrIgnoreCase code': q, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; } const transformedFilters = { filter: { ...restFilter, ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/tags/provider/provider.js#L71) -> v2/generic/all/tag | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tag', nestedEntities, keyColumn: 'code' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/tag

```text
getOneV2({
  url: 'v2/generic/tag/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/tag
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L22) -> v2/generic/tag/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/tag/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L78) -> v2/generic/tag/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/tag/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L78) -> v2/generic/tag/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/tag/', nestedEntities } - GET_ONE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L78) -> v2/generic/tag/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/tag/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/tags

```text
getCreateProvider({
  url: 'cpq/tags',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags
    - DELETE — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - DELETE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L56) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L60) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - CREATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L26) -> cpq/tags | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - UPDATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L29) -> cpq/tags | request: prepareParams: params => { const { data = {}, ...restParams } = params; const { seller = {}, parentTag = {}, tagType = {}, description = {}, ...restData } = data; const dataTransformed = { ...restData, sellerCode: seller.code || null, parentTagCode: parentTag.code || null, tagTypeCode: tagType.code || null, label: description || null }; return { data: dataTransformed, ...restParams }; } | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /cpq/tags

```text
getUpdateProvider({
  url: 'cpq/tags',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags
    - DELETE — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - DELETE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L56) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L60) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - CREATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L26) -> cpq/tags | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - UPDATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L29) -> cpq/tags | request: prepareParams: params => { const { data = {}, ...restParams } = params; const { seller = {}, parentTag = {}, tagType = {}, description = {}, ...restData } = data; const dataTransformed = { ...restData, sellerCode: seller.code || null, parentTagCode: parentTag.code || null, tagTypeCode: tagType.code || null, label: description || null }; return { data: dataTransformed, ...restParams }; } | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/tags

```text
getDeleteProvider({
  url: 'cpq/tags/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags
    - DELETE — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - DELETE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L56) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L60) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - CREATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L26) -> cpq/tags | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - UPDATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L29) -> cpq/tags | request: prepareParams: params => { const { data = {}, ...restParams } = params; const { seller = {}, parentTag = {}, tagType = {}, description = {}, ...restData } = data; const dataTransformed = { ...restData, sellerCode: seller.code || null, parentTagCode: parentTag.code || null, tagTypeCode: tagType.code || null, label: description || null }; return { data: dataTransformed, ...restParams }; } | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/tags

```text
getDeleteProvider({
  url: 'cpq/tags/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/tags
    - DELETE — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - DELETE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L56) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L60) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L94) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/tags/provider/provider.js#L98) -> cpq/tags/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/tags/', method: 'DELETE' }
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - CREATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L26) -> cpq/tags | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L82) -> cpq/tags | request: prepareParams: prepareParams | helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'cpq/tags', method: 'POST' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tags, administration/catalog, catalog/tags, finance/tags
      - Description: - UPDATE (src/srcProject/layout/administration/modules/catalog/tags/provider/provider.js#L29) -> cpq/tags | request: prepareParams: params => { const { data = {}, ...restParams } = params; const { seller = {}, parentTag = {}, tagType = {}, description = {}, ...restData } = data; const dataTransformed = { ...restData, sellerCode: seller.code || null, parentTagCode: parentTag.code || null, tagTypeCode: tagType.code || null, label: description || null }; return { data: dataTransformed, ...restParams }; } | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' } - UPDATE (src/srcProject/layout/finance/modules/tags/provider/provider.js#L86) -> cpq/tags | request: prepareParams: prepareParams | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/tags', method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
