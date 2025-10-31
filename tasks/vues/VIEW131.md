# Commandes – PATH ORDER EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Commandes
- **Ressource** : orders
- **Entité métier** : org.meveo.model.order.Order
- **Clé / route** : PATH_ORDER_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : Dns

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQOrder — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/commercialOrder',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/commercialOrder/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/commercialOrder',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/commercialOrder',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'orderManagement/commercialOrders/',
  keyColumn
}).
- UPDATE : getUpdateProvider({
  url: 'orderManagement/commercialOrders',
  keyColumn,
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/generic/order/:id',
  responseContainer: 'data',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/order/:id',
  responseContainer: 'data',
  nestedEntities
}).
- DUPLICATE : url `orderManagement/commercialOrders/:id/duplication`.
- VALIDATE : url `orderManagement/commercialOrders/:id/orderValidation`.
- UPDATE_STATUS : url `orderManagement/commercialOrders/:id/status/:newStatus`, options {"method":"PUT"}.
- UPDATE_PROGRESS : url `orderManagement/commercialOrders/:commercialOrderId/orderProgress/:progress`, options {"method":"PUT"}.
- ADD_ORDER_TYPE : url `orderManagement/orderTypes`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Commandes.
- Libellé EN : Orders.