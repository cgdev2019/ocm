# VIEW320 — Paramètres EDR – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.609Z à partir de `tasks/vues/VIEW320.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Paramètres EDR
- Ressource : event-details-records-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : mediation (priorité 2)
- Icône : QueryBuilder

### Libellés
- FR : Paramètres EDR.
- EN : EDR settings.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/mediationSetting

```text
getListV2({
  url: 'v2/generic/all/mediationSetting',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/mediationSetting
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/event-details-records-settings
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/event-details-records-settings/provider/provider.js#L20) -> v2/generic/all/mediationSetting | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/mediationSetting', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/event-details-records-settings/provider/provider.js#L25) -> v2/generic/all/mediationSetting | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/mediationSetting', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/mediationSetting

```text
getListV2({
  url: 'v2/generic/all/mediationSetting',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/mediationSetting
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: operation/event-details-records-settings
      - Description: - GET_LIST (src/srcProject/layout/operation/modules/event-details-records-settings/provider/provider.js#L20) -> v2/generic/all/mediationSetting | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/mediationSetting', nestedEntities } - GET_MANY (src/srcProject/layout/operation/modules/event-details-records-settings/provider/provider.js#L25) -> v2/generic/all/mediationSetting | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/mediationSetting', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/mediationSetting

```text
getUpdateProvider({
  url: 'v2/mediationSetting',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /v2/mediationSetting
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: operation/event-details-records-settings
      - Description: - CREATE (src/srcProject/layout/operation/modules/event-details-records-settings/provider/provider.js#L30) -> v2/mediationSetting | request: helper.method: POST / info: helper: getUpdateProvider | helperArgs: { url: 'v2/mediationSetting', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/mediationSetting/{id}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/mediationSetting/${data.id}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/mediationSetting/${data.id}

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
