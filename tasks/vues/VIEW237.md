# Écritures comptables – List

- **Groupe fonctionnel** : Finance
- **Module** : Écritures comptables
- **Ressource** : accounting-entries
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : reports (priorité 0/5)
- **Icône** : Dashboard

## Contenu principal

### Recherche et filtres
- champ `operationNumber` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterNumberToTextValue('operationNumber', value, journalEntryTableAlias);\n}"}})
- champ `accountOperation->journal->code` (type list, filtre {"order":3})
- champ `accountingCode->chartOfAccountTypeEnum` (type list, filtre true)
- champ `supportingDocumentRef->tradingCurrency->currency->currencyCode` (référence {{modulePath}}/{{FINANCE_TRADING_CURRENCIES}}, filtre true)
- champ `documentRefInvoiceNumber` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return `(lower(reference) LIKE lower('%${value}%'))`;\n}"}})
- champ `accountOperationAccountingDate` (type date, filtre {"order":4,"transformFilterKey":{"__code":"() => 'accountOperation.accountingDate'"},"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"{{journalEntryTableAlias}}.accountOperation.accountingDate BETWEEN __startDate AND __endDate"})
- champ `currencyAmount` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterNumberToTextValue('amount', value, journalEntryTableAlias);\n}"}})
- champ `amountDebit` (filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const query = concatSQLQueries([transformFilterMinMaxValue(value, `a.amount`), `${journalEntryTableAlias}.direction = 'DEBIT'`]);\n  return query;\n}"}})
- champ `amountCredit` (type range number, filtre {"type":"range-number-two","transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  const query = concatSQLQueries([transformFilterMinMaxValue(value, `a.amount`), `${journalEntryTableAlias}.direction = 'CREDIT'`]);\n  return query;\n}"}})
- champ `documentType` (type autocomplete array, sélection multiple, filtre true)
- champ `accountingCodeCode` (filtre {"order":0,"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterCodeValue(value, `${journalEntryTableAlias}.accountingCode`);\n}"}})
- champ `accountingCodeDescription` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterDescOrCodeValue(value, `${journalEntryTableAlias}.accountingCode`);\n}"}})
- champ `customerAccountCode` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterCodeValue(value, `${journalEntryTableAlias}.customerAccount`);\n}"}})
- champ `customerDescriptionOrFullName` (filtre {"order":1,"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterDescOrFullNameValue(value, `${journalEntryTableAlias}.customerAccount`);\n}"}})
- champ `currency` (filtre true)
- champ `sellerDescription` (filtre {"order":2,"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterDescOrCodeValue(value, `${journalEntryTableAlias}.seller`);\n}"}})
- champ `sellerCode` (filtre {"transformFilterKey":{"__code":"() => 'SQL'"},"transformFilterValue":{"__code":"value => {\n  return transformFilterCodeValue(value, `${journalEntryTableAlias}.seller`);\n}"}})
- champ `matchingCode` (filtre {"transformFilterKey":{"__code":"() => 'matchingCode'"},"transformFilterValue":{"__code":"value => {\n  return `*${value}*`;\n}"}})

### Actions et interactions
- Actions personnalisées présentes :
  - Action personnalisée (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].
- Tri initial : {"field":"operationNumber","order":"ASC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/journalEntry',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/journalEntry'
}, nestedEntities).
- EXPORT_LIST : url `[object Object]`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Écritures comptables.
- Libellé EN : Accounting entries.