# TASK054 — Service RecurringChargeTemplate

## Contexte
Le service « RecurringChargeTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%RecurringChargeTemplate
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/recurringChargeTemplate` |  Find a recurring charge template with a given code.   |     GET_RecurringChargeTemplate_search |
| POST | `/api/rest/catalog/recurringChargeTemplate` |  Create a new recurring charge template.   |     POST_RecurringChargeTemplate_create |
| PUT | `/api/rest/catalog/recurringChargeTemplate` |  Return the list of recurringChargeTemplates.  |     PUT_RecurringChargeTemplate_update |
| POST | `/api/rest/catalog/recurringChargeTemplate/{code}/disable` |  Enable a Recurring charge template with a given code   |     POST_RecurringChargeTemplate_{code}_disable |
| POST | `/api/rest/catalog/recurringChargeTemplate/{code}/enable` |  Create new or update an existing recurring charge template   |     POST_RecurringChargeTemplate_{code}_enable |
| DELETE | `/api/rest/catalog/recurringChargeTemplate/{recurringChargeTemplateCode}` |  Update an existing recurring charge template.   |     DELETE_RecurringChargeTemplate_{recurringChargeTemplateCode} |
| POST | `/api/rest/catalog/recurringChargeTemplate/createOrUpdate` |  Remove an existing recurring charge template with a given code.   |     POST_RecurringChargeTemplate_createOrUpdate |
| GET | `/api/rest/catalog/recurringChargeTemplate/listGetAll` | — | list_4 |
| GET | `/api/rest/catalog/recurringChargeTemplate/version` | Get version of application | index_60 |

#### GET /api/rest/catalog/recurringChargeTemplate

- Résumé:  Find a recurring charge template with a given code.  
- OperationId:     GET_RecurringChargeTemplate_search
- Description: Find a recurring charge template with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `recurringChargeTemplateCode` (QUERY, obligatoire) — string : code of recurring charge template
- Réponses:
  - default: Return a recurringChargeTemplate
    - application/json: GetRecurringChargeTemplateResponseDto
    - application/xml: GetRecurringChargeTemplateResponseDto

#### POST /api/rest/catalog/recurringChargeTemplate

- Résumé:  Create a new recurring charge template.  
- OperationId:     POST_RecurringChargeTemplate_create
- Description: Create a new recurring charge template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RecurringChargeTemplateDto
  - application/xml: RecurringChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/recurringChargeTemplate

- Résumé:  Return the list of recurringChargeTemplates. 
- OperationId:     PUT_RecurringChargeTemplate_update
- Description: Return the list of recurringChargeTemplates.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RecurringChargeTemplateDto
  - application/xml: RecurringChargeTemplateDto
- Réponses:
  - default: list of recurringChargeTemplates
    - application/json: RecurringChargeTemplateResponseDto
    - application/xml: RecurringChargeTemplateResponseDto

#### POST /api/rest/catalog/recurringChargeTemplate/{code}/disable

- Résumé:  Enable a Recurring charge template with a given code  
- OperationId:     POST_RecurringChargeTemplate_{code}_disable
- Description: Enable a Recurring charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : The code of recurring charge template to be disabled
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/recurringChargeTemplate/{code}/enable

- Résumé:  Create new or update an existing recurring charge template  
- OperationId:     POST_RecurringChargeTemplate_{code}_enable
- Description: Create new or update an existing recurring charge template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : The code of recurring charge template to be enabled
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/recurringChargeTemplate/{recurringChargeTemplateCode}

- Résumé:  Update an existing recurring charge template.  
- OperationId:     DELETE_RecurringChargeTemplate_{recurringChargeTemplateCode}
- Description: Update an existing recurring charge template.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `recurringChargeTemplateCode` (PATH, obligatoire) — string : The recurring charge template code
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/recurringChargeTemplate/createOrUpdate

- Résumé:  Remove an existing recurring charge template with a given code.  
- OperationId:     POST_RecurringChargeTemplate_createOrUpdate
- Description: Remove an existing recurring charge template with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RecurringChargeTemplateDto
  - application/xml: RecurringChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/recurringChargeTemplate/listGetAll

- Résumé: list_4
- OperationId: list_4
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: default response
    - application/json: RecurringChargeTemplateResponseDto
    - application/xml: RecurringChargeTemplateResponseDto

#### GET /api/rest/catalog/recurringChargeTemplate/version

- Résumé: Get version of application
- OperationId: index_60
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetRecurringChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **recurringChargeTemplate**: RecurringChargeTemplateDto

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

### RecurringChargeTemplateDto
Type: object
Champs obligatoires: calendar, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **invoiceSubCategory**: string — The invoice sub category
- **amountEditable**: boolean — The amount can be editable
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description
- **inputUnitDescription**: string
- **ratingUnitDescription**: string
- **unitMultiplicator**: number
- **inputUnitOfMeasureCode**: string — code of unit measure
- **ratingUnitOfMeasureCode**: string — code of rating unit of measure
- **inputUnitEL**: string — input unit expression language
- **outputUnitEL**: string — output unit expression language
- **unitNbDecimal**: integer (int32) — EDR and WO quantity field value precision
- **roundingModeDtoEnum**: string — EDR and WO quantity field value rounding (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRuleCode**: string — The revenue recognition rule code
- **filterExpression**: string — The filter expression (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClassCode**: string — code of tax class
- **taxClassEl**: string — Expression to determine tax class
- **ratingScriptCode**: string — Code of a rating script
- **customFields**: CustomFieldsDto
- **triggeredEdrs**: TriggeredEdrTemplatesDto
- **dropZeroWo**: boolean — Enable/disable removing WO rated to 0
- **sortIndexEl**: string — Sorting index EL (Contraintes: longueur min: 0 · longueur max: 2000)
- **status**: string — ChargeTemplate status (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **linkedAttributes**: Array<string>
- **internalNote**: string — Internal Note
- **quantityAttribute**: string — Code of quantity attribute
- **applyContractOverRatingScript**: boolean — Applies the contract during rating script execution.
- **calendar**: string — the calendar
- **durationTermInMonth**: integer (int32) — The duration term in month
- **subscriptionProrata**: boolean — The subscription prorata
- **terminationProrata**: boolean — The termination prorata
- **applyInAdvance**: boolean — The apply in advance
- **shareLevel**: integer (int32) — The share level
- **calendarCodeEl**: string — The calendar code expression language (Contraintes: longueur min: 0 · longueur max: 2000)
- **durationTermInMonthEl**: string — The duration term in month on expression language (Contraintes: longueur min: 0 · longueur max: 2000)
- **subscriptionProrataEl**: string — The subscription prorata on expression language (Contraintes: longueur min: 0 · longueur max: 2000)
- **terminationProrataEl**: string — The termination prorata on expression language (Contraintes: longueur min: 0 · longueur max: 2000)
- **applyInAdvanceEl**: string — The apply in advance on expression language (Contraintes: longueur min: 0 · longueur max: 2000)
- **applyTerminatedChargeToDateEL**: string — Expression to determine and override the date that recurring charge should be charged to upon charge/service termination
- **recurrenceType**: string — recrrence type (Valeurs: CALENDAR, PERIOD) (Contraintes: défaut: "CALENDAR")
- **attributeDurationCode**: string — code of attribute duration
- **attributeCalendarCode**: string — code of attribute calendar
- **anticipateEndOfSubscription**: boolean — The flag to anticipate the end of Subscription

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

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

### TriggeredEdrTemplatesDto
The triggered edrs
Type: object
Propriétés:
- **triggeredEdr**: Array<TriggeredEdrTemplateDto> — list triggered EDR

### TriggeredEdrTemplateDto
list triggered EDR
Type: object
Champs obligatoires: code, quantityEl
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **subscriptionEl**: string
- **meveoInstanceCode**: string
- **conditionEl**: string
- **quantityEl**: string
- **param1El**: string
- **param2El**: string
- **param3El**: string
- **param4El**: string
- **opencellInstanceEL**: string
- **triggeredEdrScript**: string

### RecurringChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **recurringChargeTemplates**: RecurringChargeTemplatesDto

### PagingAndFiltering
Type: object
Propriétés:
- **fullTextFilter**: string — Full text search filter. Mutually exclusive with filters attribute. fullTextFilter has priority
- **filters**: object — Search filters (key = Filter key, value = search pattern or value).
- **fields**: string — Data retrieval options/fieldnames separated by a comma
- **offset**: integer (int32) — Pagination - from record number
- **limit**: integer (int32) — Pagination - number of items to retrieve
- **sortBy**: string — Sorting - field to sort by - a field from a main entity being searched. See Data model for a list of fields
- **sortOrder**: string — Sorting - sort ordee (Valeurs: ASCENDING, DESCENDING)
- **multiSortOrder**: string
- **totalNumberOfRecords**: integer (int32)
- **loadReferenceDepth**: integer (int32)

### RecurringChargeTemplatesDto
Type: object
Propriétés:
- **recurringChargeTemplates**: Array<RecurringChargeTemplateDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
