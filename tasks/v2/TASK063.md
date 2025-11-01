# TASK063 — API V2 Refund

## Contexte
Le domaine « Refund » (tag OpenAPI `Refund`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/refund/refundByCard` | Refund By Card | refundByCard |
| POST | `/api/rest/v2/refund/refundBySCT` | Refund By SCT | refundBySCT |

#### POST /api/rest/v2/refund/refundByCard

- Résumé: Refund By Card
- OperationId: refundByCard
- Description: create and validate a refund by Card order
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: CardRefund (CardRefund)
- Réponses:
  - 200: success
  - 400: Refund by card is failed
  - 404: Entity does not exist
  - 412: Missing parameters

#### POST /api/rest/v2/refund/refundBySCT

- Résumé: Refund By SCT
- OperationId: refundBySCT
- Description: create and validate a refund by SCT order
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: SCTRefund (SCTRefund)
- Réponses:
  - 200: success
  - 400: Refund by SCT is failed
  - 404: Entity does not exist
  - 412: Missing parameters

## Schémas principaux

### CardRefund
Type: object
Propriétés:
- **ctsAmount**: integer (int64)
- **cvv**: string
- **expiryDate**: string
- **ownerName**: string
- **aoToPay**: Array<integer (int64)>
- **cardNumber**: string
- **cardType**: string
- **dueDate**: string (date-time)
- **customerAccountCode**: string
- **comment**: string

### SCTRefund
Type: object
Propriétés:
- **aoToRefund**: Array<integer (int64)>
- **ctsAmount**: number (double)
- **iban**: string
- **customerAccountCode**: string
- **comment**: string

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
