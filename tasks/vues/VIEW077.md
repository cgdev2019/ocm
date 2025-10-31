# Contrats cadre – PATH CONTRACT EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Contrats cadre
- **Ressource** : contracts
- **Clé / route** : PATH_CONTRACT_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Contracts — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/contract',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/contract',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/contract/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/contracts',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/contracts',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/generic/contract',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/contracts/',
  method: 'DELETE'
}).
- UPDATE_STATUS : url `cpq/contracts/:code/status/:toStatus`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : Contrats cadre.
- Libellé EN : Framework agreements.