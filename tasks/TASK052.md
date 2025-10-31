# TASK052 — Service OfferTemplate

## Contexte
Le service « OfferTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%OfferTemplate
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/offerTemplate` |  Search offer template with a given code and validity dates |     GET_OfferTemplate_search |
| POST | `/api/rest/catalog/offerTemplate` |  Create offer template.   |     POST_OfferTemplate_create |
| PUT | `/api/rest/catalog/offerTemplate` |  Update offer template.   |     PUT_OfferTemplate_update |
| POST | `/api/rest/catalog/offerTemplate/{code}/disable` |  Enable a Offer template with a given code   |     POST_OfferTemplate_{code}_disable |
| POST | `/api/rest/catalog/offerTemplate/{code}/enable` |  Create or update offer template based on a given code.   |     POST_OfferTemplate_{code}_enable |
| POST | `/api/rest/catalog/offerTemplate/{offerCode}/addProduct` | Add existing product to an offer | addProduct |
| POST | `/api/rest/catalog/offerTemplate/{offerCode}/dissociateProducts` | dissociate existing product from an offer | dissociateProduct |
| DELETE | `/api/rest/catalog/offerTemplate/{offerTemplateCode}` |  List offerTemplates matching a given criteria   |     DELETE_OfferTemplate_{offerTemplateCode} |
| POST | `/api/rest/catalog/offerTemplate/{offerTemplateCode}/update/status` | — | updateStatus |
| POST | `/api/rest/catalog/offerTemplate/cpq/list` | List offers matching the customer and seller contexts | listPost_3 |
| POST | `/api/rest/catalog/offerTemplate/createOrUpdate` |  Remove offer template with a given code and validity dates |     POST_OfferTemplate_createOrUpdate |
| POST | `/api/rest/catalog/offerTemplate/duplicate/{offerTemplateCode}` | — | duplicateOffer |
| GET | `/api/rest/catalog/offerTemplate/list` |  List Offer templates matching filtering and query criteria or code and validity dates |     GET_OfferTemplate_list |
| POST | `/api/rest/catalog/offerTemplate/list` |  List Offer templates matching a given criteria  |     POST_OfferTemplate_list |
| GET | `/api/rest/catalog/offerTemplate/listGetAll` | — | list_2 |
| PUT | `/api/rest/catalog/offerTemplate/massDisable` |  Disable all offer templates match the filter.   |     PUT_OfferTemplate_massEnable |
| PUT | `/api/rest/catalog/offerTemplate/massEnable` |  Enable all offer templates match the filter.   |     PUT_OfferTemplate_massEnable_1 |
| GET | `/api/rest/catalog/offerTemplate/version` | Get version of application | index_56 |

#### GET /api/rest/catalog/offerTemplate

- Résumé:  Search offer template with a given code and validity dates
- OperationId:     GET_OfferTemplate_search
- Description: Search offer template with a given code and validity dates. If no validity dates are provided, an offer template valid on a current date will be returned.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCode` (QUERY, optionnel) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- `inheritCF` (QUERY, optionnel) — string
  - Valeurs autorisées: INHERIT_NONE, INHERIT_NO_MERGE, INHERIT_MERGED, ACCUMULATED
  - Contraintes: défaut: "INHERIT_NO_MERGE"
- `loadOfferServiceTemplate` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `loadOfferProductTemplate` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `loadServiceChargeTemplate` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `loadProductChargeTemplate` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `loadAllowedDiscountPlan` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- Réponses:
  - 404: Entity OfferTemplate doesn't exist
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: offerTemplateCode paramter is missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Return offerTemplateDto containing offerTemplate
    - application/json: GetOfferTemplateResponseDto
    - application/xml: GetOfferTemplateResponseDto

#### POST /api/rest/catalog/offerTemplate

- Résumé:  Create offer template.  
- OperationId:     POST_OfferTemplate_create
- Description: Create offer template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OfferTemplateDto
  - application/xml: OfferTemplateDto
