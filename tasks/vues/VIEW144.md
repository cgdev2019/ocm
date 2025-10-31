# Clients – :id/new

- **Groupe fonctionnel** : B2B customer care
- **Module** : Clients
- **Ressource** : prestation
- **Clé / route** : :id/new
- **Type d'écran** : Vue composite
- **Icône** : AddLocation

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create New Prestation — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/quoteOffer',
  nestedEntities: quoteOfferNestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/quoteOffer/',
  nestedEntities: quoteOfferNestedEntitiesGetOne
}).
- CREATE : getCreateProvider({
  url: 'quote/create/quoteitems',
  method: 'PUT'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'quote/update/quoteitems',
  method: 'POST'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/quotes/quoteItems/',
  method: 'DELETE'
}).
- GET_OFFERS : url `catalog/offerTemplate/cpq/list`, options {"method":"POST"}.
- GET_PRODUCT_CONFIG : url `catalog/products/cpq/offers`, options {"method":"POST"}.
- GET_QUOTE : url `v2/generic/cpqQuote/:id`, options {"method":"POST","body":{"nestedEntities":[{"__code":"...quoteNestedEntities"}],"genericFields":[]}}.
- GET_PRODUCT : url `v2/generic/product/:id`, options {"method":"POST","body":{"nestedEntities":[{"__code":"...productNestedEntities"}],"genericFields":[]}}.
- GET_ATTRIBUTE_CONFIG : url `attributes/cpq/offers/:productCode/:productVersion`, options {"method":"POST"}.
- GET_OFFER_ATTRIBUTES : url `catalog/products/cpq/offers`, options {"method":"POST"}.
- GET_OFFER_ID : url `v2/generic/all/offerTemplate`, options {"method":"POST"}.
- GET_FB_INTERET : url `proxyFacebook/interet`, options {"method":"GET"}.
- GET_FB_LIEUX : url `[object Object]`, options {"method":"GET"}.
- GET_FB_REGION : url `[object Object]`, options {"method":"GET"}.
- VALIDATE_FB_SIMULATION : url `proxyFacebook/simulation`, options {"method":"POST"}.
- GET_GOOGLE_TOKEN : url `https://wspart-visiperf.mediapost.fr/oauth/v2/token`, options {"method":"POST"}.
- GET_LOCALITE_GOOGLE : url `proxyVisiperf/localiteClient?`, options {"method":"GET"}.
- GET_ACTIVITY_GOOGLE : url `proxyVisiperf/activiteClient?`, options {"method":"GET"}.
- VALIDATE_GOOGLE_SIMULATION : url `proxyVisiperf/valider?`, options {"method":"GET"}.
- SIMULATE_GOOGLE_API : url `proxyVisiperf/simulation`, options {"method":"POST"}.
- DELETE_QUOTE_OFFER : getDeleteProvider({
  url: 'cpq/quotes/quoteItems/:id',
  method: 'DELETE'
}).
- DUPLICATE_QUOTE_OFFER : options {"method":"POST"}.
- GET_PRODUCTLINE_BY_FILTER : url `v2/generic/all/productLine`, options {"method":"POST"}.
- GET_OFFERS_LIST_JSON : url `ProductsLine/:quoteId`, options {"method":"GET"}.
- UPDATE_QUOTE_OFFER : url `cpq/quotes/quoteItems`, options {"method":"PUT"}.
- DUPLICATE_PRESTATION : url `v2/quoteItems/:QuoteCode/:QuoteVersionNumero/:quoteOfferId/duplication`, options {"method":"POST"}.
- CREATE_ZONE : url `[object Object]`, options {"method":"POST","headers":{"Authorization":""}}.
- LIST_ZONE : url `[object Object]`, options {"method":"GET"}.
- LIST_ZONE_COMMEDIA : url `[object Object]`, options {"method":"GET"}.
- DUPLICATE_ZONE : url `[object Object]`, options {"method":"POST","errorContainer":"error"}.
- PATCH_AREA : url `[object Object]`, options {"method":"POST"}.
- COMPTAGE_WEBDATA : url `[object Object]`, options {"method":"POST"}.
- WEBDATA_TOKEN : url `[object Object]`, options {"method":"POST","headers":{"['Content-Type']":"application/x-www-form-urlencoded"}}.
- WEBDATA_PROXY : url `webdataProxy/comptage`, options {"method":"POST"}.
- IMPORT_COMMEDIA_ZONE : url `[object Object]`, options {"method":"POST"}.
- DUPLICATE_PRESTATION_API : url `[object Object]`, options {"method":"POST"}.
- GET_OFFER_TEMPLATE : url `v2/generic/all/offerTemplate`, options {"method":"POST"}.
- v : url `[object Object]`, options {"method":"GET"}.
- GET_SUBSCRIPTION : url `v2/generic/all/Subscription`, options {"method":"POST"}.
- GET_TERMINATION_REASON : url `terminationReason/list`, options {"method":"GET"}.
- TERMINATE_SUBSCRIPTION : url `billing/subscription/terminate`, options {"method":"POST"}.
- GET_OFFER_BY_ID : url `cpq/quotes/quoteItems/:offerId`, options {"method":"GET"}.
- ADD_RESILIATION_DATE_TO_PRESTATION : url `cpq/quotes/quoteItems`, options {"method":"PUT"}.
- GET_CARTO_TOKEN : url `[object Object]`, options {"method":"POST","headers":{"['Content-Type']":"application/x-www-form-urlencoded"}}.
- GET_HOLIDAYS_CALENDAR : url `v2/generic/all/Calendar`, options {"method":"POST"}.
- GET_CUSTOMIZED_QUOTE_VERSION : url `v2/generic/all/quoteVersion`, options {"method":"POST"}.
- GET_CUSTOMIZEDQUOTE_OFFER : url `v2/generic/all/quoteOffer`, options {"method":"POST"}.
- GET_VENT_ABO : url `customTable/list/CE_VENTILATION_CA_ABO`, options {"method":"POST"}.
- UPDATE_QUOTEITEMS : url `quote/update/quoteitemsAfterModif`, options {"method":"POST"}.
- PUT_GEOMARKETING_OFFER : url `v2/generic/quoteOffer/:id`, options {"method":"PUT"}.
- GET_CUSTOMER_HIERARCHY : url `customerHierarchy/:customerId`, options {"method":"POST","headers":{"['Content-Type']":"application/json"},"body":{"__code":"JSON.stringify({\n  nestedEntities: ['customerAccounts.billingAccounts', 'address.country', 'seller'],\n  genericFields: []\n})"}}.
- GET_LOG_MASTER : url `[object Object]`, options {"method":"GET"}.
- PUT_QUOTE_OFFER_BI_ID : url `[object Object]`, options {"method":"PUT"}.
- SEPALIA_PROXY : url `sepaliaProxy/mandates/:coclicoId`, options {"method":"GET"}.
- SUIVIE_PRESTATION : url `[object Object]`, options {"method":"POST"}.
- TERMINATE_WEBDATA_SUBSCRIPTION : url `webdataProxy/deleteSQAJob`, options {"method":"POST","errorContainer":"org.meveo.api.exception.MeveoApiException"}.
- GET_ORDER : url `v2/generic/all/quoteOffer`, options {"method":"POST"}.
- GET_CHOIX_POTENTIEL : url `customTable/list/CE_SMC_CHOIX_POTENTIEL_CONSO`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Clients.
- Libellé EN : Prestation.