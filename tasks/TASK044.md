# TASK044 — Service BusinessServiceModel

## Contexte
Le service « BusinessServiceModel » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%BusinessServiceModel
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/businessServiceModel` |  Search for a business service model with a given code    |     GET_BusinessServiceModel_search |
| POST | `/api/rest/catalog/businessServiceModel` |  Create a new business service model   |     POST_BusinessServiceModel_create |
| PUT | `/api/rest/catalog/businessServiceModel` |  Update an existing business service model   |     PUT_BusinessServiceModel_update |
| DELETE | `/api/rest/catalog/businessServiceModel/{businessServiceModelCode}` |  Remove an existing business service model with a given code    |     DELETE_BusinessServiceModel_{businessServiceModelCode} |
| POST | `/api/rest/catalog/businessServiceModel/createOrUpdate` |  Create new or update an existing business service model   |     POST_BusinessServiceModel_createOrUpdate |
| PUT | `/api/rest/catalog/businessServiceModel/install` |  Install business offer model module   |     PUT_BusinessServiceModel_install |
| GET | `/api/rest/catalog/businessServiceModel/list` |  List business service model   |     GET_BusinessServiceModel_list |
| GET | `/api/rest/catalog/businessServiceModel/listGetAll` |  List Business Service Models matching a given criteria  |     GET_BusinessServiceModel_listGetAll |
| GET | `/api/rest/catalog/businessServiceModel/version` | Get version of application | index_48 |

#### GET /api/rest/catalog/businessServiceModel

- Résumé:  Search for a business service model with a given code   
- OperationId:     GET_BusinessServiceModel_search
- Description: Search for a business service model with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `businessServiceModelCode` (QUERY, optionnel) — string
- Réponses:
  - default: A business servie model
    - application/json: GetBusinessServiceModelResponseDto
    - application/xml: GetBusinessServiceModelResponseDto

#### POST /api/rest/catalog/businessServiceModel

- Résumé:  Create a new business service model  
- OperationId:     POST_BusinessServiceModel_create
- Description: Create a new business service model
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessServiceModelDto
  - application/xml: BusinessServiceModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/businessServiceModel

- Résumé:  Update an existing business service model  
- OperationId:     PUT_BusinessServiceModel_update
- Description: Update an existing business service model
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessServiceModelDto
  - application/xml: BusinessServiceModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/businessServiceModel/{businessServiceModelCode}

- Résumé:  Remove an existing business service model with a given code   
- OperationId:     DELETE_BusinessServiceModel_{businessServiceModelCode}
- Description: Remove an existing business service model with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `businessServiceModelCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/businessServiceModel/createOrUpdate

- Résumé:  Create new or update an existing business service model  
- OperationId:     POST_BusinessServiceModel_createOrUpdate
- Description: Create new or update an existing business service model
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessServiceModelDto
  - application/xml: BusinessServiceModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/businessServiceModel/install

- Résumé:  Install business offer model module  
- OperationId:     PUT_BusinessServiceModel_install
- Description: Install business offer model module
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessServiceModelDto
  - application/xml: BusinessServiceModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/businessServiceModel/list

- Résumé:  List business service model  
- OperationId:     GET_BusinessServiceModel_list
- Description: List business service model
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of business service models
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/catalog/businessServiceModel/listGetAll

- Résumé:  List Business Service Models matching a given criteria 
- OperationId:     GET_BusinessServiceModel_listGetAll
- Description: List Business Service Models matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of Business Service Models
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/catalog/businessServiceModel/version

- Résumé: Get version of application
- OperationId: index_48
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetBusinessServiceModelResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **businessServiceModel**: BusinessServiceModelDto

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

### BusinessServiceModelDto
Type: object
Champs obligatoires: code, serviceTemplate
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
- **serviceTemplate**: ServiceTemplateDto
- **duplicateService**: boolean
- **duplicatePricePlan**: boolean
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

### ServiceTemplateDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **longDescription**: string
- **invoicingCalendar**: string
- **serviceChargeTemplateRecurrings**: ServiceChargeTemplateRecurringsDto
- **serviceChargeTemplateSubscriptions**: ServiceChargeTemplateSubscriptionsDto
- **serviceChargeTemplateTerminations**: ServiceChargeTemplateTerminationsDto
- **serviceChargeTemplateUsages**: ServiceChargeTemplateUsagesDto
- **customFields**: CustomFieldsDto
- **mandatory**: boolean
- **somCode**: string
- **imagePath**: string
- **imageBase64**: string
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **minimumInvoiceSubCategory**: string
- **autoEndOfEngagement**: boolean
- **minimumChargeTemplate**: string
- **renewalRule**: SubscriptionRenewalDto
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **groupedServiceCode**: string
- **values**: Array<object>
- **valueValidator**: string
- **serviceTypeCode**: string
- **display**: boolean
- **param**: string
- **medias**: Array<MediaDto>
- **codeOnly**: boolean

### ServiceChargeTemplateRecurringsDto
Type: object
Propriétés:
- **serviceChargeTemplateRecurring**: Array<ServiceChargeTemplateRecurringDto>

### ServiceChargeTemplateRecurringDto
Type: object
Propriétés:
- **code**: string
- **wallets**: WalletsDto
- **counterTemplate**: string
- **accumulatorCounterTemplates**: CounterTemplatesDto

### WalletsDto
Type: object
Propriétés:
- **wallet**: Array<string>

### CounterTemplatesDto
Type: object
Propriétés:
- **counterTemplate**: Array<string>

### ServiceChargeTemplateSubscriptionsDto
Type: object
Propriétés:
- **serviceChargeTemplateSubscription**: Array<ServiceChargeTemplateSubscriptionDto>

### ServiceChargeTemplateSubscriptionDto
Type: object
Propriétés:
- **code**: string
- **wallets**: WalletsDto
- **counterTemplate**: string
- **accumulatorCounterTemplates**: CounterTemplatesDto

### ServiceChargeTemplateTerminationsDto
Type: object
Propriétés:
- **serviceChargeTemplateTermination**: Array<ServiceChargeTemplateTerminationDto>

### ServiceChargeTemplateTerminationDto
Type: object
Propriétés:
- **code**: string
- **wallets**: WalletsDto
- **counterTemplate**: string
- **accumulatorCounterTemplates**: CounterTemplatesDto

### ServiceChargeTemplateUsagesDto
Type: object
Propriétés:
- **serviceChargeTemplateUsage**: Array<ServiceUsageChargeTemplateDto>

### ServiceUsageChargeTemplateDto
Type: object
Propriétés:
- **code**: string
- **wallets**: WalletsDto
- **counterTemplate**: string
- **accumulatorCounterTemplates**: CounterTemplatesDto

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

### MediaDto
Type: object
Champs obligatoires: label, main, mediaName, mediaType
Propriétés:
- **id**: integer (int64) — id of media
- **code**: string — code of the media
- **description**: string — description
- **mediaName**: string — name of the media
- **label**: string — label of the media
- **main**: boolean — indicate that the media is main
- **mediaType**: string — type of the media (Valeurs: IMAGE, VIDEO, PDF)
- **mediaPath**: string — the path of the media
- **customFields**: CustomFieldsDto

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
