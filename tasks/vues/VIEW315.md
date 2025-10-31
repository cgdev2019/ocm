# CDR – PATH BILLING RUN CREATE

- **Groupe fonctionnel** : Operation
- **Module** : CDR
- **Ressource** : cdr
- **Clé / route** : PATH_BILLING_RUN_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : InsertDriveFile

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQCDR — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/cdr',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/cdr',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/cdr',
  nestedEntities
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/cdr/',
    params: {
      nestedEntities
    }
  }],
  sync: true,
  transformResponse: rep => {
    return rep;
  } //transformRecord
}).
- CREATE : getCreateProvider({
  url: 'v2/mediation/cdrs',
  method: 'POST',
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'v2/mediation/cdrs/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/cdr/',
  method: 'DELETE'
}).
- PROCEED_MEDIATION : getListV2({
  urls: [],
  sync: true
}).
- DELETE_BILLING_PLAN : getDeleteProvider({
  url: ({
    params
  }) => {
    const {
      data: {
        code
      }
    } = params;
    return `billing/invoicingPlans/${code[0]}`;
  },
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: '/api/rest/catalog/invoice/',
  method: 'DELETE'
}).
- UPDATE_STATUS : url `catalog/invoice/:invoiceCode/update/status`.
- DUPLICATE : url `v2/billing/invoices/:id/duplication`.
- REJECT : url `v2/billing/invoices/:id/rejection`, options {"method":"PUT"}.
- VALIDATE : url `invoice/validate`, options {"method":"PUT"}.
- CANCEL : url `v2/billing/invoices/:id/cancellation`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : CDR.
- Libellé EN : CDR.