# VIEW213 — Gammes – PATH PRODUCT LINE CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.532Z à partir de `tasks/vues/VIEW213.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Gammes
- Ressource : products-line
- Clé / route : PATH_PRODUCT_LINE_CREATE
- Type d'écran : Formulaire de création
- Menu : catalog-manager (priorité 6)
- Icône : ChromeReaderMode

### Libellés
- FR : Gammes.
- EN : Product families.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/productLine

```text
getListV2({
  url: 'v2/generic/all/productLine',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/productLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, administration/catalog, catalog/products-line
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/catalog/products-line/provider/provider.js#L13) -> v2/generic/all/productLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/catalog/products-line/provider/provider.js#L20) -> v2/generic/all/productLine | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities, keyColumn: 'code' } - GET_PRODUCTLINE_BY_FILTER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L745) -> v2/generic/all/productLine | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L51) -> v2/generic/all/productLine | request: prepareParams: filterParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L58) -> v2/generic/all/productLine | request: prepareParams: filterParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/productLine

```text
getListV2({
  url: 'v2/generic/all/productLine',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/productLine
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, administration/catalog, catalog/products-line
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/catalog/products-line/provider/provider.js#L13) -> v2/generic/all/productLine | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/catalog/products-line/provider/provider.js#L20) -> v2/generic/all/productLine | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities, keyColumn: 'code' } - GET_PRODUCTLINE_BY_FILTER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L745) -> v2/generic/all/productLine | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L51) -> v2/generic/all/productLine | request: prepareParams: filterParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L58) -> v2/generic/all/productLine | request: prepareParams: filterParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/productLine', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/productLine

```text
getOneV2({
  url: 'v2/generic/productLine/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/productLine
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/catalog, catalog/products-line
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/catalog/products-line/provider/provider.js#L28) -> v2/generic/productLine/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/productLine/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L66) -> v2/generic/productLine/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/productLine/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /catalog/products/productLines

```text
getCreateProvider({
  url: 'catalog/products/productLines',
  responseContainerId: 'actionStatus.entityId'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products/productLines
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - DELETE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L89) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L96) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - CREATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L70) -> catalog/products/productLines | request: prepareParams: prepareParams / response: helper.responseContainerId: actionStatus.entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/products/productLines', responseContainerId: 'actionStatus.entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L78) -> catalog/products/productLines | request: prepareParams: prepareParams / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'catalog/products/productLines' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /catalog/products/productLines

```text
getUpdateProvider({
  url: 'catalog/products/productLines'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products/productLines
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - DELETE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L89) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L96) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - CREATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L70) -> catalog/products/productLines | request: prepareParams: prepareParams / response: helper.responseContainerId: actionStatus.entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/products/productLines', responseContainerId: 'actionStatus.entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L78) -> catalog/products/productLines | request: prepareParams: prepareParams / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'catalog/products/productLines' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/products/productLines

```text
getDeleteProvider({
  url: 'catalog/products/productLines/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products/productLines
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - DELETE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L89) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L96) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - CREATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L70) -> catalog/products/productLines | request: prepareParams: prepareParams / response: helper.responseContainerId: actionStatus.entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/products/productLines', responseContainerId: 'actionStatus.entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L78) -> catalog/products/productLines | request: prepareParams: prepareParams / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'catalog/products/productLines' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/products/productLines

```text
getDeleteProvider({
  url: 'catalog/products/productLines/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/products/productLines
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - DELETE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L89) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L96) -> catalog/products/productLines/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/products/productLines/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - CREATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L70) -> catalog/products/productLines | request: prepareParams: prepareParams / response: helper.responseContainerId: actionStatus.entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/products/productLines', responseContainerId: 'actionStatus.entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/products-line
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/products-line/provider/provider.js#L78) -> catalog/products/productLines | request: prepareParams: prepareParams / info: excludeProperties: ['originalId'] | helper: getUpdateProvider | helperArgs: { url: 'catalog/products/productLines' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
