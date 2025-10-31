# TASK091 — Service Payment

## Contexte
Le service « Payment » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Payment
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/payment` |  Creates automated payment. It also process if a payment is matching or not  |     POST_Payment_create_1 |
| GET | `/api/rest/payment/cardPaymentMethod` |  Retrieve card payment method by its id.  |     GET_Payment_cardPaymentMethod |
| POST | `/api/rest/payment/cardPaymentMethod` |  Add a new card payment method. It will be marked as preferred.  |     POST_Payment_cardPaymentMethod |
| PUT | `/api/rest/payment/cardPaymentMethod` |  Update existing card payment method.  |     PUT_Payment_cardPaymentMethod |
| DELETE | `/api/rest/payment/cardPaymentMethod` |  Remove card payment method. If it was marked as preferred, some other payment method will be marked as preferred  |     DELETE_Payment_cardPaymentMethod |
| GET | `/api/rest/payment/cardPaymentMethod/list` |  List available card payment methods for a given customer account identified either by id or by code.  |     GET_Payment_cardPaymentMethod_list |
| POST | `/api/rest/payment/create` |  Creates automated payment. It also process if a payment is matching or not Deprecated and replaced by reatePayment using /payment path  |     POST_Payment_create |
| GET | `/api/rest/payment/customerPayment` |  Returns a list of account operations along with the balance of a customer.  |     GET_Payment_customerPayment |
| GET | `/api/rest/payment/ddRequestBuilder` |  Retrieve ddRequest builder by its code.  |     GET_Payment_ddRequestBuilder |
| POST | `/api/rest/payment/ddRequestBuilder` |  Add a new ddRequest builder.  |     POST_Payment_ddRequestBuilder |
| PUT | `/api/rest/payment/ddRequestBuilder` |  Update existing ddRequest builder.  |     PUT_Payment_ddRequestBuilder |
| DELETE | `/api/rest/payment/ddRequestBuilder` |  Remove ddRequest builder.  |     DELETE_Payment_ddRequestBuilder |
| POST | `/api/rest/payment/ddRequestBuilder/{code}/disable` |  Disable a ddRequest builder with a given code  |     POST_Payment_ddRequestBuilder_{code}_disable |
| POST | `/api/rest/payment/ddRequestBuilder/{code}/enable` |  Enable a ddRequest builder with a given code  |     POST_Payment_ddRequestBuilder_{code}_enable |
| POST | `/api/rest/payment/ddRequestBuilder/createOrUpdate` |  Create or update ddRequest builder.  |     POST_Payment_ddRequestBuilder_createOrUpdate |
| GET | `/api/rest/payment/ddRequestBuilder/list` |  List DDRequest Builders matching a given criteria  |     GET_Payment_ddRequestBuilder_list |
| POST | `/api/rest/payment/ddRequestBuilder/list` |  List DDRequest Builders matching a given criteria.  |     POST_Payment_ddRequestBuilder_list |
| GET | `/api/rest/payment/history/list` |  List Payment matching a given criteria.  |     GET_Payment_history_list |
| POST | `/api/rest/payment/history/list` |  List invoices matching a given criteria.  |     POST_Payment_history_list |
| GET | `/api/rest/payment/paymentGateway` |  Retrieve payment gateway by its code.  |     GET_Payment_paymentGateway |
| POST | `/api/rest/payment/paymentGateway` |  Add a new payment gateway.  |     POST_Payment_paymentGateway |
| PUT | `/api/rest/payment/paymentGateway` |  Update existing payment gateway.  |     PUT_Payment_paymentGateway |
| DELETE | `/api/rest/payment/paymentGateway` |  Remove payment gateway.  |     DELETE_Payment_paymentGateway |
| POST | `/api/rest/payment/paymentGateway/{code}/disable` |  Disable a Payment gateway with a given code  |     POST_Payment_paymentGateway_{code}_disable |
| POST | `/api/rest/payment/paymentGateway/{code}/enable` |  Enable a Payment gateway with a given code  |     POST_Payment_paymentGateway_{code}_enable |
| GET | `/api/rest/payment/paymentGateway/approveSepaDDMandate` |  approve SepaDDMandate   |     GET_Payment_paymentGateway_approveSepaDDMandate |
| GET | `/api/rest/payment/paymentGateway/checkMandate` |  Gets a created mandate.  |     GET_Payment_paymentGateway_checkMandate |
| POST | `/api/rest/payment/paymentGateway/createOrUpdate` |  Create or update payment gateway.  |     POST_Payment_paymentGateway_createOrUpdate |
| GET | `/api/rest/payment/paymentGateway/getHostedCheckoutStatus` |  Get the Hosted Checkout Status.  |     GET_Payment_paymentGateway_getHostedCheckoutStatus |
| GET | `/api/rest/payment/paymentGateway/getHostedCheckoutUrl` |  Get the Hosted Checkout URL for payment.  |     GET_Payment_paymentGateway_getHostedCheckoutUrl |
| GET | `/api/rest/payment/paymentGateway/list` |  List payment gateways matching a given criteria  |     GET_Payment_paymentGateway_list |
| POST | `/api/rest/payment/paymentGateway/list` |  List payment gateways matching a given criteria.  |     POST_Payment_paymentGateway_list |
| POST | `/api/rest/payment/paymentGateway/rumSequence` |  Creates a RUM sequence associated to the given payment gateway.  |     POST_Payment_paymentGateway_rumSequence |
| PUT | `/api/rest/payment/paymentGateway/rumSequence` |  Updates a RUM sequence associated to the given payment gateway.  |     PUT_Payment_paymentGateway_rumSequence |
| GET | `/api/rest/payment/paymentGateway/rumSequence/{code}` |  Finds the RUM sequence with the specified code.  |     GET_Payment_paymentGateway_rumSequence_{code} |
| DELETE | `/api/rest/payment/paymentGateway/rumSequence/{code}` |  Deletes the RUM sequence with the specified code.  |     DELETE_Payment_paymentGateway_rumSequence_{code} |
| POST | `/api/rest/payment/paymentGateway/rumSequence/{code}/next` |  Generates the next RUM sequence number.  |     POST_Payment_paymentGateway_rumSequence_{code}_next |
| GET | `/api/rest/payment/paymentMethod` |  Retrieve payment method by its id.  |     GET_Payment_paymentMethod |
| POST | `/api/rest/payment/paymentMethod` |  Add a new payment method. It will be marked as preferred.  |     POST_Payment_paymentMethod |
| PUT | `/api/rest/payment/paymentMethod` |  Update existing payment method.  |     PUT_Payment_paymentMethod |
| DELETE | `/api/rest/payment/paymentMethod` |  Remove payment method. If it was marked as preferred, some other payment method will be marked as preferred  |     DELETE_Payment_paymentMethod |
| POST | `/api/rest/payment/paymentMethod/{id}/disable` |  Disable a Payment method with a given id  |     POST_Payment_paymentMethod_{id}_disable |
| POST | `/api/rest/payment/paymentMethod/{id}/enable` |  Enable a Payment method with a given id  |     POST_Payment_paymentMethod_{id}_enable |
| GET | `/api/rest/payment/paymentMethod/findByCustomerAccount` |  List Payment Methods matching a customer account   |     GET_Payment_paymentMethod_findByCustomerAccount |
| GET | `/api/rest/payment/paymentMethod/list` |  List Payment Methods matching a given criteria  |     GET_Payment_paymentMethod_list |
| POST | `/api/rest/payment/paymentMethod/list` |  List Payment Methods matching a given criteria  |     POST_Payment_paymentMethod_list |
| GET | `/api/rest/payment/paymentMethod/listGetAll` |  List paymentMethods matching a given criteria  |     GET_Payment_paymentMethod_listGetAll |
| GET | `/api/rest/payment/paymentScheduleInstance` |  Find  PaymentScheduleInstance by ID  |     GET_Payment_paymentScheduleInstance |
| PUT | `/api/rest/payment/paymentScheduleInstance` |  Update  payment Schedules instance.  |     PUT_Payment_paymentScheduleInstance |
| PUT | `/api/rest/payment/paymentScheduleInstance/{id}/items` |  Update Payment schedule instance item, the update is only about amount and requestPaymentDate.  |     PUT_Payment_paymentScheduleInstance_{id}_items |
| PUT | `/api/rest/payment/paymentScheduleInstance/cancel` |  Cancel  payment Schedules instance.  |     PUT_Payment_paymentScheduleInstance_cancel |
| GET | `/api/rest/payment/paymentScheduleInstance/list` |  List  paymentScheduleInstance matching a given criteria  |     GET_Payment_paymentScheduleInstance_list |
| POST | `/api/rest/payment/paymentScheduleInstance/list` |  List  PaymentScheduleInstance matching a given criteria  |     POST_Payment_paymentScheduleInstance_list |
| PUT | `/api/rest/payment/paymentScheduleInstance/terminate` |  Terminate  payment Schedules instance.  |     PUT_Payment_paymentScheduleInstance_terminate |
| GET | `/api/rest/payment/paymentScheduleTemplate` |  find  payment Schedules template.  |     GET_Payment_paymentScheduleTemplate |
| POST | `/api/rest/payment/paymentScheduleTemplate` |  Create  payment Schedules template.  |     POST_Payment_paymentScheduleTemplate |
| PUT | `/api/rest/payment/paymentScheduleTemplate` |  Create  payment Schedules template.  |     PUT_Payment_paymentScheduleTemplate |
| DELETE | `/api/rest/payment/paymentScheduleTemplate` |  remove  payment Schedules template.  |     DELETE_Payment_paymentScheduleTemplate |
| POST | `/api/rest/payment/paymentScheduleTemplate/createOrUpdate` |  Create or update payment Schedules template.  |     POST_Payment_paymentScheduleTemplate_createOrUpdate |
| GET | `/api/rest/payment/paymentScheduleTemplate/list` |  List  PaymentScheduleTemplate matching a given criteria  |     GET_Payment_paymentScheduleTemplate_list |
| POST | `/api/rest/payment/paymentScheduleTemplate/list` |  List  PaymentScheduleTemplate matching a given criteria  |     POST_Payment_paymentScheduleTemplate_list |
| GET | `/api/rest/payment/version` | Get version of application | index_139 |

#### POST /api/rest/payment

- Résumé:  Creates automated payment. It also process if a payment is matching or not 
- OperationId:     POST_Payment_create_1
- Description: Creates automated payment. It also process if a payment is matching or not
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentDto
  - application/xml: PaymentDto
- Réponses:
  - default: payment action status
    - application/json: PaymentActionStatus
    - application/xml: PaymentActionStatus

#### GET /api/rest/payment/cardPaymentMethod

- Résumé:  Retrieve card payment method by its id. 
- OperationId:     GET_Payment_cardPaymentMethod
- Description: Retrieve card payment method by its id.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — integer (int64)
- Réponses:
  - default: Card payment DTO
    - application/json: CardPaymentMethodTokenDto
    - application/xml: CardPaymentMethodTokenDto

#### POST /api/rest/payment/cardPaymentMethod

- Résumé:  Add a new card payment method. It will be marked as preferred. 
- OperationId:     POST_Payment_cardPaymentMethod
- Description: Add a new card payment method. It will be marked as preferred.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CardPaymentMethodDto
  - application/xml: CardPaymentMethodDto
- Réponses:
  - default: Token id in payment gateway
    - application/json: CardPaymentMethodTokenDto
    - application/xml: CardPaymentMethodTokenDto

#### PUT /api/rest/payment/cardPaymentMethod

- Résumé:  Update existing card payment method. 
- OperationId:     PUT_Payment_cardPaymentMethod
- Description: Update existing card payment method.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CardPaymentMethodDto
  - application/xml: CardPaymentMethodDto
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/payment/cardPaymentMethod

- Résumé:  Remove card payment method. If it was marked as preferred, some other payment method will be marked as preferred 
- OperationId:     DELETE_Payment_cardPaymentMethod
- Description: Remove card payment method. If it was marked as preferred, some other payment method will be marked as preferred
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — integer (int64)
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/cardPaymentMethod/list

- Résumé:  List available card payment methods for a given customer account identified either by id or by code. 
- OperationId:     GET_Payment_cardPaymentMethod_list
- Description: List available card payment methods for a given customer account identified either by id or by code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountId` (QUERY, optionnel) — integer (int64)
- `customerAccountCode` (QUERY, optionnel) — string
- Réponses:
  - default: A list of card payment methods
    - application/json: CardPaymentMethodTokensDto
    - application/xml: CardPaymentMethodTokensDto

