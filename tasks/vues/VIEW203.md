# Dimensions de grille – PATH MATRIX COLUMNS EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Dimensions de grille
- **Ressource** : matrix-columns
- **Clé / route** : PATH_MATRIX_COLUMNS_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQMatrix Columns — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/PricePlanMatrixColumn',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/PricePlanMatrixColumn',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/pricePlanMatrixVersion/',
  // Not a typo, we're loading the columns from the version (!)
  nestedEntities: ['columns.attribute', 'lines.pricePlanMatrixValues.pricePlanMatrixColumn', 'pricePlanMatrix']
}).
- CREATE : getCreateProvider({
  url,
  method: 'POST',
  responseContainer: 'pricePlanMatrixColumnDto'
}).
- UPDATE : getUpdateProvider({
  url,
  method: 'PUT',
  responseContainer: 'pricePlanMatrixColumnDto'
}).
- DELETE : getDeleteProvider({
  url: deleteUrl,
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: deleteUrl,
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Dimensions de grille.
- Libellé EN : Grid dimensions.