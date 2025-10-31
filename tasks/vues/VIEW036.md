# Sous-totaux de la facture – PATH EDIT

- **Groupe fonctionnel** : Administration
- **Module** : Sous-totaux de la facture
- **Ressource** : invoice-subtotals
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : finance-settings (priorité 3)
- **Icône** : AccountBalance

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Invoice Sub Totals — aucun paramètre spécifique confirmé dans la configuration

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