#### POST /api/rest/payment/create

- Résumé:  Creates automated payment. It also process if a payment is matching or not Deprecated and replaced by reatePayment using /payment path 
- OperationId:     POST_Payment_create
- Description: Creates automated payment. It also process if a payment is matching or not Deprecated and replaced by reatePayment using /payment path
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentDto
  - application/xml: PaymentDto
- Réponses:
  - default: payment action status
    - application/json: PaymentActionStatus
    - application/xml: PaymentActionStatus

#### GET /api/rest/payment/customerPayment

- Résumé:  Returns a list of account operations along with the balance of a customer. 
- OperationId:     GET_Payment_customerPayment
- Description: Returns a list of account operations along with the balance of a customer.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (QUERY, optionnel) — string
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: list of customer's response.
    - application/json: CustomerPaymentsResponse
    - application/xml: CustomerPaymentsResponse

#### GET /api/rest/payment/ddRequestBuilder

- Résumé:  Retrieve ddRequest builder by its code. 
- OperationId:     GET_Payment_ddRequestBuilder
- Description: Retrieve ddRequest builder by its code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: ddRequest builder DTO
    - application/json: DDRequestBuilderResponseDto
    - application/xml: DDRequestBuilderResponseDto

#### POST /api/rest/payment/ddRequestBuilder

