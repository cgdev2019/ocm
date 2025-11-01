# VIEW011 — Lignes du plan de facturation – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.323Z à partir de `tasks/vues/VIEW011.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Lignes du plan de facturation
- Ressource : billing-plan-lines
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Lignes du plan de facturation.
- EN : Invoicing plan lines.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoicingPlanItem

```text
getListV2({
  keyColumn,
  url: 'v2/generic/all/invoicingPlanItem',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/invoicingPlanItem

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoicingPlanItem

```text
getListV2({
  keyColumn: 'code',
  url: 'v2/generic/all/invoicingPlanItem',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/invoicingPlanItem

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /billing/invoicingPlanItems

```text
getCreateProvider({
  keyColumn,
  url: 'billing/invoicingPlanItems',
  responseContainerId: 'entityId'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlanItems

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /billing/invoicingPlanItems

```text
getUpdateProvider({
  url: 'billing/invoicingPlanItems',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlanItems

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/invoicingPlanItem

```text
getOneV2({
  keyColumn,
  url: 'v2/generic/invoicingPlanItem/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/invoicingPlanItem/

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/invoicingPlanItem

```text
getDeleteProvider({
  url: 'v2/generic/invoicingPlanItem',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/invoicingPlanItem

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
