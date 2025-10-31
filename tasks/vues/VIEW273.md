# Journal des paiements – List

- **Groupe fonctionnel** : Finance
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
- Colonne 9 : source `associatedBank` ; type text ; utilisable en filtre
- Colonne 10 : source `dueDate` ; type date ; utilisable en filtre
- Colonne 11 : source `transactionDate` ; type date ; utilisable en filtre

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountOperation',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountOperation',
  responseContainer: 'data',
  nestedEntities
}).
- AOS : getListV2({
  url: 'v2/generic/all/accountOperation',
  responseContainer: 'data',
  nestedEntities,
  genericFields: ['SUM(amount)', 'customerAccount.id', 'transactionCategory'],
  otherParams: {
    groupBy: ['customerAccount.id', 'transactionCategory']
  }
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/accountOperation',
  responseContainer: 'data',
  nestedEntities
}).
- INVOICE_PAYMENT : url `payment`, options {"method":"POST"}.
- REFUND_CREDIT : url `[object Object]`, options {"method":"POST"}.
- DEFERRAL_PAYMENT : url `v2/accountReceivable/deferralPayments`, options {"method":"POST"}.
- SD_PAYMENT : url `[object Object]`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Journal des paiements.
- Libellé EN : Payment log.