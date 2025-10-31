# Dépôt de garantie – PATH CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Dépôt de garantie
- **Ressource** : security-deposits
- **Clé / route** : PATH_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Security Deposit — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'v2/generic/SecurityDeposit/',
  responseContainer: 'data',
  nestedEntities
  // otherParams: {
  //   sortBy: 'serviceInstance.chargeInstances.id'
  // }
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/securityDeposit',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/securityDeposit/:id',
  method: 'PUT'
}).
- INSTANTIATE_ACTION : getCreateProvider({
  url: 'v2/securityDeposit/instantiateSecurityDeposit',
  method: 'POST'
}).
- CREDIT_ACTION : url `v2/securityDeposit/credit/:id`, options {"method":"POST"}.
- REFUND_ACTION : url `v2/securityDeposit/refund/:id`, options {"method":"POST"}.
- CANCEL_ACTION : url `v2/securityDeposit/cancel/:id`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Dépôt de garantie.
- Libellé EN : Security Deposit.