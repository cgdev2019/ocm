# TASK050 — Service DiscountPlan

## Contexte
Le service « DiscountPlan » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%DiscountPlan
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/discountPlan` |  Find a discount plan with a given code    |     GET_DiscountPlan_search |
| POST | `/api/rest/catalog/discountPlan` |  Create a new discount plan   |     POST_DiscountPlan_create |
| PUT | `/api/rest/catalog/discountPlan` |  Update an existing discount plan   |     PUT_DiscountPlan_update |
| DELETE | `/api/rest/catalog/discountPlan` |  Remove an existing discount plan with a given code    |     DELETE_DiscountPlan_delete |
| POST | `/api/rest/catalog/discountPlan/{code}/disable` |  Enable a Discount plan with a given code   |     POST_DiscountPlan_{code}_disable |
| POST | `/api/rest/catalog/discountPlan/{code}/enable` |  List DiscountPlans matching a given criteria  |     POST_DiscountPlan_{code}_enable |
| POST | `/api/rest/catalog/discountPlan/createOrUpdate` |  Create new or update an existing discount plan   |     POST_DiscountPlan_createOrUpdate |
| GET | `/api/rest/catalog/discountPlan/list` |  List discount plan   |     GET_DiscountPlan_list |
| GET | `/api/rest/catalog/discountPlan/listGetAll` | — | listGetAll_3 |
| GET | `/api/rest/catalog/discountPlan/version` | Get version of application | index_54 |

#### GET /api/rest/catalog/discountPlan

- Résumé:  Find a discount plan with a given code   
- OperationId:     GET_DiscountPlan_search
- Description: Find a discount plan with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `discountPlanCode` (QUERY, optionnel) — string
- Réponses:
  - default: Return discount plan
    - application/json: GetDiscountPlanResponseDto
    - application/xml: GetDiscountPlanResponseDto

#### POST /api/rest/catalog/discountPlan

- Résumé:  Create a new discount plan  
- OperationId:     POST_DiscountPlan_create
- Description: Create a new discount plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DiscountPlanDto
  - application/xml: DiscountPlanDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/discountPlan

- Résumé:  Update an existing discount plan  
- OperationId:     PUT_DiscountPlan_update
- Description: Update an existing discount plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DiscountPlanDto
  - application/xml: DiscountPlanDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/discountPlan

- Résumé:  Remove an existing discount plan with a given code   
- OperationId:     DELETE_DiscountPlan_delete
- Description: Remove an existing discount plan with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `discountPlanCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/discountPlan/{code}/disable

- Résumé:  Enable a Discount plan with a given code  
- OperationId:     POST_DiscountPlan_{code}_disable
- Description: Enable a Discount plan with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/discountPlan/{code}/enable

- Résumé:  List DiscountPlans matching a given criteria 
- OperationId:     POST_DiscountPlan_{code}_enable
- Description: List DiscountPlans matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: List of DiscountPlans
    - application/json: GetDiscountPlansResponseDto
    - application/xml: GetDiscountPlansResponseDto

#### POST /api/rest/catalog/discountPlan/createOrUpdate

- Résumé:  Create new or update an existing discount plan  
- OperationId:     POST_DiscountPlan_createOrUpdate
- Description: Create new or update an existing discount plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DiscountPlanDto
  - application/xml: DiscountPlanDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/discountPlan/list

- Résumé:  List discount plan  
- OperationId:     GET_DiscountPlan_list
- Description: List discount plan
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of discount plans
    - application/json: GetDiscountPlansResponseDto
    - application/xml: GetDiscountPlansResponseDto

#### GET /api/rest/catalog/discountPlan/listGetAll

- Résumé: listGetAll_3
- OperationId: listGetAll_3
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: default response
    - application/json: GetDiscountPlansResponseDto
    - application/xml: GetDiscountPlansResponseDto

#### GET /api/rest/catalog/discountPlan/version

- Résumé: Get version of application
- OperationId: index_54
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetDiscountPlanResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **discountPlanDto**: DiscountPlanDto

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

