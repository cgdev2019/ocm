# VIEW135 — Payment Methods – PATH PAYMENT METHODS EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.453Z à partir de `tasks/vues/VIEW135.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Payment Methods
- Ressource : payment-methods
- Clé / route : PATH_PAYMENT_METHODS_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Payment Methods.
- EN : Payment Methods.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/paymentMethod

```text
getListV2({
  url: 'v2/generic/all/paymentMethod',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/paymentMethod
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L27) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L38) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', responseContainer: 'data', nestedEntities, genericFields } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L46) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', responseContainer: 'data', nestedEntities, genericFields }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/paymentMethod

```text
getOneV2({
  url: 'v2/generic/paymentMethod/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/paymentMethod
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L31) -> v2/generic/paymentMethod/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/paymentMethod/', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/paymentMethod

```text
getListV2({
  url: 'v2/generic/all/paymentMethod',
  responseContainer: 'data',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/paymentMethod
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L27) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L38) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', responseContainer: 'data', nestedEntities, genericFields } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L46) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', responseContainer: 'data', nestedEntities, genericFields }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/paymentMethod

```text
getListV2({
  url: 'v2/generic/all/paymentMethod',
  responseContainer: 'data',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/paymentMethod
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L27) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L38) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', responseContainer: 'data', nestedEntities, genericFields } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L46) -> v2/generic/all/paymentMethod | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/paymentMethod', responseContainer: 'data', nestedEntities, genericFields }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /payment/paymentMethod

```text
getCreateProvider({
  url: 'payment/paymentMethod',
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /payment/paymentMethod
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L79) -> payment/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', responseContainer: 'data', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts, B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L436) -> payment/paymentMethod | request: helper.method: POST / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', method: 'POST' } - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L303) -> payment/paymentMethod | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L54) -> payment/paymentMethod | request: helper.keyColumn: keyColumn / response: responseContainer: 'paymentMethod' / info: helper: getCreateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - UPDATE_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L309) -> payment/paymentMethod | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L61) -> payment/paymentMethod | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn, method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /payment/paymentMethod

```text
getUpdateProvider({
  url: 'payment/paymentMethod',
  keyColumn,
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /payment/paymentMethod
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L79) -> payment/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', responseContainer: 'data', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts, B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L436) -> payment/paymentMethod | request: helper.method: POST / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', method: 'POST' } - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L303) -> payment/paymentMethod | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L54) -> payment/paymentMethod | request: helper.keyColumn: keyColumn / response: responseContainer: 'paymentMethod' / info: helper: getCreateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - UPDATE_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L309) -> payment/paymentMethod | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L61) -> payment/paymentMethod | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn, method: 'PUT' }

### DELETE_PAYMENT_METHOD

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /payment/paymentMethod

```text
getDeleteProvider({
  url: ({
    params
  }) => {
    const {
      data: {
        id
      }
    } = params;
    return `payment/paymentMethod?id=${id}`;
  },
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /payment/paymentMethod
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L79) -> payment/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', responseContainer: 'data', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts, B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L436) -> payment/paymentMethod | request: helper.method: POST / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', method: 'POST' } - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L303) -> payment/paymentMethod | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L54) -> payment/paymentMethod | request: helper.keyColumn: keyColumn / response: responseContainer: 'paymentMethod' / info: helper: getCreateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - UPDATE_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L309) -> payment/paymentMethod | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L61) -> payment/paymentMethod | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn, method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /payment/paymentMethod

```text
getDeleteProvider({
  url: 'payment/paymentMethod',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /payment/paymentMethod
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L79) -> payment/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', responseContainer: 'data', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts, B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L436) -> payment/paymentMethod | request: helper.method: POST / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', method: 'POST' } - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L303) -> payment/paymentMethod | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L54) -> payment/paymentMethod | request: helper.keyColumn: keyColumn / response: responseContainer: 'paymentMethod' / info: helper: getCreateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - UPDATE_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L309) -> payment/paymentMethod | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L61) -> payment/paymentMethod | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn, method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
