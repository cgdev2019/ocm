# Rapport des commandes ouvertes – PATH EDIT

- **Groupe fonctionnel** : Finance
- **Module** : Rapport des commandes ouvertes
- **Ressource** : open-orders
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : open-orders (priorité 4)
- **Icône** : Today

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Open Orders — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/OpenOrder/',
  // keyColumn: 'code',
  nestedEntities
}).
- UPDATE : getUpdateProvider({
  url: ({
    params = {}
  }) => {
    const {
      data = {}
    } = params;
    const {
      code
    } = data;
    return `v2/ordering/openOrder/${code}`;
  },
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/ordering/open-order',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/ordering/OpenOrder/:code/status/status`, options {"method":"PUT"}.
- EXPORT_LIST : url `v2/generic/export/:entityName/:format`, options {"method":"POST"}.
- GENERATE_INVOICE : url `v2/billing/invoices/generate`, options {"method":"POST"}.
- CANCEL : getCustomProvider({
  url: ({
    params = {}
  }) => {
    const {
      data = {}
    } = params;
    const {
      code
    } = data;
    return `v2/ordering/openOrder/${code}/cancel`;
  },
  method: 'POST'
}).

## Localisation et libellés
- Libellé FR : Rapport des commandes ouvertes.
- Libellé EN : Open orders report.