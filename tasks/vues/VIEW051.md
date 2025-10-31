# Devises – PATH EDIT

- **Groupe fonctionnel** : Administration
- **Module** : Devises
- **Ressource** : trading-currencies
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Trading Currency — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/tradingCurrency',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/tradingCurrency',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/tradingCurrency/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'currency',
  method: 'POST',
  responseContainerId: 'entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'currency',
  method: 'PUT'
}).
- ARCHIVE : getUpdateProvider({
  url: 'currency/:code/disable',
  method: 'POST'
}).
- ENABLE : getUpdateProvider({
  url: 'currency/:code/enable',
  method: 'POST'
}).

## Localisation et libellés
- Libellé FR : Devises.
- Libellé EN : Currencies.