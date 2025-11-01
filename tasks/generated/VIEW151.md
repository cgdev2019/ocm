# VIEW151 — Devis – PATH QUOTE OFFERS EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.464Z à partir de `tasks/vues/VIEW151.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Devis
- Ressource : quote-offers
- Clé / route : PATH_QUOTE_OFFERS_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : Devis.
- EN : Product or Service.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/quoteOffer

```text
getListV2({
  url: 'v2/generic/all/quoteOffer',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/quoteOffer
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/quote-offers
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/cpq/catalogBrowsing/provider/provider.js#L298) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: quoteOfferNestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities: quoteOfferNestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L567) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: quoteOfferNestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities: quoteOfferNestedEntities } - GET_CUSTOMIZEDQUOTE_OFFER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L927) -> v2/generic/all/quoteOffer | request: options: { method: 'POST' } - GET_ORDER (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L1021) -> v2/generic/all/quoteOffer | request: options: { method: 'POST' } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L41) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L49) -> v2/generic/all/quoteOffer | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/quoteOffer', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/quoteOffer

```text
getListV2({
  url: 'v2/generic/all/quoteOffer',
  nestedEntities
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
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/quoteOffer
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq, B2B-customer-care/quote-offers
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/cpq/catalogBrowsing/provider/provider.js#L306) -> v2/generic/quoteOffer/ | request: helper.nestedEntities: quoteOfferNestedEntities / response: transformResponse: transformResponse / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/quoteOffer/', nestedEntities: quoteOfferNestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/cpq/prestation/provider/provider.js#L575) -> v2/generic/quoteOffer/ | request: helper.nestedEntities: quoteOfferNestedEntitiesGetOne / response: transformResponse: transformResponse / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/quoteOffer/', nestedEntities: quoteOfferNestedEntitiesGetOne } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/quote-offers/provider/provider.js#L55) -> v2/generic/quoteOffer/ | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/quoteOffer/', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/quotes/quoteItems

```text
getCreateProvider({
  url: 'cpq/quotes/quoteItems/',
  method: 'POST',
  responseContainer: 'quoteOfferDto',
  responseContainerId: 'quoteOfferId'
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

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /cpq/quotes/quoteItems

```text
getUpdateProvider({
  url: 'cpq/quotes/quoteItems',
  method: 'PUT',
  responseContainer: 'quoteOfferDto'
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

### DELETE

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

### DUPLICATE_QUOTE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
