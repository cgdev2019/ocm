# VIEW308 — Market message – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.601Z à partir de `tasks/vues/VIEW308.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : MACO
- Module : Market message
- Ressource : marketMessage
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : FindInPage

### Libellés
- FR : Market message.
- EN : Market message.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/marketMessages/list

```text
getListV2({
  url: '{maco}/api/rest/v2/marketMessages/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/marketMessages/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-marketMessage
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L4) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L11) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L18) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/marketMessages/list

```text
getListV2({
  url: '{maco}/api/rest/v2/marketMessages/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/marketMessages/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-marketMessage
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L4) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L11) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L18) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/marketMessages/list

```text
getListV2({
  url: '{maco}/api/rest/v2/marketMessages/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/marketMessages/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-marketMessage
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L4) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L11) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-marketMessage/provider/provider.js#L18) -> {maco}/api/rest/v2/marketMessages/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/marketMessages/list', responseContainer: 'data' }

### EXECUTE_JOB

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execute`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
