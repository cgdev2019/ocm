# VIEW158 — Dépôt de garantie – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.488Z à partir de `tasks/vues/VIEW158.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Dépôt de garantie
- Ressource : security-deposits
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Dépôt de garantie.
- EN : Security Deposit.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/SecurityDeposit

```text
getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/SecurityDeposit
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: finance/security-deposits-report
      - Description: - GET_SUM_CURRENCY (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L49) -> v2/generic/all/SecurityDeposit | response: responseContainer: 'data'
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/security-deposits, finance/security-deposits-report
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L58) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L67) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L86) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L28) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L35) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/SecurityDeposit

```text
getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/SecurityDeposit
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: finance/security-deposits-report
      - Description: - GET_SUM_CURRENCY (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L49) -> v2/generic/all/SecurityDeposit | response: responseContainer: 'data'
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/security-deposits, finance/security-deposits-report
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L58) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L67) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L86) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L28) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L35) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/SecurityDeposit

```text
getListV2({
  url: 'v2/generic/SecurityDeposit/',
  responseContainer: 'data',
  nestedEntities
  // otherParams: {
  //   sortBy: 'serviceInstance.chargeInstances.id'
  // }
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/SecurityDeposit
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/security-deposits, finance/security-deposits-report
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L76) -> v2/generic/SecurityDeposit/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/SecurityDeposit/', responseContainer: 'data', nestedEntities // otherParams: { // sortBy: 'serviceInstance.chargeInstances.id' // } } - GET_ONE (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L42) -> v2/generic/SecurityDeposit/ | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntitiesDetailed / info: helper: getOneV2 | helperArgs: { keyColumn, url: 'v2/generic/SecurityDeposit/', nestedEntities: nestedEntitiesDetailed }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/SecurityDeposit

```text
getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/SecurityDeposit
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: finance/security-deposits-report
      - Description: - GET_SUM_CURRENCY (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L49) -> v2/generic/all/SecurityDeposit | response: responseContainer: 'data'
    - POST — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/security-deposits, finance/security-deposits-report
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L58) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L67) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L86) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L28) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/security-deposits-report/provider/provider.js#L35) -> v2/generic/all/SecurityDeposit | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/SecurityDeposit', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/securityDeposit

```text
getCreateProvider({
  url: 'v2/securityDeposit',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/securityDeposit
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/security-deposits
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L94) -> v2/securityDeposit | request: helper.method: POST / response: responseContainer: 'newSecurityDeposit' | responseContainerId: responseContainerId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/securityDeposit', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/securityDeposit/:id

```text
getUpdateProvider({
  url: 'v2/securityDeposit/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/securityDeposit/:id

### INSTANTIATE_ACTION

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/securityDeposit/instantiateSecurityDeposit

```text
getCreateProvider({
  url: 'v2/securityDeposit/instantiateSecurityDeposit',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/securityDeposit/instantiateSecurityDeposit
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/security-deposits
      - Description: - INSTANTIATE_ACTION (src/srcProject/layout/B2B-customer-care/modules/security-deposits/provider/provider.js#L112) -> v2/securityDeposit/instantiateSecurityDeposit | request: helper.method: POST / response: responseContainer: 'newSecurityDeposit' | responseContainerId: responseContainerId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/securityDeposit/instantiateSecurityDeposit', method: 'POST' }

### CREDIT_ACTION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/securityDeposit/credit/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### REFUND_ACTION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/securityDeposit/refund/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL_ACTION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/securityDeposit/cancel/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
