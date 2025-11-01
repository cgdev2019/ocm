# VIEW301 — Operation Traitment – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.598Z à partir de `tasks/vues/VIEW301.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : MACO
- Module : Operation Traitment
- Ressource : elecOperationTraitement
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition
- Icône : FindInPage

### Libellés
- FR : Operation Traitment.
- EN : Operation Traitment.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/ElecProcessingOperations/list

```text
getListV2({
  url: '{maco}/api/rest/v2/ElecProcessingOperations/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/ElecProcessingOperations/list
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: MACO/maco-elecOperationTraitement
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-elecOperationTraitement/provider/provider.js#L16) -> {maco}/api/rest/v2/ElecProcessingOperations/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/ElecProcessingOperations/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-elecOperationTraitement/provider/provider.js#L23) -> {maco}/api/rest/v2/ElecProcessingOperations/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | excludeProperties: ['undefined'] | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/ElecProcessingOperations/list', responseContainer: 'data' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/ElecProcessingOperations/list

```text
getListV2({
  url: '{maco}/api/rest/v2/ElecProcessingOperations/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/ElecProcessingOperations/list
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: MACO/maco-elecOperationTraitement
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-elecOperationTraitement/provider/provider.js#L16) -> {maco}/api/rest/v2/ElecProcessingOperations/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/ElecProcessingOperations/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-elecOperationTraitement/provider/provider.js#L23) -> {maco}/api/rest/v2/ElecProcessingOperations/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | excludeProperties: ['undefined'] | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/ElecProcessingOperations/list', responseContainer: 'data' }

### GET_ONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations/`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### OLD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MODIFY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_OP

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ABANDONED

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TO_TREAT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### REJOUER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execute`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### FIND_JOB_INSTANCE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `jobInstance?jobInstanceCode=:code`, options {"method":"GET"}.
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
