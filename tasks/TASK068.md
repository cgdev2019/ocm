# TASK068 — Service DocumentSign

## Contexte
Le service « DocumentSign » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%DocumentSign
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/document/sign/files/{id}/download` |  Download the files with the given id  |     GET _DocumentSign_files_{id}_download  |
| POST | `/api/rest/document/sign/procedures` |  Creates the procedure.  |     POST _DocumentSign_procedures  |
| GET | `/api/rest/document/sign/procedures/{id}` |  Gets the procedure by id.  |     GET _DocumentSign_procedures_{id}  |
| GET | `/api/rest/document/sign/procedures/{id}/status` |  Gets the procedure status by id.  |     GET _DocumentSign_procedures_{id}_status  |
| GET | `/api/rest/document/sign/version` | Get version of application | index_115 |

#### GET /api/rest/document/sign/files/{id}/download

- Résumé:  Download the files with the given id 
- OperationId:     GET _DocumentSign_files_{id}_download 
- Description: Download the files with the given id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- Réponses:
  - default: the file by id
    - application/json: SignFileResponseDto
    - application/xml: SignFileResponseDto

#### POST /api/rest/document/sign/procedures

- Résumé:  Creates the procedure. 
- OperationId:     POST _DocumentSign_procedures 
- Description: Creates the procedure.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CreateProcedureRequestDto
  - application/xml: CreateProcedureRequestDto
- Réponses:
  - default: the sign procedure response dto
    - application/json: SignProcedureResponseDto
    - application/xml: SignProcedureResponseDto

#### GET /api/rest/document/sign/procedures/{id}

- Résumé:  Gets the procedure by id. 
- OperationId:     GET _DocumentSign_procedures_{id} 
- Description: Gets the procedure by id.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- Réponses:
  - default: the procedure by id
    - application/json: SignProcedureResponseDto
    - application/xml: SignProcedureResponseDto

#### GET /api/rest/document/sign/procedures/{id}/status

- Résumé:  Gets the procedure status by id. 
- OperationId:     GET _DocumentSign_procedures_{id}_status 
- Description: Gets the procedure status by id.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- Réponses:
  - default: the procedure status by id
    - application/json: RawResponseDto
    - application/xml: RawResponseDto

#### GET /api/rest/document/sign/version

- Résumé: Get version of application
- OperationId: index_115
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### SignFileResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **id**: string
- **name**: string
- **description**: string
- **content**: Array<string (byte)>

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

### CreateProcedureRequestDto
Type: object
Propriétés:
- **absolutePaths**: boolean
- **withInternalMember**: boolean
- **filesToSign**: Array<SignFileRequestDto>
- **procedure**: SignProcedureDto

### SignFileRequestDto
Type: object
Propriétés:
- **id**: string
- **name**: string
- **filePath**: string
- **position**: integer (int32)
- **internalPosition**: string
- **externalPosition**: string
- **internalPage**: integer (int32)
- **externalPage**: integer (int32)
- **content**: Array<string (byte)>
- **listExternalPositions**: Array<SignFileObjectRequestDto>

### SignFileObjectRequestDto
Type: object
Propriétés:
- **position**: string
- **page**: integer (int32)
- **file**: string

### SignProcedureDto
Type: object
Propriétés:
- **id**: string
- **name**: string
- **description**: string
- **start**: boolean
- **members**: Array<SignMemberRequestDto>
- **config**: SignProcedureConfigDto

### SignMemberRequestDto
Type: object
Propriétés:
- **id**: string
- **firstname**: string
- **lastname**: string
- **email**: string
- **phone**: string
- **user**: string
- **internal**: boolean
- **fileObjects**: Array<SignFileObjectRequestDto>

### SignProcedureConfigDto
Type: object
Propriétés:
- **email**: object
- **webhook**: object

### SignEventEmailDto
Type: object
Propriétés:
- **subject**: string
- **message**: string
- **to**: Array<string>

### SignEventWebhookDto
Type: object
Propriétés:
- **url**: string
- **method**: string
- **headers**: object

### SignProcedureResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **id**: string
- **name**: string
- **description**: string
- **status**: string
- **members**: Array<SignMemberDto>
- **files**: Array<SignFileResponseDto>

### SignMemberDto
Type: object
Propriétés:
- **id**: string
- **firstname**: string
- **lastname**: string
- **email**: string
- **phone**: string
- **user**: string
- **internal**: boolean

### RawResponseDto
Type: object
Champs obligatoires: response
Propriétés:
- **actionStatus**: ActionStatus
- **response**: object

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
