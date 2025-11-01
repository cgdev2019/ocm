# TASK002 — Service Calendar

## Contexte
Le service « Calendar » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Calendar
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/calendar` |  Search for calendar with a given code.   |     GET_Calendar_search |
| POST | `/api/rest/calendar` |  Create a new calendar.   |     POST_Calendar_create |
| PUT | `/api/rest/calendar` |  Update calendar.   |     PUT_Calendar_update |
| DELETE | `/api/rest/calendar/{calendarCode}` |  Remove calendar with a given code.   |     DELETE _Calendar_{calendarCode} |
| GET | `/api/rest/calendar/bankingDateStatus` |  Gets the banking date status.  |     GET_Calendar_bankingDateStatus |
| POST | `/api/rest/calendar/createOrUpdate` |  Create new or update an existing calendar with a given code.   |     POST _Calendar_createOrUpdate |
| GET | `/api/rest/calendar/list` |  Retrieve a list of all calendars.   |     GET _Calendar_list |
| GET | `/api/rest/calendar/listGetAll` |  List Calendars matching a given criteria  |     GET_Calendar_listGetAll |
| GET | `/api/rest/calendar/version` | Get version of application | index_1 |

#### GET /api/rest/calendar

- Résumé:  Search for calendar with a given code.  
- OperationId:     GET_Calendar_search
- Description: Search for calendar with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `calendarCode` (QUERY, optionnel) — string
- Réponses:
  - default: calendar if exists
    - application/json: GetCalendarResponse
    - application/xml: GetCalendarResponse

#### POST /api/rest/calendar

- Résumé:  Create a new calendar.  
- OperationId:     POST_Calendar_create
- Description: Create a new calendar.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CalendarDto
  - application/xml: CalendarDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/calendar

- Résumé:  Update calendar.  
- OperationId:     PUT_Calendar_update
- Description: Update calendar.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CalendarDto
  - application/xml: CalendarDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/calendar/{calendarCode}

- Résumé:  Remove calendar with a given code.  
- OperationId:     DELETE _Calendar_{calendarCode}
- Description: Remove calendar with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `calendarCode` (PATH, obligatoire) — string
- Réponses:
  - default: action result
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/calendar/bankingDateStatus

- Résumé:  Gets the banking date status. 
- OperationId:     GET_Calendar_bankingDateStatus
- Description: Gets the banking date status.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `date` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: the banking date status
    - application/json: BankingDateStatusResponse
    - application/xml: BankingDateStatusResponse

#### POST /api/rest/calendar/createOrUpdate

- Résumé:  Create new or update an existing calendar with a given code.  
- OperationId:     POST _Calendar_createOrUpdate
- Description: Create new or update an existing calendar with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CalendarDto
  - application/xml: CalendarDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/calendar/list

- Résumé:  Retrieve a list of all calendars.  
- OperationId:     GET _Calendar_list
- Description: Retrieve a list of all calendars.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of all calendars
    - application/json: ListCalendarResponse
    - application/xml: ListCalendarResponse

#### GET /api/rest/calendar/listGetAll

- Résumé:  List Calendars matching a given criteria 
- OperationId:     GET_Calendar_listGetAll
- Description: List Calendars matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of Calendars
    - application/json: ListCalendarResponse
    - application/xml: ListCalendarResponse

#### GET /api/rest/calendar/version

- Résumé: Get version of application
- OperationId: index_1
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetCalendarResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **calendar**: CalendarDto

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

### CalendarDto
calendar associated to subscription renewal
Type: object
Champs obligatoires: calendarType, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **calendarType**: string — calendar type (Valeurs: YEARLY, DAILY, PERIOD, INTERVAL, INTERSECT, UNION, APPEND, BANKING, FIXED)
- **fixedDates**: Array<string> — list of fixed date
- **days**: Array<DayInYearDto> — list of the day
- **hours**: Array<HourInDayDto> — list of the hour
- **periodLength**: integer (int32) — Period length
- **periodUnit**: string — Period measurement unit (Valeurs: MONTH, DAY_OF_MONTH, HOUR_OF_DAY, MINUTE, SECOND)
- **nbPeriods**: integer (int32) — Number of periods
- **joinCalendar1Code**: string — Code of the first calendar to intersect/union
- **joinCalendar2Code**: string — Code of the second calendar to intersect/union
- **intervalType**: string — Interval type (Valeurs: DAY, HOUR, WDAY)
- **intervals**: Array<CalendarDateIntervalDto> — List of intervals
- **weekendBegin**: integer (int32) — The weekend begin
- **weekendEnd**: integer (int32)
- **endDate**: string (date-time) — The end dat
- **startDate**: string (date-time) — The start date
- **initDateEL**: string — Calendar initialization date - expression to determine a value for calendar initialization date (Contraintes: longueur min: 0 · longueur max: 2000)
- **holidays**: Array<CalendarHolidayDto> — list of the days of holiday
- **languageDescriptions**: Array<LanguageDescriptionDto> — lsit of language description

### DayInYearDto
list of the day
Type: object
Propriétés:
- **day**: integer (int32) — day in the year
- **month**: string — month of the year (Valeurs: JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER)

### HourInDayDto
list of the hour
Type: object
Propriétés:
- **hour**: integer (int32) — hour
- **min**: integer (int32) — minute of the hours

### CalendarDateIntervalDto
List of intervals
Type: object
Propriétés:
- **intervalBegin**: integer (int32) — The interval begin
- **intervalEnd**: integer (int32) — The interval end

### CalendarHolidayDto
list of the days of holiday
Type: object
Propriétés:
- **holidayBegin**: integer (int32) — The holiday begin
- **holidayEnd**: integer (int32) — The holiday end

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### BankingDateStatusResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **bankingDateStatus**: BankingDateStatusDto

### BankingDateStatusDto
Type: object
Propriétés:
- **date**: string (date-time)
- **isWorkingDate**: boolean
- **workingDate**: boolean

### ListCalendarResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **calendars**: CalendarsDto

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

### CalendarsDto
Type: object
Propriétés:
- **calendar**: Array<CalendarDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
