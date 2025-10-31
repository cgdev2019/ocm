# Charges – PATH CHARGES EDIT

- **Groupe fonctionnel** : Catalog
- **Module** : Charges
- **Ressource** : charges
- **Clé / route** : PATH_CHARGES_EDIT
- **Type d'écran** : Formulaire d'édition
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit CPQCharges — aucun paramètre spécifique confirmé dans la configuration

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