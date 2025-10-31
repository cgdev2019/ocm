# Rapport des commandes ouvertes – List

- **Groupe fonctionnel** : Finance
- **Module** : Rapport des commandes ouvertes
- **Ressource** : open-orders
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : open-orders (priorité 4)
- **Icône** : Today

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `openOrderNumber`
- Colonne 2 : source `billingAccount.code` ; type link
- Colonne 3 : source `billingAccount.customerAccount.code`
- Colonne 4 : source `activationDate` ; type date
- Colonne 5 : source `currency.currencyCode`
- Colonne 6 : source `initialAmount` ; type number
- Colonne 7 : source `balance` ; type number
- Colonne 8 : source `invoiced` ; type number
- Colonne 9 : source `status` ; type status ; choix (undefined)

### Recherche et filtres
- champ sans source explicite
- champ sans source explicite
- champ sans source explicite
- champ sans source explicite
- champ sans source explicite
- champ `invoiced` (filtre {"type":"number","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => `a.initialAmount - a.balance = '${Number(value)}'`"}})
- champ `invoicedBet` (filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, 'a.initialAmount - a.balance')"}})
- champ `toRange invoiced` (type number, filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => `a.initialAmount - a.balance < '${Number(value)}'`"}})
- champ `fromRangeExclusive invoiced` (type number, filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => `a.initialAmount - a.balance > '${Number(value)}'`"}})
- champ `status` (type status, filtre {"multiple":true,"type":"autocomplete-array","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"(value = []) => {\n  if (!isArray(value)) return;\n  const queries = value.map(status => {\n    if (status == 'CANCELED') {\n      return `status = 'CANCELED'`;\n    } else if (status == 'SOLD_OUT') {\n      return `status != 'CANCELED' AND balance<=0`;\n    } else if (status == 'EXPIRED') {\n      return `status != 'CANCELED' AND balance>0 AND endOfValidityDate <= CURRENT_TIMESTAMP()`;\n    } else if (status == 'IN_USE') {\n      return `status != 'CANCELED' AND balance>0 AND endOfValidityDate>CURRENT_TIMESTAMP() AND activationDate<=CURRENT_TIMESTAMP()`;\n    } else if (status == 'NEW') {\n      return `status != 'CANCELED' AND activationDate>CURRENT_TIMESTAMP()`;\n    }\n  });\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `tags` (filtre {"type":"reference-list-with-list-picker","listPickerProps":{"reference":"{{modulePath}}/{{FINANCE_TAGS}}","referenceField":"code","referenceFieldId":"code","picker":{"rowsPerPage":10,"rowsPerPageOptions":[10,20,40],"fields":[{"source":"code","clearOnUnmount":true,"filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"name","alwaysOn":true,"filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"parentTag.code"},{"source":"filterEl","type":"long-text","filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"seller.code"}],"table":{"rowsPerPage":20,"rowsPerPageOptions":false}},"style":{"minWidth":"10rem"}},"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"(value = []) => {\n  if (!isArray(value)) return;\n  const codes = value.map(item => `'${item.code}'`);\n  const total = codes.length;\n  return `id IN (SELECT oo.id FROM org.meveo.model.ordering.OpenOrder oo JOIN oo.tags tags GROUP BY oo.id HAVING sum(case when tags.code IN (${codes.join()}) then 1 else 0 end) = ${total} and sum(case when tags.code not in (${codes.join()}) then 1 else 0 end) = 0)`;\n}"}})
- champ `containsTags` (filtre {"type":"reference-list-with-list-picker","listPickerProps":{"reference":"{{modulePath}}/{{FINANCE_TAGS}}","referenceField":"code","referenceFieldId":"code","picker":{"rowsPerPage":10,"rowsPerPageOptions":[10,20,40],"fields":[{"source":"code","clearOnUnmount":true,"filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"name","alwaysOn":true,"filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"parentTag.code"},{"source":"filterEl","type":"long-text","filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"seller.code"}],"table":{"rowsPerPage":20,"rowsPerPageOptions":false}},"style":{"minWidth":"10rem"}},"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"(value = []) => {\n  if (!isArray(value)) return;\n  const codes = value.map(item => `'${item.code}'`);\n  return `id IN (SELECT oo.id FROM org.meveo.model.ordering.OpenOrder oo JOIN oo.tags tags WHERE tags.code IN (${codes.join()}))`;\n}"}})
- champ `doesNotContainsTags` (filtre {"type":"reference-list-with-list-picker","listPickerProps":{"reference":"{{modulePath}}/{{FINANCE_TAGS}}","referenceField":"code","referenceFieldId":"code","picker":{"rowsPerPage":10,"rowsPerPageOptions":[10,20,40],"fields":[{"source":"code","clearOnUnmount":true,"filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"name","alwaysOn":true,"filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"parentTag.code"},{"source":"filterEl","type":"long-text","filter":{"prefix":"wildcardOrIgnoreCase"}},{"source":"seller.code"}],"table":{"rowsPerPage":20,"rowsPerPageOptions":false}},"style":{"minWidth":"10rem"}},"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"(value = []) => {\n  if (!isArray(value)) return;\n  const codes = value.map(item => `'${item.code}'`);\n  return `id not IN (SELECT oo.id FROM org.meveo.model.ordering.OpenOrder oo JOIN oo.tags tags WHERE tags.code IN (${codes.join()}))`;\n}"}})

### Actions et interactions
- Actions personnalisées présentes :
  - {{LabelActionPath}}.exportCsv (action directe).
  - {{LabelActionPath}}.exportXlsx (action directe).
  - {{LabelActionPath}}.exportPdf (action directe).
- Ouverture d'une ligne sur l'événement `[object Object]`.

### Pagination et tri
- Pagination par 50 éléments.
- Choix de pagination : [50,100,200].
- Tri initial : {"field":"auditable.created","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/OpenOrder',
  nestedEntities
  //keyColumn: 'code'
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/OpenOrder/',
  // keyColumn: 'code',
  nestedEntities
}).
- UPDATE : getUpdateProvider({
  url: ({
    params = {}
  }) => {
    const {
      data = {}
    } = params;
    const {
      code
    } = data;
    return `v2/ordering/openOrder/${code}`;
  },
  method: 'PUT'
}).
- DELETE : getDeleteProvider({
  url: 'v2/ordering/open-order',
  method: 'DELETE'
}).
- CHANGE_STATUS : url `v2/ordering/OpenOrder/:code/status/status`, options {"method":"PUT"}.
- EXPORT_LIST : url `v2/generic/export/:entityName/:format`, options {"method":"POST"}.
- GENERATE_INVOICE : url `v2/billing/invoices/generate`, options {"method":"POST"}.
- CANCEL : getCustomProvider({
  url: ({
    params = {}
  }) => {
    const {
      data = {}
    } = params;
    const {
      code
    } = data;
    return `v2/ordering/openOrder/${code}/cancel`;
  },
  method: 'POST'
}).

## Localisation et libellés
- Libellé FR : Rapport des commandes ouvertes.
- Libellé EN : Open orders report.