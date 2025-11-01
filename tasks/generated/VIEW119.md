# VIEW119 — Motifs – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.441Z à partir de `tasks/vues/VIEW119.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Motifs
- Ressource : motifs
- Clé / route : list
- Type d'écran : Liste simple
- Icône : FilterNone

### Libellés
- FR : Motifs.
- EN : Motifs.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /customTable/list/CE_LISTE_MOTIF_AVOIR

```text
getListV2({
  url: 'customTable/list/CE_LISTE_MOTIF_AVOIR',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /customTable/list/CE_LISTE_MOTIF_AVOIR
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/motifs
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L14) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L30) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L47) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /customTable/list/CE_LISTE_MOTIF_AVOIR

```text
getListV2({
  url: 'customTable/list/CE_LISTE_MOTIF_AVOIR',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /customTable/list/CE_LISTE_MOTIF_AVOIR
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/motifs
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L14) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L30) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L47) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities }

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /customTable/list/CE_LISTE_MOTIF_AVOIR

```text
getListV2({
  url: 'customTable/list/CE_LISTE_MOTIF_AVOIR',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /customTable/list/CE_LISTE_MOTIF_AVOIR
    - POST — Used in 3 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/motifs
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L14) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L30) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities } - GET_ONE (src/srcProject/layout/B2B-customer-care/modules/motifs/provider/provider.js#L47) -> customTable/list/CE_LISTE_MOTIF_AVOIR | request: prepareParams: params => { return { ...params }; } | helper.nestedEntities: nestedEntities / response: responseContainer: 'tableData.record' | helper.responseContainer: data / info: specificAPIEnabled: true | keyColumn: 'id' | customTableCode: 'CE_LISTE_MOTIF_AVOIR' | nestedContainer: 'values' | helper: getListV2 | helperArgs: { url: 'customTable/list/CE_LISTE_MOTIF_AVOIR', nestedEntities }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
