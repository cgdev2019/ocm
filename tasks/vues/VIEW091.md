# Niveaux – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Niveaux
- **Ressource** : dunning-levels
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : dunning (priorité 9)
- **Icône** : List

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `reminder` ; type boolean
- Colonne 3 : source `endOfDunningLevel` ; type boolean
- Colonne 4 : source `softDecline` ; type boolean
- Colonne 5 : source `daysOverdue` ; type number
- Colonne 6 : source `minBalance` ; type number
- Colonne 7 : source `minBalanceCurrency.currencyCode`
- Colonne 8 : source `actions`
- Colonne 9 : source `chargeType`
- Colonne 10 : source `chargeValue` ; type number
- Colonne 11 : source `active` ; type boolean

### Actions et interactions
- Bouton de création disponible.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/dunningLevel',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/dunningLevel/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/dunningLevel',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- CREATE : getCreateProvider({
  url: 'v2/dunning/dunningLevel',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/dunning/dunningLevel/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/dunning/dunningLevel/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).
- ARCHIVE : getUpdateProvider({
  url: 'v2/dunning/dunningLevel/archive/:id',
  method: 'POST'
}).

## Localisation et libellés
- Libellé FR : Niveaux.
- Libellé EN : Levels.