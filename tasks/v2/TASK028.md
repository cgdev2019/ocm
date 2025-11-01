# TASK028 — API V2 DunningAction

## Contexte
Le domaine « DunningAction » (tag OpenAPI `DunningAction`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/dunning/dunningaction` | Create a new Dunning Action | createDunningAction |
| GET | `/api/rest/v2/dunning/dunningaction/{code}` | Retrieve a Dunning Action by code | getDunningAction |
| PUT | `/api/rest/v2/dunning/dunningaction/{dunningActionId}` | Update a Dunning Action | updateDunningAction |
| DELETE | `/api/rest/v2/dunning/dunningaction/{dunningActionId}` | Delete a Dunning Action | deleteDunningAction |

#### POST /api/rest/v2/dunning/dunningaction

- Résumé: Create a new Dunning Action
- OperationId: createDunningAction
- Description: Create a new Dunning Action
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningAction (DunningAction)
- Réponses:
  - 200: dunning Action successfully created
  - 400: DunningAction creation is failed
  - 404: a related entity does not exist
  - 412: Missing parameters

#### GET /api/rest/v2/dunning/dunningaction/{code}

- Résumé: Retrieve a Dunning Action by code
- OperationId: getDunningAction
- Description: Retrieve a Dunning Action by code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : dunning Action code
- Réponses:
  - 200: success retrieve of dunning action
  - 404: Dunning Action with code in the path doesn't exist
  - 412: Missing parameters

#### PUT /api/rest/v2/dunning/dunningaction/{dunningActionId}

- Résumé: Update a Dunning Action
- OperationId: updateDunningAction
- Description: Update a Dunning Action
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningActionId` (PATH, obligatoire) — integer (int64) : dunning Action id
- Corps de requête:
  - obligatoire
  - application/json: DunningAction (DunningAction)
- Réponses:
  - 200: dunning Action successfully updated
  - 400: DunningAction creation is failed
  - 404: a related entity does not exist
  - 412: Missing parameters

#### DELETE /api/rest/v2/dunning/dunningaction/{dunningActionId}

- Résumé: Delete a Dunning Action
- OperationId: deleteDunningAction
- Description: Delete a Dunning Action
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningActionId` (PATH, obligatoire) — integer (int64) : dunning Action id
- Réponses:
  - 200: dunning Action successfully deleted
  - 400: DunningAction creation is failed
  - 404: a related entity does not exist
  - 412: Missing parameters

## Schémas principaux

### DunningAction
Type: object
Propriétés:
- **attachOverdueInvoices**: boolean
- **attachDueInvoices**: boolean
- **actionType**: string
- **actionNotificationTemplate**: object
- **actionMode**: string
- **actionChannel**: string
- **assignedTo**: object
- **relatedLevels**: Array<object>
- **code**: string
- **description**: string
- **script**: object

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
