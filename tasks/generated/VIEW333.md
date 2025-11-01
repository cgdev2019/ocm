# VIEW333 — Rapports générés – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.617Z à partir de `tasks/vues/VIEW333.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Rapports générés
- Ressource : report-extracts-history
- Clé / route : list
- Type d'écran : Liste simple
- Menu : report-extracts (priorité 3)
- Icône : FindInPage

### Libellés
- FR : Rapports générés.
- EN : Report extract history.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ReportExtractExecutionResult

```text
getListV2({
  url: 'v2/generic/all/ReportExtractExecutionResult',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ReportExtractExecutionResult
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/report-extract-history
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/report-extract-history/provider/provider.js#L13) -> v2/generic/all/ReportExtractExecutionResult | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ReportExtractExecutionResult', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/report-extract-history/provider/provider.js#L20) -> v2/generic/all/ReportExtractExecutionResult | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ReportExtractExecutionResult', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/ReportExtractExecutionResult

```text
getListV2({
  url: 'v2/generic/all/ReportExtractExecutionResult',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/ReportExtractExecutionResult
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/report-extract-history
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/report-extract-history/provider/provider.js#L13) -> v2/generic/all/ReportExtractExecutionResult | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ReportExtractExecutionResult', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/report-extract-history/provider/provider.js#L20) -> v2/generic/all/ReportExtractExecutionResult | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/ReportExtractExecutionResult', nestedEntities }

### DOWNLOAD_EXTRACT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `admin/files/downloadFile?file=:filePath`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
