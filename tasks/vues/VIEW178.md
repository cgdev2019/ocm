# Attributs métiers – List

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs métiers
- **Ressource** : business-attributes
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : catalog-manager (priorité 6)
- **Icône** : Update

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description` ; utilisable en filtre
- Colonne 3 : source `active` ; type boolean ; utilisable en filtre
- Colonne 4 : source `elValue` ; utilisable en filtre

### Actions et interactions
- Suppression possible depuis la liste.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 50 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/attribute'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/attribute'
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/attribute/'
}).
- DELETE : getDeleteProvider({
  url: 'attributes/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'attributes/',
  method: 'DELETE',
  showErrorFromContainer: true
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

## Localisation et libellés
- Libellé FR : Attributs métiers.
- Libellé EN : Business attributes.