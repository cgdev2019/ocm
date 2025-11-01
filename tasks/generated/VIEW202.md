# VIEW202 — Dimensions de grille – PATH MATRIX COLUMNS CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.522Z à partir de `tasks/vues/VIEW202.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Dimensions de grille
- Ressource : matrix-columns
- Clé / route : PATH_MATRIX_COLUMNS_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Dimensions de grille.
- EN : Grid dimensions.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PricePlanMatrixColumn

```text
getListV2({
  url: 'v2/generic/all/PricePlanMatrixColumn',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PricePlanMatrixColumn
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/matrix-columns
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/matrix-columns/provider/provider.js#L22) -> v2/generic/all/PricePlanMatrixColumn | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PricePlanMatrixColumn', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/matrix-columns/provider/provider.js#L28) -> v2/generic/all/PricePlanMatrixColumn | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PricePlanMatrixColumn', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PricePlanMatrixColumn

```text
getListV2({
  url: 'v2/generic/all/PricePlanMatrixColumn',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PricePlanMatrixColumn
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/matrix-columns
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/matrix-columns/provider/provider.js#L22) -> v2/generic/all/PricePlanMatrixColumn | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PricePlanMatrixColumn', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/matrix-columns/provider/provider.js#L28) -> v2/generic/all/PricePlanMatrixColumn | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PricePlanMatrixColumn', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/pricePlanMatrixVersion

```text
getOneV2({
  url: 'v2/generic/pricePlanMatrixVersion/',
  // Not a typo, we're loading the columns from the version (!)
  nestedEntities: ['columns.attribute', 'lines.pricePlanMatrixValues.pricePlanMatrixColumn', 'pricePlanMatrix']
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/pricePlanMatrixVersion
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/matrix-columns, catalog/price-matrix
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/matrix-columns/provider/provider.js#L35) -> v2/generic/pricePlanMatrixVersion/ | request: helper.nestedEntities: ['columns.attribute', 'lines.pricePlanMatrixValues.pricePlanMatrixColumn', 'pricePlanMatrix'] / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/pricePlanMatrixVersion/', // Not a typo, we're loading the columns from the version (!) nestedEntities: ['columns.attribute', 'lines.pricePlanMatrixValues.pricePlanMatrixColumn', 'pricePlanMatrix'] } - GET_ONE (src/srcProject/layout/catalog/modules/price-matrix/provider/provider.js#L69) -> v2/generic/pricePlanMatrixVersion/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/pricePlanMatrixVersion/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
getCreateProvider({
  url,
  method: 'POST',
  responseContainer: 'pricePlanMatrixColumnDto'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getUpdateProvider({
  url,
  method: 'PUT',
  responseContainer: 'pricePlanMatrixColumnDto'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: deleteUrl,
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: deleteUrl,
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
