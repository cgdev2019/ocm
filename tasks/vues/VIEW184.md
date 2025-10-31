# Règles commerciales source – PATH COMMERCIAL RULE SOURCE CREATE

- **Groupe fonctionnel** : Catalog
- **Module** : Règles commerciales source
- **Ressource** : commercial-rule-source
- **Clé / route** : PATH_COMMERCIAL_RULE_SOURCE_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQCommercial Rule Source — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/commercialRuleHeader',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/commercialRuleHeader',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/commercialRuleHeader/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'commercialRules',
  method: 'POST'
}).
- UPDATE : getDeleteProvider({
  url: 'commercialRules',
  method: 'PUT'
}).
- DELETE : getUpdateProvider({
  url: 'commercialRuleSource/',
  method: 'DELETE'
}).
- DELETE_MANY : getUpdateProvider({
  url: 'commercialRuleSource/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Règles commerciales source.
- Libellé EN : Commercial rule source.