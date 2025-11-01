# TASK019 — API V2 Create

## Contexte
Le domaine « Create » (tag OpenAPI `Create`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/securityDeposit` | Create a Security Deposit | create_20 |

#### POST /api/rest/v2/securityDeposit

- Résumé: Create a Security Deposit
- OperationId: create_20
- Description: Create a Security Deposit
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositInput (SecurityDepositInput)
- Réponses:
  - 200: Security deposit was successfully created
  - 400: Bad Request

## Schémas principaux

### SecurityDepositInput
Type: object
Champs obligatoires: billingAccount, template
Propriétés:
- **validityPeriod**: integer (int32)
- **validityPeriodUnit**: string (Valeurs: DAYS, MONTHS, WEEKS, YEARS)
- **refundReason**: string
- **cancelReason**: string
- **linkedInvoice**: Resource
- **externalReference**: string
- **validityDate**: string (date-time)
- **serviceInstance**: Resource
- **subscription**: Resource
- **template**: Resource
- **amount**: number
- **currentBalance**: number
- **customerAccount**: Resource
- **billingAccount**: Resource
- **status**: string (Valeurs: DRAFT, LOCKED, UNLOCKED, AUTO_REFUND, REFUNDED, CANCELED, HOLD, VALIDATED)
- **currency**: Resource
- **description**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
