# Mots-clés – List

- **Groupe fonctionnel** : Catalog
- **Module** : Mots-clés
- **Ressource** : tags
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `name` ; utilisable en filtre
- Colonne 3 : source `tagType.id` ; utilisable en filtre
- Colonne 4 : source `parentTag.code`
- Colonne 5 : source `filterEl` ; type long text ; utilisable en filtre
- Colonne 6 : source `seller.code`

### Recherche et filtres
- champ `parentTag.id` (référence {{modulePath}}/catalog-manager/{{CPQ_TAGS}}, filtre true)
- champ `seller.id` (référence {{modulePath}}/{{CPQ_SELLERS}}, filtre true)

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/tag',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/tag',
  nestedEntities,
  keyColumn: 'code'
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/tag/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/tags',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/tags',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'cpq/tags/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/tags/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Mots-clés.
- Libellé EN : Tags.