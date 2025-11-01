# VIEW022 — Catégories de contact – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.338Z à partir de `tasks/vues/VIEW022.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Catégories de contact
- Ressource : contact-categories
- Clé / route : list
- Type d'écran : Liste simple
- Menu : customer-settings (priorité 1)
- Icône : Update

### Libellés
- FR : Catégories de contact.
- EN : Contact categories.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contactCategory

```text
getListV2({
  url: 'v2/generic/all/contactCategory',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contactCategory
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L13) -> v2/generic/all/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contactCategory', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L20) -> v2/generic/all/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contactCategory', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contactCategory

```text
getListV2({
  url: 'v2/generic/all/contactCategory',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contactCategory
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L13) -> v2/generic/all/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contactCategory', nestedEntities } - GET_MANY (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L20) -> v2/generic/all/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contactCategory', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/account/contactCategory

```text
getCreateProvider({
  url: 'v2/account/contactCategory',
  responseContainerId: 'entityId',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/account/contactCategory
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - DELETE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L51) -> v2/account/contactCategory/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'v2/account/contactCategory/', method: 'delete' } - DELETE_MANY (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L57) -> v2/account/contactCategory/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'v2/account/contactCategory/', method: 'delete' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - CREATE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L27) -> v2/account/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/account/contactCategory', responseContainerId: 'entityId', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/contactCategory

```text
getOneV2({
  url: 'v2/generic/contactCategory/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/contactCategory
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L34) -> v2/generic/contactCategory/ | request: helper.nestedEntities: nestedEntities / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/contactCategory/', nestedEntities }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/account/contactCategory/{code}

```text
getUpdateProvider({
  url: props => {
    const {
      params
    } = props;
    const {
      data
    } = params;
    return `v2/account/contactCategory/${get(data, 'code')}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/account/contactCategory/${get(data, 'code')}

### DELETE

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/account/contactCategory

```text
getUpdateProvider({
  url: 'v2/account/contactCategory/',
  method: 'delete'
}).
```

- Opérations correspondantes :
  - Chemin /v2/account/contactCategory
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - DELETE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L51) -> v2/account/contactCategory/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'v2/account/contactCategory/', method: 'delete' } - DELETE_MANY (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L57) -> v2/account/contactCategory/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'v2/account/contactCategory/', method: 'delete' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - CREATE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L27) -> v2/account/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/account/contactCategory', responseContainerId: 'entityId', nestedEntities }

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/account/contactCategory

```text
getUpdateProvider({
  url: 'v2/account/contactCategory/',
  method: 'delete'
}).
```

- Opérations correspondantes :
  - Chemin /v2/account/contactCategory
    - DELETE — Used in 2 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - DELETE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L51) -> v2/account/contactCategory/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'v2/account/contactCategory/', method: 'delete' } - DELETE_MANY (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L57) -> v2/account/contactCategory/ | request: helper.method: DELETE / info: helper: getUpdateProvider | helperArgs: { url: 'v2/account/contactCategory/', method: 'delete' }
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/contact-catgories
      - Description: - CREATE (src/srcProject/layout/administration/modules/contact-catgories/provider/provider.js#L27) -> v2/account/contactCategory | request: helper.nestedEntities: nestedEntities / response: helper.responseContainerId: entityId / info: helper: getCreateProvider | helperArgs: { url: 'v2/account/contactCategory', responseContainerId: 'entityId', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
