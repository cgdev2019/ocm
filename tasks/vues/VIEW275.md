# Produits – List

- **Groupe fonctionnel** : Finance
- **Module** : Produits
- **Ressource** : products
- **Clé / route** : list
- **Type d'écran** : Liste simple

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite
- Colonne 2 : source `medias` ; type image
- Colonne 3 : source `auditable.created` ; type date

### Recherche et filtres
- champ `reference` (filtre {"wildcard":true})
- champ `currentVersion.tags.id` (référence {{modulePath}}/catalog-manager/{{CPQ_TAGS}}, filtre true)
- champ `isModel` (type boolean, filtre {"wildcard":false})

### Actions et interactions
- Import de fichier activé.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/product',
  nestedEntities,
  keyColumn
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/product',
  nestedEntities,
  keyColumn
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/product/',
    params: {
      nestedEntities
    }
  }, {
    url: 'commercialRules/productRules?productCode=:@res.code',
    responseContainer: 'commercialRules',
    autoAppendId: false
  }],
  sync: true,
  transformResponse: aggregateCommercialRules
}).
- CREATE : getCreateProvider({
  url: 'catalog/products/',
  method: 'POST',
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params || {};
    const {
      prevCode = ''
    } = data || {};
    return `catalog/products/${prevCode}`;
  },
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'catalog/products/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'catalog/products/',
  method: 'DELETE',
  showErrorFromContainer: true
}).
- UPDATE_STATUS : url `catalog/products/:codeProduct/status/:toStatus`, options {"method":"PUT"}.
- CREATE_VERSION : url `catalog/products/productVersion`.
- DELETE_VERSION : url `catalog/products/:codeProduct/productVersions/:codeVersion`, méthode DELETE.
- DUPLICATE_VERSION : url `catalog/products/:codeProduct/productVersions/:codeVersion/duplication`.
- UPDATE_VERSION_STATUS : url `catalog/products/:codeProduct/productVersions/:codeVersion/status/:versionStatus`, options {"method":"PUT"}.
- DUPLICATE : url `catalog/products/:productCode/duplication?duplicateHierarchy=true`.
- CUSTOM_GET_ONE_PRODUCT : url `v2/generic/product/:productId`, options {"method":"POST"}.
- EXPORT_TO_REMOTE_INSTANCE : url `v2/importExport/exportData`, options {"method":"POST"}.
- DOWNLAOD_AS_XML : url `v2/importExport/exportData`, options {"method":"POST"}.
- UPLOAD_FILE : url `v2/importExport/importData`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Produits.
- Libellé EN : Products.