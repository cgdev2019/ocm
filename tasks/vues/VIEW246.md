# Clients – PATH BILLINGACCOUNT CREATE

- **Groupe fonctionnel** : Finance
- **Module** : Clients
- **Ressource** : billing-accounts
- **Clé / route** : PATH_BILLINGACCOUNT_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQClient Card — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/billingAccount',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/billingAccount/',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/billingAccount',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
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
- UPDATE : implémentation spécifique.
- DELETE : getDeleteProvider({
  url: 'v2/generic/billingAccount',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/billingAccount',
  method: 'DELETE'
}).
- AGGREGATE_ACCOUNT_SEARCH : getListV2({
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
- ADD_PAYMENT_METHOD : getDeleteProvider({
  url: 'payment/paymentMethod',
  method: 'POST'
}).
- MANDAT_SEPA : getDeleteProvider({
  url: '/inbound/file?encoding=base64&name=:mandateIdentification.pdf',
  method: 'GET'
}).
- TERMINATE : url `account/accountHierarchy/updateCRMAccountHierarchy`, options {"method":"POST"}.
- GET_BILLING_ACCOUNTS_IN_CLIENT_FCTURE_DIALOG : url `v2/generic/all/billingAccount`, options {"method":"POST"}.
- UPDATE_BA_INFO : url `account/billingAccount/createOrUpdate`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Clients.
- Libellé EN : Customers.