# Taxes – List

- **Groupe fonctionnel** : Administration
- **Module** : Taxes
- **Ressource** : taxes
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : finance-settings (priorité 3)
- **Icône** : Euro

## Contenu principal

### Recherche et filtres
- champ `searchBar` (filtre {"type":"searchbar","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const query = `a.id in (select t.id from org.meveo.model.billing.Tax t left join t.accountingCode ac where ((lower(t.code) LIKE lower('%${value}%')) OR (lower(t.description) LIKE lower('%${value}%')) OR (lower(ac.code) LIKE lower('%${value}%'))))`;\n  return query;\n}"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBar","originalWidth":"370px","openedWidth":"400px"}})
- champ `percent` (filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, 'a.percent')"}})
- champ `composite` (type boolean, filtre true)

### Actions et interactions
- Bouton de création disponible.
- Suppression possible depuis la liste.
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.actions.create (create).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 50 éléments.
- Choix de pagination : [20,50,100].
- Tri initial : {"field":"code","order":"ASC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/tax',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/tax',
  nestedEntities
}).
- CREATE : getCreateProvider({
  keyColumn,
  url: 'tax/createOrUpdate',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  keyColumn,
  url: 'tax/createOrUpdate',
  responseContainer,
  responseContainerId,
  method: 'POST'
}).
- GET_ONE : getOneV2({
  keyColumn,
  url: 'v2/generic/tax/',
  nestedEntities
}).
- DELETE : getDeleteProvider({
  url: 'v1/taxes/',
  method: 'DELETE'
}).

## Localisation et libellés
- Libellé FR : Taxes.
- Libellé EN : Taxes.