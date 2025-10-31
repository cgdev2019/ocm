# Plans de paiement – PATH EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Plans de paiement
- **Ressource** : payment-plans
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Payment Plan — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/PaymentPlan',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/PaymentPlan',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'v2/generic/PaymentPlan/',
  responseContainer: 'data',
  nestedEntities,
  // otherParams: {
  //   sortBy: 'serviceInstance.chargeInstances.id'
  // }
  prepareParams,
  //transformResponse: getOneTestData
  transformResponse
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/PaymentPlan',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/payment-plan/',
  responseContainerId: 'entityId',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/payment-plan/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/payment-plan/',
  method: 'DELETE'
}).
- ACTIVATE : url `v2/payment-plan/:id/activate`, options {"method":"PUT"}.
- CREATE_PAYMENT_PLAN : url `v2/payment-plan`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Plans de paiement.
- Libellé EN : Payment Plans.