# Attributs – List

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs
- **Ressource** : attributes
- **Entité métier** : org.meveo.model.cpq.Attribute
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : Update

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description` ; utilisable en filtre
- Colonne 3 : source `attributeType` ; choix (undefined) ; utilisable en filtre
- Colonne 4 : source `auditable.created` ; type date

### Recherche et filtres
- champ `disabled` (type boolean, filtre true)
- champ `creationDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"auditable.created BETWEEN __startDate AND __endDate"})

### Actions et interactions
- Suppression possible depuis la liste.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/attribute',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/attribute',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'attributes',
  showErrorFromContainer: true,
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'attributes',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'attributes/',
  method: 'DELETE'
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/attribute/',
    params: {
      nestedEntities
    }
  }, {
    url: 'commercialRules/attributeRules?attributeCode=:@res.code',
    responseContainer: 'commercialRules',
    autoAppendId: false
  }],
  sync: true,
  transformResponse: aggregateCommercialRules
}).

## Localisation et libellés
- Libellé FR : Attributs.
- Libellé EN : Attributes.