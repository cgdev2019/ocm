# Gammes – PATH PRODUCT LINE EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Gammes
- **Ressource** : products-line
- **Clé / route** : PATH_PRODUCT_LINE_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQProduct Line — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/productLine',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/productLine',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/productLine/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'catalog/products/productLines',
  responseContainerId: 'actionStatus.entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'catalog/products/productLines'
}).
- DELETE : getDeleteProvider({
  url: 'catalog/products/productLines/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'catalog/products/productLines/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Gammes.
- Libellé EN : Product families.