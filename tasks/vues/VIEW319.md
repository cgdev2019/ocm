# EDRs – List

- **Groupe fonctionnel** : Operation
- **Module** : EDRs
- **Ressource** : event-details-records
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : mediation (priorité 2)
- **Icône** : QueryBuilder

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `id` ; utilisable en filtre
- Colonne 2 : source `eventVersion` ; type number ; utilisable en filtre
- Colonne 3 : source `eventKey`
- Colonne 4 : source `eventDate` ; type date
- Colonne 5 : source `status` ; type status
- Colonne 6 : source `rejectReason`
- Colonne 7 : source `subscription` ; type link
- Colonne 8 : source `originBatch` ; utilisable en filtre
- Colonne 9 : source `originRecord` ; utilisable en filtre
- Colonne 10 : source `accessCode`
- Colonne 11 : source `quantity` ; type number ; utilisable en filtre
- Colonne 12 : source `parameter1`
- Colonne 13 : source `parameter2`
- Colonne 14 : source `parameter3`
- Colonne 15 : source `parameter4`
- Colonne 16 : source `parameter5`
- Colonne 17 : source `parameter6`
- Colonne 18 : source `parameter7`
- Colonne 19 : source `parameter8`
- Colonne 20 : source `parameter9`
- Colonne 21 : source `dateParam1` ; type date
- Colonne 22 : source `dateParam2` ; type date
- Colonne 23 : source `dateParam3` ; type date
- Colonne 24 : source `dateParam4` ; type date
- Colonne 25 : source `dateParam5` ; type date
- Colonne 26 : source `decimalParam1` ; type number
- Colonne 27 : source `decimalParam2` ; type number
- Colonne 28 : source `decimalParam3` ; type number
- Colonne 29 : source `decimalParam4` ; type number
- Colonne 30 : source `decimalParam5` ; type number
- Colonne 31 : source `extraParameter`

### Recherche et filtres
- champ `subscription` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => `lower(a.subscription.code) LIKE lower('%${value}%')`"}})
- champ `status` (type status, filtre {"multiple":true,"type":"autocomplete-array"})
- champ `rejectReason` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `eventDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"eventDate BETWEEN __startDate AND __endDate"})
- champ `eventKey` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `accessCode` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter1` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter2` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter3` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter4` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter5` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter6` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter7` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter8` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parameter9` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `dateParam1` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dateParam1 BETWEEN __startDate AND __endDate"})
- champ `dateParam2` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dateParam2 BETWEEN __startDate AND __endDate"})
- champ `dateParam3` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dateParam3 BETWEEN __startDate AND __endDate"})
- champ `dateParam4` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dateParam4 BETWEEN __startDate AND __endDate"})
- champ `dateParam5` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"dateParam5 BETWEEN __startDate AND __endDate"})
- champ `decimalParam1` (type number, filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.decimalParam1`)"}})
- champ `decimalParam2` (type number, filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.decimalParam2`)"}})
- champ `decimalParam3` (type number, filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.decimalParam3`)"}})
- champ `decimalParam4` (type number, filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.decimalParam4`)"}})
- champ `decimalParam5` (type number, filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.decimalParam5`)"}})
- champ `extraParameter` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Export des données autorisé.

### Pagination et tri
- Pagination par 10 éléments.
- Choix de pagination : [10,20,50,100].
- Tri par défaut avancé : {"field":"id","order":"ASC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/EDR',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/EDR',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : EDRs.
- Libellé EN : EDRs.