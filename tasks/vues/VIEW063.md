# Lignes du plan de facturation – PATH CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Lignes du plan de facturation
- **Ressource** : billing-plan-lines
- **Clé / route** : PATH_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Admin Billing Plan Lines — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  keyColumn,
  url: 'v2/generic/all/invoicingPlanItem',
  nestedEntities
}).
- GET_MANY : getListV2({
  keyColumn: 'code',
  url: 'v2/generic/all/invoicingPlanItem',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'billing/invoicingPlanItems',
  responseContainerId: 'entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'billing/invoicingPlanItems',
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/invoicingPlanItem/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/invoicingPlanItem',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Lignes du plan de facturation.
- Libellé EN : Invoicing plan lines.