- Résumé:  Add a new ddRequest builder. 
- OperationId:     POST_Payment_ddRequestBuilder
- Description: Add a new ddRequest builder.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DDRequestBuilderDto
  - application/xml: DDRequestBuilderDto
- Réponses:
  - default: the ddRequestBuilder dto created
    - application/json: DDRequestBuilderResponseDto
    - application/xml: DDRequestBuilderResponseDto

#### PUT /api/rest/payment/ddRequestBuilder

- Résumé:  Update existing ddRequest builder. 
- OperationId:     PUT_Payment_ddRequestBuilder
- Description: Update existing ddRequest builder.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DDRequestBuilderDto
  - application/xml: DDRequestBuilderDto
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/payment/ddRequestBuilder

- Résumé:  Remove ddRequest builder. 
- OperationId:     DELETE_Payment_ddRequestBuilder
- Description: Remove ddRequest builder.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/ddRequestBuilder/{code}/disable

- Résumé:  Disable a ddRequest builder with a given code 
- OperationId:     POST_Payment_ddRequestBuilder_{code}_disable
- Description: Disable a ddRequest builder with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/ddRequestBuilder/{code}/enable

- Résumé:  Enable a ddRequest builder with a given code 
- OperationId:     POST_Payment_ddRequestBuilder_{code}_enable
- Description: Enable a ddRequest builder with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/ddRequestBuilder/createOrUpdate

- Résumé:  Create or update ddRequest builder. 
- OperationId:     POST_Payment_ddRequestBuilder_createOrUpdate
- Description: Create or update ddRequest builder.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DDRequestBuilderDto
  - application/xml: DDRequestBuilderDto
- Réponses:
  - default: the ddRequestBuilder dto created
    - application/json: DDRequestBuilderResponseDto
    - application/xml: DDRequestBuilderResponseDto

#### GET /api/rest/payment/ddRequestBuilder/list

- Résumé:  List DDRequest Builders matching a given criteria 
- OperationId:     GET_Payment_ddRequestBuilder_list
- Description: List DDRequest Builders matching a given criteria
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
  - default: An ddRequest builder list
    - application/json: DDRequestBuilderResponseDto
    - application/xml: DDRequestBuilderResponseDto

