# Abonnements – PATH SUBSCRIPTION CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Abonnements
- **Ressource** : subscriptions
- **Entité métier** : org.meveo.model.billing.Subscription
- **Clé / route** : PATH_SUBSCRIPTION_CREATE
- **Type d'écran** : Formulaire de création
- **Icône** : ChromeReaderMode

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create B2BSubscription — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/subscription',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/subscription',
  keyColumn,
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/subscription',
  keyColumn,
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/subscription/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'billing/subscription/subscribeAndInstantiateProducts',
  method: 'POST',
  responseContainerId: 'entityId'
}).
- GET_SUBSCRIPTIONS : url `v2/generic/all/subscription`.
- UPDATE : getUpdateProvider({
  url: 'billing/subscription',
  method: 'PUT',
  responseContainerId: 'entityId'
}).
- DELETE_SI : getUpdateProvider({
  url: 'billing/subscription/:id/delete-si',
  method: 'DELETE',
  responseContainerId: 'entityId'
}).
- TERMINATE : url `billing/subscription/terminate`, options {"method":"POST"}.
- TERMINATE_SERVICE : url `billing/subscription/terminateServices`, options {"method":"POST"}.
- SUSPEND_SERVICE : url `billing/subscription/suspendServices`, options {"method":"PUT"}.
- ACTIVATE_SERVICE : url `billing/subscription/activateServices`, options {"method":"POST"}.
- RESUME_SERVICE : url `billing/subscription/resumeServices`, options {"method":"PUT"}.
- ACTIVATE : url `billing/subscription/resume`, options {"method":"PUT"}.
- SUSPEND : url `billing/subscription/suspend`, options {"method":"PUT"}.
- CHANGE_OFFER : url `[object Object]`, options {"method":"PATCH"}.
- CHANGE_CONSUMER : url `[object Object]`, options {"method":"POST"}.
- ROLLBACK : url `[object Object]`, options {"method":"PATCH"}.

## Localisation et libellés
- Libellé FR : Abonnements.
- Libellé EN : Subscriptions.