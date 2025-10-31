# Offres de la commande – PATH ORDER OFFER CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Offres de la commande
- **Ressource** : order-offers
- **Clé / route** : PATH_ORDER_OFFER_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQOrder Offers — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_ONE : getOneV2({
  url: 'v2/generic/orderOffer/',
  nestedEntities
}).
- GET_LIST : getListV2({
  url: 'v2/generic/all/orderOffer',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/orderOffer',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'orderManagement/commercialOrders/orderOffers'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'orderManagement/commercialOrders/orderOffers',
  method: 'PUT'
}).
- DELETE_ORDER_OFFER : getDeleteProvider({
  url: 'orderManagement/commercialOrders/orderOffers/:id',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Offres de la commande.
- Libellé EN : Order offers.