# VIEW141 — Point de livraison – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.455Z à partir de `tasks/vues/VIEW141.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Point de livraison
- Ressource : point-of-delivery
- Clé / route : list
- Type d'écran : Liste simple
- Icône : WbIncandescent

### Libellés
- FR : Point de livraison.
- EN : Point of delivery.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PointOfDelivery

```text
getListV2({
  url: 'v2/generic/all/PointOfDelivery',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PointOfDelivery
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/point-of-delivery
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L11) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L26) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L34) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: withInList: false | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/PointOfDelivery

```text
getOneV2({
  url: 'v2/generic/PointOfDelivery/',
  responseContainer: 'data',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/PointOfDelivery
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/point-of-delivery
      - Description: - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L19) -> v2/generic/PointOfDelivery/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: helper: getOneV2 | helperArgs: { url: 'v2/generic/PointOfDelivery/', responseContainer: 'data', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PointOfDelivery

```text
getListV2({
  url: 'v2/generic/all/PointOfDelivery',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PointOfDelivery
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/point-of-delivery
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L11) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L26) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L34) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: withInList: false | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/PointOfDelivery

```text
getListV2({
  url: 'v2/generic/all/PointOfDelivery',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/PointOfDelivery
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/point-of-delivery
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L11) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'id' } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L26) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'code' / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'code' } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/point-of-delivery/provider/provider.js#L34) -> v2/generic/all/PointOfDelivery | request: helper.nestedEntities: nestedEntities | helper.keyColumn: 'id' / response: helper.responseContainer: data / info: withInList: false | helper: getListV2 | helperArgs: { url: 'v2/generic/all/PointOfDelivery', responseContainer: 'data', nestedEntities, keyColumn: 'id' }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
