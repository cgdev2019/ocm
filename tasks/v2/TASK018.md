# TASK018 — API V2 CounterInstance

## Contexte
Le domaine « CounterInstance » (tag OpenAPI `CounterInstance`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/accountsManagement/counterInstance` | This API allows to create a new counter instance with its proper counter periods. | createCounterInstance |
| PUT | `/api/rest/v2/accountsManagement/counterInstance/{id}` | This API allows to update an existing counter instance with its proper counter periods. | updateCounterInstance |

#### POST /api/rest/v2/accountsManagement/counterInstance

- Résumé: This API allows to create a new counter instance with its proper counter periods.
- OperationId: createCounterInstance
- Description: Create a new counter instance with its proper counter periods.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CounterInstanceDto (CounterInstanceDto)
- Réponses:
  - 204: Success, no return data
  - 404: Nested entites not found

#### PUT /api/rest/v2/accountsManagement/counterInstance/{id}

- Résumé: This API allows to update an existing counter instance with its proper counter periods.
- OperationId: updateCounterInstance
- Description: Update an existing counter instance with its proper counter periods.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : CounterInstance id
- Corps de requête:
  - optionnel
  - application/json: CounterInstanceDto (CounterInstanceDto)
- Réponses:
  - 204: Success, no return data
  - 404: Nested entites not found

## Schémas principaux

### CounterInstanceDto
Type: object
Propriétés:
- **counterTemplateCode**: string
- **chargeInstanceCode**: string
- **productCode**: string
- **counterPeriods**: Array<CounterPeriodDto> — Counter Periods
- **userAccountCode**: string
- **customerAccountCode**: string
- **billingAccountCode**: string
- **subscriptionCode**: string

### CounterPeriodDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **counterType**: string (Valeurs: USAGE, NOTIFICATION, USAGE_AMOUNT)
- **level**: number
- **periodStartDate**: string
- **periodEndDate**: string
- **value**: number
- **accumulator**: boolean
- **accumulatedValues**: object
- **accumulatorType**: string (Valeurs: MULTI_VALUE, SINGLE_VALUE)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
