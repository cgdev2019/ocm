# Actions – PATH DUNNING ACTIONS EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Actions
- **Ressource** : dunning-actions
- **Clé / route** : PATH_DUNNING_ACTIONS_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : dunning (priorité 9)
- **Icône** : ViewList

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit B2BDunning Actions — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/dunningAction',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/dunningAction/',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/dunningAction',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- CREATE : getCreateProvider({
  url: 'v2/dunning/dunningaction'
}).
- UPDATE : getCreateProvider({
  url: 'v2/dunning/dunningaction/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Actions.
- Libellé EN : Actions.