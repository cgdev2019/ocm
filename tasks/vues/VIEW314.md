# CDR – List

- **Groupe fonctionnel** : Operation
- **Module** : CDR
- **Ressource** : cdr
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : InsertDriveFile

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `eventDate` ; type date ; utilisable en filtre
- Colonne 2 : source `quantity` ; utilisable en filtre
- Colonne 3 : source `accessCode` ; utilisable en filtre
- Colonne 4 : source `parameter1` ; utilisable en filtre
- Colonne 5 : source `parameter2` ; utilisable en filtre
- Colonne 6 : source `parameter3` ; utilisable en filtre
- Colonne 7 : source `parameter4` ; utilisable en filtre
- Colonne 8 : source `status` ; type status ; choix (undefined) ; utilisable en filtre

### Recherche et filtres
- champ `searchBar` (filtre {"type":"searchbar","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(accessCode) LIKE lower('%${value}%')`, `lower(parameter1) LIKE lower('%${value}%')`, `lower(parameter2) LIKE lower('%${value}%')`, `lower(parameter3) LIKE lower('%${value}%')`, `lower(parameter4) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"},"inputProps":{"placeholder":"{{LabelActionPath}}.searchBar","originalWidth":"222px","withTooltipIcon":{"icon":"Info","title":"{{LabelActionPath}}.searchBarContactsInfo","iconStyle":{"color":"blue","pointerEvents":"visible","marginBottom":"1rem"}}}})

### Actions et interactions
- Bouton de création disponible.
- Export des données autorisé.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - {{LabelActionPath}}.addCDR (action directe).
  - {{LabelActionPath}}.importCDR (action directe).
  - {{LabelActionPath}}.all_mediation (action directe).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 20 éléments.
- Choix de pagination : [5,10,20].
- Tri initial : {"field":"eventDate","order":"DESC"}.

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