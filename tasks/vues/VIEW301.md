# Operation Traitment – PATH EDIT

- **Groupe fonctionnel** : MACO
- **Module** : Operation Traitment
- **Ressource** : elecOperationTraitement
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Maco Operation Traitment — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/ElecProcessingOperations/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/ElecProcessingOperations/list',
  responseContainer: 'data'
}).
- GET_ONE : url `{maco}/api/rest/v2/ElecProcessingOperations/`, options {"method":"GET"}.
- UPDATE : url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
- OLD : url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"GET"}.
- MODIFY : url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
- CREATE : url `{maco}/api/rest/v2/ElecProcessingOperations`, options {"method":"POST"}.
- CREATE_OP : url `{maco}/api/rest/v2/ElecProcessingOperations`, options {"method":"POST"}.
- ABANDONED : url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
- TO_TREAT : url `{maco}/api/rest/v2/ElecProcessingOperations/:id`, options {"method":"PUT"}.
- REJOUER : url `job/execute`, options {"method":"POST"}.
- FIND_JOB_INSTANCE : url `jobInstance?jobInstanceCode=:code`, options {"method":"GET"}.
- CUSTOM_REPLAY : url `job/execution`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Operation Traitment.
- Libellé EN : Operation Traitment.