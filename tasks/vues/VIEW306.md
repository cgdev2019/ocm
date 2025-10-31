# Relève R15 – PATH CREATE

- **Groupe fonctionnel** : MACO
- **Module** : Relève R15
- **Ressource** : fluxReliefR15
- **Clé / route** : PATH_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Maco Flux Relief R15 — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/r15ElecRelHeader/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/r15ElecRelHeader/list',
  responseContainer: 'data'
}).
- GET_ONE : url `{maco}/api/rest/v2/r15ElecRelHeader/`, options {"method":"GET"}.
- CREATE : url `{maco}/api/rest/v2/r15ElecRelHeader/`, options {"method":"POST"}.
- ABANDONED : url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
- TO_TREAT : url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
- TO_CHECK : url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
- MODIFICATION : url `{maco}/api/rest/v2/r15ElecRelHeader/:id`, options {"method":"PUT"}.
- CREATE_OPERATION_TRAITEMENT : implémentation spécifique.
- REPLAY : url `job/execute`, options {"method":"POST"}.
- CUSTOM_REPLAY : url `job/execution`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Relève R15.
- Libellé EN : Reading R15.