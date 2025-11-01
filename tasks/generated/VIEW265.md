# VIEW265 — Journal d’OD – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.574Z à partir de `tasks/vues/VIEW265.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Journal d’OD
- Ressource : miscellaneous-journal
- Clé / route : list
- Type d'écran : Liste groupée
- Menu : reports (priorité 5)
- Icône : Dashboard

### Libellés
- FR : Journal d’OD.
- EN : Miscellaneous journal.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OtherCreditAndCharge

```text
getListV2({
  url: 'v2/generic/all/OtherCreditAndCharge',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OtherCreditAndCharge
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/miscellaneous-journal
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/miscellaneous-journal/provider/provider.js#L46) -> v2/generic/all/OtherCreditAndCharge | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { currentMonth = false, lastMonth = false, lastThreeMonths = false, lastYear = false, currentYear = false, startingFrom = '', ...restFilter } = filter; const fitlerTransformed = { ...(currentMonth ? getCurrentMonth('a.dueDate') : {}), ...(lastMonth ? getLastMonth('a.dueDate') : {}), ...(lastThreeMonths ? getLastThreeMonths('a.dueDate') : {}), ...(lastYear ? getLastYear('a.dueDate') : {}), ...(currentYear ? getCurrentYear('a.dueDate') : {}), ...(!isEmpty(startingFrom) ? getStartingFromDate('a.dueDate', startingFrom) : {}), ...restFilter }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OtherCreditAndCharge', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/miscellaneous-journal/provider/provider.js#L82) -> v2/generic/all/OtherCreditAndCharge | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OtherCreditAndCharge', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OtherCreditAndCharge

```text
getListV2({
  url: 'v2/generic/all/OtherCreditAndCharge',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OtherCreditAndCharge
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/miscellaneous-journal
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/miscellaneous-journal/provider/provider.js#L46) -> v2/generic/all/OtherCreditAndCharge | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { currentMonth = false, lastMonth = false, lastThreeMonths = false, lastYear = false, currentYear = false, startingFrom = '', ...restFilter } = filter; const fitlerTransformed = { ...(currentMonth ? getCurrentMonth('a.dueDate') : {}), ...(lastMonth ? getLastMonth('a.dueDate') : {}), ...(lastThreeMonths ? getLastThreeMonths('a.dueDate') : {}), ...(lastYear ? getLastYear('a.dueDate') : {}), ...(currentYear ? getCurrentYear('a.dueDate') : {}), ...(!isEmpty(startingFrom) ? getStartingFromDate('a.dueDate', startingFrom) : {}), ...restFilter }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OtherCreditAndCharge', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/miscellaneous-journal/provider/provider.js#L82) -> v2/generic/all/OtherCreditAndCharge | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/OtherCreditAndCharge', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
