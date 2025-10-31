# Cycle run – PATH CYCLE RUN CREATE

- **Groupe fonctionnel** : Operation
- **Module** : Cycle run
- **Ressource** : cycle-run
- **Clé / route** : PATH_CYCLE_RUN_CREATE
- **Type d'écran** : Vue composite
- **Icône** : Update

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Operation Cycle Run — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/billingRun',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'billing/invoicing/createBillingRun',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Cycle run.
- Libellé EN : Cycle run.