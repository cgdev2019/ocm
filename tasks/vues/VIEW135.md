# Payment Methods – PATH PAYMENT METHODS EDIT

- **Groupe fonctionnel** : B2B customer care
- **Module** : Payment Methods
- **Ressource** : payment-methods
- **Clé / route** : PATH_PAYMENT_METHODS_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Payment Methods — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/paymentMethod',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/paymentMethod/',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/paymentMethod',
  responseContainer: 'data',
  nestedEntities,
  genericFields
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/paymentMethod',
  responseContainer: 'data',
  nestedEntities,
  genericFields
}).
- CREATE : getCreateProvider({
  url: 'payment/paymentMethod',
  keyColumn
}).
- UPDATE : getUpdateProvider({
  url: 'payment/paymentMethod',
  keyColumn,
  method: 'PUT'
}).
- DELETE_PAYMENT_METHOD : getDeleteProvider({
  url: ({
    params
  }) => {
    const {
      data: {
        id
      }
    } = params;
    return `payment/paymentMethod?id=${id}`;
  },
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'payment/paymentMethod',
  responseContainer: 'data',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Payment Methods.
- Libellé EN : Payment Methods.