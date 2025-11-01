# TASK033 — API V2 export data

## Contexte
Le domaine « export data » (tag OpenAPI `export data`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/importExport/exportData` | export data | exportData |

#### POST /importExport/exportData

- Résumé: export data
- OperationId: exportData
- Description: export data
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - multipart/form-data: ExportConfig (ExportConfig)
  - application/json: ExportConfig (ExportConfig)
- Réponses:
  - 200: the entity successfully created, and the id is returned in the response
  - 400: bad request when entity information contains an error

## Schémas principaux

### ExportConfig
Type: object
Propriétés:
- **exportTemplateName**: string
- **exportType**: string (Valeurs: xml, remoteInstance)
- **instanceCode**: string
- **entityCodes**: Array<string>
- **entityClass**: string
- **fileName**: string

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
