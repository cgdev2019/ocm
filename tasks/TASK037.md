# TASK037 — Service Mediation

## Contexte
Le service « Mediation » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Mediation
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/billing/mediation/cancelReservation` |  Cancels the reservation   |     POST_Mediation_cancelReservation |
| POST | `/api/rest/billing/mediation/chargeCdr` |  Same as registerCdrList, but at the same process rate the EDR created   |     POST_Mediation_chargeCdr |
| POST | `/api/rest/billing/mediation/confirmReservation` |  Confirms the reservation   |     POST_Mediation_confirmReservation |
| POST | `/api/rest/billing/mediation/createCDR` | — | createCDR |
| POST | `/api/rest/billing/mediation/notifyOfRejectedCdrs` |  Notify of rejected CDRs   |     POST_Mediation_notifyOfRejectedCdrs |
| POST | `/api/rest/billing/mediation/processCdrList` |  Convert CDRs to EDRs  |     POST_Mediation_processCdrList |
| POST | `/api/rest/billing/mediation/registerCdrList` |  Accepts a list of CDR line. This CDR is parsed and created as EDR. CDR is same format use in mediation job   |     POST_Mediation_registerCdrList |
| POST | `/api/rest/billing/mediation/reserveCdr` |  Allows the user to reserve a CDR, this will create a new reservation entity attached to a wallet operation |     POST_Mediation_reserveCdr |

#### POST /api/rest/billing/mediation/cancelReservation

- Résumé:  Cancels the reservation  
- OperationId:     POST_Mediation_cancelReservation
- Description: Cancels the reservation
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PrepaidReservationDto
  - application/xml: PrepaidReservationDto
  - text/plain: PrepaidReservationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/mediation/chargeCdr

- Résumé:  Same as registerCdrList, but at the same process rate the EDR created  
- OperationId:     POST_Mediation_chargeCdr
- Description: Same as registerCdrList, but at the same process rate the EDR created
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `isVirtual` (QUERY, optionnel) — boolean
- `rateTriggeredEdr` (QUERY, optionnel) — boolean
- `maxDepth` (QUERY, optionnel) — integer (int32)
- `returnEDRs` (QUERY, optionnel) — boolean
- `returnWalletOperations` (QUERY, optionnel) — boolean
- `returnWalletOperationDetails` (QUERY, optionnel) — boolean
- `returnCounters` (QUERY, optionnel) — boolean
- `generateRTs` (QUERY, optionnel) — boolean
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
  - text/plain: string
- Réponses:
  - default: Request processing status
    - application/json: ChargeCDRResponseDto
    - application/xml: ChargeCDRResponseDto

#### POST /api/rest/billing/mediation/confirmReservation

- Résumé:  Confirms the reservation  
- OperationId:     POST_Mediation_confirmReservation
- Description: Confirms the reservation
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PrepaidReservationDto
  - application/xml: PrepaidReservationDto
  - text/plain: PrepaidReservationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/mediation/createCDR

- Résumé: createCDR
- OperationId: createCDR
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CdrDto
  - application/xml: CdrDto
  - text/plain: CdrDto
- Réponses:
  - default: default response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/mediation/notifyOfRejectedCdrs

- Résumé:  Notify of rejected CDRs  
- OperationId:     POST_Mediation_notifyOfRejectedCdrs
- Description: Notify of rejected CDRs
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CdrListDto
  - application/xml: CdrListDto
  - text/plain: CdrListDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/mediation/processCdrList

- Résumé:  Convert CDRs to EDRs 
- OperationId:     POST_Mediation_processCdrList
- Description: Convert CDRs to EDRs
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: Array<integer (int64)>
  - application/xml: Array<integer (int64)>
  - text/plain: Array<integer (int64)>
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/mediation/registerCdrList

- Résumé:  Accepts a list of CDR line. This CDR is parsed and created as EDR. CDR is same format use in mediation job  
- OperationId:     POST_Mediation_registerCdrList
- Description: Accepts a list of CDR line. This CDR is parsed and created as EDR. CDR is same format use in mediation job
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CdrListDto
  - application/xml: CdrListDto
  - text/plain: CdrListDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/mediation/reserveCdr

- Résumé:  Allows the user to reserve a CDR, this will create a new reservation entity attached to a wallet operation
- OperationId:     POST_Mediation_reserveCdr
- Description: Allows the user to reserve a CDR, this will create a new reservation entity attached to a wallet operation. A reservation has expiration limit save in the provider entity (PREPAID_RESRV_DELAY_MS)
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
  - text/plain: string
- Réponses:
  - default: Available quantity and reservationID is ed
    - application/json: CdrReservationResponseDto
    - application/xml: CdrReservationResponseDto

## Schémas principaux

### PrepaidReservationDto
Type: object
Propriétés:
- **reservationId**: integer (int64)
- **consumedQuantity**: number

### ActionStatus
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action

### ApiErrorCodeEnum
error code
Type: object

### ChargeCDRResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **amountWithoutTax**: number
- **amountTax**: number
- **amountWithTax**: number
- **walletOperationCount**: integer (int32)
- **edrIds**: Array<integer (int64)>
- **reservationIds**: Array<integer (int64)>
- **walletOperations**: Array<WalletOperationDto>
- **counterPeriods**: Array<CounterPeriodDto>
- **error**: CdrError

### WalletOperationDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **description**: string
- **userAccount**: string
- **subscription**: string
- **walletTemplate**: string
- **seller**: string
- **chargeInstance**: string
- **chargeInstanceId**: integer (int64)
- **currency**: string
- **type**: string (Valeurs: CREDIT, DEBIT)
- **status**: string (Valeurs: OPEN, TREATED, CANCELED, RESERVED, F_TO_RERATE, TO_RERATE, RERATED, SCHEDULED, REJECTED)
- **ratingUnitDescription**: string
- **pricePlanCode**: string
- **taxCode**: string
- **taxPercent**: number
- **unitAmountWithoutTax**: number
- **unitAmountWithTax**: number
- **unitAmountTax**: number
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **amountTax**: number
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **parameterExtra**: string
- **orderNumber**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **operationDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **offerCode**: string
- **rawAmountWithoutTax**: number
- **rawAmountWithTax**: number
- **ratedTransaction**: WoRatedTransactionDto
- **walletId**: integer (int64)
- **customFields**: CustomFieldsDto
- **taxClassCode**: string
- **sortIndex**: integer (int32)

### WoRatedTransactionDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **status**: string (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED, PROCESSED)

### CustomFieldsDto
The custom fields
Type: object
Propriétés:
- **customField**: Array<CustomFieldDto>
- **inheritedCustomField**: Array<CustomFieldDto>
- **empty**: boolean

### CustomFieldDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **valueDate**: string (date-time)
- **valuePeriodStartDate**: string (date-time)
- **valuePeriodEndDate**: string (date-time)
- **valuePeriodPriority**: integer (int32)
- **stringValue**: string
- **dateValue**: string (date-time)
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **mapValue**: object
- **entityReferenceValue**: EntityReferenceDto
- **valueConverted**: object
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **fileValue**: string
- **formattedValue**: CustomFieldFormattedValueDto
- **urlReferenceValue**: UrlReferenceDto
- **guiPosition**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **empty**: boolean
- **value**: Array<CustomFieldValueDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldValueDto
Type: object
Propriétés:
- **value**: object
- **empty**: boolean

### EntityReferenceDto
Type: object
Propriétés:
- **classname**: string
- **code**: string
- **id**: integer (int64)
- **empty**: boolean

### CustomFieldFormattedValueDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **singleValue**: string
- **listValue**: Array<string>
- **mapValue**: object

### UrlReferenceDto
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

### CounterPeriodDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **counterType**: string (Valeurs: USAGE, NOTIFICATION, USAGE_AMOUNT)
- **level**: number
- **periodStartDate**: string
- **periodEndDate**: string
- **value**: number
- **accumulator**: boolean
- **accumulatedValues**: object
- **accumulatorType**: string (Valeurs: MULTI_VALUE, SINGLE_VALUE)

### CdrError
Type: object
Propriétés:
- **errorCode**: string
- **errorMessage**: string
- **cdr**: string

### CdrDto
Type: object
Propriétés:
- **eventDate**: string (date-time)
- **quantity**: number
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **parameter4**: string
- **parameter5**: string
- **parameter6**: string
- **parameter7**: string
- **parameter8**: string
- **parameter9**: string
- **dateParam1**: string (date-time)
- **dateParam2**: string (date-time)
- **dateParam3**: string (date-time)
- **dateParam4**: string (date-time)
- **dateParam5**: string (date-time)
- **decimalParam1**: number
- **decimalParam2**: number
- **decimalParam3**: number
- **decimalParam4**: number
- **decimalParam5**: number
- **accessCode**: string
- **headerEDRId**: integer (int64)
- **extraParam**: string
- **rejectReason**: string

### CdrListDto
Type: object
Propriétés:
- **cdr**: Array<string>
- **ipAddress**: string

### CdrReservationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **availableQuantity**: number (double)
- **reservationId**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
