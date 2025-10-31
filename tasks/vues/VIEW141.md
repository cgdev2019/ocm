# Point de livraison – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Point de livraison
- **Ressource** : point-of-delivery
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : WbIncandescent

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `addressStreet` ; utilisable en filtre
- Colonne 3 : source `zipCode` ; utilisable en filtre
- Colonne 4 : source `city` ; utilisable en filtre

### Recherche et filtres
- champ `code` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.
- Ouverture d'une ligne sur l'événement `modify`.

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