# VIEW114 — Devis – PATH CLIENTS DETAILS

_Tâche générée automatiquement le 2025-11-01T00:49:51.423Z à partir de `tasks/vues/VIEW114.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Devis
- Ressource : mdp-clients
- Clé / route : PATH_CLIENTS_DETAILS
- Type d'écran : clients details
- Icône : ChromeReaderMode

### Libellés
- FR : Devis.
- EN : Quotes.

## Fournisseurs et API associées

### GET_CLIENT_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/customer`.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_EXECUTED_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_SERVICE_EXECUTANT`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### POST_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /customTable/createOrUpdate

```text
getCreateProvider({
  url: 'customTable/createOrUpdate',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /customTable/createOrUpdate
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/coast-center, B2B-customer-care/mdp-clients
      - Description: - POST_CENTRE_COUT_MULTI (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L79) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' } - PUT_CENTRE_COUT_MULTI (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L86) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getUpdateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' } - POST_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L25) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' } - PUT_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L32) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getUpdateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' }

### PUT_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /customTable/createOrUpdate

```text
getUpdateProvider({
  url: 'customTable/createOrUpdate',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /customTable/createOrUpdate
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/coast-center, B2B-customer-care/mdp-clients
      - Description: - POST_CENTRE_COUT_MULTI (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L79) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' } - PUT_CENTRE_COUT_MULTI (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L86) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getUpdateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' } - POST_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L25) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' } - PUT_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L32) -> customTable/createOrUpdate | request: helper.method: POST / info: helper: getUpdateProvider | helperArgs: { url: 'customTable/createOrUpdate', method: 'POST' }

### DELETE_EXECUTED_SERVICE_AND_LEGAL_COMMITMENT

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /customTable

```text
getDeleteProvider({
  url: ({
    params
  }) => {
    return `customTable`;
  },
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /customTable
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/pod-event
      - Description: - PUT_CE_PLAN_VALIDATION (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1346) -> customTable | request: options: { method: 'PUT' } - MODIFICATION (src/srcProject/layout/B2B-customer-care/modules/pod-event/provider/provider.js#L31) -> customTable | request: bodyParams: {} | helper.method: PUT / info: appendParamsToBody: false | helper: getUpdateProvider | helperArgs: { url: 'customTable', method: 'PUT' }

### GET_LEGAL_COMMITMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_ENGAGEMENT_JURIDIQUE`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/CpqQuote

```text
getListV2({
  url: 'v2/generic/all/CpqQuote',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/CpqQuote
    - POST — Used in 24 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L55) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L79) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L86) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L32) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L56) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L63) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L32) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L56) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L63) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L13) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L37) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L44) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L13) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L37) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L44) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/CpqQuote

```text
getListV2({
  url: 'v2/generic/all/CpqQuote',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/CpqQuote
    - POST — Used in 24 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L55) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L79) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L86) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L32) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L56) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L63) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L32) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L56) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L63) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L13) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L37) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L44) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L13) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L37) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L44) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/CpqQuote

```text
getListV2({
  url: 'v2/generic/all/CpqQuote',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/CpqQuote
    - POST — Used in 24 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L55) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L79) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L86) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L32) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L56) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L63) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L32) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L56) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L63) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L17) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L41) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L48) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L13) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L37) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L44) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L13) -> v2/generic/all/CpqQuote | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to') }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L37) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L44) -> v2/generic/all/CpqQuote | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/CpqQuote', nestedEntities, keyColumn: 'code' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /cpq/quotes

```text
getOneV2({
  url: 'cpq/quotes/',
  keyColumn: 'code',
  nestedEntities
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

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/quotes

```text
getCreateProvider({
  url: 'cpq/quotes',
  method: 'POST',
  responseContainer: 'quoteDto'
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
- Cibles détectées :
  - /cpq/quotes

```text
getUpdateProvider({
  url: 'cpq/quotes',
  method: 'PUT'
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

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /api/rest/cpq/quotes

```text
getDeleteProvider({
  url: ({
    params
  }) => {
    return `/api/rest/cpq/quotes/`;
  },
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /api/rest/cpq/quotes
    - DELETE — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L126) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L103) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L103) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L88) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L88) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L88) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L84) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L75) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L82) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /api/rest/cpq/quotes

```text
getDeleteProvider({
  url: '/api/rest/cpq/quotes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /api/rest/cpq/quotes
    - DELETE — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes, B2B-customer-care/quotes-old
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L126) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L103) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L103) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L88) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L88) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L88) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L84) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L75) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/quotes-old/provider/provider.js#L82) -> /api/rest/cpq/quotes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/cpq/quotes/', method: 'DELETE' }

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:code/status/:toStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_VERSION_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteVersions/:quoteCode/:version/status/:toStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteVersions`.
```

- Aucune opération correspondante dans `complement-api.json`.

### PLACE_ORDER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:quoteCode/quoteVersions/:version/orderPlacement`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/:quoteCode/:version/duplication`.
```

- Aucune opération correspondante dans `complement-api.json`.

### QUOTATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteVersions/:code/:version/quotation`, options {"method":"POST"}.
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

### QUOTE_PRICE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/QuotePrice

```text
getListV2({
  url: 'v2/generic/all/QuotePrice',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/QuotePrice
    - POST — Used in 7 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume, B2B-customer-care/quotes
      - Description: - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L181) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' } - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L158) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' } - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L158) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' } - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L143) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' } - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L143) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' } - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L143) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' } - QUOTE_PRICE (src/srcProject/layout/B2B-customer-care/modules/quotes/provider/provider.js#L162) -> v2/generic/all/QuotePrice | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/QuotePrice', nestedEntities, keyColumn: 'code' }

### GET_QUOTE_OFFER_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/QuoteOffer`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_QUOTE_VERSION_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/quoteVersion`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SUBSCRIPTIONS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `abonnement/`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_IP_LIST_UPDATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `dashboardInfos`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_IP_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/ce_ip_mep`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_INFOS_VENDEUR

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `infosVendeur/:clientDonneurOrdreId/:createurDevisId`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CSV

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_RAT_FDV_PORT`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CLIENTID_BY_CODE_PORTEFEUILLE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_AFF_CL_PF`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SELLER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `seller?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SELLER_BY_CODE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `seller/findByCode?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_INFOS_INTERLOCUTEURS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_INTERLOCUTEUR`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CUSTOMER_BY_ID

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_INVOICE_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/invoice`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ONE_BILLING_ACCOUNT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `account/billingAccount/list`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_INETR_IDS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `RechercheClientParInterlocuteur/interlocuteur?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ADD_PAYMENT_METHOD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `payment/paymentMethod`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_PAYMENT_METHOD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `payment/paymentMethod`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_DEFAULT_BILLING_ACC

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `updateDefaultBillingAccount`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CSV_BY_ID_CLIENTS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customer/infos`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SYNCHRO_CLIENT_LP

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `bpel/api_sivente/customers_lp`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SYNCHRO_CLIENT_LP_PUT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `bpel/api_sivente/customers_lp`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
