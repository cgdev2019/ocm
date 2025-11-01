# TASK029 — API V2 DunningTemplate

## Contexte
Le domaine « DunningTemplate » (tag OpenAPI `DunningTemplate`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/dunning/dunningtemplate` | Create a new Dunning Template | createDunningTemplate |
| PUT | `/dunning/dunningtemplate/{dunningTemplateId}` | update a Dunning Template | updateDunningTemplate |
| DELETE | `/dunning/dunningtemplate/{dunningTemplateId}` | Delete a Dunning Template | deleteDunningTemplate |
| POST | `/dunning/dunningtemplate/{dunningTemplateId}/duplication` | duplicate a Dunning Template | duplicateDunningTemplate |

#### POST /dunning/dunningtemplate

- Résumé: Create a new Dunning Template
- OperationId: createDunningTemplate
- Description: Create a new Dunning Template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningTemplate (DunningTemplate)
- Réponses:
  - 200: dunning Template successfully created
  - 400: Dunning Template creation failed
  - 404: a related entity does not exist
  - 412: Missing parameters

#### PUT /dunning/dunningtemplate/{dunningTemplateId}

- Résumé: update a Dunning Template
- OperationId: updateDunningTemplate
- Description: update a Dunning Template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningTemplateId` (PATH, obligatoire) — integer (int64) : dunning Template id
- Corps de requête:
  - obligatoire
  - application/json: DunningTemplate (DunningTemplate)
- Réponses:
  - 200: dunning Template successfully updated
  - 400: Dunning Template update failed
  - 404: a related entity does not exist
  - 412: Missing parameters

#### DELETE /dunning/dunningtemplate/{dunningTemplateId}

- Résumé: Delete a Dunning Template
- OperationId: deleteDunningTemplate
- Description: Delete a Dunning Template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningTemplateId` (PATH, obligatoire) — integer (int64) : dunning Template id
- Réponses:
  - 200: dunning Template successfully deleted
  - 400: Dunning Template deletion failed
  - 404: a related entity does not exist
  - 412: Missing parameters

#### POST /dunning/dunningtemplate/{dunningTemplateId}/duplication

- Résumé: duplicate a Dunning Template
- OperationId: duplicateDunningTemplate
- Description: duplicate a Dunning Template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningTemplateId` (PATH, obligatoire) — integer (int64) : dunning Template id
- Réponses:
  - 200: dunning Template successfully duplicated
  - 400: Dunning Template duplication failed
  - 404: a related entity does not exist
  - 412: Missing parameters

## Schémas principaux

### DunningTemplate
Type: object
Propriétés:
- **actionChannel**: string
- **htmlContent**: string
- **subject**: string
- **code**: string
- **type**: string
- **language**: object

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
