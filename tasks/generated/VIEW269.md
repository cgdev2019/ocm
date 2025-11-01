# VIEW269 — Modèles des commandes ouvertes – PATH CREATE

_Tâche générée automatiquement le 2025-11-01T00:49:51.577Z à partir de `tasks/vues/VIEW269.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Modèles des commandes ouvertes
- Ressource : open-orders-templates
- Clé / route : PATH_CREATE
- Type d'écran : Formulaire de création
- Menu : open-orders (priorité 4)
- Icône : AccountTree

### Libellés
- FR : Modèles des commandes ouvertes.
- EN : Open orders templates.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/openOrderTemplate

```text
getListV2({
  url: 'v2/generic/all/openOrderTemplate',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/openOrderTemplate

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/openOrderTemplate

```text
getListV2({
  url: 'v2/generic/all/openOrderTemplate',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/openOrderTemplate

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/ordering/openOrderTemplates

```text
getCreateProvider({
  keyColumn,
  url: 'v2/ordering/openOrderTemplates',
  responseContainer: 'openOrderTemplate',
  responseContainerId: 'id',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/ordering/openOrderTemplates

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/ordering/openOrderTemplates/{code}

```text
getUpdateProvider({
  keyColumn,
  url: ({
    params: {
      data = {}
    } = {}
  }) => {
    return `v2/ordering/openOrderTemplates/${data.code}`;
  },
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/ordering/openOrderTemplates/${data.code}

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/openOrderTemplate

```text
getOneV2({
  keyColumn,
  url: 'v2/generic/openOrderTemplate/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/openOrderTemplate/

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Cibles détectées :
  - /v2/generic/all/openOrderTemplate

```text
getDeleteProvider({
  url: 'v2/generic/all/openOrderTemplate',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/openOrderTemplate

### CHANGE_STATUS

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `v2/ordering/openOrderTemplates/:code/status/:newStatus`, options {"method":"PUT"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
