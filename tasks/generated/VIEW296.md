# VIEW296 — Consommateurs – PATH USERACCOUNT EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.595Z à partir de `tasks/vues/VIEW296.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Consommateurs
- Ressource : user-accounts
- Clé / route : PATH_USERACCOUNT_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Consommateurs.
- EN : Consumer.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/userAccount

```text
getListV2({
  url: 'v2/generic/all/userAccount',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/userAccount
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L131) -> v2/generic/all/userAccount | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L166) -> v2/generic/all/userAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L174) -> v2/generic/all/userAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/userAccount

```text
getOneV2({
  urls: [{
    url: 'v2/generic/userAccount/',
    params: {
      nestedEntities
    }
  }, {
    ...counters.GET_MANY,
    params: {
      ...counters.GET_MANY.params,
      filters: {
        'counterInstance->userAccount->code': '@responses[0].data.code'
        // counterLevel: 'UA'
      }
    },

    autoAppendId: false
  }],
  sync: true,
  transformResponse: transformRecord
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/userAccount
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L141) -> v2/generic/userAccount/ | request: helper.sync: true | helper.transformResponse: transformRecord | urls[0].params: { nestedEntities } / info: helper: getOneV2 | helperArgs: { urls: [{ url: 'v2/generic/userAccount/', params: { nestedEntities } }, { ...counters.GET_MANY, params: { ...counters.GET_MANY.params, filters: { 'counterInstance->userAccount->code': '@responses[0].data.code' // counterLevel: 'UA' } }, autoAppendId: false }], sync: true, transformResponse: transformRecord }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/userAccount

```text
getListV2({
  url: 'v2/generic/all/userAccount',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/userAccount
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L131) -> v2/generic/all/userAccount | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L166) -> v2/generic/all/userAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L174) -> v2/generic/all/userAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/userAccount

```text
getListV2({
  url: 'v2/generic/all/userAccount',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/userAccount
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L131) -> v2/generic/all/userAccount | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L166) -> v2/generic/all/userAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L174) -> v2/generic/all/userAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/userAccount', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /account/userAccount

```text
getCreateProvider({
  url: 'account/userAccount',
  method: 'POST',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /account/userAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L199) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L206) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L182) -> account/userAccount | request: helper.method: POST / response: helper.responseContainerId: entityId / info: excludeProperties: excludeProperties | helper: getCreateProvider | helperArgs: { url: 'account/userAccount', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L190) -> account/userAccount | request: helper.method: PUT / response: responseContainerId: 'entityId' / info: keyColumn: keyColumn | excludeProperties: excludeProperties | helper: getUpdateProvider | helperArgs: { url: 'account/userAccount', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /account/userAccount

```text
getUpdateProvider({
  url: 'account/userAccount',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /account/userAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L199) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L206) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L182) -> account/userAccount | request: helper.method: POST / response: helper.responseContainerId: entityId / info: excludeProperties: excludeProperties | helper: getCreateProvider | helperArgs: { url: 'account/userAccount', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L190) -> account/userAccount | request: helper.method: PUT / response: responseContainerId: 'entityId' / info: keyColumn: keyColumn | excludeProperties: excludeProperties | helper: getUpdateProvider | helperArgs: { url: 'account/userAccount', method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /account/userAccount

```text
getDeleteProvider({
  url: 'account/userAccount/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /account/userAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L199) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L206) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L182) -> account/userAccount | request: helper.method: POST / response: helper.responseContainerId: entityId / info: excludeProperties: excludeProperties | helper: getCreateProvider | helperArgs: { url: 'account/userAccount', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L190) -> account/userAccount | request: helper.method: PUT / response: responseContainerId: 'entityId' / info: keyColumn: keyColumn | excludeProperties: excludeProperties | helper: getUpdateProvider | helperArgs: { url: 'account/userAccount', method: 'PUT' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /account/userAccount

```text
getDeleteProvider({
  url: 'account/userAccount/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /account/userAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L199) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L206) -> account/userAccount/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'account/userAccount/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L182) -> account/userAccount | request: helper.method: POST / response: helper.responseContainerId: entityId / info: excludeProperties: excludeProperties | helper: getCreateProvider | helperArgs: { url: 'account/userAccount', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/user-accounts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/user-accounts/provider/provider.js#L190) -> account/userAccount | request: helper.method: PUT / response: responseContainerId: 'entityId' / info: keyColumn: keyColumn | excludeProperties: excludeProperties | helper: getUpdateProvider | helperArgs: { url: 'account/userAccount', method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
