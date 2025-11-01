# VIEW095 — Politiques – PATH DUNNING POLICIES CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.404Z à partir de `tasks/vues/VIEW095.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Politiques
- Ressource : dunning-policies
- Clé / route : PATH_DUNNING_POLICIES_CREATE
- Type d'écran : Formulaire de création
- Menu : dunning (priorité 9)
- Icône : Policy

### Libellés
- FR : Politiques.
- EN : Policies.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunningPolicy

```text
getListV2({
  url: 'v2/generic/all/dunningPolicy',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunningPolicy
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies, finance/dunning-policies
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L29) -> v2/generic/all/dunningPolicy | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { minBalanceTrigger, ...restFilter } = filter; const transformedFilter = { ...restFilter, ...(!!minBalanceTrigger ? { SQL: `minBalanceTrigger=${minBalanceTrigger}` } : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L59) -> v2/generic/all/dunningPolicy | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L29) -> v2/generic/all/dunningPolicy | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L44) -> v2/generic/all/dunningPolicy | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/dunningPolicy

```text
getOneV2({
  url: 'v2/generic/dunningPolicy/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/dunningPolicy
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies, finance/dunning-policies
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L52) -> v2/generic/dunningPolicy/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/dunningPolicy/', responseContainer: 'data', nestedEntities } - GET_ONE (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L37) -> v2/generic/dunningPolicy/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/dunningPolicy/', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunningPolicy

```text
getListV2({
  url: 'v2/generic/all/dunningPolicy',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunningPolicy
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies, finance/dunning-policies
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L29) -> v2/generic/all/dunningPolicy | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { minBalanceTrigger, ...restFilter } = filter; const transformedFilter = { ...restFilter, ...(!!minBalanceTrigger ? { SQL: `minBalanceTrigger=${minBalanceTrigger}` } : {}) }; return { filter: transformedFilter, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L59) -> v2/generic/all/dunningPolicy | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L29) -> v2/generic/all/dunningPolicy | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L44) -> v2/generic/all/dunningPolicy | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningPolicy', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningPolicy

```text
getCreateProvider({
  url: 'v2/dunning/dunningPolicy',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningPolicy
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L97) -> v2/dunning/dunningPolicy/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningPolicy/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies, finance/dunning-policies
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L68) -> v2/dunning/dunningPolicy | response: responseContainerId: 'entityId' | helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningPolicy', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L53) -> v2/dunning/dunningPolicy | response: responseContainerId: 'entityId' | helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningPolicy', responseContainerId: 'entityId' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/dunning/dunningPolicy/{id}

```text
getCreateProvider({
  url: props => {
    const {
      params: {
        data
      }
    } = props;
    return `v2/dunning/dunningPolicy/${data.id}`;
  },
  responseContainerId: 'entityId',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningPolicy/${data.id}

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/dunning/dunningPolicy/{id}

```text
getDeleteProvider({
  url: params => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/${data.id}`;
  },
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningPolicy/${data.id}

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/dunning/dunningPolicy

```text
getDeleteProvider({
  url: 'v2/dunning/dunningPolicy/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningPolicy
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L97) -> v2/dunning/dunningPolicy/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningPolicy/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-policies, finance/dunning-policies
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L68) -> v2/dunning/dunningPolicy | response: responseContainerId: 'entityId' | helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningPolicy', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L53) -> v2/dunning/dunningPolicy | response: responseContainerId: 'entityId' | helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningPolicy', responseContainerId: 'entityId' }

### HISTORY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/AuditLog

```text
getListV2({
  url: 'v2/generic/all/AuditLog'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/AuditLog
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/audit-log, B2B-customer-care/dunning-policies, catalog/audit-log, finance/audit-log, finance/dunning-policies
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/audit-log/provider/provider.js#L39) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/audit-log/provider/provider.js#L47) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - HISTORY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L103) -> v2/generic/all/AuditLog | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog' } - GET_LIST (src/srcProject/layout/catalog/modules/audit-log/provider/provider.js#L46) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/catalog/modules/audit-log/provider/provider.js#L54) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_LIST (src/srcProject/layout/finance/modules/audit-log/provider/provider.js#L46) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/finance/modules/audit-log/provider/provider.js#L54) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - HISTORY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L88) -> v2/generic/all/AuditLog | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog' }

### ADD_RULE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningPolicy/addRules/{id}

```text
getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/addRules/${get(data, 'id')}`;
  },
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningPolicy/addRules/${get(data, 'id')}

### MASS_REACTIVATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningPolicy/deactivate

```text
getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/deactivate`;
  },
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningPolicy/deactivate

### ARCHIVE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/dunning/dunningPolicy/archive/{dunningPolicyId}

```text
getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/archive/${get(data, 'dunningPolicyId')}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningPolicy/archive/${get(data, 'dunningPolicyId')}

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
