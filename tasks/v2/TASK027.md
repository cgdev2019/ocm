# TASK027 — API V2 Dunning Agent

## Contexte
Le domaine « Dunning Agent » (tag OpenAPI `Dunning Agent`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/dunning/dunningAgent` | Create new Dunning Agent | create_10 |
| PUT | `/api/rest/v2/dunning/dunningAgent/{dunningSettingsCode}/{agentEmailItem}` | update an existing Dunning Agent | update_9 |
| DELETE | `/api/rest/v2/dunning/dunningAgent/{dunningSettingsCode}/{agentEmailItem}` | delete an existing Dunning Agent | delete_7 |

#### POST /api/rest/v2/dunning/dunningAgent

- Résumé: Create new Dunning Agent
- OperationId: create_10
- Description: Create new Dunning Agent
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningAgentInput (DunningAgentInput)
- Réponses:
  - 200: dunning Agent successfully created

#### PUT /api/rest/v2/dunning/dunningAgent/{dunningSettingsCode}/{agentEmailItem}

- Résumé: update an existing Dunning Agent
- OperationId: update_9
- Description: Update an existing Dunning Agent
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningSettingsCode` (PATH, obligatoire) — string
- `agentEmailItem` (PATH, obligatoire) — string
- Corps de requête:
  - obligatoire
  - application/json: DunningAgentInput (DunningAgentInput)
- Réponses:
  - 200: dunning Agent successfully updated

#### DELETE /api/rest/v2/dunning/dunningAgent/{dunningSettingsCode}/{agentEmailItem}

- Résumé: delete an existing Dunning Agent
- OperationId: delete_7
- Description: Update an existing Dunning Agent
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningSettingsCode` (PATH, obligatoire) — string
- `agentEmailItem` (PATH, obligatoire) — string
- Réponses:
  - 200: dunning Agent successfully updated

## Schémas principaux

### DunningAgentInput
Type: object
Propriétés:
- **external**: boolean — include collection agency
- **collectionAgency**: string — indicate email collection agency
- **agentFirstNameItem**: string
- **agentLastNameItem**: string
- **agentEmailItem**: string
- **dunningSettings**: Resource
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
