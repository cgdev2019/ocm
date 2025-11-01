# VIEW029 — Gestion des devises – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.342Z à partir de `tasks/vues/VIEW029.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Gestion des devises
- Ressource : currency-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : application-settings (priorité n/a)
- Icône : EuroSymbol

### Libellés
- FR : Gestion des devises.
- EN : Currency settings.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/provider

```text
getListV2({
  url: 'v2/generic/all/provider',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/provider
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/portal-message
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/portal-message/provider/provider.js#L16) -> v2/generic/all/provider | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/provider', nestedEntities }

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/provider

```text
getListV2({
  url: 'v2/generic/all/provider',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/all/provider
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/portal-message
      - Description: - GET_LIST (src/srcProject/layout/administration/modules/portal-message/provider/provider.js#L16) -> v2/generic/all/provider | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/all/provider', nestedEntities }

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /currency/addFunctionalCurrency

```text
getCreateProvider({
  url: 'currency/addFunctionalCurrency',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - currency/addFunctionalCurrency

### UPDATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /currency/addFunctionalCurrency

```text
getCreateProvider({
  url: 'currency/addFunctionalCurrency',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - currency/addFunctionalCurrency

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/provider

```text
getListV2({
  url: 'v2/generic/provider/',
  nestedEntities
}).
```

- Opérations correspondantes :
  - Chemin /v2/generic/provider
    - POST — Used in 1 frontend location(s) (operationId: —)
      - Tags: administration/portal-message
      - Description: - GET_ONE (src/srcProject/layout/administration/modules/portal-message/provider/provider.js#L43) -> v2/generic/provider/ | request: helper.nestedEntities: nestedEntities / response: helper.responseContainer: data / info: keyColumn: keyColumn | helper: getListV2 | helperArgs: { url: 'v2/generic/provider/', nestedEntities }

### UPLOAD

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `currency/importExchangeRate`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
