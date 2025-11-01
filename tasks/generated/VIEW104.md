# VIEW104 — Configuration globale – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.411Z à partir de `tasks/vues/VIEW104.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : B2B customer care
- Module : Configuration globale
- Ressource : global-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : AccountTree

### Libellés
- FR : Configuration globale.
- EN : Global settings.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/globalSettings

```text
getListV2({
  url: 'v2/generic/all/globalSettings',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/globalSettings

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/setting/globalSettings

```text
getUpdateProvider({
  url: 'v2/setting/globalSettings',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/setting/globalSettings

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/setting/globalSettings/{id}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/setting/globalSettings/${data.id}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/setting/globalSettings/${data.id}

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/globalSettings

```text
getListV2({
  url: 'v2/generic/globalSettings/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/globalSettings/

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
