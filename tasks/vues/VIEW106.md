# Import – Page par défaut

- **Groupe fonctionnel** : B2B customer care
- **Module** : Import
- **Ressource** : import-c-action
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQImport CAction — aucun paramètre spécifique confirmé dans la configuration

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
- VALIDATE : url `job/execute`, options {"method":"POST"}.
- UPLOAD_FILE : url `massImport/uploadAndImport`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Import.
- Libellé EN : Import.