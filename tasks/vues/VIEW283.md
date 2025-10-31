# Modèles de dépôt de garantie – List

- **Groupe fonctionnel** : Finance
- **Module** : Modèles de dépôt de garantie
- **Ressource** : security-deposit-templates
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : multi-balances/templates (priorité 2/4)

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `templateName` ; utilisable en filtre
- Colonne 2 : source `currency.currencyCode`
- Colonne 3 : source `numberOfInstantiation` ; type number
- Colonne 4 : source `status` ; type status
- Colonne 5 : source `auditable.created` ; type date

### Recherche et filtres
- champ `creationDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","endDateFormat":"YYYY-MM-DD HH:mm","SQLFormat":"auditable.created BETWEEN __startDate AND __endDate"})

### Actions et interactions
- Bouton de création disponible.
- Actions de masse personnalisées disponibles.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 20 éléments.
- Choix de pagination : [5,10,20].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/securityDepositTemplate',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/securityDepositTemplate',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'v2/securityDeposit/securityDepositTemplate',
  responseContainer: 'securityDepositTemplate',
  responseContainerId: 'id',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'v2/securityDeposit/securityDepositTemplate/:id',
  responseContainer,
  responseContainerId,
  method: 'PUT'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/securityDepositTemplate/',
  nestedEntities
}).
- DELETE_MANY : getDeleteProvider({
  url: 'v2/generic/all/securityDepositTemplate',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/securityDeposit/securityDepositTemplate/changeStatus`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Modèles de dépôt de garantie.
- Libellé EN : Security deposit templates.