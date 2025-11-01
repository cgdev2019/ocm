# VIEW188 — Média – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.515Z à partir de `tasks/vues/VIEW188.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Média
- Ressource : digital-resources
- Clé / route : list
- Type d'écran : Liste simple
- Menu : catalog-manager (priorité 6)
- Icône : ChromeReaderMode

### Libellés
- FR : Média.
- EN : Media.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/media

```text
getListV2({
  url: 'v2/generic/all/media',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/media
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L15) -> v2/generic/all/media | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = get(sort, 'field') === 'currentMedia' ? { ...sort, field: 'mediaType' } : sort; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/media', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L31) -> v2/generic/all/media | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/media', nestedEntities, keyColumn }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/media

```text
getListV2({
  url: 'v2/generic/all/media',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/media
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L15) -> v2/generic/all/media | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = get(sort, 'field') === 'currentMedia' ? { ...sort, field: 'mediaType' } : sort; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/media', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L31) -> v2/generic/all/media | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/media', nestedEntities, keyColumn }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/media

```text
getOneV2({
  url: 'v2/generic/media/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/media
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L39) -> v2/generic/media/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/media/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /media

```text
getCreateProvider({
  url: 'media',
  method: 'POST',
  responseContainer: 'mediaDto'
}).
```

- Opérations correspondantes :
  - Chemin /media
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - DELETE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L59) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L66) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - CREATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L43) -> media | request: helper.method: POST / response: helper.responseContainer: mediaDto / info: helper: getCreateProvider | helperArgs: { url: 'media', method: 'POST', responseContainer: 'mediaDto' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L51) -> media | request: helper.method: PUT / response: helper.responseContainer: dmediaDto / info: helper: getDeleteProvider | helperArgs: { url: 'media', method: 'PUT', responseContainer: 'dmediaDto' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /media

```text
getDeleteProvider({
  url: 'media',
  method: 'PUT',
  responseContainer: 'dmediaDto'
}).
```

- Opérations correspondantes :
  - Chemin /media
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - DELETE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L59) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L66) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - CREATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L43) -> media | request: helper.method: POST / response: helper.responseContainer: mediaDto / info: helper: getCreateProvider | helperArgs: { url: 'media', method: 'POST', responseContainer: 'mediaDto' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L51) -> media | request: helper.method: PUT / response: helper.responseContainer: dmediaDto / info: helper: getDeleteProvider | helperArgs: { url: 'media', method: 'PUT', responseContainer: 'dmediaDto' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /media

```text
getUpdateProvider({
  url: 'media/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /media
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - DELETE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L59) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L66) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - CREATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L43) -> media | request: helper.method: POST / response: helper.responseContainer: mediaDto / info: helper: getCreateProvider | helperArgs: { url: 'media', method: 'POST', responseContainer: 'mediaDto' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L51) -> media | request: helper.method: PUT / response: helper.responseContainer: dmediaDto / info: helper: getDeleteProvider | helperArgs: { url: 'media', method: 'PUT', responseContainer: 'dmediaDto' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /media

```text
getUpdateProvider({
  url: 'media/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /media
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - DELETE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L59) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L66) -> media/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'media/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - CREATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L43) -> media | request: helper.method: POST / response: helper.responseContainer: mediaDto / info: helper: getCreateProvider | helperArgs: { url: 'media', method: 'POST', responseContainer: 'mediaDto' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/digital-resources
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/digital-resources/provider/provider.js#L51) -> media | request: helper.method: PUT / response: helper.responseContainer: dmediaDto / info: helper: getDeleteProvider | helperArgs: { url: 'media', method: 'PUT', responseContainer: 'dmediaDto' }

### UPLOAD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/media/files/upload`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
