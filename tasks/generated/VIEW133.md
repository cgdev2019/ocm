# VIEW133 — Encours de consommation – PATH OSHO EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.451Z à partir de `tasks/vues/VIEW133.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Encours de consommation
- Ressource : osho
- Clé / route : PATH_OSHO_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Encours de consommation.
- EN : Consumption.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ratedTransaction

```text
getListV2({
  url: 'v2/generic/all/ratedTransaction',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ratedTransaction
    - POST — Used in 12 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/encours-consommation, B2B-customer-care/osho, B2B-customer-care/rated-transactions, finance/rated-transactions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L18) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L25) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L42) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L18) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L25) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L42) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L16) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L23) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L30) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L23) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L30) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L37) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ratedTransaction

```text
getListV2({
  url: 'v2/generic/all/ratedTransaction',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ratedTransaction
    - POST — Used in 12 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/encours-consommation, B2B-customer-care/osho, B2B-customer-care/rated-transactions, finance/rated-transactions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L18) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L25) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L42) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L18) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L25) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L42) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L16) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L23) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L30) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L23) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L30) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L37) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/ratedTransaction

```text
getListV2({
  url: 'v2/generic/ratedTransaction/',
  responseContainer: 'data',
  nestedEntities,
  otherParams: {
    sortBy: 'serviceInstance.chargeInstances.id'
  }
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/ratedTransaction
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/encours-consommation, B2B-customer-care/osho
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L32) -> v2/generic/ratedTransaction/ | request: helper.nestedEntities: nestedEntities | helper.otherParams: { sortBy: 'serviceInstance.chargeInstances.id' } / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/ratedTransaction/', responseContainer: 'data', nestedEntities, otherParams: { sortBy: 'serviceInstance.chargeInstances.id' } } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L32) -> v2/generic/ratedTransaction/ | request: helper.nestedEntities: nestedEntities | helper.otherParams: { sortBy: 'serviceInstance.chargeInstances.id' } / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/ratedTransaction/', responseContainer: 'data', nestedEntities, otherParams: { sortBy: 'serviceInstance.chargeInstances.id' } }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ratedTransaction

```text
getListV2({
  url: 'v2/generic/all/ratedTransaction',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ratedTransaction
    - POST — Used in 12 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/encours-consommation, B2B-customer-care/osho, B2B-customer-care/rated-transactions, finance/rated-transactions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L18) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L25) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/encours-consommation/provider/provider.js#L42) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L18) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L25) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L42) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L16) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L23) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/rated-transactions/provider/provider.js#L30) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L23) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L30) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/rated-transactions/provider.js#L37) -> v2/generic/all/ratedTransaction | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/ratedTransaction', responseContainer: 'data', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /billing/subscription/applyOneShotChargeInstance

```text
getCreateProvider({
  url: 'billing/subscription/applyOneShotChargeInstance',
  responseContainer: '',
  nestedEntities: []
}).
```

- Opérations correspondantes :
  - Chemin /billing/subscription/applyOneShotChargeInstance
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/commercial-gestures, B2B-customer-care/osho
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/commercial-gestures/provider/provider.js#L24) -> billing/subscription/applyOneShotChargeInstance | request: helper.nestedEntities: [] / response: helper.responseContainer: '' / info: helper: getCreateProvider | helperArgs: { url: 'billing/subscription/applyOneShotChargeInstance', responseContainer: '', nestedEntities: [] } - CREATE (src/srcProject/layout/B2B-customer-care/modules/osho/provider/provider.js#L49) -> billing/subscription/applyOneShotChargeInstance | request: helper.nestedEntities: [] / response: helper.responseContainer: '' / info: helper: getCreateProvider | helperArgs: { url: 'billing/subscription/applyOneShotChargeInstance', responseContainer: '', nestedEntities: [] }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/billing/ratedTransaction/:id

```text
getUpdateProvider({
  url: 'v2/billing/ratedTransaction/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/billing/ratedTransaction/:id

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
