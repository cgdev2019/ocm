# Devis – PATH CONTRACT LINE EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis
- **Ressource** : contracts-line
- **Clé / route** : PATH_CONTRACT_LINE_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Contract Line — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/contractItem',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/contractItem',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/contractItem/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/contracts/contractLines',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/contracts/contractLines',
  method: 'PUT'
}).
- DELETE_CONTRACT_LINE : getDeleteProvider({
  url: 'cpq/contracts/contractLines/:code',
  method: 'DELETE'
}).
- DUPLICATE_PRICE_PLAN : url `[object Object]`.

## Localisation et libellés
- Libellé FR : Devis.
- Libellé EN : Contract Line.