# TASK013 — API V2 Collection Plan Status

## Contexte
Le domaine « Collection Plan Status » (tag OpenAPI `Collection Plan Status`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/dunning/collectionPlanStatus` | Create new Collection plan status | create_9 |
| PUT | `/api/rest/v2/dunning/collectionPlanStatus/{id}` | Update an existing Collection plan status | update_8 |
| DELETE | `/api/rest/v2/dunning/collectionPlanStatus/{id}` | Delete an existing Collection plan status | delete_6 |

#### POST /api/rest/v2/dunning/collectionPlanStatus

- Résumé: Create new Collection plan status
- OperationId: create_9
- Description: Create new collection plan status
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningCollectionPlanStatus (DunningCollectionPlanStatus)
- Réponses:
  - 200: collection plan status successfully created
  - 404: Dunning with the same code exist

#### PUT /api/rest/v2/dunning/collectionPlanStatus/{id}

- Résumé: Update an existing Collection plan status
- OperationId: update_8
- Description: Update new collection plan status without its dunning settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - obligatoire
  - application/json: DunningCollectionPlanStatus (DunningCollectionPlanStatus)
- Réponses:
  - 200: collection plan status successfully updated
  - 404: Collection with dunning code parameter and status doesn't exist

#### DELETE /api/rest/v2/dunning/collectionPlanStatus/{id}

- Résumé: Delete an existing Collection plan status
- OperationId: delete_6
- Description: Delete new collection plan status without its dunning settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - 200: collection plan status successfully deleted
  - 404: Collection with dunning code parameter and status doesn't exist

## Schémas principaux

### DunningCollectionPlanStatus
Type: object
Propriétés:
- **colorCode**: string — indicate color code for the status
- **dunningSettings**: Resource
- **status**: string — indicate the status used in the collection (Valeurs: ACTIVE, SUCCESS, FAILED, PAUSED, STOPPED)
- **description**: string — indicate description for the collection
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
