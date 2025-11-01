# VIEW334 — Opérations de portefeuille – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.617Z à partir de `tasks/vues/VIEW334.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Opérations de portefeuille
- Ressource : wallet-operations
- Clé / route : list
- Type d'écran : Liste simple

### Libellés
- FR : Opérations de portefeuille.
- EN : Wallet operations.

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

### GET_MANY_REFERENCE

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

### TO_RERATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/rating/walletOperation/markToRerate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### JOB_EXECUTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execute`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
