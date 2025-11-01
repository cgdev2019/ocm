# VIEW306 — Relève R15 – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.600Z à partir de `tasks/vues/VIEW306.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : MACO
- Module : Relève R15
- Ressource : fluxReliefR15
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création
- Icône : FindInPage

### Libellés
- FR : Relève R15.
- EN : Reading R15.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/r15ElecRelHeader/list

```text
getListV2({
  url: '{maco}/api/rest/v2/r15ElecRelHeader/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/r15ElecRelHeader/list
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: MACO/maco-reliefR15
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-reliefR15/provider/provider.js#L16) -> {maco}/api/rest/v2/r15ElecRelHeader/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/r15ElecRelHeader/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-reliefR15/provider/provider.js#L23) -> {maco}/api/rest/v2/r15ElecRelHeader/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/r15ElecRelHeader/list', responseContainer: 'data' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/r15ElecRelHeader/list

```text
getListV2({
  url: '{maco}/api/rest/v2/r15ElecRelHeader/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/r15ElecRelHeader/list
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: MACO/maco-reliefR15
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-reliefR15/provider/provider.js#L16) -> {maco}/api/rest/v2/r15ElecRelHeader/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/r15ElecRelHeader/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-reliefR15/provider/provider.js#L23) -> {maco}/api/rest/v2/r15ElecRelHeader/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/r15ElecRelHeader/list', responseContainer: 'data' }

### GET_ONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/r15ElecRelHeader/`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/r15ElecRelHeader/`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ABANDONED

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TO_TREAT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TO_CHECK

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MODIFICATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_OPERATION_TRAITEMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### REPLAY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execute`, options {"method":"POST"}.
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
