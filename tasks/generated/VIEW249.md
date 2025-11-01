# VIEW249 — Plan comptable – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.564Z à partir de `tasks/vues/VIEW249.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Plan comptable
- Ressource : chart-of-accounts
- Clé / route : list
- Type d'écran : Liste groupée
- Icône : AccountTree

### Libellés
- FR : Plan comptable.
- EN : Chart of accounts.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountingCode

```text
getListV2({
  url: 'v2/generic/all/accountingCode',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/accountingCode
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: administration/accounting-codes, administration/chart-of-accounts, finance/accounting-codes, finance/chart-of-accounts
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/accounting-codes/provider/provider.js#L13) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: transformSort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/accounting-codes/provider/provider.js#L33) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_LIST (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L36) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { active = true, ...restFilter } = filter; const activeValue = active === 'ACTIVED'; const filterTransformed = { ...(active !== true ? { disabled: !activeValue } : {}), ...restFilter }; return { filter: filterTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L58) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/accounting-codes/provider/provider.js#L12) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/accounting-codes/provider/provider.js#L19) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L34) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { active, ...restFilter } = filter; const filterTransformed = { ...(filter.hasOwnProperty('active') ? { disabled: !active } : {}), ...restFilter }; return { filter: filterTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L54) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountingCode

```text
getListV2({
  url: 'v2/generic/all/accountingCode',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/accountingCode
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: administration/accounting-codes, administration/chart-of-accounts, finance/accounting-codes, finance/chart-of-accounts
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/accounting-codes/provider/provider.js#L13) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: transformSort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/accounting-codes/provider/provider.js#L33) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'code', order: 'ASC' }; return { sort: get(sort, 'field') === 'id' ? transformSort : sort, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_LIST (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L36) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { active = true, ...restFilter } = filter; const activeValue = active === 'ACTIVED'; const filterTransformed = { ...(active !== true ? { disabled: !activeValue } : {}), ...restFilter }; return { filter: filterTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L58) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/accounting-codes/provider/provider.js#L12) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/accounting-codes/provider/provider.js#L19) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L34) -> v2/generic/all/accountingCode | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { active, ...restFilter } = filter; const filterTransformed = { ...(filter.hasOwnProperty('active') ? { disabled: !active } : {}), ...restFilter }; return { filter: filterTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L54) -> v2/generic/all/accountingCode | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountingCode', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/accountingCode

```text
getOneV2({
  keyColumn,
  url: 'v2/generic/accountingCode/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/accountingCode
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: administration/accounting-codes, administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/accounting-codes/provider/provider.js#L53) -> v2/generic/accountingCode/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/accountingCode/', nestedEntities } - GET_ONE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L65) -> v2/generic/accountingCode/ | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { keyColumn, url: 'v2/generic/accountingCode/', nestedEntities } - GET_ONE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L61) -> v2/generic/accountingCode/ | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { keyColumn, url: 'v2/generic/accountingCode/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/billing/accountingCode

```text
getCreateProvider({
  url: 'v2/billing/accountingCode',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/accountingCode
    - DELETE — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - DELETE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L78) -> v2/billing/accountingCode | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L85) -> v2/billing/accountingCode | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L74) -> v2/billing/accountingCode | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L81) -> v2/billing/accountingCode | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - CREATE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L72) -> v2/billing/accountingCode | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L68) -> v2/billing/accountingCode | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'POST' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/billing/accountingCode

```text
getDeleteProvider({
  url: 'v2/billing/accountingCode',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/accountingCode
    - DELETE — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - DELETE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L78) -> v2/billing/accountingCode | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L85) -> v2/billing/accountingCode | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L74) -> v2/billing/accountingCode | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L81) -> v2/billing/accountingCode | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - CREATE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L72) -> v2/billing/accountingCode | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L68) -> v2/billing/accountingCode | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'POST' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/billing/accountingCode

```text
getDeleteProvider({
  url: 'v2/billing/accountingCode',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/billing/accountingCode
    - DELETE — Used in 4 frontend location(s) (operationId: —)
      - Tags: administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - DELETE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L78) -> v2/billing/accountingCode | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L85) -> v2/billing/accountingCode | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L74) -> v2/billing/accountingCode | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L81) -> v2/billing/accountingCode | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/chart-of-accounts, finance/chart-of-accounts
      - Description: - CREATE (src/srcProject/layout/administration/modules/chart-of-accounts/provider/provider.js#L72) -> v2/billing/accountingCode | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/chart-of-accounts/provider/provider.js#L68) -> v2/billing/accountingCode | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/accountingCode', method: 'POST' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
