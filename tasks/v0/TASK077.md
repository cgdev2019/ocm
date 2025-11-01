# TASK077 — Service ImportExport

## Contexte
Le service « ImportExport » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%ImportExport
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/importExport/checkImportDataResult` |  Check for execution results for a given execution identifier   |     GET_ImportExport_checkImportDataResult |
| POST | `/api/rest/importExport/exportData` |  export data   |     POST_ImportExport_exportData |
| POST | `/api/rest/importExport/exportDataFromEntityList` |  export Data From Entity List   |     POST_ImportExport_exportDataFromEntityList |
| POST | `/api/rest/importExport/generateEntityList` |  returns an entity list CSV  |     POST_ImportExport_generateEntityList |
| POST | `/api/rest/importExport/importData` |  Send a file to be imported. ImportExportResponseDto.executionId contains   |     POST_ImportExport_importData |
| GET | `/api/rest/importExport/version` | Get version of application | index_124 |

#### GET /api/rest/importExport/checkImportDataResult

- Résumé:  Check for execution results for a given execution identifier  
- OperationId:     GET_ImportExport_checkImportDataResult
- Description: Check for execution results for a given execution identifier
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `executionId` (QUERY, optionnel) — string
- Réponses:
  - default: the execution result
    - application/json: ImportExportResponseDto
    - application/xml: ImportExportResponseDto

#### POST /api/rest/importExport/exportData

- Résumé:  export data  
- OperationId:     POST_ImportExport_exportData
- Description: export data
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: ImportExportRequestDto
  - application/json: ImportExportRequestDto
- Réponses:
  - default: ImportExportResponseDto response
    - application/json: ImportExportResponseDto
    - application/xml: ImportExportResponseDto

#### POST /api/rest/importExport/exportDataFromEntityList

- Résumé:  export Data From Entity List  
- OperationId:     POST_ImportExport_exportDataFromEntityList
- Description: export Data From Entity List
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: MultipartFormDataInput
- Réponses:
  - default: ImportExportResponseDto response
    - application/json: ImportExportResponseDto
    - application/xml: ImportExportResponseDto

#### POST /api/rest/importExport/generateEntityList

- Résumé:  returns an entity list CSV 
- OperationId:     POST_ImportExport_generateEntityList
- Description: returns an entity list CSV
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: ImportExportRequestDto
  - application/json: ImportExportRequestDto
- Réponses:
  - default: type ImportExportResponseDto.class s an entity list CSV
    - application/json: ImportExportResponseDto
    - application/xml: ImportExportResponseDto

#### POST /api/rest/importExport/importData

- Résumé:  Send a file to be imported. ImportExportResponseDto.executionId contains  
- OperationId:     POST_ImportExport_importData
- Description: Send a file to be imported. ImportExportResponseDto.executionId contains
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: MultipartFormDataInput
- Réponses:
  - default: As import is async process, ImportExportResponseDto.executionId contains and ID to be used to query for execution results via a call to/importExport/checkImportDataResult?id=..
    - application/json: ImportExportResponseDto
    - application/xml: ImportExportResponseDto

#### GET /api/rest/importExport/version

- Résumé: Get version of application
- OperationId: index_124
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### ImportExportResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **executionId**: string
- **summary**: object
- **importResultDto**: Array<ImportResultDto>
- **fieldsNotImported**: object
- **exceptionMessage**: string
- **failureMessageKey**: string
- **failureMessage**: string
- **failed**: boolean
- **done**: boolean

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

### ImportResultDto
Type: object
Propriétés:
- **name**: string
- **code**: string
- **status**: string

### FieldsNotImportedStringCollectionDto
Type: object
Propriétés:
- **fieldsNotImported**: Array<string>

### ImportExportRequestDto
Type: object
Propriétés:
- **exportType**: string
- **instanceCode**: string
- **fileName**: string
- **entityToExport**: string

### MultipartFormDataInput
Type: object
Propriétés:
- **formData**: object
- **formDataMap**: object
- **preamble**: string
- **parts**: Array<InputPart>

### InputPart
Type: object
Propriétés:
- **contentTypeFromMessage**: boolean
- **bodyAsString**: string
- **mediaType**: object
- **headers**: object

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
