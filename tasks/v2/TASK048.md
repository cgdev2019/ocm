# TASK048 — API V2 Open Orders Quote

## Contexte
Le domaine « Open Orders Quote » (tag OpenAPI `Open Orders Quote`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| PUT | `/api/rest/v2/ordering/open-order-quote/{code}/status/{status}` | update  open order quote status | changeStatus |

#### PUT /api/rest/v2/ordering/open-order-quote/{code}/status/{status}

- Résumé: update  open order quote status
- OperationId: changeStatus
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the open order template 
- `status` (PATH, obligatoire) — string : open order template object to be updated
  - Valeurs autorisées: DRAFT, WAITING_VALIDATION, REJECTED, VALIDATED, SENT, ACCEPTED, CANCELED
- Réponses:
  - default: default response
    - application/json: inconnu

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