#### POST /api/rest/payment/ddRequestBuilder/list

- Résumé:  List DDRequest Builders matching a given criteria. 
- OperationId:     POST_Payment_ddRequestBuilder_list
- Description: List DDRequest Builders matching a given criteria.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An ddRequest builder list
    - application/json: DDRequestBuilderResponseDto
    - application/xml: DDRequestBuilderResponseDto

#### GET /api/rest/payment/history/list

- Résumé:  List Payment matching a given criteria. 
- OperationId:     GET_Payment_history_list
- Description: List Payment matching a given criteria.
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
    - application/json: PaymentHistoriesDto
    - application/xml: PaymentHistoriesDto

#### POST /api/rest/payment/history/list

- Résumé:  List invoices matching a given criteria. 
- OperationId:     POST_Payment_history_list
- Description: List invoices matching a given criteria.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An invoice list
    - application/json: PaymentHistoriesDto
    - application/xml: PaymentHistoriesDto

#### GET /api/rest/payment/paymentGateway

- Résumé:  Retrieve payment gateway by its code. 
- OperationId:     GET_Payment_paymentGateway
- Description: Retrieve payment gateway by its code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: payment DTO
    - application/json: PaymentGatewayResponseDto
    - application/xml: PaymentGatewayResponseDto

#### POST /api/rest/payment/paymentGateway

- Résumé:  Add a new payment gateway. 
- OperationId:     POST_Payment_paymentGateway
- Description: Add a new payment gateway.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentGatewayDto
  - application/xml: PaymentGatewayDto
- Réponses:
  - default: the paymentGateway dto created
    - application/json: PaymentGatewayResponseDto
    - application/xml: PaymentGatewayResponseDto

#### PUT /api/rest/payment/paymentGateway

- Résumé:  Update existing payment gateway. 
- OperationId:     PUT_Payment_paymentGateway
- Description: Update existing payment gateway.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentGatewayDto
  - application/xml: PaymentGatewayDto
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/payment/paymentGateway

- Résumé:  Remove payment gateway. 
- OperationId:     DELETE_Payment_paymentGateway
- Description: Remove payment gateway.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/paymentGateway/{code}/disable

- Résumé:  Disable a Payment gateway with a given code 
- OperationId:     POST_Payment_paymentGateway_{code}_disable
- Description: Disable a Payment gateway with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/paymentGateway/{code}/enable

- Résumé:  Enable a Payment gateway with a given code 
- OperationId:     POST_Payment_paymentGateway_{code}_enable
- Description: Enable a Payment gateway with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentGateway/approveSepaDDMandate

- Résumé:  approve SepaDDMandate  
- OperationId:     GET_Payment_paymentGateway_approveSepaDDMandate
- Description: approve SepaDDMandate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (QUERY, optionnel) — string
- `tokenId` (QUERY, optionnel) — string
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentGateway/checkMandate

- Résumé:  Gets a created mandate. 
- OperationId:     GET_Payment_paymentGateway_checkMandate
- Description: Gets a created mandate.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `mandateReference` (QUERY, optionnel) — string
- `mandateId` (QUERY, optionnel) — string
- `customerAccountCode` (QUERY, optionnel) — string
- Réponses:
  - default: created mandate
    - application/json: MandatInfoDto
    - application/xml: MandatInfoDto

#### POST /api/rest/payment/paymentGateway/createOrUpdate

- Résumé:  Create or update payment gateway. 
- OperationId:     POST_Payment_paymentGateway_createOrUpdate
- Description: Create or update payment gateway.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentGatewayDto
  - application/xml: PaymentGatewayDto
- Réponses:
  - default: the paymentGateway dto created
    - application/json: PaymentGatewayResponseDto
    - application/xml: PaymentGatewayResponseDto

#### GET /api/rest/payment/paymentGateway/getHostedCheckoutStatus

- Résumé:  Get the Hosted Checkout Status. 
- OperationId:     GET_Payment_paymentGateway_getHostedCheckoutStatus
- Description: Get the Hosted Checkout Status.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — string
- `ca` (QUERY, optionnel) — string
- `seller` (QUERY, optionnel) — string
- Réponses:
  - default: the HostedCheckoutStatusResponseDto
    - application/json: HostedCheckoutStatusResponseDto
    - application/xml: HostedCheckoutStatusResponseDto

#### GET /api/rest/payment/paymentGateway/getHostedCheckoutUrl

- Résumé:  Get the Hosted Checkout URL for payment. 
- OperationId:     GET_Payment_paymentGateway_getHostedCheckoutUrl
- Description: Get the Hosted Checkout URL for payment.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `ca` (QUERY, optionnel) — string
- `returnUrl` (QUERY, optionnel) — string
- `locale` (QUERY, optionnel) — string
  - Contraintes: défaut: "fr_FR"
- `amount` (QUERY, optionnel) — string
  - Contraintes: défaut: "100"
- `currencyCode` (QUERY, optionnel) — string
  - Contraintes: défaut: "EUR"
- `authorizationMode` (QUERY, optionnel) — string
  - Contraintes: défaut: "FINAL_AUTHORIZATION"
- `countryCode` (QUERY, optionnel) — string
  - Contraintes: défaut: "fr"
- `skipAuthentication` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `gatewayPaymentName` (QUERY, optionnel) — string
  - Contraintes: défaut: "INGENICO_GC"
