# Devis open order – PATH EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis open order
- **Ressource** : open-order-quotes
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : AccountTree

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Open Order Quote — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/openOrderQuote',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/openOrderQuote',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/openOrderQuote',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/openOrderQuote/',
  keyColumn,
  nestedEntities
  //transformResponse
}).
- CREATE : getCreateProvider({
  url: 'v2/ordering/open-order-quote',
  method: 'POST',
  responseContainerId,
  keyColumn
}).
- UPDATE : getUpdateProvider({
  url: 'v2/ordering/open-order-quote/:id',
  method: 'PUT',
  responseContainerId,
  keyColumn
}).
- DELETE : getDeleteProvider({
  url: 'v2/ordering/open-order-quote',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/ordering/open-order-quote/:code/status/:toStatus`, options {"method":"PUT"}.
- AVAILABLE_OPEN_ORDERS : url `v2/cpq/quotes/:code/availableOpenOrders`, options {"method":"GET"}.
- AVAILABLE_OPEN_ORDERS_ORDER : url `v2/commercialOrders/:code/availableOpenOrders`, options {"method":"GET"}.
- DUPLICATE : url `v2/ordering/open-order-quote/:id/duplicate`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Devis open order.
- Libellé EN : Open order quotes.