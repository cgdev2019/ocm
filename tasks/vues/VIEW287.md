# Dépôt de garantie – List

- **Groupe fonctionnel** : Finance
- **Module** : Dépôt de garantie
- **Ressource** : security-deposits-report
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `customerAccount.code`
- Colonne 3 : source `serviceInstance.code`
- Colonne 4 : source `description`
- Colonne 5 : source `status` ; type status
- Colonne 6 : source `amount` ; type number ; utilisable en filtre
- Colonne 7 : source `currentBalance` ; type number ; utilisable en filtre

### Recherche et filtres
- champ `code` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `customerAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `currency->currencyCode` (type autocomplete array, référence {{modulePath}}/{{FINANCE_TRADING_CURRENCIES}}, sélection multiple, filtre true)
- champ `fromRangeExclusive amount` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `toRange amount` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `fromRangeExclusive currentBalance` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `toRange currentBalance` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `invoiceReceiptNumber` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `status` (type autocomplete array, sélection multiple, filtre true)

### Actions et interactions
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/SecurityDeposit',
  nestedEntities
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/SecurityDeposit/',
  nestedEntities: nestedEntitiesDetailed
}).
- GET_SUM_CURRENCY : url `v2/generic/all/SecurityDeposit`.
- UPDATE : getUpdateProvider({
  url: 'v2/securityDeposit/:id',
  method: 'PUT'
}).
- CREDIT_ACTION : url `v2/securityDeposit/credit/:id`, options {"method":"POST"}.
- REFUND_ACTION : url `v2/securityDeposit/refund/:id`, options {"method":"POST"}.
- CANCEL_ACTION : url `v2/securityDeposit/cancel/:id`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Dépôt de garantie.
- Libellé EN : Security deposit.