# VIEW143 — Clients – :id/modify

_Tâche générée automatiquement le 2025-11-01T00:49:51.457Z à partir de `tasks/vues/VIEW143.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Clients
- Ressource : prestation
- Clé / route : :id/modify
- Type d'écran : Vue composite
- Icône : AddLocation

### Libellés
- FR : Clients.
- EN : Prestation.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/quoteOffer

```text
getListV2({
  url: 'v2/generic/all/quoteOffer',
  nestedEntities: quoteOfferNestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/quoteOffer
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/quote-offers
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/cpq/catalogBrowsing/provider/provider.js#L298) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: quoteOfferNestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities: quoteOfferNestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L567) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: quoteOfferNestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities: quoteOfferNestedEntities } - GET_CUSTOMIZEDQUOTE_OFFER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L927) -> v2/generic/all/quoteOffer | request: options: { method: 'POST' } - GET_ORDER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L1021) -> v2/generic/all/quoteOffer | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L41) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L49) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/quoteOffer

```text
getOneV2({
  url: 'v2/generic/quoteOffer/',
  nestedEntities: quoteOfferNestedEntitiesGetOne
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/quoteOffer
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/quote-offers
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/cpq/catalogBrowsing/provider/provider.js#L306) -> v2/generic/quoteOffer/ | request: helper.nestedEntities: quoteOfferNestedEntities / response: transformResponse: transformResponse / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/quoteOffer/', nestedEntities: quoteOfferNestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L575) -> v2/generic/quoteOffer/ | request: helper.nestedEntities: quoteOfferNestedEntitiesGetOne / response: transformResponse: transformResponse / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/quoteOffer/', nestedEntities: quoteOfferNestedEntitiesGetOne } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L55) -> v2/generic/quoteOffer/ | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/quoteOffer/', nestedEntities }

### CREATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /quote/create/quoteitems

```text
getCreateProvider({
  url: 'quote/create/quoteitems',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /quote/create/quoteitems
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L582) -> quote/create/quoteitems | request: prepareParams: prepareParams | helper.method: PUT / response: responseContainer: 'quoteOfferDto' | responseContainerId: 'quoteOfferId' / info: excludeProperties: ['quoteId', 'redirectAfterSave'] | helper: getCreateProvider | helperArgs: { url: 'quote/create/quoteitems', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /quote/update/quoteitems

```text
getUpdateProvider({
  keyColumn,
  url: 'quote/update/quoteitems',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /quote/update/quoteitems
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L592) -> quote/update/quoteitems | request: prepareParams: prepareParams | helper.keyColumn: keyColumn | helper.method: POST / info: excludeProperties: ['quoteId', 'redirectAfterSave'] | helper: getUpdateProvider | helperArgs: { keyColumn, url: 'quote/update/quoteitems', method: 'POST' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/quotes/quoteItems

```text
getDeleteProvider({
  url: 'cpq/quotes/quoteItems/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /cpq/quotes/quoteItems
    - DELETE — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/quote-offers
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L601) -> cpq/quotes/quoteItems/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/quoteItems/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L80) -> cpq/quotes/quoteItems/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/quoteItems/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L88) -> cpq/quotes/quoteItems/ | request: helper.method: DELETE / info: keyColumn: keyColumn | helper: getDeleteProvider | helperArgs: { url: 'cpq/quotes/quoteItems/', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/quote-offers
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L61) -> cpq/quotes/quoteItems/ | request: helper.method: POST / response: helper.responseContainer: quoteOfferDto | helper.responseContainerId: quoteOfferId / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'cpq/quotes/quoteItems/', method: 'POST', responseContainer: 'quoteOfferDto', responseContainerId: 'quoteOfferId' }
    - PUT — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/quote-offers
      - Description: - UPDATE_QUOTE_OFFER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L758) -> cpq/quotes/quoteItems | request: options: { method: 'PUT' } - ADD_RESILIATION_DATE_TO_PRESTATION (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L897) -> cpq/quotes/quoteItems | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L71) -> cpq/quotes/quoteItems | request: helper.method: PUT / response: helper.responseContainer: quoteOfferDto / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'cpq/quotes/quoteItems', method: 'PUT', responseContainer: 'quoteOfferDto' }

