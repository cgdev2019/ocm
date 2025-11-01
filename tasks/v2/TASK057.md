# TASK057 — API V2 PricePlanMatrixLine

## Contexte
Le domaine « PricePlanMatrixLine » (tag OpenAPI `PricePlanMatrixLine`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/priceplanmatrixline/search` | search price plan using attributes information | search |

#### POST /priceplanmatrixline/search

- Résumé: search price plan using attributes information
- OperationId: search
- Description: search price plan using attributes information
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: object
- Réponses:
  - default: list of price plan and meta data information

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
