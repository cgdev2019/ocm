# Paramètres – Page par défaut

- **Groupe fonctionnel** : B2B customer care
- **Module** : Paramètres
- **Ressource** : dunning-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : dunning (priorité 9)
- **Icône** : Settings

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create B2BDunning Settings — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/DunningSettings',
  responseContainer: 'data',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/DunningSettings/',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/dunning',
  responseContainer: 'data',
  nestedEntities,
  keyColumn: 'code'
}).
- COLLECTION_PLAN_STATUS : getCreateProvider({
  url: 'v2/dunning/collectionPlanStatus',
  keyColumn: 'id'
}).
- COLLECTION_PLAN_STATUS_UPDATE : getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_PLAN_STATUS', props),
  method: 'PUT',
  keyColumn: 'id'
}).
- COLLECTION_PLAN_STATUS_DELETE : getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_PLAN_STATUS', props),
  method: 'DELETE'
}).
- COLLECTION_MANAGMENT : getCreateProvider({
  url: 'v2/dunning/dunningAgent'
}).
- COLLECTION_MANAGMENT_UPDATE : getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_MANAGMENT', props),
  method: 'PUT',
  keyColumn: 'id'
}).
- COLLECTION_MANAGMENT_DELETE : getCreateProvider({
  url: props => getUrlByEntityType('COLLECTION_MANAGMENT', props),
  method: 'DELETE'
}).
- PAYMENT_RETRIES : getCreateProvider({
  url: 'v2/dunning/paymentRetry',
  keyColumn: 'id'
}).
- PAYMENT_RETRIES_UPDATE : getCreateProvider({
  url: props => getUrlByEntityType('PAYMENT_RETRIES', props),
  method: 'PUT',
  keyColumn: 'id'
}).
- PAYMENT_RETRIES_DELETE : getCreateProvider({
  url: props => getUrlByEntityType('PAYMENT_RETRIES', props),
  method: 'DELETE'
}).
- STOP_REASON : getCreateProvider({
  url: 'v2/dunning/stopReason'
}).
- STOP_REASON_UPDATE : getCreateProvider({
  url: props => getUrlByEntityType('STOP_REASON', props),
  method: 'PUT',
  keyColumn: 'id'
}).
- STOP_REASON_DELETE : getCreateProvider({
  url: props => getUrlByEntityType('STOP_REASON', props),
  method: 'DELETE'
}).
- PAUSE_REASON : getCreateProvider({
  url: 'v2/dunning/pauseReason'
}).
- PAUSE_REASON_UPDATE : getCreateProvider({
  url: props => getUrlByEntityType('PAUSE_REASON', props),
  method: 'PUT',
  keyColumn: 'id'
}).
- PAUSE_REASON_DELETE : getCreateProvider({
  url: props => getUrlByEntityType('PAUSE_REASON', props),
  method: 'DELETE'
}).
- INVOICE_STATUS : getCreateProvider({
  url: 'v2/dunning/invoiceStatus',
  keyColumn: 'id'
}).
- INVOICE_STATUS_UPDATE : getCreateProvider({
  url: props => getUrlByEntityType('INVOICE_STATUS', props),
  method: 'PUT',
  keyColumn: 'id'
}).
- INVOICE_STATUS_DELETE : getCreateProvider({
  url: props => getUrlByEntityType('INVOICE_STATUS', props),
  method: 'DELETE'
}).
- CREATE : getCreateProvider({
  url: 'v2/payment/dunning'
}).
- UPDATE : getCreateProvider({
  url: 'v2/payment/dunning/:id',
  method: 'PUT',
  keyColumn: 'id'
}).
- DELETE : getDeleteProvider({
  url: 'v2/payment/dunning/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/payment/dunning/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Paramètres.
- Libellé EN : Settings.