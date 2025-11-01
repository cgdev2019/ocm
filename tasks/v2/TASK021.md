# TASK021 — API V2 crm

## Contexte
Le domaine « crm » (tag OpenAPI `crm`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/account/contactCategory` | Create a ContactCategory | create_8 |
| PUT | `/api/rest/v2/account/contactCategory/{contactCategoryCode}` | Update a ContactCategory | update_7 |
| DELETE | `/api/rest/v2/account/contactCategory/{contactCategoryCode}` | Delete a ContactCategory | delete_5 |

#### POST /api/rest/v2/account/contactCategory

- Résumé: Create a ContactCategory
- OperationId: create_8
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ContactCategoryDto (ContactCategoryDto)
- Réponses:
  - 200: the contactCategory successfully created
  - 400: An error happened when trying to create a contactCategory

#### PUT /api/rest/v2/account/contactCategory/{contactCategoryCode}

- Résumé: Update a ContactCategory
- OperationId: update_7
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `contactCategoryCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: ContactCategoryDto (ContactCategoryDto)
- Réponses:
  - 200: the contactCategory successfully created
  - 400: An error happened when trying to create a contactCategory
  - 404: The contactCategoryCode does not exists

#### DELETE /api/rest/v2/account/contactCategory/{contactCategoryCode}

- Résumé: Delete a ContactCategory
- OperationId: delete_5
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `contactCategoryCode` (PATH, obligatoire) — string
- Réponses:
  - 200: the contactCategory successfully created
  - 400: An error happened when trying to create a contactCategory
  - 404: The contactCategoryCode does not exists

## Schémas principaux

### ContactCategoryDto
Type: object
Propriétés:
- **code**: string — code of the contact category
- **customFields**: CustomFieldsDto
- **description**: string — description of the contact category
- **links**: Array<object>
- **id**: integer (int64)

### CustomFieldsDto
custom field associated the contact category
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

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

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

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
