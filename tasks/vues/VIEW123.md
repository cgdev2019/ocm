# Order attributes – PATH ORDER ATTRIBUTE CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Order attributes
- **Ressource** : order-attributes
- **Clé / route** : PATH_ORDER_ATTRIBUTE_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQOrder Attributes — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_ONE : getOneV2({
  url: 'v2/generic/OrderAttribute/',
  nestedEntities
}).
- GET_LIST : getListV2({
  url: 'v2/generic/all/OrderAttribute',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/OrderAttribute',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/OrderAttribute',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/generic/OrderAttribute',
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/generic/OrderAttribute/:id',
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Order attributes.
- Libellé EN : Order attributes.