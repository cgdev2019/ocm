# Journal d’OD – List

- **Groupe fonctionnel** : Finance
- **Module** : Journal d’OD
- **Ressource** : miscellaneous-journal
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `journal.code` ; choix (4) ; utilisable en filtre
- Colonne 2 : source `dueDate` ; type date ; utilisable en filtre
- Colonne 3 : source `customerAccount.description|customerAccount.name.firstName+customerAccount.name.lastName`
- Colonne 4 : source `accountingCode.code`
- Colonne 5 : source `description`
- Colonne 6 : source `amountDebit` ; type number
- Colonne 7 : source `amountCredit` ; type number

### Recherche et filtres
- champ `currentMonth` (type prefilter, filtre true)
- champ `lastMonth` (type prefilter, filtre true)
- champ `lastThreeMonths` (type prefilter, filtre true)
- champ `lastYear` (type prefilter, filtre true)
- champ `currentYear` (type prefilter, filtre true)
- champ `startingFrom` (type date, filtre true)
- champ `betweenDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"a.dueDate BETWEEN __startDate AND __endDate"})

### Actions et interactions
- Export des données autorisé.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/OtherCreditAndCharge',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/OtherCreditAndCharge',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Journal d’OD.
- Libellé EN : Miscellaneous journal.