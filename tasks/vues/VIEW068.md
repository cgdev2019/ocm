# Centre de coût – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Centre de coût
- **Ressource** : coast-center
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : FilterNone

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'customTable/list/CE_CENTRE_DE_COUT',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'customTable/list/CE_CENTRE_DE_COUT',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'customTable/list/CE_CENTRE_DE_COUT',
  nestedEntities
}).
- GET_CENTRE_COUT_MULTI : url `customTable/list/CE_CENTRE_DE_COUT_MULTI`, options {"method":"POST"}.
- DELETE_CENTRE_COUT_MULTI : getDeleteProvider({
  url: ({
    params
  }) => {
    return `customTable`;
  },
  method: 'DELETE'
}).
- POST_CENTRE_COUT_MULTI : getCreateProvider({
  url: 'customTable/createOrUpdate',
  method: 'POST'
}).
- PUT_CENTRE_COUT_MULTI : getUpdateProvider({
  url: 'customTable/createOrUpdate',
  method: 'POST'
}).

## Localisation et libellés
- Libellé FR : Centre de coût.
- Libellé EN : Coast Center.