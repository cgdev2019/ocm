# Catégories mots-clés – PATH TAGS TYPES CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Catégories mots-clés
- **Ressource** : type-tags
- **Clé / route** : PATH_TAGS_TYPES_CREATE
- **Type d'écran** : Formulaire de création
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQTag Types — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/tagType',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/tagType',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/tagType/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/tags/tagTypes',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/tags/tagTypes',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'cpq/tags/tagTypes/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/tags/tagTypes/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Catégories mots-clés.
- Libellé EN : Tag categories.