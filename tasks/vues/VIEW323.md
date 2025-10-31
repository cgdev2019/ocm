# Validation des factures – List

- **Groupe fonctionnel** : Operation
- **Module** : Validation des factures
- **Ressource** : invoice-validation
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : billing-rules (priorité 3)
- **Icône** : InsertDriveFile

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `id` ; type number
- Colonne 2 : source `code`
- Colonne 3 : source `description`
- Colonne 4 : source `invoiceValidationScript.code`
- Colonne 5 : source `invoiceValidationRulesNumber`

### Recherche et filtres
- champ sans source explicite
- champ `hasValidationScript` (type boolean, filtre {"transformFilterKey":{"__code":"(key, value) => !!value && 'SQL'"},"transformFilterValue":{"__code":"value => {\n  if (value) {\n    return 'invoiceValidationScript IS NOT NULL';\n  }\n}"}})
- champ `hasRules` (type boolean, filtre {"transformFilterKey":{"__code":"(key, value) => !!value && 'SQL'"},"transformFilterValue":{"__code":"value => {\n  if (value) {\n    // return 'invoiceValidationRules IS NOT NULL'\n    const query = `id in (select distinct r.invoiceType.id from org.meveo.model.billing.InvoiceValidationRule r )`;\n    return query;\n  }\n}"}})

### Actions et interactions
- Suppression possible depuis la liste.
- Actions de masse désactivées.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Choix de pagination : [5,10,20].

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