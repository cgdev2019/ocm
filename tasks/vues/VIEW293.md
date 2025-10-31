# Rapport de taxes – List

- **Groupe fonctionnel** : Finance
- **Module** : Rapport de taxes
- **Ressource** : tax-journal
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `journalDate` ; type date ; utilisable en filtre
- Colonne 3 : source `customerAccount.code`
- Colonne 4 : source `accountingNumber` ; utilisable en filtre
- Colonne 5 : source `articleName` ; utilisable en filtre
- Colonne 6 : source `amountDebit` ; type number
- Colonne 7 : source `amountCredit` ; type number

### Recherche et filtres
- champ `code` (filtre {"wildcard":true})

### Actions et interactions
- Export des données autorisé.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- __identifier : implémentation spécifique.

## Localisation et libellés
- Libellé FR : Rapport de taxes.
- Libellé EN : Tax journal.