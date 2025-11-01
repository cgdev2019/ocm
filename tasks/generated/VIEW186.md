# VIEW186 — Tableaux de données personnalisées – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.514Z à partir de `tasks/vues/VIEW186.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Tableaux de données personnalisées
- Ressource : custom-tables
- Clé / route : list
- Type d'écran : Liste simple
- Menu : catalog-manager/reference-tables (priorité 2)
- Icône : Settings

### Libellés
- FR : Tableaux de données personnalisées.
- EN : Custom tables.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/CustomEntityTemplate

```text
getListV2({
  url: 'v2/generic/all/CustomEntityTemplate',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/CustomEntityTemplate
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/custom-tables
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/custom-tables/provider/provider.js#L48) -> v2/generic/all/CustomEntityTemplate | request: prepareParams: params => prepareSendedParams(params) | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CustomEntityTemplate', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /entityCustomization/entity

```text
getOneV2({
  url: 'entityCustomization/entity/',
  keyColumn: 'code',
  responseContainer: 'customEntityTemplate'
}).
```

- Opérations correspondantes :
  - Chemin /entityCustomization/entity
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/custom-tables
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/custom-tables/provider/provider.js#L57) -> entityCustomization/entity/ | request: helper.keyColumn: 'code' / response: helper.responseContainer: customEntityTemplate / info: helper: getOneV2 | helperArgs: { url: 'entityCustomization/entity/', keyColumn: 'code', responseContainer: 'customEntityTemplate' }

### CUSTOM_TABLE_DATA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### EXPORT

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
