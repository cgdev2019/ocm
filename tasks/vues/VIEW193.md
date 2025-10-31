# Plan de remise – List

- **Groupe fonctionnel** : Catalog
- **Module** : Plan de remise
- **Ressource** : discount-plans
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : AccountBalanceWallet

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `status` ; type status ; choix (4) ; utilisable en filtre
- Colonne 3 : source `description` ; utilisable en filtre
- Colonne 4 : source `discountPlanType` ; libellé "Type" ; utilisable en filtre

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

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