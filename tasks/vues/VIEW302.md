# Vue PoD – Page par défaut

- **Groupe fonctionnel** : MACO
- **Module** : Vue PoD
- **Ressource** : elecPoD
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Maco Elec Pod — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/elecPodMacos/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/elecPodMacos/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/elecPodMacos/list',
  responseContainer: 'data'
}).
- GET_ONE : getOneV2({
  url: '{maco}/api/rest/v2/elecPodMacos/'
}).
- UPDATE : getUpdateProvider({
  url: '{maco}/api/rest/v2/elecPodMacos/:id',
  method: 'PUT',
  appendParamsToBody: true
}).

## Localisation et libellés
- Libellé FR : Vue PoD.
- Libellé EN : PoD view.