- `variant` (QUERY, optionnel) — string
  - Contraintes: défaut: "101"
- `seller` (QUERY, optionnel) — string
- `automaticReturnUrl` (QUERY, optionnel) — string
- `allowedActions` (QUERY, optionnel) — string
- `returnContext` (QUERY, optionnel) — string
- `authenticationAmount` (QUERY, optionnel) — string
- `advancedOptions` (QUERY, optionnel) — string
  - Contraintes: défaut: ""
- `isOneShotPayment` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `cancelUrl` (QUERY, optionnel) — string
- `paymentMethodType` (QUERY, optionnel) — string
  - Valeurs autorisées: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH
  - Contraintes: défaut: "CARD"
- `customerIpAddress` (QUERY, optionnel) — string
  - Contraintes: défaut: ""
- `browserScreenHeight` (QUERY, optionnel) — string
  - Contraintes: défaut: ""
- `browserScreenWidth` (QUERY, optionnel) — string
  - Contraintes: défaut: ""
- Réponses:
  - default: the PaymentHostedCheckoutResponseDto
    - application/json: PaymentHostedCheckoutResponseDto
    - application/xml: PaymentHostedCheckoutResponseDto

#### GET /api/rest/payment/paymentGateway/list

- Résumé:  List payment gateways matching a given criteria 
- OperationId:     GET_Payment_paymentGateway_list
- Description: List payment gateways matching a given criteria
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
  - default: An payment gateway list
    - application/json: PaymentGatewayResponseDto
    - application/xml: PaymentGatewayResponseDto

#### POST /api/rest/payment/paymentGateway/list

- Résumé:  List payment gateways matching a given criteria. 
- OperationId:     POST_Payment_paymentGateway_list
- Description: List payment gateways matching a given criteria.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An payment gateway list
    - application/json: PaymentGatewayResponseDto
    - application/xml: PaymentGatewayResponseDto

#### POST /api/rest/payment/paymentGateway/rumSequence

- Résumé:  Creates a RUM sequence associated to the given payment gateway. 
- OperationId:     POST_Payment_paymentGateway_rumSequence
- Description: Creates a RUM sequence associated to the given payment gateway.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentGatewayRumSequenceDto
  - application/xml: PaymentGatewayRumSequenceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/payment/paymentGateway/rumSequence

- Résumé:  Updates a RUM sequence associated to the given payment gateway. 
- OperationId:     PUT_Payment_paymentGateway_rumSequence
- Description: Updates a RUM sequence associated to the given payment gateway.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentGatewayRumSequenceDto
  - application/xml: PaymentGatewayRumSequenceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentGateway/rumSequence/{code}

- Résumé:  Finds the RUM sequence with the specified code. 
- OperationId:     GET_Payment_paymentGateway_rumSequence_{code}
- Description: Finds the RUM sequence with the specified code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: PaymentGatewayRumSequenceResponseDto
    - application/xml: PaymentGatewayRumSequenceResponseDto

#### DELETE /api/rest/payment/paymentGateway/rumSequence/{code}

- Résumé:  Deletes the RUM sequence with the specified code. 
- OperationId:     DELETE_Payment_paymentGateway_rumSequence_{code}
- Description: Deletes the RUM sequence with the specified code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/paymentGateway/rumSequence/{code}/next

- Résumé:  Generates the next RUM sequence number. 
- OperationId:     POST_Payment_paymentGateway_rumSequence_{code}_next
- Description: Generates the next RUM sequence number.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: sequence value dto
    - application/json: GenericSequenceValueResponseDto
    - application/xml: GenericSequenceValueResponseDto

#### GET /api/rest/payment/paymentMethod

- Résumé:  Retrieve payment method by its id. 
- OperationId:     GET_Payment_paymentMethod
- Description: Retrieve payment method by its id.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — integer (int64)
- Réponses:
  - default: payment DTO
    - application/json: PaymentMethodTokenDto
    - application/xml: PaymentMethodTokenDto

#### POST /api/rest/payment/paymentMethod

- Résumé:  Add a new payment method. It will be marked as preferred. 
- OperationId:     POST_Payment_paymentMethod
- Description: Add a new payment method. It will be marked as preferred.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentMethodDto
  - application/xml: PaymentMethodDto
- Réponses:
  - default: Token id in payment gateway
    - application/json: PaymentMethodTokenDto
    - application/xml: PaymentMethodTokenDto

#### PUT /api/rest/payment/paymentMethod

- Résumé:  Update existing payment method. 
- OperationId:     PUT_Payment_paymentMethod
- Description: Update existing payment method.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentMethodDto
  - application/xml: PaymentMethodDto
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/payment/paymentMethod

- Résumé:  Remove payment method. If it was marked as preferred, some other payment method will be marked as preferred 
- OperationId:     DELETE_Payment_paymentMethod
- Description: Remove payment method. If it was marked as preferred, some other payment method will be marked as preferred
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — integer (int64)
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/paymentMethod/{id}/disable

- Résumé:  Disable a Payment method with a given id 
- OperationId:     POST_Payment_paymentMethod_{id}_disable
- Description: Disable a Payment method with a given id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/paymentMethod/{id}/enable

- Résumé:  Enable a Payment method with a given id 
- OperationId:     POST_Payment_paymentMethod_{id}_enable
- Description: Enable a Payment method with a given id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentMethod/findByCustomerAccount

