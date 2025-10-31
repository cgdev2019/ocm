# TASK043 — Service BusinessProductModel

## Contexte
Le service « BusinessProductModel » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%BusinessProductModel
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/businessProductModel` |  Remove an existing business product model with a given code    |     GET_BusinessProductModel_search |
| POST | `/api/rest/catalog/businessProductModel` |  Create a new business product model   |     POST_BusinessProductModel_create |
| PUT | `/api/rest/catalog/businessProductModel` |  Update an existing business product model   |     PUT_BusinessProductModel_update |
| DELETE | `/api/rest/catalog/businessProductModel/{businessProductModelCode}` |  Remove an existing business product model with a given code    |     DELETE_BusinessProductModel_{businessProductModelCode} |
| POST | `/api/rest/catalog/businessProductModel/createOrUpdate` |  Create new or update an existing business product model   |     POST_BusinessProductModel_createOrUpdate |
| PUT | `/api/rest/catalog/businessProductModel/install` |  Install business product model module  |     PUT_BusinessProductModel_install |
| GET | `/api/rest/catalog/businessProductModel/list` |  List business product models   |     GET_BusinessProductModel_list |
| GET | `/api/rest/catalog/businessProductModel/listGetAll` |  List Business Product Models matching a given criteria  |     GET_BusinessProductModel_listGetAll |
| GET | `/api/rest/catalog/businessProductModel/version` | Get version of application | index_47 |

#### GET /api/rest/catalog/businessProductModel

- Résumé:  Remove an existing business product model with a given code   
- OperationId:     GET_BusinessProductModel_search
- Description: Remove an existing business product model with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `businessProductModelCode` (QUERY, optionnel) — string
- Réponses:
  - default: A business product model
    - application/json: GetBusinessProductModelResponseDto
    - application/xml: GetBusinessProductModelResponseDto

#### POST /api/rest/catalog/businessProductModel

- Résumé:  Create a new business product model  
- OperationId:     POST_BusinessProductModel_create
- Description: Create a new business product model
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessProductModelDto
  - application/xml: BusinessProductModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/businessProductModel

- Résumé:  Update an existing business product model  
- OperationId:     PUT_BusinessProductModel_update
- Description: Update an existing business product model
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessProductModelDto
  - application/xml: BusinessProductModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/businessProductModel/{businessProductModelCode}

- Résumé:  Remove an existing business product model with a given code   
- OperationId:     DELETE_BusinessProductModel_{businessProductModelCode}
- Description: Remove an existing business product model with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `businessProductModelCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/businessProductModel/createOrUpdate

- Résumé:  Create new or update an existing business product model  
- OperationId:     POST_BusinessProductModel_createOrUpdate
- Description: Create new or update an existing business product model
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessProductModelDto
  - application/xml: BusinessProductModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/businessProductModel/install

- Résumé:  Install business product model module 
- OperationId:     PUT_BusinessProductModel_install
- Description: Install business product model module
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessProductModelDto
  - application/xml: BusinessProductModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/businessProductModel/list

- Résumé:  List business product models  
- OperationId:     GET_BusinessProductModel_list
- Description: List business product models
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of business product models
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/catalog/businessProductModel/listGetAll

- Résumé:  List Business Product Models matching a given criteria 
- OperationId:     GET_BusinessProductModel_listGetAll
- Description: List Business Product Models matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of Business Account Models
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/catalog/businessProductModel/version

- Résumé: Get version of application
- OperationId: index_47
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetBusinessProductModelResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **businessProductModel**: BusinessProductModelDto

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

### BusinessProductModelDto
Type: object
Champs obligatoires: code, productTemplate
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string
- **logoPictureFile**: Array<string (byte)>
- **script**: ScriptInstanceDto
- **moduleItems**: Array<BaseEntityDto>
- **productTemplate**: ProductTemplateDto
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **codeOnly**: boolean
- **transient**: boolean

### ScriptInstanceDto
Type: object
Champs obligatoires: code, script
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **type**: string (Valeurs: JAVA, JAVA_CLASS)
- **reuse**: boolean
- **script**: string
- **executionRoles**: Array<string>
- **sourcingRoles**: Array<string>
- **scriptInstanceCategoryCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description
- **scriptParameters**: Array<ScriptParameterDto> — list of the script parameters
- **codeOnly**: boolean

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### ScriptParameterDto
list of the script parameters
Type: object
Propriétés:
- **className**: string — The class name
- **defaultValue**: string — The default value
- **mandatory**: boolean — Field mandatory
- **allowedValues**: string — The allowed values
- **valuesSeparator**: string — The values separator
- **collection**: boolean — Field collection
- **languageDescriptions**: Array<LanguageDescriptionDto>

### BaseEntityDto
Type: object

### ProductTemplateDto
Type: object
Champs obligatoires: code, lifeCycleStatus, name, productChargeTemplates
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **validFrom**: string (date-time)
- **validTo**: string (date-time)
- **newValidFrom**: string (date-time)
- **newValidTo**: string (date-time)
- **name**: string
- **offerTemplateCategories**: Array<OfferTemplateCategoryDto>
- **channels**: Array<ChannelDto>
- **attachments**: Array<DigitalResourceDto>
- **modelCode**: string
- **lifeCycleStatus**: string (Valeurs: IN_STUDY, IN_DESIGN, IN_TEST, ACTIVE, LAUNCHED, RETIRED, OBSOLETE, REJECTED)
- **customFields**: CustomFieldsDto
- **imagePath**: string
- **imageBase64**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **longDescription**: string
- **longDescriptionsTranslated**: Array<LanguageDescriptionDto>
- **globalRatingScriptInstance**: string
- **sellers**: Array<string>
- **customerCategories**: Array<CustomerCategoryDto>
- **productChargeTemplates**: Array<ProductChargeTemplateDto>
- **businessProductModel**: BusinessProductModelDto
- **walletTemplates**: Array<WalletTemplateDto>
- **codeOnly**: boolean

### OfferTemplateCategoryDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **name**: string
- **offerTemplateCategoryCode**: string
- **href**: string
- **version**: integer (int32)
- **lastModified**: string (date-time)
- **active**: boolean
- **parentId**: integer (int64)
- **imagePath**: string
- **imageBase64**: string
- **customFields**: CustomFieldsDto
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **languageLabels**: Array<LanguageDescriptionDto>

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

### ChannelDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### DigitalResourceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **uri**: string
- **mimeType**: string

### CustomerCategoryDto
Type: object
Champs obligatoires: accountingCode, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **exoneratedFromTaxes**: boolean — The exonerated from taxes
- **exonerationTaxEl**: string — The exoneration tax el
- **exonerationReason**: string — The exoneration reason
- **accountingCode**: string — The accounting code
- **taxCategoryCode**: string — Account tax category code
- **taxCategoryEl**: string — Expression to determine tax category code
- **languageDescriptions**: Array<LanguageDescriptionDto>

### ProductChargeTemplateDto
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

### WalletTemplateDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **walletType**: string (Valeurs: POSTPAID, PREPAID)
- **consumptionAlertSet**: boolean
- **fastRatingLevel**: integer (int32)
- **lowBalanceLevel**: number
- **rejectLevel**: number
- **rejectLevelEl**: string
- **lowBalanceLevelEl**: string

### MeveoModuleDtosResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **modules**: Array<MeveoModuleDto>

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

### MeveoModuleDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string
- **logoPictureFile**: Array<string (byte)>
- **script**: ScriptInstanceDto
- **moduleItems**: Array<BaseEntityDto>
- **codeOnly**: boolean
- **transient**: boolean

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
