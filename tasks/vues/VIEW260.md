# Ligne de facture – PATH EDIT

- **Groupe fonctionnel** : Finance
- **Module** : Ligne de facture
- **Ressource** : invoice-lines
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Invoice Line — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/invoiceLine',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/invoiceLine',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'manualInvoice/invoiceLine/',
  responseContainer: 'data',
  nestedEntities: nestedEntitiesForGetOne
}).
- CREATE : getCreateProvider({
  url: ({
    params: {
      data
    }
  }) => {
    // return `v2/billing/invoices/${data.invoiceLines[0].invoiceId}/invoiceLines`;
    return `manualInvoice/${data.invoiceLines[0].invoiceId}/invoiceLines`;
  },
  responseContainer: 'invoiceLines.0',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params: {
      data
    }
  }) => {
    // return `v2/billing/invoices/${data.invoiceLine.invoiceId}/invoiceLines/${data.invoiceLine.id}`;
    return `manualInvoice/${data.invoiceLine.invoiceId}/invoiceLines/${data.invoiceLine.id}`;
  },
  method: 'PUT'
}).
- DELETE_INVOICE_LINE : url `[object Object]`, options {"method":"DELETE"}.
- DELETE_CONTRACT_LINE : getDeleteProvider({
  url: 'v2/generic/invoiceLine/code',
  method: 'DELETE'
}).
- REFRESH_DISCOUNT_LINE : url `manualInvoice/discountedLine/refresh/:id`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : Ligne de facture.
- Libellé EN : Invoice lines.