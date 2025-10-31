# Dépôt de garantie – PATH EDIT

- **Groupe fonctionnel** : Finance
- **Module** : Dépôt de garantie
- **Ressource** : security-deposits-report
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Security Deposit — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  nestedEntities
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/SecurityDeposit/',
  nestedEntities: nestedEntitiesDetailed
}).
- GET_SUM_CURRENCY : url `v2/generic/all/SecurityDeposit`.
- UPDATE : getUpdateProvider({
  url: 'v2/securityDeposit/:id',
  method: 'PUT'
}).
- CREDIT_ACTION : url `v2/securityDeposit/credit/:id`, options {"method":"POST"}.
- REFUND_ACTION : url `v2/securityDeposit/refund/:id`, options {"method":"POST"}.
- CANCEL_ACTION : url `v2/securityDeposit/cancel/:id`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Dépôt de garantie.
- Libellé EN : Security deposit.