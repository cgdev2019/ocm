# TASK065 — API V2 Sans tag

## Contexte
Le domaine « Sans tag » (tag OpenAPI `_untagged`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| PUT | `/accountReceivable/accountOperation/changeStatus` | mark account operation as exported | markExported |
| POST | `/billing/invoiceLines/markForAdjustment` | This API will allow mark adjustment for invoice lines | markForAdjustment |
| POST | `/billing/invoiceLines/unmarkForAdjustment` | This API will allow creating adjustment based on an existing validated invoice. | unmarkForAdjustment |
| POST | `/billing/invoices/{id}/calculateSubTotals` | Calucate subtotals | calculateSubTotals |
| PUT | `/billing/invoices/{id}/calculation` | calculate invoice | calculateInvoice |
| PUT | `/billing/invoices/{id}/cancellation` | Cancel invoice | cancelInvoice |
| POST | `/billing/invoices/{id}/createAdjustment` | This API will allow creating adjustment based on an existing validated invoice. | createAdjustment |
| POST | `/billing/invoices/{id}/invoiceLines` | Create invoice lines | addInvoiceLines |
| DELETE | `/billing/invoices/{id}/invoiceLines` | Remove invoice lines | removeInvoiceLines |
| PUT | `/billing/invoices/{id}/invoiceLines/{lineId}` | Update invoice line | updateInvoiceLine |
| DELETE | `/billing/invoices/{id}/invoiceLines/{lineId}` | Remove invoice line | removeInvoiceLine |
| POST | `/billing/invoices/{id}/invoiceLines/duplicate` | Duplicate invoice lines | duplicateInvoiceLines |
| PUT | `/billing/invoices/{id}/quarantine` | Quarantine invoice | quarantineInvoice |
| PUT | `/billing/invoices/{id}/rebuild` | Rebuild invoice | rebuildInvoiceLine |
| PUT | `/billing/invoices/{id}/refreshRate` | Refresh rate | refreshRate |
| PUT | `/billing/invoices/{id}/rejection` | Reject invoice | rejectInvoiceLine |
| PUT | `/billing/invoices/{id}/validation` | Validate invoice | validateInvoiceLine |
| POST | `/billing/invoices/{invoicId}/duplication` | this endpoint allow to duplicate invoice | duplicate |
| POST | `/billing/invoices/generate` |  Launch all the invoicing process for a given billingAccount | generate |
| GET | `/commercialOrders/{code}/availableOpenOrders` | Get available open orders for a commercial order | findAvailableOpenOrders |
| GET | `/cpq/quotes/{quoteCode}/availableOpenOrders` | Get available open orders for a quote | findAvailableOpenOrders_1 |
| POST | `/importExport/importData` |  Send a file to be imported. ImportExportResponseDto.executionId contains   |     POST_ImportExport_importData |
| POST | `/mediation/cdrs` | create manuel CDR | POST_Mediation_processCdrList |
| PUT | `/mediation/cdrs` | update multiple for an existing CDRs | POST_Mediation_processCdrList_4 |
| DELETE | `/mediation/cdrs` | delete  list of  an existing  CDR | POST_Mediation_processCdrList_2 |
| PUT | `/mediation/cdrs/{id}` | update an existing  CDR | POST_Mediation_processCdrList_3 |
| DELETE | `/mediation/cdrs/{id}` | delete an existing  CDR | POST_Mediation_processCdrList_1 |
| POST | `/ordering/open-order-quote` | Create Open Order Quote | POST_Open-Order-Quote |
| PUT | `/ordering/open-order-quote/{id}` | Update Open Order Quote | PUT_Open-Order-Quote |
| POST | `/ordering/open-order-quote/{id}/duplicate` | Duplicate Open Order Quote from existing one | POST_DUPLICATE-Open-Order-Quote |
| POST | `/rating/walletOperation/markToRerate` | Mark WalletOperations to rerate | POST_WalletOperation_markToRerate |

#### PUT /accountReceivable/accountOperation/changeStatus

- Résumé: mark account operation as exported
- OperationId: markExported
- Description: mark account operation as exported
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ChangeStatusDto (ChangeStatusDto)
- Réponses:
  - 200: Account operations status are successfully updated
  - 404: Account operations don't exist
  - 409: Status of account operations can not be updated

#### POST /billing/invoiceLines/markForAdjustment

- Résumé: This API will allow mark adjustment for invoice lines
- OperationId: markForAdjustment
- Description: This API will allow mark adjustment for invoice lines.<br>
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: InvoiceLinesToMarkAdjustment (InvoiceLinesToMarkAdjustment)
- Réponses:
  - 200: Adjustment successfully created
  - 403: Only NOT_ADJUSTED invoice lines can be marked TO_ADJUST
  - 500: Error marking for adjustment

#### POST /billing/invoiceLines/unmarkForAdjustment

- Résumé: This API will allow creating adjustment based on an existing validated invoice.
- OperationId: unmarkForAdjustment
- Description: This API will allow creating adjustment based on an existing validated invoice.<br>
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: InvoiceLinesToMarkAdjustment (InvoiceLinesToMarkAdjustment)
- Réponses:
  - 200: Adjustment successfully created
  - 403: Only invoice lines marked TO_ADJUST can be unmarked as NOT_ADJUSTED
  - 500: Error marking for adjustment

#### POST /billing/invoices/{id}/calculateSubTotals

- Résumé: Calucate subtotals
- OperationId: calculateSubTotals
- Description: calculate sub total of invoice linked to invoice type
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Invoice identifier
- Réponses:
  - 200: display calculate subtotals
  - 400: Action is failed
  - 404: The invoice entity doesn't exist

#### PUT /billing/invoices/{id}/calculation

- Résumé: calculate invoice
- OperationId: calculateInvoice
- Description: calculate invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Réponses:
  - 200: invoice successfully calculated
  - 403: error when calculating invoice

#### PUT /billing/invoices/{id}/cancellation

- Résumé: Cancel invoice
- OperationId: cancelInvoice
- Description: Cancel invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- `ratedTransactionAction` (QUERY, optionnel) — string : This field allow to choose how to process rated transactions after invoice concellation
  - Valeurs autorisées: REOPEN, CANCEL
- Réponses:
  - 200: invoice successfully canceled
  - 403: error when canceling invoice

#### POST /billing/invoices/{id}/createAdjustment

- Résumé: This API will allow creating adjustment based on an existing validated invoice.
- OperationId: createAdjustment
- Description: This API will allow creating adjustment based on an existing validated invoice.<br>Either can we choose specific invoice lines from a specific invoice or the whole invoice to be used on the newly created adjustment.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - obligatoire
  - application/json: InvoiceLinesToReplicate (InvoiceLinesToReplicate)
- Réponses:
  - 200: Adjustment successfully created
  - 403: IThe following parameters are required or contain invalid values: globalAdjustment
  - 500: Error when creating adjustment

#### POST /billing/invoices/{id}/invoiceLines

- Résumé: Create invoice lines
- OperationId: addInvoiceLines
- Description: Create invoice lines
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - obligatoire
  - application/json: InvoiceLinesInput (InvoiceLinesInput)
- Réponses:
  - 200: invoice lines successfully created
  - 403: error when creating invoice lines

#### DELETE /billing/invoices/{id}/invoiceLines

- Résumé: Remove invoice lines
- OperationId: removeInvoiceLines
- Description: Remove invoice line
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - optionnel
  - application/json: InvoiceLinesToRemove (InvoiceLinesToRemove)
- Réponses:
  - 200: invoice lines successfully removed
  - 403: error when removing invoice lines

#### PUT /billing/invoices/{id}/invoiceLines/{lineId}

- Résumé: Update invoice line
- OperationId: updateInvoiceLine
- Description: Update invoice line
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- `lineId` (PATH, obligatoire) — integer (int64) : id of the InvoiceLine
- Corps de requête:
  - obligatoire
  - application/json: InvoiceLineInput (InvoiceLineInput)
- Réponses:
  - 200: invoice lines successfully updated
  - 403: error when updating invoice line

#### DELETE /billing/invoices/{id}/invoiceLines/{lineId}

- Résumé: Remove invoice line
- OperationId: removeInvoiceLine
- Description: Remove invoice line
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- `lineId` (PATH, obligatoire) — integer (int64) : id of the InvoiceLine
- Corps de requête:
  - optionnel
  - application/json: InvoiceLinesToRemove (InvoiceLinesToRemove)
- Réponses:
  - 200: invoice line successfully removed
  - 403: error when removing invoice line

#### POST /billing/invoices/{id}/invoiceLines/duplicate

- Résumé: Duplicate invoice lines
- OperationId: duplicateInvoiceLines
- Description: Duplicate invoice lines
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - optionnel
  - application/json: InvoiceLinesToDuplicate (InvoiceLinesToDuplicate)
- Réponses:
  - 200: invoice lines successfully duplicated
  - 403: error when duplicating invoice lines

#### PUT /billing/invoices/{id}/quarantine

- Résumé: Quarantine invoice
- OperationId: quarantineInvoice
- Description: Quarantine invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - optionnel
  - application/json: QuarantineBillingRunDto (QuarantineBillingRunDto)
- Réponses:
  - 200: invoice successfully quarantined
  - 403: Only possible for invoices in DRAFT/REJECTED/SUSPECT statuses

#### PUT /billing/invoices/{id}/rebuild

- Résumé: Rebuild invoice
- OperationId: rebuildInvoiceLine
- Description: Rebuild invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Réponses:
  - 200: invoice successfully rebuilded
  - 403: error when rebuilding invoice

#### PUT /billing/invoices/{id}/refreshRate

- Résumé: Refresh rate
- OperationId: refreshRate
- Description: Refresh invoice exchange rate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Invoice identifier
- Réponses:
  - 200: Exchange rate successfully refreshed
  - 403: Refresh rate only allowed on invoices with status : NEW or DRAFT
  - 404: Invoice not found

#### PUT /billing/invoices/{id}/rejection

- Résumé: Reject invoice
- OperationId: rejectInvoiceLine
- Description: Reject invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - optionnel
  - application/json: RejectReasonInput (RejectReasonInput)
- Réponses:
  - 200: invoice successfully rejected
  - 403: error when rejecting invoice

#### PUT /billing/invoices/{id}/validation

- Résumé: Validate invoice
- OperationId: validateInvoiceLine
- Description: Validate invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Réponses:
  - 200: invoice successfully validated
  - 403: error when validating invoice

#### POST /billing/invoices/{invoicId}/duplication

- Résumé: this endpoint allow to duplicate invoice
- OperationId: duplicate
- Description: duplicate invoice with the new status
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoicId` (PATH, obligatoire) — integer (int64)
- Réponses:
  - default: will return new invoice duplicated
    - application/json: InvoicesDto (InvoicesDto)

#### POST /billing/invoices/generate

- Résumé:  Launch all the invoicing process for a given billingAccount
- OperationId: generate
- Description: Launch all the invoicing process for a given billingAccount, that's mean. <ul> <li>Create rated transactions <li>Create an exceptional billingRun with given dates <li>Validate the pre-invoicing report <li>Validate the post-invoicing report <li>Validate the BillingRun </ul>
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenerateInvoiceInput (GenerateInvoiceInput)
- Réponses:
  - default: invoice response
    - application/json: Invoice (Invoice)

#### GET /commercialOrders/{code}/availableOpenOrders

- Résumé: Get available open orders for a commercial order
- OperationId: findAvailableOpenOrders
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - 200: The Open Orders avaiblable for commercial order

#### GET /cpq/quotes/{quoteCode}/availableOpenOrders

- Résumé: Get available open orders for a quote
- OperationId: findAvailableOpenOrders_1
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `quoteCode` (PATH, obligatoire) — string
- Réponses:
  - 200: The Open Orders avaiblable for quote

#### POST /importExport/importData

- Résumé:  Send a file to be imported. ImportExportResponseDto.executionId contains  
- OperationId:     POST_ImportExport_importData
- Description: Send a file to be imported. ImportExportResponseDto.executionId contains
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: MultipartFormDataInput (MultipartFormDataInput)
- Réponses:
  - default: As import is async process, ImportExportResponseDto.executionId contains and ID to be used to query for execution results via a call to/importExport/checkImportDataResult?id=..
    - application/json: ImportExportResponseDto (ImportExportResponseDto)
    - application/xml: ImportExportResponseDto (ImportExportResponseDto)

#### POST /mediation/cdrs

- Résumé: create manuel CDR
- OperationId: POST_Mediation_processCdrList
- Description: allow to create a manuel cdr from api
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CdrListDtoInput (CdrListDtoInput)
- Réponses:
  - default: return new created CDR id
    - application/json: CdrDtoResponse (CdrDtoResponse)

#### PUT /mediation/cdrs

- Résumé: update multiple for an existing CDRs
- OperationId: POST_Mediation_processCdrList_4
- Description: update multiple for an existing CDRs
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CdrListDtoInput (CdrListDtoInput)
- Réponses:
  - default: status of the operation
    - application/json: CdrDtoResponse (CdrDtoResponse)

#### DELETE /mediation/cdrs

- Résumé: delete  list of  an existing  CDR
- OperationId: POST_Mediation_processCdrList_2
- Description: delete multiple for an existing CDRs having a status : OPEN, TO_REPROCESS, ERROR, DISCARDED
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CdrListDtoDeletedInput (CdrListDtoDeletedInput)
- Réponses:
  - default: status of the operation
    - application/json: CdrDtoResponse (CdrDtoResponse)

#### PUT /mediation/cdrs/{id}

- Résumé: update an existing  CDR
- OperationId: POST_Mediation_processCdrList_3
- Description: allow to update a existing cdr from api allowed for CDR that hava status :
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: CdrDtoInput (CdrDtoInput)
- Réponses:
  - default: status of the operation
    - application/json: ActionStatus (ActionStatus)

#### DELETE /mediation/cdrs/{id}

- Résumé: delete an existing  CDR
- OperationId: POST_Mediation_processCdrList_1
- Description: Only CDRs is statuses OPEN, TO_REPROCESS, ERROR, discarded can be deleted.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - default: status of the operation
    - application/json: ActionStatus (ActionStatus)

#### POST /ordering/open-order-quote

- Résumé: Create Open Order Quote
- OperationId: POST_Open-Order-Quote
- Description: Create Open Order Quote
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OpenOrderQuoteDto (OpenOrderQuoteDto)
- Réponses:
  - default: Id of created Open Order Quote

#### PUT /ordering/open-order-quote/{id}

- Résumé: Update Open Order Quote
- OperationId: PUT_Open-Order-Quote
- Description: Update Open Order Quote
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Open Order Quote id
- Corps de requête:
  - optionnel
  - application/json: OpenOrderQuoteDto (OpenOrderQuoteDto)
- Réponses:
  - default: Id of updated Open Order Quote

#### POST /ordering/open-order-quote/{id}/duplicate

- Résumé: Duplicate Open Order Quote from existing one
- OperationId: POST_DUPLICATE-Open-Order-Quote
- Description: Duplicate Open Order Quote
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Source Open Order Quote id
- Réponses:
  - default: Id of created Open Order Quote

#### POST /rating/walletOperation/markToRerate

- Résumé: Mark WalletOperations to rerate
- OperationId: POST_WalletOperation_markToRerate
- Description: Mark WalletOperations to rerate
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: WalletOperationRerate (WalletOperationRerate)
- Réponses:
  - default: Number of updated WO
    - application/json: ActionStatus (ActionStatus)

## Schémas principaux

### ChangeStatusDto
Type: object
Propriétés:
- **accountOperations**: Array<integer (int64)> — ids of account operations to update
- **status**: string — new status of account operations (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### InvoiceLinesToMarkAdjustment
Type: object
Propriétés:
- **ignoreInvalidStatuses**: boolean
- **filters**: object

### InvoiceLinesToReplicate
Type: object
Propriétés:
- **invoiceLinesRTs**: Array<InvoiceLineRTs> — Containing list of invoice line Ids to replicate in the new adjustment.
- **invoiceLinesIds**: Array<integer (int64)> — Containing list of invoice line Ids to replicate in the new adjustment.
- **globalAdjustment**: boolean

### InvoiceLineRTs
Containing list of invoice line Ids to replicate in the new adjustment.
Type: object
Propriétés:
- **invoiceLineId**: integer (int64)
- **ratedTransactionsId**: Array<integer (int64)>

### InvoiceLinesInput
Type: object
Propriétés:
- **invoiceLines**: Array<InvoiceLine>
- **skipValidation**: boolean — Indicate if the invoice line will skip validation

### InvoiceLine
The list of invoice lines
Type: object
Champs obligatoires: accountingArticleCode
Propriétés:
- **invoiceId**: integer (int64) — The id of the invoice
- **accountingArticleCode**: string — The code of accounting article
- **serviceInstanceCode**: string — The code of service instance
- **serviceTemplateCode**: string — The code of service template
- **productVersionId**: integer (int64) — The id of product version
- **offerServiceTemplateId**: integer (int64) — The id of offer service template
- **taxAccountingCode**: string — The Tax Accounting Code
- **billingRunId**: integer (int64) — The id of billing run
- **taxRate**: number — The tax rate
- **orderLotCode**: string — The orderLot code
- **commercialOrderId**: integer (int64) — The id of the commercial order
- **accessPoint**: string — The access point
- **rawAmount**: number — The raw amount
- **taxMode**: string — The Tax Mode
- **discountAmount**: number — The discount amount
- **taxRecalculated**: boolean — the tax recalculated
- **discountPlanCode**: string — The code of discount plan
- **prestation**: string — The prestation
- **discountRate**: number — The discount rate
- **productCode**: string — The code of product
- **valueDate**: string (date-time) — The date value
- **unitPrice**: number — The unit price
- **orderRef**: string — The order reference
- **taxCode**: string — The code of tax
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **billingAccountCode**: string — The code of billing account
- **amountWithoutTax**: number — The amount without tax
- **offerTemplateCode**: string — The code of offer template
- **subscriptionCode**: string — The code of subscription
- **quantity**: number — The quantity
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **orderNumber**: string — The order number
- **status**: string — the status (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED)
- **customFields**: CustomFieldsDto
- **label**: string — The label for invoice line
- **description**: string — The description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CustomFieldsDto
custom field associated the contact category
Type: object
Propriétés:
- **customField**: Array<CustomFieldDto>
- **inheritedCustomField**: Array<CustomFieldDto>
- **empty**: boolean

### CustomFieldDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **valueDate**: string (date-time)
- **valuePeriodStartDate**: string (date-time)
- **valuePeriodEndDate**: string (date-time)
- **valuePeriodPriority**: integer (int32)
- **stringValue**: string
- **dateValue**: string (date-time)
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **mapValue**: object
- **entityReferenceValue**: EntityReferenceDto
- **valueConverted**: object
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **fileValue**: string
- **formattedValue**: CustomFieldFormattedValueDto
- **urlReferenceValue**: UrlReferenceDto
- **guiPosition**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **empty**: boolean
- **value**: Array<CustomFieldValueDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldValueDto
Type: object
Propriétés:
- **value**: object
- **empty**: boolean

### EntityReferenceDto
Type: object
Propriétés:
- **classname**: string
- **code**: string
- **id**: integer (int64)
- **empty**: boolean

### CustomFieldFormattedValueDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **singleValue**: string
- **listValue**: Array<string>
- **mapValue**: object

### UrlReferenceDto
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

### InvoiceLinesToRemove
Type: object
Propriétés:
- **skipValidation**: boolean
- **ids**: Array<integer (int64)>

### InvoiceLineInput
Type: object
Propriétés:
- **skipValidation**: boolean — Indicate if the invoice line will skip validation
- **invoiceLine**: InvoiceLine

### InvoiceLinesToDuplicate
Type: object
Propriétés:
- **invoiceLineIds**: Array<integer (int64)>
- **skipValidation**: boolean

### QuarantineBillingRunDto
Type: object
Propriétés:
- **quarantineBillingRunId**: integer (int64)
- **descriptionsTranslated**: Array<LanguageDescriptionDto>

### RejectReasonInput
Type: object
Propriétés:
- **rejectReason**: string — invoice reject reason

### InvoicesDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoices**: Array<InvoiceDto>

### ActionStatus
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action

### ApiErrorCodeEnum
error code
Type: object

### PagingAndFiltering
Type: object
Propriétés:
- **fullTextFilter**: string — Full text search filter. Mutually exclusive with filters attribute. fullTextFilter has priority
- **filters**: object — Search filters (key = Filter key, value = search pattern or value).
- **fields**: string — Data retrieval options/fieldnames separated by a comma
- **offset**: integer (int32) — Pagination - from record number
- **limit**: integer (int32) — Pagination - number of items to retrieve
- **sortBy**: string — Sorting - field to sort by - a field from a main entity being searched. See Data model for a list of fields
- **sortOrder**: string — Sorting - sort ordee (Valeurs: ASCENDING, DESCENDING)
- **multiSortOrder**: string
- **totalNumberOfRecords**: integer (int32)
- **loadReferenceDepth**: integer (int32)

### InvoiceDto
Type: object
Champs obligatoires: billingAccountCode, discountAmount, dueDate, invoiceDate, invoiceMode, invoiceType, rawAmount, taxAggregates
Propriétés:
- **invoiceId**: integer (int64) — The invoice id
- **invoiceType**: string — The invoice type
- **billingAccountCode**: string — The billing account code
- **sellerCode**: string — Code of the Seller
- **subscriptionCode**: string — Code of the subscription
- **subscriptionId**: integer (int64) — Id of the subscription
- **orderNumber**: string — Order number of the invoice
- **status**: string — The invoice status (Valeurs: NEW, SUSPECT, REJECTED, DRAFT, CANCELED, VALIDATED)
- **dueDate**: string (date-time) — The due date
- **invoiceDate**: string (date-time) — The invoice date
- **categoryInvoiceAgregates**: Array<CategoryInvoiceAgregateDto> — The category invoice aggregates
- **taxAggregates**: Array<TaxInvoiceAggregateDto> — The tax aggregates
- **listInvoiceIdToLink**: Array<integer (int64)> — The list invoice id to link
- **invoiceNumber**: string — The invoice number
- **discount**: number — discount applied to this invoice
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **paymentMethod**: string — The payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **xmlFilename**: string — The xml filename
- **xml**: string — The xml
- **pdfFilename**: string — he pdf filename
- **pdf**: Array<string (byte)> — content of the pdf
- **autoValidation**: boolean — A request-only parameter. True if invoice should be assigned a number (Contraintes: défaut: true)
- **returnXml**: boolean — A request-only parameter. True if XML invoice should be generated and returned
- **returnPdf**: boolean — A request-only parameter. True if PDF invoice should be generated and returned
- **sendByEmail**: boolean — A request-only parameter. True if PDF should be delivered by email. Defaults to True
- **includeBalance**: boolean — A request-only parameter. True if currently due balance should be returned
- **recordedInvoiceDto**: RecordedInvoiceDto
- **netToPay**: number — The net to pay
- **invoiceMode**: string — The invoice mode (Valeurs: AGGREGATED, DETAILLED)
- **customFields**: CustomFieldsDto
- **dueBalance**: number — The total due is a snapshot at invoice generation time of the due balance (not exigible) before invoice calculation+invoice amount. Due balance is a 'future' dueBalance (the due balance at the invoice due date)
- **isDraft**: boolean — A flag to generate a draft invoice
- **checkAlreadySent**: boolean — Before sending the invoice, check if not already sent
- **overrideEmail**: string — Override Email defined in the billing entity
- **sentByEmail**: boolean — True if the invoice was sent by email or delibered by some other electronic means, false otherwise (Contraintes: défaut: false)
- **paymentScheduleInstancesDto**: PaymentScheduleInstancesDto
- **dunningEntryDate**: string (date-time) — associated dunning creation date
- **dunningLastModification**: string (date-time) — associated dunning last update date
- **dunningStatus**: string — associated dunning current status
- **realTimeStatus**: string — The invoice real time status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **ratedTransactionsToLink**: Array<integer (int64)> — List of existing RTs to include, identified by id This option is allowed only if invoiceMode=='DETAILLED'
- **paymentIncidents**: Array<string> — List of payment incidents
- **sendPaymentDate**: string (date-time) — Date of send payment
- **initialCollectionDate**: string (date-time) — Invoice payment collection date
- **writeOffAmount**: number — Sum off writeOff accountOperations amounts
- **paymentDate**: string (date-time) — last payment Date
- **statusDate**: string (date-time) — Invoice status change date
- **xmlDate**: string (date-time) — Date when the XML has been produced on a validated invoice
- **pdfDate**: string (date-time) — Date when the PDf has been produced on a validated invoice
- **emailSentDate**: string (date-time) — Date when the invoice has been sent for a validated invoice
- **paymentStatus**: string — payment status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **paymentStatusDate**: string (date-time) — Payment status change date
- **startDate**: string (date-time) — Beginning of the billed period (based on billing cycle period whenever possible or min(invoiceLine.valueDate))
- **endDate**: string (date-time) — End of the billed period (based on billing cycle period whenever possible or applied lastTransactionDate or max(invoiceLine.valueDate))
- **rawAmount**: number — Total raw amount from invoice lines. <ul><li>Does not include discount</li><li>With or without tax depending on provider setting (isEnterprise)</li></ul>
- **discountRate**: number — Discount rate to apply (in %).<p>Initialize with discount rate from linked invoice discount plan</p>
- **discountAmount**: number — Total discount amount with or without tax depending on provider settings.<p>Can be inconsistent with discountRate.</p><p>discountAmount has precedence over discountRate</p>
- **discountPlanCode**: string — Discount plan code
- **lastAppliedRate**: number — The exchange rate that converted amounts of the invoice.
- **lastAppliedRateDate**: string (date-time) — The date of exchange rate applied to amounts of the invoice.
- **ratedTransactionsTolink**: Array<integer (int64)>
- **alreadyAppliedMinimum**: boolean
- **alreadyAddedDiscount**: boolean
- **draft**: boolean

### CategoryInvoiceAgregateDto
The category invoice aggregates
Type: object
Champs obligatoires: categoryInvoiceCode, listSubCategoryInvoiceAgregateDto
Propriétés:
- **categoryInvoiceCode**: string — The category invoice code
- **description**: string — The description
- **userAccountCode**: string — The user account code
- **itemNumber**: integer (int32) — The item number
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **listSubCategoryInvoiceAgregateDto**: Array<SubCategoryInvoiceAgregateDto> — List of Sub category invoice aggregates
- **discountAggregates**: Array<DiscountInvoiceAggregateDto> — List of Discount aggregates

### SubCategoryInvoiceAgregateDto
List of Sub category invoice aggregates
Type: object
Champs obligatoires: amountsByTax, invoiceSubCategoryCode
Propriétés:
- **itemNumber**: integer (int32) — The item number
- **accountingCode**: string — The accounting code
- **description**: string — The description
- **quantity**: number — The quantity. Deprecated in v5.2
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **invoiceSubCategoryCode**: string — The invoice sub category code
- **userAccountCode**: string — The user account code
- **amountsByTax**: Array<SubcategoryInvoiceAgregateAmountDto> — List of amounts broken down by tax
- **ratedTransactions**: Array<RatedTransactionDto> — List the rated transactions

### SubcategoryInvoiceAgregateAmountDto
List of amounts broken down by tax
Type: object
Propriétés:
- **amountWithoutTax**: number — Amount without tax
- **amountWithTax**: number — Amount with tax
- **amountTax**: number — Tax amount
- **tax**: TaxDto

### TaxDto
Tax applied
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **percent**: number
- **accountingCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto
- **composite**: boolean
- **subTaxes**: Array<TaxDto>

### RatedTransactionDto
List the rated transactions
Type: object
Champs obligatoires: amountTax, amountWithTax, amountWithoutTax, code, usageDate
Propriétés:
- **usageDate**: string (date-time) — The usage date
- **unitAmountWithoutTax**: number — The unit amount without tax
- **unitAmountWithTax**: number — The unit amount with tax
- **unitAmountTax**: number — The unit amount tax
- **quantity**: number — The quantity
- **inputQuantity**: number — The quantity
- **rawAmountWithoutTax**: number — The raw amount without tax
- **rawAmountWithTax**: number — The raw amount with tax
- **amountWithoutTax**: number — The amount without tax
- **amountWithTax**: number — The amount with tax
- **amountTax**: number — The amount tax
- **code**: string — The code
- **status**: string — The status (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED, PROCESSED)
- **description**: string — The description
- **unityDescription**: string — The unity description
- **priceplanCode**: string — The price plan code
- **doNotTriggerInvoicing**: boolean — indicate if we don't want to trigger invoicing (Contraintes: défaut: false)
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **parameter1**: string — used to set more onformations in case of "DETAILLED" invoice
- **parameter2**: string — used to set more onformations in case of "DETAILLED" invoice
- **parameter3**: string — used to set more onformations in case of "DETAILLED" invoice
- **userAccountCode**: string — The user account code
- **taxCode**: string — Tax applied - code
- **taxPercent**: number — Tax percent
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **sellerCode**: string — Seller code
- **billingAccountCode**: string — BillingAccount code
- **taxClassCode**: string — Charge tax class code
- **inputUnitOfMeasure**: string — The input unit of measure
- **ratingUnitOfMeasure**: string — The rating unit of measure
- **sortIndex**: integer (int32) — Sorting index

### DiscountInvoiceAggregateDto
List of Discount aggregates
Type: object
Champs obligatoires: amountsByTax, invoiceSubCategoryCode
Propriétés:
- **itemNumber**: integer (int32) — The item number
- **accountingCode**: string — The accounting code
- **description**: string — The description
- **quantity**: number — The quantity. Deprecated in v5.2
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **invoiceSubCategoryCode**: string — The invoice sub category code
- **userAccountCode**: string — The user account code
- **amountsByTax**: Array<SubcategoryInvoiceAgregateAmountDto> — List of amounts broken down by tax
- **ratedTransactions**: Array<RatedTransactionDto> — List the rated transactions
- **discountPlanItemCode**: string — The discount plan item code
- **discountPercent**: number — The discount percent

### TaxInvoiceAggregateDto
The tax aggregates
Type: object
Propriétés:
- **description**: string — The description
- **itemNumber**: integer (int32) — The item number
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **taxCode**: string — The taxes code
- **taxPercent**: number — The tax percent applied
- **accountingCode**: string — The accounting code

### RecordedInvoiceDto
The recorded invoice dto
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **paymentHistories**: Array<PaymentHistoryDto> — list of the payment history
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date
- **productionDate**: string (date-time) — The production date
- **invoiceDate**: string (date-time) — The invoice date
- **netToPay**: number — The net to pay

### MatchingAmountsDto
The matching amounts
Type: object
Propriétés:
- **matchingAmount**: Array<MatchingAmountDto> — List of the matching amount

### MatchingAmountDto
List of the matching amount
Type: object
Propriétés:
- **matchingCode**: string — The matching code
- **matchingAmount**: number — The matching amount
- **matchingCodes**: MatchingCodesDto

### MatchingCodesDto
The matching codes
Type: object
Propriétés:
- **matchingCode**: Array<MatchingCodeDto> — List of the matching code

### MatchingCodeDto
List of the matching code
Type: object
Propriétés:
- **code**: string — The code of matching code
- **matchingType**: string — The matching type (Valeurs: A, M, A_TIP, A_DERICT_DEBIT)
- **matchingDate**: string (date-time) — The matching date
- **matchingAmountCredit**: number — The matching amount credit
- **matchingAmountDebit**: number — The matching amount debit

### OtherCreditAndChargeDto
The other credit and charge
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **paymentHistories**: Array<PaymentHistoryDto> — list of the payment history
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date
- **operationDate**: string (date-time)

### RejectedPaymentDto
The rejected paymen
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **paymentHistories**: Array<PaymentHistoryDto> — list of the payment history
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date
- **rejectedType**: string — The rejected type (Valeurs: A, M)
- **rejectedDate**: string (date-time) — The rejected date
- **rejectedDescription**: string — The rejected description
- **rejectedCode**: string

### PaymentHistoryDto
list of the payment history
Type: object
Propriétés:
- **customerAccountCode**: string — The customer Account Code
- **sellerCode**: string — The seller Code
- **customerCode**: string — The customer Code
- **customerAccountName**: string — The customer Account Name
- **operationDate**: string (date-time) — The operation date
- **updatedStatusDate**: string (date-time) — The updated status date
- **lastUpdateDate**: string (date-time) — The last Update Date
- **amountCts**: integer (int64) — The amount in cts
- **syncStatus**: string — The synchrone status (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **asyncStatus**: string — The asynchrone status (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **status**: string — The status (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **externalPaymentId**: string — he external payment id
- **errorCode**: string — The error code
- **errorMessage**: string — The error message
- **errorType**: string — The error type, rejected or error (Valeurs: ERROR, REJECT)
- **paymentGatewayCode**: string — The payment gateway
- **paymentMethodType**: string — The payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **paymentMethodName**: string — The payment method name: card number or mandat
- **operationCategory**: string — The operation category, credit for payment or debit for refund (Valeurs: DEBIT, CREDIT)
- **payment**: AccountOperationDto
- **refund**: AccountOperationDto
- **listAoPaid**: AccountOperationsDto

### AccountOperationDto
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date

### AccountOperationsDto
The list ao paid
Type: object
Propriétés:
- **accountOperation**: Array<AccountOperationDto>

### PaymentScheduleInstancesDto
list of related payment schedule instances
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **instances**: Array<PaymentScheduleInstanceDto> — list of payment schedule instance

### PaymentScheduleInstanceDto
list of payment schedule instance
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **endDate**: string (date-time) — The end date
- **startDate**: string (date-time) — The start date
- **amount**: number — The amount
- **calendarCode**: string — The calendar code
- **status**: string — The status of the payment schedule instance (Valeurs: IN_PROGRESS, OBSOLETE, DONE, CANCELLED, TERMINATED)
- **statusDate**: string (date-time) — The status date
- **paymentScheduleTemplateCode**: string — The payment schedule template code
- **paymentDayInMonth**: integer (int32) — The payment day in month
- **serviceInstanceTemplateCode**: string — The service instance template code
- **serviceInstanceId**: integer (int64) — The service instance id
- **subscriptionCode**: string — The subscription code
- **paymentScheduleInstanceBalanceDto**: PaymentScheduleInstanceBalanceDto
- **items**: Array<PaymentScheduleInstanceItemDto> — List of the payment schedule instance item
- **customFields**: CustomFieldsDto

### PaymentScheduleInstanceBalanceDto
The payment schedule instance balance
Type: object
Propriétés:
- **nbSchedulePaid**: integer (int32) — The number schedule paid
- **nbScheduleIncoming**: integer (int32) — The number schedule incoming
- **sumAmountPaid**: number — The sum amount paid
- **sumAmountIncoming**: number — The sum amount incoming

### PaymentScheduleInstanceItemDto
List of the payment schedule instance item
Type: object
Champs obligatoires: amount, requestPaymentDate
Propriétés:
- **id**: integer (int64) — The id of the payment schedule instance item
- **dueDate**: string (date-time) — The due date
- **requestPaymentDate**: string (date-time) — The request payment date
- **recordedInvoice**: RecordedInvoiceDto
- **last**: boolean
- **paid**: boolean
- **amount**: number

### GenerateInvoiceInput
Type: object
Propriétés:
- **isDraft**: boolean — Indicate if the invoice is DRAFT
- **targetCode**: string — Target entity code
- **firstTransactionDate**: string (date-time) — First transaction date
- **applyMinimum**: string — Apply mode for invoice minimum rules
- **openOrderCode**: string — OpenOrder code
- **lastTransactionDate**: string (date-time) — Last transaction date
- **targetType**: string — Billing Cycle Type
- **invoicingDate**: string (date-time) — Invoicing date
- **filters**: FilterDto
- **billingAccountCode**: string — Billing account code
- **orderNumber**: string — Order number
- **customFields**: CustomFieldsDto
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **generateAO**: boolean — Generate AO
- **generateXML**: boolean — Generate XML
- **generatePDF**: boolean — Generate PDF
- **skipValidation**: boolean — Indicate if validation is skipped
- **applyBillingRules**: boolean — Apply Billing Rules
- **includeRatedTransactions**: boolean — Includes rated transactions in the return value

### FilterDto
Filters on RT
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **shared**: boolean
- **inputXml**: string
- **pollingQuery**: string
- **entityClass**: string
- **customFields**: CustomFieldsDto

### Invoice
Type: object
Propriétés:
- **invoiceAdjustmentCurrentSellerNb**: integer (int64) — The invoice adjustment current seller
- **invoiceAdjustmentCurrentProviderNb**: integer (int64) — The invoice adjustment current provider
- **previousInvoiceNumber**: string — The previous invoice number
- **productDate**: string (date-time) — The product date
- **adjustedInvoice**: Resource
- **temporaryInvoiceNumber**: string — The temporary invoice number
- **externalRef**: string — The external ref
- **xmlDate**: string (date-time) — The xml date
- **pdfDate**: string (date-time) — The pdf date
- **emailSentDate**: string (date-time) — The date of email sent
- **rawAmount**: number — The raw amount
- **invoiceLines**: Array<InvoiceLine> — The list of the invoice lines
- **commercialOrder**: Resource
- **cpqQuote**: Resource
- **paymentStatusDate**: string (date-time) — The date of the payment status
- **amountWithoutTaxBeforeDiscount**: number — Amount without tax before discount
- **xmlFilename**: string — The xml file name for generated invoice xml
- **pdfFilename**: string — The pdf file name for generated invoice PDF
- **invoiceTypeCode**: string — The invoice type code
- **categoryInvoiceAgregates**: Array<CategoryInvoiceAgregate> — The list of the caregory invoice agregates
- **listLinkedInvoices**: Array<integer (int64)> — The list of linked invoices
- **invoiceLinesTolink**: Array<integer (int64)> — The list of the invoice lines to link
- **discountPlan**: Resource
- **discountAmount**: number — The discount amount
- **discount**: number — The discount if any
- **rejectReason**: string — The rejected reason
- **dueBalance**: number — The due balance
- **recordedInvoice**: Resource
- **netToPay**: number — The net to pay
- **invoiceNumber**: string — The invoice number
- **initialCollectionDate**: string (date-time) — The initial collection date
- **discountRate**: number — The discount rate
- **tradingLanguage**: Resource
- **discountAmountWithoutTax**: number — discount amount without tax
- **quote**: Resource
- **billingRun**: Resource
- **paymentMethodType**: string — The payment method type (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **tradingCountry**: Resource
- **statusDate**: string (date-time) — The date of the status
- **cfValues**: Resource
- **subscription**: Resource
- **alias**: string — The alias
- **dueDate**: string (date-time) — The Due date
- **paymentMethod**: Resource
- **paymentStatus**: string — The payement status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **iban**: string — The iban
- **amount**: number — The amount of the invoice
- **sellerCode**: string — The seller code
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **billingAccountCode**: string — The billing account code
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **tradingCurrency**: Resource
- **invoiceDate**: string (date-time) — The invoice date
- **status**: string — The status of the invoice. (Valeurs: NEW, SUSPECT, REJECTED, DRAFT, CANCELED, VALIDATED)
- **cfAccumulatedValues**: Resource
- **customFields**: CustomFieldsDto
- **description**: string — The description of the invoice
- **comment**: string — The comment for the invoice
- **order**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **detailedInvoice**: boolean — Indicate if the invoice is detailed
- **alreadyAppliedMinimum**: boolean — Indicate if the invoice is already applied minumun
- **alreadyAddedDiscount**: boolean — Indicate if the invoice is discount already added
- **alreadySent**: boolean — Indicate if the invoice is already sent
- **dontSend**: boolean — Indicate if the invoice doesnt send
- **draft**: boolean — Indicate if the invoice is draft
- **prepaid**: boolean — Indicate if the invoice is a prepaid

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CategoryInvoiceAgregate
The list of the caregory invoice agregates
Type: object
Propriétés:
- **discountAggregates**: Array<DiscountInvoiceAggregate>
- **categoryInvoiceCode**: string
- **listSubCategoryInvoiceAgregate**: Array<SubCategoryInvoiceAgregate>
- **itemNumber**: integer (int32)
- **userAccountCode**: string
- **amountWithoutTax**: number
- **amountTax**: number
- **amountWithTax**: number
- **description**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DiscountInvoiceAggregate
Type: object
Propriétés:
- **discountPlanItemCode**: string — The code of discount plan item
- **discountPercent**: number — The discount percent
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SubCategoryInvoiceAgregate
Type: object
Propriétés:
- **invoiceLines**: Array<InvoiceLine> — The list of invoice lines
- **invoiceSubCategoryCode**: string — The code of invoice sub category
- **amountsByTax**: Array<SubcategoryInvoiceAgregateAmount> — List of amounts by tax
- **itemNumber**: integer (int32) — The item number
- **accountingCode**: string — The code of accounting
- **userAccountCode**: string — The code of user account
- **amountWithoutTax**: number — The amount without tax
- **quantity**: number — The quantity
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **description**: string — The description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SubcategoryInvoiceAgregateAmount
List of amounts by tax
Type: object
Propriétés:
- **tax**: Tax
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Tax
The tax attachaed to sub category invoice agregate amount
Type: object
Propriétés:
- **composite**: boolean
- **accountingCode**: string
- **percent**: number
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### MultipartFormDataInput
Type: object
Propriétés:
- **formData**: object
- **formDataMap**: object
- **preamble**: string
- **parts**: Array<InputPart>

### InputPart
Type: object
Propriétés:
- **contentTypeFromMessage**: boolean
- **bodyAsString**: string
- **mediaType**: object
- **headers**: object

### ImportExportResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **executionId**: string
- **summary**: object
- **importResultDto**: Array<ImportResultDto>
- **fieldsNotImported**: object
- **exceptionMessage**: string
- **failureMessageKey**: string
- **failureMessage**: string
- **failed**: boolean
- **done**: boolean

### ImportResultDto
Type: object
Propriétés:
- **name**: string
- **code**: string
- **status**: string

### FieldsNotImportedStringCollectionDto
Type: object
Propriétés:
- **fieldsNotImported**: Array<string>

### CdrListDtoInput
Type: object
Propriétés:
- **returnCDRs**: boolean
- **returnErrors**: boolean
- **cdrs**: Array<CdrDtoInput>
- **mode**: string — How the CDR list is processed : STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR (Valeurs: STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CdrDtoInput
Type: object
Propriétés:
- **headerEDRId**: Resource
- **extraParam**: string
- **decimalParam4**: number
- **parameter5**: string
- **parameter6**: string
- **parameter7**: string
- **parameter8**: string
- **parameter9**: string
- **dateParam1**: string (date-time)
- **dateParam2**: string (date-time)
- **dateParam3**: string (date-time)
- **dateParam4**: string (date-time)
- **dateParam5**: string (date-time)
- **decimalParam1**: number
- **decimalParam2**: number
- **decimalParam3**: number
- **decimalParam5**: number
- **rejectReason**: string
- **parameter4**: string
- **accessCode**: string
- **eventDate**: string (date-time)
- **quantity**: number
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **status**: string (Valeurs: OPEN, PROCESSED, CLOSED, DISCARDED, ERROR, TO_REPROCESS)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CdrDtoResponse
Type: object
Propriétés:
- **cdrs**: Array<Resource>
- **errors**: Array<CdrErrorDto>
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CdrErrorDto
Type: object
Propriétés:
- **cdrLine**: string
- **rejectReason**: string

### CdrListDtoDeletedInput
Type: object
Propriétés:
- **returnCDRs**: boolean
- **returnErrors**: boolean
- **cdrs**: Array<integer (int64)>
- **mode**: string — How the CDR list is processed : STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR (Valeurs: STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### OpenOrderQuoteDto
Type: object
Champs obligatoires: activationDate, billingAccountCode, code, maxAmount, openOrderTemplate, openOrderType
Propriétés:
- **openOrderType**: string (Valeurs: ARTICLES, PRODUCTS)
- **endOfValidityDate**: string (date-time)
- **thresholds**: Array<ThresholdInput>
- **articles**: Array<string>
- **maxAmount**: number
- **openOrderTemplate**: string
- **activationDate**: string (date-time)
- **products**: Array<string>
- **externalReference**: string
- **tags**: Array<string>
- **billingAccountCode**: string
- **code**: string
- **description**: string

### ThresholdInput
Type: object
Champs obligatoires: percentage, sequence
Propriétés:
- **externalRecipient**: string
- **percentage**: integer (int32)
- **recipients**: Array<string>
- **sequence**: integer (int32)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### WalletOperationRerate
Type: object
Propriétés:
- **filters**: object
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
