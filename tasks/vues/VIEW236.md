# Plan comptable – List

- **Groupe fonctionnel** : Finance
- **Module** : Plan comptable
- **Ressource** : accounting-codes
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : Business

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description` ; utilisable en filtre
- Colonne 3 : source `chartOfAccountTypeEnum` ; choix (5) ; utilisable en filtre
- Colonne 4 : source `reportingAccount` ; utilisable en filtre
- Colonne 5 : source `chartOfAccountViewTypeEnum` ; choix (2) ; utilisable en filtre
- Colonne 6 : source `migrated` ; type boolean ; utilisable en filtre
- Colonne 7 : source `disabled` ; type boolean ; utilisable en filtre

### Actions et interactions
- Suppression possible depuis la liste.
- Actions de masse désactivées.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].
- Tri initial : {"field":"code","order":"ASC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountingCode',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountingCode',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Plan comptable.
- Libellé EN : Accounting codes.