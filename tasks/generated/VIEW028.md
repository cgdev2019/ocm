# VIEW028 — Devises – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.341Z à partir de `tasks/vues/VIEW028.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Devises
- Ressource : currencies
- Clé / route : racine du module
- Type d'écran : Fiche de consultation

### Libellés
- FR : Devises.
- EN : Currencies.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/currency

```text
getListV2({
  url: 'v2/generic/all/currency',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /currency
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - CREATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L101) -> currency | request: helper.method: POST / response: helper.responseContainerId: entityId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'currency', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - UPDATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L109) -> currency | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'currency', method: 'PUT' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/currency

```text
getListV2({
  url: 'v2/generic/all/currency',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /currency
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - CREATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L101) -> currency | request: helper.method: POST / response: helper.responseContainerId: entityId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'currency', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - UPDATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L109) -> currency | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'currency', method: 'PUT' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/currency

```text
getListV2({
  url: 'v2/generic/currency/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /currency
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - CREATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L101) -> currency | request: helper.method: POST / response: helper.responseContainerId: entityId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'currency', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/trading-currencies
      - Description: - UPDATE (src/srcProject/layout/administration/modules/trading-currencies/provider.js#L109) -> currency | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'currency', method: 'PUT' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
