# VIEW041 — Gestion des fonctionnalités – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.362Z à partir de `tasks/vues/VIEW041.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Administration
- Module : Gestion des fonctionnalités
- Ressource : other-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : application-settings (priorité 4)
- Icône : AccountTree

### Libellés
- FR : Gestion des fonctionnalités.
- EN : Features management.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/FinanceSettings

```text
getListV2({
  url: 'v2/generic/all/FinanceSettings',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/FinanceSettings

### GET_MANY

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/FinanceSettings

```text
getListV2({
  url: 'v2/generic/all/FinanceSettings',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/FinanceSettings

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/accountReceivable/financeSettings

```text
getUpdateProvider({
  url: 'v2/accountReceivable/financeSettings',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/accountReceivable/financeSettings

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/accountReceivable/financeSettings/{id}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/accountReceivable/financeSettings/${data.id}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/accountReceivable/financeSettings/${data.id}

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/FinanceSettings

```text
getListV2({
  url: 'v2/generic/FinanceSettings/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/FinanceSettings/

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
