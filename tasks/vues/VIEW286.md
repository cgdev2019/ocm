# Dépôts de garantie – Page par défaut

- **Groupe fonctionnel** : Finance
- **Module** : Dépôts de garantie
- **Ressource** : security-deposits
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : multi-balances (priorité 1/4)
- **Icône** : Today

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Security Deposits — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/runResults',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/runResults',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'billing/invoicingPlans',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'billing/invoicingPlans',
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/invoicingPlan/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/invoicingPlan',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Dépôts de garantie.
- Libellé EN : Security deposits.