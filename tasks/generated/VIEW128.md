# VIEW128 — Order products – PATH ORDER PRODUCT EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.447Z à partir de `tasks/vues/VIEW128.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Order products
- Ressource : order-products
- Clé / route : PATH_ORDER_PRODUCT_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Order products.
- EN : Order products.

## Fournisseurs et API associées

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/orderProduct

```text
getOneV2({
  url: 'v2/generic/orderProduct/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/orderProduct
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-products
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/order-products/provider/provider.js#L34) -> v2/generic/orderProduct | response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { url: 'v2/generic/orderProduct', responseContainerId: 'id' }

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/orderProduct

```text
getListV2({
  url: 'v2/generic/all/orderProduct',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/orderProduct

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/orderProduct

```text
getListV2({
  url: 'v2/generic/all/orderProduct',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/orderProduct

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/orderProduct

```text
getListV2({
  url: 'v2/generic/all/orderProduct',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/orderProduct

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/generic/orderProduct

```text
getCreateProvider({
  url: 'v2/generic/orderProduct',
  responseContainerId: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/orderProduct
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-products
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/order-products/provider/provider.js#L34) -> v2/generic/orderProduct | response: helper.responseContainerId: id / info: helper: getCreateProvider | helperArgs: { url: 'v2/generic/orderProduct', responseContainerId: 'id' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/generic/orderProduct/:id

```text
getUpdateProvider({
  url: 'v2/generic/orderProduct/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/orderProduct/:id

### DELETE_ORDER_ATTRIBUTE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/OrderAttribute/:id

```text
getDeleteProvider({
  url: 'v2/generic/OrderAttribute/:id',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/OrderAttribute/:id

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
