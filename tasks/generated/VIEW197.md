# VIEW197 — Attributs de groupe – List

_Tâche générée automatiquement le 2025-11-01T00:49:51.520Z à partir de `tasks/vues/VIEW197.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Catalog
- Module : Attributs de groupe
- Ressource : group-attributes
- Clé / route : list
- Type d'écran : Liste simple
- Icône : ChromeReaderMode

### Libellés
- FR : Attributs de groupe.
- EN : Group attributes.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  url: genericAllURL,
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### GET_MANY

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getListV2({
  url: genericAllURL,
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /cpq/groupedAttributes

```text
getCreateProvider({
  keyColumn,
  url: 'cpq/groupedAttributes',
  responseContainer: 'groupedAttributeDto',
  responseContainerId: 'id'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - cpq/groupedAttributes

### UPDATE

- Méthode HTTP estimée : PUT
- Cibles détectées :
  - /cpq/groupedAttributes

```text
getUpdateProvider({
  keyColumn,
  url: 'cpq/groupedAttributes',
  method: 'PUT'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - cpq/groupedAttributes

### GET_ONE

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
getOneV2({
  keyColumn,
  url: genericGetOneURL,
  nestedEntities
}).
```

- Aucune opération correspondante dans `complement-api.json`.

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
