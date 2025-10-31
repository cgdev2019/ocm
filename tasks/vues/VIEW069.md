# Plans de relances – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Plans de relances
- **Ressource** : collection-plans
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Icône** : AccountBalanceWallet

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `relatedInvoice.id`
- Colonne 2 : source `billingAccount.code` ; type link
- Colonne 3 : source `daysOverdue` ; type number ; utilisable en filtre
- Colonne 4 : source `balance` ; type number ; utilisable en filtre
- Colonne 5 : source `nextAction` ; utilisable en filtre
- Colonne 6 : source `nextActionDate` ; type date ; utilisable en filtre
- Colonne 7 : source `currentDunningLevelSequence` ; type number ; utilisable en filtre
- Colonne 8 : source `lastAction` ; utilisable en filtre
- Colonne 9 : source `lastActionDate` ; type date ; utilisable en filtre
- Colonne 10 : source `status.status` ; type status ; choix (5)

### Recherche et filtres
- champ `status.status` (type list, filtre {"nestedField":{"source":"status"}})
- champ `billingAccount` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})
- champ `nextActionDateBetween` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"nextActionDate BETWEEN __startDate AND __endDate"})
- champ `toRange nextActionDate` (type date, filtre {"transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `fromRange nextActionDate` (type date, filtre {"transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `fromRange balance` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `toRange balance` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `fromRange currentDunningLevelSequence` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `toRange currentDunningLevelSequence` (type number, filtre {"transformFilterValue":{"__code":"value => Number(value)"}})
- champ `lastActionDateBetween` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"lastActionDate BETWEEN __startDate AND __endDate"})
- champ `toRange lastActionDate` (type date, filtre {"transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `fromRange lastActionDate` (type date, filtre {"transformFilterValue":{"__code":"value => getGenericFormatDate(value)"}})
- champ `toRange relatedInvoice` (type number, filtre {"transformFilterValue":{"__code":"value => {\n  const dateFromTodayMinusDays = moment().startOf('day').subtract(Number(value), 'd').format(formatGenericDate);\n  return dateFromTodayMinusDays;\n}"},"nestedField":{"source":"dueDate"}})
- champ `fromRange relatedInvoice` (type number, filtre {"transformFilterValue":{"__code":"value => {\n  const dateFromTodayMinusDays = moment().startOf('day').subtract(Number(value), 'd').format(formatGenericDate);\n  return dateFromTodayMinusDays;\n}"},"nestedField":{"source":"dueDate"}})
- champ `ne nextAction` (filtre true)
- champ `ne lastAction` (filtre true)

### Actions et interactions
- Suppression possible depuis la liste.
- Export des données autorisé.
- Actions de masse personnalisées disponibles.
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/DunningCollectionPlan',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/DunningCollectionPlan',
  nestedEntities
}).
- MASS_STOP_COLLECTION_PLAN : url `v2/dunning/collectionPlan/massStop`, options {"method":"POST"}.
- MASS_PAUSE_COLLECTION_PLAN : url `v2/dunning/collectionPlan/massPause`, options {"method":"POST"}.
- MASS_RESUME_COLLECTION_PLAN : url `v2/dunning/collectionPlan/massresume`, options {"method":"POST"}.
- MASS_SWITCH_COLLECTION_PLAN : url `v2/dunning/collectionPlan/massSwitch`, options {"method":"POST"}.
- MASS_CHECK_SWITCH_COLLECTION_PLAN : url `v2/dunning/collectionPlan/checkMassSwitch`, options {"method":"POST"}.
- GET_ONE : getOneV2({
  url: 'v2/generic/DunningCollectionPlan/',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'v2/dunning/DunningCollectionPlan',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/dunning/DunningCollectionPlan/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/dunning/DunningCollectionPlan/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/dunning',
  method: 'DELETE'
}).
- PAUSE_COLLECTION_PLAN : url `v2/dunning/collectionPlan/pause/:id`, options {"method":"POST"}.
- RESUME_COLLECTION_PLAN : url `v2/dunning/collectionPlan/resume/:id`, options {"method":"POST"}.
- STOP_COLLECTION_PLAN : url `v2/dunning/collectionPlan/stop/:id`, options {"method":"POST"}.
- SWITCH_COLLECTION_PLAN : url `v2/dunning/collectionPlan/switch/:id`, options {"method":"POST"}.
- ADD_LEVEL_INSTANCE : url `v2/dunning/collectionPlan/addDunningLevelInstance`, options {"method":"POST"}.
- UPDATE_LEVEL_INSTANCE : url `v2/dunning/collectionPlan/updateDunningLevelInstance/:id`, options {"method":"PUT"}.
- REMOVE_LEVEL_INSTANCE : url `v2/dunning/collectionPlan/removeDunningLevelInstance`, méthode POST.
- ADD_ACTION_INSTANCE : url `v2/dunning/collectionPlan/addDunningActionInstance`, options {"method":"POST"}.
- UPDATE_ACTION_INSTANCE : url `v2/dunning/collectionPlan/updateDunningActionInstance/:id`, options {"method":"PUT"}.
- REMOVE_ACTION_INSTANCE : url `v2/dunning/collectionPlan/removeDunningActionInstance`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Plans de relances.
- Libellé EN : Collection plans.