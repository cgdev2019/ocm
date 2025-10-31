# Evénements de PDL – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Evénements de PDL
- **Ressource** : event-pod
- **Clé / route** : list
- **Type d'écran** : Liste simple

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `cf_pevent_id`
- Colonne 2 : source `cf_pevent_ext_id`
- Colonne 3 : source `cf_pevent_ext_id` ; utilisable en filtre
- Colonne 4 : source `cf_pevent_event_date` ; type date
- Colonne 5 : source `cf_pevent_event_type` ; utilisable en filtre
- Colonne 6 : source `cf_pevent_event_nature` ; libellé "Nature" ; utilisable en filtre
- Colonne 7 : source `cf_pevent_statut_core` ; type status ; utilisable en filtre
- Colonne 8 : source `cf_pevent_err_code` ; utilisable en filtre

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.

## Fournisseur de données
- GET_LIST : url `customTable/list/ct_pod_event`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Evénements de PDL.
- Libellé EN : PoD events.