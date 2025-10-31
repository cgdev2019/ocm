# Plans de facturation – List

- **Groupe fonctionnel** : Administration
- **Module** : Plans de facturation
- **Ressource** : billing-plans
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : CalendarToday

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description`

### Recherche et filtres
- champ `description` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Export des données autorisé.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.action.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

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