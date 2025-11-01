# VIEW283 — Modèles de dépôt de garantie – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.589Z à partir de `tasks/vues/VIEW283.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Modèles de dépôt de garantie
- Ressource : security-deposit-templates
- Clé / route : list
- Type d'écran : Liste groupée
- Menu : multi-balances/templates (priorité 2/4)

### Libellés
- FR : Modèles de dépôt de garantie.
- EN : Security deposit templates.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/securityDepositTemplate

```text
getListV2({
  url: 'v2/generic/all/securityDepositTemplate',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/securityDepositTemplate

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/securityDepositTemplate

```text
getListV2({
  url: 'v2/generic/all/securityDepositTemplate',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/securityDepositTemplate

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/securityDeposit/securityDepositTemplate

```text
getCreateProvider({
  keyColumn,
  url: 'v2/securityDeposit/securityDepositTemplate',
  responseContainer: 'securityDepositTemplate',
  responseContainerId: 'id',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/securityDeposit/securityDepositTemplate

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/securityDeposit/securityDepositTemplate/:id

```text
getUpdateProvider({
  keyColumn,
  url: 'v2/securityDeposit/securityDepositTemplate/:id',
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/securityDeposit/securityDepositTemplate/:id

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/securityDepositTemplate

```text
getOneV2({
  keyColumn,
  url: 'v2/generic/securityDepositTemplate/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/securityDepositTemplate/

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/all/securityDepositTemplate

```text
getDeleteProvider({
  url: 'v2/generic/all/securityDepositTemplate',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/securityDepositTemplate

### CHANGE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/securityDeposit/securityDepositTemplate/changeStatus`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
