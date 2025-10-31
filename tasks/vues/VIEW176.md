# Attributs – PATH ATTRIBUTE EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Attributs
- **Ressource** : attributes
- **Entité métier** : org.meveo.model.cpq.Attribute
- **Clé / route** : PATH_ATTRIBUTE_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : Update

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQAttributes — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/attribute',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/attribute',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'attributes',
  showErrorFromContainer: true,
  responseContainerId: 'id'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'attributes',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'attributes/',
  method: 'DELETE'
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/attribute/',
    params: {
      nestedEntities
    }
  }, {
    url: 'commercialRules/attributeRules?attributeCode=:@res.code',
    responseContainer: 'commercialRules',
    autoAppendId: false
  }],
  sync: true,
  transformResponse: aggregateCommercialRules
}).

## Localisation et libellés
- Libellé FR : Attributs.
- Libellé EN : Attributes.