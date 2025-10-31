# Lettrage manuel – Page par défaut

- **Groupe fonctionnel** : Finance
- **Module** : Lettrage manuel
- **Ressource** : manual-matching
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : SwapHoriz

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Manual Matching Show — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountOperation',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountOperation',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/accountOperation/',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE_AO : url `payment`, options {"method":"POST"}.
- MATCH : url `v2/accountReceivable/accountOperation/matchOperations`.
- ASSIGN_OPERATION : url `v2/accountReceivable/accountOperation/assignOperation/:id`.

## Localisation et libellés
- Libellé FR : Lettrage manuel.
- Libellé EN : Manual matching.