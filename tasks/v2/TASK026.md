# TASK026 — API V2 Dunning

## Contexte
Le domaine « Dunning » (tag OpenAPI `Dunning`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/dunning/dunningLevel` | Create new Dunning Level | create_11 |
| GET | `/dunning/dunningLevel/{dunningLevelCode}` | Get existing Dunning Level | findByCode |
| PUT | `/dunning/dunningLevel/{dunningLevelId}` | Update an existing Dunning Level | update_10 |
| DELETE | `/dunning/dunningLevel/{dunningLevelId}` | Delete existing Dunning level | delete_8 |
| POST | `/dunning/dunningPolicy` | Create new Dunning policy | create_14 |
| PUT | `/dunning/dunningPolicy/{dunningPolicyId}` | update Dunning policy | update_13 |
| DELETE | `/dunning/dunningPolicy/{dunningPolicyId}` | delete a dunning policy | delete_11 |
| GET | `/dunning/dunningPolicy/{dunningPolicyName}` | Find dunning policy | findByName |
| PUT | `/dunning/dunningPolicy/archive/{dunningPolicyId}` | Archive dunning policy | archive |
| POST | `/dunning/dunningPolicy/deactivate` | deactivate dunning policy | deactivate |
| POST | `/dunning/pauseReason` | Create new Dunning Pause Reason | create_12 |
| PUT | `/dunning/pauseReason/{id}` | Update an existing Dunning Pause Reason | update_11 |
| DELETE | `/dunning/pauseReason/{id}` | Delete existing Dunning Pause Reason | delete_9 |
| POST | `/dunning/paymentRetry` | Create new Dunning Payment Retry | create_13 |
| PUT | `/dunning/paymentRetry/{id}` | Update an existing Dunning Payment Retry | update_12 |
| DELETE | `/dunning/paymentRetry/{id}` | Delete existing Dunning Payment Retry | delete_10 |
| POST | `/dunning/stopReason` | Create new Dunning Stop Reason | create_16 |
| PUT | `/dunning/stopReason/{id}` | Update an existing Dunning Stop Reason | update_15 |
| DELETE | `/dunning/stopReason/{id}` | Delete existing Dunning Stop Reason | delete_13 |
| POST | `/payment/dunning` | Create new Dunning Setting | create_15 |
| GET | `/payment/dunning/{dunningCode}` | Get existing Dunning Setting | findByCode_1 |
| POST | `/payment/dunning/{dunningCode}/duplication` | Duplicate an existing Dunning Setting | duplicate_1 |
| PUT | `/payment/dunning/{dunningId}` | Update an existing Dunning Setting | update_14 |
| DELETE | `/payment/dunning/{dunningId}` | Delete existing Dunning Setting | delete_12 |

#### POST /dunning/dunningLevel

- Résumé: Create new Dunning Level
- OperationId: create_11
- Description: Create new dunning level
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningLevel (DunningLevel)
- Réponses:
  - 200: dunning level successfully created
  - 400: dunning level creation is failed

#### GET /dunning/dunningLevel/{dunningLevelCode}

- Résumé: Get existing Dunning Level
- OperationId: findByCode
- Description: Get Existing dunning Level
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningLevelCode` (PATH, obligatoire) — string : code dunning level
- Réponses:
  - 200: dunning level successfully retrivied
  - 404: Dunning level with given code does not exist

#### PUT /dunning/dunningLevel/{dunningLevelId}

- Résumé: Update an existing Dunning Level
- OperationId: update_10
- Description: Update a dunning level
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningLevelId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: DunningLevel (DunningLevel)
- Réponses:
  - 200: dunning level successfully updated
  - 400: dunning level with given code does not exist
  - 404: dunning level successfully updated

#### DELETE /dunning/dunningLevel/{dunningLevelId}

- Résumé: Delete existing Dunning level
- OperationId: delete_8
- Description: Delete Existing dunning level
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningLevelId` (PATH, obligatoire) — integer (int64) : Dunning level id to delete
- Réponses:
  - 200: dunning level successfully deleted
  - 404: Dunning level with id in the path doesn't exist

#### POST /dunning/dunningPolicy

- Résumé: Create new Dunning policy
- OperationId: create_14
- Description: Create new Dunning policy
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningPolicy (DunningPolicy)
- Réponses:
  - 200: dunning policy successfully created
  - 400: Dunning level creation is failed
  - 404: Dunning policy does not exist
  - 412: Missing parameters

#### PUT /dunning/dunningPolicy/{dunningPolicyId}

- Résumé: update Dunning policy
- OperationId: update_13
- Description: update Dunning policy
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningPolicyId` (PATH, obligatoire) — integer (int64) : Dunning policy id
- Corps de requête:
  - obligatoire
  - application/json: DunningPolicyInput (DunningPolicyInput)
- Réponses:
  - 200: Dunning policy successfully updated
  - 404: Dunning policy does not exits

#### DELETE /dunning/dunningPolicy/{dunningPolicyId}

- Résumé: delete a dunning policy
- OperationId: delete_11
- Description: delete dunning policy
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningPolicyId` (PATH, obligatoire) — integer (int64) : Dunning policy id
- Réponses:
  - 200: Dunning policy successfully deleted
  - 404: Dunning policy does not exits

#### GET /dunning/dunningPolicy/{dunningPolicyName}

- Résumé: Find dunning policy
- OperationId: findByName
- Description: Find dunning policy
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningPolicyName` (PATH, obligatoire) — string : Dunning policy name
- Réponses:
  - 200: Dunning policy successfully retrieved
  - 404: Dunning policy does not exits

#### PUT /dunning/dunningPolicy/archive/{dunningPolicyId}

- Résumé: Archive dunning policy
- OperationId: archive
- Description: Archive dunning policy
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningPolicyId` (PATH, obligatoire) — integer (int64) : Dunning policy id
- Réponses:
  - 200: dunning policy successfully archived
  - 404: Dunning policy does not exist

#### POST /dunning/dunningPolicy/deactivate

- Résumé: deactivate dunning policy
- OperationId: deactivate
- Description: deactivate dunning policy
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: object
- Réponses:
  - 200: dunning policy successfully deactivated
  - 404: Dunning policy does not exist

#### POST /dunning/pauseReason

- Résumé: Create new Dunning Pause Reason
- OperationId: create_12
- Description: Create new Dunning Pause Reason
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningPauseReason (DunningPauseReason)
- Réponses:
  - 200: dunning Pause Reason successfully created
  - 404: Dunning Pause Reason with the same code exist

#### PUT /dunning/pauseReason/{id}

- Résumé: Update an existing Dunning Pause Reason
- OperationId: update_11
- Description: Update an existing Dunning Pause Reasons
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Entity's id to update
- Corps de requête:
  - obligatoire
  - application/json: DunningPauseReason (DunningPauseReason)
- Réponses:
  - 200: dunning Pause Reasons successfully updated
  - 404: new code for dunning Pause Reasons already exist

#### DELETE /dunning/pauseReason/{id}

- Résumé: Delete existing Dunning Pause Reason
- OperationId: delete_9
- Description: Delete Existing dunning Pause Reasons
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Id of removed dunning Pause Reasons
- Réponses:
  - 200: dunning Pause Reasons successfully deleted
  - 404: Dunning Pause Reason with id in the path doesn't exist

#### POST /dunning/paymentRetry

- Résumé: Create new Dunning Payment Retry
- OperationId: create_13
- Description: Create new Dunning Payment Retry
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningPaymentRetry (DunningPaymentRetry)
- Réponses:
  - 200: dunning Payment Retry successfully created
  - 404: Dunning Payment Retry with the same code exist

#### PUT /dunning/paymentRetry/{id}

- Résumé: Update an existing Dunning Payment Retry
- OperationId: update_12
- Description: Update an existing Dunning Payment Retry
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Entity's id to update
- Corps de requête:
  - obligatoire
  - application/json: DunningPaymentRetry (DunningPaymentRetry)
- Réponses:
  - 200: dunning Payment Retry successfully updated
  - 404: new code for dunning Payment Retry already exist

#### DELETE /dunning/paymentRetry/{id}

- Résumé: Delete existing Dunning Payment Retry
- OperationId: delete_10
- Description: Delete Existing dunning Payment Retry
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Id of removed dunning Payment Retry
- Réponses:
  - 200: dunning Payment Retry successfully deleted
  - 404: Dunning Payment Retry with id in the path doesn't exist

#### POST /dunning/stopReason

- Résumé: Create new Dunning Stop Reason
- OperationId: create_16
- Description: Create new Dunning Stop Reason
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningStopReason (DunningStopReason)
- Réponses:
  - 200: dunning Stop Reason successfully created
  - 404: Dunning Stop Reason with the same code exist

#### PUT /dunning/stopReason/{id}

- Résumé: Update an existing Dunning Stop Reason
- OperationId: update_15
- Description: Update an existing Dunning Stop Reasons
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Entity's id to update
- Corps de requête:
  - obligatoire
  - application/json: DunningStopReason (DunningStopReason)
- Réponses:
  - 200: dunning Stop Reasons successfully updated
  - 404: new code for dunning Stop Reasons already exist

#### DELETE /dunning/stopReason/{id}

- Résumé: Delete existing Dunning Stop Reason
- OperationId: delete_13
- Description: Delete Existing dunning Stop Reasons
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Id of removed dunning Stop Reasons
- Réponses:
  - 200: dunning Stop Reasons successfully deleted
  - 404: Dunning Stop Reason with id in the path doesn't exist

#### POST /payment/dunning

- Résumé: Create new Dunning Setting
- OperationId: create_15
- Description: Create exceptional billing run
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningSettings (DunningSettings)
- Réponses:
  - 200: dunning settings successfully created
  - 404: Dunning with the same code exist

#### GET /payment/dunning/{dunningCode}

- Résumé: Get existing Dunning Setting
- OperationId: findByCode_1
- Description: Get Existing dunning settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningCode` (PATH, obligatoire) — string : code dunning settings
- Réponses:
  - 200: dunning settings successfully retrivied
  - 404: Dunning setting with code in the path doesn't exist

#### POST /payment/dunning/{dunningCode}/duplication

- Résumé: Duplicate an existing Dunning Setting
- OperationId: duplicate_1
- Description: Duplicate Existing dunning settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningCode` (PATH, obligatoire) — string : code dunning settings
- Réponses:
  - 200: dunning settings successfully retrivied
  - 404: Dunning setting with code in the path doesn't exist

#### PUT /payment/dunning/{dunningId}

- Résumé: Update an existing Dunning Setting
- OperationId: update_14
- Description: Update an existing Dunning settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: DunningSettings (DunningSettings)
- Réponses:
  - 200: dunning settings successfully updated
  - 404: new code for dunning settings already exist

#### DELETE /payment/dunning/{dunningId}

- Résumé: Delete existing Dunning Setting
- OperationId: delete_12
- Description: Delete Existing dunning settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningId` (PATH, obligatoire) — integer (int64) : id of removed dunning settings
- Réponses:
  - 200: dunning settings successfully deleted
  - 404: Dunning setting with id in the path doesn't exist

## Schémas principaux

### DunningLevel
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **isReminderLevel**: boolean — Is a reminder level
- **isActiveLevel**: boolean — Is an active level
- **isSoftDeclineLevel**: boolean — Soft decline
- **dunningLevelChargeCurrency**: string — Dunning level charge currency
- **dunningLevelMinBalanceCurrency**: string — Dunning level currency
- **dunningLevelDaysOverdue**: integer (int32) — Days overdue
- **dunningLevelMinBalance**: number — Dunning level min balance
- **dunningLevelChargeType**: string — Dunning level charge type
- **dunningLevelChargeValue**: number — Dunning level charge value
- **dunningActions**: Array<string> — Dunning level actions
- **isEndOfDunningLevel**: boolean — End of dunning level
- **description**: string — dunning level description

### DunningPolicy
Type: object
Propriétés:
- **dunningPolicyLevels**: Array<DunningPolicyLevel> — Dunning policy levels
- **policyDescription**: string — dunning policy description
- **interestForDelaySequence**: integer (int32) — Interest for delay sequence
- **policyPriority**: integer (int32) — Policy priority
- **dunningPolicyRules**: Array<Resource> — Dunning policy rules
- **minBalanceTriggerCurrency**: Resource
- **minBalanceTrigger**: number (double) — min balance trigger
- **determineLevelBy**: string — Determine level by (Valeurs: DAYS_OVERDUE, DAYS_OVERDUE_OR_BALANCE_THRESHOLD)
- **policyName**: string — dunning policy name
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **includeDueInvoicesInThreshold**: boolean — include due invoices in threshold
- **includePayReminder**: boolean — include pay reminder
- **attachInvoicesToEmails**: boolean — Attach invoices to emails
- **isDefaultPolicy**: boolean — is default policy
- **isActivePolicy**: boolean — is policy is activated

### DunningPolicyLevel
Dunning policy levels
Type: object
Propriétés:
- **collectionPlanStatusId**: integer (int64) — Collection plan status Id
- **dunningLevelId**: integer (int64) — Dunning level id
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningPolicyInput
Type: object
Propriétés:
- **dunningPolicyLevels**: Array<DunningPolicyLevel> — Dunning policy levels
- **policyDescription**: string — dunning policy description
- **interestForDelaySequence**: integer (int32) — Interest for delay sequence
- **policyPriority**: integer (int32) — Policy priority
- **dunningPolicyRules**: Array<Resource> — Dunning policy rules
- **minBalanceTriggerCurrency**: Resource
- **minBalanceTrigger**: number (double) — min balance trigger
- **determineLevelBy**: string — Determine level by (Valeurs: DAYS_OVERDUE, DAYS_OVERDUE_OR_BALANCE_THRESHOLD)
- **policyName**: string — dunning policy name
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **includeDueInvoicesInThreshold**: boolean — include due invoices in threshold
- **includePayReminder**: boolean — include pay reminder
- **attachInvoicesToEmails**: boolean — Attach invoices to emails
- **isDefaultPolicy**: boolean — is default policy
- **isActivePolicy**: boolean — is policy is activated

### DunningPauseReason
Type: object
Propriétés:
- **pauseReason**: string — The pause reason
- **dunningSettings**: Resource
- **description**: string — The pause reason's description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningPaymentRetry
Type: object
Propriétés:
- **payRetryFrequencyUnit**: string — The unit's frequency of retry (Valeurs: DAY, MONTH)
- **payRetryFrequency**: integer (int32) — The retry's frequency
- **psp**: string — The payment service provider
- **numPayRetries**: integer (int32) — The number of payment retries
- **dunningSettings**: Resource
- **paymentMethod**: string — The payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningStopReason
Type: object
Propriétés:
- **stopReason**: string — The stop reason
- **dunningSettings**: Resource
- **description**: string — The stop reason's description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningSettings
Type: object
Propriétés:
- **dunningMode**: string — dunning mode (Valeurs: CUSTOMER_LEVEL, INVOICE_LEVEL)
- **maxDunningLevels**: integer (int32) — Max dunning level (Contraintes: défaut: 15)
- **maxDaysOutstanding**: integer (int32) — Max days outstanding
- **interestForDelayRate**: number — interest for delay rate
- **accountingArticle**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **allowInterestForDelay**: boolean — allow interest for delay (Contraintes: défaut: true)
- **allowDunningCharges**: boolean — allow dunninf charge (Contraintes: défaut: true)
- **applyDunningChargeFxExchangeRate**: boolean — apply dunning charge exchange rate (Contraintes: défaut: true)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
