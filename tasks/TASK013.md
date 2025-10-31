# TASK013 — Service InvoiceType

## Contexte
Le service « InvoiceType » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%InvoiceType
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/invoiceType` |  Search invoiceType with a given code.   |     GET_InvoiceType_search |
| POST | `/api/rest/invoiceType` |  Create invoiceType. Description per language can be defined   |     POST_InvoiceType_create |
| PUT | `/api/rest/invoiceType` |  Update invoiceType. Description per language can be defined   |     PUT_InvoiceType_update |
| DELETE | `/api/rest/invoiceType/{invoiceTypeCode}` |  Remove invoiceType with a given code.   |     DELETE_InvoiceType_{invoiceTypeCode} |
| POST | `/api/rest/invoiceType/createOrUpdate` |  Create new or update an existing invoiceType with a given code.   |     POST_InvoiceType_createOrUpdate |
| GET | `/api/rest/invoiceType/list` |  List of invoiceType.   |     GET_InvoiceType_list |
| GET | `/api/rest/invoiceType/version` | Get version of application | index_12 |

#### GET /api/rest/invoiceType

- Résumé:  Search invoiceType with a given code.  
- OperationId:     GET_InvoiceType_search
- Description: Search invoiceType with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceTypeCode` (QUERY, optionnel) — string
- Réponses:
  - default: invoice type
    - application/json: GetInvoiceTypeResponse
    - application/xml: GetInvoiceTypeResponse

#### POST /api/rest/invoiceType

- Résumé:  Create invoiceType. Description per language can be defined  
- OperationId:     POST_InvoiceType_create
- Description: Create invoiceType. Description per language can be defined
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceTypeDto
  - application/xml: InvoiceTypeDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/invoiceType

- Résumé:  Update invoiceType. Description per language can be defined  
- OperationId:     PUT_InvoiceType_update
- Description: Update invoiceType. Description per language can be defined
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceTypeDto
  - application/xml: InvoiceTypeDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/invoiceType/{invoiceTypeCode}

- Résumé:  Remove invoiceType with a given code.  
- OperationId:     DELETE_InvoiceType_{invoiceTypeCode}
- Description: Remove invoiceType with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceTypeCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/invoiceType/createOrUpdate

- Résumé:  Create new or update an existing invoiceType with a given code.  
- OperationId:     POST_InvoiceType_createOrUpdate
- Description: Create new or update an existing invoiceType with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceTypeDto
  - application/xml: InvoiceTypeDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/invoiceType/list

- Résumé:  List of invoiceType.  
- OperationId:     GET_InvoiceType_list
- Description: List of invoiceType.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of invoiceType
    - application/json: GetInvoiceTypesResponse
    - application/xml: GetInvoiceTypesResponse

#### GET /api/rest/invoiceType/version

- Résumé: Get version of application
- OperationId: index_12
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetInvoiceTypeResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoiceTypeDto**: InvoiceTypeDto

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

### InvoiceTypeDto
Type: object
Champs obligatoires: code, occTemplateCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **occTemplateCode**: string
- **occTemplateNegativeCode**: string
- **occTemplateCodeEl**: string
- **occTemplateNegativeCodeEl**: string
- **customInvoiceXmlScriptInstanceCode**: string
- **sequenceDto**: SequenceDto
- **invoiceValidationScriptCode**: string
- **sellerSequences**: object
- **appliesTo**: Array<string>
- **matchingAuto**: boolean
- **invoiceAccountable**: boolean
- **billingTemplateName**: string
- **pdfFilenameEL**: string
- **xmlFilenameEL**: string
- **billingTemplateNameEL**: string
- **customFields**: CustomFieldsDto
- **useSelfSequence**: boolean
- **mailingType**: string
- **emailTemplateCode**: string
- **excludeFromAgedTrialBalance**: boolean — Exclude from Aged Trial Balance

### SequenceDto
Type: object
Propriétés:
- **prefixEL**: string
- **invoiceSequenceCode**: string
- **sequenceSize**: integer (int32)
- **currentInvoiceNb**: integer (int64)
- **sequencePattern**: string
- **sequenceType**: string (Valeurs: RUM, CUSTOMER_NO, SEQUENCE, NUMERIC, ALPHA_UP, UUID, REGEXP)

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

### GetInvoiceTypesResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoiceTypesDto**: InvoiceTypesDto

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

### InvoiceTypesDto
Type: object
Propriétés:
- **invoiceTypes**: Array<InvoiceTypeDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
