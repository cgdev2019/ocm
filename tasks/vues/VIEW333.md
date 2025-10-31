# Rapports générés – List

- **Groupe fonctionnel** : Operation
- **Module** : Rapports générés
- **Ressource** : report-extracts-history
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : report-extracts (priorité 3)
- **Icône** : FindInPage

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `reportExtract.code`
- Colonne 2 : source `reportExtract.description`
- Colonne 3 : source `reportExtract.category`
- Colonne 4 : source `startDate` ; type date
- Colonne 5 : source `endDate` ; type date
- Colonne 6 : source `lineCount`
- Colonne 7 : source `status` ; type boolean
- Colonne 8 : source `errorMessage`
- Colonne 9 : source `auditable.creator`
- Colonne 10 : type actions

### Recherche et filtres
- champ `searchBar` (filtre {"type":"searchbar","transformFilterKey":{"__code":"() => 'or reportExtract.code reportExtract.description reportExtract.category errorMessage'"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBarReportExtract","originalWidth":"222px","withTooltipIcon":{"icon":"Info","title":"{{LabelMessagePath}}.searchBarReportExtractInfo","iconStyle":{"position":"absolute","top":{"__code":"-7"},"left":{"__code":"-2"},"color":"blue","pointerEvents":"visible"}}}})
- champ `startDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"startDate BETWEEN __startDate AND __endDate"})
- champ `endDate` (type date, filtre {"type":"date-range","dateFormat":"YYYY-MM-DD","SQLFormat":"endDate BETWEEN __startDate AND __endDate"})
- champ `status` (type boolean, filtre true)
- champ `creator` (filtre {"transformFilterKey":{"__code":"() => 'wildcardOrIgnoreCase auditable.creator'"}})

### Actions et interactions
- Actions de masse désactivées.

### Pagination et tri
- Tri initial : {"field":"id","order":"DESC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/ReportExtractExecutionResult',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/ReportExtractExecutionResult',
  nestedEntities
}).
- DOWNLOAD_EXTRACT : url `admin/files/downloadFile?file=:filePath`, options {"method":"GET"}.

## Localisation et libellés
- Libellé FR : Rapports générés.
- Libellé EN : Report extract history.