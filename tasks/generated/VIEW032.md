# VIEW032 — Taux de change – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.345Z à partir de `tasks/vues/VIEW032.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Taux de change
- Ressource : exchange-rates
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Taux de change.
- EN : Exchange rates.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ExchangeRate

```text
getListV2({
  url: 'v2/generic/all/ExchangeRate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ExchangeRate
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/exchange-rates
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/exchange-rates/provider.js#L37) -> v2/generic/all/ExchangeRate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ExchangeRate', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/exchange-rates/provider.js#L45) -> v2/generic/all/ExchangeRate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ExchangeRate', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ExchangeRate

```text
getListV2({
  url: 'v2/generic/all/ExchangeRate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ExchangeRate
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/exchange-rates
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/exchange-rates/provider.js#L37) -> v2/generic/all/ExchangeRate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ExchangeRate', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/exchange-rates/provider.js#L45) -> v2/generic/all/ExchangeRate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ExchangeRate', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/ExchangeRate

```text
getOneV2({
  url: 'v2/generic/ExchangeRate/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/ExchangeRate
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/exchange-rates
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/exchange-rates/provider.js#L53) -> v2/generic/ExchangeRate/ | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/ExchangeRate/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /currency/addExchangeRate

```text
getCreateProvider({
  url: 'currency/addExchangeRate',
  method: 'POST',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /currency/addExchangeRate
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/exchange-rates
      - Description: - CREATE (src/srcProject/layout/administration/modules/exchange-rates/provider.js#L61) -> currency/addExchangeRate | request: helper.method: POST / response: helper.responseContainerId: entityId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'currency/addExchangeRate', method: 'POST', responseContainerId: 'entityId' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /currency/updateExchangeRate/:id

```text
getUpdateProvider({
  url: 'currency/updateExchangeRate/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - currency/updateExchangeRate/:id

### DELETE_CUSTOM

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"DELETE"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
