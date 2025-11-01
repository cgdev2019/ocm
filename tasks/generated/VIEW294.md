# VIEW294 — Balance générale – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.594Z à partir de `tasks/vues/VIEW294.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Balance générale
- Ressource : trial-balance
- Clé / route : list
- Type d'écran : Liste simple
- Menu : reports (priorité 5)
- Icône : Dashboard

### Libellés
- FR : Balance générale.
- EN : Trial balance.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/standardReports/trialBalances

```text
getListV2({
  url: 'v2/standardReports/trialBalances',
  method: 'GET'
}).
```

- Opérations correspondantes :
  - Chemin /v2/standardReports/trialBalances
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: finance/trial-balance
      - Description: - GET_MANY (src/srcProject/layout/finance/modules/trial-balance/provider/provider.js#L44) -> v2/standardReports/trialBalances | request: helper.method: GET / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/standardReports/trialBalances', method: 'GET' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
