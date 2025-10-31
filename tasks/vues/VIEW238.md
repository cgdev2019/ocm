# Rapport des opérations comptables – List

- **Groupe fonctionnel** : Finance
- **Module** : Rapport des opérations comptables
- **Ressource** : accounting-operations-report
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : accounting-period (priorité 1/0)
- **Icône** : AccountBalanceWallet

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `type` ; type status ; choix (8)
- Colonne 2 : source `customerAccount.description|customerAccount.name.firstName+customerAccount.name.lastName`
- Colonne 3 : source `transactionDate` ; type date
- Colonne 4 : source `collectionDate` ; type date
- Colonne 5 : source `status` ; type status ; choix (3) ; utilisable en filtre
- Colonne 6 : source `reference`
- Colonne 7 : source `amountDebit` ; type number
- Colonne 8 : source `amountCredit` ; type number
- Colonne 9 : source `accountingDate` ; type date
- Colonne 10 : source `forcedPosting` ; type boolean

### Recherche et filtres
- champ `type` (type list, filtre true)
- champ `currentMonth` (type prefilter, filtre true)
- champ `lastMonth` (type prefilter, filtre true)
- champ `currentAccountingPeriod` (type prefilter, filtre true)
- champ `lastSubPeriod` (type prefilter, filtre true)
- champ `lastTwoSubPeriod` (type prefilter, filtre true)
- champ `openedSupPeriods` (type prefilter, filtre true)

### Actions et interactions
- Suppression possible depuis la liste.
- Export des données autorisé.
- Actions de masse personnalisées disponibles.
- Ouverture d'une ligne sur l'événement `modify`.

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
- UPDATE_STATUS_TO_EXPORTED : url `v2/accountReceivable/accountOperation/changeStatus`, options {"method":"PUT"}.
- VALIDATE_POSTING : url `v2/accountReceivable/accountOperation/post`, options {"method":"POST"}.
- FORCE_POSTING : url `v2/accountReceivable/accountOperation/forcePosting`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Rapport des opérations comptables.
- Libellé EN : Accounting operations report.