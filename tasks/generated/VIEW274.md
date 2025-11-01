# VIEW274 — instance de produit – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.579Z à partir de `tasks/vues/VIEW274.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : instance de produit
- Ressource : product-instance
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition

### Libellés
- FR : instance de produit.
- EN : Product instance.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/serviceInstance

```text
getListV2({
  url: 'v2/generic/all/serviceInstance',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/serviceInstance
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/product-instance, B2B-customer-care/service-instances
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/product-instance/provider/provider.js#L20) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/product-instance/provider/provider.js#L26) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/service-instances/provider/provider.js#L6) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/service-instances/provider/provider.js#L9) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/serviceInstance

```text
getListV2({
  url: 'v2/generic/all/serviceInstance',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/serviceInstance
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/product-instance, B2B-customer-care/service-instances
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/product-instance/provider/provider.js#L20) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/product-instance/provider/provider.js#L26) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/service-instances/provider/provider.js#L6) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/service-instances/provider/provider.js#L9) -> v2/generic/all/serviceInstance | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/serviceInstance', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/serviceInstance

```text
getOneV2({
  url: 'v2/generic/serviceInstance/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/serviceInstance
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/product-instance
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/product-instance/provider/provider.js#L32) -> v2/generic/serviceInstance/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/serviceInstance/', nestedEntities }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /billing/subscription/updateServices

```text
getUpdateProvider({
  url: 'billing/subscription/updateServices',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /billing/subscription/updateServices
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/product-instance
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/product-instance/provider/provider.js#L35) -> billing/subscription/updateServices | request: helper.method: PUT / info: helper: getUpdateProvider | helperArgs: { url: 'billing/subscription/updateServices', method: 'PUT' }

### SUSPEND_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/suspendServices`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### RESUME_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/resumeServices`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### ACTIVATE_SERVICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `billing/subscription/activateServices`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
