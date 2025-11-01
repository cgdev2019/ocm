# VIEW148 — Versions de prix – PATH PRICE MATRIX EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.461Z à partir de `tasks/vues/VIEW148.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Versions de prix
- Ressource : price-matrix
- Clé / route : PATH_PRICE_MATRIX_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Versions de prix.
- EN : Price versions.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/pricePlanMatrixVersion

```text
getListV2({
  url: 'v2/generic/all/pricePlanMatrixVersion',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/pricePlanMatrixVersion
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/price-matrix
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L55) -> v2/generic/all/pricePlanMatrixVersion | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/pricePlanMatrixVersion', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L62) -> v2/generic/all/pricePlanMatrixVersion | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/pricePlanMatrixVersion', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/pricePlanMatrixVersion

```text
getListV2({
  url: 'v2/generic/all/pricePlanMatrixVersion',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/pricePlanMatrixVersion
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/price-matrix
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L55) -> v2/generic/all/pricePlanMatrixVersion | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/pricePlanMatrixVersion', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L62) -> v2/generic/all/pricePlanMatrixVersion | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/pricePlanMatrixVersion', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/pricePlanMatrixVersion

```text
getOneV2({
  url: 'v2/generic/pricePlanMatrixVersion/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/pricePlanMatrixVersion
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/matrix-columns, catalog/price-matrix
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/matrix-columns/provider/provider.js#L35) -> v2/generic/pricePlanMatrixVersion/ | request: helper.nestedEntities: ['columns.attribute', 'lines.pricePlanMatrixValues.pricePlanMatrixColumn', 'pricePlanMatrix'] / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/pricePlanMatrixVersion/', // Not a typo, we're loading the columns from the version (!) nestedEntities: ['columns.attribute', 'lines.pricePlanMatrixValues.pricePlanMatrixColumn', 'pricePlanMatrix'] } - GET_ONE (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L69) -> v2/generic/pricePlanMatrixVersion/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/pricePlanMatrixVersion/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /catalog/pricePlan/pricePlanMatrixVersion

```text
getCreateProvider({
  url: 'catalog/pricePlan/pricePlanMatrixVersion',
  method: 'POST',
  responseContainer: 'pricePlanVersion'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/pricePlan/pricePlanMatrixVersion
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/price-matrix
      - Description: - CREATE (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L72) -> catalog/pricePlan/pricePlanMatrixVersion | request: helper.method: POST / response: helper.responseContainer: pricePlanVersion / info: helper: getCreateProvider | helperArgs: { url: 'catalog/pricePlan/pricePlanMatrixVersion', method: 'POST', responseContainer: 'pricePlanVersion' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/price-matrix
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L79) -> catalog/pricePlan/pricePlanMatrixVersion | request: helper.method: PUT / response: helper.responseContainer: pricePlanVersion / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/pricePlan/pricePlanMatrixVersion', method: 'PUT', responseContainer: 'pricePlanVersion' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /catalog/pricePlan/pricePlanMatrixVersion

```text
getUpdateProvider({
  url: 'catalog/pricePlan/pricePlanMatrixVersion',
  method: 'PUT',
  responseContainer: 'pricePlanVersion'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/pricePlan/pricePlanMatrixVersion
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/price-matrix
      - Description: - CREATE (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L72) -> catalog/pricePlan/pricePlanMatrixVersion | request: helper.method: POST / response: helper.responseContainer: pricePlanVersion / info: helper: getCreateProvider | helperArgs: { url: 'catalog/pricePlan/pricePlanMatrixVersion', method: 'POST', responseContainer: 'pricePlanVersion' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/price-matrix
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L79) -> catalog/pricePlan/pricePlanMatrixVersion | request: helper.method: PUT / response: helper.responseContainer: pricePlanVersion / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/pricePlan/pricePlanMatrixVersion', method: 'PUT', responseContainer: 'pricePlanVersion' }

### DELETE_PRICEPLAN

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/pricePlan/:pricePlanMatrixCode/pricePlanMatrixVersions/:currentVersion

```text
getDeleteProvider({
  url: `catalog/pricePlan/:pricePlanMatrixCode/pricePlanMatrixVersions/:currentVersion`,
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - catalog/pricePlan/:pricePlanMatrixCode/pricePlanMatrixVersions/:currentVersion

### PUBLISH_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/pricePlan/:code/pricePlanMatrixVersions/:version/status/PUBLISHED`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, méthode POST.
```

- Aucune opération correspondante dans `complement-api.json`.

### CHECK_IF_USED

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/pricePlans/:ppmc/pricePlanVersions/:ppmv/checkIfUsed`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"DELETE"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
