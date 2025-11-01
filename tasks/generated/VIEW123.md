# VIEW123 — Order attributes – PATH ORDER ATTRIBUTE CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.444Z à partir de `tasks/vues/VIEW123.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Order attributes
- Ressource : order-attributes
- Clé / route : PATH_ORDER_ATTRIBUTE_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Order attributes.
- EN : Order attributes.

## Fournisseurs et API associées

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/OrderAttribute

```text
getOneV2({
  url: 'v2/generic/OrderAttribute/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/OrderAttribute
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-attributes
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/order-attributes/provider/provider.js#L27) -> v2/generic/OrderAttribute | response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { url: 'v2/generic/OrderAttribute', responseContainerId: 'id' }

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OrderAttribute

```text
getListV2({
  url: 'v2/generic/all/OrderAttribute',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/OrderAttribute

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OrderAttribute

```text
getListV2({
  url: 'v2/generic/all/OrderAttribute',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/OrderAttribute

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OrderAttribute

```text
getListV2({
  url: 'v2/generic/all/OrderAttribute',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/OrderAttribute

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/generic/OrderAttribute

```text
getCreateProvider({
  url: 'v2/generic/OrderAttribute',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/OrderAttribute
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-attributes
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/order-attributes/provider/provider.js#L27) -> v2/generic/OrderAttribute | response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { url: 'v2/generic/OrderAttribute', responseContainerId: 'id' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/generic/OrderAttribute/:id

```text
getUpdateProvider({
  url: 'v2/generic/OrderAttribute/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/OrderAttribute/:id

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
