# VIEW061 — Clients – PATH BILLINGACCOUNT CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.379Z à partir de `tasks/vues/VIEW061.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Clients
- Ressource : billing-accounts
- Clé / route : PATH_BILLINGACCOUNT_CREATE
- Type d'écran : Formulaire de création
- Icône : Person

### Libellés
- FR : Clients.
- EN : Customers.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/billingAccount

```text
getListV2({
  url: 'v2/generic/all/billingAccount',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingAccount
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L161) -> v2/generic/all/billingAccount | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { name = {}, address = {}, customerAccount = {} } = filter; const { field = {} } = sort; const { customer = {} } = customerAccount; const { ['description|name.firstName+name.lastName']: descriptionOrFullName, description, customerDescription, ['name.firstName+name.lastName']: customerName, SQL: oldQuery, search, ...restFilter } = flatten(filter); const customerDescriptionQuery = `(lower(customerAccount.description) LIKE lower('%${customerDescription}%'))`; const filterCustomerDescriptionQuery = !!customerDescription ? customerDescriptionQuery : null; const customerNameQuery = transformCustomerNameFilter(customerName); const filterCustomerNameQuery = !!customerName ? customerNameQuery : null; const filterDescriptionParams = transformFilterValue(description || descriptionOrFullName); const finalSQLQuery = concatSQLQueries([oldQuery, filterCustomerDescriptionQuery, filterCustomerNameQuery, filterDescriptionParams], 'AND'); const fitlerTransformed = { ...unflatten(restFilter), 'or code description registrationNo tradingCountry.description tradingCountry.code name.firstName name.lastName customerAccount.customer.code customerAccount.customer.description customerAccount.customer.name.lastName customerAccount.customer.name.firstName': search, ...(!filterDescriptionParams ? { 'wildcardOrIgnoreCase name->firstName name->lastName': description } : {}), //disable this possiblty of filter from the pikcer, it's not work correctly #245 // ...(!isEmpty(descriptionOrFullName) // ? { // 'likeCriterias description name.firstName name.lastName': `*${descriptionOrFullName}*` // } // : {}), ...(!isEmpty(address) ? getAddressFilters(address) : {}), ...(!isEmpty(name) ? { 'wildcardOrIgnoreCase name.lastName': get(name, 'lastName') } : {}), ...(!isEmpty(customer) ? { 'wildcardOrIgnoreCase customerAccount.customer.registrationNo': get(customer, 'registrationNo') } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'customerAccount.customer.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'customerAccount.customer.seller.code': ENGIE_EKKO_seller } : {}), ...(!!finalSQLQuery ? { SQL: finalSQLQuery } : {}) }; const sortTransformed = { ...sort, ...(!isEmpty(field) && field === 'description|name.firstName+name.lastName' ? { field: 'name.firstName' } : {}) }; return { filter: fitlerTransformed, sort: sortTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingAccount', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L265) -> v2/generic/all/billingAccount | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingAccount', responseContainer: 'data', nestedEntities } - GET_BILLING_ACCOUNTS_IN_CLIENT_FCTURE_DIALOG (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L461) -> v2/generic/all/billingAccount | request: options: { method: 'POST' } / response: responseContainer: 'data'

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/billingAccount

```text
getOneV2({
  url: 'v2/generic/billingAccount/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/billingAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L376) -> v2/generic/billingAccount | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/billingAccount', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L382) -> v2/generic/billingAccount | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/billingAccount', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L258) -> v2/generic/billingAccount/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/billingAccount/', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/billingAccount

```text
getListV2({
  url: 'v2/generic/all/billingAccount',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingAccount
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L161) -> v2/generic/all/billingAccount | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { name = {}, address = {}, customerAccount = {} } = filter; const { field = {} } = sort; const { customer = {} } = customerAccount; const { ['description|name.firstName+name.lastName']: descriptionOrFullName, description, customerDescription, ['name.firstName+name.lastName']: customerName, SQL: oldQuery, search, ...restFilter } = flatten(filter); const customerDescriptionQuery = `(lower(customerAccount.description) LIKE lower('%${customerDescription}%'))`; const filterCustomerDescriptionQuery = !!customerDescription ? customerDescriptionQuery : null; const customerNameQuery = transformCustomerNameFilter(customerName); const filterCustomerNameQuery = !!customerName ? customerNameQuery : null; const filterDescriptionParams = transformFilterValue(description || descriptionOrFullName); const finalSQLQuery = concatSQLQueries([oldQuery, filterCustomerDescriptionQuery, filterCustomerNameQuery, filterDescriptionParams], 'AND'); const fitlerTransformed = { ...unflatten(restFilter), 'or code description registrationNo tradingCountry.description tradingCountry.code name.firstName name.lastName customerAccount.customer.code customerAccount.customer.description customerAccount.customer.name.lastName customerAccount.customer.name.firstName': search, ...(!filterDescriptionParams ? { 'wildcardOrIgnoreCase name->firstName name->lastName': description } : {}), //disable this possiblty of filter from the pikcer, it's not work correctly #245 // ...(!isEmpty(descriptionOrFullName) // ? { // 'likeCriterias description name.firstName name.lastName': `*${descriptionOrFullName}*` // } // : {}), ...(!isEmpty(address) ? getAddressFilters(address) : {}), ...(!isEmpty(name) ? { 'wildcardOrIgnoreCase name.lastName': get(name, 'lastName') } : {}), ...(!isEmpty(customer) ? { 'wildcardOrIgnoreCase customerAccount.customer.registrationNo': get(customer, 'registrationNo') } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'customerAccount.customer.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'customerAccount.customer.seller.code': ENGIE_EKKO_seller } : {}), ...(!!finalSQLQuery ? { SQL: finalSQLQuery } : {}) }; const sortTransformed = { ...sort, ...(!isEmpty(field) && field === 'description|name.firstName+name.lastName' ? { field: 'name.firstName' } : {}) }; return { filter: fitlerTransformed, sort: sortTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingAccount', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L265) -> v2/generic/all/billingAccount | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingAccount', responseContainer: 'data', nestedEntities } - GET_BILLING_ACCOUNTS_IN_CLIENT_FCTURE_DIALOG (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L461) -> v2/generic/all/billingAccount | request: options: { method: 'POST' } / response: responseContainer: 'data'

### CREATE

- Méthode HTTP estimée : EXISTINGCUSTOMER
- Cibles détectées :
  - /v2/generic/all/customer
  - /v2/generic/all/customerAccount
  - /account/customer
  - /account/customerAccount
  - /account/billingAccount

```text
getCreateProvider({
  urls: [{
    path: 'v2/generic/all/customer',
    prepareParams: ({
      code,
      customer
    }) => ({
      filters: {
        code: get(customer, 'code', code)
      },
      nestedEntities
    }),
    resolve: res => get(res, 'json.data')
  }, {
    path: 'v2/generic/all/customerAccount',
    prepareParams: ({
      code,
      customerAccount
    }) => ({
      filters: {
        code: get(customerAccount, 'code', code)
      },
      nestedEntities
    }),
    resolve: res => get(res, 'json.data')
  }, {
    path: 'account/customer',
    prepareParams: prepareParamsCustomer,
    options: ({
      responses
    }) => {
      const data = get(responses[0], '0');
      const existingCustomer = !isEmpty(data);
      return {
        method: existingCustomer ? 'PUT' : 'POST'
      };
    }
  }, {
    path: 'account/customerAccount',
    prepareParams: prepareParamsCA,
    options: ({
      responses
    }) => {
      const customerAccount = get(responses[1], '0');
      const existingCustomerAccount = !isEmpty(customerAccount);
      return {
        method: existingCustomerAccount ? 'PUT' : 'POST'
      };
    }
  }, {
    path: 'account/billingAccount',
    prepareParams: prepareParamsBA,
    responseContainerId: 'entityId'
  }],
  sync: true
}).
```

- Opérations correspondantes :
  - Chemin /account/customer
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/customers
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L76) -> account/customer | info: helper: getCreateProvider | helperArgs: { url: 'account/customer' }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - PUT_CUSTOMER_DATA (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1429) -> account/customer | request: options: { method: 'PUT' }
  - Chemin /account/customerAccount
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/customer-accounts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/customer-accounts/provider/provider.js#L58) -> account/customerAccount | info: helper: getCreateProvider | helperArgs: { url: 'account/customerAccount' }
  - Chemin /v2/generic/all/customer
    - GET — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume
      - Description: - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data'
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/customers
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L39) -> v2/generic/all/customer | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { code, description, ...restFilter } = filter; const fitlerTransformed = { ...restFilter, ...(code ? { code: `*${code}*` } : ''), ...(description ? { description: `*${description}*` } : '') }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customer', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L67) -> v2/generic/all/customer | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customer', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_CUSTOMIZED_CUSTOMERS (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L103) -> v2/generic/all/customer | request: options: { method: 'POST' } / response: responseContainer: 'data' / info: keyColumn: 'id'
  - Chemin /v2/generic/all/customerAccount
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/customer-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/customer-accounts/provider/provider.js#L23) -> v2/generic/all/customerAccount | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { code, description, ...restFilter } = filter; const fitlerTransformed = { ...restFilter, ...(code ? { code: `*${code}*` } : ''), ...(description ? { description: `*${description}*` } : '') }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customerAccount', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/customer-accounts/provider/provider.js#L50) -> v2/generic/all/customerAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customerAccount', responseContainer: 'data', nestedEntities, keyColumn: 'code' }

- URLs sans correspondance détectée :
  - account/billingAccount

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
implémentation spécifique.
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/billingAccount

```text
getDeleteProvider({
  url: 'v2/generic/billingAccount',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/billingAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L376) -> v2/generic/billingAccount | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/billingAccount', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L382) -> v2/generic/billingAccount | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/billingAccount', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L258) -> v2/generic/billingAccount/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/billingAccount/', nestedEntities }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/billingAccount

```text
getDeleteProvider({
  url: 'v2/generic/billingAccount',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/billingAccount
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - DELETE (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L376) -> v2/generic/billingAccount | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/billingAccount', method: 'DELETE' } - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L382) -> v2/generic/billingAccount | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/generic/billingAccount', method: 'DELETE' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L258) -> v2/generic/billingAccount/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/billingAccount/', nestedEntities }

### AGGREGATE_ACCOUNT_SEARCH

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/customer
  - /v2/generic/all/customerAccount
  - /v2/generic/all/billingAccount

```text
getListV2({
  urls: [{
    path: 'v2/generic/all/customer',
    prepareParams: params => ({
      ...params,
      nestedEntities: customersNestedEntities
    })
  }, {
    path: 'v2/generic/all/customerAccount',
    prepareParams: params => ({
      ...params,
      nestedEntities: customerAccountsNestedEntities
    })
  }, {
    path: 'v2/generic/all/billingAccount',
    nestedEntities
  }],
  sync: true,
  transformResponse: (data, {
    responses,
    params
  }) => {
    const code = get(params, 'data.filters.code');
    const customer = get(responses, '0.data.data.0') || {};
    const customerAccount = get(responses, '1.data.data.0') || {};
    const billingAccount = get(responses, '2.data.data.0') || {};
    const response = {};
    if (customer.code === code) {
      response.customer = customer;
    }
    if (customerAccount.code === code) {
      response.customerAccount = customerAccount;
    }
    if (billingAccount.code === code) {
      response.billingAccount = billingAccount;
    }
    return {
      data: response
    };
  }
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/billingAccount
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L161) -> v2/generic/all/billingAccount | request: prepareParams: params => { const { filter = {}, sort = {}, ...restParams } = params; const { name = {}, address = {}, customerAccount = {} } = filter; const { field = {} } = sort; const { customer = {} } = customerAccount; const { ['description|name.firstName+name.lastName']: descriptionOrFullName, description, customerDescription, ['name.firstName+name.lastName']: customerName, SQL: oldQuery, search, ...restFilter } = flatten(filter); const customerDescriptionQuery = `(lower(customerAccount.description) LIKE lower('%${customerDescription}%'))`; const filterCustomerDescriptionQuery = !!customerDescription ? customerDescriptionQuery : null; const customerNameQuery = transformCustomerNameFilter(customerName); const filterCustomerNameQuery = !!customerName ? customerNameQuery : null; const filterDescriptionParams = transformFilterValue(description || descriptionOrFullName); const finalSQLQuery = concatSQLQueries([oldQuery, filterCustomerDescriptionQuery, filterCustomerNameQuery, filterDescriptionParams], 'AND'); const fitlerTransformed = { ...unflatten(restFilter), 'or code description registrationNo tradingCountry.description tradingCountry.code name.firstName name.lastName customerAccount.customer.code customerAccount.customer.description customerAccount.customer.name.lastName customerAccount.customer.name.firstName': search, ...(!filterDescriptionParams ? { 'wildcardOrIgnoreCase name->firstName name->lastName': description } : {}), //disable this possiblty of filter from the pikcer, it's not work correctly #245 // ...(!isEmpty(descriptionOrFullName) // ? { // 'likeCriterias description name.firstName name.lastName': `*${descriptionOrFullName}*` // } // : {}), ...(!isEmpty(address) ? getAddressFilters(address) : {}), ...(!isEmpty(name) ? { 'wildcardOrIgnoreCase name.lastName': get(name, 'lastName') } : {}), ...(!isEmpty(customer) ? { 'wildcardOrIgnoreCase customerAccount.customer.registrationNo': get(customer, 'registrationNo') } : {}), ...(isUserHasRoles(ENGIE_MYPOWER_roles) ? { 'customerAccount.customer.seller.code': ENGIE_MYPOWER_seller } : {}), ...(isUserHasRoles(ENGIE_EKKO_roles) ? { 'customerAccount.customer.seller.code': ENGIE_EKKO_seller } : {}), ...(!!finalSQLQuery ? { SQL: finalSQLQuery } : {}) }; const sortTransformed = { ...sort, ...(!isEmpty(field) && field === 'description|name.firstName+name.lastName' ? { field: 'name.firstName' } : {}) }; return { filter: fitlerTransformed, sort: sortTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingAccount', responseContainer: 'data', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L265) -> v2/generic/all/billingAccount | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/billingAccount', responseContainer: 'data', nestedEntities } - GET_BILLING_ACCOUNTS_IN_CLIENT_FCTURE_DIALOG (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L461) -> v2/generic/all/billingAccount | request: options: { method: 'POST' } / response: responseContainer: 'data'
  - Chemin /v2/generic/all/customer
    - GET — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/mdp-invoices, B2B-customer-care/mdp-orders, B2B-customer-care/mdp-quote-simulation, B2B-customer-care/mdp-subscriptions, B2B-customer-care/mdp-volume
      - Description: - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-invoices/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-orders/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-quote-simulation/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-subscriptions/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data' - GET_CLIENT_LIST (src/srcProject/layout/B2B-customer-care/modules/mdp-volume/provider/provider.js#L13) -> v2/generic/all/customer | response: responseContainer: 'data'
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/customers
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L39) -> v2/generic/all/customer | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { code, description, ...restFilter } = filter; const fitlerTransformed = { ...restFilter, ...(code ? { code: `*${code}*` } : ''), ...(description ? { description: `*${description}*` } : '') }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customer', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L67) -> v2/generic/all/customer | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customer', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_CUSTOMIZED_CUSTOMERS (src/srcProject/layout/B2B-customer-care/modules/customers/provider/provider.js#L103) -> v2/generic/all/customer | request: options: { method: 'POST' } / response: responseContainer: 'data' / info: keyColumn: 'id'
  - Chemin /v2/generic/all/customerAccount
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/customer-accounts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/customer-accounts/provider/provider.js#L23) -> v2/generic/all/customerAccount | request: prepareParams: params => { const { filter = {}, ...restParams } = params; const { code, description, ...restFilter } = filter; const fitlerTransformed = { ...restFilter, ...(code ? { code: `*${code}*` } : ''), ...(description ? { description: `*${description}*` } : '') }; return { filter: fitlerTransformed, ...restParams }; } | helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customerAccount', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/customer-accounts/provider/provider.js#L50) -> v2/generic/all/customerAccount | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/customerAccount', responseContainer: 'data', nestedEntities, keyColumn: 'code' }

### ADD_PAYMENT_METHOD

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /payment/paymentMethod

```text
getDeleteProvider({
  url: 'payment/paymentMethod',
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /payment/paymentMethod
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/payment-methods
      - Description: - DELETE_MANY (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L79) -> payment/paymentMethod | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', responseContainer: 'data', nestedEntities }
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts, B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L436) -> payment/paymentMethod | request: helper.method: POST / info: helper: getDeleteProvider | helperArgs: { url: 'payment/paymentMethod', method: 'POST' } - ADD_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L303) -> payment/paymentMethod | request: options: { method: 'POST' } - CREATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L54) -> payment/paymentMethod | request: helper.keyColumn: keyColumn / response: responseContainer: 'paymentMethod' / info: helper: getCreateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn }
    - PUT — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/mdp-clients, B2B-customer-care/payment-methods
      - Description: - UPDATE_PAYMENT_METHOD (src/srcProject/layout/B2B-customer-care/modules/mdp-clients/provider/provider.js#L309) -> payment/paymentMethod | request: options: { method: 'PUT' } - UPDATE (src/srcProject/layout/B2B-customer-care/modules/payment-methods/provider/provider.js#L61) -> payment/paymentMethod | request: helper.keyColumn: keyColumn | helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'payment/paymentMethod', keyColumn, method: 'PUT' }

### MANDAT_SEPA

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /inbound/file

```text
getDeleteProvider({
  url: '/inbound/file?encoding=base64&name=:mandateIdentification.pdf',
  method: 'GET'
}).
```

- Opérations correspondantes :
  - Chemin /inbound/file
    - GET — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/billing-accounts
      - Description: - MANDAT_SEPA (src/srcProject/layout/B2B-customer-care/modules/billing-accounts/provider/provider.js#L442) -> /inbound/file?encoding=base64&name=:mandateIdentification.pdf | request: helper.method: GET / info: helper: getDeleteProvider | helperArgs: { url: '/inbound/file?encoding=base64&name=:mandateIdentification.pdf', method: 'GET' }

### TERMINATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `account/accountHierarchy/updateCRMAccountHierarchy`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_BILLING_ACCOUNTS_IN_CLIENT_FCTURE_DIALOG

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/all/billingAccount`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_BA_INFO

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `account/billingAccount/createOrUpdate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
