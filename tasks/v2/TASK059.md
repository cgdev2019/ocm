# TASK059 — API V2 Put

## Contexte
Le domaine « Put » (tag OpenAPI `Put`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| PUT | `/setting/openOrderSettings/{id}` | Update Open Order settings | update_23 |

#### PUT /setting/openOrderSettings/{id}

- Résumé: Update Open Order settings
- OperationId: update_23
- Description: Update Open Order settings
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : contain the code of Open Order settings te be updated by its id
- Corps de requête:
  - obligatoire
  - application/json: OpenOrderSettingInput (OpenOrderSettingInput)
- Réponses:
  - 200: Open Order settings was successfully updated
  - 400: Bad Request
  - 404: Following Open Order settings does not exist : {OpenOrderSetting ids}

## Schémas principaux

### OpenOrderSettingInput
Type: object
Propriétés:
- **useManagmentValidationForOOQuotation**: boolean
- **useOpenOrders**: boolean
- **applyMaximumValidity**: boolean
- **applyMaximumValidityValue**: integer (int32)
- **defineMaximumValidity**: boolean
- **defineMaximumValidityValue**: integer (int32)
- **applyMaximumValidityUnit**: string (Valeurs: Days, Weeks, Months, Years)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
