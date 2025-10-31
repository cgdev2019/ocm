# Devis open order – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis open order
- **Ressource** : open-order-quotes
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : AccountTree

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `quoteNumber` ; utilisable en filtre
- Colonne 2 : source `billingAccount.code` ; type link
- Colonne 3 : source `maxAmount` ; type number
- Colonne 4 : source `activationDate` ; type date ; utilisable en filtre
- Colonne 5 : source `endOfValidityDate` ; type date ; utilisable en filtre
- Colonne 6 : source `openOrderType` ; choix (2) ; utilisable en filtre
- Colonne 7 : source `auditable.created` ; type date
- Colonne 8 : source `status` ; type status ; choix (7) ; utilisable en filtre

### Recherche et filtres
- champ `billingAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `creationDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"auditable.created BETWEEN DATE(__startDate) AND  DATE(__endDate)+1"})

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 30 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

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