# Logs – Page par défaut

- **Groupe fonctionnel** : MACO
- **Module** : Logs
- **Ressource** : elecLogs
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Maco Elec Logs — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/elecLogs/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/elecLogs/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/elecLogs/list',
  responseContainer: 'data'
}).

## Localisation et libellés
- Libellé FR : Logs.
- Libellé EN : Logs.