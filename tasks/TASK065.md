# TASK065 — Service CustomFieldTemplate

## Contexte
Le service « CustomFieldTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CustomFieldTemplate
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/customFieldTemplate` |  Get custom field definition   |     GET_CustomFieldTemplate_search |
| POST | `/api/rest/customFieldTemplate` |  Define a new custom field   |     POST_CustomFieldTemplate_create |
| PUT | `/api/rest/customFieldTemplate` |  Update existing custom field definition   |     PUT_CustomFieldTemplate_update |
| DELETE | `/api/rest/customFieldTemplate/{customFieldTemplateCode}/{appliesTo}` |  Remove custom field definition given its code and entity it applies to   |     DELETE_CustomFieldTemplate_{customFieldTemplateCode}_{appliesTo} |
| POST | `/api/rest/customFieldTemplate/{customFieldTemplateCode}/{appliesTo}/disable` |  Disable a Custom field template with a given code   |     POST_CustomFieldTemplate_{customFieldTemplateCode}_{appliesTo}_disable |
| POST | `/api/rest/customFieldTemplate/{customFieldTemplateCode}/{appliesTo}/enable` |  Enable a Custom field template with a given code   |     POST_CustomFieldTemplate_{customFieldTemplateCode}_{appliesTo}_enable |
| POST | `/api/rest/customFieldTemplate/createOrUpdate` |  Define new or update existing custom field definition   |     POST_CustomFieldTemplate_createOrUpdate |
| GET | `/api/rest/customFieldTemplate/version` | Get version of application | index_110 |

#### GET /api/rest/customFieldTemplate

- Résumé:  Get custom field definition  
- OperationId:     GET_CustomFieldTemplate_search
- Description: Get custom field definition
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customFieldTemplateCode` (QUERY, optionnel) — string
- `appliesTo` (QUERY, optionnel) — string
- Réponses:
  - default: instance of GetCustomFieldTemplateReponseDto
    - application/json: GetCustomFieldTemplateReponseDto
    - application/xml: GetCustomFieldTemplateReponseDto

#### POST /api/rest/customFieldTemplate

- Résumé:  Define a new custom field  
- OperationId:     POST_CustomFieldTemplate_create
- Description: Define a new custom field
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomFieldTemplateDto
  - application/xml: CustomFieldTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/customFieldTemplate

- Résumé:  Update existing custom field definition  
- OperationId:     PUT_CustomFieldTemplate_update
- Description: Update existing custom field definition
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomFieldTemplateDto
  - application/xml: CustomFieldTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/customFieldTemplate/{customFieldTemplateCode}/{appliesTo}

- Résumé:  Remove custom field definition given its code and entity it applies to  
- OperationId:     DELETE_CustomFieldTemplate_{customFieldTemplateCode}_{appliesTo}
- Description: Remove custom field definition given its code and entity it applies to
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customFieldTemplateCode` (PATH, obligatoire) — string
- `appliesTo` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customFieldTemplate/{customFieldTemplateCode}/{appliesTo}/disable

- Résumé:  Disable a Custom field template with a given code  
- OperationId:     POST_CustomFieldTemplate_{customFieldTemplateCode}_{appliesTo}_disable
- Description: Disable a Custom field template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customFieldTemplateCode` (PATH, obligatoire) — string
- `appliesTo` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customFieldTemplate/{customFieldTemplateCode}/{appliesTo}/enable

- Résumé:  Enable a Custom field template with a given code  
- OperationId:     POST_CustomFieldTemplate_{customFieldTemplateCode}_{appliesTo}_enable
- Description: Enable a Custom field template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customFieldTemplateCode` (PATH, obligatoire) — string
- `appliesTo` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customFieldTemplate/createOrUpdate

- Résumé:  Define new or update existing custom field definition  
- OperationId:     POST_CustomFieldTemplate_createOrUpdate
- Description: Define new or update existing custom field definition
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomFieldTemplateDto
  - application/xml: CustomFieldTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/customFieldTemplate/version

- Résumé: Get version of application
- OperationId: index_110
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetCustomFieldTemplateReponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **customFieldTemplate**: CustomFieldTemplateDto

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
