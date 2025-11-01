# VIEW106 — Import – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.412Z à partir de `tasks/vues/VIEW106.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Import
- Ressource : import-c-action
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

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: '',
  method: 'DELETE'
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
url `massImport/uploadAndImport`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
