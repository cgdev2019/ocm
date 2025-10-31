# Points d'accès – PATH ACCESS EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Points d'accès
- **Ressource** : access
- **Clé / route** : PATH_ACCESS_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Access Points — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : url `v2/generic/all/access`.
- GET_ONE : url `v2/generic/access/`.
- GET_MANY : url `v2/generic/all/access`.
- CREATE : url `account/access`.
- UPDATE : url `account/access`, options {"method":"PUT"}.
- DELETE_ACCESS : url `account/access/:accessCode/:subscriptionCode/:startDate/:endDate`, options {"method":"DELETE"}.
- DELETE_MANY : url `account/access/:accessCode/:subscriptionCode/:startDate/:endDate`, options {"method":"DELETE"}.

## Localisation et libellés
- Libellé FR : Points d'accès.
- Libellé EN : Access entities.