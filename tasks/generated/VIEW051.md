# VIEW051 — Devises – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.366Z à partir de `tasks/vues/VIEW051.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Devises
- Ressource : trading-currencies
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Devises.
- EN : Currencies.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tradingCurrency

```text
getListV2({
  url: 'v2/generic/all/tradingCurrency',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tradingCurrency
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies, customer-care/trading-currencies, finance/trading-currencies
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L76) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L85) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities } - GET_LIST (src/srcProject/layout/customer-care/modules/trading-currencies/provider.js#L52) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/customer-care/modules/trading-currencies/provider.js#L61) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'currencyCode' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields, keyColumn: 'currencyCode' } - GET_LIST (src/srcProject/layout/finance/modules/trading-currencies/provider.js#L51) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/finance/modules/trading-currencies/provider.js#L60) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'currencyCode' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields, keyColumn: 'currencyCode' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tradingCurrency

```text
getListV2({
  url: 'v2/generic/all/tradingCurrency',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tradingCurrency
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies, customer-care/trading-currencies, finance/trading-currencies
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L76) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L85) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities } - GET_LIST (src/srcProject/layout/customer-care/modules/trading-currencies/provider.js#L52) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/customer-care/modules/trading-currencies/provider.js#L61) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'currencyCode' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields, keyColumn: 'currencyCode' } - GET_LIST (src/srcProject/layout/finance/modules/trading-currencies/provider.js#L51) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/finance/modules/trading-currencies/provider.js#L60) -> v2/generic/all/tradingCurrency | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields | helper.keyColumn: 'currencyCode' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/tradingCurrency', nestedEntities, genericFields, keyColumn: 'currencyCode' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/tradingCurrency

```text
getOneV2({
  url: 'v2/generic/tradingCurrency/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/tradingCurrency
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L94) -> v2/generic/tradingCurrency/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/tradingCurrency/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /currency

```text
getCreateProvider({
  url: 'currency',
  method: 'POST',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /currency
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - CREATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L101) -> currency | request: helper.method: POST / response: helper.responseContainerId: entityId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'currency', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - UPDATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L109) -> currency | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'currency', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /currency

```text
getUpdateProvider({
  url: 'currency',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /currency
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - CREATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L101) -> currency | request: helper.method: POST / response: helper.responseContainerId: entityId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'currency', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - UPDATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L109) -> currency | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'currency', method: 'PUT' }

### ARCHIVE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /currency/:code/disable

```text
getUpdateProvider({
  url: 'currency/:code/disable',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - currency/:code/disable

### ENABLE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /currency/:code/enable

```text
getUpdateProvider({
  url: 'currency/:code/enable',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - currency/:code/enable

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
