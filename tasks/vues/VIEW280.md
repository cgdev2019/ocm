# Résultats de la requête – List

- **Groupe fonctionnel** : Finance
- **Module** : Résultats de la requête
- **Ressource** : query-runs-results
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : List

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `reportQuery.code`
- Colonne 2 : source `startDate` ; type date ; utilisable en filtre
- Colonne 3 : source `reportQuery.auditable.creator`
- Colonne 4 : source `executionDuration` ; type number ; utilisable en filtre
- Colonne 5 : source `queryExecutionMode` ; type status ; choix (2)
- Colonne 6 : source `queryStatus` ; type status ; choix (2) ; utilisable en filtre
- Colonne 7 : source `lineCount` ; type number ; utilisable en filtre
- Colonne 8 : type actions

### Recherche et filtres
- champ `reportQuery.code` (filtre true)
- champ `queryExecutionMode` (type list, filtre true)
- champ `reportQuery.auditable.creator` (type list, référence query-scheduler, filtre true)
- champ `auditable.creator` (type prefilter, filtre true)

### Actions et interactions
- Suppression possible depuis la liste.
- Ouverture d'une ligne sur l'événement `show`.

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