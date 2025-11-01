# VIEW281 — Résultats de la requête – PATH SHOW

_Tâche générée automatiquement le 2025-11-01T00:49:51.589Z à partir de `tasks/vues/VIEW281.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Résultats de la requête
- Ressource : query-runs-results
- Clé / route : PATH_SHOW
- Type d'écran : Fiche de consultation
- Icône : List

### Libellés
- FR : Résultats de la requête.
- EN : Query results.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/QueryExecutionResult

```text
getListV2({
  url: 'v2/generic/all/QueryExecutionResult',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/QueryExecutionResult

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/QueryExecutionResult

```text
getListV2({
  url: 'v2/generic/all/QueryExecutionResult',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/QueryExecutionResult

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/QueryExecutionResult

```text
getOneV2({
  url: 'v2/generic/QueryExecutionResult/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/QueryExecutionResult/

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/QueryExecutionResult

```text
getDeleteProvider({
  url: 'v2/generic/QueryExecutionResult',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/QueryExecutionResult

### DOWNLOAD_CSV_FILE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `admin/files/downloadFile?file=/:filePath`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CSV_CONTENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/queryManagement/reportQueries/queryExecutionResult/:id/results`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
