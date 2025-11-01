# TASK061 — API V2 Quote management

## Contexte
Le domaine « Quote management » (tag OpenAPI `Quote management`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/quoteItems/{quoteCode}/{quoteVersion}/{quoteItemId}/duplicate` | This endpoint allows duplicate an existing quote item | duplicateQuote |
| POST | `/api/rest/v2/quoteItems/{quoteCode}/{quoteVersion}/{quoteItemId}/duplication` | This endpoint allows duplicate an existing quote item | duplicate_2 |

#### POST /api/rest/v2/quoteItems/{quoteCode}/{quoteVersion}/{quoteItemId}/duplicate

- Résumé: This endpoint allows duplicate an existing quote item
- OperationId: duplicateQuote
- Description: API to duplicate an existing quote item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `quoteCode` (PATH, obligatoire) — string : The quote code
- `quoteVersion` (PATH, obligatoire) — integer (int32) : quote version id
- `quoteItemId` (PATH, obligatoire) — integer (int64) : quote item id
- Réponses:
  - 200: Success Returns new quote item duplicated from existing one
  - 403: Cannot move subscription
  - 404: quote item doesn't existe

#### POST /api/rest/v2/quoteItems/{quoteCode}/{quoteVersion}/{quoteItemId}/duplication

- Résumé: This endpoint allows duplicate an existing quote item
- OperationId: duplicate_2
- Description: API to duplicate an existing quote item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `quoteCode` (PATH, obligatoire) — string : The quote code
- `quoteVersion` (PATH, obligatoire) — integer (int32) : quote version id
- `quoteItemId` (PATH, obligatoire) — integer (int64) : quote item id
- Réponses:
  - 200: Success Returns new quote item duplicated from existing one
  - 403: Cannot move subscription
  - 404: quote item doesn't existe

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
