# Plan comptable – List

- **Groupe fonctionnel** : Finance
- **Module** : Plan comptable
- **Ressource** : chart-of-accounts
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Icône** : AccountTree

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description` ; utilisable en filtre
- Colonne 3 : source `chartOfAccountTypeEnum` ; choix (undefined) ; utilisable en filtre
- Colonne 4 : source `chartOfAccountViewTypeEnum` ; choix (undefined) ; utilisable en filtre
- Colonne 5 : source `parentAccountingCode.code` ; utilisable en filtre
- Colonne 6 : source `active` ; type boolean ; utilisable en filtre

### Actions et interactions
- Export des données autorisé.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

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