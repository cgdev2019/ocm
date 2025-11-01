# VIEW277 — Produits – PATH PRODUCT EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.583Z à partir de `tasks/vues/VIEW277.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Produits
- Ressource : products
- Clé / route : PATH_PRODUCT_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Produits.
- EN : Products.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/product

```text
getListV2({
  url: 'v2/generic/all/product',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/product
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, CPQ-marketing-manager/product-models, CPQ-marketing-manager/products, administration/products, catalog/products
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/products/provider/provider.js#L84) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': [{ id: get(currentVersion, 'tags.id') }] } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: filterTransformed, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/administration/modules/products/provider/provider.js#L127) -> v2/generic/all/product | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L85) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, status, ...restFilter } = filter; const filterTransformed = { ...(status ? { ...omit(restFilter, ['not-inList status']), status } : restFilter), ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': [{ id: get(currentVersion, 'tags.id') }] } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: filterTransformed, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L135) -> v2/generic/all/product | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/catalog/modules/products/provider/provider.js#L101) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': { id: get(currentVersion, 'tags.id') } } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'productLine.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'productLine.seller.code': ENGIE_EKKO_seller } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : get(sort, 'field') === 'medias' ? { ...sort, field: 'medias.mediaName' } : sort; return { filter: filterTransformed, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/catalog/modules/products/provider/provider.js#L152) -> v2/generic/all/product | request: params: { limit: 999999 } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/product-models/provider/provider.js#L82) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': { id: get(currentVersion, 'tags.id') } } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'productLine.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'productLine.seller.code': ENGIE_EKKO_seller } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: { ...filterTransformed, isModel: true, status: 'ACTIVE' }, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/products/provider/provider.js#L82) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': { id: get(currentVersion, 'tags.id') } } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'productLine.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'productLine.seller.code': ENGIE_EKKO_seller } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: { ...filterTransformed }, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn: 'code' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/product

```text
getListV2({
  url: 'v2/generic/all/product',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/product
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, CPQ-marketing-manager/product-models, CPQ-marketing-manager/products, administration/products, catalog/products
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/products/provider/provider.js#L84) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': [{ id: get(currentVersion, 'tags.id') }] } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: filterTransformed, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/administration/modules/products/provider/provider.js#L127) -> v2/generic/all/product | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L85) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, status, ...restFilter } = filter; const filterTransformed = { ...(status ? { ...omit(restFilter, ['not-inList status']), status } : restFilter), ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': [{ id: get(currentVersion, 'tags.id') }] } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: filterTransformed, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L135) -> v2/generic/all/product | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/catalog/modules/products/provider/provider.js#L101) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': { id: get(currentVersion, 'tags.id') } } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'productLine.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'productLine.seller.code': ENGIE_EKKO_seller } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : get(sort, 'field') === 'medias' ? { ...sort, field: 'medias.mediaName' } : sort; return { filter: filterTransformed, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/catalog/modules/products/provider/provider.js#L152) -> v2/generic/all/product | request: params: { limit: 999999 } | helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/product-models/provider/provider.js#L82) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': { id: get(currentVersion, 'tags.id') } } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'productLine.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'productLine.seller.code': ENGIE_EKKO_seller } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: { ...filterTransformed, isModel: true, status: 'ACTIVE' }, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/products/provider/provider.js#L82) -> v2/generic/all/product | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { productLine = {}, currentVersion = {}, ...restFilter } = filter; const filterTransformed = { ...restFilter, ...(!isEmpty(productLine) ? { 'productLine.id': get(productLine, 'id') } : {}), ...(!isEmpty(currentVersion.currentVersion) ? { 'currentVersion.currentVersion': parseInt(get(currentVersion, 'currentVersion')) } : {}), ...(!isEmpty(currentVersion.tags) ? { 'inList currentVersion.tags': { id: get(currentVersion, 'tags.id') } } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'productLine.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'productLine.seller.code': ENGIE_EKKO_seller } : {}) }; const transformSort = get(sort, 'field') === 'currentVersion.tags' ? { ...sort, field: 'currentVersion.tags.description' } : sort; return { filter: { ...filterTransformed }, sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/product', nestedEntities, keyColumn: 'code' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/product
  - /commercialRules/productRules

```text
getOneV2({
  urls: [{
    url: 'v2/generic/product/',
    params: {
      nestedEntities
    }
  }, {
    url: 'commercialRules/productRules?productCode=:@res.code',
    responseContainer: 'commercialRules',
    autoAppendId: false
  }],
  sync: true,
  transformResponse: aggregateCommercialRules
}).
```

- Opérations correspondantes :
  - Chemin /commercialRules/productRules
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, catalog/products
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L166) -> commercialRules/productRules?productCode=:@res.code | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[1].autoAppendId: false / response: urls[1].responseContainer: commercialRules / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/product/', params: { nestedEntities } }, { url: 'commercialRules/productRules?productCode=:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules } - GET_ONE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L164) -> commercialRules/productRules?productCode=:@res.code | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[1].autoAppendId: false / response: urls[1].responseContainer: commercialRules / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/product/', params: { nestedEntities } }, { url: 'commercialRules/productRules?productCode=:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules }
  - Chemin /v2/generic/product
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, catalog/products
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L166) -> v2/generic/product/ | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/product/', params: { nestedEntities } }, { url: 'commercialRules/productRules?productCode=:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules } - GET_ONE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L164) -> v2/generic/product/ | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/product/', params: { nestedEntities } }, { url: 'commercialRules/productRules?productCode=:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /catalog/products

