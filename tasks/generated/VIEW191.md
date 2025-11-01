# VIEW191 — Ligne de remise – PATH DISCOUNT LINE CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.516Z à partir de `tasks/vues/VIEW191.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Ligne de remise
- Ressource : discount-lines
- Clé / route : PATH_DISCOUNT_LINE_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Ligne de remise.
- EN : Discount line.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/discountPlanItem

```text
getListV2({
  url: 'v2/generic/all/discountPlanItem',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/discountPlanItem
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L14) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L17) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L18) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L21) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/discountPlanItem

```text
getListV2({
  url: 'v2/generic/all/discountPlanItem',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/discountPlanItem
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L14) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L17) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities } - GET_LIST (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L18) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities } - GET_MANY (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L21) -> v2/generic/all/discountPlanItem | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/discountPlanItem', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/discountPlanItem

```text
getOneV2({
  url: 'v2/generic/discountPlanItem/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/discountPlanItem
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L21) -> v2/generic/discountPlanItem/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/discountPlanItem/', nestedEntities } - GET_ONE (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L25) -> v2/generic/discountPlanItem/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/discountPlanItem/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /catalog/discountPlanItem

```text
getCreateProvider({
  url: 'catalog/discountPlanItem',
  method: 'POST',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/discountPlanItem
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L25) -> catalog/discountPlanItem | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'POST', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L29) -> catalog/discountPlanItem | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L33) -> catalog/discountPlanItem | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'PUT', responseContainerId: 'entityId' } - UPDATE (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L37) -> catalog/discountPlanItem | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'PUT', responseContainerId: 'entityId' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /catalog/discountPlanItem

```text
getUpdateProvider({
  url: 'catalog/discountPlanItem',
  method: 'PUT',
  responseContainerId: 'entityId'
}).
```

- Opérations correspondantes :
  - Chemin /catalog/discountPlanItem
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L25) -> catalog/discountPlanItem | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'POST', responseContainerId: 'entityId' } - CREATE (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L29) -> catalog/discountPlanItem | request: helper.method: POST / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'POST', responseContainerId: 'entityId' }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L33) -> catalog/discountPlanItem | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'PUT', responseContainerId: 'entityId' } - UPDATE (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L37) -> catalog/discountPlanItem | request: helper.method: PUT / response: helper.responseContainerId: entityId / info: helper: getUpdateProvider | helperArgs: { url: 'catalog/discountPlanItem', method: 'PUT', responseContainerId: 'entityId' }

### DELETE_DISCOUNT_LINE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /catalog/discountPlanItem/:discountPlanItemCode

```text
getDeleteProvider({
  url: 'catalog/discountPlanItem/:discountPlanItemCode',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - catalog/discountPlanItem/:discountPlanItemCode

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/discountPlanItem

```text
getDeleteProvider({
  url: 'cpq/discountPlanItem/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/discountPlanItem
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/discount-lines, catalog/discount-lines
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/discount-lines/provider/provider.js#L48) -> cpq/discountPlanItem/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/discountPlanItem/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/catalog/modules/discount-lines/provider/provider.js#L52) -> cpq/discountPlanItem/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/discountPlanItem/', method: 'DELETE' }

### DUPLICATE_PRICE_PLAN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
