# Contrats cadre – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Contrats cadre
- **Ressource** : contracts
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : ChromeReaderMode

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code` ; utilisable en filtre
- Colonne 2 : source `status` ; type status ; choix (3) ; utilisable en filtre
- Colonne 3 : source `description` ; utilisable en filtre
- Colonne 4 : source `contractDate` ; type date
- Colonne 5 : source `auditable.created` ; type date

### Recherche et filtres
- champ `seller.id` (type list picker, référence {{modulePath}}/{{B2B_SELLERS}}, filtre true)
- champ `customer.code` (type list picker, référence {{modulePath}}/{{B2B_CUSTOMERS}}, filtre true)
- champ `customerAccount.code` (type list picker, référence {{modulePath}}/{{B2B_CUSTOMER_ACCOUNTS}}, filtre true)
- champ `billingAccount.id` (type list picker, référence {{modulePath}}/{{B2B_BILLING_ACCOUNTS}}, filtre true)
- champ `beginDate` (type date, filtre {"prefix":"fromRangeInclusive"})
- champ `endDate` (type date, filtre {"prefix":"toRangeInclusive"})

### Actions et interactions
- Export des données autorisé.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/contract',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/contract',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/contract/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/contracts',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/contracts',
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/generic/contract',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/contracts/',
  method: 'DELETE'
}).
- UPDATE_STATUS : url `cpq/contracts/:code/status/:toStatus`, options {"method":"PUT"}.

## Localisation et libellés
- Libellé FR : Contrats cadre.
- Libellé EN : Framework agreements.