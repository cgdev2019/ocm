# Taux de change – PATH EDIT

- **Groupe fonctionnel** : Administration
- **Module** : Taux de change
- **Ressource** : exchange-rates
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Exchange Rate — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/ExchangeRate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/ExchangeRate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/ExchangeRate/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'currency/addExchangeRate',
  method: 'POST',
  responseContainerId: 'entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'currency/updateExchangeRate/:id',
  method: 'PUT'
}).
- DELETE_CUSTOM : url `[object Object]`, options {"method":"DELETE"}.

## Localisation et libellés
- Libellé FR : Taux de change.
- Libellé EN : Exchange rates.