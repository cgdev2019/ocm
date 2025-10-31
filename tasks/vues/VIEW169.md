# Devis – PATH ARTICLE MAPPING LINE CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Devis
- **Ressource** : article-mapping-line
- **Clé / route** : PATH_ARTICLE_MAPPING_LINE_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQCatalog Article Mapping Line — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/articleMappingLine',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/articleMappingLine',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/articleMappingLine/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/articleMappingLines/',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => `v2/articleMappingLines/${params.id}`,
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/articleMappingLines/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/articleMappingLines/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Devis.
- Libellé EN : Product or Service.