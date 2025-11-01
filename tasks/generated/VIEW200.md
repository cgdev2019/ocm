# VIEW200 — Historique – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.521Z à partir de `tasks/vues/VIEW200.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Historique
- Ressource : history-mass-action
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : catalog-manager/price-versions (priorité 6/0)
- Icône : Settings

### Libellés
- FR : Historique.
- EN : History.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/runResults

```text
getListV2({
  url: 'v2/generic/all/runResults',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/runResults
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/history-mass-action
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L12) -> v2/generic/all/runResults | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/runResults', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L19) -> v2/generic/all/runResults | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/runResults', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/runResults

```text
getListV2({
  url: 'v2/generic/all/runResults',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/runResults
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/history-mass-action
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L12) -> v2/generic/all/runResults | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/runResults', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L19) -> v2/generic/all/runResults | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/runResults', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/invoicingPlan

```text
getOneV2({
  url: 'v2/generic/invoicingPlan/',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/invoicingPlan
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/history-mass-action
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L26) -> v2/generic/invoicingPlan/ | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/invoicingPlan/', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
getCreateProvider({
  url: ''
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: '',
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
