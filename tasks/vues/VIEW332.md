# Génération de rapports – List

- **Groupe fonctionnel** : Operation
- **Module** : Génération de rapports
- **Ressource** : report-extracts
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : report-extracts (priorité 3)
- **Icône** : FindInPage

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `description`
- Colonne 3 : source `category`
- Colonne 4 : source `filenameFormat`
- Colonne 5 : source `active` ; type boolean
- Colonne 6 : source `customTableCode`
- Colonne 7 : source `executionResults.endDate` ; type date
- Colonne 8 : source `executionResults.status` ; type boolean
- Colonne 9 : type actions

### Recherche et filtres
- champ `searchBar` (filtre {"type":"searchbar","transformFilterKey":{"__code":"() => 'or code description category customTableCode'"},"inputProps":{"placeholder":"{{LabelPlaceholdersPath}}.searchBarReportExtract","originalWidth":"222px","withTooltipIcon":{"icon":"Info","title":"{{LabelMessagePath}}.searchBarReportExtractInfo","iconStyle":{"position":"absolute","top":{"__code":"-7"},"left":{"__code":"-2"},"color":"blue","pointerEvents":"visible"}}}})

### Actions et interactions
- Actions de masse désactivées.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/reportExtract',
  nestedEntities,
  genericFields
}).
- GET_MANY : url `v2/generic/all/reportExtract`.
- CREATE : url `v2/generic/reportExtract`.
- UPDATE : url `v2/generic/reportExtract/:id`, options {"method":"PUT"}.
- DELETE : url `v2/generic/reportExtract`.
- DELETE_MANY : url `v2/generic/reportExtract`.
- DISABLE_EXTRACT : url `finance/reportExtracts/:code/disable`, options {"method":"POST"}.
- ENABLE_EXTRACT : url `finance/reportExtracts/:code/enable`, options {"method":"POST"}.
- RUN_EXTRACT : url `finance/reportExtracts/run`, options {"method":"POST"}.
- DOWNLOAD_CSV_FILE : url `admin/files/downloadFile?file=:filePath`, options {"method":"GET"}.

## Localisation et libellés
- Libellé FR : Génération de rapports.
- Libellé EN : Report extracts.