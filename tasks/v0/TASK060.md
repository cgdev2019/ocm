# TASK060 — Service EmailTemplate

## Contexte
Le service « EmailTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%EmailTemplate
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/communication/emailTemplate` |  Find an email template with a given code   |     GET_EmailTemplate_search |
| POST | `/api/rest/communication/emailTemplate` | 	  Create an email template by dto	   | POST_EmailTemplate_create |
| PUT | `/api/rest/communication/emailTemplate` | 	  update an emailTemplate by dto	   |     PUT_EmailTemplate_update |
| DELETE | `/api/rest/communication/emailTemplate/{code}` |  remove an emailTemplate by code   |     DELETE_EmailTemplate_{code} |
| POST | `/api/rest/communication/emailTemplate/createOrUpdate` |  Create new or update an existing email template by dto   |     POST_EmailTemplate_createOrUpdate |
| GET | `/api/rest/communication/emailTemplate/list` |  List email templates   |     GET_EmailTemplate_list |
| GET | `/api/rest/communication/emailTemplate/version` | Get version of application | index_100 |

#### GET /api/rest/communication/emailTemplate

- Résumé:  Find an email template with a given code  
- OperationId:     GET_EmailTemplate_search
- Description: Find an email template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Returns an email template
    - application/json: EmailTemplateResponseDto
    - application/xml: EmailTemplateResponseDto

#### POST /api/rest/communication/emailTemplate

- Résumé: 	  Create an email template by dto	  
- OperationId: POST_EmailTemplate_create
- Description: Create an email template by dto
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EmailTemplateDto
  - application/xml: EmailTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/communication/emailTemplate

- Résumé: 	  update an emailTemplate by dto	  
- OperationId:     PUT_EmailTemplate_update
- Description: update an emailTemplate by dto
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EmailTemplateDto
  - application/xml: EmailTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/communication/emailTemplate/{code}

- Résumé:  remove an emailTemplate by code  
- OperationId:     DELETE_EmailTemplate_{code}
- Description: remove an emailTemplate by code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/communication/emailTemplate/createOrUpdate

- Résumé:  Create new or update an existing email template by dto  
- OperationId:     POST_EmailTemplate_createOrUpdate
- Description: Create new or update an existing email template by dto
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EmailTemplateDto
  - application/xml: EmailTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/communication/emailTemplate/list

- Résumé:  List email templates  
- OperationId:     GET_EmailTemplate_list
- Description: List email templates
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of email templates
    - application/json: EmailTemplatesResponseDto
    - application/xml: EmailTemplatesResponseDto

#### GET /api/rest/communication/emailTemplate/version

- Résumé: Get version of application
- OperationId: index_100
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### EmailTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **emailTemplate**: EmailTemplateDto

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

### EmailTemplateDto
Type: object
Champs obligatoires: code, subject
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **media**: string (Valeurs: POSTAL_MAIL, EMAIL, SMS, IM, FAX, VOICE, WEBSERVICE, QUEUE, FTP_FILE, CFT_FILE, DATABASE, DUNNING_MEDIA)
- **tagStartDelimiter**: string
- **tagEndDelimiter**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **type**: string (Valeurs: DUNNING, INVOICE, OTHER)
- **textContent**: string
- **translatedTextContent**: Array<TranslatedTextContentDto>
- **subject**: string
- **htmlContent**: string
- **translatedHtmlContent**: Array<TranslatedHtmlContentDto>
- **translatedSubject**: Array<TranslatedSubjectDto>

### TranslatedTextContentDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **textContent**: string — Text content translation

### TranslatedHtmlContentDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **htmlContent**: string — Subject Translation

### TranslatedSubjectDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **subject**: string — Subject Translation
- **textContent**: string

### EmailTemplatesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **emailTemplates**: Array<EmailTemplateDto>

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
