# Devis – Invoices list

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis
- **Ressource** : mdp-invoices
- **Clé / route** : invoices_list
- **Type d'écran** : Vue composite
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : List Mdp Invoices — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_CLIENT_LIST : url `v2/generic/all/customer`.
- GET_EXECUTED_SERVICE : url `customTable/list/CE_SERVICE_EXECUTANT`, options {"method":"POST"}.
- GET_LEGAL_COMMITMENT : url `customTable/list/CE_ENGAGEMENT_JURIDIQUE`, options {"method":"POST"}.
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
- UPDATE_STATUS : url `cpq/quotes/:code/status/:toStatus`, options {"method":"PUT"}.
- UPDATE_VERSION_STATUS : url `cpq/quotes/quoteVersions/:quoteCode/:version/status/:toStatus`, options {"method":"PUT"}.
- CREATE_VERSION : url `cpq/quotes/quoteVersions`.
- PLACE_ORDER : url `cpq/quotes/:quoteCode/quoteVersions/:version/orderPlacement`.
- DUPLICATE_VERSION : url `cpq/quotes/:quoteCode/:version/duplication`.
- QUOTATION : url `cpq/quotes/quoteVersions/:code/:version/quotation`, options {"method":"POST"}.
- GENERATE_PDF : url `cpq/quotes/quoteVersions/:code/:version/xmlGeneration?generatePdf=:generateState`, options {"method":"POST"}.
- DOWNLOAD_PDF : url `admin/files/downloadFile?file=quotes/pdf/:fileName`, options {"method":"GET"}.
- QUOTE_PRICE : getListV2({
  url: 'v2/generic/all/QuotePrice',
  nestedEntities,
  keyColumn: 'code'
}).
- GET_QUOTE_OFFER_LIST : url `v2/generic/all/QuoteOffer`, options {"method":"POST"}.
- GET_INFOS_VENDEUR : url `infosVendeur/:clientDonneurOrdreId/:createurDevisId`, options {"method":"GET"}.
- GET_INFOS_INTERLOCUTEURS : url `customTable/list/CE_INTERLOCUTEUR`, options {"method":"POST"}.
- GET_CUSTOMER_BY_ID : url `[object Object]`, options {"method":"POST"}.
- GET_INVOICE_LIST : url `v2/generic/all/invoice`.
- GET_ONE_BILLING_ACCOUNT : url `account/billingAccount/list`, options {"method":"GET"}.

## Localisation et libellés
- Libellé FR : Devis.
- Libellé EN : Quotes.