# Abonnements – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Abonnements
- **Ressource** : subscriptions
- **Entité métier** : org.meveo.model.billing.Subscription
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `userAccount.code` ; type link ; utilisable en filtre
- Colonne 3 : source `description` ; utilisable en filtre
- Colonne 4 : source `offer.id`
- Colonne 5 : source `status` ; type status ; choix (7) ; utilisable en filtre
- Colonne 6 : source `subscriptionDate` ; type date ; utilisable en filtre
- Colonne 7 : source `validity.from` ; type date
- Colonne 8 : source `validity.to` ; type date
- Colonne 9 : source `versionNumber` ; type number ; utilisable en filtre
- Colonne 10 : source `auditable.created` ; type date

### Recherche et filtres
- champ `searchBar` (filtre {"order":0,"type":"searchbar","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const query = `a.id in (select t.id from org.meveo.model.billing.Subscription t left join t.userAccount ac where ((lower(t.code) LIKE lower('%${value}%')) OR (lower(t.salesPersonName) LIKE lower('%${value}%')) OR (lower(ac.billingAccount.code) LIKE lower('%${value}%')) OR (lower(ac.code) LIKE lower('%${value}%'))))`;\n  return query;\n}"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBar","originalWidth":"222px"}})
- champ `offer` (filtre {"nestedField":{"source":"name","prefix":"wildcardOrIgnoreCase"}})
- champ `validityRange` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"(validity.from IS NULL OR validity.from >= __startDate) AND (validity.to IS NULL OR validity.to <= __endDate)"})
- champ `salesPersonName` (filtre {"prefix":"wildcardOrIgnoreCase"})

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
  - ra.action.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

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