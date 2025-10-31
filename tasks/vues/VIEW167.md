# Consommateurs – PATH USERACCOUNT EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Consommateurs
- **Ressource** : user-accounts
- **Clé / route** : PATH_USERACCOUNT_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit B2BConsumers — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/userAccount',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/userAccount/',
    params: {
      nestedEntities
    }
  }, {
    ...counters.GET_MANY,
    params: {
      ...counters.GET_MANY.params,
      filters: {
        'counterInstance->userAccount->code': '@responses[0].data.code'
        // counterLevel: 'UA'
      }
    },

    autoAppendId: false
  }],
  sync: true,
  transformResponse: transformRecord
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/userAccount',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/userAccount',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- CREATE : getCreateProvider({
  url: 'account/userAccount',
  method: 'POST',
  responseContainerId: 'entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'account/userAccount',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'account/userAccount/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'account/userAccount/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Consommateurs.
- Libellé EN : Consumer.