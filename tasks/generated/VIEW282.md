# VIEW282 — Journal de vente – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.589Z à partir de `tasks/vues/VIEW282.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Journal de vente
- Ressource : sales-journal
- Clé / route : list
- Type d'écran : Liste groupée
- Icône : Dashboard

### Libellés
- FR : Journal de vente.
- EN : Sales journal.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/recordedInvoice

```text
getListV2({
  url: 'v2/generic/all/recordedInvoice',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/recordedInvoice
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/sales-journal
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/sales-journal/provider/provider.js#L60) -> v2/generic/all/recordedInvoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { currentMonth = false, lastMonth = false, lastThreeMonths = false, currentYear = false, startingFrom = '', ...restFilter } = filter; const fitlerTransformed = { ...(currentMonth ? getCurrentMonth('dueDate') : {}), ...(lastMonth ? getLastMonth('dueDate') : {}), ...(lastThreeMonths ? getLastThreeMonths('dueDate') : {}), ...(currentYear ? getCurrentYear('dueDate') : {}), ...(!isEmpty(startingFrom) ? getStartingFromDate('dueDate', startingFrom) : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...restFilter }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/recordedInvoice', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/sales-journal/provider/provider.js#L96) -> v2/generic/all/recordedInvoice | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/recordedInvoice' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/recordedInvoice

```text
getListV2({
  url: 'v2/generic/all/recordedInvoice'
}, nestedEntities).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/recordedInvoice
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: finance/sales-journal
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/sales-journal/provider/provider.js#L60) -> v2/generic/all/recordedInvoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { currentMonth = false, lastMonth = false, lastThreeMonths = false, currentYear = false, startingFrom = '', ...restFilter } = filter; const fitlerTransformed = { ...(currentMonth ? getCurrentMonth('dueDate') : {}), ...(lastMonth ? getLastMonth('dueDate') : {}), ...(lastThreeMonths ? getLastThreeMonths('dueDate') : {}), ...(currentYear ? getCurrentYear('dueDate') : {}), ...(!isEmpty(startingFrom) ? getStartingFromDate('dueDate', startingFrom) : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...restFilter }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/recordedInvoice', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/sales-journal/provider/provider.js#L96) -> v2/generic/all/recordedInvoice | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/recordedInvoice' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
