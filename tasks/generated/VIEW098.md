# VIEW098 — Modèles – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.407Z à partir de `tasks/vues/VIEW098.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Modèles
- Ressource : dunning-templates
- Clé / route : list
- Type d'écran : Liste simple
- Menu : dunning (priorité 9)
- Icône : Bookmarks

### Libellés
- FR : Modèles.
- EN : Templates.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningTemplate

```text
getListV2({
  url: 'v2/generic/all/DunningTemplate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/DunningTemplate
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L29) -> v2/generic/all/DunningTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L44) -> v2/generic/all/DunningTemplate | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningTemplate', responseContainer: 'data', nestedEntities, keyColumn: 'code' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/DunningTemplate

```text
getOneV2({
  url: 'v2/generic/DunningTemplate/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/DunningTemplate
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L37) -> v2/generic/DunningTemplate/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/DunningTemplate/', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningTemplate

```text
getListV2({
  url: 'v2/generic/all/DunningTemplate',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/DunningTemplate
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L29) -> v2/generic/all/DunningTemplate | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningTemplate', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L44) -> v2/generic/all/DunningTemplate | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningTemplate', responseContainer: 'data', nestedEntities, keyColumn: 'code' }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/dunning/dunningtemplate

```text
getCreateProvider({
  url: 'v2/dunning/dunningtemplate'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningtemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L65) -> v2/dunning/dunningtemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningtemplate/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L71) -> v2/dunning/dunningtemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningtemplate/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L52) -> v2/dunning/dunningtemplate | info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningtemplate' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/dunning/dunningtemplate/:id

```text
getUpdateProvider({
  url: 'v2/dunning/dunningtemplate/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/dunning/dunningtemplate/:id

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/dunning/dunningtemplate

```text
getDeleteProvider({
  url: 'v2/dunning/dunningtemplate/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningtemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L65) -> v2/dunning/dunningtemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningtemplate/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L71) -> v2/dunning/dunningtemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningtemplate/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L52) -> v2/dunning/dunningtemplate | info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningtemplate' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/dunning/dunningtemplate

```text
getDeleteProvider({
  url: 'v2/dunning/dunningtemplate/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/dunning/dunningtemplate
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L65) -> v2/dunning/dunningtemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningtemplate/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L71) -> v2/dunning/dunningtemplate/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/dunning/dunningtemplate/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-templates
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/dunning-templates/provider/provider.js#L52) -> v2/dunning/dunningtemplate | info: helper: getCreateProvider | helperArgs: { url: 'v2/dunning/dunningtemplate' }

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
