# TASK069 — Service PDFDocument

## Contexte
Le service « PDFDocument » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%PDFDocument
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/document/pdf` |  Generate PDF document.  |     POST_PDFDocument_create |
| GET | `/api/rest/document/pdf/version` | Get version of application | index_116 |

#### POST /api/rest/document/pdf

- Résumé:  Generate PDF document. 
- OperationId:     POST_PDFDocument_create
- Description: Generate PDF document.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PDFDocumentRequestDto
  - application/xml: PDFDocumentRequestDto
- Réponses:
  - default: the PDF contarct response dto
    - application/json: PDFDocumentResponseDto
    - application/xml: PDFDocumentResponseDto

#### GET /api/rest/document/pdf/version

- Résumé: Get version of application
- OperationId: index_116
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### PDFDocumentRequestDto
Type: object
Propriétés:
- **listTemplates**: Array<PDFTemplateDto>
- **documentDestinationDir**: string
- **documentNamePrefix**: string
- **returnPdf**: boolean
- **combineFiles**: boolean
- **absolutePaths**: boolean
- **flattened**: boolean

### PDFTemplateDto
Type: object
Propriétés:
- **templateFields**: object
- **templateName**: string
- **templatePath**: string
- **barCodeFields**: Array<string>

### PDFDocumentResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **listPdfFilePaths**: Array<string>
- **pdfFilePath**: string
- **pdfFile**: Array<string (byte)>
- **pdfFiles**: Array<Array<string (byte)>>

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
