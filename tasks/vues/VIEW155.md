# Devis modificatifs – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis modificatifs
- **Ressource** : quotes-old
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
- champ `applicantAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (action directe).
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
  url: '/api/rest/cpq/quotes/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: '/api/rest/cpq/quotes/',
  method: 'DELETE'
}).
- UPDATE_STATUS : url `cpq/quotes/:code/status/:toStatus`, options {"method":"PUT"}.
- UPDATE_VERSION_STATUS : url `cpq/quotes/quoteVersions/:quoteCode/:version/status/:toStatus`, options {"method":"PUT"}.
- CREATE_VERSION : url `cpq/quotes/quoteVersions`.
- PLACE_ORDER : url `cpq/quotes/:quoteCode/quoteVersions/:version/orderPlacement`.
- DUPLICATE_VERSION : url `cpq/quotes/:quoteCode/:version/duplication`.
- QUOTATION : url `cpq/quotes/quoteVersions/:code/:version/quotation`, options {"method":"POST"}.
- GENERATE_PDF : url `cpq/quotes/quoteVersions/:code/:version/xmlGeneration?generatePdf=:generateState`, options {"method":"POST"}.
- DOWNLOAD_PDF : url `admin/files/downloadFile?file=quotes/pdf/:fileName`, options {"method":"GET"}.

## Localisation et libellés
- Libellé FR : Devis modificatifs.
- Libellé EN : Amendment quotes.