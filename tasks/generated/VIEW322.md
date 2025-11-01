# VIEW322 — Import – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.609Z à partir de `tasks/vues/VIEW322.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Import
- Ressource : import-cdr
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : Settings

### Libellés
- FR : Import.
- EN : Import.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  url: '',
  responseContainer: 'data',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getOneV2({
  url: '',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_MANY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  url: '',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
getCreateProvider({
  url: ''
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: '',
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/mediation/cdrs

```text
getDeleteProvider({
  url: 'v2/mediation/cdrs',
  method: 'DELETE'
  // keyColumn: nestedEntities,
}).
```

- Opérations correspondantes :
  - Chemin /v2/mediation/cdrs
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/import-cdr
      - Description: - DELETE_MANY (src/srcProject/layout/operation/modules/import-cdr/provider/provider.js#L51) -> v2/mediation/cdrs | request: prepareParams: params => { const { data } = params; const { code } = data; return { ids: code }; } | helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/mediation/cdrs', method: 'DELETE' // keyColumn: nestedEntities, }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/cdr
      - Description: - CREATE (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L226) -> v2/mediation/cdrs | request: helper.method: POST / response: helper.responseContainerId: id / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'v2/mediation/cdrs', method: 'POST', responseContainerId: 'id' }

### DISCARD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  urls: [],
  sync: true
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### REPLAY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  urls: [],
  sync: true
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### PROCEED_MEDIATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### PROCEED_MEDIATION_BY_CDR

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getCreateProvider({
  urls: [],
  sync: true
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPLOAD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/catalog/priceManagement/pricePlanMatrixVersions/import`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE

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
url `admin/files/upload`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_DIR

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `admin/files/createDir`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
