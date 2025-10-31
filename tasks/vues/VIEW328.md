# Générateur de requêtes – Page par défaut

- **Groupe fonctionnel** : Operation
- **Module** : Générateur de requêtes
- **Ressource** : query-builder
- **Clé / route** : racine du module
- **Type d'écran** : Vue composite
- **Menu** : query-tool (priorité 4)
- **Icône** : QueryBuilder

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Query Builder — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : url `[object Object]`, options {"method":"GET","apiSeparator":";"}.
- GET_ONE_QUERY : url `v2/queryManagement/reportQueries/:id`, options {"method":"GET"}.
- GET_MANY : getListV2({
  url: 'v2/queryManagement/reportQueries?limit=999999',
  nestedEntities,
  method: 'GET'
}).
- CREATE : getCreateProvider({
  url: 'v2/queryManagement/reportQueries',
  method: 'POST'
}).
- UPDATE : url `v2/queryManagement/reportQueries/:id`, options {"method":"PUT"}.
- DELETE : getDeleteProvider({
  url: 'v2/queryManagement/reportQueries/',
  method: 'DELETE'
}).
- DELETE_QUERY : url `v2/queryManagement/reportQueries/:id`, options {"method":"DELETE"}.
- ADD_QUERY_SCHEDULER : url `[object Object]`, options {"method":"POST"}.
- DOWNLOAD_QUERY : url `[object Object]`, options {"method":"GET"}.
- EXECUTE_QUERY : url `[object Object]`, options {"method":"POST"}.
- SAVE_EMAIL : url `user/external`, options {"method":"PUT"}.
- VALIDATE_QUERY : url `v2/queryManagement/reportQueries/verify`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Générateur de requêtes.
- Libellé EN : Query builder.