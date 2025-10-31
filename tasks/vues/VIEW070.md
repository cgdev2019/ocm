# Plans de relances – PATH COLLECTION PLANS EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Plans de relances
- **Ressource** : collection-plans
- **Clé / route** : PATH_COLLECTION_PLANS_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : AccountBalanceWallet

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Finance Collection Plans — aucun paramètre spécifique confirmé dans la configuration

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