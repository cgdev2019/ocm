# Balance agée clients – List

- **Groupe fonctionnel** : Finance
- **Module** : Balance agée clients
- **Ressource** : aged-trial-balance
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal

### Recherche et filtres
- champ `date` (filtre {"multiple":false,"transformFilterKey":{"__code":"(key, value) => 'startDate'"},"transformFilterValue":{"__code":"value => transformFilter(value)"},"inputProps":{"allowEmpty":false,"customHandleChange":{"__code":"({\n  handleChange,\n  setDisplayValue,\n  form\n}) => eventOrValue => {\n  const {\n    value\n  } = eventOrValue.target;\n  if (value === 'customStartDate') {\n    setDisplayValue(value);\n    form.change('displayCustomStartDate', true);\n  } else {\n    form.change('displayCustomStartDate', false);\n    form.change('customStartDate', '');\n    return handleChange(eventOrValue);\n  }\n}"}}})
- champ `customStartDate` (type date, filtre {"transformFilterKey":{"__code":"(key, value, {\n  filters = {}\n}) => {\n  return !!filters.displayCustomStartDate ? 'startDate' : '';\n}"},"transformFilterValue":{"__code":"value => transformFilter('customStartDate', value)"}})
- champ `stepInDays` (filtre {"type":"number","inputProps":{"min":1}})
- champ `numberOfPeriods` (filtre {"type":"number","inputProps":{"min":1}})
- champ `customerAccountCode` (filtre true)
- champ `customerAccountDescription` (filtre true)
- champ `sellerDescription` (filtre {"order":0})
- champ `sellerCode` (filtre true)
- champ `invoiceNumber` (filtre true)
- champ `startDueDate` (type date, filtre {"transformFilterValue":{"__code":"value => moment(value).format(DATE_FORMAT)"}})
- champ `endDueDate` (type date, filtre {"transformFilterValue":{"__code":"value => moment(value).format(DATE_FORMAT)"}})
- champ `funcCurrency` (référence {{modulePath}}/{{FINANCE_TRADING_CURRENCIES}}, filtre true)
- champ `tradingCurrency` (référence {{modulePath}}/{{FINANCE_TRADING_CURRENCIES}}, filtre true)

### Actions et interactions
- Export des données autorisé.
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 50 éléments.
- Choix de pagination : [50,100,150].
- Tri par défaut avancé : {"field":"dueDate","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/standardReports/AgedReceivables'
}).
- GET_MANY : getListV2({
  url: 'v2/standardReports/AgedReceivables',
  method: 'GET'
}).

## Localisation et libellés
- Libellé FR : Balance agée clients.
- Libellé EN : Aged trial balance.