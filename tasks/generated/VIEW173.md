# VIEW173 — Articles – PATH ARTICLE EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.507Z à partir de `tasks/vues/VIEW173.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Articles
- Ressource : articles
- Clé / route : PATH_ARTICLE_EDIT
- Type d'écran : Formulaire d'édition
- Icône : FilterNone

### Libellés
- FR : Articles.
- EN : Articles.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountingArticle

```text
getListV2({
  url: 'v2/generic/all/accountingArticle',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/accountingArticle
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/articles/provider/provider.js#L45) -> v2/generic/all/accountingArticle | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { unitPrice = {}, ...restFilter } = filter; const transformedFilter = { ...restFilter, ...(!isEmpty(unitPrice) ? getMinMaxFromRangeNumber(unitPrice, 'unitPrice') : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/articles/provider/provider.js#L65) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L20) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L25) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L25) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L30) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountingArticle

```text
getListV2({
  url: 'v2/generic/all/accountingArticle',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/accountingArticle
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/articles/provider/provider.js#L45) -> v2/generic/all/accountingArticle | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { unitPrice = {}, ...restFilter } = filter; const transformedFilter = { ...restFilter, ...(!isEmpty(unitPrice) ? getMinMaxFromRangeNumber(unitPrice, 'unitPrice') : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/articles/provider/provider.js#L65) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L20) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L25) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L25) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L30) -> v2/generic/all/accountingArticle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingArticle', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/accountingArticle
  - /v2/generic/all/articleMappingLine

```text
getOneV2({
  urls: [{
    url: 'v2/generic/accountingArticle/',
    params: {
      nestedEntities
    }
  }, {
    url: 'v2/generic/all/articleMappingLine/',
    responseContainer: 'data',
    autoAppendId: false,
    params: {
      filters: {
        'accountingArticle->id': '@res.id'
      }
    }
  }],
  sync: true,
  transformResponse: aggregateArticle
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/accountingArticle
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L73) -> v2/generic/accountingArticle/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }, { url: 'v2/generic/all/AccountingCodeMapping/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L33) -> v2/generic/accountingArticle/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L38) -> v2/generic/accountingArticle/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle }
  - Chemin /v2/generic/all/articleMappingLine
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-from-article-mapping, B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-from-article-mapping, catalog/article-mapping-line
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L43) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L57) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'accountingArticle.code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields, keyColumn: 'accountingArticle.code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L43) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L57) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'accountingArticle.code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields, keyColumn: 'accountingArticle.code' } - GET_LIST (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L73) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }, { url: 'v2/generic/all/AccountingCodeMapping/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L33) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L38) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/articles

```text
getCreateProvider({
  url: 'v2/articles',
  method: 'POST',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/articles
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - DELETE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L120) -> v2/articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articles/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L70) -> v2/articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articles/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L75) -> v2/articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articles/', method: 'DELETE' }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - CREATE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L103) -> v2/articles | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L53) -> v2/articles | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L58) -> v2/articles | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles', method: 'POST', responseContainerId: 'id' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/articles/:id

```text
getUpdateProvider({
  keyColumn,
  url: 'v2/articles/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/articles/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/articles

```text
getDeleteProvider({
  url: 'v2/articles/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/articles
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - DELETE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L120) -> v2/articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articles/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L70) -> v2/articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articles/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L75) -> v2/articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articles/', method: 'DELETE' }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - CREATE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L103) -> v2/articles | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L53) -> v2/articles | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles', method: 'POST', responseContainerId: 'id' } - CREATE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L58) -> v2/articles | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles', method: 'POST', responseContainerId: 'id' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /articles

```text
getDeleteProvider({
  url: 'articles/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /articles
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - DELETE_MANY (src/srcProject/layout/administration/modules/articles/provider/provider.js#L128) -> articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'articles/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L78) -> articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'articles/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L83) -> articles/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'articles/', method: 'DELETE' }

### ACCOUNITNG_CODE_UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/articles/{accountingArticleCode}/accountingCodeMapping

```text
getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    const {
      accountingArticleCode
    } = data;
    return `v2/articles/${accountingArticleCode}/accountingCodeMapping`;
  },
  method: 'PUT',
  responseContainerId: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/articles/${accountingArticleCode}/accountingCodeMapping

### ACCOUNITNG_CODE_CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/articles/accountingCodeMapping

```text
getCreateProvider({
  url: 'v2/articles/accountingCodeMapping',
  method: 'POST',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/articles/accountingCodeMapping
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/articles, catalog/articles
      - Description: - ACCOUNITNG_CODE_CREATE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L147) -> v2/articles/accountingCodeMapping | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles/accountingCodeMapping', method: 'POST', responseContainerId: 'id' } - ACCOUNITNG_CODE_CREATE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L102) -> v2/articles/accountingCodeMapping | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/articles/accountingCodeMapping', method: 'POST', responseContainerId: 'id' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
