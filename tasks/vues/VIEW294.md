# Balance générale – List

- **Groupe fonctionnel** : Finance
- **Module** : Balance générale
- **Ressource** : trial-balance
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `accountingCode`
- Colonne 2 : source `accountingLabel`
- Colonne 3 : source `initialBalance` ; type number
- Colonne 4 : source `currentDebitBalance` ; type number
- Colonne 5 : source `currentCreditBalance` ; type number
- Colonne 6 : source `closingBalance` ; type number

### Recherche et filtres
- champ `codeOrLabel` (filtre true)
- champ `period` (filtre true)
- champ `betweenDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD"})

### Actions et interactions
- Export des données autorisé.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : url `[object Object]`, options {"method":"GET"}.
- GET_MANY : getListV2({
  url: 'v2/standardReports/trialBalances',
  method: 'GET'
}).

## Localisation et libellés
- Libellé FR : Balance générale.
- Libellé EN : Trial balance.