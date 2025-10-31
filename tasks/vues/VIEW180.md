# Attributs métiers – PATH BUSINESS ATTRIBUTES EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs métiers
- **Ressource** : business-attributes
- **Clé / route** : PATH_BUSINESS_ATTRIBUTES_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : catalog-manager (priorité 6)
- **Icône** : Update

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit ADMINBusiness Attributes — aucun paramètre spécifique confirmé dans la configuration

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