# Média – List

- **Groupe fonctionnel** : Catalog
- **Module** : Média
- **Ressource** : digital-resources
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `label` ; utilisable en filtre
- Colonne 3 : source `currentMedia` ; type image

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/media',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/media',
  nestedEntities,
  keyColumn
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/media/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'media',
  method: 'POST',
  responseContainer: 'mediaDto'
}).
- UPDATE : getDeleteProvider({
  url: 'media',
  method: 'PUT',
  responseContainer: 'dmediaDto'
}).
- DELETE : getUpdateProvider({
  url: 'media/',
  method: 'DELETE'
}).
- DELETE_MANY : getUpdateProvider({
  url: 'media/',
  method: 'DELETE'
}).
- UPLOAD : url `v2/media/files/upload`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Média.
- Libellé EN : Media.