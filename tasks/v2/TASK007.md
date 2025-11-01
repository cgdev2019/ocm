# TASK007 — API V2 articleMapping

## Contexte
Le domaine « articleMapping » (tag OpenAPI `articleMapping`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/articleMapping/{code}` | This endpoint allows to find an existing article mapping resource | find_2 |

#### GET /articleMapping/{code}

- Résumé: This endpoint allows to find an existing article mapping resource
- OperationId: find_2
- Description: find an existing article mapping resource
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the article mapping
- Réponses:
  - 200: the article mapping resource retrieved, and the object is returned in the response
  - 400: bad request when article mapping information doesn't exist

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
