# VIEW073 — Contacts – PATH CONTACTS CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.387Z à partir de `tasks/vues/VIEW073.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Contacts
- Ressource : contacts
- Clé / route : PATH_CONTACTS_CREATE
- Type d'écran : Formulaire de création

### Libellés
- FR : Contacts.
- EN : Contacts.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contact

```text
getListV2({
  url: 'v2/generic/all/contact',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contact
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L24) -> v2/generic/all/contact | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contact', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L31) -> v2/generic/all/contact | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contact', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/contact

```text
getListV2({
  url: 'v2/generic/all/contact',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/contact
    - POST — Used in 2 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L24) -> v2/generic/all/contact | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contact', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L31) -> v2/generic/all/contact | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/contact', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/contact

```text
getOneV2({
  url: 'v2/generic/contact/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/contact
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L38) -> v2/generic/contact/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/contact/', responseContainer: 'data', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /contact

```text
getCreateProvider({
  url: 'contact',
  method: 'POST',
  responseContainerId
}).
```

- Opérations correspondantes :
  - Chemin /contact
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L45) -> contact | request: helper.method: POST / response: helper.responseContainerId: {responseContainerId} / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'contact', method: 'POST', responseContainerId }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L53) -> contact | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'contact', method: 'PUT' }

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /contact

```text
getUpdateProvider({
  url: 'contact',
  method: 'PUT'
}).
```

- Opérations correspondantes :
  - Chemin /contact
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - CREATE (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L45) -> contact | request: helper.method: POST / response: helper.responseContainerId: {responseContainerId} / info: keyColumn: keyColumn | helper: getCreateProvider | helperArgs: { url: 'contact', method: 'POST', responseContainerId }
    - PUT — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/contacts
      - Description: - UPDATE (src/srcProject/layout/B2B-customer-care/modules/contacts/provider/provider.js#L53) -> contact | request: helper.method: PUT / info: keyColumn: keyColumn | helper: getUpdateProvider | helperArgs: { url: 'contact', method: 'PUT' }

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
url `contact/:code`.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
