# TASK025 — API V2 Document

## Contexte
Le domaine « Document » (tag OpenAPI `Document`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| DELETE | `/api/rest/v2/document/{id}` | Delete a document by providing it's Id as param | deleteDocument |
| GET | `/api/rest/v2/document/{id}/file` | This endpoint allows to retrieve a document's file using the document id | getDocumentFile |
| PUT | `/api/rest/v2/document/{id}/file` | This endpoint allows to update the document file content | updateDocumentFile |
| DELETE | `/api/rest/v2/document/{id}/file` | This endpoint allows to delete a document's file using the document id | deleteDocumentFile |

#### DELETE /api/rest/v2/document/{id}

- Résumé: Delete a document by providing it's Id as param
- OperationId: deleteDocument
- Description: provide a document id for this endpoint, and it will delete the document along with it's related physical file
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the document to delete
- Réponses:
  - 204: document successfully deleted
  - 404: the document with id in param does not exist

#### GET /api/rest/v2/document/{id}/file

- Résumé: This endpoint allows to retrieve a document's file using the document id
- OperationId: getDocumentFile
- Description: retrieve and return an existing document file in base64 format
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the document's file to fetch
- Réponses:
  - 200: the document file successfully retrieved
    - text/plain: string
  - 404: the document file with document id in param does not exist

#### PUT /api/rest/v2/document/{id}/file

- Résumé: This endpoint allows to update the document file content
- OperationId: updateDocumentFile
- Description: update an existing document file content
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the document's file to fetch
- Corps de requête:
  - obligatoire
  - text/plain: string
- Réponses:
  - 200: the document file content successfully updated
  - 400: bad request when provided file content contains an error
  - 404: the document file with document id in param does not exist

#### DELETE /api/rest/v2/document/{id}/file

- Résumé: This endpoint allows to delete a document's file using the document id
- OperationId: deleteDocumentFile
- Description: delete an existing document file from disk
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the document's file to delete
- `includingDocument` (QUERY, obligatoire) — boolean : a flag to include the document instance in the delete operation
  - Contraintes: défaut: false
- Réponses:
  - 200: the document file successfully deleted
  - 404: the document file with document id in param does not exist

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
