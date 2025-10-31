# Articles – List

- **Groupe fonctionnel** : Administration
- **Module** : Articles
- **Ressource** : articles
- **Entité métier** : org.meveo.model.article.AccountingArticle
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : finance-settings (priorité 3)
- **Icône** : FilterNone

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description` ; utilisable en filtre
- Colonne 3 : source `taxClass.description` ; utilisable en filtre
- Colonne 4 : source `cfValues.valuesByCode.CF_CODE_ORACLE.0.value` ; libellé "Code Oracle"

### Recherche et filtres
- champ `accountingCode` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `invoiceType` (type reference list, référence {{modulePath}}/{{ADMIN_INVOICE_TYPES}}, filtre {"nestedField":{"source":"code"}})
- champ `unitPrice` (type range number, filtre true)

### Actions et interactions
- Bouton de création disponible.
- Suppression possible depuis la liste.
- Export des données autorisé.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 50 éléments.

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
  }, {
    url: 'v2/generic/all/AccountingCodeMapping/',
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