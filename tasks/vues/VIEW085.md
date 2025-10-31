# Ligne de remise – PATH DISCOUNT LINE EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Ligne de remise
- **Ressource** : discount-lines
- **Clé / route** : PATH_DISCOUNT_LINE_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit B2BDiscount Line — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/discountPlanItem',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/discountPlanItem',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/discountPlanItem/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'catalog/discountPlanItem',
  method: 'POST',
  responseContainerId: 'entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'catalog/discountPlanItem',
  method: 'PUT',
  responseContainerId: 'entityId'
}).
- DELETE_DISCOUNT_LINE : getDeleteProvider({
  url: 'catalog/discountPlanItem/:discountPlanItemCode',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/discountPlanItem/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Ligne de remise.
- Libellé EN : Discount line.