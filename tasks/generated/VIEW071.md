# VIEW071 — Gestes commerciaux – PATH COMMERCIAL GESTURE CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.386Z à partir de `tasks/vues/VIEW071.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Gestes commerciaux
- Ressource : commercial-gestures
- Clé / route : PATH_COMMERCIAL_GESTURE_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Gestes commerciaux.
- EN : Commercial gestures.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/walletOperation

```text
getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/walletOperation
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/commercial-gestures, B2B-customer-care/wallet-operations, operation/wallet-operations
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/commercial-gestures/provider/provider.js#L10) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/commercial-gestures/provider/provider.js#L17) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/wallet-operations/provider/provider.js#L12) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/wallet-operations/provider/provider.js#L19) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/wallet-operations/provider/provider.js#L26) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/wallet-operations/provider/provider.js#L46) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/wallet-operations/provider/provider.js#L54) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/wallet-operations/provider/provider.js#L61) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/walletOperation

```text
getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/walletOperation
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/commercial-gestures, B2B-customer-care/wallet-operations, operation/wallet-operations
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/commercial-gestures/provider/provider.js#L10) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/commercial-gestures/provider/provider.js#L17) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/wallet-operations/provider/provider.js#L12) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/wallet-operations/provider/provider.js#L19) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/wallet-operations/provider/provider.js#L26) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/wallet-operations/provider/provider.js#L46) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/wallet-operations/provider/provider.js#L54) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/operation/modules/wallet-operations/provider/provider.js#L61) -> v2/generic/all/walletOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/walletOperation', responseContainer: 'data', nestedEntities }

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

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
