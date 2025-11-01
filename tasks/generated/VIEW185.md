# VIEW185 — Règles commerciales source – PATH COMMERCIAL RULE SOURCE EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.514Z à partir de `tasks/vues/VIEW185.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Règles commerciales source
- Ressource : commercial-rule-source
- Clé / route : PATH_COMMERCIAL_RULE_SOURCE_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Règles commerciales source.
- EN : Commercial rule source.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/commercialRuleHeader

```text
getListV2({
  url: 'v2/generic/all/commercialRuleHeader',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/commercialRuleHeader
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L25) -> v2/generic/all/commercialRuleHeader | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialRuleHeader', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L28) -> v2/generic/all/commercialRuleHeader | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialRuleHeader', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/commercialRuleHeader

```text
getListV2({
  url: 'v2/generic/all/commercialRuleHeader',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/commercialRuleHeader
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - GET_LIST (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L25) -> v2/generic/all/commercialRuleHeader | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialRuleHeader', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L28) -> v2/generic/all/commercialRuleHeader | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/commercialRuleHeader', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/commercialRuleHeader

```text
getOneV2({
  url: 'v2/generic/commercialRuleHeader/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/commercialRuleHeader
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - GET_ONE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L32) -> v2/generic/commercialRuleHeader/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/commercialRuleHeader/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /commercialRules

```text
getCreateProvider({
  url: 'commercialRules',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /commercialRules
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - CREATE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L35) -> commercialRules | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'commercialRules', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L41) -> commercialRules | request: helper.method: PUT / info: helper: getDeleteProvider | helperArgs: { url: 'commercialRules', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /commercialRules

```text
getDeleteProvider({
  url: 'commercialRules',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /commercialRules
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - CREATE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L35) -> commercialRules | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'commercialRules', method: 'POST' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - UPDATE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L41) -> commercialRules | request: helper.method: PUT / info: helper: getDeleteProvider | helperArgs: { url: 'commercialRules', method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /commercialRuleSource

```text
getUpdateProvider({
  url: 'commercialRuleSource/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /commercialRuleSource
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - DELETE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L47) -> commercialRuleSource/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'commercialRuleSource/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L53) -> commercialRuleSource/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'commercialRuleSource/', method: 'DELETE' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /commercialRuleSource

```text
getUpdateProvider({
  url: 'commercialRuleSource/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /commercialRuleSource
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: catalog/commercial-rule-source
      - Description: - DELETE (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L47) -> commercialRuleSource/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'commercialRuleSource/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/commercial-rule-source/provider/provider.js#L53) -> commercialRuleSource/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'commercialRuleSource/', method: 'DELETE' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
