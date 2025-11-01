# TASK067 — Service DataCollector

## Contexte
Le service « DataCollector » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%DataCollector
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/dataCollector` |  Find a data collector with a given code.  |     GET_DataCollector_search |
| POST | `/api/rest/dataCollector` |  Create a new data collector using a DataCollectorDto.  |     POST_DataCollector_create |
| GET | `/api/rest/dataCollector/executeQuery` |  Execute data collector SQL query  |     GET_DataCollector_executeQuery |
| GET | `/api/rest/dataCollector/version` | Get version of application | index_114 |

#### GET /api/rest/dataCollector

- Résumé:  Find a data collector with a given code. 
- OperationId:     GET_DataCollector_search
- Description: Find a data collector with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Data collector information
    - application/json: DataCollectorResponse
    - application/xml: DataCollectorResponse

#### POST /api/rest/dataCollector

- Résumé:  Create a new data collector using a DataCollectorDto. 
- OperationId:     POST_DataCollector_create
- Description: Create a new data collector using a DataCollectorDto.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DataCollectorDto
  - application/xml: DataCollectorDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/dataCollector/executeQuery

- Résumé:  Execute data collector SQL query 
- OperationId:     GET_DataCollector_executeQuery
- Description: Execute data collector SQL query
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/dataCollector/version

- Résumé: Get version of application
- OperationId: index_114
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### DataCollectorResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **dataCollectorDto**: DataCollectorDto

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

### DataCollectorDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **description**: string
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **sqlQuery**: string
- **aliases**: object
- **parameters**: object
- **customTableCode**: string
- **entityTemplateDto**: CustomEntityTemplateDto

### CustomEntityTemplateDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **name**: string
- **storeAsTable**: boolean
- **storeInES**: boolean
- **fields**: Array<CustomFieldTemplateDto>
- **actions**: Array<EntityCustomActionDto>
- **disableable**: boolean
- **versioned**: boolean

### CustomFieldTemplateDto
Type: object
Champs obligatoires: code, fieldType, storageType
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **accountLevel**: string
- **appliesTo**: string
- **defaultValue**: string
- **useInheritedAsDefaultValue**: boolean
- **storageType**: string (Valeurs: SINGLE, LIST, MAP, MATRIX)
- **valueRequired**: boolean
- **uniqueConstraint**: boolean
- **versionable**: boolean
- **triggerEndPeriodEvent**: boolean
- **calendar**: string
- **cacheValueTimeperiod**: integer (int32)
- **entityClazz**: string
- **listValues**: object
- **allowEdit**: boolean
- **hideOnNew**: boolean
- **maxValue**: integer (int64)
- **minValue**: integer (int64)
- **regExp**: string
- **cacheValue**: boolean
- **nbDecimal**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **guiPosition**: string
- **mapKeyType**: string (Valeurs: STRING, LONG, DOUBLE, RON)
- **applicableOnEl**: string
- **matrixColumns**: Array<CustomFieldMatrixColumnDto>
- **childEntityFieldsForSummary**: Array<string>
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **tags**: string
- **displayFormat**: string
- **customTableCodeEL**: string
- **dataFilterEL**: string
- **fieldsEL**: string
- **versionFilterEL**: string

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldMatrixColumnDto
Type: object
Propriétés:
- **columnUse**: string (Valeurs: USE_KEY, USE_VALUE)
- **position**: integer (int32)
- **code**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **label**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **keyType**: string (Valeurs: STRING, LONG, DOUBLE, RON)

### EntityCustomActionDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **appliesTo**: string
- **applicableOnEl**: string
- **label**: string
- **labelsTranslated**: Array<LanguageDescriptionDto>
- **script**: ScriptInstanceDto
- **guiPosition**: string

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
