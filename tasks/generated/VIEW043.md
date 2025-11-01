# VIEW043 — Paramètres de paiement – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.362Z à partir de `tasks/vues/VIEW043.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Paramètres de paiement
- Ressource : payment-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : finance-settings (priorité 3)
- Icône : AccountBalance

### Libellés
- FR : Paramètres de paiement.
- EN : Payment settings.

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

### CREATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/admin/providers/{code}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/admin/providers/${data.code}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/admin/providers/${data.code}

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/admin/providers/{code}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/admin/providers/${data.code}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/admin/providers/${data.code}

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

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
