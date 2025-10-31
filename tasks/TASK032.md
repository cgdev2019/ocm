# TASK032 — Service Files

## Contexte
Le service « Files » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Files
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/admin/files` |  Get the list of files in a specific directory  |     GET_Files_search |
| GET | `/api/rest/admin/files/all` |  Get the list of files   |     GET_Files_all |
| POST | `/api/rest/admin/files/createDir` |  Create a directory  |     POST_Files_createDir |
| GET | `/api/rest/admin/files/downloadFile` |  Download file with a given file name.  |     GET_Files_downloadFile |
| POST | `/api/rest/admin/files/suppressDirectory` |  Suppress the directory   |     POST_Files_suppressDirectory |
| POST | `/api/rest/admin/files/suppressFile` |  Suppress the file   |     POST_Files_suppressFile |
| POST | `/api/rest/admin/files/upload` |  Upload the file form.  |     POST_Files_upload |
| POST | `/api/rest/admin/files/uploadFileBase64` |  Upload the file with the specific file data in 64 base.  |     POST_Files_uploadFileBase64 |
| POST | `/api/rest/admin/files/uploadZippedFileBase64` |  Upload the zipped file with the file data.   |     POST_Files_uploadZippedFileBase64 |
| GET | `/api/rest/admin/files/version` | Get version of application | index_36 |
| POST | `/api/rest/admin/files/zipDirectory` |  Will make a archive of a directory   |     POST_Files_zipDirectory |
| POST | `/api/rest/admin/files/zipFile` |  Will make a archive of a file  |     POST_Files_zipFile |

#### GET /api/rest/admin/files

- Résumé:  Get the list of files in a specific directory 
- OperationId:     GET_Files_search
- Description: Get the list of files in a specific directory
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dir` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: GetFilesResponseDto
    - application/xml: GetFilesResponseDto

#### GET /api/rest/admin/files/all

- Résumé:  Get the list of files  
- OperationId:     GET_Files_all
- Description: Get the list of files
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of all files
    - application/json: GetFilesResponseDto
    - application/xml: GetFilesResponseDto

#### POST /api/rest/admin/files/createDir

- Résumé:  Create a directory 
- OperationId:     POST_Files_createDir
- Description: Create a directory
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/admin/files/downloadFile

- Résumé:  Download file with a given file name. 
- OperationId:     GET_Files_downloadFile
- Description: Download file with a given file name.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `file` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/suppressDirectory

- Résumé:  Suppress the directory  
- OperationId:     POST_Files_suppressDirectory
- Description: Suppress the directory
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/suppressFile

- Résumé:  Suppress the file  
- OperationId:     POST_Files_suppressFile
- Description: Suppress the file
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/upload

- Résumé:  Upload the file form. 
- OperationId:     POST_Files_upload
- Description: Upload the file form.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: FileUploadForm
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/uploadFileBase64

- Résumé:  Upload the file with the specific file data in 64 base. 
- OperationId:     POST_Files_uploadFileBase64
- Description: Upload the file with the specific file data in 64 base.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FileRequestDto
  - application/xml: FileRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/uploadZippedFileBase64

- Résumé:  Upload the zipped file with the file data.  
- OperationId:     POST_Files_uploadZippedFileBase64
- Description: Upload the zipped file with the file data.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FileRequestDto
  - application/xml: FileRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/admin/files/version

- Résumé: Get version of application
- OperationId: index_36
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/zipDirectory

- Résumé:  Will make a archive of a directory  
- OperationId:     POST_Files_zipDirectory
- Description: Will make a archive of a directory
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/files/zipFile

- Résumé:  Will make a archive of a file 
- OperationId:     POST_Files_zipFile
- Description: Will make a archive of a file
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetFilesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **files**: Array<FileDto>

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

### FileDto
Type: object
Propriétés:
- **name**: string
- **lastModified**: string (date-time)
- **directory**: boolean

### FileUploadForm
Type: object
Propriétés:
- **data**: Array<string (byte)>
- **filename**: string
- **fileFormat**: string

### FileRequestDto
Type: object
Champs obligatoires: content, filepath
Propriétés:
- **filepath**: string
- **content**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
