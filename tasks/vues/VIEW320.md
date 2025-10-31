# Paramètres EDR – Page par défaut

- **Groupe fonctionnel** : Operation
- **Module** : Paramètres EDR
- **Ressource** : event-details-records-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : mediation (priorité 2)
- **Icône** : QueryBuilder

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : EDRSettings — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/mediationSetting',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/mediationSetting',
  nestedEntities
}).
- CREATE : getUpdateProvider({
  url: 'v2/mediationSetting',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/mediationSetting/${data.id}`;
  },
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Paramètres EDR.
- Libellé EN : EDR settings.