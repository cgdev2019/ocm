# VIEW226 — Offres commerciales – PATH OFFER EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.544Z à partir de `tasks/vues/VIEW226.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : CPQ marketing manager
- Module : Offres commerciales
- Ressource : offers
- Clé / route : PATH_OFFER_EDIT
- Type d'écran : Formulaire d'édition
- Icône : ChromeReaderMode

### Libellés
- FR : Offres commerciales.
- EN : Commercial offers.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/offerTemplate

```text
getListV2({
  url: 'v2/generic/all/offerTemplate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/offerTemplate
    - POST — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/offers, CPQ-marketing-manager/offer-models, CPQ-marketing-manager/offers, catalog/offers, catalog/offers-available
      - Description: - GET_OFFER_ID (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L650) -> v2/generic/all/offerTemplate | request: options: { method: 'POST' } - GET_OFFER_TEMPLATE (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L859) -> v2/generic/all/offerTemplate | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/offers/provider/provider.js#L18) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { lifeCycleStatus: 'ACTIVE', ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L36) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, sort, ...restParams } = params; const { validity = {}, tags, ...restFilter } = filter; const transformSort = get(sort, 'field') === 'tags' ? { ...sort, field: 'tags.description' } : get(sort, 'field') === 'medias' ? { ...sort, field: 'medias.mediaName' } : sort; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { ...(!isEmpty(tags) ? { 'inList tags': { id: get(tags, 'id') } } : {}), ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, sort: { ...transformSort }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L70) -> v2/generic/all/offerTemplate | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/offers-available/provider/provider.js#L18) -> v2/generic/all/offerTemplate | request: helper.nestedEntities: nestedEntities | helper.filters: filters / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities, filters } - GET_MANY (src/srcProject/layout/catalog/modules/offers-available/provider/provider.js#L25) -> v2/generic/all/offerTemplate | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/offer-models/provider/provider.js#L24) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, sort, ...restParams } = params; const { validity = {}, tags, ...restFilter } = filter; const transformSort = get(sort, 'field') === 'tags' ? { ...sort, field: 'tags.description' } : sort; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { ...(!isEmpty(tags) ? { 'inList tags': { id: get(tags, 'id') } } : {}), ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to'), isModel: true, lifeCycleStatus: 'ACTIVE', 'fromOptionalRange validity.to': '@currentDate' }, sort: { ...transformSort }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/offers/provider/provider.js#L24) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, sort, ...restParams } = params; const { validity = {}, tags, ...restFilter } = filter; const transformSort = get(sort, 'field') === 'tags' ? { ...sort, field: 'tags.description' } : get(sort, 'field') === 'medias' ? { ...sort, field: 'medias.mediaName' } : sort; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { ...(!isEmpty(tags) ? { 'inList tags': { id: get(tags, 'id') } } : {}), ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, sort: { ...transformSort }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/offerTemplate

```text
getListV2({
  url: 'v2/generic/all/offerTemplate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/offerTemplate
    - POST — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/offers, CPQ-marketing-manager/offer-models, CPQ-marketing-manager/offers, catalog/offers, catalog/offers-available
      - Description: - GET_OFFER_ID (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L650) -> v2/generic/all/offerTemplate | request: options: { method: 'POST' } - GET_OFFER_TEMPLATE (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L859) -> v2/generic/all/offerTemplate | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/offers/provider/provider.js#L18) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { lifeCycleStatus: 'ACTIVE', ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L36) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, sort, ...restParams } = params; const { validity = {}, tags, ...restFilter } = filter; const transformSort = get(sort, 'field') === 'tags' ? { ...sort, field: 'tags.description' } : get(sort, 'field') === 'medias' ? { ...sort, field: 'medias.mediaName' } : sort; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { ...(!isEmpty(tags) ? { 'inList tags': { id: get(tags, 'id') } } : {}), ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, sort: { ...transformSort }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L70) -> v2/generic/all/offerTemplate | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/offers-available/provider/provider.js#L18) -> v2/generic/all/offerTemplate | request: helper.nestedEntities: nestedEntities | helper.filters: filters / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities, filters } - GET_MANY (src/srcProject/layout/catalog/modules/offers-available/provider/provider.js#L25) -> v2/generic/all/offerTemplate | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/offer-models/provider/provider.js#L24) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, sort, ...restParams } = params; const { validity = {}, tags, ...restFilter } = filter; const transformSort = get(sort, 'field') === 'tags' ? { ...sort, field: 'tags.description' } : sort; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { ...(!isEmpty(tags) ? { 'inList tags': { id: get(tags, 'id') } } : {}), ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to'), isModel: true, lifeCycleStatus: 'ACTIVE', 'fromOptionalRange validity.to': '@currentDate' }, sort: { ...transformSort }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities } - GET_LIST (src/srcProject/layout/CPQ-marketing-manager/modules/offers/provider/provider.js#L24) -> v2/generic/all/offerTemplate | request: prepareParams: params => { const { filter = {}, sort, ...restParams } = params; const { validity = {}, tags, ...restFilter } = filter; const transformSort = get(sort, 'field') === 'tags' ? { ...sort, field: 'tags.description' } : get(sort, 'field') === 'medias' ? { ...sort, field: 'medias.mediaName' } : sort; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: getGenericFormatDate(get(validity, key)) }; const transformedFilters = { filter: { ...(!isEmpty(tags) ? { 'inList tags': { id: get(tags, 'id') } } : {}), ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, sort: { ...transformSort }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/offerTemplate', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/offerTemplate
  - /commercialRules/offerRules/:@res.code

```text
getOneV2({
  urls: [{
    url: 'v2/generic/offerTemplate/',
    params: {
      nestedEntities
    }
  }, {
    url: 'commercialRules/offerRules/:@res.code',
    responseContainer: 'commercialRules',
    autoAppendId: false
  }],
  sync: true,
  transformResponse: aggregateCommercialRules
}).
```

- Opérations correspondantes :
  - Chemin /commercialRules/offerRules/:@res.code
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L77) -> commercialRules/offerRules/:@res.code | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[1].autoAppendId: false / response: urls[1].responseContainer: commercialRules / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/offerTemplate/', params: { nestedEntities } }, { url: 'commercialRules/offerRules/:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules }
  - Chemin /v2/generic/offerTemplate
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L77) -> v2/generic/offerTemplate/ | request: helper.sync: true | helper.transformResponse: aggregateCommercialRules | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/offerTemplate/', params: { nestedEntities } }, { url: 'commercialRules/offerRules/:@res.code', responseContainer: 'commercialRules', autoAppendId: false }], sync: true, transformResponse: aggregateCommercialRules }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /catalog/offerTemplate

