# Journal de banque – List

- **Groupe fonctionnel** : Finance
- **Module** : Journal de banque
- **Ressource** : cash-journal
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `journal.code`
- Colonne 2 : source `invoice.invoiceNumber`
- Colonne 3 : source `dueDate`
- Colonne 4 : source `customerAccount.code`
- Colonne 5 : source `accountingCode.code`
- Colonne 6 : source `accountingCode.description`
- Colonne 7 : source `amountDebit` ; type number
- Colonne 8 : source `amountCredit` ; type number

### Recherche et filtres
- champ `journal.code` (filtre true)
- champ `currentMonth` (type prefilter, filtre true)
- champ `currentYear` (type prefilter, filtre true)
- champ `lastMonth` (type prefilter, filtre true)
- champ `lastThreeMonths` (type prefilter, filtre true)
- champ `lastYear` (type prefilter, filtre true)
- champ `startingFrom` (type date, filtre true)
- champ `betweenDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dueDate BETWEEN __startDate AND __endDate"})

### Actions et interactions
- Export des données autorisé.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountOperation',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountOperation',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Journal de banque.
- Libellé EN : Bank journal.