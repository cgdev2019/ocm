# Evénements – Page par défaut

- **Groupe fonctionnel** : MACO
- **Module** : Evénements
- **Ressource** : fluxEvents
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Maco Flux Events — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/c15ElecXml/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/c15ElecXml/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/c15ElecXml/list',
  responseContainer: 'data'
}).
- ABANDONED : getUpdateProvider({
  url: '{maco}/api/rest/v2/c15ElecXml/:id',
  method: 'PUT',
  bodyParams: {
    statusCode: {
      code: 'ABANDONED'
    }
  },
  appendParamsToBody: false
}).
- TO_TREAT : getUpdateProvider({
  url: '{maco}/api/rest/v2/c15ElecXml/:id',
  method: 'PUT',
  bodyParams: {
    statusCode: {
      code: 'TO_TREAT'
    }
  }
}).
- FIND_JOB_INSTANCE : url `jobInstance?jobInstanceCode=:code`, options {"method":"GET"}.
- REPLAY : url `job/execute`, options {"method":"POST"}.
- UPLOAD_FILE : implémentation spécifique.
- CUSTOM_REPLAY : url `job/execution`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Evénements.
- Libellé EN : Events.