# TASK053 — Service OneShotChargeTemplate

## Contexte
Le service « OneShotChargeTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%OneShotChargeTemplate
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/oneShotChargeTemplate` |  Search one shot charge templatewith a given code.   |     GET_OneShotChargeTemplate_search |
| POST | `/api/rest/catalog/oneShotChargeTemplate` |  Create one shot charge template.   |     POST_OneShotChargeTemplate_create |
| PUT | `/api/rest/catalog/oneShotChargeTemplate` |  Update one shot charge template.   |     PUT_OneShotChargeTemplate_update |
| POST | `/api/rest/catalog/oneShotChargeTemplate/{code}/disable` |  Enable a One shot charge template with a given code   |     POST_OneShotChargeTemplate_{code}_disable |
| POST | `/api/rest/catalog/oneShotChargeTemplate/{code}/enable` |  Create new or update an existing.   |     POST_OneShotChargeTemplate_{code}_enable |
| DELETE | `/api/rest/catalog/oneShotChargeTemplate/{oneShotChargeTemplateCode}` |  Return the list of oneShotChargeTemplates.  |     DELETE_OneShotChargeTemplate_{oneShotChargeTemplateCode} |
| POST | `/api/rest/catalog/oneShotChargeTemplate/createOrUpdate` |  Remove one shot charge tesmplate with a given code.   |     POST_OneShotChargeTemplate_createOrUpdate |
| GET | `/api/rest/catalog/oneShotChargeTemplate/list` |  List one shot charge template with the following filters.   |     GET_OneShotChargeTemplate_list |
| GET | `/api/rest/catalog/oneShotChargeTemplate/listGetAll` | — | list_3 |
| GET | `/api/rest/catalog/oneShotChargeTemplate/version` | Get version of application | index_57 |

#### GET /api/rest/catalog/oneShotChargeTemplate

- Résumé:  Search one shot charge templatewith a given code.  
- OperationId:     GET_OneShotChargeTemplate_search
- Description: Search one shot charge templatewith a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `oneShotChargeTemplateCode` (QUERY, obligatoire) — string : The One shot charge template code
- Réponses:
  - default: one shot charge template
    - application/json: GetOneShotChargeTemplateResponseDto
    - application/xml: GetOneShotChargeTemplateResponseDto

#### POST /api/rest/catalog/oneShotChargeTemplate

- Résumé:  Create one shot charge template.  
- OperationId:     POST_OneShotChargeTemplate_create
- Description: Create one shot charge template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OneShotChargeTemplateDto
  - application/xml: OneShotChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/oneShotChargeTemplate

- Résumé:  Update one shot charge template.  
- OperationId:     PUT_OneShotChargeTemplate_update
- Description: Update one shot charge template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OneShotChargeTemplateDto
  - application/xml: OneShotChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/oneShotChargeTemplate/{code}/disable

- Résumé:  Enable a One shot charge template with a given code  
- OperationId:     POST_OneShotChargeTemplate_{code}_disable
- Description: Enable a One shot charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : The code of One shot charge template to be disabled
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/oneShotChargeTemplate/{code}/enable

- Résumé:  Create new or update an existing.  
- OperationId:     POST_OneShotChargeTemplate_{code}_enable
- Description: Create new or update an existing.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : The code of One shot charge template to be enabled
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/oneShotChargeTemplate/{oneShotChargeTemplateCode}

- Résumé:  Return the list of oneShotChargeTemplates. 
- OperationId:     DELETE_OneShotChargeTemplate_{oneShotChargeTemplateCode}
- Description: Return the list of oneShotChargeTemplates.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `oneShotChargeTemplateCode` (PATH, obligatoire) — string : The one shot charge template code
- Réponses:
  - default: list of oneShotChargeTemplates
    - application/json: OneShotChargeTemplateResponseDto
    - application/xml: OneShotChargeTemplateResponseDto

#### POST /api/rest/catalog/oneShotChargeTemplate/createOrUpdate

- Résumé:  Remove one shot charge tesmplate with a given code.  
- OperationId:     POST_OneShotChargeTemplate_createOrUpdate
- Description: Remove one shot charge tesmplate with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OneShotChargeTemplateDto
  - application/xml: OneShotChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/oneShotChargeTemplate/list

- Résumé:  List one shot charge template with the following filters.  
- OperationId:     GET_OneShotChargeTemplate_list
- Description: List one shot charge template with the following filters.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `languageCode` (QUERY, optionnel) — string : The language code
- `countryCode` (QUERY, optionnel) — string : The country code
- `currencyCode` (QUERY, optionnel) — string : The currency code
- `sellerCode` (QUERY, optionnel) — string : The seller code
- `date` (QUERY, optionnel) — string (date-time) : The subscription date
- Réponses:
  - default: list of one shot charge template
    - application/json: OneShotChargeTemplateWithPriceListDto
    - application/xml: OneShotChargeTemplateWithPriceListDto

#### GET /api/rest/catalog/oneShotChargeTemplate/listGetAll

- Résumé: list_3
- OperationId: list_3
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: default response
    - application/json: OneShotChargeTemplateResponseDto
    - application/xml: OneShotChargeTemplateResponseDto

#### GET /api/rest/catalog/oneShotChargeTemplate/version

- Résumé: Get version of application
- OperationId: index_57
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetOneShotChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **oneShotChargeTemplate**: OneShotChargeTemplateDto

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

### OneShotChargeTemplateDto
Type: object
Champs obligatoires: code, oneShotChargeTemplateType
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
- **oneShotChargeTemplateType**: string — The one shot charge template type (Valeurs: oneShotChargeTemplateTypeEnum.subscription, oneShotChargeTemplateTypeEnum.termination, oneShotChargeTemplateTypeEnum.other)
- **immediateInvoicing**: boolean — The immediate invoicing

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

### OneShotChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **oneShotChargeTemplates**: OneShotChargeTemplatesDto

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

### OneShotChargeTemplatesDto
Type: object
Propriétés:
- **oneShotChargeTemplates**: Array<OneShotChargeTemplateDto>

### OneShotChargeTemplateWithPriceListDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **oneShotChargeTemplateDtos**: Array<OneShotChargeTemplateWithPriceDto>

### OneShotChargeTemplateWithPriceDto
Type: object
Propriétés:
- **chargeCode**: string
- **description**: string
- **unitPriceWithoutTax**: number (double)
- **taxPercent**: number (double)
- **taxCode**: string
- **taxDescription**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
