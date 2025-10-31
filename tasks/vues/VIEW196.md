# Export – Page par défaut

- **Groupe fonctionnel** : Catalog
- **Module** : Export
- **Ressource** : export-mass-action
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : catalog-manager/price-versions (priorité 6/0)
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQExport Mass Action — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: '',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_MANY : getListV2({
  url: '',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
- CREATE : getCreateProvider({
  url: ''
}).
- UPDATE : getCreateProvider({
  url: '',
  method: 'PUT',
  keyColumn: 'id'
}).
- DELETE : getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
- EXPORT : url `v2/catalog/priceManagement/pricePlanMatrixVersions/export`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Export.
- Libellé EN : Export.