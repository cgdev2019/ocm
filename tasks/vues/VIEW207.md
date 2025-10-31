# Versions de prix – PATH PRICE MATRIX CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Versions de prix
- **Ressource** : price-matrix
- **Clé / route** : PATH_PRICE_MATRIX_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQPrice Matrix — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/pricePlanMatrixVersion',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/pricePlanMatrixVersion',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/pricePlanMatrixVersion/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'catalog/pricePlan/pricePlanMatrixVersion',
  method: 'POST',
  responseContainer: 'pricePlanVersion'
}).
- UPDATE : getUpdateProvider({
  url: 'catalog/pricePlan/pricePlanMatrixVersion',
  method: 'PUT',
  responseContainer: 'pricePlanVersion'
}).
- DELETE_PRICEPLAN : getDeleteProvider({
  url: `catalog/pricePlan/:pricePlanMatrixCode/pricePlanMatrixVersions/:currentVersion`,
  method: 'DELETE'
}).
- PUBLISH_VERSION : url `catalog/pricePlan/:code/pricePlanMatrixVersions/:version/status/PUBLISHED`, options {"method":"PUT"}.
- DUPLICATE_VERSION : url `[object Object]`, méthode POST.
- CHECK_IF_USED : url `v2/pricePlans/:ppmc/pricePlanVersions/:ppmv/checkIfUsed`, options {"method":"GET"}.
- DELETE_VERSION : url `[object Object]`, options {"method":"DELETE"}.

## Localisation et libellés
- Libellé FR : Versions de prix.
- Libellé EN : Price versions.