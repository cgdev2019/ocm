# VIEW302 — Vue PoD – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.598Z à partir de `tasks/vues/VIEW302.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : MACO
- Module : Vue PoD
- Ressource : elecPoD
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : FindInPage

### Libellés
- FR : Vue PoD.
- EN : PoD view.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/elecPodMacos/list

```text
getListV2({
  url: '{maco}/api/rest/v2/elecPodMacos/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/elecPodMacos/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-elecPod
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L16) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | defaultFilter: [{ key: 'validityEndDate', value: '9999-12-31', operation: '=' }] | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L30) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L38) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/elecPodMacos/list

```text
getListV2({
  url: '{maco}/api/rest/v2/elecPodMacos/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/elecPodMacos/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-elecPod
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L16) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | defaultFilter: [{ key: 'validityEndDate', value: '9999-12-31', operation: '=' }] | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L30) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L38) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/elecPodMacos/list

```text
getListV2({
  url: '{maco}/api/rest/v2/elecPodMacos/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/elecPodMacos/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-elecPod
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L16) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | defaultFilter: [{ key: 'validityEndDate', value: '9999-12-31', operation: '=' }] | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L30) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L38) -> {maco}/api/rest/v2/elecPodMacos/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/list', responseContainer: 'data' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/elecPodMacos

```text
getOneV2({
  url: '{maco}/api/rest/v2/elecPodMacos/'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/elecPodMacos
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: MACO/maco-elecPod
      - Description: - GET_ONE (src/srcProject/layout/MACO/modules/maco-elecPod/provider/provider.js#L46) -> {maco}/api/rest/v2/elecPodMacos/ | info: specificAPIEnabled: true | keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: '{maco}/api/rest/v2/elecPodMacos/' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /{maco}/api/rest/v2/elecPodMacos/:id

```text
getUpdateProvider({
  url: '{maco}/api/rest/v2/elecPodMacos/:id',
  method: 'PUT',
  appendParamsToBody: true
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - {maco}/api/rest/v2/elecPodMacos/:id

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
