# Attributs de groupe – PATH GROUPATTRIBUTE CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs de groupe
- **Ressource** : group-attributes
- **Clé / route** : PATH_GROUPATTRIBUTE_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQGroup Attributes — aucun paramètre spécifique confirmé dans la configuration

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