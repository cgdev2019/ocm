# Média – PATH MEDIA CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Média
- **Ressource** : digital-resources
- **Clé / route** : PATH_MEDIA_CREATE
- **Type d'écran** : Formulaire de création
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQDigital Resources — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/media',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/media',
  nestedEntities,
  keyColumn
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/media/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'media',
  method: 'POST',
  responseContainer: 'mediaDto'
}).
- UPDATE : getDeleteProvider({
  url: 'media',
  method: 'PUT',
  responseContainer: 'dmediaDto'
}).
- DELETE : getUpdateProvider({
  url: 'media/',
  method: 'DELETE'
}).
- DELETE_MANY : getUpdateProvider({
  url: 'media/',
  method: 'DELETE'
}).
- UPLOAD : url `v2/media/files/upload`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Média.
- Libellé EN : Media.