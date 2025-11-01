# VIEW161 — Abonnements – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.494Z à partir de `tasks/vues/VIEW161.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Abonnements
- Ressource : subscriptions
- Clé / route : list
- Type d'écran : Liste simple
- Icône : ChromeReaderMode

### Libellés
- FR : Abonnements.
- EN : Subscriptions.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/subscription

```text
getListV2({
  url: 'v2/generic/all/subscription',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/subscription
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_SUBSCRIPTIONS (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L93) -> v2/generic/all/subscription | response: responseContainer: 'data'
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L35) -> v2/generic/all/subscription | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { search, ...restFilter } = filter; const transformDateFilters = key => get(filter, key) && { [key]: getGenericFormatDate(get(filter, key)) }; const transformedFilters = { filter: { ...restFilter, 'or code userAccount.code description': search, ...transformDateFilters('subscriptionDate'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L64) -> v2/generic/all/subscription | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', keyColumn, nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L71) -> v2/generic/all/subscription | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', keyColumn, nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/subscription

```text
getListV2({
  url: 'v2/generic/all/subscription',
  keyColumn,
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/subscription
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_SUBSCRIPTIONS (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L93) -> v2/generic/all/subscription | response: responseContainer: 'data'
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L35) -> v2/generic/all/subscription | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { search, ...restFilter } = filter; const transformDateFilters = key => get(filter, key) && { [key]: getGenericFormatDate(get(filter, key)) }; const transformedFilters = { filter: { ...restFilter, 'or code userAccount.code description': search, ...transformDateFilters('subscriptionDate'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L64) -> v2/generic/all/subscription | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', keyColumn, nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L71) -> v2/generic/all/subscription | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', keyColumn, nestedEntities }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/subscription

```text
getListV2({
  url: 'v2/generic/all/subscription',
  keyColumn,
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/subscription
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_SUBSCRIPTIONS (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L93) -> v2/generic/all/subscription | response: responseContainer: 'data'
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L35) -> v2/generic/all/subscription | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { search, ...restFilter } = filter; const transformDateFilters = key => get(filter, key) && { [key]: getGenericFormatDate(get(filter, key)) }; const transformedFilters = { filter: { ...restFilter, 'or code userAccount.code description': search, ...transformDateFilters('subscriptionDate'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L64) -> v2/generic/all/subscription | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', keyColumn, nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L71) -> v2/generic/all/subscription | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/subscription', keyColumn, nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/subscription

```text
getOneV2({
  url: 'v2/generic/subscription/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/subscription
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L78) -> v2/generic/subscription/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/subscription/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /billing/subscription/subscribeAndInstantiateProducts

```text
getCreateProvider({
  url: 'billing/subscription/subscribeAndInstantiateProducts',
  method: 'POST',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /billing/subscription/subscribeAndInstantiateProducts
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L85) -> billing/subscription/subscribeAndInstantiateProducts | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'billing/subscription/subscribeAndInstantiateProducts', method: 'POST', responseContainerId: 'entityId' }

### GET_SUBSCRIPTIONS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/subscription`.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /billing/subscription

```text
getUpdateProvider({
  url: 'billing/subscription',
  method: 'PUT',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /billing/subscription
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/subscriptions
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/subscriptions/provider/provider.js#L97) -> billing/subscription | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'billing/subscription', method: 'PUT', responseContainerId: 'entityId' }

### DELETE_SI

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /billing/subscription/:id/delete-si

```text
getUpdateProvider({
  url: 'billing/subscription/:id/delete-si',
  method: 'DELETE',
  responseContainerId: 'entityId'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - billing/subscription/:id/delete-si

### TERMINATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/terminate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TERMINATE_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/terminateServices`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SUSPEND_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/suspendServices`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ACTIVATE_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/activateServices`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RESUME_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/resumeServices`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ACTIVATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/resume`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SUSPEND

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/suspend`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CHANGE_OFFER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PATCH"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CHANGE_CONSUMER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ROLLBACK

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PATCH"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
