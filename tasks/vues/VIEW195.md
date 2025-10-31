# Plan de remise – PATH DISCOUNT PLAN EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Plan de remise
- **Ressource** : discount-plans
- **Clé / route** : PATH_DISCOUNT_PLAN_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : AccountBalanceWallet

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQDiscount Plan — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/discountPlan',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/discountPlan',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/discountPlan/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'catalog/discountPlan',
  method: 'POST',
  responseContainerId: 'entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'catalog/discountPlan',
  method: 'PUT',
  responseContainerId: 'entityId'
}).
- DELETE : getDeleteProvider({
  url: 'catalog/discountPlan?discountPlanCode=',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/discountPlan/',
  method: 'DELETE'
}).
- INACTIVATE_STATUS : url `catalog/discountPlan/:code/disable`, options {"method":"POST"}.
- ACTIVATE_STATUS : url `catalog/discountPlan`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : Plan de remise.
- Libellé EN : Discount plans.