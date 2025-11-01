# VIEW082 — Clients – New/:client Code

_Tâche générée automatiquement le 2025-11-01T00:49:51.395Z à partir de `tasks/vues/VIEW082.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Clients
- Ressource : CPQquotes
- Clé / route : new/:clientCode
- Type d'écran : Vue composite
- Icône : Style

### Libellés
- FR : Clients.
- EN : Clients.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/cpqQuote

```text
getListV2({
  url: 'v2/generic/all/cpqQuote',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/cpqQuote
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L816) -> v2/generic/all/cpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cpqQuote', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L824) -> v2/generic/all/cpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cpqQuote', nestedEntities, keyColumn: 'id' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/cpqQuote

```text
getListV2({
  url: 'v2/generic/all/cpqQuote',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/cpqQuote
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L816) -> v2/generic/all/cpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cpqQuote', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L824) -> v2/generic/all/cpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/cpqQuote', nestedEntities, keyColumn: 'id' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/cpqQuote

```text
getOneV2({
  url: 'v2/generic/cpqQuote/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/cpqQuote
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L832) -> v2/generic/cpqQuote/ | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse / info: keyColumn: 'id' | helper: getOneV2 | helperArgs: { url: 'v2/generic/cpqQuote/', nestedEntities }

### GET_QUOTE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:code`, options {"method":"GET"}, post-traitement de la réponse.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CLIENT_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `account/billingAccount/list?customerAccountCode=TEST_C_UA`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CLIENT_CONTRACT

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/user

```text
getOneV2({
  url: 'v2/generic/all/user/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/user
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_CLIENT_CONTRACT (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L860) -> v2/generic/all/user/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: 'code' | helper: getOneV2 | helperArgs: { url: 'v2/generic/all/user/', nestedEntities }
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/users, finance/query-scheduler, operation/query-scheduler
      - Description: - GET_USER (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1130) -> v2/generic/all/user | response: helper.responseContainer: data / info: keyColumn: 'id' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/user' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/users/provider/provider.js#L20) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/users/provider/provider.js#L24) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/users/provider/provider.js#L27) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/query-scheduler/provider/provider.js#L11) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'userName' / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities, keyColumn: 'userName' } - GET_MANY (src/srcProject/layout/finance/modules/query-scheduler/provider/provider.js#L19) -> v2/generic/all/user | request: prepareParams: params => { return { ...params, referenceFieldId: 'userName' }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/query-scheduler/provider/provider.js#L11) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'userName' / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities, keyColumn: 'userName' } - GET_MANY (src/srcProject/layout/operation/modules/query-scheduler/provider/provider.js#L19) -> v2/generic/all/user | request: prepareParams: params => { return { ...params, referenceFieldId: 'userName' }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/quotes

```text
getCreateProvider({
  url: 'cpq/quotes',
  method: 'POST',
  responseContainer: 'quoteDto',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/quotes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1123) -> cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1127) -> cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/', method: 'DELETE' }
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L865) -> cpq/quotes | request: prepareParams: prepareParams | helper.method: POST / response: helper.responseContainer: quoteDto | helper.responseContainerId: id / info: excludeProperties: ['fieldsDefinition'] | helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto', responseContainerId: 'id' } - AUTO_CREATION (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1397) -> cpq/quotes | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L102) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L79) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L79) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L60) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L60) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' }
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L94) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L71) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L71) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L52) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L52) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities }
    - PUT — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - UPDATE_QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1326) -> cpq/quotes | request: prepareParams: prepareParamsQuoteUpdate | options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L110) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L87) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L87) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L68) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L68) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_STATUS_QUOTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/overlay/:code/status/IN_PROGRESS_2_APPR`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPLOAD_SIGNED_QUOTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPLOAD_MEDIA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_ACCEPTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_REFUSE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE_DATA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### MISE_EN_PROD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### RESTART_VALIDATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_AND_ABANDON

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_AND_CANCEL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/quotes

```text
getDeleteProvider({
  url: 'cpq/quotes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/quotes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1123) -> cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1127) -> cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/', method: 'DELETE' }
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L865) -> cpq/quotes | request: prepareParams: prepareParams | helper.method: POST / response: helper.responseContainer: quoteDto | helper.responseContainerId: id / info: excludeProperties: ['fieldsDefinition'] | helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto', responseContainerId: 'id' } - AUTO_CREATION (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1397) -> cpq/quotes | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L102) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L79) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L79) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L60) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L60) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' }
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L94) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L71) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L71) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L52) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L52) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities }
    - PUT — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - UPDATE_QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1326) -> cpq/quotes | request: prepareParams: prepareParamsQuoteUpdate | options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L110) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L87) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L87) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L68) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L68) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/quotes

