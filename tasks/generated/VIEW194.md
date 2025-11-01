# VIEW194 — Plan de remise – PATH DISCOUNT PLAN CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.518Z à partir de `tasks/vues/VIEW194.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Plan de remise
- Ressource : discount-plans
- Clé / route : PATH_DISCOUNT_PLAN_CREATE
- Type d'écran : Formulaire de création
- Icône : AccountBalanceWallet

### Libellés
- FR : Plan de remise.
- EN : Discount plans.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/discountPlan

```text
getListV2({
  url: 'v2/generic/all/discountPlan',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/discountPlan
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - GED_DISCOUNTS (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1358) -> v2/generic/all/discountPlan | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L14) -> v2/generic/all/discountPlan | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L17) -> v2/generic/all/discountPlan | request: prepareParams: params => ({ ...params }) | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L29) -> v2/generic/all/discountPlan | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L36) -> v2/generic/all/discountPlan | request: prepareParams: params => ({ ...params, referenceFieldId: 'code' }) | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - UPDATE_QUOTES_CONTRACT (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1364) -> v2/generic/all/discountPlan | request: options: { method: 'PUT' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/discountPlan

```text
getListV2({
  url: 'v2/generic/all/discountPlan',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/discountPlan
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - GED_DISCOUNTS (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1358) -> v2/generic/all/discountPlan | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L14) -> v2/generic/all/discountPlan | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L17) -> v2/generic/all/discountPlan | request: prepareParams: params => ({ ...params }) | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L29) -> v2/generic/all/discountPlan | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L36) -> v2/generic/all/discountPlan | request: prepareParams: params => ({ ...params, referenceFieldId: 'code' }) | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlan', nestedEntities }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - UPDATE_QUOTES_CONTRACT (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1364) -> v2/generic/all/discountPlan | request: options: { method: 'PUT' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/discountPlan

```text
getOneV2({
  url: 'v2/generic/discountPlan/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/discountPlan
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L27) -> v2/generic/discountPlan/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/discountPlan/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L47) -> v2/generic/discountPlan/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/discountPlan/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /catalog/discountPlan

```text
getCreateProvider({
  url: 'catalog/discountPlan',
  method: 'POST',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/discountPlan
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L47) -> catalog/discountPlan?discountPlanCode= | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/discountPlan?discountPlanCode=', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L67) -> catalog/discountPlan?discountPlanCode= | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/discountPlan?discountPlanCode=', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L31) -> catalog/discountPlan | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'POST', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L51) -> catalog/discountPlan | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L39) -> catalog/discountPlan | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'PUT', responseContainerId: 'entityId' } - ACTIVATE_STATUS (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L67) -> catalog/discountPlan | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L59) -> catalog/discountPlan | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'PUT', responseContainerId: 'entityId' } - ACTIVATE_STATUS (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L87) -> catalog/discountPlan | request: options: { method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /catalog/discountPlan

```text
getUpdateProvider({
  url: 'catalog/discountPlan',
  method: 'PUT',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/discountPlan
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L47) -> catalog/discountPlan?discountPlanCode= | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/discountPlan?discountPlanCode=', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L67) -> catalog/discountPlan?discountPlanCode= | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/discountPlan?discountPlanCode=', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L31) -> catalog/discountPlan | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'POST', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L51) -> catalog/discountPlan | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L39) -> catalog/discountPlan | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'PUT', responseContainerId: 'entityId' } - ACTIVATE_STATUS (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L67) -> catalog/discountPlan | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L59) -> catalog/discountPlan | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'PUT', responseContainerId: 'entityId' } - ACTIVATE_STATUS (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L87) -> catalog/discountPlan | request: options: { method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/discountPlan

```text
getDeleteProvider({
  url: 'catalog/discountPlan?discountPlanCode=',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/discountPlan
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L47) -> catalog/discountPlan?discountPlanCode= | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/discountPlan?discountPlanCode=', method: 'DELETE' } - DELETE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L67) -> catalog/discountPlan?discountPlanCode= | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'catalog/discountPlan?discountPlanCode=', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L31) -> catalog/discountPlan | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'POST', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L51) -> catalog/discountPlan | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L39) -> catalog/discountPlan | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'PUT', responseContainerId: 'entityId' } - ACTIVATE_STATUS (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L67) -> catalog/discountPlan | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L59) -> catalog/discountPlan | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlan', method: 'PUT', responseContainerId: 'entityId' } - ACTIVATE_STATUS (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L87) -> catalog/discountPlan | request: options: { method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/discountPlan

```text
getDeleteProvider({
  url: 'cpq/discountPlan/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/discountPlan
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-plans, catalog/discount-plans
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/discount-plans/provider/provider.js#L54) -> cpq/discountPlan/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/discountPlan/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/discount-plans/provider/provider.js#L74) -> cpq/discountPlan/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/discountPlan/', method: 'DELETE' }

### INACTIVATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/discountPlan/:code/disable`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ACTIVATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/discountPlan`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
