# Tableaux de données personnalisées – List

- **Groupe fonctionnel** : Catalog
- **Module** : Tableaux de données personnalisées
- **Ressource** : custom-tables
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : catalog-manager/reference-tables (priorité 2)
- **Icône** : Settings

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `description`

### Recherche et filtres
- champ `search` (filtre true)

### Actions et interactions
- Bouton de création disponible.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/CustomEntityTemplate',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'entityCustomization/entity/',
  keyColumn: 'code',
  responseContainer: 'customEntityTemplate'
}).
- CUSTOM_TABLE_DATA : url `[object Object]`, options {"method":"POST"}.
- EXPORT : url `[object Object]`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Tableaux de données personnalisées.
- Libellé EN : Custom tables.