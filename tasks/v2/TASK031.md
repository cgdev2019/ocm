# TASK031 — API V2 email

## Contexte
Le domaine « email » (tag OpenAPI `email`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}` | Get An EmailTemplate | getEmailTemplate |
| POST | `/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}` | Create an EmailTemplate | create_6 |
| PUT | `/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}` | Update an EmailTemplate | update_5 |
| PATCH | `/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}` | Update an EmailTemplate | partialUpdate |
| DELETE | `/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}` | Delete an EmailTemplate | deleteEmailTemplate |
| PUT | `/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}` | Update an SMSTemplate | update_6 |

#### GET /api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}

- Résumé: Get An EmailTemplate
- OperationId: getEmailTemplate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `EmailTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - 200: the email template successfully returned
  - 400: An error happened while getting EmailTemplate
  - 404: The EmailTemplateCode does not exist

#### POST /api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}

- Résumé: Create an EmailTemplate
- OperationId: create_6
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EmailTemplateDto (EmailTemplateDto)
- Réponses:
  - 200: the email template successfully created
  - 400: An error happened while creating EmailTemplate
  - 404: The EmailTemplateCode already exists

#### PUT /api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}

- Résumé: Update an EmailTemplate
- OperationId: update_5
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `EmailTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: EmailTemplateDto (EmailTemplateDto)
- Réponses:
  - 200: the email template successfully updated
  - 400: An error happened while updating EmailTemplate
  - 404: The EmailTemplateCode does not exists

#### PATCH /api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}

- Résumé: Update an EmailTemplate
- OperationId: partialUpdate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `EmailTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: EmailTemplatePatchDto (EmailTemplatePatchDto)
- Réponses:
  - 200: the email template successfully updated
  - 400: An error happened while updating EmailTemplate
  - 404: The EmailTemplateCode does not exists

#### DELETE /api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}

- Résumé: Delete an EmailTemplate
- OperationId: deleteEmailTemplate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `EmailTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - 200: the EmailTemplate successfully deleted
  - 400: An error happened while deleting EmailTemplate
  - 404: The EmailTemplate does not exists

#### PUT /api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}

- Résumé: Update an SMSTemplate
- OperationId: update_6
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `SMSTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: SMSTemplateDto (SMSTemplateDto)
- Réponses:
  - 200: the sms template successfully updated
  - 400: An error happened while updating SMSTemplate
  - 404: The SMS Template does not exists

## Schémas principaux

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

### EmailTemplatePatchDto
Type: object
Champs obligatoires: code
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

### SMSTemplateDto
Type: object
Champs obligatoires: code
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

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
