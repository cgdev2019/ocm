# TASK069 — API V2 Subscription

## Contexte
Le domaine « Subscription » (tag OpenAPI `Subscription`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/accountsManagement/subscriptions/{subscriptionCode}/transfer` | This endpoint allows to transfer a subscription to another account | transferSubscription |

#### POST /accountsManagement/subscriptions/{subscriptionCode}/transfer

- Résumé: This endpoint allows to transfer a subscription to another account
- OperationId: transferSubscription
- Description: API to transfer the subscription from a consumer to an other consumer (UA)
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (PATH, obligatoire) — string : The subscription code
- `openTransactionsAction` (QUERY, optionnel) — string : Open transactions action 
  - Valeurs autorisées: NONE, FAIL, MOVE, MOVE_AND_RERATE
  - Contraintes: défaut: "NONE"
- Corps de requête:
  - obligatoire
  - application/json: ConsumerInput (ConsumerInput)
- Réponses:
  - 200: Success (in case of moved WO/RT) Returns the ids of moved WO/RT
  - 204: Success, no return data
  - 404: Either Customer Account or Customer not found
  - 409: Cannot move subscription

## Schémas principaux

### ConsumerInput
Type: object
Propriétés:
- **consumerCode**: string — Consumer code
- **consumerId**: integer (int64) — Consumer id

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
