# Message portail – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Message portail
- **Ressource** : portal-message
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : application-settings (priorité n/a)
- **Icône** : EuroSymbol

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Portal Message Edit — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/provider',
  nestedEntities
}).
- CREATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/admin/providers/${data.code}`;
  },
  method: 'PUT'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/admin/providers/${data.code}`;
  },
  method: 'PUT'
}).
- GET_ONE : getListV2({
  url: 'v2/generic/provider/',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Message portail.
- Libellé EN : Portal message.