# TASK012 — API V2 Collection Plan

## Contexte
Le domaine « Collection Plan » (tag OpenAPI `Collection Plan`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/dunning/collectionPlan/addDunningActionInstance` | Add DunningActionInstance | addDunningActionInstance |
| POST | `/api/rest/v2/dunning/collectionPlan/addDunningLevelInstance` | Add DunningLevelInstance | addDunningLevelInstance |
| POST | `/api/rest/v2/dunning/collectionPlan/massPause` | Mass Pause list of Collection plan | massPauseCollectionPlan |
| POST | `/api/rest/v2/dunning/collectionPlan/massStop` | Mass Stop list of Collection plan | massStopCollectionPlan |
| POST | `/api/rest/v2/dunning/collectionPlan/pause/{id}` | Pause Collection plan | pauseCollectionPlan |
| POST | `/api/rest/v2/dunning/collectionPlan/removeDunningActionInstance` | Remove DunningActionInstance | removeDunningActionInstance |
| POST | `/api/rest/v2/dunning/collectionPlan/removeDunningLevelInstance` | Remove DunningLevelInstance | removeDunningLevelInstance |
| POST | `/api/rest/v2/dunning/collectionPlan/resume/{id}` | Resume Collection plan | resumeCollectionPlan |
| POST | `/api/rest/v2/dunning/collectionPlan/stop/{id}` | Stop Collection plan | stopCollectionPlan |
| PUT | `/api/rest/v2/dunning/collectionPlan/updateDunningActionInstance/{actionInstanceId}` | Update DunningActionInstance | updateDunningActionInstance |
| PUT | `/api/rest/v2/dunning/collectionPlan/updateDunningLevelInstance/{levelInstanceId}` | Update DunningLevelInstance | updateDunningLevelInstance |

#### POST /api/rest/v2/dunning/collectionPlan/addDunningActionInstance

- Résumé: Add DunningActionInstance
- OperationId: addDunningActionInstance
- Description: Add DunningActionInstance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningActionInstanceInput (DunningActionInstanceInput)
- Réponses:
  - 200: Add action success
  - 404: Entity does not exist

#### POST /api/rest/v2/dunning/collectionPlan/addDunningLevelInstance

- Résumé: Add DunningLevelInstance
- OperationId: addDunningLevelInstance
- Description: Add DunningLevelInstance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningLevelInstanceInput (DunningLevelInstanceInput)
- Réponses:
  - 200: Add action success
  - 404: Entity does not exist

#### POST /api/rest/v2/dunning/collectionPlan/massPause

- Résumé: Mass Pause list of Collection plan
- OperationId: massPauseCollectionPlan
- Description: Mass Pause list of collection plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: MassPauseDunningCollectionPlan (MassPauseDunningCollectionPlan)
- Réponses:
  - 200: list of collection plan successfully paused
  - 404: Entity does not exits

#### POST /api/rest/v2/dunning/collectionPlan/massStop

- Résumé: Mass Stop list of Collection plan
- OperationId: massStopCollectionPlan
- Description: Mass Stop collection plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: MassStopDunningCollectionPlan (MassStopDunningCollectionPlan)
- Réponses:
  - 200: list of collection plan successfully stoped
  - 404: Entity does not exits

#### POST /api/rest/v2/dunning/collectionPlan/pause/{id}

- Résumé: Pause Collection plan
- OperationId: pauseCollectionPlan
- Description: Pause collection plan
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: DunningCollectionPlanPause (DunningCollectionPlanPause)
- Réponses:
  - 200: collection plan successfully paused
  - 404: Entity does not exits

#### POST /api/rest/v2/dunning/collectionPlan/removeDunningActionInstance

- Résumé: Remove DunningActionInstance
- OperationId: removeDunningActionInstance
- Description: Remove DunningActionInstance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: RemoveActionInstanceInput (RemoveActionInstanceInput)
- Réponses:
  - 200: Remove action success
  - 404: Entity does not exist

#### POST /api/rest/v2/dunning/collectionPlan/removeDunningLevelInstance

- Résumé: Remove DunningLevelInstance
- OperationId: removeDunningLevelInstance
- Description: Remove DunningLevelInstance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: RemoveLevelInstanceInput (RemoveLevelInstanceInput)
- Réponses:
  - 200: Remove action success
  - 404: Entity does not exist

#### POST /api/rest/v2/dunning/collectionPlan/resume/{id}

- Résumé: Resume Collection plan
- OperationId: resumeCollectionPlan
- Description: Resume collection plan
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - 200: collection plan successfully paused
  - 404: Entity does not exits

#### POST /api/rest/v2/dunning/collectionPlan/stop/{id}

- Résumé: Stop Collection plan
- OperationId: stopCollectionPlan
- Description: Stop collection plan
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: DunningCollectionPlanStop (DunningCollectionPlanStop)
- Réponses:
  - 200: collection plan successfully stoped
  - 404: Entity does not exits

#### PUT /api/rest/v2/dunning/collectionPlan/updateDunningActionInstance/{actionInstanceId}

- Résumé: Update DunningActionInstance
- OperationId: updateDunningActionInstance
- Description: Update DunningActionInstance
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `actionInstanceId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: DunningActionInstanceInput (DunningActionInstanceInput)
- Réponses:
  - 200: Update action success
  - 404: Entity does not exist

#### PUT /api/rest/v2/dunning/collectionPlan/updateDunningLevelInstance/{levelInstanceId}

- Résumé: Update DunningLevelInstance
- OperationId: updateDunningLevelInstance
- Description: Update DunningLevelInstance
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `levelInstanceId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: UpdateLevelInstanceInput (UpdateLevelInstanceInput)
- Réponses:
  - 200: Update action success
  - 404: Entity does not exist

## Schémas principaux

### DunningActionInstanceInput
Type: object
Propriétés:
- **dunningLevelInstance**: Resource
- **actionOwner**: Resource
- **actionRestult**: string
- **dunningAction**: Resource
- **actionType**: string (Valeurs: SEND_NOTIFICATION, RETRY_PAYMENT, WRITE_OFF_INVOICE, ISSUE_A_CREDIT_NOTE, SCRIPT)
- **collectionPlan**: Resource
- **mode**: string (Valeurs: MANUAL, AUTOMATIC)
- **actionStatus**: string (Valeurs: TO_BE_DONE, DONE)
- **description**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningLevelInstanceInput
Type: object
Propriétés:
- **policyLevel**: Resource
- **collectionPlanStatus**: Resource
- **daysOverdue**: integer (int32)
- **levelStatus**: string (Valeurs: TO_BE_DONE, IN_PROGRESS, DONE)
- **collectionPlan**: Resource
- **dunningLevel**: Resource
- **sequence**: integer (int32)
- **actions**: Array<DunningActionInstanceInput>
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### MassPauseDunningCollectionPlan
Type: object
Propriétés:
- **collectionPlans**: Array<Resource> — Collection plan list to check
- **forcePause**: boolean — Force pause
- **pauseUntil**: string (date-time) — Pause until date
- **dunningPauseReason**: Resource

### MassStopDunningCollectionPlan
Type: object
Propriétés:
- **collectionPlans**: Array<Resource> — Indicate dunning list of collection plan
- **dunningStopReason**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningCollectionPlanPause
Type: object
Propriétés:
- **forcePause**: boolean — Force pause
- **pauseUntil**: string (date-time) — Pause until date
- **dunningPauseReason**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### RemoveActionInstanceInput
Type: object
Propriétés:
- **actions**: Array<Resource>

### RemoveLevelInstanceInput
Type: object
Propriétés:
- **levels**: Array<Resource>

### DunningCollectionPlanStop
Type: object
Propriétés:
- **dunningStopReason**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### UpdateLevelInstanceInput
Type: object
Propriétés:
- **daysOverdue**: integer (int32)
- **levelStatus**: string (Valeurs: TO_BE_DONE, IN_PROGRESS, DONE)
- **actions**: Array<DunningActionInstanceInput>

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
