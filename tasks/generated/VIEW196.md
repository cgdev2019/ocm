# VIEW196 — Export – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.520Z à partir de `tasks/vues/VIEW196.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Export
- Ressource : export-mass-action
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : catalog-manager/price-versions (priorité 6/0)
- Icône : Settings

### Libellés
- FR : Export.
- EN : Export.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  url: '',
  responseContainer: 'data',
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_ONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getOneV2({
  url: '',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_MANY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  url: '',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
getCreateProvider({
  url: ''
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### UPDATE

- Méthode HTTP estimée : PUT
- Aucune URL détectée.

```text
getCreateProvider({
  url: '',
  method: 'PUT',
  keyColumn: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### DELETE_MANY

- Méthode HTTP estimée : DELETE
- Aucune URL détectée.

```text
getDeleteProvider({
  url: '',
  method: 'DELETE'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### EXPORT

- Méthode HTTP estimée : POST
- Aucune URL détectée.

```text
url `v2/catalog/priceManagement/pricePlanMatrixVersions/export`, options {"method":"POST"}.
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
