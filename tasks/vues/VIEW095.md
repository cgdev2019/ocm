# Politiques – PATH DUNNING POLICIES CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Politiques
- **Ressource** : dunning-policies
- **Clé / route** : PATH_DUNNING_POLICIES_CREATE
- **Type d'écran** : Formulaire de création
- **Menu** : dunning (priorité 9)
- **Icône** : Policy

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Dunning Policy — aucun paramètre spécifique confirmé dans la configuration

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