# TASK078 — Service Invoice

## Contexte
Le service « Invoice » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Invoice
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/invoice` |  Search for an invoice given an invoice id or invoice number and invoice type.   |     GET_Invoice_search |
| POST | `/api/rest/invoice` |  Create invoice. Invoice number depends on invoice type   |     POST_Invoice_create |
| POST | `/api/rest/invoice/cancel` |  Cancel an invoice based on invoice id.   |     POST_Invoice_cancel |
| PUT | `/api/rest/invoice/cancel` |  Cancel an invoice based on invoice id.  |     PUT_Invoice_cancel |
| POST | `/api/rest/invoice/fetchPdfInvoice` |  Finds an invoice based on invoice number and optionally an invoice type and return it as pdf as byte [] |     POST_Invoice_fetchPdfInvoice |
| POST | `/api/rest/invoice/fetchXMLInvoice` |  Finds an invoice based on its invoice number and optionally an invoice type and return it as xml string.  |     POST_Invoice_fetchXMLInvoice |
| POST | `/api/rest/invoice/generateDraftInvoice` |  Generate a Draft invoice   |     POST_Invoice_generateDraftInvoice |
| POST | `/api/rest/invoice/generateInvoice` |  Launch all the invoicing process for a given billingAccount, that's mean |     POST_Invoice_generateInvoice |
| GET | `/api/rest/invoice/getPdfInvoice` |  Finds an invoice based on invoice number and return it as pdf as byte [] |     GET_Invoice_getPdfInvoice |
| GET | `/api/rest/invoice/getPdfInvoiceWithType` |  Finds an invoice based on invoice number and invoice type and return it as pdf as byte [] |     GET_Invoice_getPdfInvoiceWithType |
| GET | `/api/rest/invoice/getXMLInvoice` |  Finds an invoice based on its invoice number and return it as xml string.   |     GET_Invoice_getXMLInvoice |
| GET | `/api/rest/invoice/getXMLInvoiceWithType` |  Finds an invoice based on invoice number and invoice type. It returns the result as xml string  |     GET_Invoice_getXMLInvoiceWithType |
| GET | `/api/rest/invoice/list` |  List invoices matching a given criteria.   |     GET_Invoice_list |
| POST | `/api/rest/invoice/list` |  List invoices matching a given criteria.   |     POST_Invoice_list |
| GET | `/api/rest/invoice/listGetAll` |  List invoices matching a given criteria  |     GET_Invoice_listGetAll |
| GET | `/api/rest/invoice/listInvoiceByCustomerAccount` |  Search for a list of invoices given a customer account code |     GET_Invoice_listInvoiceByCustomerAccount |
| GET | `/api/rest/invoice/listPresentInAR` |  List invoices with account operation for a given customer account  Deprecated in v |     GET_Invoice_listPresentInAR |
| POST | `/api/rest/invoice/sendByEmail` |  Send invoice by Email.  |     POST_Invoice_sendByEmail |
| POST | `/api/rest/invoice/validate` |  Validate an invoice based on the invoice id.   |     POST_Invoice_validate |
| PUT | `/api/rest/invoice/validate` |  Validate an invoice based on invoice id.  |     PUT_Invoice_validate |
| GET | `/api/rest/invoice/version` | Get version of application | index_125 |

#### GET /api/rest/invoice

- Résumé:  Search for an invoice given an invoice id or invoice number and invoice type.  
- OperationId:     GET_Invoice_search
- Description: Search for an invoice given an invoice id or invoice number and invoice type.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — integer (int64)
- `invoiceNumber` (QUERY, optionnel) — string
- `invoiceType` (QUERY, optionnel) — string
- `includeTransactions` (QUERY, optionnel) — boolean
- `includePdf` (QUERY, optionnel) — boolean
- `includeXml` (QUERY, optionnel) — boolean
- Réponses:
  - default: instance of GetInvoiceResponseDto
    - application/json: GetInvoiceResponseDto
    - application/xml: GetInvoiceResponseDto

#### POST /api/rest/invoice

- Résumé:  Create invoice. Invoice number depends on invoice type  
- OperationId:     POST_Invoice_create
- Description: Create invoice. Invoice number depends on invoice type
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceDto
  - application/xml: InvoiceDto
- Réponses:
  - default: created invoice
    - application/json: CreateInvoiceResponseDto
    - application/xml: CreateInvoiceResponseDto

#### POST /api/rest/invoice/cancel

- Résumé:  Cancel an invoice based on invoice id.  
- OperationId:     POST_Invoice_cancel
- Description: Cancel an invoice based on invoice id.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: integer (int64)
  - application/xml: integer (int64)
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/invoice/cancel

- Résumé:  Cancel an invoice based on invoice id. 
- OperationId:     PUT_Invoice_cancel
- Description: Cancel an invoice based on invoice id.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CancelInvoiceRequestDto
  - application/xml: CancelInvoiceRequestDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/invoice/fetchPdfInvoice

- Résumé:  Finds an invoice based on invoice number and optionally an invoice type and return it as pdf as byte []
- OperationId:     POST_Invoice_fetchPdfInvoice
- Description: Finds an invoice based on invoice number and optionally an invoice type and return it as pdf as byte []. Invoice is not recreated, instead invoice stored as pdf in database is returned.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GetPdfInvoiceRequestDto
  - application/xml: GetPdfInvoiceRequestDto
- Réponses:
  - default: pdf invoice
    - application/json: GetPdfInvoiceResponseDto
    - application/xml: GetPdfInvoiceResponseDto

#### POST /api/rest/invoice/fetchXMLInvoice

- Résumé:  Finds an invoice based on its invoice number and optionally an invoice type and return it as xml string. 
- OperationId:     POST_Invoice_fetchXMLInvoice
- Description: Finds an invoice based on its invoice number and optionally an invoice type and return it as xml string.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GetXmlInvoiceRequestDto
  - application/xml: GetXmlInvoiceRequestDto
- Réponses:
  - default: xml invoice
    - application/json: GetXmlInvoiceResponseDto
    - application/xml: GetXmlInvoiceResponseDto

#### POST /api/rest/invoice/generateDraftInvoice

- Résumé:  Generate a Draft invoice  
- OperationId:     POST_Invoice_generateDraftInvoice
- Description: Generate a Draft invoice
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenerateInvoiceRequestDto
  - application/xml: GenerateInvoiceRequestDto
- Réponses:
  - default: action status.
    - application/json: GenerateInvoiceResponseDto
    - application/xml: GenerateInvoiceResponseDto

#### POST /api/rest/invoice/generateInvoice

- Résumé:  Launch all the invoicing process for a given billingAccount, that's mean
- OperationId:     POST_Invoice_generateInvoice
- Description: Launch all the invoicing process for a given billingAccount, that's mean. <ul> <li>Create rated transactions <li>Create an exceptional billingRun with given dates <li>Validate the pre-invoicing report <li>Validate the post-invoicing report <li>Validate the BillingRun </ul>
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenerateInvoiceRequestDto
  - application/xml: GenerateInvoiceRequestDto
- Réponses:
  - default: invoice response
    - application/json: GenerateInvoiceResponseDto
    - application/xml: GenerateInvoiceResponseDto

#### GET /api/rest/invoice/getPdfInvoice

- Résumé:  Finds an invoice based on invoice number and return it as pdf as byte []
- OperationId:     GET_Invoice_getPdfInvoice
- Description: Finds an invoice based on invoice number and return it as pdf as byte []. Invoice is not recreated, instead invoice stored as pdf in database is returned.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceId` (QUERY, optionnel) — integer (int64)
- `invoiceNumber` (QUERY, optionnel) — string
- Réponses:
  - default: pdf invoice
    - application/json: GetPdfInvoiceResponseDto
    - application/xml: GetPdfInvoiceResponseDto

