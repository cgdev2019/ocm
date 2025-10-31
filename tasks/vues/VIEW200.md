# Historique – Page par défaut

- **Groupe fonctionnel** : Catalog
- **Module** : Historique
- **Ressource** : history-mass-action
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : catalog-manager/price-versions (priorité 6/0)
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQHistory Mass Action — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/runResults',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/runResults',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/invoicingPlan/',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- CREATE : getCreateProvider({
  url: ''
}).
- UPDATE : getCreateProvider({
  url: '',
  method: 'PUT',
  keyColumn: 'id'
}).
- DELETE : getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: '',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Historique.
- Libellé EN : History.