- Réponses:
  - 200: Create offer template.
    - application/json: ActionStatus
    - application/xml: ActionStatus
  - 302: Offer template already existe
    - application/json: EntityAlreadyExistsException
    - application/xml: EntityAlreadyExistsException
  - 400: Failed creating/deleting image
    - application/json: InvalidImageData
    - application/xml: InvalidImageData
  - 404: one of these entities doesn't exist : BusinessOfferModel, OfferTemplateCategory, ScriptInstance, Seller, Channel, OneShotChargeTemplate, CustomerCategory
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: code of Offer template is missing / imagePath is missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException

#### PUT /api/rest/catalog/offerTemplate

- Résumé:  Update offer template.  
- OperationId:     PUT_OfferTemplate_update
- Description: Update offer template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OfferTemplateDto
  - application/xml: OfferTemplateDto
- Réponses:
  - 302: Offer template already existe
    - application/json: EntityAlreadyExistsException
    - application/xml: EntityAlreadyExistsException
  - 400: Failed creating/deleting image
    - application/json: InvalidImageData
    - application/xml: InvalidImageData
  - 404: one of these entities doesn't exist : BusinessOfferModel, OfferTemplateCategory, ScriptInstance, Seller, Channel, OneShotChargeTemplate, CustomerCategory
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: code of Offer template is missing / imagePath is missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Update offer template.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplate/{code}/disable

- Résumé:  Enable a Offer template with a given code  
- OperationId:     POST_OfferTemplate_{code}_disable
- Description: Enable a Offer template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - 400: Internat error while enabling offer template
    - application/json: BusinessException
    - application/xml: BusinessException
  - 404: OfferTemplate doesn't exist
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: code paramter is missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplate/{code}/enable

- Résumé:  Create or update offer template based on a given code.  
- OperationId:     POST_OfferTemplate_{code}_enable
- Description: Create or update offer template based on a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - 400: Internat error while enabling offer template
    - application/json: BusinessException
    - application/xml: BusinessException
  - 404: OfferTemplate doesn't exist
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: code paramter is missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplate/{offerCode}/addProduct

- Résumé: Add existing product to an offer
- OperationId: addProduct
- Description: Add existing product to an offer
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: ProductOfferTemplateDto
  - application/xml: ProductOfferTemplateDto
- Réponses:
  - 400: Internat error while adding product to offer template
    - application/json: BusinessException
    - application/xml: BusinessException
  - 404: OfferTemplate doesn't exist
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: product code and product id paramters are missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Request processing status and offerTemplate
    - application/json: GetOfferTemplateResponseDto
    - application/xml: GetOfferTemplateResponseDto

#### POST /api/rest/catalog/offerTemplate/{offerCode}/dissociateProducts

- Résumé: dissociate existing product from an offer
- OperationId: dissociateProduct
- Description: dissociate existing product from an offer
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerCode` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Corps de requête:
  - optionnel
  - application/json: Array<string>
  - application/xml: Array<string>
- Réponses:
  - 400: Internat error while dissociate product from offer template
    - application/json: BusinessException
    - application/xml: BusinessException
  - 404: OfferTemplate doesn't exist
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - default: Request processing status and offerTemplate
    - application/json: GetOfferTemplateResponseDto
    - application/xml: GetOfferTemplateResponseDto

#### DELETE /api/rest/catalog/offerTemplate/{offerTemplateCode}

- Résumé:  List offerTemplates matching a given criteria  
- OperationId:     DELETE_OfferTemplate_{offerTemplateCode}
- Description: List offerTemplates matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCode` (PATH, obligatoire) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- Réponses:
  - 404: OfferTemplate doesn't exist
    - application/json: EntityDoesNotExistsException
    - application/xml: EntityDoesNotExistsException
  - 412: offerTemplateCode paramter is missing
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: List of offer templates
    - application/json: object
    - application/xml: object

#### POST /api/rest/catalog/offerTemplate/{offerTemplateCode}/update/status

