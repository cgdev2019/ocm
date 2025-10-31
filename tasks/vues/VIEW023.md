# Catégories de contact – PATH CONTACT CATEGORIES CREATE

- **Groupe fonctionnel** : Administration
- **Module** : Catégories de contact
- **Ressource** : contact-categories
- **Clé / route** : PATH_CONTACT_CATEGORIES_CREATE
- **Type d'écran** : Formulaire de création
- **Menu** : customer-settings (priorité 1)
- **Icône** : Update

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Contact Categories — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/contactCategory',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/contactCategory',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/account/contactCategory',
  responseContainerId: 'entityId',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/contactCategory/',
  nestedEntities
}).
- UPDATE : getUpdateProvider({
  url: props => {
    const {
      params
    } = props;
    const {
      data
    } = params;
    return `v2/account/contactCategory/${get(data, 'code')}`;
  },
  method: 'PUT'
}).
- DELETE : getUpdateProvider({
  url: 'v2/account/contactCategory/',
  method: 'delete'
}).
- DELETE_MANY : getUpdateProvider({
  url: 'v2/account/contactCategory/',
  method: 'delete'
}).

## Localisation et libellés
- Libellé FR : Catégories de contact.
- Libellé EN : Contact categories.