```text
getDeleteProvider({
  url: 'cpq/quotes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/quotes
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1123) -> cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1127) -> cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/', method: 'DELETE' }
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L865) -> cpq/quotes | request: prepareParams: prepareParams | helper.method: POST / response: helper.responseContainer: quoteDto | helper.responseContainerId: id / info: excludeProperties: ['fieldsDefinition'] | helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto', responseContainerId: 'id' } - AUTO_CREATION (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1397) -> cpq/quotes | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L102) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L79) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L79) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L64) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L60) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L60) -> cpq/quotes | request: helper.method: POST / response: helper.responseContainer: quoteDto / info: helper: getCreateProvider | helperArgs: { url: 'cpq/quotes', method: 'POST', responseContainer: 'quoteDto' }
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L94) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L71) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L71) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L56) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L52) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L52) -> cpq/quotes/ | request: helper.keyColumn: 'code' | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'cpq/quotes/', keyColumn: 'code', nestedEntities }
    - PUT — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - UPDATE_QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1326) -> cpq/quotes | request: prepareParams: prepareParamsQuoteUpdate | options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L110) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L87) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L87) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L72) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L68) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L68) -> cpq/quotes | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes', method: 'PUT' }

### GET_USER

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/user

```text
getListV2({
  url: 'v2/generic/all/user'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/user
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_CLIENT_CONTRACT (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L860) -> v2/generic/all/user/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: 'code' | helper: getOneV2 | helperArgs: { url: 'v2/generic/all/user/', nestedEntities }
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/users, finance/query-scheduler, operation/query-scheduler
      - Description: - GET_USER (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1130) -> v2/generic/all/user | response: helper.responseContainer: data / info: keyColumn: 'id' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/user' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/users/provider/provider.js#L20) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/users/provider/provider.js#L24) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/users/provider/provider.js#L27) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/query-scheduler/provider/provider.js#L11) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'userName' / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities, keyColumn: 'userName' } - GET_MANY (src/srcProject/layout/finance/modules/query-scheduler/provider/provider.js#L19) -> v2/generic/all/user | request: prepareParams: params => { return { ...params, referenceFieldId: 'userName' }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities } - GET_LIST (src/srcProject/layout/operation/modules/query-scheduler/provider/provider.js#L11) -> v2/generic/all/user | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'userName' / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities, keyColumn: 'userName' } - GET_MANY (src/srcProject/layout/operation/modules/query-scheduler/provider/provider.js#L19) -> v2/generic/all/user | request: prepareParams: params => { return { ...params, referenceFieldId: 'userName' }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/user', nestedEntities }

### GET_DEVICE_DETAILS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFER_DETAILS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/offerTemplate?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFER_TEMPLATES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/chargeTemplates/`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:code/status/:toStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:quoteCode/:version/duplication`.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_QUOTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteVersions`.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_VERSION_API

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `duplication/duplicateVersion/:quoteCode/:version`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### QUOTATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteVersions/:code/:version/v2/quotation`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteVersions/:code/:version/xmlGeneration?generatePdf=:generateState`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLOAD_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `admin/files/downloadFile?file=quotes/pdf/:fileName`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLOAD_XSL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `admin/files/downloadFile?file=quotes/pdf/xlsx/:fileName`, options {"method":"GET","responseType":"blob"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CE_PROPERTIES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_PROPERTIES`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CE_ANNEXE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `annexe/list/:quoteVersionId`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CONDITIONS_PAYMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `managePayment/:clientDonneurId/:clientFactureId/:montantHT/:totalChargesOther?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SEND_PAYMENT_LINK

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `sendLink/:idDevis/:idBillingAccount`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SEND_LINK_CB

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ENVOI_FACTURE_DUPLICATA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ENVOI_DEVIS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `SendEmailDevis/:idDevis/:idInterlocuteur`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DATE_LIMITE_SIGN_DEVIS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `dateLimiteSignatureDevis/:codeQuote`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INIT_CPQ_QUOTE_DATA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `initCPQquoteData`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_QUOTE_API

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `duplication/duplicateQuote/:quoteCode/:version/:avenant`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_QUOTE_APIS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `duplication/duplicateQuote/:quoteCode/:version/:avenant`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_PRESTATION_APIS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `duplication/duplicateQuote/:quoteCode/:version/:avenant/:quoteItemId`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_BON_COMMANDE_API

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `updateBonDeCommande/:quoteId`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SELLER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `seller?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:code/status/:newStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE_STATUS_OVERLAY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/overlay/:code/status/:newStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE_PRICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_PRICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quotePrices/override`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CE_PLAN_VALIDATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_PLAN_DE_VALIDATION`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### PUT_CE_PLAN_VALIDATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RELANCE_VALIDATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `reminderValidation/:quoteId`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GED_DISCOUNTS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/discountPlan`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTES_CONTRACT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/discountPlan`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CONTRACT_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE_CONTENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### AUTO_CREATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INIT_CPQ_QUOTE_DATA_V2

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `initCPQquoteData/V2?create=true`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_BILLING_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billingInvoice/:idDevis`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLOAD_INVOICE_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `invoice/fetchPdfInvoice`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_USER_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `user/list`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### PUT_CUSTOMER_DATA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `account/customer`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RESEND_E_SIGNATURE_LINK

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SELLER_INFO

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CAUTION_CHARGE_TEMPLATES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/chargeTemplate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### LIST_REMPLACANT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `absences/substitute_by_plan_id/:planId`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### APPLY_ONESHOT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `mdpSubscription/applyExtraCharge`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
