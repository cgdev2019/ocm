# Market message file – Page par défaut

- **Groupe fonctionnel** : MACO
- **Module** : Market message file
- **Ressource** : marketMessageFile
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Maco Market Message File — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/marketMessageFiles/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/marketMessageFiles/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/marketMessageFiles/list',
  responseContainer: 'data'
}).

## Localisation et libellés
- Libellé FR : Market message file.
- Libellé EN : Market message file.