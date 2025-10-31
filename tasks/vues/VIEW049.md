# Taxes – PATH EDIT

- **Groupe fonctionnel** : Administration
- **Module** : Taxes
- **Ressource** : taxes
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition
- **Menu** : finance-settings (priorité 3)
- **Icône** : Euro

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Admin Tax — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/tax',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/tax',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'tax/createOrUpdate',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'tax/createOrUpdate',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/tax/',
  nestedEntities
}).
- DELETE : getDeleteProvider({
  url: 'v1/taxes/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Taxes.
- Libellé EN : Taxes.