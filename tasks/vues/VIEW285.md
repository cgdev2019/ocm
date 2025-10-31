# Modèles de dépôt de garantie – PATH EDIT

- **Groupe fonctionnel** : Finance
- **Module** : Modèles de dépôt de garantie
- **Ressource** : security-deposit-templates
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : multi-balances/templates (priorité 2/4)

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Security Deposit Template — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/securityDepositTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/securityDepositTemplate',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'v2/securityDeposit/securityDepositTemplate',
  responseContainer: 'securityDepositTemplate',
  responseContainerId: 'id',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'v2/securityDeposit/securityDepositTemplate/:id',
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/securityDepositTemplate/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/all/securityDepositTemplate',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/securityDeposit/securityDepositTemplate/changeStatus`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Modèles de dépôt de garantie.
- Libellé EN : Security deposit templates.