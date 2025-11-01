# VIEW317 — Paramètres CDR – Page par défaut

_Tâche générée automatiquement le 2025-11-01T00:49:51.608Z à partir de `tasks/vues/VIEW317.md` et de `tasks/complement-api.json`._

## Métadonnées de la vue

- Groupe fonctionnel : Operation
- Module : Paramètres CDR
- Ressource : cdr-settings
- Clé / route : racine du module
- Type d'écran : Fiche de consultation
- Menu : mediation (priorité 2)
- Icône : QueryBuilder

### Libellés
- FR : Paramètres CDR.
- EN : CDR settings.

## Fournisseurs et API associées

### GET_LIST

- Méthode HTTP estimée : GET
- Aucune URL détectée.

```text
url `provider`, méthode GET.
```

- Aucune opération correspondante dans `complement-api.json`.

### CREATE

- Méthode HTTP estimée : POST
- Cibles détectées :
  - /provider/createOrUpdate

```text
getUpdateProvider({
  url: 'provider/createOrUpdate',
  method: 'POST'
}).
```

- Aucune opération correspondante dans `complement-api.json`.

- URLs sans correspondance détectée :
  - provider/createOrUpdate

---

_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._
