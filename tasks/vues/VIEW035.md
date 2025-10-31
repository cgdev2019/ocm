# Sous-totaux de la facture – List

- **Groupe fonctionnel** : Administration
- **Module** : Sous-totaux de la facture
- **Ressource** : invoice-subtotals
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : finance-settings (priorité 3)
- **Icône** : AccountBalance

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description`
- Colonne 3 : source `auditable.created` ; type date

### Actions et interactions
- Actions de masse désactivées.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 30 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/invoiceType'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/invoiceType'
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/invoiceType/',
    params: {
      nestedEntities
    }
  }, {
    url: 'v2/generic/all/invoiceSubTotals',
    params: {
      nestedEntities,
      filters: {
        'invoiceType.id': '@responses[0].data.id'
      }
    },
    autoAppendId: false
  }, {
    url: 'v2/generic/all/tradingLanguage',
    params: {},
    autoAppendId: false
  }],
  sync: true,
  transformResponse: transformRecord
}).
- CREATE : getCreateProvider({
  url: 'v2/billing/invoices/addSubTotals',
  method: 'POST'
}).
- DELETE_SUBTOTALS : url `v2/billing/invoices/deleteSubTotals`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Sous-totaux de la facture.
- Libellé EN : Invoice subtotals.