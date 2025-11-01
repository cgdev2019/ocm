# VIEW245 — Audit Log – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.560Z à partir de `tasks/vues/VIEW245.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Audit Log
- Ressource : audit-log
- Clé / route : list
- Type d'écran : Liste groupée
- Icône : Dashboard

### Libellés
- FR : Audit Log.
- EN : Audit Log.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/AuditLog

```text
getListV2({
  url: 'v2/generic/all/AuditLog',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/AuditLog
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/audit-log, B2B-customer-care/dunning-policies, catalog/audit-log, finance/audit-log, finance/dunning-policies
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/audit-log/provider/provider.js#L39) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/audit-log/provider/provider.js#L47) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - HISTORY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L103) -> v2/generic/all/AuditLog | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog' } - GET_LIST (src/srcProject/layout/catalog/modules/audit-log/provider/provider.js#L46) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/catalog/modules/audit-log/provider/provider.js#L54) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_LIST (src/srcProject/layout/finance/modules/audit-log/provider/provider.js#L46) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/finance/modules/audit-log/provider/provider.js#L54) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - HISTORY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L88) -> v2/generic/all/AuditLog | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/AuditLog

```text
getListV2({
  url: 'v2/generic/all/AuditLog',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/AuditLog
    - POST — Used in 8 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/audit-log, B2B-customer-care/dunning-policies, catalog/audit-log, finance/audit-log, finance/dunning-policies
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/audit-log/provider/provider.js#L39) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/audit-log/provider/provider.js#L47) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - HISTORY (src/srcProject/layout/B2B-customer-care/modules/dunning-policies/provider/provider.js#L103) -> v2/generic/all/AuditLog | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog' } - GET_LIST (src/srcProject/layout/catalog/modules/audit-log/provider/provider.js#L46) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/catalog/modules/audit-log/provider/provider.js#L54) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_LIST (src/srcProject/layout/finance/modules/audit-log/provider/provider.js#L46) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/finance/modules/audit-log/provider/provider.js#L54) -> v2/generic/all/AuditLog | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog', nestedEntities, genericFields } - HISTORY (src/srcProject/layout/finance/modules/dunning-policies/provider/provider.js#L88) -> v2/generic/all/AuditLog | response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/AuditLog' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
