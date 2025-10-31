# Articles – PATH ARTICLE CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Articles
- **Ressource** : articles
- **Entité métier** : org.meveo.model.article.AccountingArticle
- **Clé / route** : PATH_ARTICLE_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : FilterNone

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQCatalog Articles — aucun paramètre spécifique confirmé dans la configuration

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