- Résumé:  List Payment Methods matching a customer account  
- OperationId:     GET_Payment_paymentMethod_findByCustomerAccount
- Description: List Payment Methods matching a customer account
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- Réponses:
  - default: An payment method list
    - application/json: PaymentMethodTokensDto
    - application/xml: PaymentMethodTokensDto

#### GET /api/rest/payment/paymentMethod/list

- Résumé:  List Payment Methods matching a given criteria 
- OperationId:     GET_Payment_paymentMethod_list
- Description: List Payment Methods matching a given criteria
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
  - default: An payment method list
    - application/json: PaymentMethodTokensDto
    - application/xml: PaymentMethodTokensDto

#### POST /api/rest/payment/paymentMethod/list

- Résumé:  List Payment Methods matching a given criteria 
- OperationId:     POST_Payment_paymentMethod_list
- Description: List Payment Methods matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An payment method list
    - application/json: PaymentMethodTokensDto
    - application/xml: PaymentMethodTokensDto

#### GET /api/rest/payment/paymentMethod/listGetAll

- Résumé:  List paymentMethods matching a given criteria 
- OperationId:     GET_Payment_paymentMethod_listGetAll
- Description: List paymentMethods matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of paymentMethods
    - application/json: PaymentMethodTokensDto
    - application/xml: PaymentMethodTokensDto

#### GET /api/rest/payment/paymentScheduleInstance

- Résumé:  Find  PaymentScheduleInstance by ID 
- OperationId:     GET_Payment_paymentScheduleInstance
- Description: Find PaymentScheduleInstance by ID
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — integer (int64)
- Réponses:
  - default: A paymentScheduleInstance dto
    - application/json: PaymentScheduleInstanceResponseDto
    - application/xml: PaymentScheduleInstanceResponseDto

#### PUT /api/rest/payment/paymentScheduleInstance

- Résumé:  Update  payment Schedules instance. 
- OperationId:     PUT_Payment_paymentScheduleInstance
- Description: Update payment Schedules instance.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleInstanceDto
  - application/xml: PaymentScheduleInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/payment/paymentScheduleInstance/{id}/items

- Résumé:  Update Payment schedule instance item, the update is only about amount and requestPaymentDate. 
- OperationId:     PUT_Payment_paymentScheduleInstance_{id}_items
- Description: Update Payment schedule instance item, the update is only about amount and requestPaymentDate.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleInstanceItemsDto
  - application/xml: PaymentScheduleInstanceItemsDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/payment/paymentScheduleInstance/cancel

- Résumé:  Cancel  payment Schedules instance. 
- OperationId:     PUT_Payment_paymentScheduleInstance_cancel
- Description: Cancel payment Schedules instance.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleInstanceDto
  - application/xml: PaymentScheduleInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentScheduleInstance/list

- Résumé:  List  paymentScheduleInstance matching a given criteria 
- OperationId:     GET_Payment_paymentScheduleInstance_list
- Description: List paymentScheduleInstance matching a given criteria
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
  - default: An paymentScheduleInstance dto list
    - application/json: PaymentScheduleInstancesDto
    - application/xml: PaymentScheduleInstancesDto

#### POST /api/rest/payment/paymentScheduleInstance/list

- Résumé:  List  PaymentScheduleInstance matching a given criteria 
- OperationId:     POST_Payment_paymentScheduleInstance_list
- Description: List PaymentScheduleInstance matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An PaymentScheduleInstance dto list
    - application/json: PaymentScheduleInstancesDto
    - application/xml: PaymentScheduleInstancesDto

#### PUT /api/rest/payment/paymentScheduleInstance/terminate

- Résumé:  Terminate  payment Schedules instance. 
- OperationId:     PUT_Payment_paymentScheduleInstance_terminate
- Description: Terminate payment Schedules instance.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleInstanceDto
  - application/xml: PaymentScheduleInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentScheduleTemplate

- Résumé:  find  payment Schedules template. 
- OperationId:     GET_Payment_paymentScheduleTemplate
- Description: find payment Schedules template.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `paymentScheduleTemplateCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: PaymentScheduleTemplateResponseDto
    - application/xml: PaymentScheduleTemplateResponseDto

#### POST /api/rest/payment/paymentScheduleTemplate

- Résumé:  Create  payment Schedules template. 
- OperationId:     POST_Payment_paymentScheduleTemplate
- Description: Create payment Schedules template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleTemplateDto
  - application/xml: PaymentScheduleTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/payment/paymentScheduleTemplate

- Résumé:  Create  payment Schedules template. 
- OperationId:     PUT_Payment_paymentScheduleTemplate
- Description: Create payment Schedules template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleTemplateDto
  - application/xml: PaymentScheduleTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/payment/paymentScheduleTemplate

- Résumé:  remove  payment Schedules template. 
- OperationId:     DELETE_Payment_paymentScheduleTemplate
- Description: remove payment Schedules template.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `paymentScheduleTemplateCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/paymentScheduleTemplate/createOrUpdate

- Résumé:  Create or update payment Schedules template. 
- OperationId:     POST_Payment_paymentScheduleTemplate_createOrUpdate
- Description: Create or update payment Schedules template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PaymentScheduleTemplateDto
  - application/xml: PaymentScheduleTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/paymentScheduleTemplate/list

