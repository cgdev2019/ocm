# Gestes commerciaux – PATH COMMERCIAL GESTURE CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Gestes commerciaux
- **Ressource** : commercial-gestures
- **Clé / route** : PATH_COMMERCIAL_GESTURE_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create On Shot Charge — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'billing/subscription/applyOneShotChargeInstance',
  responseContainer: '',
  nestedEntities: []
}).

## Localisation et libellés
- Libellé FR : Gestes commerciaux.
- Libellé EN : Commercial gestures.