### GET_OFFERS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/offerTemplate/cpq/list`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_PRODUCT_CONFIG

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/cpq/offers`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_QUOTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/cpqQuote/:id`, options {"method":"POST","body":{"nestedEntities":[{"__code":"...quoteNestedEntities"}],"genericFields":[]}}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_PRODUCT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/product/:id`, options {"method":"POST","body":{"nestedEntities":[{"__code":"...productNestedEntities"}],"genericFields":[]}}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ATTRIBUTE_CONFIG

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `attributes/cpq/offers/:productCode/:productVersion`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFER_ATTRIBUTES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/products/cpq/offers`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFER_ID

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/offerTemplate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_FB_INTERET

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `proxyFacebook/interet`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_FB_LIEUX

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_FB_REGION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_FB_SIMULATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `proxyFacebook/simulation`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_GOOGLE_TOKEN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `https://wspart-visiperf.mediapost.fr/oauth/v2/token`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_LOCALITE_GOOGLE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `proxyVisiperf/localiteClient?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ACTIVITY_GOOGLE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `proxyVisiperf/activiteClient?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_GOOGLE_SIMULATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `proxyVisiperf/valider?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SIMULATE_GOOGLE_API

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `proxyVisiperf/simulation`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_QUOTE_OFFER

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /cpq/quotes/quoteItems/:id

```text
getDeleteProvider({
  url: 'cpq/quotes/quoteItems/:id',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - cpq/quotes/quoteItems/:id

### DUPLICATE_QUOTE_OFFER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_PRODUCTLINE_BY_FILTER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/productLine`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFERS_LIST_JSON

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `ProductsLine/:quoteId`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTE_OFFER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteItems`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_PRESTATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/quoteItems/:QuoteCode/:QuoteVersionNumero/:quoteOfferId/duplication`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_ZONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST","headers":{"Authorization":""}}.
```

- Aucune opération correspondante dans `complement-api.json`.

### LIST_ZONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### LIST_ZONE_COMMEDIA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_ZONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST","errorContainer":"error"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### PATCH_AREA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### COMPTAGE_WEBDATA

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### WEBDATA_TOKEN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST","headers":{"['Content-Type']":"application/x-www-form-urlencoded"}}.
```

- Aucune opération correspondante dans `complement-api.json`.

### WEBDATA_PROXY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `webdataProxy/comptage`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### IMPORT_COMMEDIA_ZONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE_PRESTATION_API

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFER_TEMPLATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/offerTemplate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### V

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SUBSCRIPTION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/Subscription`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_TERMINATION_REASON

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `terminationReason/list`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TERMINATE_SUBSCRIPTION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/terminate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_OFFER_BY_ID

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteItems/:offerId`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ADD_RESILIATION_DATE_TO_PRESTATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `cpq/quotes/quoteItems`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CARTO_TOKEN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST","headers":{"['Content-Type']":"application/x-www-form-urlencoded"}}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_HOLIDAYS_CALENDAR

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/Calendar`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CUSTOMIZED_QUOTE_VERSION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/quoteVersion`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CUSTOMIZEDQUOTE_OFFER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/quoteOffer`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_VENT_ABO

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_VENTILATION_CA_ABO`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_QUOTEITEMS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `quote/update/quoteitemsAfterModif`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### PUT_GEOMARKETING_OFFER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/quoteOffer/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CUSTOMER_HIERARCHY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customerHierarchy/:customerId`, options {"method":"POST","headers":{"['Content-Type']":"application/json"},"body":{"__code":"JSON.stringify({\n  nestedEntities: ['customerAccounts.billingAccounts', 'address.country', 'seller'],\n  genericFields: []\n})"}}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_LOG_MASTER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### PUT_QUOTE_OFFER_BI_ID

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SEPALIA_PROXY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `sepaliaProxy/mandates/:coclicoId`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### SUIVIE_PRESTATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### TERMINATE_WEBDATA_SUBSCRIPTION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `webdataProxy/deleteSQAJob`, options {"method":"POST","errorContainer":"org.meveo.api.exception.MeveoApiException"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ORDER

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/quoteOffer`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_CHOIX_POTENTIEL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_SMC_CHOIX_POTENTIEL_CONSO`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
