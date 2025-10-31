# Modèles – PATH DUNNING TEMPLATES CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Modèles
- **Ressource** : dunning-templates
- **Clé / route** : PATH_DUNNING_TEMPLATES_CREATE
- **Type d'écran** : Formulaire de création
- **Menu** : dunning (priorité 9)
- **Icône** : Bookmarks

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create B2BDunning Templates — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/DunningTemplate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/DunningTemplate/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/DunningTemplate',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
- CREATE : getCreateProvider({
  url: 'v2/dunning/dunningtemplate'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/dunning/dunningtemplate/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/dunning/dunningtemplate/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/dunning/dunningtemplate/',
  method: 'DELETE'
}).
- DUPLICATE : url `[object Object]`.

## Localisation et libellés
- Libellé FR : Modèles.
- Libellé EN : Templates.