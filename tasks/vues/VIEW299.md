# Operation Traitment – List

- **Groupe fonctionnel** : MACO
- **Module** : Operation Traitment
- **Ressource** : elecOperationTraitement
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : FindInPage

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `prmId` ; utilisable en filtre
- Colonne 2 : source `startDate` ; type date
- Colonne 3 : source `endDate` ; type date
- Colonne 4 : source `operationType.description`

### Actions et interactions
- Bouton de création disponible.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

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