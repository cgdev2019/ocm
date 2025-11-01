# VIEW267 — Rapport des commandes ouvertes – PATH EDIT

_Tâche générée automatiquement le 2025-11-01T00:49:51.575Z à partir de `tasks/vues/VIEW267.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Rapport des commandes ouvertes
- Ressource : open-orders
- Clé / route : PATH_EDIT
- Type d'écran : Formulaire d'édition
- Menu : open-orders (priorité 4)
- Icône : Today

### Libellés
- FR : Rapport des commandes ouvertes.
- EN : Open orders report.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OpenOrder

```text
getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OpenOrder
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: finance/open-orders
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L80) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' } - GET_MANY (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L88) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L96) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OpenOrder

```text
getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OpenOrder
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: finance/open-orders
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L80) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' } - GET_MANY (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L88) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L96) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/OpenOrder

```text
getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/OpenOrder
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: finance/open-orders
      - Description: - GET_LIST (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L80) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' } - GET_MANY (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L88) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L96) -> v2/generic/all/OpenOrder | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/OpenOrder', nestedEntities //keyColumn: 'code' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/OpenOrder

```text
getOneV2({
  url: 'v2/generic/OpenOrder/',
  // keyColumn: 'code',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/OpenOrder
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: finance/open-orders
      - Description: - GET_ONE (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L105) -> v2/generic/OpenOrder/ | request: helper.nestedEntities: nestedEntities / response: transformResponse: transformResponse / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/OpenOrder/', // keyColumn: 'code', nestedEntities }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/ordering/openOrder/{code}

```text
getUpdateProvider({
  url: ({
    params = {}
  }) => {
    const {
      data = {}
    } = params;
    const {
      code
    } = data;
    return `v2/ordering/openOrder/${code}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/ordering/openOrder/${code}

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/ordering/open-order

```text
getDeleteProvider({
  url: 'v2/ordering/open-order',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v2/ordering/open-order
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: finance/open-orders
      - Description: - DELETE (src/srcProject/layout/finance/modules/open-orders/provider/provider.js#L126) -> v2/ordering/open-order | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v2/ordering/open-order', method: 'DELETE' }

### CHANGE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/ordering/OpenOrder/:code/status/status`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### EXPORT_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/generic/export/:entityName/:format`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### GENERATE_INVOICE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/billing/invoices/generate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

### CANCEL

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/ordering/openOrder/{code}/cancel

```text
getCustomProvider({
  url: ({
    params = {}
  }) => {
    const {
      data = {}
    } = params;
    const {
      code
    } = data;
    return `v2/ordering/openOrder/${code}/cancel`;
  },
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/ordering/openOrder/${code}/cancel

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
