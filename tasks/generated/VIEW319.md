# VIEW319 — EDRs – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.608Z à partir de `tasks/vues/VIEW319.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : EDRs
- Ressource : event-details-records
- Clé / route : list
- Type d'écran : Liste groupée
- Menu : mediation (priorité 2)
- Icône : QueryBuilder

### Libellés
- FR : EDRs.
- EN : EDRs.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/EDR

```text
getListV2({
  url: 'v2/generic/all/EDR',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/EDR
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/event-details-records
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/event-details-records/provider/provider.js#L17) -> v2/generic/all/EDR | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/EDR', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/event-details-records/provider/provider.js#L22) -> v2/generic/all/EDR | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/EDR', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/EDR

```text
getListV2({
  url: 'v2/generic/all/EDR',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/EDR
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/event-details-records
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/event-details-records/provider/provider.js#L17) -> v2/generic/all/EDR | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/EDR', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/event-details-records/provider/provider.js#L22) -> v2/generic/all/EDR | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/EDR', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
