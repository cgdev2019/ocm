# VIEW310 — Cycles de facturation – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.601Z à partir de `tasks/vues/VIEW310.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Cycles de facturation
- Ressource : billing-cycles
- Clé / route : list
- Type d'écran : Liste simple
- Menu : billing-rules (priorité 3)
- Icône : InsertDriveFile

### Libellés
- FR : Cycles de facturation.
- EN : Billing cycles.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/BillingCycle

```text
getListV2({
  url: 'v2/generic/all/BillingCycle',
  nestedEntities,
  genericFields
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/BillingCycle
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/billing-cycles
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/billing-cycles/provider/provider.js#L18) -> v2/generic/all/BillingCycle | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/BillingCycle', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/operation/modules/billing-cycles/provider/provider.js#L26) -> v2/generic/all/BillingCycle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/BillingCycle', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/BillingCycle

```text
getListV2({
  url: 'v2/generic/all/BillingCycle',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/BillingCycle
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/billing-cycles
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/billing-cycles/provider/provider.js#L18) -> v2/generic/all/BillingCycle | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFields / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/BillingCycle', nestedEntities, genericFields } - GET_MANY (src/srcProject/layout/operation/modules/billing-cycles/provider/provider.js#L26) -> v2/generic/all/BillingCycle | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/BillingCycle', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
