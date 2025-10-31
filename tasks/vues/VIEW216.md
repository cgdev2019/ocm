# Mots-clés – PATH TAGS CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Mots-clés
- **Ressource** : tags
- **Clé / route** : PATH_TAGS_CREATE
- **Type d'écran** : Formulaire de création
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQTags — aucun paramètre spécifique confirmé dans la configuration

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