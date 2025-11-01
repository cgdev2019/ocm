# VIEW261 — Factures – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.571Z à partir de `tasks/vues/VIEW261.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Factures
- Ressource : invoices
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Factures.
- EN : Invoices.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoice

```text
getListV2({
  url: 'v2/generic/all/invoice',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoice
    - GET — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders
      - Description: - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L192) -> v2/generic/all/invoice - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L192) -> v2/generic/all/invoice
    - POST — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/mdp-clients, B2B-customer-care/related-invoices, finance/invoices
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L149) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], invoiceTypeDescription = [], paymentStatus, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformPaymentStatus = paymentStatus === 'PENDING' ? { 'inList paymentStatus': ['NONE', 'PENDING'] } : { paymentStatus }; const transformedFilters = { filter: { ...restFilter, ...transformPaymentStatus, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...(status.length === 0 ? {} : { status: status }), ...(invoiceTypeDescription.length === 0 ? {} : { invoiceTypeDescription: invoiceTypeDescription }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L191) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L194) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L273) -> v2/generic/all/invoice | request: options: { method: 'POST' } / info: keyColumn: 'code' - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L128) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], invoiceTypeDescription = [], paymentStatus, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformPaymentStatus = paymentStatus === 'PENDING' ? { 'inList paymentStatus': ['NONE', 'PENDING'] } : { paymentStatus }; const transformedFilters = { filter: { ...restFilter, ...transformPaymentStatus, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...(status.length === 0 ? {} : { status: status }), ...(invoiceTypeDescription.length === 0 ? {} : { invoiceTypeDescription: invoiceTypeDescription }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L170) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L173) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/invoices/provider/provider.js#L13) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/invoices/provider/provider.js#L39) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoice

```text
getListV2({
  url: 'v2/generic/all/invoice',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoice
    - GET — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders
      - Description: - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L192) -> v2/generic/all/invoice - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L192) -> v2/generic/all/invoice
    - POST — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/mdp-clients, B2B-customer-care/related-invoices, finance/invoices
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L149) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], invoiceTypeDescription = [], paymentStatus, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformPaymentStatus = paymentStatus === 'PENDING' ? { 'inList paymentStatus': ['NONE', 'PENDING'] } : { paymentStatus }; const transformedFilters = { filter: { ...restFilter, ...transformPaymentStatus, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...(status.length === 0 ? {} : { status: status }), ...(invoiceTypeDescription.length === 0 ? {} : { invoiceTypeDescription: invoiceTypeDescription }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L191) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L194) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L273) -> v2/generic/all/invoice | request: options: { method: 'POST' } / info: keyColumn: 'code' - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L128) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], invoiceTypeDescription = [], paymentStatus, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformPaymentStatus = paymentStatus === 'PENDING' ? { 'inList paymentStatus': ['NONE', 'PENDING'] } : { paymentStatus }; const transformedFilters = { filter: { ...restFilter, ...transformPaymentStatus, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...(status.length === 0 ? {} : { status: status }), ...(invoiceTypeDescription.length === 0 ? {} : { invoiceTypeDescription: invoiceTypeDescription }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L170) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L173) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/invoices/provider/provider.js#L13) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/invoices/provider/provider.js#L39) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/invoice

```text
getListV2({
  url: 'v2/generic/all/invoice',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/invoice
    - GET — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders
      - Description: - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L192) -> v2/generic/all/invoice - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L192) -> v2/generic/all/invoice
    - POST — Used in 9 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/mdp-clients, B2B-customer-care/related-invoices, finance/invoices
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L149) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], invoiceTypeDescription = [], paymentStatus, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformPaymentStatus = paymentStatus === 'PENDING' ? { 'inList paymentStatus': ['NONE', 'PENDING'] } : { paymentStatus }; const transformedFilters = { filter: { ...restFilter, ...transformPaymentStatus, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...(status.length === 0 ? {} : { status: status }), ...(invoiceTypeDescription.length === 0 ? {} : { invoiceTypeDescription: invoiceTypeDescription }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L191) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L194) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_INVOICE_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L273) -> v2/generic/all/invoice | request: options: { method: 'POST' } / info: keyColumn: 'code' - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L128) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, status = [], invoiceTypeDescription = [], paymentStatus, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformPaymentStatus = paymentStatus === 'PENDING' ? { 'inList paymentStatus': ['NONE', 'PENDING'] } : { paymentStatus }; const transformedFilters = { filter: { ...restFilter, ...transformPaymentStatus, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}), ...(status.length === 0 ? {} : { status: status }), ...(invoiceTypeDescription.length === 0 ? {} : { invoiceTypeDescription: invoiceTypeDescription }) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L170) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L173) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_LIST (src/srcProject/layout/finance/modules/invoices/provider/provider.js#L13) -> v2/generic/all/invoice | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { validity = {}, ...restFilter } = filter; const transformDateFilters = key => get(validity, key) && { [`validity.${key}`]: get(validity, key) }; const transformedFilters = { filter: { ...restFilter, ...transformDateFilters('from'), ...transformDateFilters('to'), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'seller.code': ENGIE_EKKO_seller } : {}) }, ...restParams }; return transformedFilters; } | helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities } - GET_MANY (src/srcProject/layout/finance/modules/invoices/provider/provider.js#L39) -> v2/generic/all/invoice | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/invoice', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/invoice

```text
getOneV2({
  url: 'v2/generic/invoice/',
  responseContainer: 'data',
  nestedEntities: nestedEntitiesForGetOne,
  genericFields: genericFieldsDetailed
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/invoice
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/related-invoices
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L198) -> v2/generic/invoice/ | request: helper.nestedEntities: nestedEntitiesForGetOne | helper.genericFields: genericFieldsDetailed / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/invoice/', responseContainer: 'data', nestedEntities: nestedEntitiesForGetOne, genericFields: genericFieldsDetailed } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L177) -> v2/generic/invoice/ | request: helper.nestedEntities: nestedEntities | helper.genericFields: genericFieldsDetailed / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/invoice/', responseContainer: 'data', nestedEntities, genericFields: genericFieldsDetailed }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/billing/invoices/basicInvoices
  - /manualInvoice/create

```text
getCreateProvider({
  //url: 'v2/billing/invoices/basicInvoices',
  url: 'manualInvoice/create',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /manualInvoice/create
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L207) -> manualInvoice/create | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { //url: 'v2/billing/invoices/basicInvoices', url: 'manualInvoice/create', method: 'POST' }
  - Chemin /v2/billing/invoices/basicInvoices
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/related-invoices
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L186) -> v2/billing/invoices/basicInvoices | request: helper.method: POST / info: helper: getCreateProvider | helperArgs: { url: 'v2/billing/invoices/basicInvoices', method: 'POST' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/billing/invoices/:id

```text
getUpdateProvider({
  url: 'v2/billing/invoices/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/billing/invoices/:id

### UPDATE_INVOICE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/billing/invoices/:id

```text
getUpdateProvider({
  url: 'v2/billing/invoices/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/billing/invoices/:id

### UPDATE_INVOICE_GENERIC

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/invoice/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_BILLING_ACCOUNT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/BillingAccount/:id`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DOWNLOAD_E_DEVIS_SIGNE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /api/rest/catalog/invoice

```text
getDeleteProvider({
  url: '/api/rest/catalog/invoice/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /api/rest/catalog/invoice
    - DELETE — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/related-invoices, operation/cdr
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L247) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L254) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L200) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L207) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L320) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /api/rest/catalog/invoice

```text
getDeleteProvider({
  url: '/api/rest/catalog/invoice/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /api/rest/catalog/invoice
    - DELETE — Used in 5 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/invoices, B2B-customer-care/related-invoices, operation/cdr
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L247) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/invoices/provider/provider.js#L254) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L200) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/related-invoices/provider/provider.js#L207) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/operation/modules/cdr/provider/provider.js#L320) -> /api/rest/catalog/invoice/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: '/api/rest/catalog/invoice/', method: 'DELETE' }

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/invoice/:invoiceCode/update/status`.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:id/duplication`.
```

- Aucune opération correspondante dans `complement-api.json`.

### REJECT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:id/rejection`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `invoice/validate`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:invoiceId/pdf?generateIfMissing=true`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_PDF

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:invoiceId/deletePdfFile`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_XML

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `invoice/getXMLInvoice?`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_XML

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:invoiceId/deleteXmlFile`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_TAX_DETAILS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/taxInvoiceAgregate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_LINE_CALCULATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/:invoiceId/calculation`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_LINES_CREATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_LINES_UPDATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/generate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### MATCHING_PAYMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_ADJUSTMENT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_AVOIR_FINAL

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INVOICE_DUPLICATION

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### IMPORT_LINES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UNMATCH_ACCOUNT_OPERATIONS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/accountReceivable/accountOperation/unMatchOperations`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE_BILLING_RUN

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/invoicing/createBillingRun`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### QUARANTINE_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### REFRESH_RATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_INVOICES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `invoice/generateInvoice`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CALCULATE_SUBTOTALS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_VALIDATED

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"PATCH"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### LINKED_INVOICES

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/LinkedInvoice`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_MANUAL_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `manualInvoice/updateStatus/:id/:status`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_FACTURE_MANUELLE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /manualInvoice/:id

```text
getUpdateProvider({
  url: 'manualInvoice/:id',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - manualInvoice/:id

### GENERATE_PDF_FACTURE_MANUELLE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `generateInvoicePDF/archive/:invoiceId/pdf`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_PDF_DUPLICATA_ENRICHI

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `generateInvoicePDF/duplicata/enrichi/:invoiceId/pdf`, options {"method":"GET"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_SERVICE_EXECUTANT

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_SERVICE_EXECUTANT`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ENGAGEMENT_JURIDIQUE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `customTable/list/CE_ENGAGEMENT_JURIDIQUE`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INIT_WORKFLOW_AVOIR_INVOICE_BROUILLON

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `manualInvoice/avoir/wf/:id?status=BROUILLON`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### INIT_WORKFLOW_AVOIR_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `manualInvoice/avoir/wf/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_INVOICE_REFACT_LP

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### VALIDATE_AVOIR_REFACT_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `[object Object]`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RESEND_PAYMENT_LINK

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `endEmailURLPaiement/invoice/:id`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