- Résumé: updateStatus
- OperationId: updateStatus
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCode` (PATH, obligatoire) — string
- `new status` (QUERY, obligatoire) — string
  - Valeurs autorisées: IN_STUDY, IN_DESIGN, IN_TEST, ACTIVE, LAUNCHED, RETIRED, OBSOLETE, REJECTED
- `date valid from` (QUERY, optionnel) — string (date-time)
- `date valid to` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: default response
    - application/json: inconnu
    - application/xml: inconnu

#### POST /api/rest/catalog/offerTemplate/cpq/list

- Résumé: List offers matching the customer and seller contexts
- OperationId: listPost_3
- Description: Get offers matching the customer and seller contexts, it returns offers and their products
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomerContextDTO
  - application/xml: CustomerContextDTO
- Réponses:
  - 200: All offers successfully retrieved
    - application/json: GetListCpqOfferResponseDto
    - application/xml: GetListCpqOfferResponseDto
  - 400: some field doesn't have a valid field name
    - application/json: InvalidParameterException
    - application/xml: InvalidParameterException
  - 404: billingAccountCode does not exist

#### POST /api/rest/catalog/offerTemplate/createOrUpdate

- Résumé:  Remove offer template with a given code and validity dates
- OperationId:     POST_OfferTemplate_createOrUpdate
- Description: Remove offer template with a given code and validity dates. If no validity dates are provided, an offer template valid on a current date will be deleted.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OfferTemplateDto
  - application/xml: OfferTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplate/duplicate/{offerTemplateCode}

- Résumé: duplicateOffer
- OperationId: duplicateOffer
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCode` (PATH, obligatoire) — string : code of the offer that will be duplicate
- `duplicateHierarchy` (QUERY, optionnel) — boolean : copy the hierarchy of the offer
- `preserveCode` (QUERY, optionnel) — boolean : preserve code of offer
- `date valid from` (QUERY, optionnel) — string (date-time)
- `date valid to` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: default response
    - application/json: inconnu
    - application/xml: inconnu

#### GET /api/rest/catalog/offerTemplate/list

- Résumé:  List Offer templates matching filtering and query criteria or code and validity dates
- OperationId:     GET_OfferTemplate_list
- Description: List Offer templates matching filtering and query criteria or code and validity dates. If neither date is provided, validity dates will not be considered. If only validFrom is provided, a search will return offers valid on a given date. If only validTo date is provided, a search will return offers valid from today to a given date.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCode` (QUERY, optionnel) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "code"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- `inheritCF` (QUERY, optionnel) — string
  - Valeurs autorisées: INHERIT_NONE, INHERIT_NO_MERGE, INHERIT_MERGED, ACCUMULATED
  - Contraintes: défaut: "INHERIT_NO_MERGE"
- Réponses:
  - 400: some field doesn't have a valid field name
    - application/json: InvalidParameterException
    - application/xml: InvalidParameterException
  - default: A list of offer templates
    - application/json: GetListOfferTemplateResponseDto
    - application/xml: GetListOfferTemplateResponseDto

#### POST /api/rest/catalog/offerTemplate/list

- Résumé:  List Offer templates matching a given criteria 
- OperationId:     POST_OfferTemplate_list
- Description: List Offer templates matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - 400: some field doesn't have a valid field name
    - application/json: InvalidParameterException
    - application/xml: InvalidParameterException
  - default: List of Offer templates
    - application/json: GetListOfferTemplateResponseDto
    - application/xml: GetListOfferTemplateResponseDto

#### GET /api/rest/catalog/offerTemplate/listGetAll

- Résumé: list_2
- OperationId: list_2
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCode` (QUERY, optionnel) — string
- `validFrom` (QUERY, optionnel) — string (date-time)
- `validTo` (QUERY, optionnel) — string (date-time)
- `inheritCF` (QUERY, optionnel) — string
  - Valeurs autorisées: INHERIT_NONE, INHERIT_NO_MERGE, INHERIT_MERGED, ACCUMULATED
  - Contraintes: défaut: "INHERIT_NO_MERGE"
