# Tableaux de données personnalisées – PATH CUSTOM TABLES EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Tableaux de données personnalisées
- **Ressource** : custom-tables
- **Clé / route** : PATH_CUSTOM_TABLES_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : catalog-manager/reference-tables (priorité 2)
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQCustom Tables — aucun paramètre spécifique confirmé dans la configuration

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