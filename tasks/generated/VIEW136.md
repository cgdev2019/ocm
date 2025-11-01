# VIEW136 — Plans de paiement – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.454Z à partir de `tasks/vues/VIEW136.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Plans de paiement
- Ressource : payment-plans
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Plans de paiement.
- EN : Payment Plans.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PaymentPlan

```text
getListV2({
  url: 'v2/generic/all/PaymentPlan',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PaymentPlan
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L195) -> v2/generic/all/PaymentPlan | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L206) -> v2/generic/all/PaymentPlan | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L230) -> v2/generic/all/PaymentPlan | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PaymentPlan

```text
getListV2({
  url: 'v2/generic/all/PaymentPlan',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PaymentPlan
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L195) -> v2/generic/all/PaymentPlan | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L206) -> v2/generic/all/PaymentPlan | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L230) -> v2/generic/all/PaymentPlan | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/PaymentPlan

```text
getListV2({
  url: 'v2/generic/PaymentPlan/',
  responseContainer: 'data',
  nestedEntities,
  // otherParams: {
  //   sortBy: 'serviceInstance.chargeInstances.id'
  // }
  prepareParams,
  //transformResponse: getOneTestData
  transformResponse
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/PaymentPlan
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L217) -> v2/generic/PaymentPlan/ | request: helper.nestedEntities: nestedEntities | helper.prepareParams: prepareParams | helper.transformResponse: transformResponse / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/PaymentPlan/', responseContainer: 'data', nestedEntities, // otherParams: { // sortBy: 'serviceInstance.chargeInstances.id' // } prepareParams, //transformResponse: getOneTestData transformResponse }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PaymentPlan

```text
getListV2({
  url: 'v2/generic/all/PaymentPlan',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PaymentPlan
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L195) -> v2/generic/all/PaymentPlan | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L206) -> v2/generic/all/PaymentPlan | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L230) -> v2/generic/all/PaymentPlan | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PaymentPlan', responseContainer: 'data', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/payment-plan

```text
getCreateProvider({
  url: 'v2/payment-plan/',
  responseContainerId: 'entityId',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/payment-plan
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L257) -> v2/payment-plan/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/payment-plan/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L237) -> v2/payment-plan/ | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/payment-plan/', responseContainerId: 'entityId', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/payment-plan/:id

```text
getUpdateProvider({
  url: 'v2/payment-plan/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/payment-plan/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/payment-plan

```text
getDeleteProvider({
  url: 'v2/payment-plan/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/payment-plan
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L257) -> v2/payment-plan/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/payment-plan/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-plans
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-plans/provider/provider.js#L237) -> v2/payment-plan/ | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/payment-plan/', responseContainerId: 'entityId', method: 'POST' }

### ACTIVATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/payment-plan/:id/activate`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_PAYMENT_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/payment-plan`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
