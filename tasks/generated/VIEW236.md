# VIEW236 — Plan comptable – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.555Z à partir de `tasks/vues/VIEW236.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Plan comptable
- Ressource : accounting-codes
- Clé / route : list
- Type d'écran : Liste simple
- Icône : Business

### Libellés
- FR : Plan comptable.
- EN : Accounting codes.

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

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