```text
getCreateProvider({
  url: 'catalog/products/',
  method: 'POST',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products
    - DELETE — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, administration/products, catalog/products
      - Description: - DELETE (src/srcProject/layout/administration/modules/products/provider/provider.js#L158) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/products/provider/provider.js#L163) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L196) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L201) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L217) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products/provider/provider.js#L222) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, administration/products, catalog/products
      - Description: - CREATE (src/srcProject/layout/administration/modules/products/provider/provider.js#L136) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L144) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L194) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /catalog/products/{prevCode}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params || {};
    const {
      prevCode = ''
    } = data || {};
    return `catalog/products/${prevCode}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - catalog/products/${prevCode}

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/products

```text
getDeleteProvider({
  url: 'catalog/products/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products
    - DELETE — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, administration/products, catalog/products
      - Description: - DELETE (src/srcProject/layout/administration/modules/products/provider/provider.js#L158) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/products/provider/provider.js#L163) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L196) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L201) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L217) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products/provider/provider.js#L222) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, administration/products, catalog/products
      - Description: - CREATE (src/srcProject/layout/administration/modules/products/provider/provider.js#L136) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L144) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L194) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/products

```text
getDeleteProvider({
  url: 'catalog/products/',
  method: 'DELETE',
  showErrorFromContainer: true
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products
    - DELETE — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, administration/products, catalog/products
      - Description: - DELETE (src/srcProject/layout/administration/modules/products/provider/provider.js#L158) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/products/provider/provider.js#L163) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L196) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L201) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true } - DELETE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L217) -> catalog/products/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products/provider/provider.js#L222) -> catalog/products/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'catalog/products/', method: 'DELETE', showErrorFromContainer: true }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/products, administration/products, catalog/products
      - Description: - CREATE (src/srcProject/layout/administration/modules/products/provider/provider.js#L136) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/products/provider/provider.js#L144) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/products/provider/provider.js#L194) -> catalog/products/ | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'catalog/products/', method: 'POST', responseContainerId: 'id' }

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/:codeProduct/status/:toStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/productVersion`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/:codeProduct/productVersions/:codeVersion`, méthode DELETE.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/:codeProduct/productVersions/:codeVersion/duplication`.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_VERSION_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/:codeProduct/productVersions/:codeVersion/status/:versionStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/:productCode/duplication?duplicateHierarchy=true`.
```

- Aucune opération correspondante dans `complement-api.json`.

### CUSTOM_GET_ONE_PRODUCT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/product/:productId`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### EXPORT_TO_REMOTE_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/importExport/exportData`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLAOD_AS_XML

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/importExport/exportData`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPLOAD_FILE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/importExport/importData`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
