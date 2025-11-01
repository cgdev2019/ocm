# VIEW069 — Plans de relances – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.385Z à partir de `tasks/vues/VIEW069.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Plans de relances
- Ressource : collection-plans
- Clé / route : list
- Type d'écran : Liste groupée
- Icône : AccountBalanceWallet

### Libellés
- FR : Plans de relances.
- EN : Collection plans.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningCollectionPlan

```text
getListV2({
  url: 'v2/generic/all/DunningCollectionPlan',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/DunningCollectionPlan

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningCollectionPlan

```text
getListV2({
  url: 'v2/generic/all/DunningCollectionPlan',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/DunningCollectionPlan

### MASS_STOP_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/massStop`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MASS_PAUSE_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/massPause`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MASS_RESUME_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/massresume`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MASS_SWITCH_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/massSwitch`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MASS_CHECK_SWITCH_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/checkMassSwitch`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/DunningCollectionPlan

```text
getOneV2({
  url: 'v2/generic/DunningCollectionPlan/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/DunningCollectionPlan/

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/DunningCollectionPlan

```text
getCreateProvider({
  url: 'v2/dunning/DunningCollectionPlan',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/DunningCollectionPlan

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/dunning/DunningCollectionPlan/:id

```text
getUpdateProvider({
  url: 'v2/dunning/DunningCollectionPlan/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/DunningCollectionPlan/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/dunning/DunningCollectionPlan

```text
getDeleteProvider({
  url: 'v2/dunning/DunningCollectionPlan/',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/DunningCollectionPlan/

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/dunning

```text
getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/dunning
    - DELETE — Used in 7 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, B2B-customer-care/dunning-levels, finance/dunning-actions, finance/dunning-levels, finance/dunning-policies
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L69) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L75) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L83) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L69) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L75) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L81) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L82) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' }

### PAUSE_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/pause/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RESUME_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/resume/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### STOP_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/stop/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SWITCH_COLLECTION_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/switch/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ADD_LEVEL_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/addDunningLevelInstance`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_LEVEL_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/updateDunningLevelInstance/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### REMOVE_LEVEL_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/removeDunningLevelInstance`, méthode POST.
```

- Aucune opération correspondante dans `complement-api.json`.

### ADD_ACTION_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/addDunningActionInstance`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_ACTION_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/updateDunningActionInstance/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### REMOVE_ACTION_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/dunning/collectionPlan/removeDunningActionInstance`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
