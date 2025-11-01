# VIEW332 — Génération de rapports – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.616Z à partir de `tasks/vues/VIEW332.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Génération de rapports
- Ressource : report-extracts
- Clé / route : list
- Type d'écran : Liste simple
- Menu : report-extracts (priorité 3)
- Icône : FindInPage

### Libellés
- FR : Génération de rapports.
- EN : Report extracts.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/reportExtract

```text
getListV2({
  url: 'v2/generic/all/reportExtract',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/reportExtract
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: operation/report-extracts
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/report-extracts/provider/provider.js#L38) -> v2/generic/all/reportExtract | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const { field, order, ...restSort } = sort; const transformSort = { ...restSort, ...(field === 'active' ? { field: 'disabled', order: order === 'ASC' ? 'DESC' : 'ASC' } : { field, order }) }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/reportExtract', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/operation/modules/report-extracts/provider/provider.js#L61) -> v2/generic/all/reportExtract | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/reportExtract', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/report-extracts/provider/provider.js#L68) -> v2/generic/all/reportExtract

### GET_MANY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/reportExtract`.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
url `v2/generic/reportExtract`.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
url `v2/generic/reportExtract/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
url `v2/generic/reportExtract`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_MANY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/reportExtract`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DISABLE_EXTRACT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `finance/reportExtracts/:code/disable`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ENABLE_EXTRACT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `finance/reportExtracts/:code/enable`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RUN_EXTRACT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `finance/reportExtracts/run`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLOAD_CSV_FILE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `admin/files/downloadFile?file=:filePath`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
