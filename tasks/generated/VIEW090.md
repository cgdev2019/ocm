# VIEW090 — Agents de relance – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.399Z à partir de `tasks/vues/VIEW090.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Agents de relance
- Ressource : dunning-agents
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : dunning (priorité n/a)

### Libellés
- FR : Agents de relance.
- EN : Dunning Agents.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningAgent

```text
getListV2({
  url: 'v2/generic/all/DunningAgent',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/DunningAgent
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-agents, finance/dunning-agents
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L32) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L41) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L49) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L32) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L41) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L49) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningAgent

```text
getListV2({
  url: 'v2/generic/all/DunningAgent',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/DunningAgent
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-agents, finance/dunning-agents
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L32) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L41) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L49) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L32) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L41) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L49) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn }

### GET_MANY_REFERENCE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/DunningAgent

```text
getListV2({
  url: 'v2/generic/all/DunningAgent',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/DunningAgent
    - POST — Used in 6 frontend location(s) (operationId: —)
      - Tags: B2B-customer-care/dunning-agents, finance/dunning-agents
      - Description: - GET_LIST (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L32) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L41) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY_REFERENCE (src/srcProject/layout/B2B-customer-care/modules/dunning-agents/provider/provider.js#L49) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_LIST (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L32) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: transformResponse: transformResponse | helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L41) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn } - GET_MANY_REFERENCE (src/srcProject/layout/finance/modules/dunning-agents/provider/provider.js#L49) -> v2/generic/all/DunningAgent | request: helper.nestedEntities: nestedEntities | helper.keyColumn: keyColumn / response: helper.responseContainer: data / info: helper: getListV2 | helperArgs: { url: 'v2/generic/all/DunningAgent', responseContainer: 'data', nestedEntities, keyColumn }

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
