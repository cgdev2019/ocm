# Modèles des commandes ouvertes – List

- **Groupe fonctionnel** : Finance
- **Module** : Modèles des commandes ouvertes
- **Ressource** : open-orders-templates
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : open-orders (priorité 4)
- **Icône** : AccountTree

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `templateName` ; utilisable en filtre
- Colonne 2 : source `openOrderType` ; choix (undefined)
- Colonne 3 : source `status` ; type status
- Colonne 4 : source `auditable.created` ; type date

### Recherche et filtres
- champ `creationDate` (filtre {"type":"date","transformFilterKey":{"__code":"() => 'auditable.created'"},"transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `creationDateBet` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","endDateFormat":"YYYY-MM-DD HH:mm","SQLFormat":"auditable.created BETWEEN __startDate AND __endDate"})
- champ `toRange auditable.created` (type date, filtre {"source":"toRange auditable->created","transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `fromRangeExclusive auditable.created` (type date, filtre {"source":"fromRangeExclusive auditable->created","transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `product` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"(value = '') => {\n  return `id IN (SELECT oot.id FROM org.meveo.model.ordering.OpenOrderTemplate oot INNER JOIN oot.products ootp WHERE lower(ootp.product.description) LIKE lower('%${value}%'))`;\n}"}})
- champ `article` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"(value = '') => {\n  return `id IN (SELECT oot.id FROM org.meveo.model.ordering.OpenOrderTemplate oot INNER JOIN oot.articles oota WHERE lower(oota.accountingArticle.description) LIKE lower('%${value}%'))`;\n}"}})

### Actions et interactions
- Bouton de création disponible.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 20 éléments.
- Choix de pagination : [5,10,20].
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/openOrderTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/openOrderTemplate',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'v2/ordering/openOrderTemplates',
  responseContainer: 'openOrderTemplate',
  responseContainerId: 'id',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: ({
    params: {
      data = {}
    } = {}
  }) => {
    return `v2/ordering/openOrderTemplates/${data.code}`;
  },
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/openOrderTemplate/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/all/openOrderTemplate',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/ordering/openOrderTemplates/:code/status/:newStatus`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : Modèles des commandes ouvertes.
- Libellé EN : Open orders templates.