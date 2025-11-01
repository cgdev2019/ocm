# VIEW013 — Plans de facturation – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.325Z à partir de `tasks/vues/VIEW013.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Plans de facturation
- Ressource : billing-plans
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création
- Icône : CalendarToday

### Libellés
- FR : Plans de facturation.
- EN : Invoicing plans.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoicingPlan

```text
getListV2({
  url: 'v2/generic/all/invoicingPlan',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/invoicingPlan

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoicingPlan

```text
getListV2({
  url: 'v2/generic/all/invoicingPlan',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/invoicingPlan

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /billing/invoicingPlans

```text
getCreateProvider({
  keyColumn,
  url: 'billing/invoicingPlans',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlans

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /billing/invoicingPlans

```text
getUpdateProvider({
  keyColumn,
  url: 'billing/invoicingPlans',
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlans

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/invoicingPlan

```text
getOneV2({
  keyColumn,
  url: 'v2/generic/invoicingPlan/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/invoicingPlan
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/history-mass-action
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L26) -> v2/generic/invoicingPlan/ | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/invoicingPlan/', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/invoicingPlan

```text
getDeleteProvider({
  url: 'v2/generic/invoicingPlan',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/invoicingPlan
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/history-mass-action
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L26) -> v2/generic/invoicingPlan/ | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/invoicingPlan/', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### DELETE_BILLING_PLAN_LINE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /billing/invoicingPlanItems/:code

```text
getDeleteProvider({
  url: 'billing/invoicingPlanItems/:code',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlanItems/:code

### DELETE_BILLING_PLAN

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /billing/invoicingPlans/{0}

```text
getDeleteProvider({
  url: ({
    params
  }) => {
    const {
      data: {
        code
      }
    } = params;
    return `billing/invoicingPlans/${code[0]}`;
  },
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/invoicingPlans/${code[0]}

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
