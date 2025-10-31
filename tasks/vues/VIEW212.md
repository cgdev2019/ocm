# Gammes – List

- **Groupe fonctionnel** : Catalog
- **Module** : Gammes
- **Ressource** : products-line
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : catalog-manager (priorité 6)
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description`
- Colonne 3 : source `longDescription` ; utilisable en filtre
- Colonne 4 : source `parentLine.code`
- Colonne 5 : source `seller.code`

### Recherche et filtres
- champ `description` (filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `parentLine.id` (référence {{modulePath}}/catalog-manager/{{CPQ_PRODUCT_LINE}}, filtre true)
- champ `seller.id` (référence {{modulePath}}/{{CPQ_SELLERS}})

### Actions et interactions
- Bouton de création disponible.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/productLine',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/productLine',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/productLine/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'catalog/products/productLines',
  responseContainerId: 'actionStatus.entityId'
}).
- UPDATE : getUpdateProvider({
  url: 'catalog/products/productLines'
}).
- DELETE : getDeleteProvider({
  url: 'catalog/products/productLines/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'catalog/products/productLines/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Gammes.
- Libellé EN : Product families.