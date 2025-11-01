# VIEW258 — Grand livre – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.568Z à partir de `tasks/vues/VIEW258.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Grand livre
- Ressource : general-ledger
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : reports (priorité 5)
- Icône : Dashboard

### Libellés
- FR : Grand livre.
- EN : General ledger.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/JournalEntry

```text
getListV2({
  url: 'v2/generic/all/JournalEntry',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/JournalEntry
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/general-ledger
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/general-ledger/provider/provider.js#L131) -> v2/generic/all/JournalEntry | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/JournalEntry', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/general-ledger/provider/provider.js#L138) -> v2/generic/all/JournalEntry | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/JournalEntry', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/JournalEntry

```text
getListV2({
  url: 'v2/generic/all/JournalEntry',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/JournalEntry
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/general-ledger
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/general-ledger/provider/provider.js#L131) -> v2/generic/all/JournalEntry | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/JournalEntry', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/general-ledger/provider/provider.js#L138) -> v2/generic/all/JournalEntry | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/JournalEntry', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
