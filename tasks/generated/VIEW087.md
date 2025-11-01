# VIEW087 — Actions – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.398Z à partir de `tasks/vues/VIEW087.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Actions
- Ressource : dunning-actions
- Clé / route : list
- Type d'écran : Liste simple
- Menu : dunning (priorité 9)
- Icône : ViewList

### Libellés
- FR : Actions.
- EN : Actions.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunningAction

```text
getListV2({
  url: 'v2/generic/all/dunningAction',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunningAction
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, finance/dunning-actions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L30) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L46) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L30) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L46) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/dunningAction

```text
getOneV2({
  url: 'v2/generic/dunningAction/',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/dunningAction
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, finance/dunning-actions
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L38) -> v2/generic/dunningAction/ | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/dunningAction/', responseContainer: 'data', nestedEntities, keyColumn } - GET_ONE (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L38) -> v2/generic/dunningAction/ | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/dunningAction/', responseContainer: 'data', nestedEntities, keyColumn }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunningAction

```text
getListV2({
  url: 'v2/generic/all/dunningAction',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunningAction
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, finance/dunning-actions
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L30) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L46) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L30) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L46) -> v2/generic/all/dunningAction | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningAction', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningaction

```text
getCreateProvider({
  url: 'v2/dunning/dunningaction'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningaction
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, finance/dunning-actions
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L54) -> v2/dunning/dunningaction | response: responseContainerId: 'id' / info: keyColumn: 'id' | helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningaction' } - CREATE (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L54) -> v2/dunning/dunningaction | response: responseContainerId: 'id' / info: keyColumn: 'id' | helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningaction' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/dunning/dunningaction/:id

```text
getCreateProvider({
  url: 'v2/dunning/dunningaction/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningaction/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/dunning

```text
getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/dunning
    - DELETE — Used in 7 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, B2B-customer-care/dunning-levels, finance/dunning-actions, finance/dunning-levels, finance/dunning-policies
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L69) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L75) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L83) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L69) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L75) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L81) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L82) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/dunning

```text
getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/dunning
    - DELETE — Used in 7 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-actions, B2B-customer-care/dunning-levels, finance/dunning-actions, finance/dunning-levels, finance/dunning-policies
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L69) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-actions/provider/provider.js#L75) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L83) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L69) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-actions/provider/provider.js#L75) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L81) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L82) -> v2/generic/dunning | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/dunning', method: 'DELETE' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
