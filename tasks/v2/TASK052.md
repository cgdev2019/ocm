# TASK052 — API V2 PaymentPlan

## Contexte
Le domaine « PaymentPlan » (tag OpenAPI `PaymentPlan`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/payment-plan` | Create Payment plan | POST_Payment-Plan |
| PUT | `/api/rest/v2/payment-plan/{id}` | Update Payment plan | PUT_Payment-Plan |
| DELETE | `/api/rest/v2/payment-plan/{id}` | Delete Payment plan by id | DELETE_Payment-Plan |
| PUT | `/api/rest/v2/payment-plan/{id}/activate` | Activate Payment plan by Id | PUT_Activate-Payment-Plan |

#### POST /api/rest/v2/payment-plan

- Résumé: Create Payment plan
- OperationId: POST_Payment-Plan
- Description: Create Payment plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentPlanDto (PaymentPlanDto)
- Réponses:
  - default: Id of created Payment plan

#### PUT /api/rest/v2/payment-plan/{id}

- Résumé: Update Payment plan
- OperationId: PUT_Payment-Plan
- Description: Update Payment plan
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Payment plan id
- Corps de requête:
  - optionnel
  - application/json: PaymentPlanDto (PaymentPlanDto)
- Réponses:
  - default: Id of updated Payment plan

#### DELETE /api/rest/v2/payment-plan/{id}

- Résumé: Delete Payment plan by id
- OperationId: DELETE_Payment-Plan
- Description: Delete Payment plan by id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Payment plan id
- Réponses:
  - default: default response
    - application/json: inconnu

#### PUT /api/rest/v2/payment-plan/{id}/activate

- Résumé: Activate Payment plan by Id
- OperationId: PUT_Activate-Payment-Plan
- Description: Activate Payment plan by Id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Payment plan id
- Réponses:
  - default: payment action status
    - application/json: PaymentActionStatus (PaymentActionStatus)

## Schémas principaux

### PaymentPlanDto
Type: object
Champs obligatoires: actionOnRemainingAmount, amountPerInstallment, amountToRecover, code, customerAccount, numberOfInstallments, recurringUnit, startDate, targetedAos
Propriétés:
- **actionOnRemainingAmount**: string (Valeurs: FIRST, LAST, ADDITIONAL)
- **recurringUnit**: string (Valeurs: MONTH, DAY)
- **amountToRecover**: number
- **targetedAos**: Array<InstallmentAccountOperation> — List of Installment AccountOperation
- **numberOfInstallments**: integer (int32)
- **amountPerInstallment**: number
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **customerAccount**: integer (int64)
- **code**: string
- **status**: string (Valeurs: DRAFT, ACTIVE, COMPLETED)
- **description**: string

### InstallmentAccountOperation
List of Installment AccountOperation
Type: object
Propriétés:
- **id**: integer (int64) — AccountOperation Id

### PaymentActionStatus
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action
- **paymentId**: integer (int64)

### ApiErrorCodeEnum
error code
Type: object

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
