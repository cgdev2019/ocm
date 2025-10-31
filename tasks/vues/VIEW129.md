# Commandes – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Commandes
- **Ressource** : orders
- **Entité métier** : org.meveo.model.order.Order
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : Dns

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `orderDate` ; type date ; utilisable en filtre
- Colonne 2 : source `billingAccount.id`
- Colonne 3 : source `quote.quoteNumber`
- Colonne 4 : source `orderNumber` ; utilisable en filtre
- Colonne 5 : source `orderType.description`
- Colonne 6 : source `status` ; type status
- Colonne 7 : source `orderProgress` ; type [object Object]
- Colonne 8 : source `label` ; utilisable en filtre
- Colonne 9 : source `auditable.created` ; type date

### Recherche et filtres
- champ `searchBar` (filtre {"order":0,"type":"searchbar","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const query = `a.id in (select t.id from org.meveo.model.cpq.commercial.CommercialOrder t left join t.billingAccount ac where ((lower(t.orderNumber) LIKE lower('%${value}%')) OR (lower(t.salesPersonName) LIKE lower('%${value}%')) OR (lower(ac.code) LIKE lower('%${value}%'))))`;\n  return query;\n}"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBar","originalWidth":"222px"}})
- champ `billingAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `quote` (filtre {"nestedField":{"source":"quoteNumber","prefix":"wildcardOrIgnoreCase"}})
- champ `orderType` (filtre {"nestedField":{"source":"description","prefix":"wildcardOrIgnoreCase"}})
- champ `status` (type list, filtre true)
- champ `salesPersonName` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Bouton de création disponible.
- Export des données autorisé.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Tri initial : {"field":"auditable.created","order":"DESC"}.

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