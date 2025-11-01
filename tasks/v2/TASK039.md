# TASK039 — API V2 Invoices

## Contexte
Le domaine « Invoices » (tag OpenAPI `Invoices`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/billing/invoices` | Return a list of invoices | getInvoices |
| POST | `/billing/invoices` | Create a new invoice | create_3 |
| GET | `/billing/invoices/{id}` | Return an invoice | getInvoice |
| PUT | `/billing/invoices/{id}` | Update an invoice | update_2 |
| POST | `/billing/invoices/{id}/deletePdfFile` | Delete existing invoice PDF file | deleteInvoicePdf |
| POST | `/billing/invoices/{id}/deleteXmlFile` | Delete existing invoice XML file | deleteInvoiceXml |
| GET | `/billing/invoices/{id}/pdf` | Returns the invoice PDF | fetchPdfInvoice |
| GET | `/billing/invoices/{invoiceType}/{invoiceNumber}` | Return an invoice | getInvoice_1 |
| GET | `/billing/invoices/{invoiceType}/{invoiceNumber}/matchedOperations` | Get all operations matched to the given invoice | getInvoiceMatchedOperations |
| POST | `/billing/invoices/addSubTotals` | Add Sub Totals | addSubTotals |
| POST | `/billing/invoices/basicInvoices` | Create a new basic invoice | createBasicInvoices |
| POST | `/billing/invoices/deleteSubTotals` | Add Sub Totals | deleteSubTotals |
| GET | `/billing/invoices/find/{invoiceNumber}` | Return an invoice | find_3 |
| PATCH | `/billing/invoices/validated/{id}` | Update a validated invoice | updateValidateInvoice |

#### GET /billing/invoices

- Résumé: Return a list of invoices
- OperationId: getInvoices
- Description: Returns a list of invoices with pagination feature or non integers will simulate API error conditions
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int64) : The offset of the list
  - Contraintes: défaut: 0
- `limit` (QUERY, optionnel) — integer (int64) : The limit per page
  - Contraintes: défaut: 50
- `sort` (QUERY, optionnel) — string : The sort by field
- `orderBy` (QUERY, optionnel) — string : The order by
- `filter` (QUERY, optionnel) — string : The filter
- Réponses:
  - 304: Lists invoices with filtering, sorting, paging.
  - 400: Invalid parameters supplied
    - application/json: ApiException (ApiException)
  - default: list of invoices
    - application/json: Invoices (Invoices)

#### POST /billing/invoices

- Résumé: Create a new invoice
- OperationId: create_3
- Description: Create a new invoice
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: InvoiceInput (InvoiceInput)
- Réponses:
  - 200: the Invoice is successfully created
  - 400: bad request when Invoice information contains an error

#### GET /billing/invoices/{id}

- Résumé: Return an invoice
- OperationId: getInvoice
- Description: Returns the invoice data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Réponses:
  - 404: invoice not found
    - application/json: ApiException (ApiException)
  - default: the searched invoice
    - application/json: Invoice (Invoice)

#### PUT /billing/invoices/{id}

- Résumé: Update an invoice
- OperationId: update_2
- Description: Update an invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - obligatoire
  - application/json: Invoice (Invoice)
- Réponses:
  - 200: the Invoice is successfully created
  - 400: bad request when Invoice information contains an error

#### POST /billing/invoices/{id}/deletePdfFile

- Résumé: Delete existing invoice PDF file
- OperationId: deleteInvoicePdf
- Description: Delete existing invoice PDF from the invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Réponses:
  - 200: the PDF file successfully deleted
  - 404: The PDF file does not exist on the invoice

#### POST /billing/invoices/{id}/deleteXmlFile

- Résumé: Delete existing invoice XML file
- OperationId: deleteInvoiceXml
- Description: Delete existing invoice XML from the invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Réponses:
  - 200: the XML file successfully deleted
  - 404: The PDF file does not exist on the invoice

#### GET /billing/invoices/{id}/pdf

- Résumé: Returns the invoice PDF
- OperationId: fetchPdfInvoice
- Description: Returns the invoice pdf if exists. feberation may be forced using 'generateIfMissing' parameter
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- `generateIfMissing` (QUERY, optionnel) — boolean
- Réponses:
  - 404: invoice not found
    - application/json: ApiException (ApiException)
  - default: the invoice pdf
    - application/json: Invoice (Invoice)

#### GET /billing/invoices/{invoiceType}/{invoiceNumber}

- Résumé: Return an invoice
- OperationId: getInvoice_1
- Description: Returns the invoice data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceType` (PATH, obligatoire) — integer (int64) : type of the Invoice
- `invoiceNumber` (PATH, obligatoire) — string : invoice number
- Réponses:
  - 404: invoice not found
    - application/json: ApiException (ApiException)
  - default: the searched invoice
    - application/json: Invoice (Invoice)

#### GET /billing/invoices/{invoiceType}/{invoiceNumber}/matchedOperations

- Résumé: Get all operations matched to the given invoice
- OperationId: getInvoiceMatchedOperations
- Description: Get all operations matched to the given invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceType` (PATH, obligatoire) — integer (int64) : type of the Invoice
- `invoiceNumber` (PATH, obligatoire) — string : invoice number
- Réponses:
  - 404: invoice not found
    - application/json: ApiException (ApiException)
  - default: the searched invoice
    - application/json: Invoice (Invoice)

#### POST /billing/invoices/addSubTotals

- Résumé: Add Sub Totals
- OperationId: addSubTotals
- Description: Create a new sub totals
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: InvoiceSubTotalsDto (InvoiceSubTotalsDto)
- Réponses:
  - 200: the sub totals successfully created, and the id is returned in the response
  - 400: bad request when sub totals information contains an error

#### POST /billing/invoices/basicInvoices

- Résumé: Create a new basic invoice
- OperationId: createBasicInvoices
- Description: Create a new advanced payment invoice
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: BasicInvoice (BasicInvoice)
- Réponses:
  - 200: the basicInvoice successfully created, and the id is returned in the response
  - 400: bad request when basicInvoice information contains an error

#### POST /billing/invoices/deleteSubTotals

- Résumé: Add Sub Totals
- OperationId: deleteSubTotals
- Description: delete a sub totals
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: InvoiceSubTotalsDto (InvoiceSubTotalsDto)
- Réponses:
  - 200: the sub totals successfully deleted
  - 400: bad request when sub totals is not found

#### GET /billing/invoices/find/{invoiceNumber}

- Résumé: Return an invoice
- OperationId: find_3
- Description: Returns the invoice data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceNumber` (PATH, obligatoire) — string : invoice Number of the Invoice
- Réponses:
  - 404: invoice not found
    - application/json: ApiException (ApiException)
  - default: the searched invoice
    - application/json: Invoice (Invoice)

#### PATCH /billing/invoices/validated/{id}

- Résumé: Update a validated invoice
- OperationId: updateValidateInvoice
- Description: Update a validated invoice with a set of changes to apply and return the updated invoice
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the Invoice
- Corps de requête:
  - obligatoire
  - application/json: InvoicePatchInput (InvoicePatchInput)
- Réponses:
  - 200: the Invoice is successfully updated
  - 400: bad request when Invoice information contains an error
  - 404: product not found

## Schémas principaux

### ApiException
Type: object
Propriétés:
- **causes**: Array<Cause>
- **details**: string
- **code**: string
- **status**: string (Valeurs: OK, Created, Accepted, No Content, Reset Content, Partial Content, Moved Permanently, Found, See Other, Not Modified, Use Proxy, Temporary Redirect, Bad Request, Unauthorized, Payment Required, Forbidden, Not Found, Method Not Allowed, Not Acceptable, Proxy Authentication Required, Request Timeout, Conflict, Gone, Length Required, Precondition Failed, Request Entity Too Large, Request-URI Too Long, Unsupported Media Type, Requested Range Not Satisfiable, Expectation Failed, Precondition Required, Too Many Requests, Request Header Fields Too Large, Internal Server Error, Not Implemented, Bad Gateway, Service Unavailable, Gateway Timeout, HTTP Version Not Supported, Network Authentication Required)
- **id**: integer (int64)
- **links**: Array<object>

### Cause
Type: object
Propriétés:
- **causeMessage**: string

### Invoices
Type: object
Propriétés:
- **links**: Array<object>
- **total**: integer (int64)
- **filters**: object
- **data**: Array<Invoice>
- **next**: string (uri)
- **limit**: integer (int64)
- **previous**: string (uri)
- **offset**: integer (int64)

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

### InvoiceInput
Type: object
Propriétés:
- **isIncludeBalance**: boolean — Indicate if we want include balance to the invoice
- **isAutoValidation**: boolean — Indicate if the invoice set auto validation
- **isVirtual**: boolean — Indicate if the invoice is virtual
- **isDraft**: boolean — Indicate if the invoice is DRAFT
- **skipValidation**: boolean — Indicate if validation is skept
- **invoice**: Invoice

### InvoiceSubTotalsDto
Type: object
Champs obligatoires: subTotals
Propriétés:
- **invoiceType**: InvoiceTypeDto
- **subTotals**: Array<SubTotalsDto> — The sub Totals

### InvoiceTypeDto
The Invoice Type
Type: object
Champs obligatoires: code, occTemplateCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **occTemplateCode**: string
- **occTemplateNegativeCode**: string
- **occTemplateCodeEl**: string
- **occTemplateNegativeCodeEl**: string
- **customInvoiceXmlScriptInstanceCode**: string
- **sequenceDto**: SequenceDto
- **invoiceValidationScriptCode**: string
- **sellerSequences**: object
- **appliesTo**: Array<string>
- **matchingAuto**: boolean
- **invoiceAccountable**: boolean
- **billingTemplateName**: string
- **pdfFilenameEL**: string
- **xmlFilenameEL**: string
- **billingTemplateNameEL**: string
- **customFields**: CustomFieldsDto
- **useSelfSequence**: boolean
- **mailingType**: string
- **emailTemplateCode**: string
- **excludeFromAgedTrialBalance**: boolean — Exclude from Aged Trial Balance

### SequenceDto
Type: object
Propriétés:
- **prefixEL**: string
- **invoiceSequenceCode**: string
- **sequenceSize**: integer (int32)
- **currentInvoiceNb**: integer (int64)
- **sequencePattern**: string
- **sequenceType**: string (Valeurs: RUM, CUSTOMER_NO, SEQUENCE, NUMERIC, ALPHA_UP, UUID, REGEXP)

### SubTotalsDto
The sub Totals
Type: object
Propriétés:
- **id**: integer (int64) — The Sub Totals id
- **code**: string — The Sub Totals code
- **el**: string — The EL Expression
- **label**: string — The Label Translations
- **languageLabels**: Array<LanguageDescriptionDto>

### BasicInvoice
Type: object
Propriétés:
- **orderCode**: string — The order code for invoice
- **invoiceTypeCode**: string — The invoice type code
- **articleCode**: string — The article code for invoice
- **dueDate**: string (date-time) — The due date
- **billingAccountCode**: string — The billing account code
- **amountWithTax**: number — The maount with tax
- **seller**: Resource
- **invoiceDate**: string (date-time) — The Date of the invoice
- **label**: string — The label
- **comment**: string — The comment for the invoice
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### InvoicePatchInput
Type: object
Propriétés:
- **customFields**: CustomFieldsDto
- **comment**: string — The comment for the invoice
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
