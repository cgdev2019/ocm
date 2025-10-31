# Types d'opération de compte – PATH ACCOUNT CREATE

- **Groupe fonctionnel** : Finance
- **Module** : Types d'opération de compte
- **Ressource** : account-operations-types
- **Clé / route** : PATH_ACCOUNT_CREATE
- **Type d'écran** : Vue composite
- **Icône** : Update

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Account Op Types — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/OCCTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/OCCTemplate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/OCCTemplate/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'occTemplate',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'occTemplate',
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Types d'opération de compte.
- Libellé EN : Account operation types.