- Réponses:
  - default: default response
    - application/json: GetListOfferTemplateResponseDto
    - application/xml: GetListOfferTemplateResponseDto

#### PUT /api/rest/catalog/offerTemplate/massDisable

- Résumé:  Disable all offer templates match the filter.  
- OperationId:     PUT_OfferTemplate_massEnable
- Description: Disable all offer templates match the filter.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EnableOfferTemplateDto
  - application/xml: EnableOfferTemplateDto
- Réponses:
  - 400: Internat error while disabling all offer templates match the filter
    - application/json: BusinessException
    - application/xml: BusinessException
  - 412: Filters is required
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/offerTemplate/massEnable

- Résumé:  Enable all offer templates match the filter.  
- OperationId:     PUT_OfferTemplate_massEnable_1
- Description: Enable all offer templates match the filter.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EnableOfferTemplateDto
  - application/xml: EnableOfferTemplateDto
- Réponses:
  - 400: Internat error while enabling all offer templates match the filter
    - application/json: BusinessException
    - application/xml: BusinessException
  - 412: Filters is required
    - application/json: MissingParameterException
    - application/xml: MissingParameterException
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/offerTemplate/version

- Résumé: Get version of application
- OperationId: index_56
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### EntityDoesNotExistsException
Type: object
Propriétés:
- **cause**: object
- **stackTrace**: Array<object>
- **errorCode**: ApiErrorCodeEnum
- **message**: string
- **suppressed**: Array<object>
- **localizedMessage**: string

### ApiErrorCodeEnum
error code
Type: object

### MissingParameterException
Type: object
Propriétés:
- **cause**: object
- **stackTrace**: Array<object>
- **errorCode**: ApiErrorCodeEnum
- **message**: string
- **suppressed**: Array<object>
- **localizedMessage**: string

### GetOfferTemplateResponseDto
Type: object
Champs obligatoires: code, lifeCycleStatus, name
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
- **bomCode**: string — the bom code
- **offerTemplateCategoryCode**: string
- **offerServiceTemplates**: Array<OfferServiceTemplateDto> — list of the offer service templates
- **offerProductTemplates**: Array<OfferProductTemplateDto>
- **offerProducts**: Array<OfferProductsDto> — list of The offer component
- **allowedDiscountPlans**: Array<DiscountPlanDto> — list of The offer product template
- **offerAttributes**: Array<ProductVersionAttributeDTO> — list of attributes
- **attributes**: Array<AttributeDTO>
- **commercialRuleCodes**: Array<string> — list of codes of commercial rules
- **allowedOfferChange**: Array<string> — list of allowed offer change
- **renewalRule**: SubscriptionRenewalDto
- **minimumAmountEl**: string — Expression to determine minimum amount value
- **minimumLabelEl**: string — Expression to determine labe value
- **minimumInvoiceSubCategory**: string — Corresponding to minimum invoice subcategory
- **autoEndOfEngagement**: boolean — indicate end of engagement
- **minimumChargeTemplate**: string — Corresponding to minimum one shot charge template code
- **statusDate**: string (date-time) — last update status datetime
- **isModel**: boolean — allowing to create,update and delete an offer from a model
- **offerModelCode**: string — Offer template code
- **generateQuoteEdrPerProduct**: boolean — allow to generate each edr per product
- **offerTemplate**: OfferTemplateDto
- **tags**: Array<TagDto>
- **actionStatus**: ActionStatus
- **offerChangeRestricted**: boolean
- **documentDto**: DocumentDto
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

### OfferServiceTemplateDto
Type: object
Propriétés:
- **serviceTemplate**: ServiceTemplateDto
- **mandatory**: boolean
- **incompatibleServices**: Array<ServiceTemplateDto>

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

### OfferProductTemplateDto
Type: object
Propriétés:
- **productTemplate**: ProductTemplateDto
- **mandatory**: boolean

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

