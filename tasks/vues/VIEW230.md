# Produits – List

- **Groupe fonctionnel** : CPQ marketing manager
- **Module** : Produits
- **Ressource** : products
- **Entité métier** : org.meveo.model.cpq.Product
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite
- Colonne 2 : source `currentVersion.tags` ; type [object Object]

### Recherche et filtres
- champ `description` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `reference` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `currentVersion.tags.id` (référence {{modulePath}}/{{MM_TAGS}}, filtre true)

### Actions et interactions
- Suppression possible depuis la liste.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 20 éléments.

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