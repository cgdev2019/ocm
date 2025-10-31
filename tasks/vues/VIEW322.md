# Import – Page par défaut

- **Groupe fonctionnel** : Operation
- **Module** : Import
- **Ressource** : import-cdr
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQImport CDR — aucun paramètre spécifique confirmé dans la configuration

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
- DELETE_MANY : getDeleteProvider({
  url: 'v2/mediation/cdrs',
  method: 'DELETE'
  // keyColumn: nestedEntities,
}).
- DISCARD : getListV2({
  urls: [],
  sync: true
}).
- REPLAY : getListV2({
  urls: [],
  sync: true
}).
- PROCEED_MEDIATION : implémentation spécifique.
- PROCEED_MEDIATION_BY_CDR : getCreateProvider({
  urls: [],
  sync: true
}).
- UPLOAD : url `v2/catalog/priceManagement/pricePlanMatrixVersions/import`, options {"method":"POST"}.
- VALIDATE : url `job/execute`, options {"method":"POST"}.
- UPLOAD_FILE : url `admin/files/upload`, options {"method":"POST"}.
- CREATE_DIR : url `admin/files/createDir`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Import.
- Libellé EN : Import.