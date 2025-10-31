# Plan comptable – PATH CREATE

- **Groupe fonctionnel** : Finance
- **Module** : Plan comptable
- **Ressource** : chart-of-accounts
- **Clé / route** : PATH_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : AccountTree

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Chart Of Accounts — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountingCode',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountingCode',
  nestedEntities
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/accountingCode/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/billing/accountingCode',
  method: 'POST'
}).
- DELETE : getDeleteProvider({
  url: 'v2/billing/accountingCode',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/billing/accountingCode',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Plan comptable.
- Libellé EN : Chart of accounts.