# TASK028 — Service ProviderContact

## Contexte
Le service « ProviderContact » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%ProviderContact
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/account/providerContact` |  Search for a provider contact with a given code   |     GET_ProviderContact_search |
| POST | `/api/rest/account/providerContact` | 	  Create a provider contact	   |     POST_ProviderContact_create |
| PUT | `/api/rest/account/providerContact` |  Update an existing provider contact   |     PUT_ProviderContact_update |
| DELETE | `/api/rest/account/providerContact/{code}` |  Remove an existing provider contact with a given code    |     DELETE_ProviderContact_{code} |
| POST | `/api/rest/account/providerContact/createOrUpdate` |  Create new or update an existing provider contact   |     POST_ProviderContact_createOrUpdate |
| GET | `/api/rest/account/providerContact/list` |  List of provider contacts  |     GET_ProviderContact_list |
| GET | `/api/rest/account/providerContact/version` | Get version of application | index_31 |

#### GET /api/rest/account/providerContact

- Résumé:  Search for a provider contact with a given code  
- OperationId:     GET_ProviderContact_search
- Description: Search for a provider contact with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `providerContactCode` (QUERY, optionnel) — string
- Réponses:
  - default: A provider contact
    - application/json: ProviderContactResponseDto
    - application/xml: ProviderContactResponseDto

#### POST /api/rest/account/providerContact

- Résumé: 	  Create a provider contact	  
- OperationId:     POST_ProviderContact_create
- Description: Create a provider contact
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderContactDto
  - application/xml: ProviderContactDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/account/providerContact

- Résumé:  Update an existing provider contact  
- OperationId:     PUT_ProviderContact_update
- Description: Update an existing provider contact
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderContactDto
  - application/xml: ProviderContactDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/account/providerContact/{code}

- Résumé:  Remove an existing provider contact with a given code   
- OperationId:     DELETE_ProviderContact_{code}
- Description: Remove an existing provider contact with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/account/providerContact/createOrUpdate

- Résumé:  Create new or update an existing provider contact  
- OperationId:     POST_ProviderContact_createOrUpdate
- Description: Create new or update an existing provider contact
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProviderContactDto
  - application/xml: ProviderContactDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/account/providerContact/list

- Résumé:  List of provider contacts 
- OperationId:     GET_ProviderContact_list
- Description: List of provider contacts
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of provider contacts
    - application/json: ProviderContactsResponseDto
    - application/xml: ProviderContactsResponseDto

#### GET /api/rest/account/providerContact/version

- Résumé: Get version of application
- OperationId: index_31
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### ProviderContactResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **providerContact**: ProviderContactDto

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

### ProviderContactDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **firstName**: string
- **lastName**: string
- **email**: string
- **phone**: string
- **mobile**: string
- **fax**: string
- **genericMail**: string
- **addressDto**: AddressDto

### AddressDto
Type: object
Propriétés:
- **address1**: string — First address
- **address2**: string — Second address
- **address3**: string — Third address
- **address4**: string — forth address
- **address5**: string — fifth address
- **zipCode**: string — The zip code
- **city**: string — The city
- **country**: string — The country
- **state**: string — The state

### ProviderContactsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **providerContacts**: Array<ProviderContactDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
