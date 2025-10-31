# Paramètres de paiement – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Paramètres de paiement
- **Ressource** : payment-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : finance-settings (priorité 3)
- **Icône** : AccountBalance

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Payment Settings — aucun paramètre spécifique confirmé dans la configuration

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
- Libellé FR : Paramètres de paiement.
- Libellé EN : Payment settings.