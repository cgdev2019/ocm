# Articles – List

- **Groupe fonctionnel** : Catalog
- **Module** : Articles
- **Ressource** : articles
- **Entité métier** : org.meveo.model.article.AccountingArticle
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : FilterNone

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `invoiceSubCategory.description` ; utilisable en filtre
- Colonne 3 : source `description` ; utilisable en filtre
- Colonne 4 : source `taxClass.description` ; utilisable en filtre
- Colonne 5 : source `accountingCode.code+accountingCode.description`

### Recherche et filtres
- champ `description` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `accountingCode` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})

### Actions et interactions
- Bouton de création disponible.
- Suppression possible depuis la liste.
- Export des données autorisé.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountingArticle',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountingArticle',
  nestedEntities
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/accountingArticle/',
    params: {
      nestedEntities
    }
  }, {
    url: 'v2/generic/all/articleMappingLine/',
    responseContainer: 'data',
    autoAppendId: false,
    params: {
      filters: {
        'accountingArticle->id': '@res.id'
      }
    }
  }],
  sync: true,
  transformResponse: aggregateArticle
}).
- CREATE : getCreateProvider({
  url: 'v2/articles',
  method: 'POST',
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'v2/articles/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/articles/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'articles/',
  method: 'DELETE'
}).
- ACCOUNITNG_CODE_UPDATE : getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    const {
      accountingArticleCode
    } = data;
    return `v2/articles/${accountingArticleCode}/accountingCodeMapping`;
  },
  method: 'PUT',
  responseContainerId: 'id'
}).
- ACCOUNITNG_CODE_CREATE : getCreateProvider({
  url: 'v2/articles/accountingCodeMapping',
  method: 'POST',
  responseContainerId: 'id'
}).

## Localisation et libellés
- Libellé FR : Articles.
- Libellé EN : Articles.