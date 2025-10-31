# Charges – List

- **Groupe fonctionnel** : Catalog
- **Module** : Charges
- **Ressource** : charges
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `chargeType` ; choix (undefined) ; utilisable en filtre
- Colonne 3 : source `oneShotChargeTemplateType` ; choix (undefined) ; utilisable en filtre
- Colonne 4 : source `calendar.description`
- Colonne 5 : source `status` ; type status ; choix (undefined) ; utilisable en filtre

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: ({
    params
  }) => {
    const {
      charge_type,
      filter = {}
    } = params;
    const {
      oneShotChargeTemplateType = null
    } = filter;
    const isOneShotChargeFilterApplied = isString(oneShotChargeTemplateType);
    const urlTransformed = !isEmpty(charge_type) ? getMappedChargeType(charge_type, isOneShotChargeFilterApplied) : 'v2/generic/all/chargeTemplate';
    return urlTransformed;
  },
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/chargeTemplate',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/chargeTemplate/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: getCreateUrl,
  responseContainerId: 'entityId',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: getUpdateUrl,
  responseContainerId: 'id',
  method: 'POST'
}).
- DELETE : url `v2/generic/chargeTemplate`, options {"method":"DELETE"}.
- UPDATE_STATUS : url `catalog/chargeTemplates/:chargeCode/status/:newStatus`, options {"method":"PUT"}.
- DUPLICATE : url `catalog/chargeTemplates/:chargeCode/duplicate`.

## Localisation et libellés
- Libellé FR : Charges.
- Libellé EN : Charges.