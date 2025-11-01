# VIEW241 — Balance agée clients – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.558Z à partir de `tasks/vues/VIEW241.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Balance agée clients
- Ressource : aged-trial-balance
- Clé / route : list
- Type d'écran : Liste groupée
- Menu : reports (priorité 5)
- Icône : Dashboard

### Libellés
- FR : Balance agée clients.
- EN : Aged trial balance.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/standardReports/AgedReceivables

```text
getListV2({
  url: 'v2/standardReports/AgedReceivables'
}).
```

- Opérations correspondantes :
  - Chemin /v2/standardReports/AgedReceivables
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/aged-trial-balance
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/aged-trial-balance/provider/provider.js#L74) -> v2/standardReports/AgedReceivables | request: options: { queryKey: '', method: 'GET' } / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/standardReports/AgedReceivables' } - GET_MANY (src/srcProject/layout/finance/modules/aged-trial-balance/provider/provider.js#L85) -> v2/standardReports/AgedReceivables | request: helper.method: GET / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/standardReports/AgedReceivables', method: 'GET' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/standardReports/AgedReceivables

```text
getListV2({
  url: 'v2/standardReports/AgedReceivables',
  method: 'GET'
}).
```

- Opérations correspondantes :
  - Chemin /v2/standardReports/AgedReceivables
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/aged-trial-balance
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/aged-trial-balance/provider/provider.js#L74) -> v2/standardReports/AgedReceivables | request: options: { queryKey: '', method: 'GET' } / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/standardReports/AgedReceivables' } - GET_MANY (src/srcProject/layout/finance/modules/aged-trial-balance/provider/provider.js#L85) -> v2/standardReports/AgedReceivables | request: helper.method: GET / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/standardReports/AgedReceivables', method: 'GET' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
