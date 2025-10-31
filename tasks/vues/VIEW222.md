# Offres commerciales – PATH OFFER MODEL CREATE

- **Groupe fonctionnel** : CPQ marketing manager
- **Module** : Offres commerciales
- **Ressource** : offers
- **Entité métier** : org.meveo.model.catalog.OfferTemplate
- **Clé / route** : PATH_OFFER_MODEL_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create MMOffer Models — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/offerTemplate',
  nestedEntities
}).
- DUPLICATE : url `catalog/offerTemplate/duplicate/:offerCode?duplicateHierarchy=true&validFrom=:from&validTo=:to`.
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
- EXPORT_TO_REMOTE_INSTANCE : url `v2/importExport/exportData`, options {"method":"POST"}.
- DOWNLAOD_AS_XML : url `v2/importExport/exportData`, options {"method":"POST"}.
- UPLOAD_FILE : url `v2/importExport/importData`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Offres commerciales.
- Libellé EN : Commercial offers.