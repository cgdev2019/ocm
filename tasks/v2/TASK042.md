# TASK042 — API V2 Media

## Contexte
Le domaine « Media » (tag OpenAPI `Media`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/media/files/upload` | Upload a media file | uploadFile |

#### POST /api/rest/v2/media/files/upload

- Résumé: Upload a media file
- OperationId: uploadFile
- Description: Upload a media file
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: MediaFile (MediaFile)
- Réponses:
  - 200: success
  - 400: media file upload failed
  - 404: Entity does not exist
  - 412: Missing parameters

## Schémas principaux

### MediaFile
Type: object
Propriétés:
- **data**: Array<string (byte)>
- **fileName**: string
- **fileUrl**: string (url)
- **level**: string (Valeurs: OFFER_TEMPLATE, PRODUCT, QUOTE)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
