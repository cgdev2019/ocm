# Modèles – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Modèles
- **Ressource** : dunning-templates
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : dunning (priorité 9)
- **Icône** : Bookmarks

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite

### Recherche et filtres
- champ `language` (filtre {"nestedField":{"source":"language.languageCode"}})

### Actions et interactions
- Bouton de création disponible.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/DunningTemplate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/DunningTemplate/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/DunningTemplate',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
- CREATE : getCreateProvider({
  url: 'v2/dunning/dunningtemplate'
}).
- UPDATE : getUpdateProvider({
  url: 'v2/dunning/dunningtemplate/:id',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/dunning/dunningtemplate/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/dunning/dunningtemplate/',
  method: 'DELETE'
}).
- DUPLICATE : url `[object Object]`.

## Localisation et libellés
- Libellé FR : Modèles.
- Libellé EN : Templates.