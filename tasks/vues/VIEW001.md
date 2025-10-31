# Types d'opération de compte – List

- **Groupe fonctionnel** : Administration
- **Module** : Types d'opération de compte
- **Ressource** : account-operations-types
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : finance-settings (priorité 3)
- **Icône** : Update

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `description` ; utilisable en filtre
- Colonne 3 : source `occCategory` ; choix (2) ; utilisable en filtre
- Colonne 4 : source `accountingCode.code` ; utilisable en filtre
- Colonne 5 : source `contraAccountingCode.code`
- Colonne 6 : source `journal` ; libellé "Journal"

### Recherche et filtres
- champ `journal` (type autocomplete array, référence {{modulePath}}/{{ADMIN_JOURNAL}}, sélection multiple, filtre {"nestedField":{"source":"id"}})
- champ `contraAccountingCode` (filtre {"nestedField":{"source":"code","prefix":"wildcardOrIgnoreCase"}})

### Actions et interactions
- Suppression possible depuis la liste.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 50 éléments.
- Tri initial : {"field":"code","order":"ASC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/OCCTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/OCCTemplate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/OCCTemplate/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'occTemplate',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'occTemplate',
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Types d'opération de compte.
- Libellé EN : Account operation types.