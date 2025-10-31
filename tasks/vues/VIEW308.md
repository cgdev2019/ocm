# Market message – Page par défaut

- **Groupe fonctionnel** : MACO
- **Module** : Market message
- **Ressource** : marketMessage
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Maco Market Message — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/marketMessages/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/marketMessages/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/marketMessages/list',
  responseContainer: 'data'
}).
- EXECUTE_JOB : url `job/execute`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Market message.
- Libellé EN : Market message.