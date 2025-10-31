# Attributs de groupe – PATH GROUPATTRIBUTE EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs de groupe
- **Ressource** : group-attributes
- **Clé / route** : PATH_GROUPATTRIBUTE_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQGroup Attributes — aucun paramètre spécifique confirmé dans la configuration

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