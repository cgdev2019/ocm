# VIEW097 — Paramètres – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.406Z à partir de `tasks/vues/VIEW097.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Paramètres
- Ressource : dunning-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : dunning (priorité 9)
- Icône : Settings

### Libellés
- FR : Paramètres.
- EN : Settings.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningSettings

```text
getListV2({
  url: 'v2/generic/all/DunningSettings',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/DunningSettings
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L51) -> v2/generic/all/DunningSettings | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningSettings', responseContainer: 'data', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/DunningSettings

```text
getOneV2({
  url: 'v2/generic/DunningSettings/',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/DunningSettings
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L58) -> v2/generic/DunningSettings/ | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/DunningSettings/', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunning

```text
getListV2({
  url: 'v2/generic/all/dunning',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunning
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L66) -> v2/generic/all/dunning | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunning', responseContainer: 'data', nestedEntities, keyColumn: 'code' }

### COLLECTION_PLAN_STATUS

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/dunning/collectionPlanStatus

```text
getCreateProvider({
  url: 'v2/dunning/collectionPlanStatus',
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/collectionPlanStatus
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - COLLECTION_PLAN_STATUS (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L74) -> v2/dunning/collectionPlanStatus | request: helper.keyColumn: 'id' / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/collectionPlanStatus', keyColumn: 'id' }

### COLLECTION_PLAN_STATUS_UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_PLAN_STATUS', props),
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### COLLECTION_PLAN_STATUS_DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_PLAN_STATUS', props),
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### COLLECTION_MANAGMENT

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/dunning/dunningAgent

```text
getCreateProvider({
  url: 'v2/dunning/dunningAgent'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningAgent
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - COLLECTION_MANAGMENT (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L93) -> v2/dunning/dunningAgent | info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningAgent' }

### COLLECTION_MANAGMENT_UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_MANAGMENT', props),
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### COLLECTION_MANAGMENT_DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_MANAGMENT', props),
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### PAYMENT_RETRIES

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/dunning/paymentRetry

```text
getCreateProvider({
  url: 'v2/dunning/paymentRetry',
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/paymentRetry
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - PAYMENT_RETRIES (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L112) -> v2/dunning/paymentRetry | request: helper.keyColumn: 'id' / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/paymentRetry', keyColumn: 'id' }

### PAYMENT_RETRIES_UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('PAYMENT_RETRIES', props),
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### PAYMENT_RETRIES_DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('PAYMENT_RETRIES', props),
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### STOP_REASON

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/dunning/stopReason

```text
getCreateProvider({
  url: 'v2/dunning/stopReason'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/stopReason
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - STOP_REASON (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L132) -> v2/dunning/stopReason | info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/stopReason' }

### STOP_REASON_UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('STOP_REASON', props),
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### STOP_REASON_DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('STOP_REASON', props),
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### PAUSE_REASON

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/dunning/pauseReason

```text
getCreateProvider({
  url: 'v2/dunning/pauseReason'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/pauseReason
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - PAUSE_REASON (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L151) -> v2/dunning/pauseReason | info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/pauseReason' }

### PAUSE_REASON_UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('PAUSE_REASON', props),
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### PAUSE_REASON_DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('PAUSE_REASON', props),
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_STATUS

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/dunning/invoiceStatus

```text
getCreateProvider({
  url: 'v2/dunning/invoiceStatus',
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/invoiceStatus
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - INVOICE_STATUS (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L170) -> v2/dunning/invoiceStatus | request: helper.keyColumn: 'id' / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/invoiceStatus', keyColumn: 'id' }

### INVOICE_STATUS_UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('INVOICE_STATUS', props),
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_STATUS_DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getCreateProvider({
  url: props => getUrlByEntityType('INVOICE_STATUS', props),
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/payment/dunning

```text
getCreateProvider({
  url: 'v2/payment/dunning'
}).
```

- Opérations correspondantes :
  - Chemin /v2/payment/dunning
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L201) -> v2/payment/dunning/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/payment/dunning/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L207) -> v2/payment/dunning/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/payment/dunning/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L189) -> v2/payment/dunning | info: helper: getCreateProvider | helperArgs: { url: 'v2/payment/dunning' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/payment/dunning/:id

```text
getCreateProvider({
  url: 'v2/payment/dunning/:id',
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/payment/dunning/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/payment/dunning

```text
getDeleteProvider({
  url: 'v2/payment/dunning/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/payment/dunning
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L201) -> v2/payment/dunning/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/payment/dunning/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L207) -> v2/payment/dunning/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/payment/dunning/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L189) -> v2/payment/dunning | info: helper: getCreateProvider | helperArgs: { url: 'v2/payment/dunning' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/payment/dunning

```text
getDeleteProvider({
  url: 'v2/payment/dunning/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/payment/dunning
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L201) -> v2/payment/dunning/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/payment/dunning/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L207) -> v2/payment/dunning/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/payment/dunning/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-settings
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-settings/provider/provider.js#L189) -> v2/payment/dunning | info: helper: getCreateProvider | helperArgs: { url: 'v2/payment/dunning' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
