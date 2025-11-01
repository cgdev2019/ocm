# TASK056 — API V2 Price Plan Matrix

## Contexte
Le domaine « Price Plan Matrix » (tag OpenAPI `Price Plan Matrix`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/catalog/priceManagement/pricePlanMatrixVersions/export` | Export price plan matrix versions | exportPricePlanMatrixVersions |

#### POST /catalog/priceManagement/pricePlanMatrixVersions/export

- Résumé: Export price plan matrix versions
- OperationId: exportPricePlanMatrixVersions
- Description: Export price plan matrix versions
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: object
- Réponses:
  - 200: The price plan matrix versions successfully loaded
  - 400: Internal error
  - 404: PricePlanMatrixVersion with provided ids does not exists.
  - 409: A line having similar values already exists!

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
