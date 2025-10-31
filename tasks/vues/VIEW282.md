# Journal de vente – List

- **Groupe fonctionnel** : Finance
- **Module** : Journal de vente
- **Ressource** : sales-journal
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `journal.code`
- Colonne 2 : source `invoice.invoiceNumber`
- Colonne 3 : source `invoiceDate` ; type date ; utilisable en filtre
- Colonne 4 : source `customerAccount.description|name.firstName+name.lastName`
- Colonne 5 : source `accountingCode.code` ; utilisable en filtre
- Colonne 6 : source `description`
- Colonne 7 : source `amountDebit` ; type number
- Colonne 8 : source `amountCredit` ; type number
- Colonne 9 : source `dueDate` ; type date ; utilisable en filtre

### Recherche et filtres
- champ `journal.code` (filtre true)
- champ `betweenDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dueDate BETWEEN __startDate AND __endDate"})
- champ `currentMonth` (type prefilter, filtre true)
- champ `lastMonth` (type prefilter, filtre true)
- champ `lastThreeMonths` (type prefilter, filtre true)
- champ `currentYear` (type prefilter, filtre true)
- champ `startingFrom` (type date, filtre true)

### Actions et interactions
- Export des données autorisé.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/recordedInvoice',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/recordedInvoice'
}, nestedEntities).

## Localisation et libellés
- Libellé FR : Journal de vente.
- Libellé EN : Sales journal.