### DiscountPlanDto
List of discount plans. Use in instantiating a discount plan instance
Type: object
Champs obligatoires: code, discountPlanType
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **startDate**: string (date-time) — Effective start date
- **endDate**: string (date-time) — Effective end date
- **defaultDuration**: integer (int32) — Length of effectivity.<br/> If start date is not null and end date is null, we use the defaultDuration from the discount plan.<br />If start date is null, and defaultDuration is not null, defaultDuration is ignored.
- **durationUnit**: string — Unit of duration (Valeurs: MONTH, DAY)
- **customFields**: CustomFieldsDto
- **discountPlanItems**: Array<DiscountPlanItemDto> — list of discount plan item
- **expressionEl**: string — expression language
- **discountPlanType**: string — Type of the discount plan. Defines on which entity the discount plan can be applied (Valeurs: QUOTE, OFFER, PRODUCT, INVOICE, INVOICE_LINE, PROMO_CODE)
- **status**: string — Status of the discount plan. The default value is DRAFT (Valeurs: ACTIVE, INACTIVE, DRAFT, IN_USE, EXPIRED)
- **statusDate**: string (date-time) — Datetime of last status update, Automatically filed at creation and status update
- **initialQuantity**: integer (int64) — The initial available quantity for the discount plan, For types QUOTE, INVOICE, INVOICE_LINE, the value is forced to 0
- **usedQuantity**: integer (int64) — How many times the discount plan has been used.<br/> If intialQuantity is not 0, then reaching the initialQuantity expires the discount plan.<br />The value is incremented every time the discountPlan is instantiated on any Billing Account, Subscription, or ProductInstance
- **applicationLimit**: integer (int64) — How many times the discount can be applied on a given entity (BillingAccount, Subscription, Product Instance).<br />Default value is 0 = infinite.<br/>Useful for one-time discounts.
- **applicationFilterEL**: string — A boolean EL that must evaluate to true to allow the discount plan to be applied<br/>It will have access to the variables.<br />entity: the entity on which we want to apply the discount
- **incompatibleDiscountPlans**: Array<DiscountPlanDto> — A list of discounts plans that cannot be active at the same time on an entity instance.
- **applicableEntities**: Array<ApplicableEntityDto> — A list of entities (CustomerCategory, Offer, Product, Article).
- **applicableOnOverriddenPrice**: boolean
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **applicableOnDiscountedPrice**: boolean — determines whether the discount plan is applicable on the gross or discounted amount
- **applicableOnContractPrice**: boolean — If false then discount plan will be ignored if event price comes from a contract

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

### DiscountPlanItemDto
list of discount plan item
Type: object
Champs obligatoires: code, discountPlanCode, discountValue, discountValueEL
Propriétés:
- **code**: string — The code
- **discountPlanCode**: string — Discount plan code
- **invoiceCategoryCode**: string — Invoice category code
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **accountingCode**: string — Accounting code
- **expressionEl**: string — Expression to determine if discount applies
- **disabled**: boolean — Is entity disabled. Value is ignored in Update action - use enable/disable API instead
- **discountPlanItemType**: string — Type of discount, whether absolute or percentage (Valeurs: PERCENTAGE, FIXED) (Contraintes: défaut: "PERCENTAGE")
- **discountValue**: number — The absolute or percentage discount amount
- **discountValueEL**: string — The absolute or percentage discount amount EL
- **targetAccountingArticleCodes**: Array<string> — The target accounting article codes
- **pricePlanMatrixCode**: string — Price plan matrix code
- **customFields**: CustomFieldsDto
- **allowToNegate**: boolean — <ul><li>If true, then allows to negate the amount of affected invoice lines</li><li>If fase, then amount for the discount line produce by the discount plan item cannot exceed the amount of discounted lines</li></ul> (Contraintes: défaut: false)
- **description**: string — description of discount plan item
- **priority**: integer (int64) — The lower number, the higher the priority is
- **accountingArticleCode**: string — accounting article code
- **applyByArticle**: boolean — Apply by article
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **lastDiscount**: boolean — last discount

### ApplicableEntityDto
A list of entities (CustomerCategory, Offer, Product, Article).
Type: object
Propriétés:
- **code**: string — code of the entity applicable
- **entityClass**: string — name of the class applicable

### GetDiscountPlansResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **discountPlan**: DiscountPlansDto

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

### DiscountPlansDto
Type: object
Propriétés:
- **discountPlan**: Array<DiscountPlanDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