```text
getCreateProvider({
  url: 'catalog/offerTemplate',
  method: 'POST',
  responseContainerId: 'entityId',
  showErrorFromContainer: true
}).
```

- Opérations correspondantes :
  - Chemin /catalog/offerTemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - DELETE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L114) -> catalog/offerTemplate/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE', showErrorFromContainer: true } - DELETE_MANY (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L122) -> catalog/offerTemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE' }
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_OFFER_DETAILS (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1142) -> catalog/offerTemplate? | request: options: { method: 'GET' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - CREATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L97) -> catalog/offerTemplate | request: helper.method: POST | helper.showErrorFromContainer: true / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'POST', responseContainerId: 'entityId', showErrorFromContainer: true }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L106) -> catalog/offerTemplate | request: helper.method: PUT | helper.showErrorFromContainer: true / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'PUT', showErrorFromContainer: true }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /catalog/offerTemplate

```text
getUpdateProvider({
  url: 'catalog/offerTemplate',
  method: 'PUT',
  showErrorFromContainer: true
}).
```

- Opérations correspondantes :
  - Chemin /catalog/offerTemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - DELETE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L114) -> catalog/offerTemplate/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE', showErrorFromContainer: true } - DELETE_MANY (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L122) -> catalog/offerTemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE' }
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_OFFER_DETAILS (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1142) -> catalog/offerTemplate? | request: options: { method: 'GET' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - CREATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L97) -> catalog/offerTemplate | request: helper.method: POST | helper.showErrorFromContainer: true / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'POST', responseContainerId: 'entityId', showErrorFromContainer: true }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L106) -> catalog/offerTemplate | request: helper.method: PUT | helper.showErrorFromContainer: true / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'PUT', showErrorFromContainer: true }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/offerTemplate

```text
getDeleteProvider({
  url: 'catalog/offerTemplate/',
  method: 'DELETE',
  showErrorFromContainer: true
}).
```

- Opérations correspondantes :
  - Chemin /catalog/offerTemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - DELETE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L114) -> catalog/offerTemplate/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE', showErrorFromContainer: true } - DELETE_MANY (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L122) -> catalog/offerTemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE' }
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_OFFER_DETAILS (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1142) -> catalog/offerTemplate? | request: options: { method: 'GET' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - CREATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L97) -> catalog/offerTemplate | request: helper.method: POST | helper.showErrorFromContainer: true / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'POST', responseContainerId: 'entityId', showErrorFromContainer: true }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L106) -> catalog/offerTemplate | request: helper.method: PUT | helper.showErrorFromContainer: true / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'PUT', showErrorFromContainer: true }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/offerTemplate

```text
getDeleteProvider({
  url: 'catalog/offerTemplate/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/offerTemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - DELETE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L114) -> catalog/offerTemplate/ | request: helper.method: DELETE | helper.showErrorFromContainer: true / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE', showErrorFromContainer: true } - DELETE_MANY (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L122) -> catalog/offerTemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/offerTemplate/', method: 'DELETE' }
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_OFFER_DETAILS (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1142) -> catalog/offerTemplate? | request: options: { method: 'GET' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - CREATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L97) -> catalog/offerTemplate | request: helper.method: POST | helper.showErrorFromContainer: true / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'POST', responseContainerId: 'entityId', showErrorFromContainer: true }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/offers
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/offers/provider/provider.js#L106) -> catalog/offerTemplate | request: helper.method: PUT | helper.showErrorFromContainer: true / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/offerTemplate', method: 'PUT', showErrorFromContainer: true }

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/offerTemplate/:offerCode/update/status?status=:toStatus&validFrom=:from&validTo=:to`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/offerTemplate/duplicate/:offerCode?duplicateHierarchy=true&validFrom=:from&validTo=:to`.
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
