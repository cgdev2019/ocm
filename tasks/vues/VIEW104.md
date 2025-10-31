# Configuration globale – Page par défaut

- **Groupe fonctionnel** : B2B customer care
- **Module** : Configuration globale
- **Ressource** : global-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : AccountTree

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Global Settings — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/globalSettings',
  nestedEntities
}).
- CREATE : getUpdateProvider({
  url: 'v2/setting/globalSettings',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/setting/globalSettings/${data.id}`;
  },
  method: 'PUT'
}).
- GET_ONE : getListV2({
  url: 'v2/generic/globalSettings/',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Configuration globale.
- Libellé EN : Global settings.