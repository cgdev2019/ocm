# Journal des paiements – PATH ACCOUNT OPERATION CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Journal des paiements
- **Ressource** : payments-logs
- **Clé / route** : PATH_ACCOUNT_OPERATION_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : FindInPage

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create B2BAccount Operation — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : url `v2/generic/all/accountOperation`, options {"method":"POST"}.
- GET_MANY : url `v2/generic/all/accountOperation`, options {"method":"POST"}.
- GET_MANY_REFERECNE : url `v2/generic/all/accountOperation`, options {"method":"POST"}.
- INVOICE_PAYMENT : url `payment`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Journal des paiements.
- Libellé EN : Payment log.