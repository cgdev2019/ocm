# Frais – Page par défaut

- **Groupe fonctionnel** : MACO
- **Module** : Frais
- **Ressource** : fluxFees
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Maco Flux Fees — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: '{maco}/api/rest/v2/f15dElecXml/list',
  responseContainer: 'data'
}).
- GET_MANY : getListV2({
  url: '{maco}/api/rest/v2/f15dElecXml/list',
  responseContainer: 'data'
}).
- GET_MANY_REFERENCE : getListV2({
  url: '{maco}/api/rest/v2/f15dElecXml/list',
  responseContainer: 'data'
}).
- GET_ONE : getOneV2({
  url: '{maco}/api/rest/v2/f15dElecXml/',
  responseContainer: 'data'
}).
- ABANDONED : url `{maco}/api/rest/v2/f15dElecXml/:id`, options {"method":"PUT"}.
- TO_TREAT : url `{maco}/api/rest/v2/f15dElecXml/:id`, options {"method":"PUT"}.
- TO_CHECK : url `{maco}/api/rest/v2/f15dElecXml/:id`, options {"method":"PUT"}.
- FIND_JOB_INSTANCE : url `jobInstance?jobInstanceCode=:code`, options {"method":"GET"}.
- REPLAY : url `job/execute`, options {"method":"POST"}.
- CUSTOM_REPLAY : url `job/execution`, options {"method":"POST"}.
- UPLOAD_FILE : implémentation spécifique.

## Localisation et libellés
- Libellé FR : Frais.
- Libellé EN : Fees.