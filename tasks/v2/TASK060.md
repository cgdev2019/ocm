# TASK060 — API V2 QueryScheduler

## Contexte
Le domaine « QueryScheduler » (tag OpenAPI `QueryScheduler`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/queryManagement/reportQueries/{reportQueryId}/schedule` | Create a new query scheduler | createQueryScheduler |

#### POST /api/rest/v2/queryManagement/reportQueries/{reportQueryId}/schedule

- Résumé: Create a new query scheduler
- OperationId: createQueryScheduler
- Description: Create a new query scheduler
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `reportQueryId` (PATH, obligatoire) — integer (int64) : report query id
- Corps de requête:
  - obligatoire
  - application/json: QuerySchedulerInput (QuerySchedulerInput)
- Réponses:
  - 204: Query scheduler successfully created
  - 404: Target entity does not exist

## Schémas principaux

### QuerySchedulerInput
Type: object
Propriétés:
- **everyDayOfMonth**: boolean — Query scheduler every day of month
- **everyDayOfWeek**: boolean — Query scheduler every day of week
- **everyHour**: boolean — Query scheduler every hour
- **everyMinute**: boolean — Query scheduler every minute
- **everyMonth**: boolean — Query scheduler every month
- **everySecond**: boolean — Query scheduler every second
- **isQueryScheduler**: boolean — Query scheduler is activated
- **usersToNotify**: Array<User> — Users to notify
- **emailsToNotify**: Array<string> — Emails to notify
- **fileFormat**: string — Query scheduler file format
- **year**: string — Query scheduler year
- **dayOfMonth**: string — Query scheduler day of month
- **hour**: string — Query scheduler hour
- **minute**: string — Query scheduler minute
- **second**: string — Query scheduler second
- **month**: string — Query scheduler month
- **dayOfWeek**: string — Query scheduler day of week

### User
Users to notify
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **name**: Name
- **userName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **email**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **password**: string
- **roles**: Array<string>
- **userRoles**: Array<Role>
- **userLevel**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **code**: string
- **description**: string
- **nameOrUsername**: string
- **referenceDescription**: string
- **referenceCode**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### Auditable
Type: object
Propriétés:
- **created**: string (date-time)
- **updated**: string (date-time)
- **creator**: string
- **updater**: string
- **lastUser**: string
- **lastModified**: string (date-time)

### AuditableFieldHistory
Type: object
Propriétés:
- **fieldName**: string
- **previousState**: object
- **currentState**: object
- **auditType**: string (Valeurs: STATUS, RENEWAL, OTHER)
- **historable**: boolean
- **notfiable**: boolean
- **historized**: boolean
- **notified**: boolean

### Name
Type: object
Propriétés:
- **title**: Title
- **firstName**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **lastName**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **fullName**: string

### Title
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **isCompany**: boolean
- **descriptionI18n**: object
- **descriptionNotNull**: string
- **descriptionI18nNullSafe**: object
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **parentEntity**: BusinessEntity
- **transient**: boolean

### BusinessEntity
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **parentEntity**: BusinessEntity
- **transient**: boolean

### Role
Type: object
Champs obligatoires: name, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **name**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **clientRole**: boolean
- **parentRole**: Role
- **roles**: Array<Role>
- **replicateInKc**: boolean
- **referenceDescription**: string
- **referenceCode**: string
- **descriptionOrName**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### CustomFieldValues
Type: object
Propriétés:
- **valuesByCode**: object
- **encrypted**: boolean
- **newVersionedCFValuePeriods**: object
- **values**: object

### CustomFieldValue
Type: object
Propriétés:
- **from**: string (date-time)
- **to**: string (date-time)
- **strictMatch**: boolean
- **fromMatch**: string (date-time)
- **toMatch**: string (date-time)
- **valid**: boolean
- **empty**: boolean
- **priority**: integer (int32)
- **valueEmptyForGui**: boolean
- **newPeriod**: boolean
- **valueEmpty**: boolean
- **allEntities**: Array<EntityReferenceWrapper>
- **getkeyValueMap**: object
- **mapValue**: object
- **listValue**: Array<object>
- **excessiveInSize**: boolean
- **value**: object
- **string**: string
- **date**: string (date-time)
- **long**: integer (int64)
- **double**: number (double)
- **boolean**: boolean
- **entity**: EntityReferenceWrapper
- **url**: UrlReferenceWrapper
- **listString**: Array<string>
- **listDate**: Array<string (date-time)>
- **listLong**: Array<integer (int64)>
- **listDouble**: Array<number (double)>
- **listBoolean**: Array<boolean>
- **listEntity**: Array<EntityReferenceWrapper>
- **mapString**: object
- **mapDate**: object
- **mapLong**: object
- **mapDouble**: object
- **mapBoolean**: object
- **mapEntity**: object
- **source**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **mapCfValues**: object

### EntityReferenceWrapper
Type: object
Propriétés:
- **classname**: string
- **classnameCode**: string
- **code**: string
- **id**: integer (int64)
- **referenceDescription**: string
- **referenceCode**: string
- **empty**: boolean

### UrlReferenceWrapper
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

### DatePeriod
Type: object
Propriétés:
- **from**: string (date-time)
- **to**: string (date-time)
- **strictMatch**: boolean
- **fromMatch**: string (date-time)
- **toMatch**: string (date-time)
- **valid**: boolean
- **empty**: boolean

### ICustomFieldEntity
Type: object
Propriétés:
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **uuid**: string
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
