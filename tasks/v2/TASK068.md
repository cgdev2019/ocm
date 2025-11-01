# TASK068 — API V2 sms_template

## Contexte
Le domaine « sms_template » (tag OpenAPI `sms_template`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/setting/internationalSettings/SMSTemplate` | Create an SMS Template | create_7 |
| GET | `/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}` | Get an SMSTemplate | get_1 |
| PUT | `/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}` | Update an SMSTemplate | update_6 |
| DELETE | `/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}` | Delete an SMSTemplate | delete_4 |

#### POST /api/rest/v2/setting/internationalSettings/SMSTemplate

- Résumé: Create an SMS Template
- OperationId: create_7
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SMSTemplateDto (SMSTemplateDto)
- Réponses:
  - 200: the sms template successfully updated
  - 400: An error happened while creating SMS Template

#### GET /api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}

- Résumé: Get an SMSTemplate
- OperationId: get_1
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `SMSTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - 200: the sms template successfully returned
  - 400: An error happened while getting SMSTemplate
  - 404: The SMS Template does not exists

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

#### DELETE /api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}

- Résumé: Delete an SMSTemplate
- OperationId: delete_4
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `SMSTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - 200: the sms template successfully deleted
  - 400: An error happened while deleting SMSTemplate
  - 404: The SMS Template does not exists

## Schémas principaux

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

### TranslatedTextContentDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **textContent**: string — Text content translation

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