### OfferProductsDto
Type: object
Champs obligatoires: offerTemplateCode
Propriétés:
- **offerTemplateCode**: string — code of offer template
- **product**: ProductDto
- **allowedDiscountPlans**: Array<DiscountPlanDto> — list of allowed discount plan
- **commercialRules**: Array<CommercialRuleHeaderDTO> — list of commercial rules
- **selectable**: boolean — indicate if offer product is selectable (Contraintes: défaut: true)
- **sequence**: integer (int32) — sequence
- **ruled**: boolean — indicated if offer product is ruled (Contraintes: défaut: false)
- **mandatory**: boolean — indicate of the offer product is mandatory (Contraintes: défaut: false)
- **display**: boolean — indicate if the offer product can be displayed (Contraintes: défaut: true)
- **quantityMin**: integer (int32) — minimun quantity
- **quantityMax**: integer (int32) — maximun quantity
- **quantityDefault**: integer (int32) — default quantity
- **productSet**: string — product set regroup product in the pack

### ProductDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **chargeDate**: string (date-time)
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string
- **criteria2**: string
- **criteria3**: string
- **customFields**: CustomFieldsDto

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

### CommercialRuleHeaderDTO
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **ruleType**: string — rule type (Valeurs: PRE_REQUISITE, INCOMPATIBILITY, REPLACEMENT)
- **ruleEl**: string — rule expression language
- **offerCode**: string — code offer of template
- **productCode**: string — code product
- **productVersion**: integer (int32) — product version
- **attributeCode**: string — code of attribute
- **scope**: string — commercial rule scope (Valeurs: QUOTE, QUOTE_OFFER)
- **tagCode**: string — code tag
- **groupedAttributeCode**: string — code of grouped attribute
- **targetAttributeValue**: string — target attribute value
- **isTarget**: boolean — is commercial rule header is the target, default value is True
- **disabled**: boolean — is commercial rule disabled, default value is false
- **commercialRuleItems**: Array<CommercialRuleItemDTO> — list of commercial rule item

### CommercialRuleItemDTO
list of commercial rule item
Type: object
Propriétés:
- **operator**: string — operator for commercial rule, default value is AND (Valeurs: AND, OR)
- **ruleItemEl**: string — rule item expression language
- **commercialRuleLines**: Array<CommercialRuleLineDTO> — list of commercial rule line

### CommercialRuleLineDTO
list of commercial rule line
Type: object
Propriétés:
- **offerCode**: string — offer code associated to commercial rule line
- **productCode**: string — product code
- **productVersion**: integer (int32) — product version
- **attributeCode**: string — attribute code
- **groupedAttributeCode**: string — grouped attribute code
- **attributeValue**: string — value of the attribute
- **groupedAttributeValue**: string — value of grouped attribute
- **tagCode**: string — tag code
- **operator**: string — operator for commercial rule line (Valeurs: GREATER_THAN, LESS_THAN, EQUAL, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, NOT_EQUAL, EXISTS, CONTAINS, NOT_CONTAINS)

### ProductVersionAttributeDTO
List of the attribute
Type: object
Champs obligatoires: attributeCode, mandatory
Propriétés:
- **id**: integer (int64) — attribute id
- **code**: string — Code of attribute
- **description**: string — description
- **disabled**: boolean — description
- **attributeType**: string — Corresponding to minimum one shot charge template code (Valeurs: INFO, LIST_TEXT, LIST_MULTIPLE_TEXT, LIST_NUMERIC, LIST_MULTIPLE_NUMERIC, TEXT, NUMERIC, INTEGER, DATE, CALENDAR, EMAIL, PHONE, TOTAL, COUNT, EXPRESSION_LANGUAGE, BOOLEAN)
- **allowedValues**: Array<string> — Corresponding to predefined allowed values
- **display**: boolean — diplay the attribute
- **mandatory**: boolean — indicate if the attribute is mandatory
- **selectable**: boolean — indicate if the attribute is selectable
- **ruled**: boolean — indicate if the attribute is ruled
- **unitNbDecimal**: integer (int32) — number of decimal for attribute if the type of attribute is a NUMBER
- **readOnly**: boolean — indicate if the attribute is read only
- **attributeCode**: string — Code of attribute
- **sequence**: integer (int32) — attribute order in the GUI
- **mandatoryWithEl**: string — Indicate if the attribute has a mandatory EL
- **defaultValue**: string — default value for attribute
- **validationType**: string — Validation type (Valeurs: REGEX, EL)
- **validationPattern**: string — Validation pattern
- **validationLabel**: string — Validation label
- **commercialRuleCodes**: Array<string> — list of commercial rule code
- **assignedValue**: object — replaced value
- **chargeTemplateCodes**: Array<string> — list of charge template code
- **priority**: integer (int32) — The lower number, the higher the priority is
- **mediaCodes**: Array<string> — list of media code
- **tagCodes**: Array<string> — list of tag code
- **assignedAttributeCodes**: Array<string> — list of assigned attribute code
- **customFields**: CustomFieldsDto
- **groupedAttributes**: Array<GroupedAttributeDto> — grouped attributes

### GroupedAttributeDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64) — id of the grouped attribute
- **code**: string — code of groupped attribute
- **description**: string — description of the groupped attribute
- **attributes**: Array<AttributeDTO> — list of attributes to display
- **attributeCodes**: Array<string> — list of code of attribute for adding to a groupped attribute
- **display**: boolean — indicate if the groupped attribute should display
- **disabled**: boolean — indicate if the groupped attribute should be disable
- **mandatory**: boolean — indicate if the groupped attribute should be mandatory
- **selectable**: boolean — indicate if the groupped attribute is selectable, the default value is true
- **ruled**: boolean — indicate if the groupped attribute is ruled, the default value is false
- **commercialRuleCodes**: Array<string> — list of code of commercial rule
- **customFields**: CustomFieldsDto
- **sequence**: integer (int32)

### AttributeDTO
list of attributes to display
Type: object
Champs obligatoires: attributeType, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **attributeType**: string — Corresponding to minimum one shot charge template code (Valeurs: INFO, LIST_TEXT, LIST_MULTIPLE_TEXT, LIST_NUMERIC, LIST_MULTIPLE_NUMERIC, TEXT, NUMERIC, INTEGER, DATE, CALENDAR, EMAIL, PHONE, TOTAL, COUNT, EXPRESSION_LANGUAGE, BOOLEAN)
- **allowedValues**: Array<string> — Corresponding to predefined allowed values
- **priority**: integer (int32) — The lower number, the higher the priority is
- **selectable**: boolean — indicate if the attribute is selectable
- **ruled**: boolean — indicate if the attribute is ruled
- **chargeTemplateCodes**: Array<string> — list of charge template code
- **commercialRuleCodes**: Array<string> — list of commercial rule code
- **mediaCodes**: Array<string> — list of media code
- **tagCodes**: Array<string> — list of tag code
- **assignedAttributeCodes**: Array<string> — list of assigned attribute code
- **unitNbDecimal**: integer (int32) — number of decimal for attribute if the type of attribute is a NUMBER
- **customFields**: CustomFieldsDto
- **groupedAttributes**: Array<GroupedAttributeDto>
- **assignedValue**: object — replaced value

