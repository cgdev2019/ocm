# Offres commerciales – List

- **Groupe fonctionnel** : Catalog
- **Module** : Offres commerciales
- **Ressource** : offers
- **Entité métier** : org.meveo.model.catalog.OfferTemplate
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `name` ; utilisable en filtre
- Colonne 2 : source `code` ; utilisable en filtre
- Colonne 3 : source `lifeCycleStatus` ; type status ; choix (3) ; utilisable en filtre
- Colonne 4 : source `validity.from` ; type [object Object] ; utilisable en filtre
- Colonne 5 : source `validity.to` ; type [object Object] ; utilisable en filtre
- Colonne 6 : source `medias` ; type image
- Colonne 7 : source `auditable.created` ; type date

### Recherche et filtres
- champ `tags.id` (référence {{modulePath}}/catalog-manager/{{CPQ_TAGS}}, filtre true)
- champ `isModel` (type boolean, filtre {"wildcard":false})

### Actions et interactions
- Import de fichier activé.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/offerTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/offerTemplate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  urls: [{
    url: 'v2/generic/offerTemplate/',
    params: {
      nestedEntities
    }
  }, {
    url: 'commercialRules/offerRules/:@res.code',
    responseContainer: 'commercialRules',
    autoAppendId: false
  }],
  sync: true,
  transformResponse: aggregateCommercialRules
}).
- CREATE : getCreateProvider({
  url: 'catalog/offerTemplate',
  method: 'POST',
  responseContainerId: 'entityId',
  showErrorFromContainer: true
}).
- UPDATE : getUpdateProvider({
  url: 'catalog/offerTemplate',
  method: 'PUT',
  showErrorFromContainer: true
}).
- DELETE : getDeleteProvider({
  url: 'catalog/offerTemplate/',
  method: 'DELETE',
  showErrorFromContainer: true
}).
- DELETE_MANY : getDeleteProvider({
  url: 'catalog/offerTemplate/',
  method: 'DELETE'
}).
- UPDATE_STATUS : url `catalog/offerTemplate/:offerCode/update/status?status=:toStatus&validFrom=:from&validTo=:to`.
- DUPLICATE : url `catalog/offerTemplate/duplicate/:offerCode?duplicateHierarchy=true&validFrom=:from&validTo=:to`.
- EXPORT_TO_REMOTE_INSTANCE : url `v2/importExport/exportData`, options {"method":"POST"}.
- DOWNLAOD_AS_XML : url `v2/importExport/exportData`, options {"method":"POST"}.
- UPLOAD_FILE : url `v2/importExport/importData`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Offres commerciales.
- Libellé EN : Commercial offers.