# Actions – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Actions
- **Ressource** : dunning-actions
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : dunning (priorité 9)
- **Icône** : ViewList

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

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