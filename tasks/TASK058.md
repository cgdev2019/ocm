# TASK058 — Service UsageChargeTemplate

## Contexte
Le service « UsageChargeTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%UsageChargeTemplate
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/usageChargeTemplate` |  Find an existing usage charge template with a given code.   |     GET_UsageChargeTemplate_search |
| POST | `/api/rest/catalog/usageChargeTemplate` |  Create new usage charge template.   |     POST_UsageChargeTemplate_create |
| PUT | `/api/rest/catalog/usageChargeTemplate` |  Update usage charge template.   |     PUT_UsageChargeTemplate_update |
| POST | `/api/rest/catalog/usageChargeTemplate/{code}/disable` |  Disable a Usage charge template with a given code   |     POST_UsageChargeTemplate_{code}_disable |
| POST | `/api/rest/catalog/usageChargeTemplate/{code}/enable` |  Enable a Usage charge template with a given code   |     POST_UsageChargeTemplate_{code}_enable |
| DELETE | `/api/rest/catalog/usageChargeTemplate/{usageChargeTemplateCode}` |  Remove usage charge template with a given code.   |     DELETE_UsageChargeTemplate_{usageChargeTemplateCode} |
| POST | `/api/rest/catalog/usageChargeTemplate/createOrUpdate` |  Create new or update an existing charge template with a given code.   |     POST_UsageChargeTemplate_createOrUpdate |
| POST | `/api/rest/catalog/usageChargeTemplate/list` |  List UsageChargeTemplate matching a given criteria  |     POST_UsageChargeTemplate_list |
| GET | `/api/rest/catalog/usageChargeTemplate/listGetAll` | — | listGetAll_6 |
| GET | `/api/rest/catalog/usageChargeTemplate/version` | Get version of application | index_64 |

#### GET /api/rest/catalog/usageChargeTemplate

- Résumé:  Find an existing usage charge template with a given code.  
- OperationId:     GET_UsageChargeTemplate_search
- Description: Find an existing usage charge template with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `usageChargeTemplateCode` (QUERY, obligatoire) — string : The usage charge template code
- Réponses:
  - default: Returns a usageChargeTemplate
    - application/json: GetUsageChargeTemplateResponseDto
    - application/xml: GetUsageChargeTemplateResponseDto

#### POST /api/rest/catalog/usageChargeTemplate

- Résumé:  Create new usage charge template.  
- OperationId:     POST_UsageChargeTemplate_create
- Description: Create new usage charge template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UsageChargeTemplateDto
  - application/xml: UsageChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/usageChargeTemplate

- Résumé:  Update usage charge template.  
- OperationId:     PUT_UsageChargeTemplate_update
- Description: Update usage charge template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UsageChargeTemplateDto
  - application/xml: UsageChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/usageChargeTemplate/{code}/disable

- Résumé:  Disable a Usage charge template with a given code  
- OperationId:     POST_UsageChargeTemplate_{code}_disable
- Description: Disable a Usage charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : The code of the usage charge template to be disabeled
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/usageChargeTemplate/{code}/enable

- Résumé:  Enable a Usage charge template with a given code  
- OperationId:     POST_UsageChargeTemplate_{code}_enable
- Description: Enable a Usage charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : The code of the usage charge template to be enabled
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/usageChargeTemplate/{usageChargeTemplateCode}

- Résumé:  Remove usage charge template with a given code.  
- OperationId:     DELETE_UsageChargeTemplate_{usageChargeTemplateCode}
- Description: Remove usage charge template with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `usageChargeTemplateCode` (PATH, obligatoire) — string : The usage charge template code
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/usageChargeTemplate/createOrUpdate

- Résumé:  Create new or update an existing charge template with a given code.  
- OperationId:     POST_UsageChargeTemplate_createOrUpdate
- Description: Create new or update an existing charge template with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UsageChargeTemplateDto
  - application/xml: UsageChargeTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/usageChargeTemplate/list

- Résumé:  List UsageChargeTemplate matching a given criteria 
- OperationId:     POST_UsageChargeTemplate_list
- Description: List UsageChargeTemplate matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of UsageChargeTemplate
    - application/json: UsageChargeTemplateResponseDto
    - application/xml: UsageChargeTemplateResponseDto

#### GET /api/rest/catalog/usageChargeTemplate/listGetAll

- Résumé: listGetAll_6
- OperationId: listGetAll_6
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: default response
    - application/json: UsageChargeTemplateResponseDto
    - application/xml: UsageChargeTemplateResponseDto

#### GET /api/rest/catalog/usageChargeTemplate/version

- Résumé: Get version of application
- OperationId: index_64
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetUsageChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **usageChargeTemplate**: UsageChargeTemplateDto

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

### UsageChargeTemplateDto
Type: object
Champs obligatoires: code
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
- **filterParam1**: string — first filter parameter (Contraintes: longueur min: 0 · longueur max: 255)
- **filterParam2**: string — second filter parameter (Contraintes: longueur min: 0 · longueur max: 255)
- **filterParam3**: string — third filter parameter (Contraintes: longueur min: 0 · longueur max: 255)
- **filterParam4**: string — fourth filter parameter (Contraintes: longueur min: 0 · longueur max: 255)
- **priority**: integer (int32) — The priority
- **triggerNextCharge**: boolean — If set to true and (charge has no counter associated) then the next matching charge with the full quantity of the EDR
- **triggerNextChargeEL**: string — Overrides the triggerNextCharge switch
- **usageQuantityAttributeCode**: string — code of usage attribute quantity

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

### UsageChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **usageChargeTemplates**: UsageChargeTemplatesDto

### UsageChargeTemplatesDto
Type: object
Propriétés:
- **usageChargeTemplates**: Array<UsageChargeTemplateDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
