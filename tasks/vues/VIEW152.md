# Devis – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis
- **Ressource** : quotes
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `quoteDate` ; type date ; utilisable en filtre
- Colonne 3 : source `quoteNumber`
- Colonne 4 : source `applicantAccount.id`
- Colonne 5 : source `status` ; type status ; choix (6) ; utilisable en filtre
- Colonne 6 : source `description` ; utilisable en filtre
- Colonne 7 : source `auditable.created` ; type date

### Recherche et filtres
- champ `searchBar` (filtre {"order":0,"type":"searchbar","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.applicantAccount.code) LIKE lower('%${value}%')`, `lower(a.quoteNumber) LIKE lower('%${value}%')`, `lower(a.salesPersonName) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBar","originalWidth":"222px"}})
- champ `applicantAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `salesPersonName` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/CpqQuote',
  nestedEntities,
  keyColumn: 'code'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/CpqQuote',
  nestedEntities,
  keyColumn: 'code'
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/CpqQuote',
  nestedEntities,
  keyColumn: 'code'
}).
- GET_ONE : getOneV2({
  url: 'cpq/quotes/',
  keyColumn: 'code',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/quotes',
  method: 'POST',
  responseContainer: 'quoteDto'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/quotes',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: ({
    params
  }) => {
    return `/api/rest/cpq/quotes/`;
  },
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: '/api/rest/cpq/quotes/',
  method: 'DELETE'
}).
- GET_INFOS_VENDEUR : url `infosVendeur/:clientDonneurOrdreId/:createurDevisId?`, options {"method":"GET"}.
- GET_INFOS_VALID_VENDEUR : url `infosVendeur/listValidVendeur`, options {"method":"POST"}.
- UPDATE_STATUS : url `cpq/quotes/:code/status/:toStatus`, options {"method":"PUT"}.
- UPDATE_VERSION_STATUS : url `cpq/quotes/quoteVersions/:quoteCode/:version/status/:toStatus`, options {"method":"PUT"}.
- CREATE_VERSION : url `cpq/quotes/quoteVersions`.
- PLACE_ORDER : url `cpq/quotes/:quoteCode/quoteVersions/:version/orderPlacement`.
- DUPLICATE_VERSION : url `cpq/quotes/:quoteCode/:version/duplication`.
- QUOTATION : url `cpq/quotes/quoteVersions/:code/:version/v2/quotation`, options {"method":"POST"}.
- GENERATE_PDF : url `cpq/quotes/quoteVersions/:code/:version/xmlGeneration?generatePdf=:generateState`, options {"method":"POST"}.
- DOWNLOAD_PDF : url `admin/files/downloadFile?file=quotes/pdf/:fileName`, options {"method":"GET"}.
- UPDATE_VENDEUR : url `[object Object]`, options {"method":"POST"}.
- QUOTE_PRICE : getListV2({
  url: 'v2/generic/all/QuotePrice',
  nestedEntities,
  keyColumn: 'code'
}).

## Localisation et libellés
- Libellé FR : Devis.
- Libellé EN : Quotes.