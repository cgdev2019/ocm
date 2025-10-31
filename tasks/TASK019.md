# TASK019 — Service Provider

## Contexte
Le service « Provider » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Provider
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/provider` |  Retrieve provider information.   |     GET_Provider_search |
| POST | `/api/rest/provider` |  Create provider. Deprecated in v. 4.5. Use updateProvider() instead.   |     POST_Provider_create |
| PUT | `/api/rest/provider` |  Update provider.   |     PUT_Provider_update |
| DELETE | `/api/rest/provider/{providerCode}` |  Remove a tenant   |     DELETE_Provider_{providerCode} |
| POST | `/api/rest/provider/createOrUpdate` |  Create or update a provider if it doesn't exists. Deprecated in v. 4.5. Use updateProvider() instead.   |     POST_Provider_createOrUpdate |
| POST | `/api/rest/provider/createTenant` |  Register a new tenant   |     POST_Provider_createTenant |
| GET | `/api/rest/provider/findProviderCF` |  Find a provider Cf with a given provider code.  |     GET_Provider_findProviderCF |
| GET | `/api/rest/provider/getCustomerAccountConfiguration` |  Returns list of payment method and credit categories.   |     GET_Provider_getCustomerAccountConfiguration |
| GET | `/api/rest/provider/getCustomerConfiguration` |  Returns list of customer brands, categories and titles.   |     GET_Provider_getCustomerConfiguration |
| GET | `/api/rest/provider/getInvoicingConfiguration` |  Returns list of invoicing configuration (calendars, taxes, invoice categories, invoice sub categories, billing cycles and termination reasons |     GET_Provider_getInvoicingConfiguration |
| GET | `/api/rest/provider/getTradingConfiguration` |  Returns list of trading countries, currencies and languages.   |     GET_Provider_getTradingConfiguration |
| GET | `/api/rest/provider/listTenants` |  List tenants   |     GET_Provider_listTenants |
| PUT | `/api/rest/provider/updateProviderCF` |  Update a provider CF.  |     PUT_Provider_updateProviderCF |
| GET | `/api/rest/provider/version` | Get version of application | index_17 |

#### GET /api/rest/provider

- Résumé:  Retrieve provider information.  
- OperationId:     GET_Provider_search
- Description: Retrieve provider information.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Provider information
    - application/json: GetProviderResponse
    - application/xml: GetProviderResponse

#### POST /api/rest/provider

- Résumé:  Create provider. Deprecated in v. 4.5. Use updateProvider() instead.  
- OperationId:     POST_Provider_create
- Description: Create provider. Deprecated in v. 4.5. Use updateProvider() instead.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderDto
  - application/xml: ProviderDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/provider

- Résumé:  Update provider.  
- OperationId:     PUT_Provider_update
- Description: Update provider.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderDto
  - application/xml: ProviderDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/provider/{providerCode}

- Résumé:  Remove a tenant  
- OperationId:     DELETE_Provider_{providerCode}
- Description: Remove a tenant
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerCode` (PATH, obligatoire) — string
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/provider/createOrUpdate

- Résumé:  Create or update a provider if it doesn't exists. Deprecated in v. 4.5. Use updateProvider() instead.  
- OperationId:     POST_Provider_createOrUpdate
- Description: Create or update a provider if it doesn't exists. Deprecated in v. 4.5. Use updateProvider() instead.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderDto
  - application/xml: ProviderDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/provider/createTenant

- Résumé:  Register a new tenant  
- OperationId:     POST_Provider_createTenant
- Description: Register a new tenant
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderDto
  - application/xml: ProviderDto
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/provider/findProviderCF

- Résumé:  Find a provider Cf with a given provider code. 
- OperationId:     GET_Provider_findProviderCF
- Description: Find a provider Cf with a given provider code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerCode` (QUERY, optionnel) — string
- Réponses:
  - default: provider if exists
    - application/json: GetProviderResponse
    - application/xml: GetProviderResponse

#### GET /api/rest/provider/getCustomerAccountConfiguration

- Résumé:  Returns list of payment method and credit categories.  
- OperationId:     GET_Provider_getCustomerAccountConfiguration
- Description: Returns list of payment method and credit categories.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerCode` (QUERY, optionnel) — string
- Réponses:
  - default: customer account configuration
    - application/json: GetCustomerAccountConfigurationResponseDto
    - application/xml: GetCustomerAccountConfigurationResponseDto

