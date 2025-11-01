# TASK054 — API V2 Post

## Contexte
Le domaine « Post » (tag OpenAPI `Post`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/accountReceivable/accountOperation/forcePosting` | Refund By SCT | forcePosting |
| POST | `/accountReceivable/accountOperation/matchOperations` | API to match Account operations | matchOperations |
| POST | `/accountReceivable/accountOperation/post` | Refund By SCT | post |
| POST | `/accountReceivable/accountOperation/unMatchOperations` | API to match Account operations | unMatchOperations |
| POST | `/accountReceivable/deferralPayments` | Create a defferal Payment | create_1 |
| POST | `/accountReceivable/financeSettings` | Create Security Deposit settings | create_19 |
| PUT | `/accountReceivable/financeSettings/{id}` | Update Security Deposit settings | update_19 |
| POST | `/customTable/export/{customTableCode}/{fileFormat}` | Create an export Custom Table | export |
| POST | `/securityDeposit` | Create a Security Deposit | create_20 |
| PUT | `/securityDeposit/{id}` | Update Security Deposit | update_20 |
| POST | `/securityDeposit/{id}/payInvoices` | Pay invoice manually with Security Deposit | payInvoices |
| POST | `/securityDeposit/cancel/{id}` | Cancel Security Deposit | cancel_1 |
| POST | `/securityDeposit/credit/{id}` | Credit Security Deposit | credit |
| POST | `/securityDeposit/instantiateSecurityDeposit` | Instantiate Security Deposit | instantiate |
| POST | `/securityDeposit/refund/{id}` | Refund Security Deposit | refund |
| POST | `/securityDeposit/securityDepositTemplate` | Create Security Deposit template | create_21 |
| PUT | `/securityDeposit/securityDepositTemplate/{id}` | Update Security Deposit template | update_21 |
| POST | `/securityDeposit/securityDepositTemplate/changeStatus` | Change status of Security Deposit Template | updateStatus_1 |
| POST | `/setting/globalSettings` | Global settings | create_22 |
| PUT | `/setting/globalSettings/{id}` | Global settings | update_22 |
| POST | `/setting/openOrderSettings` | Create Open Order settings | create_23 |

#### POST /accountReceivable/accountOperation/forcePosting

- Résumé: Refund By SCT
- OperationId: forcePosting
- Description: set the accountingDate field by the value of transactionDate, and set account operations status to POSTED
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: object
- Réponses:
  - 200: Account operations are successfully posted
  - 404: Following account operations does not exist : {accountOperation ids}

#### POST /accountReceivable/accountOperation/matchOperations

- Résumé: API to match Account operations
- OperationId: matchOperations
- Description: Process matching for AccountOperations
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MatchingAccountOperation (MatchingAccountOperation)
- Réponses:
  - 200: Successfully matched
  - 400: Matching action is failed
  - 404: Entity does not exist
  - 412: Missing parameters

#### POST /accountReceivable/accountOperation/post

- Résumé: Refund By SCT
- OperationId: post
- Description: set the accountingDate field by the value of transactionDate, and set account operations status to POSTED
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: object
- Réponses:
  - 200: Account operations are successfully posted
  - 404: Following account operations does not exist : {accountOperation ids}
  - 409: the sub-accounting period of following account operations are already closed : {accountOperation ids}

#### POST /accountReceivable/accountOperation/unMatchOperations

- Résumé: API to match Account operations
- OperationId: unMatchOperations
- Description: Process unMatching for AccountOperations
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UnMatchingAccountOperation (UnMatchingAccountOperation)
- Réponses:
  - 200: Successfully matched
  - 400: Matching action is failed
  - 404: Entity does not exist

#### POST /accountReceivable/deferralPayments

- Résumé: Create a defferal Payment
- OperationId: create_1
- Description: Create a defferal Payment
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DeferralPayments (DeferralPayments)
- Réponses:
  - 200: defferal Payment is successfully created
  - 403: user has not habilitation to create a paymentDeferral.
  - 409: payment deferral already exists
  - 422: maximum deferral count per invoice is exceeded.

#### POST /accountReceivable/financeSettings

- Résumé: Create Security Deposit settings
- OperationId: create_19
- Description: Create Security Deposit settings
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: FinanceSettings (FinanceSettings)
- Réponses:
  - 200: Security deposit settings was successfully created
  - 400: Bad Request

#### PUT /accountReceivable/financeSettings/{id}

- Résumé: Update Security Deposit settings
- OperationId: update_19
- Description: Update Security Deposit settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit settings te be updated by its id
- Corps de requête:
  - obligatoire
  - application/json: FinanceSettings (FinanceSettings)
- Réponses:
  - 200: Security deposit settings was successfully updated
  - 400: Bad Request
  - 404: Following security deposit does not exist : {financeSettings ids}

#### POST /customTable/export/{customTableCode}/{fileFormat}

- Résumé: Create an export Custom Table
- OperationId: export
- Description: Create an export Custom Table
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customTableCode` (PATH, obligatoire) — string : the entity name
- `fileFormat` (PATH, obligatoire) — string : file format
- Réponses:
  - 200: export Custom Table is successfully created
  - 400: fileFormat is incorrect
  - 403: user has not habilitation to create an export Custom Table
  - 404: The custom table code does not exist

#### POST /securityDeposit

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

#### PUT /securityDeposit/{id}

- Résumé: Update Security Deposit
- OperationId: update_20
- Description: Update Security Deposit
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit te be updated by its id
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositInput (SecurityDepositInput)
- Réponses:
  - 200: Security deposit was successfully updated
  - 400: Bad Request
  - 404: Following security deposit does not exist : {securityDeposit ids}

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

#### POST /securityDeposit/cancel/{id}

- Résumé: Cancel Security Deposit
- OperationId: cancel_1
- Description: Cancel Security Deposit
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit te be canceled by its id
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositCancelInput (SecurityDepositCancelInput)
- Réponses:
  - 200: Security deposit was successfully Canceled
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

#### POST /securityDeposit/instantiateSecurityDeposit

- Résumé: Instantiate Security Deposit
- OperationId: instantiate
- Description: Instantiate Security Deposit
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositInput (SecurityDepositInput)
- Réponses:
  - 200: Security deposit was successfully instantiated
  - 400: Bad Request

#### POST /securityDeposit/refund/{id}

- Résumé: Refund Security Deposit
- OperationId: refund
- Description: Refund Security Deposit
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit te be refunded by its id
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositRefundInput (SecurityDepositRefundInput)
- Réponses:
  - 200: Security deposit was successfully Refunded
  - 400: Bad Request
  - 404: Following security deposit does not exist : {securityDeposit ids}

#### POST /securityDeposit/securityDepositTemplate

- Résumé: Create Security Deposit template
- OperationId: create_21
- Description: Create Security Deposit template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositTemplate (SecurityDepositTemplate)
- Réponses:
  - 200: Security deposit template was successfully created
  - 400: Bad Request

#### PUT /securityDeposit/securityDepositTemplate/{id}

- Résumé: Update Security Deposit template
- OperationId: update_21
- Description: Update Security Deposit template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Security deposit template te be updated by its id
- Corps de requête:
  - obligatoire
  - application/json: SecurityDepositTemplate (SecurityDepositTemplate)
- Réponses:
  - 200: Security deposit template was successfully updated
  - 400: Bad Request
  - 404: Following security deposit template does not exist : {securityDepositTemplate ids}

#### POST /securityDeposit/securityDepositTemplate/changeStatus

- Résumé: Change status of Security Deposit Template
- OperationId: updateStatus_1
- Description: Change status of Security Deposit Template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: SDTemplateListStatus (SDTemplateListStatus)
- Réponses:
  - 200: Security deposit template status was successfully updated
  - 400: Bad Request
  - 404: Following security deposit template does not exist : {securityDepositTemplate ids}

#### POST /setting/globalSettings

- Résumé: Global settings
- OperationId: create_22
- Description: Create Global settings
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: GlobalSettingsInput (GlobalSettingsInput)
- Réponses:
  - 200: Global settings was successfully created
  - 400: Bad Request

#### PUT /setting/globalSettings/{id}

- Résumé: Global settings
- OperationId: update_22
- Description: Update Global settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Global settings id
- Corps de requête:
  - obligatoire
  - application/json: GlobalSettingsInput (GlobalSettingsInput)
- Réponses:
  - 200: Global settings was successfully updated
  - 400: Bad Request
  - 404: The QuotesSettings does not exist

#### POST /setting/openOrderSettings

- Résumé: Create Open Order settings
- OperationId: create_23
- Description: Create Open Order settings
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: OpenOrderSettingInput (OpenOrderSettingInput)
- Réponses:
  - 200: Open Order settings was successfully created
  - 400: Bad Request

## Schémas principaux

### MatchingAccountOperation
Type: object
Champs obligatoires: accountOperations
Propriétés:
- **accountOperations**: Array<AccountOperationAndSequence> — List of AccountOperation and Sequence for matching

### AccountOperationAndSequence
List of AccountOperation and Sequence for matching
Type: object
Propriétés:
- **sequence**: integer (int32) — Matching sequence
- **id**: integer (int64) — AccountOperation Id

### UnMatchingAccountOperation
Type: object
Champs obligatoires: accountOperations
Propriétés:
- **accountOperations**: Array<UnMatchingAccountOperationDetail> — List of AccountOperation for matching

### UnMatchingAccountOperationDetail
List of AccountOperation for matching
Type: object
Champs obligatoires: id
Propriétés:
- **matchingAmountIds**: Array<integer (int64)> — MatchingAmount Id
- **id**: integer (int64) — AccountOperation Id

### DeferralPayments
Type: object
Propriétés:
- **paymentDate**: string (date-time)
- **accountOperationId**: integer (int64)
- **paymentMethod**: string

### FinanceSettings
Type: object
Propriétés:
- **useSecurityDeposit**: boolean — use security deposit
- **useAuxiliaryAccounting**: boolean — Use auxiliary accounting
- **discountAdvancedMode**: boolean — Enable Billing Redirection Rules
- **autoRefund**: boolean — Auto refund
- **openOrderSetting**: OpenOrderSettingInput
- **activateDunning**: boolean — Activate dunning
- **maxAmountPerSecurityDeposit**: number
- **maxAmountPerCustomer**: number
- **auxiliaryAccountCodeEl**: string — Auxiliary account code El
- **auxiliaryAccountLabelEl**: string — Auxiliary account label El
- **articleSelectionMode**: string — determinate if the article will be compute before or after pricing (Valeurs: BEFORE_PRICING, AFTER_PRICING)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### OpenOrderSettingInput
Type: object
Propriétés:
- **useManagmentValidationForOOQuotation**: boolean
- **useOpenOrders**: boolean
- **applyMaximumValidity**: boolean
- **applyMaximumValidityValue**: integer (int32)
- **defineMaximumValidity**: boolean
- **defineMaximumValidityValue**: integer (int32)
- **applyMaximumValidityUnit**: string (Valeurs: Days, Weeks, Months, Years)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

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

### SecurityDepositPaymentInput
Type: object
Champs obligatoires: accountOperation, amount
Propriétés:
- **accountOperation**: Resource
- **amount**: number
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SecurityDepositCancelInput
Type: object
Propriétés:
- **cancelReason**: string
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

### SecurityDepositRefundInput
Type: object
Propriétés:
- **refundReason**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SecurityDepositTemplate
Type: object
Champs obligatoires: status, templateName
Propriétés:
- **allowValidityDate**: boolean — The Allow Validity Date
- **allowValidityPeriod**: boolean — The Allow Validity Period
- **minAmount**: number — The Min Amount
- **templateName**: string — The Template Name
- **maxAmount**: number — The Max Amount
- **numberOfInstantiation**: integer (int32) — The Number Of Instantiation
- **status**: string — The Status (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **currency**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SDTemplateListStatus
Type: object
Champs obligatoires: securityDepositTemplates, status
Propriétés:
- **securityDepositTemplates**: Array<Resource>
- **status**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### GlobalSettingsInput
Type: object
Propriétés:
- **quoteSettings**: QuoteSettings
- **dunning**: Dunning
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### QuoteSettings
Type: object
Propriétés:
- **quoteDefaultValidityDelay**: integer (int32)

### Dunning
Type: object
Propriétés:
- **activateDunning**: boolean

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
