# TASK025 — Service Usage

## Contexte
Le service « Usage » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Usage
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/usage` |  Search for all opened ratedTransactions with a given userAccountCode,fromDate and toDate .   |     GET_Usage_search |
| GET | `/api/rest/usage/chargeAggregate` |  Search for charge aggregate isage from a user account code during a period of time.  |     GET_Usage_chargeAggregate |
| GET | `/api/rest/usage/version` | Get version of application | index_23 |

#### GET /api/rest/usage

- Résumé:  Search for all opened ratedTransactions with a given userAccountCode,fromDate and toDate .  
- OperationId:     GET_Usage_search
- Description: Search for all opened ratedTransactions with a given userAccountCode,fromDate and toDate .
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `userAccountCode` (QUERY, optionnel) — string
- `fromDate` (QUERY, optionnel) — string (date-time)
- `toDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: usage
    - application/json: UsageResponseDto
    - application/xml: UsageResponseDto

#### GET /api/rest/usage/chargeAggregate

- Résumé:  Search for charge aggregate isage from a user account code during a period of time. 
- OperationId:     GET_Usage_chargeAggregate
- Description: Search for charge aggregate isage from a user account code during a period of time.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `userAccountCode` (QUERY, optionnel) — string
- `fromDate` (QUERY, optionnel) — string (date-time)
- `toDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: usage charge aggregate
    - application/json: UsageChargeAggregateResponseDto
    - application/xml: UsageChargeAggregateResponseDto

#### GET /api/rest/usage/version

- Résumé: Get version of application
- OperationId: index_23
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### UsageResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **listCatUsage**: Array<CatUsageDto>

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

### CatUsageDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **listSubCatUsage**: Array<SubCatUsageDto>

### SubCatUsageDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **listUsage**: Array<UsageDto>

### UsageDto
Type: object
Propriétés:
- **dateEvent**: string (date-time)
- **code**: string
- **description**: string
- **unityDescription**: string
- **unitAmountWithoutTax**: number
- **quantity**: number
- **amountWithoutTax**: number
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **parameterExtra**: string
- **offerCode**: string
- **priceplanCode**: string

### UsageChargeAggregateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **listChargeAggregate**: Array<ChargeAggregateDto>

### ChargeAggregateDto
Type: object
Propriétés:
- **description**: string
- **quantity**: string
- **amount**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
