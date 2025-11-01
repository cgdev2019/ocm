# VIEW290 — Paramètres de période comptable – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.593Z à partir de `tasks/vues/VIEW290.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Finance
- Module : Paramètres de période comptable
- Ressource : settings-accounting-period
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Icône : Timelapse

### Libellés
- FR : Paramètres de période comptable.
- EN : Accounting period settings.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/all/accountingPeriod

```text
getListV2({
  url: 'v2/generic/all/accountingPeriod',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/all/accountingPeriod

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /v2/accountingPeriodManagement/accountingPeriods

```text
getUpdateProvider({
  url: 'v2/accountingPeriodManagement/accountingPeriods',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/accountingPeriodManagement/accountingPeriods

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}

```text
getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/accountingPeriodManagement/accountingPeriods/${data.fiscalYear}`;
  },
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/accountingPeriodManagement/accountingPeriods/${data.fiscalYear}

### GET_ONE

- Méthode HTTP estimée : GET
- Cibles détectées :
  - /v2/generic/accountingPeriod

```text
getListV2({
  url: 'v2/generic/accountingPeriod/',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - v2/generic/accountingPeriod/

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
