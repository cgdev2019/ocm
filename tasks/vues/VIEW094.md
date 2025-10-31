# Politiques – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Politiques
- **Ressource** : dunning-policies
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : dunning (priorité 9)
- **Icône** : Policy

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite

### Recherche et filtres
- champ `disable` (type boolean, filtre true)

### Actions et interactions
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/dunningPolicy',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/dunningPolicy/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/dunningPolicy',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- CREATE : getCreateProvider({
  url: 'v2/dunning/dunningPolicy',
  responseContainerId: 'entityId'
}).
- UPDATE : getCreateProvider({
  url: props => {
    const {
      params: {
        data
      }
    } = props;
    return `v2/dunning/dunningPolicy/${data.id}`;
  },
  responseContainerId: 'entityId',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: params => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/${data.id}`;
  },
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/dunning/dunningPolicy/',
  method: 'DELETE'
}).
- HISTORY : getListV2({
  url: 'v2/generic/all/AuditLog'
}).
- ADD_RULE : getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/addRules/${get(data, 'id')}`;
  },
  method: 'POST'
}).
- MASS_REACTIVATE : getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/deactivate`;
  },
  method: 'POST'
}).
- ARCHIVE : getCreateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/dunning/dunningPolicy/archive/${get(data, 'dunningPolicyId')}`;
  },
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Politiques.
- Libellé EN : Policies.