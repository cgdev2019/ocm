# TASK047 — Service ChargeTemplate

## Contexte
Le service « ChargeTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%ChargeTemplate
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/chargeTemplate` |  Search for a charge template with a given code    |     GET_ChargeTemplate_chargeTemplate |
| GET | `/api/rest/catalog/chargeTemplates/{chargeTemplateCode}` | 	  Search for a charge template with a given code	 	   | GET_ChargeTemplate_chargeTemplates_{chargeTemplateCode} |
| POST | `/api/rest/catalog/chargeTemplates/{chargeTemplateCode}/duplicate` | add duplicate charge template for a given code | POST_ChargeTemplate_chargeTemplates_{chargeTemplateCode} |
| PUT | `/api/rest/catalog/chargeTemplates/{chargeTemplateCode}/status/{status}` | update charge template status for a given code | PUT_ChargeTemplate_chargeTemplates_{chargeTemplateCode} |
| GET | `/api/rest/catalog/version` | Get version of application | index_52 |

#### GET /api/rest/catalog/chargeTemplate

- Résumé:  Search for a charge template with a given code   
- OperationId:     GET_ChargeTemplate_chargeTemplate
- Description: Search for a charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `chargeTemplateCode` (QUERY, optionnel) — string
- Réponses:
  - default: A charge template
    - application/json: GetChargeTemplateResponseDto
    - application/xml: GetChargeTemplateResponseDto

#### GET /api/rest/catalog/chargeTemplates/{chargeTemplateCode}

- Résumé: 	  Search for a charge template with a given code	 	  
- OperationId: GET_ChargeTemplate_chargeTemplates_{chargeTemplateCode}
- Description: Search for a charge template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `chargeTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - default: A charge template
    - application/json: GetChargeTemplateResponseDto
    - application/xml: GetChargeTemplateResponseDto

#### POST /api/rest/catalog/chargeTemplates/{chargeTemplateCode}/duplicate

- Résumé: add duplicate charge template for a given code
- OperationId: POST_ChargeTemplate_chargeTemplates_{chargeTemplateCode}
- Description: add duplicate charge template for a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `chargeTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - default: charge template
    - application/json: GetChargeTemplateResponseDto
    - application/xml: GetChargeTemplateResponseDto

#### PUT /api/rest/catalog/chargeTemplates/{chargeTemplateCode}/status/{status}

- Résumé: update charge template status for a given code
- OperationId: PUT_ChargeTemplate_chargeTemplates_{chargeTemplateCode}
- Description: update charge template status for a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `chargeTemplateCode` (PATH, obligatoire) — string
- `status` (PATH, obligatoire) — string
- Réponses:
  - default: charge template
    - application/json: GetChargeTemplateResponseDto
    - application/xml: GetChargeTemplateResponseDto

#### GET /api/rest/catalog/version

- Résumé: Get version of application
- OperationId: index_52
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetChargeTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **chargeTemplate**: ChargeTemplateDto

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

### ChargeTemplateDto
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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
