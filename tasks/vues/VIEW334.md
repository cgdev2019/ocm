# Opérations de portefeuille – List

- **Groupe fonctionnel** : Operation
- **Module** : Opérations de portefeuille
- **Ressource** : wallet-operations
- **Clé / route** : list
- **Type d'écran** : Liste simple

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `id`
- Colonne 2 : source `operationDate` ; type date
- Colonne 3 : source `subscription` ; type link
- Colonne 4 : source `serviceInstance` ; type link
- Colonne 5 : source `chargeInstance` ; type link
- Colonne 6 : source `parameter1`
- Colonne 7 : source `parameter2`
- Colonne 8 : source `parameter3`
- Colonne 9 : source `status` ; type status
- Colonne 10 : source `billed` ; type boolean
- Colonne 11 : source `quantity`
- Colonne 12 : source `amountWithoutTax` ; type number
- Colonne 13 : source `currency.currencyCode`
- Colonne 14 : source `offerTemplate` ; type link
- Colonne 15 : source `pricePlanMatrixVersion` ; type link
- Colonne 16 : source `contract` ; type link
- Colonne 17 : source `subscription.order` ; type link

### Recherche et filtres
- champ sans source explicite
- champ `status` (type autocomplete array, sélection multiple, filtre true)
- champ `id` (filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.id`)"}})
- champ sans source explicite
- champ `quantity` (filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.quantity`)"}})
- champ `amountWithoutTax` (filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => transformFilterMinMaxValue(value, `a.amountWithoutTax`)"}})
- champ `subscription` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.subscription.code) LIKE lower('%${value}%')`, `lower(a.subscription.description) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `chargeInstance` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.chargeInstance.code) LIKE lower('%${value}%')`, `lower(a.chargeInstance.description) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `product` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.serviceInstance.productVersion.product.code) LIKE lower('%${value}%')`, `lower(a.serviceInstance.productVersion.product.description) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `currency` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.currency.currencyCode) LIKE lower('%${value}%')`, `lower(a.currency.descriptionEn) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `offerTemplate` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.offerTemplate.code) LIKE lower('%${value}%')`, `lower(a.offerTemplate.description) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `contract` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.contract.code) LIKE lower('%${value}%')`, `lower(a.contract.description) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `orderNumber` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.subscription.order.description) LIKE lower('%${value}%')`, `lower(a.subscription.order.orderNumber) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `billingAccount` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const queries = [`lower(a.billingAccount.code) LIKE lower('%${value}%')`, `lower(a.billingAccount.description) LIKE lower('%${value}%')`];\n  return concatSQLQueries(queries, 'OR');\n}"}})
- champ `unbilled` (type boolean, filtre {"transformFilterKey":{"__code":"(key, value) => !!value && '$filter1'"},"transformFilterValue":{"__code":"value => {\n  if (value) {\n    return {\n      $operator: 'OR',\n      'inList status': ['OPEN', 'F_TO_RERATE', 'REJECTED'],\n      $filter2: {\n        $operator: 'AND',\n        status: 'TREATED',\n        'ratedTransaction.status': 'OPEN'\n      }\n    };\n  }\n}"}})

### Actions et interactions
- Actions de masse personnalisées disponibles.

### Pagination et tri
- Pagination par 50 éléments.
- Choix de pagination : [20,50,100].
- Tri par défaut avancé : {"field":"id","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/walletOperation',
  responseContainer: 'data',
  nestedEntities
}).
- TO_RERATE : url `v2/rating/walletOperation/markToRerate`, options {"method":"POST"}.
- JOB_EXECUTE : url `job/execute`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Opérations de portefeuille.
- Libellé EN : Wallet operations.