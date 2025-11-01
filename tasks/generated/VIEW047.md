# VIEW047 — Taxes – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.364Z à partir de `tasks/vues/VIEW047.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Taxes
- Ressource : taxes
- Clé / route : list
- Type d'écran : Liste simple
- Menu : finance-settings (priorité 3)
- Icône : Euro

### Libellés
- FR : Taxes.
- EN : Taxes.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tax

```text
getListV2({
  url: 'v2/generic/all/tax',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tax
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tax, administration/taxes
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L16) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L23) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/tax/provider/provider.js#L7) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/tax/provider/provider.js#L21) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/tax

```text
getListV2({
  url: 'v2/generic/all/tax',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/tax
    - POST — Used in 4 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tax, administration/taxes
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L16) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L23) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities } - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/tax/provider/provider.js#L7) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/tax/provider/provider.js#L21) -> v2/generic/all/tax | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/tax', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /tax/createOrUpdate

```text
getCreateProvider({
  keyColumn,
  url: 'tax/createOrUpdate',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /tax/createOrUpdate
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/taxes
      - Description: - CREATE (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L30) -> tax/createOrUpdate | request: helper.keyColumn: keyColumn | helper.method: POST / response: helper.responseContainer: {responseContainer} | helper.responseContainerId: {responseContainerId} / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'tax/createOrUpdate', responseContainer, responseContainerId, method: 'POST' } - UPDATE (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L39) -> tax/createOrUpdate | request: helper.keyColumn: keyColumn | helper.method: POST / response: helper.responseContainer: {responseContainer} | helper.responseContainerId: {responseContainerId} / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'tax/createOrUpdate', responseContainer, responseContainerId, method: 'POST' }

### UPDATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /tax/createOrUpdate

```text
getUpdateProvider({
  keyColumn,
  url: 'tax/createOrUpdate',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
```

- Opérations correspondantes :
  - Chemin /tax/createOrUpdate
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/taxes
      - Description: - CREATE (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L30) -> tax/createOrUpdate | request: helper.keyColumn: keyColumn | helper.method: POST / response: helper.responseContainer: {responseContainer} | helper.responseContainerId: {responseContainerId} / info: helper: getCreateProvider | helperArgs: { keyColumn, url: 'tax/createOrUpdate', responseContainer, responseContainerId, method: 'POST' } - UPDATE (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L39) -> tax/createOrUpdate | request: helper.keyColumn: keyColumn | helper.method: POST / response: helper.responseContainer: {responseContainer} | helper.responseContainerId: {responseContainerId} / info: helper: getUpdateProvider | helperArgs: { keyColumn, url: 'tax/createOrUpdate', responseContainer, responseContainerId, method: 'POST' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/tax

```text
getOneV2({
  keyColumn,
  url: 'v2/generic/tax/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/tax
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/tax, administration/taxes
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L48) -> v2/generic/tax/ | request: helper.keyColumn: keyColumn | helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { keyColumn, url: 'v2/generic/tax/', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/tax/provider/provider.js#L14) -> v2/generic/tax/ | request: helper.nestedEntities: nestedEntities / info: keyColumn: keyColumn | helper: getOneV2 | helperArgs: { url: 'v2/generic/tax/', nestedEntities }

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v1/taxes

```text
getDeleteProvider({
  url: 'v1/taxes/',
  method: 'DELETE'
}).
```

- Opérations correspondantes :
  - Chemin /v1/taxes
    - DELETE — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/taxes
      - Description: - DELETE (src/srcProject/layout/administration/modules/taxes/provider/provider.js#L51) -> v1/taxes/ | request: helper.method: DELETE / info: helper: getDeleteProvider | helperArgs: { url: 'v1/taxes/', method: 'DELETE' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
