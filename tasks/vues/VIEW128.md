# Order products – PATH ORDER PRODUCT EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Order products
- **Ressource** : order-products
- **Clé / route** : PATH_ORDER_PRODUCT_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQOrder Products — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_ONE : getOneV2({
  url: 'v2/generic/orderProduct/',
  nestedEntities
}).
- GET_LIST : getListV2({
  url: 'v2/generic/all/orderProduct',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/orderProduct',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/orderProduct',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/generic/orderProduct',
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/generic/orderProduct/:id',
  method: 'PUT'
}).
- DELETE_ORDER_ATTRIBUTE : getDeleteProvider({
  url: 'v2/generic/OrderAttribute/:id',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Order products.
- Libellé EN : Order products.