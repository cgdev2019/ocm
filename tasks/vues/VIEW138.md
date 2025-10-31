# Journal des paiements – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Journal des paiements
- **Ressource** : payments-logs
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : FindInPage

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `customerAccount.code` ; utilisable en filtre
- Colonne 2 : source `caDescriptionOrLastNameFirstName` ; type text ; utilisable en filtre
- Colonne 3 : source `invoices.numbers`
- Colonne 4 : source `invoices.amountsWithTax` ; type number
- Colonne 5 : source `transactionCategory` ; type status ; choix (2) ; utilisable en filtre
- Colonne 6 : source `type` ; type text ; utilisable en filtre
- Colonne 7 : source `reference` ; type text ; utilisable en filtre
- Colonne 8 : source `matchingAmount` ; type number
- Colonne 9 : source `paymentInfo5` ; type text ; utilisable en filtre
- Colonne 10 : source `dueDate` ; type date ; utilisable en filtre
- Colonne 11 : source `paymentInfo` ; type text ; utilisable en filtre
- Colonne 12 : source `transactionDate` ; type date ; utilisable en filtre

### Recherche et filtres
- champ `customerAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `invoice` (filtre {"nestedField":{"source":"invoiceNumber","prefix":"wildcardOrIgnoreCase"}})

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.

## Fournisseur de données
- GET_LIST : url `v2/generic/all/accountOperation`, options {"method":"POST"}.
- GET_MANY : url `v2/generic/all/accountOperation`, options {"method":"POST"}.
- GET_MANY_REFERECNE : url `v2/generic/all/accountOperation`, options {"method":"POST"}.
- INVOICE_PAYMENT : url `payment`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Journal des paiements.
- Libellé EN : Payment log.