# Catégories mots-clés – List

- **Groupe fonctionnel** : Catalog
- **Module** : Catégories mots-clés
- **Ressource** : type-tags
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description`
- Colonne 3 : source `seller.code` ; utilisable en filtre

### Recherche et filtres
- champ `description` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

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