### OfferTemplateDto
Type: object
Champs obligatoires: code, lifeCycleStatus, name
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
- **bomCode**: string — the bom code
- **offerTemplateCategoryCode**: string
- **offerServiceTemplates**: Array<OfferServiceTemplateDto> — list of the offer service templates
- **offerProductTemplates**: Array<OfferProductTemplateDto>
- **offerProducts**: Array<OfferProductsDto> — list of The offer component
- **allowedDiscountPlans**: Array<DiscountPlanDto> — list of The offer product template
- **offerAttributes**: Array<ProductVersionAttributeDTO> — list of attributes
- **attributes**: Array<AttributeDTO>
- **commercialRuleCodes**: Array<string> — list of codes of commercial rules
- **mediaCodes**: Array<string> — list of the codes media
- **allowedOfferChange**: Array<string> — list of allowed offer change
- **renewalRule**: SubscriptionRenewalDto
- **minimumAmountEl**: string — Expression to determine minimum amount value
- **minimumLabelEl**: string — Expression to determine labe value
- **minimumInvoiceSubCategory**: string — Corresponding to minimum invoice subcategory
- **autoEndOfEngagement**: boolean — indicate end of engagement
- **minimumChargeTemplate**: string — Corresponding to minimum one shot charge template code
- **tagCodes**: Array<string> — list of tag code
- **statusDate**: string (date-time) — last update status datetime
- **isModel**: boolean — allowing to create,update and delete an offer from a model
- **offerModelCode**: string — Offer template code
- **generateQuoteEdrPerProduct**: boolean — allow to generate each edr per product
- **offerChangeRestricted**: boolean
- **documentDto**: DocumentDto
- **codeOnly**: boolean

### DocumentDto
Type: object
Propriétés:
- **fileName**: string
- **fileType**: string
- **creationDate**: string

### TagDto
Type: object
Champs obligatoires: code, name, tagTypeCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **sellerCode**: string — code of the seller
- **name**: string — name of the tag
- **tagTypeCode**: string — code of the type of the tag
- **parentTagCode**: string — code of the tag parent
- **filterEl**: string — filter expression language

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

### EntityAlreadyExistsException
Type: object
Propriétés:
- **cause**: object
- **stackTrace**: Array<object>
- **errorCode**: ApiErrorCodeEnum
- **message**: string
- **suppressed**: Array<object>
- **localizedMessage**: string

### InvalidImageData
Type: object
Propriétés:
- **cause**: object
- **stackTrace**: Array<object>
- **errorCode**: ApiErrorCodeEnum
- **message**: string
- **suppressed**: Array<object>
- **localizedMessage**: string

### BusinessException
Type: object
Propriétés:
- **cause**: object
- **stackTrace**: Array<object>
- **errorContext**: object
- **message**: string
- **suppressed**: Array<object>
- **localizedMessage**: string

### ProductOfferTemplateDto
Type: object
Champs obligatoires: code, products
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **validFrom**: string (date-time)
- **validTo**: string (date-time)
- **products**: Array<OfferProductsDto>

### CustomerContextDTO
information for customer
Type: object
Propriétés:
- **billingAccountCode**: string — The billing account code
- **sellerTags**: Array<string> — The the seller tags
- **customerTags**: Array<string> — The customer tags
- **contractCode**: string — The contract code
- **requestedTagTypes**: Array<string> — requested tag types
- **pagingAndFiltering**: PagingAndFiltering

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

### GetListCpqOfferResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **offers**: Array<CpqOfferDto>

### CpqOfferDto
Type: object
Champs obligatoires: code, lifeCycleStatus, name
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **bomCode**: string
- **offerServiceTemplates**: Array<OfferServiceTemplateDto>
- **offerProducts**: Array<OfferProductsDto>
- **allowedDiscountPlans**: Array<DiscountPlanDto>
- **tags**: Array<TagDto>
- **attributes**: Array<ProductVersionAttributeDTO>
- **validFrom**: string (date-time)
- **validTo**: string (date-time)
- **name**: string
- **attachments**: Array<DigitalResourceDto>
- **lifeCycleStatus**: string (Valeurs: IN_STUDY, IN_DESIGN, IN_TEST, ACTIVE, LAUNCHED, RETIRED, OBSOLETE, REJECTED)
- **customFields**: CustomFieldsDto

### InvalidParameterException
Type: object
Propriétés:
- **cause**: object
- **stackTrace**: Array<object>
- **errorCode**: ApiErrorCodeEnum
- **message**: string
- **suppressed**: Array<object>
- **localizedMessage**: string

### GetListOfferTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **offerTemplates**: Array<OfferTemplateDto>

### EnableOfferTemplateDto
Type: object
Propriétés:
- **filters**: object — Provided filters to filter Offer Template

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
