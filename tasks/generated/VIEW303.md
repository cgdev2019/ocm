# VIEW303 — Evénements – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.599Z à partir de `tasks/vues/VIEW303.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : MACO
- Module : Evénements
- Ressource : fluxEvents
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : FindInPage

### Libellés
- FR : Evénements.
- EN : Events.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/c15ElecXml/list

```text
getListV2({
  url: '{maco}/api/rest/v2/c15ElecXml/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/c15ElecXml/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxEvents
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L16) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L23) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L31) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/c15ElecXml/list

```text
getListV2({
  url: '{maco}/api/rest/v2/c15ElecXml/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/c15ElecXml/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxEvents
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L16) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L23) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L31) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/c15ElecXml/list

```text
getListV2({
  url: '{maco}/api/rest/v2/c15ElecXml/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/c15ElecXml/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxEvents
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L16) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L23) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-fluxEvents/provider/provider.js#L31) -> {maco}/api/rest/v2/c15ElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/c15ElecXml/list', responseContainer: 'data' }

### ABANDONED

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /{maco}/api/rest/v2/c15ElecXml/:id

```text
getUpdateProvider({
  url: '{maco}/api/rest/v2/c15ElecXml/:id',
  method: 'PUT',
  bodyParams: {
    statusCode: {
      code: 'ABANDONED'
    }
  },
  appendParamsToBody: false
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - {maco}/api/rest/v2/c15ElecXml/:id

### TO_TREAT

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /{maco}/api/rest/v2/c15ElecXml/:id

```text
getUpdateProvider({
  url: '{maco}/api/rest/v2/c15ElecXml/:id',
  method: 'PUT',
  bodyParams: {
    statusCode: {
      code: 'TO_TREAT'
    }
  }
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - {maco}/api/rest/v2/c15ElecXml/:id

### FIND_JOB_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `jobInstance?jobInstanceCode=:code`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### REPLAY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execute`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPLOAD_FILE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### CUSTOM_REPLAY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execution`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
