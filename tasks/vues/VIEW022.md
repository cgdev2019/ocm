# Catégories de contact – List

- **Groupe fonctionnel** : Administration
- **Module** : Catégories de contact
- **Ressource** : contact-categories
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : customer-settings (priorité 1)
- **Icône** : Update

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `description`

### Recherche et filtres
- champ `searchBar` (filtre {"type":"searchbar","transformFilterKey":{"__code":"() => 'or description'"}})

### Actions et interactions
- Suppression possible depuis la liste.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 50 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

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