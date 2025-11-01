# VIEW248 — Journal de banque – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.563Z à partir de `tasks/vues/VIEW248.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Journal de banque
- Ressource : cash-journal
- Clé / route : list
- Type d'écran : Liste groupée
- Menu : reports (priorité 5)
- Icône : Dashboard

### Libellés
- FR : Journal de banque.
- EN : Bank journal.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountOperation

```text
getListV2({
  url: 'v2/generic/all/accountOperation',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/accountOperation
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payments-logs, finance/cash-journal, finance/payments-logs
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L230) -> v2/generic/all/accountOperation | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L239) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - AOS (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L246) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities | helper.genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'] | helper.otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities, genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'], otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L266) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/cash-journal/provider/provider.js#L52) -> v2/generic/all/accountOperation | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { currentMonth = false, currentYear = false, lastMonth = false, lastThreeMonths = false, lastYear = false, startingFrom = '', ...restFilter } = filter; const fitlerTransformed = { ...(currentYear ? getCurrentYear('dueDate') : {}), ...(currentMonth ? getCurrentMonth('dueDate') : {}), ...(lastMonth ? getLastMonth('dueDate') : {}), ...(lastThreeMonths ? getLastThreeMonths('dueDate') : {}), ...(lastYear ? getLastYear('dueDate') : {}), ...(!isEmpty(startingFrom) ? getStartingFromDate('dueDate', startingFrom) : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'customerAccount.customer.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'customerAccount.customer.seller.code': ENGIE_EKKO_seller } : {}), ...restFilter }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/cash-journal/provider/provider.js#L91) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L207) -> v2/generic/all/accountOperation | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L216) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - AOS (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L224) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities | helper.genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'] | helper.otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities, genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'], otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L238) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountOperation

```text
getListV2({
  url: 'v2/generic/all/accountOperation',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/accountOperation
    - POST — Used in 10 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payments-logs, finance/cash-journal, finance/payments-logs
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L230) -> v2/generic/all/accountOperation | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L239) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - AOS (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L246) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities | helper.genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'] | helper.otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities, genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'], otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/payments-logs/provider/provider.js#L266) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/cash-journal/provider/provider.js#L52) -> v2/generic/all/accountOperation | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { currentMonth = false, currentYear = false, lastMonth = false, lastThreeMonths = false, lastYear = false, startingFrom = '', ...restFilter } = filter; const fitlerTransformed = { ...(currentYear ? getCurrentYear('dueDate') : {}), ...(currentMonth ? getCurrentMonth('dueDate') : {}), ...(lastMonth ? getLastMonth('dueDate') : {}), ...(lastThreeMonths ? getLastThreeMonths('dueDate') : {}), ...(lastYear ? getLastYear('dueDate') : {}), ...(!isEmpty(startingFrom) ? getStartingFromDate('dueDate', startingFrom) : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'customerAccount.customer.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'customerAccount.customer.seller.code': ENGIE_EKKO_seller } : {}), ...restFilter }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/cash-journal/provider/provider.js#L91) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L207) -> v2/generic/all/accountOperation | request: prepareParams: prepareParams | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L216) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities } - AOS (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L224) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities | helper.genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'] | helper.otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities, genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'], otherParams: { groupBy: ['customerAccount.id', 'transactionCategory'] } } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/payments-logs/provider/provider.js#L238) -> v2/generic/all/accountOperation | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/accountOperation', responseContainer: 'data', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
