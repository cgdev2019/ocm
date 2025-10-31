# Modèles des commandes ouvertes – PATH EDIT

- **Groupe fonctionnel** : Finance
- **Module** : Modèles des commandes ouvertes
- **Ressource** : open-orders-templates
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : open-orders (priorité 4)
- **Icône** : AccountTree

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Open Orders Template — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/openOrderTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/openOrderTemplate',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'v2/ordering/openOrderTemplates',
  responseContainer: 'openOrderTemplate',
  responseContainerId: 'id',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: ({
    params: {
      data = {}
    } = {}
  }) => {
    return `v2/ordering/openOrderTemplates/${data.code}`;
  },
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/openOrderTemplate/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/all/openOrderTemplate',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/ordering/openOrderTemplates/:code/status/:newStatus`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : Modèles des commandes ouvertes.
- Libellé EN : Open orders templates.