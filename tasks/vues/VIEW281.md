# Résultats de la requête – PATH SHOW

- **Groupe fonctionnel** : Finance
- **Module** : Résultats de la requête
- **Ressource** : query-runs-results
- **Clé / route** : PATH_SHOW
- **Type d'écran** : Fiche de consultation
- **Icône** : List

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Query Runs List — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/QueryExecutionResult',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/QueryExecutionResult',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/QueryExecutionResult/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/QueryExecutionResult',
  method: 'DELETE'
}).
- DOWNLOAD_CSV_FILE : url `admin/files/downloadFile?file=/:filePath`, options {"method":"GET"}.
- GET_CSV_CONTENT : url `v2/queryManagement/reportQueries/queryExecutionResult/:id/results`, options {"method":"GET"}.

## Localisation et libellés
- Libellé FR : Résultats de la requête.
- Libellé EN : Query results.