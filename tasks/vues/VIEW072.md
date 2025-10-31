# Contacts – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Contacts
- **Ressource** : contacts
- **Clé / route** : list
- **Type d'écran** : Liste simple

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `name.firstName`
- Colonne 2 : source `name.lastName`
- Colonne 3 : source `companies` ; type list
- Colonne 4 : source `contactInformation.mobile`
- Colonne 5 : source `contactInformation.email`

### Recherche et filtres
- champ `searchBar` (filtre {"type":"searchbar","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.name.firstName) LIKE lower('%${value}%')`, `lower(a.name.lastName) LIKE lower('%${value}%')`, `lower(a.contactInformation.mobile) LIKE lower('%${value}%')`, `lower(a.contactInformation.email) LIKE lower('%${value}%')`, `id IN (SELECT co.id FROM org.meveo.model.communication.contact.Contact co INNER JOIN co.addressBookContacts coa WHERE lower(coa.addressBook.customer.code) LIKE lower('%${value}%'))`];\n  return concatSQLQueries(queries, 'OR');\n}"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBar","originalWidth":"222px","withTooltipIcon":{"icon":"Info","title":"{{LabelMessagesPath}}.searchBarContactsInfo","iconStyle":{"color":"blue","pointerEvents":"visible","marginBottom":"1rem"}}}})
- champ `addressCountryDescription` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase address.country.description'"}})
- champ `addressCity` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase address.city'"}})
- champ `addressZipCode` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase address.zipCode'"}})
- champ `nameFirstName` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase name.firstName'"}})
- champ `nameLastName` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase name.lastName'"}})
- champ `reference` (type text, filtre {"prefix":"wildcardOrIgnoreCase"})
- champ `companies` (type text, filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return `id IN (SELECT co.id FROM org.meveo.model.communication.contact.Contact co INNER JOIN co.addressBookContacts coa WHERE lower(coa.addressBook.customer.code) LIKE lower('%${value}%'))`;\n}"}})
- champ `contactInformationMobile` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase contactInformation.mobile'"}})
- champ `contactInformationEmail` (type text, filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase contactInformation.email'"}})

### Actions et interactions
- Bouton de création disponible.
- Suppression possible depuis la liste.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 30 éléments.
- Choix de pagination : [30,50,100].
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/contact',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/contact',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/contact/',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'contact',
  method: 'POST',
  responseContainerId
}).
- UPDATE : getUpdateProvider({
  url: 'contact',
  method: 'PUT'
}).
- DELETE : url `contact/:code`.

## Localisation et libellés
- Libellé FR : Contacts.
- Libellé EN : Contacts.