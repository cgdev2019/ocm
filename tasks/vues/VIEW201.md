# Import – Page par défaut

- **Groupe fonctionnel** : Catalog
- **Module** : Import
- **Ressource** : import-mass-action
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : catalog-manager/price-versions (priorité 6/0)
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQImport Mass Action — aucun paramètre spécifique confirmé dans la configuration

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
- UPLOAD : url `v2/catalog/priceManagement/pricePlanMatrixVersions/import`, options {"method":"POST"}.
- VALIDATE : url `v2/catalog/priceManagement/pricePlanMatrixVersions/import`, options {"method":"POST"}.
- UPLOAD_FILE : url `admin/files/upload`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Import.
- Libellé EN : Import.