- Résumé:  List  PaymentScheduleTemplate matching a given criteria 
- OperationId:     GET_Payment_paymentScheduleTemplate_list
- Description: List PaymentScheduleTemplate matching a given criteria
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
  - default: An paymentScheduleTemplate dto list
    - application/json: PaymentScheduleTemplatesDto
    - application/xml: PaymentScheduleTemplatesDto

#### POST /api/rest/payment/paymentScheduleTemplate/list

- Résumé:  List  PaymentScheduleTemplate matching a given criteria 
- OperationId:     POST_Payment_paymentScheduleTemplate_list
- Description: List PaymentScheduleTemplate matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: An paymentScheduleTemplate dto list
    - application/json: PaymentScheduleTemplatesDto
    - application/xml: PaymentScheduleTemplatesDto

#### GET /api/rest/payment/version

- Résumé: Get version of application
- OperationId: index_139
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### PaymentDto
Type: object
Propriétés:
- **type**: string
- **description**: string
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **occTemplateCode**: string
- **amount**: number
- **customerAccountCode**: string
- **reference**: string
- **bankLot**: string
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **collectionDate**: string (date-time)
- **dueDate**: string (date-time)
- **transactionDate**: string (date-time)
- **listOCCReferenceforMatching**: Array<string>
- **listAoIdsForMatching**: Array<integer (int64)>
- **paymentOrder**: string
- **fees**: number
- **comment**: string
- **paymentInfo**: string
- **paymentInfo1**: string
- **paymentInfo2**: string
- **paymentInfo3**: string
- **paymentInfo4**: string
- **paymentInfo5**: string
- **paymentInfo6**: string
- **customFields**: CustomFieldsDto
- **toMatching**: boolean

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

### PaymentActionStatus
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action
- **paymentId**: integer (int64)

### ApiErrorCodeEnum
error code
Type: object

### CardPaymentMethodTokenDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **cardPaymentMethod**: CardPaymentMethodDto

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

### CardPaymentMethodDto
Type: object
Champs obligatoires: paymentMethodType
Propriétés:
- **paymentMethodType**: string — type of the payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **id**: integer (int64) — id of the entity
- **disabled**: boolean — Indicate if the payment method is disabled
- **alias**: string — Alias
- **preferred**: boolean — Is it a preferred payment method (Contraintes: défaut: false)
- **customerAccountCode**: string — Customer account code
- **info1**: string — first Additional info
- **info2**: string — second Additional info
- **info3**: string — third Additional info
- **info4**: string — fourth Additional info
- **info5**: string — fifth Additional info
- **bankCoordinates**: BankCoordinatesDto
- **mandateIdentification**: string — Mandate identification for SEPA
- **mandateDate**: string (date-time) — Mandate date for SEPA
- **cardType**: string — Card type (Valeurs: VISA, MASTERCARD, AMERICAN_EXPRESS, CB)
- **owner**: string — Cardholder: first and last name
- **monthExpiration**: integer (int32) — Card expiration: month
- **yearExpiration**: integer (int32) — Card expiration: year
- **tokenId**: string — Token ID in a payment gateway
- **cardNumber**: string — Card number: full number , with first 12 digits hiding in read operation
- **issueNumber**: string — Issue number
- **userId**: string — Id of the user
- **email**: string — Email
- **referenceDocumentCode**: string — The code of reference document
- **customerCode**: string
- **customFields**: CustomFieldsDto