#### GET /api/rest/provider/getCustomerConfiguration

- Résumé:  Returns list of customer brands, categories and titles.  
- OperationId:     GET_Provider_getCustomerConfiguration
- Description: Returns list of customer brands, categories and titles.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerCode` (QUERY, optionnel) — string
- Réponses:
  - default: customer configuration
    - application/json: GetCustomerConfigurationResponseDto
    - application/xml: GetCustomerConfigurationResponseDto

#### GET /api/rest/provider/getInvoicingConfiguration

- Résumé:  Returns list of invoicing configuration (calendars, taxes, invoice categories, invoice sub categories, billing cycles and termination reasons
- OperationId:     GET_Provider_getInvoicingConfiguration
- Description: Returns list of invoicing configuration (calendars, taxes, invoice categories, invoice sub categories, billing cycles and termination reasons.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerCode` (QUERY, optionnel) — string
- Réponses:
  - default: invoicing configuration
    - application/json: GetInvoicingConfigurationResponseDto
    - application/xml: GetInvoicingConfigurationResponseDto

#### GET /api/rest/provider/getTradingConfiguration

- Résumé:  Returns list of trading countries, currencies and languages.  
- OperationId:     GET_Provider_getTradingConfiguration
- Description: Returns list of trading countries, currencies and languages.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerCode` (QUERY, optionnel) — string
- Réponses:
  - default: trading configuration.
    - application/json: GetTradingConfigurationResponseDto
    - application/xml: GetTradingConfigurationResponseDto

#### GET /api/rest/provider/listTenants

- Résumé:  List tenants  
- OperationId:     GET_Provider_listTenants
- Description: List tenants
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of Tenant/provider data
    - application/json: ProvidersDto
    - application/xml: ProvidersDto

#### PUT /api/rest/provider/updateProviderCF

- Résumé:  Update a provider CF. 
- OperationId:     PUT_Provider_updateProviderCF
- Description: Update a provider CF.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderDto
  - application/xml: ProviderDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/provider/version

- Résumé: Get version of application
- OperationId: index_17
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetProviderResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **provider**: ProviderDto

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

### ProviderDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **currency**: string
- **country**: string
- **language**: string
- **multiCurrency**: boolean
- **multiCountry**: boolean
- **multiLanguage**: boolean
- **userAccount**: string
- **enterprise**: boolean
- **levelDuplication**: boolean
- **rounding**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **invoiceRounding**: integer (int32)
- **invoiceRoundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **prepaidReservationExpirationDelayinMillisec**: integer (int64)
- **discountAccountingCode**: string
- **email**: string
- **bankCoordinates**: BankCoordinatesDto
- **paymentPlanPolicy**: PaymentPlanPolicyDto
- **recognizeRevenue**: boolean
- **invoiceConfiguration**: InvoiceConfigurationDto
- **customFields**: CustomFieldsDto
- **cdrDeduplicationKeyEL**: string

### BankCoordinatesDto
Bank account information
Type: object
Champs obligatoires: accountNumber, accountOwner, bankCode, bankName, bic, branchCode, iban, key
Propriétés:
- **bankCode**: string — The bank code (Contraintes: longueur min: 0 · longueur max: 5)
- **branchCode**: string — The branch code (Contraintes: longueur min: 0 · longueur max: 5)
- **accountNumber**: string — The account number (Contraintes: longueur min: 0 · longueur max: 11)
- **key**: string — The key (Contraintes: longueur min: 0 · longueur max: 2)
- **iban**: string — The iban (Contraintes: longueur min: 0 · longueur max: 34)
- **bic**: string — The bic (Contraintes: longueur min: 0 · longueur max: 11)
- **accountOwner**: string — The account owner (Contraintes: longueur min: 0 · longueur max: 50)
- **bankName**: string — The bank name (Contraintes: longueur min: 0 · longueur max: 50)
- **bankId**: string — The bank id (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerNumber**: string — The issuer number (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerName**: string — The issuer name (Contraintes: longueur min: 0 · longueur max: 50)
- **ics**: string — The ics (Contraintes: longueur min: 0 · longueur max: 35)
- **empty**: boolean

### PaymentPlanPolicyDto
Type: object
Propriétés:
- **defaultInstallmentCount**: integer (int32)
- **maxPaymentPlanDuration**: integer (int32)
- **defaultFeePerInstallmentPlan**: integer (int32)
- **installmentAmountRounding**: integer (int32)
- **defaultInterestRate**: integer (int32)
- **minAllowedReceivableAmount**: number
- **maxAllowedReceivableAmount**: number
- **minInstallmentAmount**: number
- **theresHoldForApproval**: number
- **splitEvenly**: boolean
- **allowCustomInstallmentPlan**: boolean
- **addInterestRate**: boolean
- **addInstallmentFee**: boolean
- **defaultBlockPayments**: boolean
- **requireInternalApproval**: boolean
- **defaultRecurrenceUnit**: string (Valeurs: MONTH, DAY)
- **actionOnRemainingAmount**: string (Valeurs: FIRST, LAST, ADDITIONAL)
- **clearingPriority**: string (Valeurs: NEWEST, OLDEST, SMALLEST, BIGGEST)
- **allowedPaymentMethods**: Array<string>
- **dunningDefaultPauseReason**: integer (int64)
- **defaultStartingDateOfPlan**: string (Valeurs: TODAY, LAST_DAY_OF_CURRENT_MONTH, FIRST_DAY_OF_NEXT_MONTH)
- **allowedCreditCategories**: Array<integer (int64)>

### InvoiceConfigurationDto
Type: object
Propriétés:
- **displaySubscriptions**: boolean
- **displayServices**: boolean
- **displayOffers**: boolean
- **displayEdrs**: boolean
- **displayProvider**: boolean
- **displayCfAsXML**: boolean
- **displayPricePlans**: boolean
- **displayDetail**: boolean
- **displayChargesPeriods**: boolean
- **displayBillingCycle**: boolean
- **displayFreeTransacInInvoice**: boolean
- **displayOrders**: boolean
- **currentInvoiceNb**: integer (int64)
- **displayWalletOperations**: boolean
- **defaultInvoiceSubcategoryCode**: string
- **defaultGenericArticleCode**: string
- **defaultDiscountArticleCode**: string
- **defaultAdvancedPaymentArticleCode**: string
- **defaultInvoiceMinimumArticleCode**: string
- **displayUserAccountHierarchy**: boolean
- **displayTaxDetails**: boolean

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

### GetCustomerAccountConfigurationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paymentMethods**: Array<string>
- **creditCategories**: CreditCategoriesDto

### CreditCategoriesDto
Type: object
Propriétés:
- **creditCategory**: Array<CreditCategoryDto>

### CreditCategoryDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **languageDescriptions**: Array<LanguageDescriptionDto>

### GetCustomerConfigurationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **customerBrands**: CustomerBrandsDto
- **customerCategories**: CustomerCategoriesDto
- **titles**: TitlesDto

### CustomerBrandsDto
Type: object
Propriétés:
- **customerBrand**: Array<CustomerBrandDto>

### CustomerBrandDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code

### CustomerCategoriesDto
Type: object
Propriétés:
- **customerCategory**: Array<CustomerCategoryDto>

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

### TitlesDto
Type: object
Propriétés:
- **title**: Array<TitleDto>

### TitleDto
The legal entity type
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **isCompany**: boolean — indicate if the title is a company (Contraintes: défaut: false)
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description

### GetInvoicingConfigurationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **calendars**: CalendarsDto
- **taxes**: TaxesDto
- **invoiceCategories**: InvoiceCategoriesDto
- **invoiceSubCategories**: InvoiceSubCategoriesDto
- **billingCycles**: BillingCyclesDto
- **terminationReasons**: TerminationReasonsDto

### CalendarsDto
Type: object
Propriétés:
- **calendar**: Array<CalendarDto>

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

### TaxesDto
Type: object
Propriétés:
- **tax**: Array<TaxDto>

### TaxDto
Tax applied
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **percent**: number
- **accountingCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto
- **composite**: boolean
- **subTaxes**: Array<TaxDto>

### InvoiceCategoriesDto
Type: object
Propriétés:
- **invoiceCategory**: Array<InvoiceCategoryDto>

### InvoiceCategoryDto
Type: object
Champs obligatoires: code, occTemplateCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **occTemplateCode**: string
- **occTemplateNegativeCode**: string
- **customFields**: CustomFieldsDto
- **sortIndex**: integer (int32)

### InvoiceSubCategoriesDto
Type: object
Propriétés:
- **invoiceSubCategory**: Array<InvoiceSubCategoryDto>

### InvoiceSubCategoryDto
Type: object
Champs obligatoires: accountingCode, code, invoiceCategory, occTemplateCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **invoiceCategory**: string
- **accountingCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto
- **occTemplateCode**: string
- **occTemplateNegativeCode**: string
- **sortIndex**: integer (int32)

### BillingCyclesDto
Type: object
Propriétés:
- **billingCycle**: Array<BillingCycleDto>

### BillingCycleDto
Type: object
Champs obligatoires: calendar, code, invoiceDateDelayEL
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **billingTemplateName**: string
- **billingTemplateNameEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceDateDelay**: integer (int32)
- **invoiceDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **dueDateDelay**: integer (int32)
- **dueDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceDateProductionDelay**: integer (int32)
- **invoiceDateProductionDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **lastTransactionDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **lastTransactionDateEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **calendar**: string
- **invoicingThreshold**: number
- **splitPerPaymentMethod**: boolean
- **invoiceTypeCode**: string
- **invoiceTypeEl**: string
- **customFields**: CustomFieldsDto
- **type**: string (Valeurs: BILLINGACCOUNT, SUBSCRIPTION, ORDER)
- **referenceDate**: string (Valeurs: TODAY, NEXT_INVOICE_DATE, LAST_TRANSACTION_DATE, END_DATE)
- **scriptInstanceCode**: string
- **checkThreshold**: string (Valeurs: BEFORE_DISCOUNT, AFTER_DISCOUNT, POSITIVE_RT, POSITIVE_IL)
- **collectionDateDelayEl**: string
- **computeDatesAtValidation**: boolean
- **thresholdPerEntity**: boolean
- **billingRunValidationScriptCode**: string
- **filters**: object
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **lastTransactionDateDelay**: integer (int32)
- **transactionDateDelayEL**: string

### TerminationReasonsDto
Type: object
Propriétés:
- **terminationReason**: Array<TerminationReasonDto>

### TerminationReasonDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **applyAgreement**: boolean
- **invoiceAgreementImmediately**: boolean
- **applyReimbursment**: boolean
- **applyTerminationCharges**: boolean
- **overrideProrata**: string (Valeurs: NO_OVERRIDE, PRORATA, NO_PRORATA)
- **reimburseOneshots**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### GetTradingConfigurationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **countries**: CountriesDto
- **currencies**: CurrenciesDto
- **languages**: LanguagesDto

### CountriesDto
Type: object
Propriétés:
- **country**: Array<CountryDto>

### CountryDto
Type: object
Champs obligatoires: currencyCode
Propriétés:
- **countryCode**: string
- **name**: string
- **currencyCode**: string
- **languageCode**: string
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### CurrenciesDto
Type: object
Propriétés:
- **currency**: Array<CurrencyDto>

### CurrencyDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **description**: string
- **disabled**: boolean
- **prCurrencyToThis**: number
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **symbol**: string
- **decimalPlaces**: integer (int32)

### LanguagesDto
Type: object
Propriétés:
- **language**: Array<LanguageDto>

### LanguageDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### ProvidersDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **providers**: Array<ProviderDto>

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
