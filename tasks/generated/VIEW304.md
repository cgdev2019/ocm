# VIEW304 — Frais – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.599Z à partir de `tasks/vues/VIEW304.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : MACO
- Module : Frais
- Ressource : fluxFees
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : FindInPage

### Libellés
- FR : Frais.
- EN : Fees.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/f15dElecXml/list

```text
getListV2({
  url: '{maco}/api/rest/v2/f15dElecXml/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/f15dElecXml/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxFees
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L16) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L23) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L31) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/f15dElecXml/list

```text
getListV2({
  url: '{maco}/api/rest/v2/f15dElecXml/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/f15dElecXml/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxFees
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L16) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L23) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L31) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/f15dElecXml/list

```text
getListV2({
  url: '{maco}/api/rest/v2/f15dElecXml/list',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/f15dElecXml/list
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxFees
      - Description: - GET_LIST (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L16) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' } - GET_MANY (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L23) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' } - GET_MANY_REFERENCE (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L31) -> {maco}/api/rest/v2/f15dElecXml/list | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getListV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/list', responseContainer: 'data' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /{maco}/api/rest/v2/f15dElecXml

```text
getOneV2({
  url: '{maco}/api/rest/v2/f15dElecXml/',
  responseContainer: 'data'
}).
```

- Opérations correspondantes :
  - Chemin /{maco}/api/rest/v2/f15dElecXml
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: MACO/maco-fluxFees
      - Description: - GET_ONE (src/srcProject/layout/MACO/modules/maco-fluxFees/provider/provider.js#L39) -> {maco}/api/rest/v2/f15dElecXml/ | response: helper.responseContainer: data / info: keyColumn: keyColumn | specificAPIEnabled: true | helper: getOneV2 | helperArgs: { url: '{maco}/api/rest/v2/f15dElecXml/', responseContainer: 'data' }

### ABANDONED

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/f15dElecXml/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TO_TREAT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/f15dElecXml/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TO_CHECK

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `{maco}/api/rest/v2/f15dElecXml/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

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

### CUSTOM_REPLAY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `job/execution`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPLOAD_FILE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
