# TASK098 — Service Catalog

## Contexte
Le service « Catalog » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Catalog
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalogManagement/category` |  Get a list of categories   |     GET_Catalog_category |
| GET | `/api/rest/catalogManagement/category/{code}` |  Get a single category by its code   |     GET_Catalog_category_{code} |
| POST | `/api/rest/catalogManagement/createOfferFromBOM` |  Create offer from BOM definition   |     POST_Catalog_createOfferFromBOM |
| POST | `/api/rest/catalogManagement/createProductFromBPM` |  Create product from BPM definition   |     POST_Catalog_createProductFromBPM |
| POST | `/api/rest/catalogManagement/createServiceFromBSM` |  Create service from BSM definition   |     POST_Catalog_createServiceFromBSM |
| POST | `/api/rest/catalogManagement/productChargeTemplate` |  Create product charge template   |     POST_Catalog_productChargeTemplate |
| PUT | `/api/rest/catalogManagement/productChargeTemplate` |  Update product charge template   |     PUT_Catalog_productChargeTemplate |
| GET | `/api/rest/catalogManagement/productChargeTemplate/{code}` |  Get a single productChargeTemplate by its code   |     GET_Catalog_productChargeTemplate_{code} |
| DELETE | `/api/rest/catalogManagement/productChargeTemplate/{code}` |  Delete a single productChargeTemplate by its code   |     DELETE_Catalog_productChargeTemplate_{code} |
| POST | `/api/rest/catalogManagement/productChargeTemplate/{code}/disable` |  Disable a Product charge template with a given code   |     POST_Catalog_productChargeTemplate_{code}_disable |
| POST | `/api/rest/catalogManagement/productChargeTemplate/{code}/enable` |  Enable a Product charge template with a given code   |     POST_Catalog_productChargeTemplate_{code}_enable |
| POST | `/api/rest/catalogManagement/productChargeTemplate/createOrUpdate` |  Create or update product charge template   |     POST_Catalog_productChargeTemplate_createOrUpdate |
| GET | `/api/rest/catalogManagement/productChargeTemplate/list` |  List all productChargeTemplates   |     GET_Catalog_productChargeTemplate_list |
| GET | `/api/rest/catalogManagement/productChargeTemplate/listGetAll` |  Gets a productChargeTemplate list.  |     GET_Catalog_productChargeTemplate_listGetAll |
| GET | `/api/rest/catalogManagement/productOffering` |  Get a list of product offerings optionally filtering by some criteria   |     GET_Catalog_productOffering |
| GET | `/api/rest/catalogManagement/productOffering/{id}` |  Get details of a single Product template and validity dates |     GET_Catalog_productOffering_{id} |
| GET | `/api/rest/catalogManagement/productSpecification` |  Get a list of product specifications optionally filtering by some criteria   |     GET_Catalog_productSpecification |
| GET | `/api/rest/catalogManagement/productSpecification/{id}` |  Get details of a single product   |     GET_Catalog_productSpecification_{id} |
| POST | `/api/rest/catalogManagement/productTemplate` |  Create product template   |     POST_Catalog_productTemplate |
| PUT | `/api/rest/catalogManagement/productTemplate` |  Update product template   |     PUT_Catalog_productTemplate |
| GET | `/api/rest/catalogManagement/productTemplate/{code}` |  Get a single productTemplate by its code and validity dates |     GET_Catalog_productTemplate_{code} |
| DELETE | `/api/rest/catalogManagement/productTemplate/{code}` |  Delete a single productTemplate by its code and validity dates |     DELETE_Catalog_productTemplate_{code} |
| POST | `/api/rest/catalogManagement/productTemplate/{code}/disable` |  Disable a Product template with a given code   |     POST_Catalog_productTemplate_{code}_disable |
| POST | `/api/rest/catalogManagement/productTemplate/{code}/enable` |  Enable a Product template with a given code   |     POST_Catalog_productTemplate_{code}_enable |
| POST | `/api/rest/catalogManagement/productTemplate/createOrUpdate` |  Create or update product template   |     POST_Catalog_productTemplate_createOrUpdate |
| GET | `/api/rest/catalogManagement/productTemplate/list` |  List all product templates optionally filtering by code and validity dates |     GET_Catalog_productTemplate_list |
| GET | `/api/rest/catalogManagement/productTemplate/listGetAll` |  Gets a productTemplates list.  |     GET_Catalog_productTemplate_listGetAll |
| GET | `/api/rest/catalogManagement/version` | Get version of application | index_146 |

#### GET /api/rest/catalogManagement/category

- Résumé:  Get a list of categories  
- OperationId:     GET_Catalog_category
- Description: Get a list of categories
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of categories
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/category/{code}

- Résumé:  Get a single category by its code  
- OperationId:     GET_Catalog_category_{code}
- Description: Get a single category by its code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Single category information
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/createOfferFromBOM

- Résumé:  Create offer from BOM definition  
- OperationId:     POST_Catalog_createOfferFromBOM
- Description: Create offer from BOM definition
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BomOfferDto
  - application/xml: BomOfferDto
- Réponses:
  - default: Response of the create offer BOM
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/createProductFromBPM

- Résumé:  Create product from BPM definition  
- OperationId:     POST_Catalog_createProductFromBPM
- Description: Create product from BPM definition
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BpmProductDto
  - application/xml: BpmProductDto
- Réponses:
  - default: Response of the create Service BPM
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/createServiceFromBSM

- Résumé:  Create service from BSM definition  
- OperationId:     POST_Catalog_createServiceFromBSM
- Description: Create service from BSM definition
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BsmServiceDto
  - application/xml: BsmServiceDto
- Réponses:
  - default: Response of the create Service BSM
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productChargeTemplate

- Résumé:  Create product charge template  
- OperationId:     POST_Catalog_productChargeTemplate
- Description: Create product charge template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductChargeTemplateDto
  - application/xml: ProductChargeTemplateDto
- Réponses:
  - default: Response of the create Product Charge Template
    - application/json: object
    - application/xml: object

#### PUT /api/rest/catalogManagement/productChargeTemplate

- Résumé:  Update product charge template  
- OperationId:     PUT_Catalog_productChargeTemplate
- Description: Update product charge template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductChargeTemplateDto
  - application/xml: ProductChargeTemplateDto
- Réponses:
  - default: Response of the update Product Charge Template
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productChargeTemplate/{code}

- Résumé:  Get a single productChargeTemplate by its code  
- OperationId:     GET_Catalog_productChargeTemplate_{code}
- Description: Get a single productChargeTemplate by its code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Single productChargeTemplate information
    - application/json: object
    - application/xml: object

#### DELETE /api/rest/catalogManagement/productChargeTemplate/{code}

- Résumé:  Delete a single productChargeTemplate by its code  
- OperationId:     DELETE_Catalog_productChargeTemplate_{code}
- Description: Delete a single productChargeTemplate by its code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Response of the delete action
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productChargeTemplate/{code}/disable

- Résumé:  Disable a Product charge template with a given code  
- OperationId:     POST_Catalog_productChargeTemplate_{code}_disable
- Description: Disable a Product charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productChargeTemplate/{code}/enable

- Résumé:  Enable a Product charge template with a given code  
- OperationId:     POST_Catalog_productChargeTemplate_{code}_enable
- Description: Enable a Product charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productChargeTemplate/createOrUpdate

- Résumé:  Create or update product charge template  
- OperationId:     POST_Catalog_productChargeTemplate_createOrUpdate
- Description: Create or update product charge template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductChargeTemplateDto
  - application/xml: ProductChargeTemplateDto
- Réponses:
  - default: Response of the create or update Product Charge Template
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productChargeTemplate/list

- Résumé:  List all productChargeTemplates  
- OperationId:     GET_Catalog_productChargeTemplate_list
- Description: List all productChargeTemplates
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of charge template
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productChargeTemplate/listGetAll

- Résumé:  Gets a productChargeTemplate list. 
- OperationId:     GET_Catalog_productChargeTemplate_listGetAll
- Description: Gets a productChargeTemplate list.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Return productChargeTemplate list
    - application/json: ProductChargeTemplatesResponseDto
    - application/xml: ProductChargeTemplatesResponseDto

#### GET /api/rest/catalogManagement/productOffering

- Résumé:  Get a list of product offerings optionally filtering by some criteria  
- OperationId:     GET_Catalog_productOffering
- Description: Get a list of product offerings optionally filtering by some criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: A list of product offerings matching search criteria
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productOffering/{id}

- Résumé:  Get details of a single Product template and validity dates
- OperationId:     GET_Catalog_productOffering_{id}
- Description: Get details of a single Product template and validity dates. If no validity dates are provided, an Product template valid on a current date will be returned.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Single product offering
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productSpecification

- Résumé:  Get a list of product specifications optionally filtering by some criteria  
- OperationId:     GET_Catalog_productSpecification
- Description: Get a list of product specifications optionally filtering by some criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of product specifications matching search criteria
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productSpecification/{id}

- Résumé:  Get details of a single product  
- OperationId:     GET_Catalog_productSpecification_{id}
- Description: Get details of a single product
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: A single product specification
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productTemplate

- Résumé:  Create product template  
- OperationId:     POST_Catalog_productTemplate
- Description: Create product template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductTemplateDto
  - application/xml: ProductTemplateDto
- Réponses:
  - default: Response of the create Product Template
    - application/json: object
    - application/xml: object

#### PUT /api/rest/catalogManagement/productTemplate

- Résumé:  Update product template  
- OperationId:     PUT_Catalog_productTemplate
- Description: Update product template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductTemplateDto
  - application/xml: ProductTemplateDto
- Réponses:
  - default: Response of the update Product Template
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productTemplate/{code}

- Résumé:  Get a single productTemplate by its code and validity dates
- OperationId:     GET_Catalog_productTemplate_{code}
- Description: Get a single productTemplate by its code and validity dates. If no validity dates are provided, a product template valid on a current date will be deleted.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Single productTemplate information
    - application/json: object
    - application/xml: object

#### DELETE /api/rest/catalogManagement/productTemplate/{code}

- Résumé:  Delete a single productTemplate by its code and validity dates
- OperationId:     DELETE_Catalog_productTemplate_{code}
- Description: Delete a single productTemplate by its code and validity dates. If no validity dates are provided, a product template valid on a current date will be deleted.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Response of the remove action
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productTemplate/{code}/disable

- Résumé:  Disable a Product template with a given code  
- OperationId:     POST_Catalog_productTemplate_{code}_disable
- Description: Disable a Product template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Request processing status
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productTemplate/{code}/enable

- Résumé:  Enable a Product template with a given code  
- OperationId:     POST_Catalog_productTemplate_{code}_enable
- Description: Enable a Product template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Request processing status
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalogManagement/productTemplate/createOrUpdate

- Résumé:  Create or update product template  
- OperationId:     POST_Catalog_productTemplate_createOrUpdate
- Description: Create or update product template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductTemplateDto
  - application/xml: ProductTemplateDto
- Réponses:
  - default: Response of the create Product Template
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productTemplate/list

- Résumé:  List all product templates optionally filtering by code and validity dates
- OperationId:     GET_Catalog_productTemplate_list
- Description: List all product templates optionally filtering by code and validity dates. If neither date is provided, validity dates will not be considered. If only validFrom is provided, a search will return products valid on a given date. If only validTo date is provided, a search will return products valid from today to a given date.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: A list of product templates
    - application/json: object
    - application/xml: object

#### GET /api/rest/catalogManagement/productTemplate/listGetAll

- Résumé:  Gets a productTemplates list. 
- OperationId:     GET_Catalog_productTemplate_listGetAll
- Description: Gets a productTemplates list.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Return productTemplates list
    - application/json: GetListProductTemplateResponseDto
    - application/xml: GetListProductTemplateResponseDto

#### GET /api/rest/catalogManagement/version

- Résumé: Get version of application
- OperationId: index_146
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### BomOfferDto
Type: object
Champs obligatoires: bomCode, code, name
Propriétés:
- **bomCode**: string
- **code**: string
- **name**: string
- **description**: string
- **customFields**: Array<CustomFieldDto>
- **prefix**: string
- **servicesToActivate**: Array<ServiceConfigurationDto>
- **productsToActivate**: Array<ServiceConfigurationDto>
- **businessServiceModels**: Array<BSMConfigurationDto>
- **lifeCycleStatusEnum**: string (Valeurs: IN_STUDY, IN_DESIGN, IN_TEST, ACTIVE, LAUNCHED, RETIRED, OBSOLETE, REJECTED)
- **offerTemplateCategories**: Array<OfferTemplateCategoryDto>
- **imageBase64**: string
- **imagePath**: string
- **validFrom**: string (date-time)
- **validTo**: string (date-time)
- **renewalRule**: SubscriptionRenewalDto
- **longDescription**: string
- **longDescriptionsTranslated**: Array<LanguageDescriptionDto>
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **channels**: Array<string>
- **sellers**: Array<string>
- **customerCategories**: Array<string>

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

### ServiceConfigurationDto
Type: object
Champs obligatoires: code
Propriétés:
- **code**: string
- **description**: string
- **customFields**: Array<CustomFieldDto>
- **mandatory**: boolean
- **instantiatedFromBSM**: boolean
- **match**: boolean
- **imageBase64**: string
- **imagePath**: string

### BSMConfigurationDto
Type: object
Propriétés:
- **code**: string
- **serviceConfiguration**: ServiceConfigurationDto

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

### SubscriptionRenewalDto
Type: object
Propriétés:
- **initialTermType**: string — intial term type (Valeurs: RECURRING, CALENDAR, FIXED)
- **renewalTermType**: string — renewal term type (Valeurs: RECURRING, CALENDAR)
- **initialyActiveFor**: integer (int32) — The initial period for which the subscription will be active
- **initialyActiveForUnit**: string — The initial period for which the subscription will be active (Valeurs: MONTH, DAY)
- **calendarInitialyActiveFor**: CalendarDto
- **autoRenew**: boolean — Should subscription be renewed automatically
- **daysNotifyRenewal**: integer (int32) — Number of days before the end of term to trigger notification event
- **endOfTermAction**: string — Whether the Subscription should be suspended or terminated if not renewed (Valeurs: SUSPEND, TERMINATE)
- **terminationReasonCode**: string — terminating subscription if endOfTermAction is to terminate
- **renewFor**: integer (int32) — The period to renew subscription for
- **calendarRenewFor**: CalendarDto
- **renewForUnit**: string — he period to renew subscription for (Valeurs: MONTH, DAY)
- **extendAgreementPeriodToSubscribedTillDate**: boolean — Whether end of agreement date should be matched to the active till date

### CalendarDto
calendar associated to subscription renewal
Type: object
Champs obligatoires: calendarType, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **calendarType**: string — calendar type (Valeurs: YEARLY, DAILY, PERIOD, INTERVAL, INTERSECT, UNION, APPEND, BANKING, FIXED)
- **fixedDates**: Array<string> — list of fixed date
- **days**: Array<DayInYearDto> — list of the day
- **hours**: Array<HourInDayDto> — list of the hour
- **periodLength**: integer (int32) — Period length
- **periodUnit**: string — Period measurement unit (Valeurs: MONTH, DAY_OF_MONTH, HOUR_OF_DAY, MINUTE, SECOND)
- **nbPeriods**: integer (int32) — Number of periods
- **joinCalendar1Code**: string — Code of the first calendar to intersect/union
- **joinCalendar2Code**: string — Code of the second calendar to intersect/union
- **intervalType**: string — Interval type (Valeurs: DAY, HOUR, WDAY)
- **intervals**: Array<CalendarDateIntervalDto> — List of intervals
- **weekendBegin**: integer (int32) — The weekend begin
- **weekendEnd**: integer (int32)
- **endDate**: string (date-time) — The end dat
- **startDate**: string (date-time) — The start date
- **initDateEL**: string — Calendar initialization date - expression to determine a value for calendar initialization date (Contraintes: longueur min: 0 · longueur max: 2000)
- **holidays**: Array<CalendarHolidayDto> — list of the days of holiday
- **languageDescriptions**: Array<LanguageDescriptionDto> — lsit of language description

### DayInYearDto
list of the day
Type: object
Propriétés:
- **day**: integer (int32) — day in the year
- **month**: string — month of the year (Valeurs: JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER)

### HourInDayDto
list of the hour
Type: object
Propriétés:
- **hour**: integer (int32) — hour
- **min**: integer (int32) — minute of the hours

### CalendarDateIntervalDto
List of intervals
Type: object
Propriétés:
- **intervalBegin**: integer (int32) — The interval begin
- **intervalEnd**: integer (int32) — The interval end

### CalendarHolidayDto
list of the days of holiday
Type: object
Propriétés:
- **holidayBegin**: integer (int32) — The holiday begin
- **holidayEnd**: integer (int32) — The holiday end

### BpmProductDto
Type: object
Champs obligatoires: bpmCode, prefix
Propriétés:
- **bpmCode**: string
- **prefix**: string
- **customFields**: Array<CustomFieldDto>

### BsmServiceDto
Type: object
Champs obligatoires: bsmCode, prefix
Propriétés:
- **bsmCode**: string
- **prefix**: string
- **customFields**: Array<CustomFieldDto>
- **imageBase64**: string
- **imagePath**: string

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

### ProductChargeTemplatesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **productChargeTemplates**: Array<ProductChargeTemplateDto>

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

### GetListProductTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **listProductTemplate**: Array<ProductTemplateDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
