# VIEW255 — Acomptes de crédit – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.567Z à partir de `tasks/vues/VIEW255.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Acomptes de crédit
- Ressource : credit-advance-payments
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : multi-balances (priorité 0/3)
- Icône : Today

### Libellés
- FR : Acomptes de crédit.
- EN : Credit advance payments.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/runResults

```text
getListV2({
  url: 'v2/generic/all/runResults',
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
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/runResults
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/history-mass-action
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L12) -> v2/generic/all/runResults | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/runResults', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/history-mass-action/provider/provider.js#L19) -> v2/generic/all/runResults | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/runResults', responseContainer: 'data', nestedEntities }

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

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
