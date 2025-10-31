# Attributs de groupe – List

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs de groupe
- **Ressource** : group-attributes
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `description`
- Colonne 3 : source `mandatory` ; type boolean
- Colonne 4 : source `display` ; type boolean
- Colonne 5 : source `disabled` ; type boolean

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: genericAllURL,
  nestedEntities
}).
- GET_MANY : getListV2({
  url: genericAllURL,
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'cpq/groupedAttributes',
  responseContainer: 'groupedAttributeDto',
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'cpq/groupedAttributes',
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: genericGetOneURL,
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Attributs de groupe.
- Libellé EN : Group attributes.