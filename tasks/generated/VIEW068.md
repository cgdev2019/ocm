# VIEW068 — Centre de coût – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.384Z à partir de `tasks/vues/VIEW068.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Centre de coût
- Ressource : coast-center
- Clé / route : list
- Type d'écran : Liste simple
- Icône : FilterNone

### Libellés
- FR : Centre de coût.
- EN : Coast Center.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /customTable/list/CE_CENTRE_DE_COUT

```text
getListV2({
  url: 'customTable/list/CE_CENTRE_DE_COUT',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /customTable/list/CE_CENTRE_DE_COUT
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/coast-center
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L14) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L30) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L47) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /customTable/list/CE_CENTRE_DE_COUT

```text
getListV2({
  url: 'customTable/list/CE_CENTRE_DE_COUT',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /customTable/list/CE_CENTRE_DE_COUT
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/coast-center
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L14) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L30) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L47) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /customTable/list/CE_CENTRE_DE_COUT

```text
getListV2({
  url: 'customTable/list/CE_CENTRE_DE_COUT',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /customTable/list/CE_CENTRE_DE_COUT
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/coast-center
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L14) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L30) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/coast-center/provider/provider.js#L47) -> customTable/list/CE_CENTRE_DE_COUT | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_CENTRE_DE_COUT' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_CENTRE_DE_COUT', nestedEntities }

### GET_CENTRE_COUT_MULTI

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_CENTRE_DE_COUT_MULTI`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_CENTRE_COUT_MULTI

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

### POST_CENTRE_COUT_MULTI

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

### PUT_CENTRE_COUT_MULTI

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

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
