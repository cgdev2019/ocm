# Validation des factures – PATH INVOICE VALIDATION EDIT

- **Groupe fonctionnel** : Operation
- **Module** : Validation des factures
- **Ressource** : invoice-validation
- **Clé / route** : PATH_INVOICE_VALIDATION_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : billing-rules (priorité 3)
- **Icône** : InsertDriveFile

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Invoice Validation Config — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/invoiceType',
  nestedEntities,
  genericFields
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/invoiceType',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'v2/generic/invoiceType/',
  responseContainer: 'data',
  nestedEntities,
  otherParams: {
    sortBy: 'invoiceValidationRules.priority',
    sortOrder: 'ASCENDING'
  }
}).
- ENTITY_CHOICES : url `[object Object]`, options {"method":"POST"}.
- CREATE : getCreateProvider({
  url: 'v2/billing/invoicevalidationrules',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => `v2/billing/invoicevalidationrules/${params.id}`,
  method: 'PUT'
}).
- UPDATE_INVOICE_SCRIPT : getUpdateProvider({
  url: ({
    params
  }) => `invoiceType`,
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: `v2/billing/invoicevalidationrules/`,
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Validation des factures.
- Libellé EN : Invoice validation.