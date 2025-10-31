# Niveaux – PATH DUNNING LEVELS EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Niveaux
- **Ressource** : dunning-levels
- **Clé / route** : PATH_DUNNING_LEVELS_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : dunning (priorité 9)
- **Icône** : List

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit B2BDunning Levels — aucun paramètre spécifique confirmé dans la configuration

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