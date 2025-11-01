# VIEW091 — Niveaux – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.401Z à partir de `tasks/vues/VIEW091.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Niveaux
- Ressource : dunning-levels
- Clé / route : list
- Type d'écran : Liste simple
- Menu : dunning (priorité 9)
- Icône : List

### Libellés
- FR : Niveaux.
- EN : Levels.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunningLevel

```text
getListV2({
  url: 'v2/generic/all/dunningLevel',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunningLevel
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L39) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L54) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L37) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L52) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/dunningLevel

```text
getOneV2({
  url: 'v2/generic/dunningLevel/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/dunningLevel
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L47) -> v2/generic/dunningLevel/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/dunningLevel/', responseContainer: 'data', nestedEntities } - GET_ONE (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L45) -> v2/generic/dunningLevel/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/dunningLevel/', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/dunningLevel

```text
getListV2({
  url: 'v2/generic/all/dunningLevel',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/dunningLevel
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L39) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L54) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_LIST (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L37) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L52) -> v2/generic/all/dunningLevel | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/dunningLevel', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningLevel

```text
getCreateProvider({
  url: 'v2/dunning/dunningLevel',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningLevel
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L77) -> v2/dunning/dunningLevel/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningLevel/', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L75) -> v2/dunning/dunningLevel/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningLevel/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L63) -> v2/dunning/dunningLevel | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningLevel', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L61) -> v2/dunning/dunningLevel | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningLevel', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/dunning/dunningLevel/:id

```text
getUpdateProvider({
  url: 'v2/dunning/dunningLevel/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningLevel/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/dunning/dunningLevel

```text
getDeleteProvider({
  url: 'v2/dunning/dunningLevel/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningLevel
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L77) -> v2/dunning/dunningLevel/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningLevel/', method: 'DELETE' } - DELETE (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L75) -> v2/dunning/dunningLevel/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningLevel/', method: 'DELETE' }
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-levels, finance/dunning-levels
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-levels/provider/provider.js#L63) -> v2/dunning/dunningLevel | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningLevel', method: 'POST' } - CREATE (src/srcProject/layout/finance/modules/dunning-levels/provider/provider.js#L61) -> v2/dunning/dunningLevel | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningLevel', method: 'POST' }

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

### ARCHIVE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningLevel/archive/:id

```text
getUpdateProvider({
  url: 'v2/dunning/dunningLevel/archive/:id',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningLevel/archive/:id

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
