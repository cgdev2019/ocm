# Point de livraison – PATH EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Point de livraison
- **Ressource** : point-of-delivery
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : WbIncandescent

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit B2BPoint Of Delivery — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/PointOfDelivery',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/PointOfDelivery/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/PointOfDelivery',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/PointOfDelivery',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).

## Localisation et libellés
- Libellé FR : Point de livraison.
- Libellé EN : Point of delivery.