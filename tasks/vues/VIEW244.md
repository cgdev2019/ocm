# Articles – PATH ARTICLE EDIT

- **Groupe fonctionnel** : Finance
- **Module** : Articles
- **Ressource** : articles
- **Clé / route** : PATH_ARTICLE_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit B2BArticles — aucun paramètre spécifique confirmé dans la configuration

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

## Localisation et libellés
- Libellé FR : Articles.
- Libellé EN : Articles.