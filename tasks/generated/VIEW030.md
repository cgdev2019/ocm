# VIEW030 — Cycle run – PATH CYCLE RUN CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.343Z à partir de `tasks/vues/VIEW030.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Cycle run
- Ressource : cycle-run
- Clé / route : PATH_CYCLE_RUN_CREATE
- Type d'écran : Vue composite

### Libellés
- FR : Cycle run.
- EN : Cycle run.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/billingRun

```text
getListV2({
  url: 'v2/generic/all/billingRun',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingRun
    - POST — Used in 7 frontend location(s) (operationId: —)
      - Tags: administration/billing-run, operation/billing-run, operation/cycle-run
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L108) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L125) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/administration/modules/billing-run/provider/provider.js#L299) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L98) -> v2/generic/all/billingRun | request: prepareParams: params => { const { sort = {}, ...restParams } = params; const transformSort = { ...sort, field: 'id', order: 'DESC' }; return { sort: { ...transformSort }, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L114) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities } - GET_LIST_ORIGINAL (src/srcProject/layout/operation/modules/billing-run/provider/provider.js#L287) -> v2/generic/all/billingRun | response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | totalContainer: 'total' | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun' } - GET_LIST (src/srcProject/layout/operation/modules/cycle-run/provider/provider.js#L11) -> v2/generic/all/billingRun | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingRun', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /billing/invoicing/createBillingRun

```text
getCreateProvider({
  url: 'billing/invoicing/createBillingRun',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /billing/invoicing/createBillingRun
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/related-invoices, operation/cycle-run
      - Description: - CREATE_BILLING_RUN (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L454) -> billing/invoicing/createBillingRun | request: options: { method: 'POST' } - CREATE_BILLING_RUN (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L377) -> billing/invoicing/createBillingRun | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/operation/modules/cycle-run/provider/provider.js#L18) -> billing/invoicing/createBillingRun | request: helper.nestedEntities: nestedEntities / info: helper: getCreateProvider | helperArgs: { url: 'billing/invoicing/createBillingRun', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
