# VIEW170 — Devis – PATH ARTICLE MAPPING LINE EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.503Z à partir de `tasks/vues/VIEW170.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Devis
- Ressource : article-mapping-line
- Clé / route : PATH_ARTICLE_MAPPING_LINE_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Devis.
- EN : Product or Service.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/articleMappingLine

```text
getListV2({
  url: 'v2/generic/all/articleMappingLine',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/articleMappingLine
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-from-article-mapping, B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-from-article-mapping, catalog/article-mapping-line
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L43) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L57) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'accountingArticle.code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields, keyColumn: 'accountingArticle.code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L43) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L57) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'accountingArticle.code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields, keyColumn: 'accountingArticle.code' } - GET_LIST (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L73) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }, { url: 'v2/generic/all/AccountingCodeMapping/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L33) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L38) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/articleMappingLine

```text
getListV2({
  url: 'v2/generic/all/articleMappingLine',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/articleMappingLine
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-from-article-mapping, B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-from-article-mapping, catalog/article-mapping-line
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L43) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L57) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'accountingArticle.code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields, keyColumn: 'accountingArticle.code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L43) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L57) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'accountingArticle.code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities, genericFields, keyColumn: 'accountingArticle.code' } - GET_LIST (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L19) -> v2/generic/all/articleMappingLine | request: prepareParams: params => { const { filter = {}, ...restParams } = params; return { filter: filter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L31) -> v2/generic/all/articleMappingLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/articleMappingLine', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/articles, administration/articles, catalog/articles
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/articles/provider/provider.js#L73) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }, { url: 'v2/generic/all/AccountingCodeMapping/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/articles/provider/provider.js#L33) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle } - GET_ONE (src/srcProject/layout/catalog/modules/articles/provider/provider.js#L38) -> v2/generic/all/articleMappingLine/ | request: helper.sync: true | helper.transformResponse: aggregateArticle | urls[1].autoAppendId: false | urls[1].params: { filters: { 'accountingArticle->id': '@res.id' } } / response: urls[1].responseContainer: data / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/accountingArticle/', params: { nestedEntities } }, { url: 'v2/generic/all/articleMappingLine/', responseContainer: 'data', autoAppendId: false, params: { filters: { 'accountingArticle->id': '@res.id' } } }], sync: true, transformResponse: aggregateArticle }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/articleMappingLine

```text
getOneV2({
  url: 'v2/generic/articleMappingLine/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/articleMappingLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-from-article-mapping, B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-from-article-mapping, catalog/article-mapping-line
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L36) -> v2/generic/articleMappingLine/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/articleMappingLine/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/article-from-article-mapping/provider/provider.js#L67) -> v2/generic/articleMappingLine/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/articleMappingLine/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L36) -> v2/generic/articleMappingLine/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/articleMappingLine/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/article-from-article-mapping/provider/provider.js#L67) -> v2/generic/articleMappingLine/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/articleMappingLine/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L36) -> v2/generic/articleMappingLine/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/articleMappingLine/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/articleMappingLines

```text
getCreateProvider({
  url: 'v2/articleMappingLines/',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/articleMappingLines
    - DELETE — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-mapping-line
      - Description: - DELETE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-mapping-line
      - Description: - CREATE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getUpdateProvider({
  url: ({
    params
  }) => `v2/articleMappingLines/${params.id}`,
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/articleMappingLines

```text
getDeleteProvider({
  url: 'v2/articleMappingLines/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/articleMappingLines
    - DELETE — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-mapping-line
      - Description: - DELETE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-mapping-line
      - Description: - CREATE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/articleMappingLines

```text
getDeleteProvider({
  url: 'v2/articleMappingLines/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/articleMappingLines
    - DELETE — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-mapping-line
      - Description: - DELETE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L59) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L67) -> v2/articleMappingLines/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'DELETE' }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/article-mapping-line, administration/article-mapping-line, catalog/article-mapping-line
      - Description: - CREATE (src/srcProject/layout/administration/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' } - CREATE (src/srcProject/layout/catalog/modules/article-mapping-line/provider/provider.js#L41) -> v2/articleMappingLines/ | request: helper.method: POST / info: keyColumn: keyColumn | excludeProperties: ['code'] | helper: getCreateProvider | helperArgs: { url: 'v2/articleMappingLines/', method: 'POST' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
