# Plans de facturation – PATH CREATE

- **Groupe fonctionnel** : Administration
- **Module** : Plans de facturation
- **Ressource** : billing-plans
- **Clé / route** : PATH_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : CalendarToday

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Admin Billing Plans — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/invoicingPlan',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/invoicingPlan',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'billing/invoicingPlans',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'billing/invoicingPlans',
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/invoicingPlan/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/invoicingPlan',
  method: 'DELETE'
}).
- DELETE_BILLING_PLAN_LINE : getDeleteProvider({
  url: 'billing/invoicingPlanItems/:code',
  method: 'DELETE'
}).
- DELETE_BILLING_PLAN : getDeleteProvider({
  url: ({
    params
  }) => {
    const {
      data: {
        code
      }
    } = params;
    return `billing/invoicingPlans/${code[0]}`;
  },
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Plans de facturation.
- Libellé EN : Invoicing plans.