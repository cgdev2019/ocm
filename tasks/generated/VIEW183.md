# VIEW183 — Charges – PATH CHARGES EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.513Z à partir de `tasks/vues/VIEW183.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Charges
- Ressource : charges
- Clé / route : PATH_CHARGES_EDIT
- Type d'écran : Formulaire d'édition
- Icône : ChromeReaderMode

### Libellés
- FR : Charges.
- EN : Charges.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
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
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/chargeTemplate

```text
getListV2({
  url: 'v2/generic/all/chargeTemplate',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/chargeTemplate
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/cpq
      - Description: - GET_CAUTION_CHARGE_TEMPLATES (src/srcProject/layout/B2B-customer-care/modules/cpq/quotes/provider/provider.js#L1451) -> v2/generic/all/chargeTemplate | request: options: { method: 'POST' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/chargeTemplate

```text
getOneV2({
  url: 'v2/generic/chargeTemplate/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/chargeTemplate/

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
getCreateProvider({
  url: getCreateUrl,
  responseContainerId: 'entityId',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
getUpdateProvider({
  url: getUpdateUrl,
  responseContainerId: 'id',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
url `v2/generic/chargeTemplate`, options {"method":"DELETE"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/chargeTemplates/:chargeCode/status/:newStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### DUPLICATE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `catalog/chargeTemplates/:chargeCode/duplicate`.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