#### GET /api/rest/invoice/getPdfInvoiceWithType

- Résumé:  Finds an invoice based on invoice number and invoice type and return it as pdf as byte []
- OperationId:     GET_Invoice_getPdfInvoiceWithType
- Description: Finds an invoice based on invoice number and invoice type and return it as pdf as byte []. Invoice is not recreated, instead invoice stored as pdf in database is returned.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceId` (QUERY, optionnel) — integer (int64)
- `invoiceNumber` (QUERY, optionnel) — string
- `invoiceType` (QUERY, optionnel) — string
- Réponses:
  - default: pdf invoice
    - application/json: GetPdfInvoiceResponseDto
    - application/xml: GetPdfInvoiceResponseDto

#### GET /api/rest/invoice/getXMLInvoice

- Résumé:  Finds an invoice based on its invoice number and return it as xml string.  
- OperationId:     GET_Invoice_getXMLInvoice
- Description: Finds an invoice based on its invoice number and return it as xml string.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceId` (QUERY, optionnel) — integer (int64)
- `invoiceNumber` (QUERY, optionnel) — string
- Réponses:
  - default: xml invoice
    - application/json: GetXmlInvoiceResponseDto
    - application/xml: GetXmlInvoiceResponseDto

#### GET /api/rest/invoice/getXMLInvoiceWithType

