# TASK020 — API V2 Credit

## Contexte
Le domaine « Credit » (tag OpenAPI `Credit`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/securityDeposit/{id}/payInvoices` | Pay invoice manually with Security Deposit | payInvoices |
| POST | `/securityDeposit/credit/{id}` | Credit Security Deposit | credit |

#### POST /securityDeposit/{id}/payInvoices

- Résumé: Pay invoice manually with Security Deposit
- OperationId: payInvoices
- Description: Pay invoice manually with Security Deposit
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit te be the invoice with it
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositPaymentInput (SecurityDepositPaymentInput)
- Réponses:
  - 200: Invoice was successfully paid
  - 400: Bad Request
  - 404: Following security deposit does not exist : {securityDeposit ids}

#### POST /securityDeposit/credit/{id}

- Résumé: Credit Security Deposit
- OperationId: credit
- Description: Credit Security Deposit
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit te be credited by its id
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositCreditInput (SecurityDepositCreditInput)
- Réponses:
  - 200: Security deposit was successfully credited
  - 400: Bad Request
  - 404: Following security deposit does not exist : {securityDeposit ids}

## Schémas principaux

### SecurityDepositPaymentInput
Type: object
Champs obligatoires: accountOperation, amount
Propriétés:
- **accountOperation**: Resource
- **amount**: number
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SecurityDepositCreditInput
Type: object
Champs obligatoires: amountToCredit, bankLot, customerAccountCode, isToMatching, occTemplateCode, paymentInfo, paymentInfo1, paymentInfo2, paymentInfo3, paymentInfo4, paymentInfo5, paymentMethod, reference
Propriétés:
- **isToMatching**: boolean
- **amountToCredit**: number
- **occTemplateCode**: string
- **paymentInfo5**: string
- **bankLot**: string
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **paymentInfo**: string
- **paymentInfo1**: string
- **paymentInfo2**: string
- **paymentInfo3**: string
- **paymentInfo4**: string
- **customerAccountCode**: string
- **reference**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
