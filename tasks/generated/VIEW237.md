# VIEW237 — Écritures comptables – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.555Z à partir de `tasks/vues/VIEW237.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Écritures comptables
- Ressource : accounting-entries
- Clé / route : list
- Type d'écran : Liste groupée
- Menu : reports (priorité 0/5)
- Icône : Dashboard

### Libellés
- FR : Écritures comptables.
- EN : Accounting entries.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/journalEntry

```text
getListV2({
  url: 'v2/generic/all/journalEntry',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/journalEntry
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/accounting-entries
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/accounting-entries/provider/provider.js#L84) -> v2/generic/all/journalEntry | request: prepareParams: params => { const { sort, ...restParams } = params; // const finalCurrencyAmount = // currencyAmount > 0 ? currencyAmount : -currencyAmount; // , // ...(finalCurrencyAmount ? { amount: finalCurrencyAmount } : {}) const { field, ...restSort } = sort; return { sort: { ...restSort, ...(field === 'supportingDocumentRef.invoiceNumber|reference' ? { field: 'reference' } : { field }) }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/journalEntry', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/accounting-entries/provider/provider.js#L109) -> v2/generic/all/journalEntry | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/journalEntry' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/journalEntry

```text
getListV2({
  url: 'v2/generic/all/journalEntry'
}, nestedEntities).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/journalEntry
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/accounting-entries
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/accounting-entries/provider/provider.js#L84) -> v2/generic/all/journalEntry | request: prepareParams: params => { const { sort, ...restParams } = params; // const finalCurrencyAmount = // currencyAmount > 0 ? currencyAmount : -currencyAmount; // , // ...(finalCurrencyAmount ? { amount: finalCurrencyAmount } : {}) const { field, ...restSort } = sort; return { sort: { ...restSort, ...(field === 'supportingDocumentRef.invoiceNumber|reference' ? { field: 'reference' } : { field }) }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/journalEntry', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/accounting-entries/provider/provider.js#L109) -> v2/generic/all/journalEntry | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/journalEntry' }

### EXPORT_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
