# Encours de consommation – PATH OSHO CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Encours de consommation
- **Ressource** : osho
- **Clé / route** : PATH_OSHO_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create OSHO — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/ratedTransaction',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/ratedTransaction',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'v2/generic/ratedTransaction/',
  responseContainer: 'data',
  nestedEntities,
  otherParams: {
    sortBy: 'serviceInstance.chargeInstances.id'
  }
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/ratedTransaction',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'billing/subscription/applyOneShotChargeInstance',
  responseContainer: '',
  nestedEntities: []
}).
- UPDATE : getUpdateProvider({
  url: 'v2/billing/ratedTransaction/:id',
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Encours de consommation.
- Libellé EN : Consumption.