- Résumé:  Finds an invoice based on invoice number and invoice type. It returns the result as xml string 
- OperationId:     GET_Invoice_getXMLInvoiceWithType
- Description: Finds an invoice based on invoice number and invoice type. It returns the result as xml string
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceId` (QUERY, optionnel) — integer (int64)
- `invoiceNumber` (QUERY, optionnel) — string
- `invoiceType` (QUERY, optionnel) — string
- Réponses:
  - default: xml invoice
    - application/json: GetXmlInvoiceResponseDto
    - application/xml: GetXmlInvoiceResponseDto

#### GET /api/rest/invoice/list

- Résumé:  List invoices matching a given criteria.  
- OperationId:     GET_Invoice_list
- Description: List invoices matching a given criteria.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "id"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Réponses:
  - default: An invoice list
    - application/json: InvoicesDto
    - application/xml: InvoicesDto

#### POST /api/rest/invoice/list

- Résumé:  List invoices matching a given criteria.  
- OperationId:     POST_Invoice_list
- Description: List invoices matching a given criteria.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An invoice list
    - application/json: InvoicesDto
    - application/xml: InvoicesDto

#### GET /api/rest/invoice/listGetAll

- Résumé:  List invoices matching a given criteria 
- OperationId:     GET_Invoice_listGetAll
- Description: List invoices matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of invoices
    - application/json: InvoicesDto
    - application/xml: InvoicesDto

#### GET /api/rest/invoice/listInvoiceByCustomerAccount

- Résumé:  Search for a list of invoices given a customer account code
- OperationId:     GET_Invoice_listInvoiceByCustomerAccount
- Description: Search for a list of invoices given a customer account code. Deprecated in v.4.7.2, use list() instead with criteria billingAccount.customerAccount.code=xxx
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (QUERY, optionnel) — string
- `returnPdf` (QUERY, optionnel) — boolean
- Réponses:
  - default: customer invoice.
    - application/json: CustomerInvoicesResponse
    - application/xml: CustomerInvoicesResponse

#### GET /api/rest/invoice/listPresentInAR

- Résumé:  List invoices with account operation for a given customer account  Deprecated in v
- OperationId:     GET_Invoice_listPresentInAR
- Description: List invoices with account operation for a given customer account Deprecated in v.4.8. Use list() instead with criteria recordedInvoice=IS_NOT_NULL and billingAccount.customerAccount.code=xxx
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (QUERY, optionnel) — string
- `includePdf` (QUERY, optionnel) — boolean
- Réponses:
  - default: List of invoices
    - application/json: CustomerInvoicesResponse
    - application/xml: CustomerInvoicesResponse

#### POST /api/rest/invoice/sendByEmail

- Résumé:  Send invoice by Email. 
- OperationId:     POST_Invoice_sendByEmail
- Description: Send invoice by Email.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceDto
  - application/xml: InvoiceDto
- Réponses:
  - default: SUCCESS if sent, FAIL else
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/invoice/validate

- Résumé:  Validate an invoice based on the invoice id.  
- OperationId:     POST_Invoice_validate
- Description: Validate an invoice based on the invoice id.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: object
  - application/xml: object
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/invoice/validate

- Résumé:  Validate an invoice based on invoice id. 
- OperationId:     PUT_Invoice_validate
- Description: Validate an invoice based on invoice id.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ValidateInvoiceRequestDto
  - application/xml: ValidateInvoiceRequestDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/invoice/version

- Résumé: Get version of application
- OperationId: index_125
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetInvoiceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoice**: InvoiceDto

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
- **draft**: boolean
- **alreadyAddedDiscount**: boolean

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

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldsDto
The custom fields
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

### CreateInvoiceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoiceId**: integer (int64)
- **invoiceNumber**: string
- **invoiceDate**: string (date-time)
- **dueDate**: string (date-time)
- **amountWithoutTax**: number
- **amountTax**: number
- **amountWithTax**: number
- **netToPay**: number
- **xmlFilename**: string
- **xmlInvoice**: string
- **pdfFilename**: string
- **pdfInvoice**: Array<string (byte)>
- **sentByEmail**: boolean

### CancelInvoiceRequestDto
Type: object
Champs obligatoires: invoiceId
Propriétés:
- **invoiceId**: integer (int64)

### GetPdfInvoiceRequestDto
Type: object
Propriétés:
- **invoiceId**: integer (int64)
- **invoiceNumber**: string
- **invoiceType**: string
- **generatePdf**: boolean

### GetPdfInvoiceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **pdfContent**: Array<string (byte)>
- **pdfFileName**: string

### GetXmlInvoiceRequestDto
Type: object
Propriétés:
- **invoiceId**: integer (int64)
- **invoiceNumber**: string
- **invoiceType**: string

### GetXmlInvoiceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **xmlContent**: string
- **xmlFileName**: string

### GenerateInvoiceRequestDto
Type: object
Champs obligatoires: invoicingDate
Propriétés:
- **targetType**: string
- **targetCode**: string
- **billingAccountCode**: string
- **openOrderCode**: string
- **applyBillingRules**: boolean
- **invoicingDate**: string (date-time)
- **firstTransactionDate**: string (date-time)
- **lastTransactionDate**: string (date-time)
- **filter**: FilterDto
- **orderNumber**: string
- **generateXML**: boolean
- **generatePDF**: boolean
- **generateAO**: boolean
- **customFields**: CustomFieldsDto
- **includeRatedTransactions**: boolean
- **applyMinimum**: string
- **skipValidation**: boolean

### FilterDto
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

### GenerateInvoiceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **generateInvoiceResultDto**: Array<GenerateInvoiceResultDto>

### GenerateInvoiceResultDto
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
- **temporaryInvoiceNumber**: string
- **invoiceTypeCode**: string
- **amount**: number
- **accountOperationId**: integer (int64)
- **ratedTransactionsTolink**: Array<integer (int64)>
- **alreadyAppliedMinimum**: boolean
- **draft**: boolean
- **alreadyAddedDiscount**: boolean

### InvoicesDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoices**: Array<InvoiceDto>

### CustomerInvoicesResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **customerInvoiceDtoList**: Array<InvoiceDto>

### ValidateInvoiceRequestDto
Type: object
Champs obligatoires: invoiceId
Propriétés:
- **invoiceId**: integer (int64)
- **generateAO**: boolean
- **refreshExchangeRate**: boolean
- **skipValidation**: boolean

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