### BankCoordinatesDto
Bank account information
Type: object
Champs obligatoires: accountNumber, accountOwner, bankCode, bankName, bic, branchCode, iban, key
Propriétés:
- **bankCode**: string — The bank code (Contraintes: longueur min: 0 · longueur max: 5)
- **branchCode**: string — The branch code (Contraintes: longueur min: 0 · longueur max: 5)
- **accountNumber**: string — The account number (Contraintes: longueur min: 0 · longueur max: 11)
- **key**: string — The key (Contraintes: longueur min: 0 · longueur max: 2)
- **iban**: string — The iban (Contraintes: longueur min: 0 · longueur max: 34)
- **bic**: string — The bic (Contraintes: longueur min: 0 · longueur max: 11)
- **accountOwner**: string — The account owner (Contraintes: longueur min: 0 · longueur max: 50)
- **bankName**: string — The bank name (Contraintes: longueur min: 0 · longueur max: 50)
- **bankId**: string — The bank id (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerNumber**: string — The issuer number (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerName**: string — The issuer name (Contraintes: longueur min: 0 · longueur max: 50)
- **ics**: string — The ics (Contraintes: longueur min: 0 · longueur max: 35)
- **empty**: boolean

### CardPaymentMethodTokensDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **cardPaymentMethods**: Array<CardPaymentMethodDto>

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

### CustomerPaymentsResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **customerPaymentDtoList**: Array<PaymentDto>
- **balance**: number (double)

### DDRequestBuilderResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **ddRequestBuilders**: Array<DDRequestBuilderDto>

### DDRequestBuilderDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **type**: string (Valeurs: CUSTOM, NATIF)
- **scriptInstanceCode**: string
- **implementationClassName**: string
- **nbOperationPerFile**: integer (int64)
- **maxSizeFile**: integer (int64)
- **paymentLevel**: string (Valeurs: AO, CA)
- **customFields**: CustomFieldsDto

### PaymentHistoriesDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **paymentHistories**: Array<PaymentHistoryDto>

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

### AccountOperationsDto
The list ao paid
Type: object
Propriétés:
- **accountOperation**: Array<AccountOperationDto>

### PaymentGatewayResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **paymentGateways**: Array<PaymentGatewayDto>

### PaymentGatewayDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **type**: string (Valeurs: CUSTOM, NATIF)
- **paymentMethodType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **scriptInstanceCode**: string
- **implementationClassName**: string
- **applicationEL**: string
- **countryCode**: string
- **tradingCurrencyCode**: string
- **cardType**: string (Valeurs: VISA, MASTERCARD, AMERICAN_EXPRESS, CB)
- **marchandId**: string
- **secretKey**: string
- **apiKey**: string
- **webhooksSecretKey**: string
- **webhooksKeyId**: string
- **profile**: string
- **customFields**: CustomFieldsDto
- **rumSequence**: PaymentGatewayRumSequenceDto
- **sellerCode**: string
- **bankCoordinates**: BankCoordinatesDto

### PaymentGatewayRumSequenceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **genericSequence**: GenericSequenceDto
- **paymentGateway**: string

### GenericSequenceDto
Type: object
Propriétés:
- **prefix**: string — Prefix of sequence (Contraintes: pattern: ^[\p{Upper}-]{1,16}$)
- **sequenceSize**: integer (int64) — Size of the sequence. Maximum allowable for RUM is 35
- **currentSequenceNb**: integer (int64) — Current value of the sequence

### MandatInfoDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **id**: string
- **reference**: string
- **state**: string (Valeurs: created, waitingForReference, active, revoked, expired, blocked, used)
- **standard**: string
- **initialScore**: integer (int32)
- **dateCreated**: string (date-time)
- **dateSigned**: string (date-time)
- **paymentScheme**: string
- **bic**: string
- **iban**: string
- **bankName**: string

### HostedCheckoutStatusResponseDto
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action
- **hostedCheckoutStatus**: string
- **paymentStatus**: string (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **paymentId**: string

### PaymentHostedCheckoutResponseDto
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action
- **result**: Result

### Result
Type: object
Propriétés:
- **id**: string
- **hostedCheckoutUrl**: string
- **hostedCheckoutVersion**: string
- **ca**: string
- **returnUrl**: string
- **data**: string
- **seal**: string

### PaymentGatewayRumSequenceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paymentGatewayRumSequence**: PaymentGatewayRumSequenceDto

### GenericSequenceValueResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **sequence**: GenericSequenceDto
- **value**: string
- **seller**: string
- **paymentGateway**: string

### PaymentMethodTokenDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paymentMethod**: PaymentMethodDto

### PaymentMethodDto
Type: object
Champs obligatoires: paymentMethodType
Propriétés:
- **paymentMethodType**: string — type of the payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **id**: integer (int64) — id of the entity
- **disabled**: boolean — Indicate if the payment method is disabled
- **alias**: string — Alias
- **preferred**: boolean — Is it a preferred payment method (Contraintes: défaut: false)
- **customerAccountCode**: string — Customer account code
- **info1**: string — first Additional info
- **info2**: string — second Additional info
- **info3**: string — third Additional info
- **info4**: string — fourth Additional info
- **info5**: string — fifth Additional info
- **bankCoordinates**: BankCoordinatesDto
- **mandateIdentification**: string — Mandate identification for SEPA
- **mandateDate**: string (date-time) — Mandate date for SEPA
- **cardType**: string — Card type (Valeurs: VISA, MASTERCARD, AMERICAN_EXPRESS, CB)
- **owner**: string — Cardholder: first and last name
- **monthExpiration**: integer (int32) — Card expiration: month
- **yearExpiration**: integer (int32) — Card expiration: year
- **tokenId**: string — Token ID in a payment gateway
- **cardNumber**: string — Card number: full number , with first 12 digits hiding in read operation
- **issueNumber**: string — Issue number
- **userId**: string — Id of the user
- **email**: string — Email
- **referenceDocumentCode**: string — The code of reference document
- **customerCode**: string
- **customFields**: CustomFieldsDto

### PaymentMethodTokensDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **paymentMethods**: Array<PaymentMethodDto>

### PaymentScheduleInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paymentScheduleInstanceDto**: PaymentScheduleInstanceDto

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

### PaymentScheduleInstanceItemsDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **paymentScheduleInstanceItems**: Array<PaymentScheduleInstanceItemDto>

### PaymentScheduleInstancesDto
list of related payment schedule instances
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **instances**: Array<PaymentScheduleInstanceDto> — list of payment schedule instance

### PaymentScheduleTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paymentScheduleTemplateDto**: PaymentScheduleTemplateDto

### PaymentScheduleTemplateDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **startDate**: string (date-time)
- **amount**: number
- **calendarCode**: string
- **paymentLabel**: string
- **paymentDayInMonth**: integer (int32)
- **serviceTemplateCode**: string
- **advancePaymentInvoiceTypeCode**: string
- **generateAdvancePaymentInvoice**: boolean
- **doPayment**: boolean
- **advancePaymentInvoiceSubCategoryCode**: string
- **applyAgreement**: boolean
- **amountEl**: string
- **filterEl**: string
- **customFields**: CustomFieldsDto
- **taxClassCode**: string
- **paymentDayInMonthEl**: string
- **scriptInstanceCode**: string
- **useBankingCalendar**: boolean

### PaymentScheduleTemplatesDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **templates**: Array<PaymentScheduleTemplateDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
