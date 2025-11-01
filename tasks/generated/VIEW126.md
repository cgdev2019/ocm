# VIEW126 — Offres de la commande – PATH ORDER OFFER EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.446Z à partir de `tasks/vues/VIEW126.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Offres de la commande
- Ressource : order-offers
- Clé / route : PATH_ORDER_OFFER_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Offres de la commande.
- EN : Order offers.

## Fournisseurs et API associées

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/orderOffer

```text
getOneV2({
  url: 'v2/generic/orderOffer/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/orderOffer/

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/orderOffer

```text
getListV2({
  url: 'v2/generic/all/orderOffer',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/orderOffer

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/orderOffer

```text
getListV2({
  url: 'v2/generic/all/orderOffer',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/orderOffer

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /orderManagement/commercialOrders/orderOffers

```text
getCreateProvider({
  keyColumn,
  url: 'orderManagement/commercialOrders/orderOffers'
}).
```

- Opérations correspondantes :
  - Chemin /orderManagement/commercialOrders/orderOffers
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-offers
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/order-offers/provider/provider.js#L47) -> orderManagement/commercialOrders/orderOffers | request: helper.keyColumn: keyColumn / response: responseContainer: 'orderOfferDto' | responseContainerId: 'orderOfferId' / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'orderManagement/commercialOrders/orderOffers' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-offers
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/order-offers/provider/provider.js#L55) -> orderManagement/commercialOrders/orderOffers | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'orderManagement/commercialOrders/orderOffers', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /orderManagement/commercialOrders/orderOffers

```text
getUpdateProvider({
  keyColumn,
  url: 'orderManagement/commercialOrders/orderOffers',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /orderManagement/commercialOrders/orderOffers
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-offers
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/order-offers/provider/provider.js#L47) -> orderManagement/commercialOrders/orderOffers | request: helper.keyColumn: keyColumn / response: responseContainer: 'orderOfferDto' | responseContainerId: 'orderOfferId' / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'orderManagement/commercialOrders/orderOffers' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/order-offers
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/order-offers/provider/provider.js#L55) -> orderManagement/commercialOrders/orderOffers | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'orderManagement/commercialOrders/orderOffers', method: 'PUT' }

### DELETE_ORDER_OFFER

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /orderManagement/commercialOrders/orderOffers/:id

```text
getDeleteProvider({
  url: 'orderManagement/commercialOrders/orderOffers/:id',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - orderManagement/commercialOrders/orderOffers/:id

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
