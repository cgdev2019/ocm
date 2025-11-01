# TASK035 — API V2 Global settings

## Contexte
Le domaine « Global settings » (tag OpenAPI `Global settings`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/setting/globalSettings` | Global settings | create_22 |
| PUT | `/api/rest/v2/setting/globalSettings/{id}` | Global settings | update_22 |

#### POST /api/rest/v2/setting/globalSettings

- Résumé: Global settings
- OperationId: create_22
- Description: Create Global settings
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: GlobalSettingsInput (GlobalSettingsInput)
- Réponses:
  - 200: Global settings was successfully created
  - 400: Bad Request

#### PUT /api/rest/v2/setting/globalSettings/{id}

- Résumé: Global settings
- OperationId: update_22
- Description: Update Global settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Global settings id
- Corps de requête:
  - obligatoire
  - application/json: GlobalSettingsInput (GlobalSettingsInput)
- Réponses:
  - 200: Global settings was successfully updated
  - 400: Bad Request
  - 404: The QuotesSettings does not exist

## Schémas principaux

### GlobalSettingsInput
Type: object
Propriétés:
- **quoteSettings**: QuoteSettings
- **dunning**: Dunning
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### QuoteSettings
Type: object
Propriétés:
- **quoteDefaultValidityDelay**: integer (int32)

### Dunning
Type: object
Propriétés:
- **activateDunning**: boolean

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
