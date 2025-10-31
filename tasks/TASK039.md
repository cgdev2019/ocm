# TASK039 — Service Subscription

## Contexte
Le service « Subscription » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Subscription
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/billing/subscription` |  Search for a subscription with a given code.   |     GET_Subscription_search |
| POST | `/api/rest/billing/subscription` |  Create a subscription. It does not activate it   |     POST_Subscription_create |
| PUT | `/api/rest/billing/subscription` |  Updates a subscription. It cannot update a subscription with status=RESILIATED   |     PUT_Subscription_update |
| PATCH | `/api/rest/billing/subscription/{code}/offer` |  patch subscription   |     PATCH_Subscription_{code}_offer |
| PATCH | `/api/rest/billing/subscription/{code}/offer/rollback` |  rollback offer   |     PATCH_Subscription{code}_offer_rollback |
| DELETE | `/api/rest/billing/subscription/{subscriptionId}/delete-si` | API to delete 'INACTIVE' and 'PENDING' serviceInstance from subscription | DELETE_Subscription_serviceInstance |
| POST | `/api/rest/billing/subscription/activate` |  Activate a given Subscription.  |     POST_Subscription_activate |
| PUT | `/api/rest/billing/subscription/activate` |  Activate a given Subscription.   |     PUT_Subscription_activate |
| POST | `/api/rest/billing/subscription/activateForCustomer` |  Activate a given Subscription for a customer.  |     POST_Subscription_activateForCustomer |
| POST | `/api/rest/billing/subscription/activatePatchedSubscription` |  Activate the patched version of a given Subscription.  |     POST_Patched_Subscription_activate |
| POST | `/api/rest/billing/subscription/activateServices` |  Activate services |     POST_Subscription_activateServices |
| POST | `/api/rest/billing/subscription/applyOneShotChargeInstance` |  Apply one shot charge. Subscription should not be in status (RESILIATED OR CANCELLED).   |     POST_Subscription_applyOneShotChargeInstance |
| POST | `/api/rest/billing/subscription/applyProduct` |  Apply a product on a subscription.  |     POST_Subscription_applyProduct |
| POST | `/api/rest/billing/subscription/cancelSubscriptionRenewal/{subscriptionCode}` |  Cancels the renewal term of an active subscription.  |     POST_Subscription_cancelSubscriptionRenewal_{subscriptionCode} |
| POST | `/api/rest/billing/subscription/cancelSubscriptionTermination/{subscriptionCode}` |  Cancels the programed termination of a subscription.  |     POST_Subscription_cancelSubscriptionRenewal_{subscriptionCode}_1 |
| POST | `/api/rest/billing/subscription/createOrUpdate` |  Create or update subscription information ONLY. Does not include access, services nor products   |     POST_Subscription_createOrUpdate |
| POST | `/api/rest/billing/subscription/createOrUpdatePartial` |  Create or update subscription information WITH access, services and products |     POST_Subscription_createOrUpdatePartial |
| GET | `/api/rest/billing/subscription/dueDateDelay` |  Returns the due date delay information.   |     GET_Subscription_dueDateDelay |
| GET | `/api/rest/billing/subscription/findByCustomer` |  List subscriptions matching a given criteria   |     GET_Subscription_findByCustomer |
| POST | `/api/rest/billing/subscription/instantiateServices` |  Instantiate a Service subscription    |     POST_Subscription_instantiateServices |
| GET | `/api/rest/billing/subscription/list` |  List subscriptions matching a given criteria   |     GET_Subscription_list |
| POST | `/api/rest/billing/subscription/list` |  List subscriptions matching a given criteria   |     POST_Subscription_list |
| GET | `/api/rest/billing/subscription/listAll` |  Deprecated in v.4.7.2 Use /list instead.   |     GET_Subscription_listAll |
| GET | `/api/rest/billing/subscription/listGetAll` |  List subscriptions matching a given criteria  |     GET_Subscription_listGetAll |
| GET | `/api/rest/billing/subscription/listOneshotChargeOthers` |  Search for a subscription with a given code.    |     GET_Subscription_listOneshotChargeOthers |
| DELETE | `/api/rest/billing/subscription/oneShotCharge/{subscriptionCode}/{oneshotChargeCode}` |  Search for a subscription with a given code.   |     DELETE_Subscription_oneShotCharge_{subscriptionCode}_{oneshotChargeCode} |
| POST | `/api/rest/billing/subscription/rate` |  Give a rate data for subscription   |     POST_Subscription_rate |
| PUT | `/api/rest/billing/subscription/resume` |  Resume an existing subscription   |     PUT_Subscriptionresume |
| PUT | `/api/rest/billing/subscription/resumeServices` |  Resume an existing services   |     PUT_SubscriptionresumeServices |
| GET | `/api/rest/billing/subscription/serviceInstance` |  Find service instance.   |     GET_SubscriptionserviceInstance |
| GET | `/api/rest/billing/subscription/serviceInstances` |  Returns a list of service instances.   |     GET_SubscriptionserviceInstances |
| POST | `/api/rest/billing/subscription/subscribeAndActivateProducts` |  subscribe And Activate Products  | POST_Subscription_subscribeAndActivateProducts |
| POST | `/api/rest/billing/subscription/subscribeAndActivateServices` |  Create a subscription and activate services in a single transaction.   |     POST_Subscription_subscribeAndActivateServices |
| POST | `/api/rest/billing/subscription/subscribeAndInstantiateProducts` |  Create a subscription and instanciate product in a single transaction.   |     POST_Subscription_subscribeAndInstantiateProducts |
| PUT | `/api/rest/billing/subscription/suspend` |  Suspend an existing subscription   |     PUT_Subscriptionsuspend |
| PUT | `/api/rest/billing/subscription/suspendServices` |  Suspend an existing services   |     PUT_SubscriptionsuspendServices |
| POST | `/api/rest/billing/subscription/terminate` |  Terminate a subscription. If subscription status is RESILIATED, an error is thrown   |     POST_Subscription_terminate |
| PUT | `/api/rest/billing/subscription/terminate` |  Terminate a subscription. If subscription status is RESILIATED, an error is thrown  |     PUT_Subscription_terminate |
| POST | `/api/rest/billing/subscription/terminateServices` |  Terminate a list of services. If a service is already TERMINATED, an error is thrown.   |     POST_Subscription_terminateServices |
| PUT | `/api/rest/billing/subscription/updateServices` |  Update existing services   |     PUT_SubscriptionupdateServices |
| GET | `/api/rest/billing/subscription/version` | Get version of application | index_43 |

#### GET /api/rest/billing/subscription

- Résumé:  Search for a subscription with a given code.  
- OperationId:     GET_Subscription_search
- Description: Search for a subscription with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (QUERY, optionnel) — string
- `mergedCF` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `inheritCF` (QUERY, optionnel) — string
  - Valeurs autorisées: INHERIT_NONE, INHERIT_NO_MERGE, INHERIT_MERGED, ACCUMULATED
  - Contraintes: défaut: "INHERIT_NO_MERGE"
- `validityDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Request processing status
    - application/json: GetSubscriptionResponseDto
    - application/xml: GetSubscriptionResponseDto

#### POST /api/rest/billing/subscription

- Résumé:  Create a subscription. It does not activate it  
- OperationId:     POST_Subscription_create
- Description: Create a subscription. It does not activate it
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionDto
  - application/xml: SubscriptionDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription

- Résumé:  Updates a subscription. It cannot update a subscription with status=RESILIATED  
- OperationId:     PUT_Subscription_update
- Description: Updates a subscription. It cannot update a subscription with status=RESILIATED
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionDto
  - application/xml: SubscriptionDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PATCH /api/rest/billing/subscription/{code}/offer

- Résumé:  patch subscription  
- OperationId:     PATCH_Subscription_{code}_offer
- Description: patch subscription
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: SubscriptionPatchDto
  - application/xml: SubscriptionPatchDto
- Réponses:
  - default: —
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PATCH /api/rest/billing/subscription/{code}/offer/rollback

- Résumé:  rollback offer  
- OperationId:     PATCH_Subscription{code}_offer_rollback
- Description: rollback offer
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: OfferRollbackDto
  - application/xml: OfferRollbackDto
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/billing/subscription/{subscriptionId}/delete-si

- Résumé: API to delete 'INACTIVE' and 'PENDING' serviceInstance from subscription
- OperationId: DELETE_Subscription_serviceInstance
- Description: API to delete 'INACTIVE' and 'PENDING' serviceInstance from subscription
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: ServiceInstanceToDelete
  - application/xml: ServiceInstanceToDelete
- Réponses:
  - default: A subscription
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/activate

- Résumé:  Activate a given Subscription. 
- OperationId:     POST_Subscription_activate
- Description: Activate a given Subscription.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription/activate

- Résumé:  Activate a given Subscription.  
- OperationId:     PUT_Subscription_activate
- Description: Activate a given Subscription.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ActivateSubscriptionRequestDto
  - application/xml: ActivateSubscriptionRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/activateForCustomer

- Résumé:  Activate a given Subscription for a customer. 
- OperationId:     POST_Subscription_activateForCustomer
- Description: Activate a given Subscription for a customer.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionForCustomerRequestDto
  - application/xml: SubscriptionForCustomerRequestDto
- Réponses:
  - default: the raw result holding the Subscription EndAgreementDate in its response.
    - application/json: SubscriptionForCustomerResponseDto
    - application/xml: SubscriptionForCustomerResponseDto

#### POST /api/rest/billing/subscription/activatePatchedSubscription

- Résumé:  Activate the patched version of a given Subscription. 
- OperationId:     POST_Patched_Subscription_activate
- Description: Activate the patched version of a given Subscription.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `updateEffectiveDate` (QUERY, optionnel) — boolean
- `newEffectiveDate` (QUERY, optionnel) — string (date-time)
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/activateServices

- Résumé:  Activate services
- OperationId:     POST_Subscription_activateServices
- Description: Activate services. Subscription should not be in status (RESILIATED OR CANCELLED). This service allows to override the charge instance price before activation. This service is actually a 2 step process: service instantiation then activation. If service.subscriptionDate is not set a service is only instantiated else it's instantiated then activated.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ActivateServicesRequestDto
  - application/xml: ActivateServicesRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/applyOneShotChargeInstance

- Résumé:  Apply one shot charge. Subscription should not be in status (RESILIATED OR CANCELLED).  
- OperationId:     POST_Subscription_applyOneShotChargeInstance
- Description: Apply one shot charge. Subscription should not be in status (RESILIATED OR CANCELLED).
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ApplyOneShotChargeInstanceRequestDto
  - application/xml: ApplyOneShotChargeInstanceRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/applyProduct

- Résumé:  Apply a product on a subscription. 
- OperationId:     POST_Subscription_applyProduct
- Description: Apply a product on a subscription.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ApplyProductRequestDto
  - application/xml: ApplyProductRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/cancelSubscriptionRenewal/{subscriptionCode}

- Résumé:  Cancels the renewal term of an active subscription. 
- OperationId:     POST_Subscription_cancelSubscriptionRenewal_{subscriptionCode}
- Description: Cancels the renewal term of an active subscription.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (PATH, obligatoire) — string
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: status of the request
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/cancelSubscriptionTermination/{subscriptionCode}

- Résumé:  Cancels the programed termination of a subscription. 
- OperationId:     POST_Subscription_cancelSubscriptionRenewal_{subscriptionCode}_1
- Description: Cancels the programed termination of a subscription.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (PATH, obligatoire) — string
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: status of the request
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/createOrUpdate

- Résumé:  Create or update subscription information ONLY. Does not include access, services nor products  
- OperationId:     POST_Subscription_createOrUpdate
- Description: Create or update subscription information ONLY. Does not include access, services nor products
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionDto
  - application/xml: SubscriptionDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/createOrUpdatePartial

- Résumé:  Create or update subscription information WITH access, services and products
- OperationId:     POST_Subscription_createOrUpdatePartial
- Description: Create or update subscription information WITH access, services and products. Terminates subscription if termination date is provided on subscription. Terminates service if termination date is provided on service. Activates inactive service if service subscription date is provided. Instantiates service if no matching service found. Updates service if matching service found. Only those services, access and products passed will be afected.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionDto
  - application/xml: SubscriptionDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/subscription/dueDateDelay

- Résumé:  Returns the due date delay information.  
- OperationId:     GET_Subscription_dueDateDelay
- Description: Returns the due date delay information.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (QUERY, optionnel) — string
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- `invoiceNumber` (QUERY, optionnel) — string
- `invoiceTypeCode` (QUERY, optionnel) — string
- `orderCode` (QUERY, optionnel) — string
- Réponses:
  - default: list of due date delay
    - application/json: GetDueDateDelayResponseDto
    - application/xml: GetDueDateDelayResponseDto

#### GET /api/rest/billing/subscription/findByCustomer

- Résumé:  List subscriptions matching a given criteria  
- OperationId:     GET_Subscription_findByCustomer
- Description: List subscriptions matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerCode` (QUERY, optionnel) — string
- Réponses:
  - default: List of subscriptions
    - application/json: SubscriptionsListResponseDto
    - application/xml: SubscriptionsListResponseDto

#### POST /api/rest/billing/subscription/instantiateServices

- Résumé:  Instantiate a Service subscription   
- OperationId:     POST_Subscription_instantiateServices
- Description: Instantiate a Service subscription
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InstantiateServicesRequestDto
  - application/xml: InstantiateServicesRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/subscription/list

- Résumé:  List subscriptions matching a given criteria  
- OperationId:     GET_Subscription_list
- Description: List subscriptions matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `userAccountCode` (QUERY, optionnel) — string
- `mergedCF` (QUERY, optionnel) — boolean
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "code"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- `inheritCF` (QUERY, optionnel) — string
  - Valeurs autorisées: INHERIT_NONE, INHERIT_NO_MERGE, INHERIT_MERGED, ACCUMULATED
  - Contraintes: défaut: "INHERIT_NO_MERGE"
- Réponses:
  - default: List of subscriptions
    - application/json: SubscriptionsListResponseDto
    - application/xml: SubscriptionsListResponseDto

#### POST /api/rest/billing/subscription/list

- Résumé:  List subscriptions matching a given criteria  
- OperationId:     POST_Subscription_list
- Description: List subscriptions matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of subscriptions
    - application/json: SubscriptionsListResponseDto
    - application/xml: SubscriptionsListResponseDto

#### GET /api/rest/billing/subscription/listAll

- Résumé:  Deprecated in v.4.7.2 Use /list instead.  
- OperationId:     GET_Subscription_listAll
- Description: Deprecated in v.4.7.2 Use /list instead.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `mergedCF` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "code"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Réponses:
  - default: list of all subscriptions.
    - application/json: SubscriptionsListResponseDto
    - application/xml: SubscriptionsListResponseDto

#### GET /api/rest/billing/subscription/listGetAll

- Résumé:  List subscriptions matching a given criteria 
- OperationId:     GET_Subscription_listGetAll
- Description: List subscriptions matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of subscriptions
    - application/json: SubscriptionsListResponseDto
    - application/xml: SubscriptionsListResponseDto

#### GET /api/rest/billing/subscription/listOneshotChargeOthers

- Résumé:  Search for a subscription with a given code.   
- OperationId:     GET_Subscription_listOneshotChargeOthers
- Description: Search for a subscription with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (QUERY, optionnel) — string
- `validityDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: list of one-shot other charges.
    - application/json: GetOneShotChargesResponseDto
    - application/xml: GetOneShotChargesResponseDto

#### DELETE /api/rest/billing/subscription/oneShotCharge/{subscriptionCode}/{oneshotChargeCode}

- Résumé:  Search for a subscription with a given code.  
- OperationId:     DELETE_Subscription_oneShotCharge_{subscriptionCode}_{oneshotChargeCode}
- Description: Search for a subscription with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (PATH, obligatoire) — string
- `oneshotChargeCode` (PATH, obligatoire) — string
- `validityDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: A subscription
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/rate

- Résumé:  Give a rate data for subscription  
- OperationId:     POST_Subscription_rate
- Description: Give a rate data for subscription
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RateSubscriptionRequestDto
  - application/xml: RateSubscriptionRequestDto
- Réponses:
  - default: list of service instances
    - application/json: RateSubscriptionResponseDto
    - application/xml: RateSubscriptionResponseDto

#### PUT /api/rest/billing/subscription/resume

- Résumé:  Resume an existing subscription  
- OperationId:     PUT_Subscriptionresume
- Description: Resume an existing subscription
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OperationSubscriptionRequestDto
  - application/xml: OperationSubscriptionRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription/resumeServices

- Résumé:  Resume an existing services  
- OperationId:     PUT_SubscriptionresumeServices
- Description: Resume an existing services
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OperationServicesRequestDto
  - application/xml: OperationServicesRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/subscription/serviceInstance

- Résumé:  Find service instance.  
- OperationId:     GET_SubscriptionserviceInstance
- Description: Find service instance.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (QUERY, optionnel) — string
- `serviceInstanceId` (QUERY, optionnel) — integer (int64)
- `serviceInstanceCode` (QUERY, optionnel) — string
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Service instance
    - application/json: GetServiceInstanceResponseDto
    - application/xml: GetServiceInstanceResponseDto

#### GET /api/rest/billing/subscription/serviceInstances

- Résumé:  Returns a list of service instances.  
- OperationId:     GET_SubscriptionserviceInstances
- Description: Returns a list of service instances.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (QUERY, optionnel) — string
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- `serviceInstanceCode` (QUERY, optionnel) — string
- Réponses:
  - default: list of service instances
    - application/json: GetListServiceInstanceResponseDto
    - application/xml: GetListServiceInstanceResponseDto

#### POST /api/rest/billing/subscription/subscribeAndActivateProducts

- Résumé:  subscribe And Activate Products 
- OperationId: POST_Subscription_subscribeAndActivateProducts
- Description: Create a subscribe And Activate Products
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionAndProductsToInstantiateDto
  - application/xml: SubscriptionAndProductsToInstantiateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/subscribeAndActivateServices

- Résumé:  Create a subscription and activate services in a single transaction.  
- OperationId:     POST_Subscription_subscribeAndActivateServices
- Description: Create a subscription and activate services in a single transaction.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionAndServicesToActivateRequestDto
  - application/xml: SubscriptionAndServicesToActivateRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/subscribeAndInstantiateProducts

- Résumé:  Create a subscription and instanciate product in a single transaction.  
- OperationId:     POST_Subscription_subscribeAndInstantiateProducts
- Description: Create a subscription and instanciate product in a single transaction.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SubscriptionAndProductsToInstantiateDto
  - application/xml: SubscriptionAndProductsToInstantiateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription/suspend

- Résumé:  Suspend an existing subscription  
- OperationId:     PUT_Subscriptionsuspend
- Description: Suspend an existing subscription
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OperationSubscriptionRequestDto
  - application/xml: OperationSubscriptionRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription/suspendServices

- Résumé:  Suspend an existing services  
- OperationId:     PUT_SubscriptionsuspendServices
- Description: Suspend an existing services
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OperationServicesRequestDto
  - application/xml: OperationServicesRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/terminate

- Résumé:  Terminate a subscription. If subscription status is RESILIATED, an error is thrown  
- OperationId:     POST_Subscription_terminate
- Description: Terminate a subscription. If subscription status is RESILIATED, an error is thrown
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TerminateSubscriptionRequestDto
  - application/xml: TerminateSubscriptionRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription/terminate

- Résumé:  Terminate a subscription. If subscription status is RESILIATED, an error is thrown 
- OperationId:     PUT_Subscription_terminate
- Description: Terminate a subscription. If subscription status is RESILIATED, an error is thrown
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TerminateSubscriptionRequestDto
  - application/xml: TerminateSubscriptionRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/subscription/terminateServices

- Résumé:  Terminate a list of services. If a service is already TERMINATED, an error is thrown.  
- OperationId:     POST_Subscription_terminateServices
- Description: Terminate a list of services. If a service is already TERMINATED, an error is thrown.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TerminateSubscriptionServicesRequestDto
  - application/xml: TerminateSubscriptionServicesRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/subscription/updateServices

- Résumé:  Update existing services  
- OperationId:     PUT_SubscriptionupdateServices
- Description: Update existing services
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UpdateServicesRequestDto
  - application/xml: UpdateServicesRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/subscription/version

- Résumé: Get version of application
- OperationId: index_43
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetSubscriptionResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **subscription**: SubscriptionDto

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

### SubscriptionDto
Type: object
Champs obligatoires: billingCycle, code, offerTemplate, seller, subscriptionDate, userAccount, versionNumber
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **versionNumber**: integer (int32)
- **nextVersion**: integer (int64)
- **previousVersion**: integer (int64)
- **userAccount**: string
- **offerTemplate**: string
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **endAgreementDate**: string (date-time)
- **status**: string (Valeurs: CREATED, ACTIVE, CANCELED, RESILIATED, CLOSED, SUSPENDED, PENDING)
- **statusDate**: string (date-time)
- **validityDate**: string (date-time)
- **customFields**: CustomFieldsDto
- **accesses**: AccessesDto
- **services**: ServiceInstancesDto
- **products**: ProductsDto
- **productInstances**: Array<ProductInstanceDto>
- **productsToInstantiate**: Array<ProductToInstantiateDto>
- **terminationReason**: string
- **orderNumber**: string
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **minimumInvoiceSubCategory**: string
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **renewed**: boolean
- **renewalNotifiedDate**: string (date-time)
- **renewalRule**: SubscriptionRenewalDto
- **billingCycle**: string
- **seller**: string — Seller code
- **autoEndOfEngagement**: boolean
- **ratingGroup**: string
- **electronicBilling**: boolean
- **email**: string
- **mailingType**: string
- **emailTemplate**: string
- **ccedEmails**: string
- **discountPlansForInstantiation**: Array<DiscountPlanDto>
- **discountPlansForTermination**: Array<string>
- **discountPlanInstances**: Array<DiscountPlanInstanceDto>
- **paymentMethod**: PaymentMethodDto
- **customerService**: string
- **salesPersonName**: string — The sales person name
- **discountPlanInstancesToRemove**: Array<string>
- **contractCode**: string — code of existing contract

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

### AccessesDto
Type: object
Propriétés:
- **access**: Array<AccessDto>

### AccessDto
Type: object
Champs obligatoires: subscription
Propriétés:
- **code**: string — code of the access
- **subscription**: string — code of the subscription
- **subscriptionValidityDate**: string (date-time) — code of existing
- **startDate**: string (date-time) — start date of the access
- **endDate**: string (date-time) — end date of the access
- **customFields**: CustomFieldsDto
- **disabled**: boolean
- **subscriptionValidity**: string (date-time)

### ServiceInstancesDto
Type: object
Propriétés:
- **serviceInstance**: Array<ServiceInstanceDto>

### ServiceInstanceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **terminationDate**: string (date-time)
- **priceVersionDateSetting**: string (Valeurs: QUOTE, DELIVERY, RENEWAL, EVENT)
- **priceVersionDate**: string (date-time)
- **quantity**: number
- **terminationReason**: string
- **endAgreementDate**: string (date-time)
- **customFields**: CustomFieldsDto
- **attributeInstances**: Array<AttributeInstanceDto>
- **orderNumber**: string
- **rateUntilDate**: string (date-time)
- **amountPS**: number
- **calendarPSCode**: string
- **paymentDayInMonthPS**: integer (int32)
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **autoEndOfEngagement**: boolean
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **serviceRenewal**: SubscriptionRenewalDto
- **deliveryDate**: string (date-time)

### AttributeInstanceDto
Type: object
Propriétés:
- **attributeCode**: string
- **parentAttributeValueId**: integer (int64)
- **assignedAttributeValueIds**: Array<integer (int64)>
- **stringValue**: string
- **dateValue**: string (date-time)
- **doubleValue**: number (double)
- **customFieldDto**: CustomFieldsDto
- **booleanValue**: boolean

### SubscriptionRenewalDto
Type: object
Propriétés:
- **initialTermType**: string — intial term type (Valeurs: RECURRING, CALENDAR, FIXED)
- **renewalTermType**: string — renewal term type (Valeurs: RECURRING, CALENDAR)
- **initialyActiveFor**: integer (int32) — The initial period for which the subscription will be active
- **initialyActiveForUnit**: string — The initial period for which the subscription will be active (Valeurs: MONTH, DAY)
- **calendarInitialyActiveFor**: CalendarDto
- **autoRenew**: boolean — Should subscription be renewed automatically
- **daysNotifyRenewal**: integer (int32) — Number of days before the end of term to trigger notification event
- **endOfTermAction**: string — Whether the Subscription should be suspended or terminated if not renewed (Valeurs: SUSPEND, TERMINATE)
- **terminationReasonCode**: string — terminating subscription if endOfTermAction is to terminate
- **renewFor**: integer (int32) — The period to renew subscription for
- **calendarRenewFor**: CalendarDto
- **renewForUnit**: string — he period to renew subscription for (Valeurs: MONTH, DAY)
- **extendAgreementPeriodToSubscribedTillDate**: boolean — Whether end of agreement date should be matched to the active till date

### CalendarDto
calendar associated to subscription renewal
Type: object
Champs obligatoires: calendarType, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **calendarType**: string — calendar type (Valeurs: YEARLY, DAILY, PERIOD, INTERVAL, INTERSECT, UNION, APPEND, BANKING, FIXED)
- **fixedDates**: Array<string> — list of fixed date
- **days**: Array<DayInYearDto> — list of the day
- **hours**: Array<HourInDayDto> — list of the hour
- **periodLength**: integer (int32) — Period length
- **periodUnit**: string — Period measurement unit (Valeurs: MONTH, DAY_OF_MONTH, HOUR_OF_DAY, MINUTE, SECOND)
- **nbPeriods**: integer (int32) — Number of periods
- **joinCalendar1Code**: string — Code of the first calendar to intersect/union
- **joinCalendar2Code**: string — Code of the second calendar to intersect/union
- **intervalType**: string — Interval type (Valeurs: DAY, HOUR, WDAY)
- **intervals**: Array<CalendarDateIntervalDto> — List of intervals
- **weekendBegin**: integer (int32) — The weekend begin
- **weekendEnd**: integer (int32)
- **endDate**: string (date-time) — The end dat
- **startDate**: string (date-time) — The start date
- **initDateEL**: string — Calendar initialization date - expression to determine a value for calendar initialization date (Contraintes: longueur min: 0 · longueur max: 2000)
- **holidays**: Array<CalendarHolidayDto> — list of the days of holiday
- **languageDescriptions**: Array<LanguageDescriptionDto> — lsit of language description

### DayInYearDto
list of the day
Type: object
Propriétés:
- **day**: integer (int32) — day in the year
- **month**: string — month of the year (Valeurs: JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER)

### HourInDayDto
list of the hour
Type: object
Propriétés:
- **hour**: integer (int32) — hour
- **min**: integer (int32) — minute of the hours

### CalendarDateIntervalDto
List of intervals
Type: object
Propriétés:
- **intervalBegin**: integer (int32) — The interval begin
- **intervalEnd**: integer (int32) — The interval end

### CalendarHolidayDto
list of the days of holiday
Type: object
Propriétés:
- **holidayBegin**: integer (int32) — The holiday begin
- **holidayEnd**: integer (int32) — The holiday end

### ProductsDto
Type: object
Propriétés:
- **products**: Array<ProductDto>

### ProductDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **chargeDate**: string (date-time)
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string
- **criteria2**: string
- **criteria3**: string
- **customFields**: CustomFieldsDto

### ProductInstanceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **applicationDate**: string (date-time)
- **quantity**: number
- **orderNumber**: string
- **customFields**: CustomFieldsDto

### ProductToInstantiateDto
Type: object
Champs obligatoires: quantity
Propriétés:
- **productCode**: string
- **quantity**: number
- **deliveryDate**: string (date-time)
- **attributeInstances**: Array<OrderAttributeDto>
- **customFields**: CustomFieldsDto

### OrderAttributeDto
Type: object
Propriétés:
- **attributeCode**: string
- **parentAttributeValueId**: integer (int64)
- **assignedAttributeValueIds**: Array<integer (int64)>
- **stringValue**: string — The string value
- **dateValue**: string (date-time) — The date value
- **doubleValue**: number (double) — The double value
- **customFieldDto**: CustomFieldsDto
- **booleanValue**: boolean — The boolean value
- **commercialOrderId**: integer (int64) — The commercial order id
- **orderAttributeCode**: string — The order attribute code
- **attributeType**: string — The order attribute type (Valeurs: INFO, LIST_TEXT, LIST_MULTIPLE_TEXT, LIST_NUMERIC, LIST_MULTIPLE_NUMERIC, TEXT, NUMERIC, INTEGER, DATE, CALENDAR, EMAIL, PHONE, TOTAL, COUNT, EXPRESSION_LANGUAGE, BOOLEAN)
- **orderAttributeId**: integer (int64) — The order attribute id
- **orderLotCode**: string — The order lot code
- **orderProductId**: integer (int64) — The order product id
- **orderOfferId**: integer (int64) — The order offer id
- **accessPoint**: string — The access point

### DiscountPlanDto
List of discount plans. Use in instantiating a discount plan instance
Type: object
Champs obligatoires: code, discountPlanType
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **startDate**: string (date-time) — Effective start date
- **endDate**: string (date-time) — Effective end date
- **defaultDuration**: integer (int32) — Length of effectivity.<br/> If start date is not null and end date is null, we use the defaultDuration from the discount plan.<br />If start date is null, and defaultDuration is not null, defaultDuration is ignored.
- **durationUnit**: string — Unit of duration (Valeurs: MONTH, DAY)
- **customFields**: CustomFieldsDto
- **discountPlanItems**: Array<DiscountPlanItemDto> — list of discount plan item
- **expressionEl**: string — expression language
- **discountPlanType**: string — Type of the discount plan. Defines on which entity the discount plan can be applied (Valeurs: QUOTE, OFFER, PRODUCT, INVOICE, INVOICE_LINE, PROMO_CODE)
- **status**: string — Status of the discount plan. The default value is DRAFT (Valeurs: ACTIVE, INACTIVE, DRAFT, IN_USE, EXPIRED)
- **statusDate**: string (date-time) — Datetime of last status update, Automatically filed at creation and status update
- **initialQuantity**: integer (int64) — The initial available quantity for the discount plan, For types QUOTE, INVOICE, INVOICE_LINE, the value is forced to 0
- **usedQuantity**: integer (int64) — How many times the discount plan has been used.<br/> If intialQuantity is not 0, then reaching the initialQuantity expires the discount plan.<br />The value is incremented every time the discountPlan is instantiated on any Billing Account, Subscription, or ProductInstance
- **applicationLimit**: integer (int64) — How many times the discount can be applied on a given entity (BillingAccount, Subscription, Product Instance).<br />Default value is 0 = infinite.<br/>Useful for one-time discounts.
- **applicationFilterEL**: string — A boolean EL that must evaluate to true to allow the discount plan to be applied<br/>It will have access to the variables.<br />entity: the entity on which we want to apply the discount
- **incompatibleDiscountPlans**: Array<DiscountPlanDto> — A list of discounts plans that cannot be active at the same time on an entity instance.
- **applicableEntities**: Array<ApplicableEntityDto> — A list of entities (CustomerCategory, Offer, Product, Article).
- **applicableOnOverriddenPrice**: boolean
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **applicableOnDiscountedPrice**: boolean — determines whether the discount plan is applicable on the gross or discounted amount
- **applicableOnContractPrice**: boolean — If false then discount plan will be ignored if event price comes from a contract

### DiscountPlanItemDto
list of discount plan item
Type: object
Champs obligatoires: code, discountPlanCode, discountValue, discountValueEL
Propriétés:
- **code**: string — The code
- **discountPlanCode**: string — Discount plan code
- **invoiceCategoryCode**: string — Invoice category code
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **accountingCode**: string — Accounting code
- **expressionEl**: string — Expression to determine if discount applies
- **disabled**: boolean — Is entity disabled. Value is ignored in Update action - use enable/disable API instead
- **discountPlanItemType**: string — Type of discount, whether absolute or percentage (Valeurs: PERCENTAGE, FIXED) (Contraintes: défaut: "PERCENTAGE")
- **discountValue**: number — The absolute or percentage discount amount
- **discountValueEL**: string — The absolute or percentage discount amount EL
- **targetAccountingArticleCodes**: Array<string> — The target accounting article codes
- **pricePlanMatrixCode**: string — Price plan matrix code
- **customFields**: CustomFieldsDto
- **allowToNegate**: boolean — <ul><li>If true, then allows to negate the amount of affected invoice lines</li><li>If fase, then amount for the discount line produce by the discount plan item cannot exceed the amount of discounted lines</li></ul> (Contraintes: défaut: false)
- **description**: string — description of discount plan item
- **priority**: integer (int64) — The lower number, the higher the priority is
- **accountingArticleCode**: string — accounting article code
- **applyByArticle**: boolean — Apply by article
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **lastDiscount**: boolean — last discount

### ApplicableEntityDto
A list of entities (CustomerCategory, Offer, Product, Article).
Type: object
Propriétés:
- **code**: string — code of the entity applicable
- **entityClass**: string — name of the class applicable

### DiscountPlanInstanceDto
Use to return the active discount plans for this entity
Type: object
Propriétés:
- **discountPlan**: string — The discount plan code
- **billingAccount**: string — The billingAccount code
- **subscription**: string — The subscription code
- **startDate**: string (date-time) — Effectivity start date
- **endDate**: string (date-time) — Effectivity end date
- **customFields**: CustomFieldsDto
- **status**: string — Status of this specific discount plan instance (Valeurs: ACTIVE, APPLIED, IN_USE, EXPIRED)
- **statusDate**: string (date-time) — Datetime of last status change
- **applicationCount**: integer (int64) — How many times the discount has been used

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

### SubscriptionPatchDto
Type: object
Champs obligatoires: terminateOldSubscription
Propriétés:
- **offerTemplate**: string
- **newSubscriptionCode**: string
- **terminateOldSubscription**: boolean
- **terminationReason**: string
- **effectiveDate**: string (date-time)
- **servicesToInstantiate**: ServicesToInstantiateDto
- **servicesToActivate**: ServicesToActivateDto
- **updateSubscriptionDate**: boolean
- **reengageCustomer**: boolean
- **resetRenewalTerms**: boolean
- **subscriptionCustomFieldsToCopy**: Array<string>

### ServicesToInstantiateDto
Type: object
Champs obligatoires: service
Propriétés:
- **service**: Array<ServiceToInstantiateDto>

### ServiceToInstantiateDto
Type: object
Champs obligatoires: quantity
Propriétés:
- **code**: string
- **overrideCode**: string
- **description**: string
- **quantity**: number
- **subscriptionDate**: string (date-time)
- **chargeInstanceOverrides**: ChargeInstanceOverridesDto
- **customFields**: CustomFieldsDto
- **attributeInstanceDtoList**: Array<AttributeInstanceDto>
- **rateUntilDate**: string (date-time)
- **amountPS**: number
- **calendarPSCode**: string
- **serviceCharge**: ServiceCharge

### ChargeInstanceOverridesDto
Type: object
Propriétés:
- **chargeInstanceOverride**: Array<ChargeInstanceOverrideDto>

### ChargeInstanceOverrideDto
Type: object
Propriétés:
- **chargeInstanceCode**: string
- **amountWithoutTax**: number
- **amountWithTax**: number
- **description**: string

### ServiceCharge
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **serviceRecurringCharges**: Array<ServiceChargeTemplateRecurring>
- **serviceSubscriptionCharges**: Array<ServiceChargeTemplateSubscription>
- **serviceTerminationCharges**: Array<ServiceChargeTemplateTermination>
- **serviceUsageCharges**: Array<ServiceChargeTemplateUsage>
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Auditable
Type: object
Propriétés:
- **created**: string (date-time)
- **updated**: string (date-time)
- **creator**: string
- **updater**: string
- **lastUser**: string
- **lastModified**: string (date-time)

### AuditableFieldHistory
Type: object
Propriétés:
- **fieldName**: string
- **previousState**: object
- **currentState**: object
- **auditType**: string (Valeurs: STATUS, RENEWAL, OTHER)
- **historable**: boolean
- **notfiable**: boolean
- **historized**: boolean
- **notified**: boolean

### CustomFieldValues
Type: object
Propriétés:
- **valuesByCode**: object
- **encrypted**: boolean
- **newVersionedCFValuePeriods**: object
- **values**: object

### CustomFieldValue
Type: object
Propriétés:
- **from**: string (date-time)
- **to**: string (date-time)
- **strictMatch**: boolean
- **fromMatch**: string (date-time)
- **toMatch**: string (date-time)
- **valid**: boolean
- **empty**: boolean
- **priority**: integer (int32)
- **valueEmptyForGui**: boolean
- **newPeriod**: boolean
- **valueEmpty**: boolean
- **allEntities**: Array<EntityReferenceWrapper>
- **excessiveInSize**: boolean
- **listValue**: Array<object>
- **mapValue**: object
- **getkeyValueMap**: object
- **value**: object
- **string**: string
- **date**: string (date-time)
- **long**: integer (int64)
- **double**: number (double)
- **boolean**: boolean
- **entity**: EntityReferenceWrapper
- **url**: UrlReferenceWrapper
- **listString**: Array<string>
- **listDate**: Array<string (date-time)>
- **listLong**: Array<integer (int64)>
- **listDouble**: Array<number (double)>
- **listBoolean**: Array<boolean>
- **listEntity**: Array<EntityReferenceWrapper>
- **mapString**: object
- **mapDate**: object
- **mapLong**: object
- **mapDouble**: object
- **mapBoolean**: object
- **mapEntity**: object
- **source**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **mapCfValues**: object

### EntityReferenceWrapper
Type: object
Propriétés:
- **classname**: string
- **classnameCode**: string
- **code**: string
- **id**: integer (int64)
- **referenceDescription**: string
- **referenceCode**: string
- **empty**: boolean

### UrlReferenceWrapper
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

### DatePeriod
Type: object
Propriétés:
- **from**: string (date-time)
- **to**: string (date-time)
- **strictMatch**: boolean
- **fromMatch**: string (date-time)
- **toMatch**: string (date-time)
- **valid**: boolean
- **empty**: boolean

### ServiceChargeTemplateRecurring
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **serviceTemplate**: ServiceTemplate
- **chargeTemplate**: RecurringChargeTemplate
- **counterTemplate**: CounterTemplate
- **walletTemplates**: Array<WalletTemplate>
- **accumulatorCounterTemplates**: Array<CounterTemplate>
- **transient**: boolean

### ServiceTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **serviceSubscriptionCharges**: Array<ServiceChargeTemplateSubscription>
- **serviceTerminationCharges**: Array<ServiceChargeTemplateTermination>
- **serviceUsageCharges**: Array<ServiceChargeTemplateUsage>
- **invoicingCalendar**: Calendar
- **businessServiceModel**: BusinessServiceModel
- **longDescription**: string
- **imagePath**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumInvoiceSubCategory**: InvoiceSubCategory
- **minimumChargeTemplate**: OneShotChargeTemplate
- **serviceRenewal**: SubscriptionRenewal
- **selected**: boolean
- **autoEndOfEngagement**: boolean
- **instantiatedFromBSM**: boolean
- **descriptionOverride**: string
- **descriptionI18n**: object
- **tags**: Array<Tag>
- **attributes**: Array<Attribute>
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ServiceChargeTemplateSubscription
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **serviceTemplate**: ServiceTemplate
- **chargeTemplate**: OneShotChargeTemplate
- **counterTemplate**: CounterTemplate
- **walletTemplates**: Array<WalletTemplate>
- **accumulatorCounterTemplates**: Array<CounterTemplate>
- **transient**: boolean

### OneShotChargeTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **productCharges**: Array<ProductChargeTemplateMapping>
- **type**: string (Valeurs: CREDIT, DEBIT)
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **amountEditable**: boolean
- **invoiceSubCategory**: InvoiceSubCategory
- **edrTemplates**: Array<TriggeredEDRTemplate>
- **inputUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **inputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **outputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **unitMultiplicator**: number
- **unitNbDecimal**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRule**: RevenueRecognitionRule
- **descriptionI18n**: object
- **filterExpression**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClass**: TaxClass
- **taxClassEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **ratingScript**: ScriptInstance
- **dropZeroWo**: boolean
- **sortIndexEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **attributes**: Array<Attribute>
- **roundingValuesComputed**: boolean
- **roundingUnityNbDecimal**: integer (int32)
- **roundingEdrNbDecimal**: integer (int32)
- **status**: string (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **internalNote**: string
- **quantityAttribute**: Attribute
- **applyContractOverRatingScript**: boolean
- **oneShotChargeTemplateType**: string (Valeurs: oneShotChargeTemplateTypeEnum.subscription, oneShotChargeTemplateTypeEnum.termination, oneShotChargeTemplateTypeEnum.other)
- **immediateInvoicing**: boolean
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ProductChargeTemplateMapping
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **product**: Product
- **chargeTemplate**: ChargeTemplate
- **counterTemplate**: CounterTemplate
- **walletTemplates**: Array<WalletTemplate>
- **accumulatorCounterTemplates**: Array<CounterTemplate>
- **transient**: boolean

### Product
Type: object
Propriétés:
- **id**: string
- **href**: string
- **place**: Place
- **productCharacteristic**: Array<ProductCharacteristic>
- **relatedParty**: Array<RelatedParty>
- **productRelationship**: Array<ProductRelationship>

### Place
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string
- **address**: AddressDto

### AddressDto
Type: object
Propriétés:
- **address1**: string — First address
- **address2**: string — Second address
- **address3**: string — Third address
- **address4**: string — forth address
- **address5**: string — fifth address
- **zipCode**: string — The zip code
- **city**: string — The city
- **country**: string — The country
- **state**: string — The state

### ProductCharacteristic
Type: object
Propriétés:
- **name**: string
- **value**: string

### RelatedParty
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string
- **validFor**: TimeRange
- **role**: string

### TimeRange
Type: object
Propriétés:
- **startDateTime**: string (date-time)
- **endDateTime**: string (date-time)

### ProductRelationship
Type: object
Propriétés:
- **type**: string
- **product**: Product

### ChargeTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **type**: string (Valeurs: CREDIT, DEBIT)
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **amountEditable**: boolean
- **invoiceSubCategory**: InvoiceSubCategory
- **edrTemplates**: Array<TriggeredEDRTemplate>
- **inputUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **inputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **outputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **unitMultiplicator**: number
- **unitNbDecimal**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRule**: RevenueRecognitionRule
- **descriptionI18n**: object
- **filterExpression**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClass**: TaxClass
- **taxClassEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **ratingScript**: ScriptInstance
- **dropZeroWo**: boolean
- **sortIndexEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **attributes**: Array<Attribute>
- **roundingValuesComputed**: boolean
- **roundingUnityNbDecimal**: integer (int32)
- **roundingEdrNbDecimal**: integer (int32)
- **status**: string (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **internalNote**: string
- **quantityAttribute**: Attribute
- **applyContractOverRatingScript**: boolean
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoiceSubCategory
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **discount**: number
- **invoiceCategory**: InvoiceCategory
- **descriptionI18n**: object
- **accountingCode**: AccountingCode
- **occTemplate**: OCCTemplate
- **occTemplateNegative**: OCCTemplate
- **sortIndex**: integer (int32)
- **descriptionI18nNullSafe**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoiceCategory
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **invoiceSubCategories**: Array<InvoiceSubCategory>
- **sortIndex**: integer (int32)
- **descriptionI18n**: object
- **occTemplate**: OCCTemplate
- **occTemplateNegative**: OCCTemplate
- **descriptionI18nNullSafe**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OCCTemplate
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **accountingCode**: AccountingCode
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **occCategory**: string (Valeurs: DEBIT, CREDIT)
- **journal**: Journal
- **accountingScheme**: AccountingScheme
- **contraAccountingCode**: AccountingCode
- **contraAccountingCode2**: AccountingCode
- **manualCreationEnabled**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AccountingCode
Type: object
Champs obligatoires: chartOfAccountTypeEnum, chartOfAccountViewTypeEnum, code, disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **parentAccountingCode**: AccountingCode
- **chartOfAccountTypeEnum**: string (Valeurs: ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSE)
- **reportingAccount**: string
- **chartOfAccountViewTypeEnum**: string (Valeurs: VIEW, REGULAR)
- **notes**: string
- **migrated**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### BusinessEntity
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Journal
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **occTemplates**: Array<OCCTemplate>
- **accountOperations**: Array<AccountOperation>
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AccountOperation
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **matchingAmounts**: Array<MatchingAmount>
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **paymentHistories**: Array<PaymentHistory>
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AccountingEntry
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **accountOperations**: Array<AccountOperation>
- **originEntry**: AccountingEntry
- **tax**: Tax
- **invoiceCategory**: InvoiceCategory
- **accountingCode**: AccountingCode
- **amount**: number
- **eventDate**: string (date-time)
- **eventType**: string
- **exportDate**: string (date-time)
- **extraParam1**: string
- **extraParam2**: string
- **extraParam3**: string
- **isWritten**: boolean
- **transient**: boolean

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

### CustomerAccount
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalRef1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **externalRef2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **name**: Name
- **address**: Address
- **defaultLevel**: boolean
- **providerContact**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **primaryContact**: ProviderContact
- **businessAccountModel**: BusinessAccountModel
- **jobTitle**: string
- **contactInformation**: ContactInformation
- **vatNo**: string
- **registrationNo**: string
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumChargeTemplate**: OneShotChargeTemplate
- **minimumArticle**: AccountingArticle
- **isCompany**: boolean
- **legalEntityType**: Title
- **addressbook**: AddressBook
- **tradingCurrency**: TradingCurrency
- **status**: string (Valeurs: ACTIVE, CLOSE)
- **creditCategory**: CreditCategory
- **billingAccounts**: Array<BillingAccount>
- **accountOperations**: Array<AccountOperation>
- **dunningDocuments**: Array<DunningDocument>
- **actionDunnings**: Array<ActionDunning>
- **dateStatus**: string (date-time)
- **dateDunningLevel**: string (date-time)
- **customer**: Customer
- **dunningLevel**: string (Valeurs: R0, R1, R2, R3, R4, R5, R6)
- **password**: string (Contraintes: longueur min: 0 · longueur max: 10)
- **dueDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **tradingLanguage**: TradingLanguage
- **paymentMethods**: Array<PaymentMethod>
- **excludedFromPayment**: boolean
- **auditedMethodPayments**: object
- **counters**: object
- **minimumTargetAccount**: BillingAccount
- **invoicingThreshold**: number
- **checkThreshold**: string (Valeurs: BEFORE_DISCOUNT, AFTER_DISCOUNT, POSITIVE_RT, POSITIVE_IL)
- **thresholdPerEntity**: boolean
- **contracts**: Array<Contract>
- **dueBalance**: string
- **generalClientAccount**: AccountingCode
- **paymentPlans**: Array<PaymentPlan>
- **preferredPaymentMethodType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **paypalPaymentMethods**: Array<PaypalPaymentMethod>
- **wirePaymentMethods**: Array<WirePaymentMethod>
- **checkPaymentMethods**: Array<CheckPaymentMethod>
- **stripePaymentMethods**: Array<StripePaymentMethod>
- **noMoreValidCard**: boolean
- **ddpaymentMethods**: Array<DDPaymentMethod>
- **preferredPaymentMethod**: PaymentMethod
- **seller**: Seller
- **parentCFEntities**: Array<ICustomFieldEntity>
- **parentEntity**: BusinessEntity
- **accountType**: string
- **contactInformationNullSafe**: ContactInformation
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Name
Type: object
Propriétés:
- **title**: Title
- **firstName**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **lastName**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **fullName**: string

### Title
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **isCompany**: boolean
- **descriptionI18n**: object
- **descriptionI18nNullSafe**: object
- **descriptionNotNull**: string
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Address
Type: object
Propriétés:
- **address1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **address2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **address3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **address4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **address5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **zipCode**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **city**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **country**: Country
- **state**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **countryBundle**: string

### Country
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **countryCode**: string (Contraintes: longueur min: 0 · longueur max: 10)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **currency**: Currency
- **language**: Language
- **descriptionI18n**: object
- **code**: string
- **descriptionI18nNullSafe**: object
- **transient**: boolean

### Currency
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **currencyCode**: string (Contraintes: longueur min: 0 · longueur max: 3)
- **descriptionEn**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **symbol**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **systemCurrency**: boolean
- **descriptionI18n**: object
- **description**: string
- **transient**: boolean

### Language
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **languageCode**: string (Contraintes: longueur min: 0 · longueur max: 3)
- **descriptionEn**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **descriptionI18n**: object
- **description**: string
- **transient**: boolean

### ProviderContact
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **firstName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **lastName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **email**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **phone**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **mobile**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **fax**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **genericMail**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **address**: Address
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### BusinessAccountModel
Type: object
Champs obligatoires: code, disabled, hierarchyType, license
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **moduleItems**: Array<MeveoModuleItem>
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **installed**: boolean
- **moduleSource**: string
- **script**: ScriptInstance
- **hierarchyType**: string (Valeurs: S, S_C, C, S_CA, C_CA, CA, S_BA, C_BA, CA_BA, BA, S_UA, C_UA, CA_UA, BA_UA, UA)
- **downloaded**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### MeveoModuleItem
Type: object
Champs obligatoires: itemClass, itemCode
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **meveoModule**: MeveoModule
- **appliesTo**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **itemClass**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **itemCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **validity**: DatePeriod
- **itemEntity**: BusinessEntity
- **itemClassSimpleName**: string
- **transient**: boolean

### MeveoModule
Type: object
Champs obligatoires: code, disabled, license
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **installed**: boolean
- **moduleSource**: string
- **script**: ScriptInstance
- **downloaded**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ScriptInstance
Type: object
Champs obligatoires: code, disabled, error, reuse
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **script**: string
- **sourceTypeEnum**: string (Valeurs: JAVA, JAVA_CLASS)
- **scriptErrors**: Array<ScriptInstanceError>
- **error**: boolean
- **reuse**: boolean
- **scriptInstanceCategory**: ScriptInstanceCategory
- **executionRoles**: Array<string>
- **sourcingRoles**: Array<string>
- **descriptionI18n**: object
- **scriptParameters**: Array<ScriptParameter>
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ScriptInstanceError
Type: object
Propriétés:
- **message**: string
- **lineNumber**: integer (int64)
- **columnNumber**: integer (int64)
- **sourceFile**: string

### ScriptInstanceCategory
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **descriptionI18n**: object
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ScriptParameter
Type: object
Champs obligatoires: className, scriptInstance
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **code**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **scriptInstance**: ScriptInstance
- **descriptionI18n**: object
- **className**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **defaultValue**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **mandatory**: boolean
- **allowedValues**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **valuesSeparator**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **collection**: boolean
- **transient**: boolean

### ContactInformation
Type: object
Propriétés:
- **email**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **phone**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **mobile**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **fax**: string (Contraintes: longueur min: 0 · longueur max: 50)

### AccountingArticle
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **taxClass**: TaxClass
- **invoiceSubCategory**: InvoiceSubCategory
- **articleFamily**: ArticleFamily
- **accountingCode**: AccountingCode
- **invoiceType**: InvoiceType
- **invoiceTypeEl**: string
- **analyticCode1**: string
- **analyticCode2**: string
- **analyticCode3**: string
- **unitPrice**: number
- **descriptionI18n**: object
- **accountingCodeEl**: string
- **columnCriteriaEL**: string
- **accountingCodeMappings**: Array<AccountingCodeMapping>
- **ignoreAggregation**: boolean
- **descriptionI18nNotNull**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TaxClass
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **descriptionI18n**: object
- **descriptionI18nNullSafe**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ICustomFieldEntity
Type: object
Propriétés:
- **uuid**: string
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues

### ArticleFamily
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **accountingCode**: AccountingCode
- **articleFamily**: ArticleFamily
- **descriptionI18n**: object
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoiceType
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **occTemplate**: OCCTemplate
- **occTemplateNegative**: OCCTemplate
- **customInvoiceXmlScriptInstance**: ScriptInstance
- **appliesTo**: Array<InvoiceType>
- **invoiceSequence**: InvoiceSequence
- **prefixEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **sellerSequence**: Array<InvoiceTypeSellerSequence>
- **matchingAuto**: boolean
- **invoiceAccountable**: boolean
- **useSelfSequence**: boolean
- **pdfFilenameEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **xmlFilenameEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **billingTemplateNameEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxScript**: ScriptInstance
- **occTemplateCodeEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **occTemplateNegativeCodeEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **emailTemplate**: EmailTemplate
- **mailingType**: string (Valeurs: MANUAL, AUTO, BATCH)
- **excludeFromAgedTrialBalance**: boolean
- **invoiceValidationScript**: ScriptInstance
- **invoiceValidationRules**: Array<InvoiceValidationRule>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoiceSequence
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **sequenceType**: string (Valeurs: RUM, CUSTOMER_NO, SEQUENCE, NUMERIC, ALPHA_UP, UUID, REGEXP)
- **sequenceSize**: integer (int32)
- **currentNumber**: integer (int64)
- **sequencePattern**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceTypes**: Array<InvoiceType>
- **invoiceTypeSellerSequences**: Array<InvoiceTypeSellerSequence>
- **previousInvoiceNb**: integer (int64)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoiceTypeSellerSequence
Type: object
Champs obligatoires: invoiceType, seller
Propriétés:
- **id**: object
- **invoiceType**: InvoiceType
- **seller**: Seller
- **invoiceSequence**: InvoiceSequence
- **prefixEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **transient**: boolean

### Seller
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalRef1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **externalRef2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **name**: Name
- **address**: Address
- **defaultLevel**: boolean
- **providerContact**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **primaryContact**: ProviderContact
- **businessAccountModel**: BusinessAccountModel
- **jobTitle**: string
- **contactInformation**: ContactInformation
- **vatNo**: string
- **registrationNo**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumChargeTemplate**: OneShotChargeTemplate
- **minimumArticle**: AccountingArticle
- **isCompany**: boolean
- **legalEntityType**: Title
- **tradingCurrency**: TradingCurrency
- **tradingCountry**: TradingCountry
- **tradingLanguage**: TradingLanguage
- **legalText**: string
- **legalType**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **seller**: Seller
- **invoiceTypeSequence**: Array<InvoiceTypeSellerSequence>
- **customerSequences**: Array<CustomerSequence>
- **paymentGateways**: Array<PaymentGateway>
- **generalLedger**: GeneralLedger
- **contracts**: Array<Contract>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **parentEntity**: BusinessEntity
- **accountType**: string
- **contactInformationNullSafe**: ContactInformation
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TradingCurrency
Type: object
Champs obligatoires: disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **currency**: Currency
- **prDescription**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **prCurrencyToThis**: number
- **currencyCode**: string
- **symbol**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **decimalPlaces**: integer (int32)
- **currentRate**: number
- **currentRateFromDate**: string (date-time)
- **currentRateUpdater**: string
- **exchangeRates**: Array<ExchangeRate>
- **active**: boolean
- **transient**: boolean

### ExchangeRate
Type: object
Champs obligatoires: disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **tradingCurrency**: TradingCurrency
- **exchangeRate**: number
- **fromDate**: string (date-time)
- **currentRate**: boolean
- **active**: boolean
- **transient**: boolean

### TradingCountry
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **country**: Country
- **countryCode**: string
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TradingLanguage
Type: object
Champs obligatoires: disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **language**: Language
- **prDescription**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **languageCode**: string
- **active**: boolean
- **transient**: boolean

### CustomerSequence
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **genericSequence**: GenericSequence
- **seller**: Seller
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### GenericSequence
Type: object
Propriétés:
- **prefix**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **sequenceSize**: integer (int64) (Contraintes: max: 20)
- **currentSequenceNb**: integer (int64) (Contraintes: min: 0 · max: 35)

### PaymentGateway
Type: object
Champs obligatoires: code, disabled, type, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **type**: string (Valeurs: CUSTOM, NATIF)
- **paymentMethodType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **scriptInstance**: ScriptInstance
- **implementationClassName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **applicationEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **country**: Country
- **tradingCurrency**: TradingCurrency
- **cardType**: string (Valeurs: VISA, MASTERCARD, AMERICAN_EXPRESS, CB)
- **nbTries**: integer (int32)
- **replayCause**: string (Valeurs: ERROR, REJECT)
- **errorsToReplay**: string
- **marchandId**: string
- **secretKeyDB**: string
- **secretKey**: string
- **secretKeyKS**: string
- **apiKey**: string
- **webhooksKeyId**: string
- **webhooksSecretKey**: string
- **profile**: string
- **rumSequence**: PaymentGatewayRumSequence
- **bankCoordinates**: BankCoordinates
- **seller**: Seller
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PaymentGatewayRumSequence
Type: object
Champs obligatoires: code, paymentGateway
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **genericSequence**: GenericSequence
- **paymentGateway**: PaymentGateway
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### BankCoordinates
Type: object
Propriétés:
- **bankCode**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **branchCode**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **accountNumber**: string (Contraintes: longueur min: 0 · longueur max: 11)
- **key**: string (Contraintes: longueur min: 0 · longueur max: 2)
- **iban**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **bic**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accountOwner**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **bankName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **bankId**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerNumber**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **ics**: string (Contraintes: longueur min: 0 · longueur max: 35)

### GeneralLedger
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **otherTransactions**: Array<OtherTransaction>
- **seller**: Seller
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OtherTransaction
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **dueDate**: string (date-time)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **generalLedger**: GeneralLedger
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **occCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **occDescription**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **code**: string
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo7**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentVentilation**: PaymentVentilation
- **paymentVentilations**: Array<PaymentVentilation>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### PaymentVentilation
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **originalOT**: OtherTransaction
- **accountOperation**: AccountOperation
- **newOT**: OtherTransaction
- **customerAccount**: CustomerAccount
- **ventilationAmount**: number
- **ventilationDate**: string (date-time)
- **ventilationActionStatus**: string (Valeurs: V, U)
- **transient**: boolean

### Contract
Type: object
Champs obligatoires: beginDate, code, disabled, endDate, status, statusDate, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **seller**: Seller
- **billingAccount**: BillingAccount
- **customerAccount**: CustomerAccount
- **customer**: Customer
- **status**: string
- **statusDate**: string (date-time)
- **contractDate**: string (date-time)
- **beginDate**: string (date-time)
- **endDate**: string (date-time)
- **renewal**: boolean
- **contractDuration**: integer (int32)
- **contractItems**: Array<ContractItem>
- **billingRules**: Array<BillingRule>
- **applicationEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### BillingAccount
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### Customer
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### ContractItem
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **contract**: Contract
- **offerTemplate**: OfferTemplate
- **product**: Product
- **pricePlan**: PricePlanMatrix
- **chargeTemplate**: ChargeTemplate
- **serviceTemplate**: ServiceTemplate
- **rate**: number (double)
- **amountWithoutTax**: number
- **contractRateType**: string (Valeurs: PERCENTAGE, FIXED)
- **separateDiscount**: boolean
- **applicationEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **applicableOnOverriddenPrice**: boolean
- **targetAccountingArticles**: Array<AccountingArticle>
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OfferTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **name**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **offerTemplateCategories**: Array<OfferTemplateCategory>
- **validity**: DatePeriod
- **imagePath**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **attachments**: Array<DigitalResource>
- **lifeCycleStatus**: string (Valeurs: IN_STUDY, IN_DESIGN, IN_TEST, ACTIVE, LAUNCHED, RETIRED, OBSOLETE, REJECTED)
- **businessAccountModels**: Array<BusinessAccountModel>
- **channels**: Array<Channel>
- **descriptionI18n**: object
- **longDescription**: string
- **longDescriptionI18n**: object
- **globalRatingScriptInstance**: ScriptInstance
- **sellers**: Array<Seller>
- **customerCategories**: Array<CustomerCategory>
- **businessOfferModel**: BusinessOfferModel
- **offerServiceTemplates**: Array<OfferServiceTemplate>
- **offerProductTemplates**: Array<OfferProductTemplate>
- **offerComponents**: Array<OfferComponent>
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **allowedDiscountPlans**: Array<DiscountPlan>
- **minimumInvoiceSubCategory**: InvoiceSubCategory
- **minimumChargeTemplate**: OneShotChargeTemplate
- **document**: Document
- **subscriptionRenewal**: SubscriptionRenewal
- **prefix**: string
- **productTemplates**: Array<ProductTemplate>
- **transientCode**: string
- **autoEndOfEngagement**: boolean
- **tags**: Array<Tag>
- **medias**: Array<Media>
- **commercialRules**: Array<CommercialRuleHeader>
- **statusDate**: string (date-time)
- **isOfferChangeRestricted**: boolean
- **allowedOffersChange**: Array<OfferTemplate>
- **minimumArticle**: AccountingArticle
- **isModel**: boolean
- **offerModel**: OfferTemplate
- **generateQuoteEdrPerProduct**: boolean
- **offerAttributes**: Array<OfferTemplateAttribute>
- **nameOrCode**: string
- **longDescriptionI18nNullSafe**: object
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OfferTemplateCategory
Type: object
Champs obligatoires: code, disabled, name, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **name**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **offerTemplateCategory**: OfferTemplateCategory
- **children**: Array<OfferTemplateCategory>
- **productOffering**: Array<ProductOffering>
- **orderLevel**: integer (int32)
- **imagePath**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **parentCategoryCode**: string
- **descriptionI18n**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **descriptionOrCode**: string
- **assignedToProductOffering**: boolean
- **active**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ProductOffering
Type: object
Propriétés:
- **id**: string
- **version**: string
- **href**: string
- **name**: string
- **description**: string
- **lastUpdate**: string (date-time)
- **lifecycleStatus**: string (Valeurs: In Study, In Design, In Test, Active, Launched, Retired, Obsolete, Rejected)
- **validFor**: TimeRange
- **isBundle**: boolean
- **category**: Array<CatalogReference>
- **channel**: Array<Channel>
- **place**: Array<Place>
- **bundledProductOffering**: Array<BundledProductReference>
- **serviceLevelAgreement**: ServiceLevelAgreement
- **productSpecification**: CatalogReference
- **serviceCandidate**: CatalogReference
- **resourceCandidate**: CatalogReference
- **productOfferingTerm**: Array<ProductOfferingTerm>
- **productOfferingPrice**: Array<ProductOfferingPrice>

### CatalogReference
Type: object
Propriétés:
- **id**: string
- **version**: string
- **href**: string
- **name**: string
- **description**: string
- **lastUpdate**: string (date-time)
- **lifecycleStatus**: string (Valeurs: In Study, In Design, In Test, Active, Launched, Retired, Obsolete, Rejected)
- **validFor**: TimeRange

### Channel
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### BundledProductReference
Type: object
Propriétés:
- **id**: string
- **version**: string
- **href**: string
- **name**: string
- **description**: string
- **lastUpdate**: string (date-time)
- **lifecycleStatus**: string (Valeurs: In Study, In Design, In Test, Active, Launched, Retired, Obsolete, Rejected)
- **validFor**: TimeRange

### ServiceLevelAgreement
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### ProductOfferingTerm
Type: object
Propriétés:
- **name**: string
- **description**: string
- **duration**: string
- **validFor**: TimeRange

### ProductOfferingPrice
Type: object
Propriétés:
- **priceType**: string (Valeurs: recurring, one time, usage)
- **unitOfMeasure**: string
- **price**: Price
- **recurringChargePeriod**: string
- **productOfferPriceAlteration**: ProductOfferPriceAlteration
- **name**: string
- **description**: string
- **validFor**: TimeRange

### Price
Type: object
Propriétés:
- **taxIncludedAmount**: string
- **dutyFreeAmount**: string
- **taxRate**: string
- **currencyCode**: string
- **percentage**: number

### ProductOfferPriceAlteration
Type: object
Propriétés:
- **name**: string
- **description**: string
- **validFor**: TimeRange
- **priceType**: string (Valeurs: recurring, one time, usage)
- **unitOfMeasure**: string
- **price**: AlterationPrice
- **recurringChargePeriod**: string
- **priceCondition**: string

### AlterationPrice
Type: object
Propriétés:
- **percentage**: string

### DigitalResource
Type: object
Champs obligatoires: code, disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **uri**: string
- **mimeType**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **productOfferings**: Array<ProductOffering>
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CustomerCategory
Type: object
Champs obligatoires: code, taxCategory, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **exoneratedFromTaxes**: boolean
- **exonerationTaxEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **exonerationReason**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **taxCategory**: TaxCategory
- **taxCategoryEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **descriptionI18n**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TaxCategory
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **descriptionI18n**: object
- **descriptionI18nNullSafe**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### BusinessOfferModel
Type: object
Champs obligatoires: code, disabled, license
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **moduleItems**: Array<MeveoModuleItem>
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **installed**: boolean
- **moduleSource**: string
- **script**: ScriptInstance
- **offerTemplate**: OfferTemplate
- **descriptionI18n**: object
- **downloaded**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OfferServiceTemplate
Type: object
Champs obligatoires: offerTemplate, serviceTemplate
Propriétés:
- **id**: integer (int64)
- **offerTemplate**: OfferTemplate
- **serviceTemplate**: ServiceTemplate
- **mandatory**: boolean
- **incompatibleServices**: Array<ServiceTemplate>
- **validity**: DatePeriod
- **transient**: boolean

### OfferProductTemplate
Type: object
Propriétés:
- **id**: object
- **offerTemplate**: OfferTemplate
- **productTemplate**: ProductTemplate
- **mandatory**: boolean
- **transient**: boolean

### ProductTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **name**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **offerTemplateCategories**: Array<OfferTemplateCategory>
- **validity**: DatePeriod
- **imagePath**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **attachments**: Array<DigitalResource>
- **lifeCycleStatus**: string (Valeurs: IN_STUDY, IN_DESIGN, IN_TEST, ACTIVE, LAUNCHED, RETIRED, OBSOLETE, REJECTED)
- **businessAccountModels**: Array<BusinessAccountModel>
- **channels**: Array<Channel>
- **descriptionI18n**: object
- **longDescription**: string
- **longDescriptionI18n**: object
- **globalRatingScriptInstance**: ScriptInstance
- **sellers**: Array<Seller>
- **customerCategories**: Array<CustomerCategory>
- **productChargeTemplates**: Array<ProductChargeTemplate>
- **businessProductModel**: BusinessProductModel
- **invoicingCalendar**: Calendar
- **walletTemplates**: Array<WalletTemplate>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **nameOrCode**: string
- **longDescriptionI18nNullSafe**: object
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ProductChargeTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **type**: string (Valeurs: CREDIT, DEBIT)
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **amountEditable**: boolean
- **invoiceSubCategory**: InvoiceSubCategory
- **inputUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **inputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **outputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **unitMultiplicator**: number
- **unitNbDecimal**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRule**: RevenueRecognitionRule
- **descriptionI18n**: object
- **filterExpression**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClass**: TaxClass
- **taxClassEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **ratingScript**: ScriptInstance
- **dropZeroWo**: boolean
- **sortIndexEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **roundingValuesComputed**: boolean
- **roundingUnityNbDecimal**: integer (int32)
- **roundingEdrNbDecimal**: integer (int32)
- **status**: string (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **internalNote**: string
- **quantityAttribute**: Attribute
- **applyContractOverRatingScript**: boolean
- **productTemplates**: Array<ProductTemplate>
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### UnitOfMeasure
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **symbol**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **descriptionI18n**: object
- **multiplicator**: integer (int64)
- **parentUnitOfMeasure**: UnitOfMeasure
- **descriptionI18nNullSafe**: object
- **baseUnit**: boolean
- **descriptionNotNull**: string
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### RevenueRecognitionRule
Type: object
Champs obligatoires: code, disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **script**: ScriptInstance
- **startDelay**: integer (int32)
- **startUnit**: string (Valeurs: revenueRecognitionDelayUnitEnum.MONTH, revenueRecognitionDelayUnitEnum.DAY)
- **startEvent**: string (Valeurs: revenueRecognitionEvent.SUBSCRIPTION_START, revenueRecognitionEvent.SUBSCRIPTION_STOP, revenueRecognitionEvent.INVOICE_DATE, revenueRecognitionEvent.INVOICE_DUE_DATE, revenueRecognitionEvent.SERVICE_PERIOD_START, revenueRecognitionEvent.SERVICE_PERIOD_STOP)
- **stopDelay**: integer (int32)
- **stopUnit**: string (Valeurs: revenueRecognitionDelayUnitEnum.MONTH, revenueRecognitionDelayUnitEnum.DAY)
- **stopEvent**: string (Valeurs: revenueRecognitionEvent.SUBSCRIPTION_START, revenueRecognitionEvent.SUBSCRIPTION_STOP, revenueRecognitionEvent.INVOICE_DATE, revenueRecognitionEvent.INVOICE_DUE_DATE, revenueRecognitionEvent.SERVICE_PERIOD_START, revenueRecognitionEvent.SERVICE_PERIOD_STOP)
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Attribute
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **parentAttribute**: Attribute
- **elValue**: string
- **priority**: integer (int32)
- **allowedValues**: Array<string>
- **chargeTemplates**: Array<ChargeTemplate>
- **attributeType**: string (Valeurs: INFO, LIST_TEXT, LIST_MULTIPLE_TEXT, LIST_NUMERIC, LIST_MULTIPLE_NUMERIC, TEXT, NUMERIC, INTEGER, DATE, CALENDAR, EMAIL, PHONE, TOTAL, COUNT, EXPRESSION_LANGUAGE, BOOLEAN)
- **medias**: Array<Media>
- **tags**: Array<Tag>
- **commercialRules**: Array<CommercialRuleHeader>
- **assignedAttributes**: Array<Attribute>
- **unitNbDecimal**: integer (int32)
- **groupedAttributes**: Array<GroupedAttributes>
- **productVersionAttributes**: Array<ProductVersionAttribute>
- **offerTemplateAttribute**: Array<OfferTemplateAttribute>
- **attributeCategory**: string (Valeurs: REGULAR, BUSINESS)
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Media
Type: object
Champs obligatoires: code, label, main, mediaName, mediaType, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **mediaName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **label**: string
- **main**: boolean
- **mediaType**: string (Valeurs: IMAGE, VIDEO, PDF)
- **mediaPath**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Tag
Type: object
Champs obligatoires: code, name, tagType
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **seller**: Seller
- **name**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **tagType**: TagType
- **parentTag**: Tag
- **filterEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TagType
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **seller**: Seller
- **tags**: Array<Tag>
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CommercialRuleHeader
Type: object
Champs obligatoires: code, disabled, ruleType
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **ruleType**: string (Valeurs: PRE_REQUISITE, INCOMPATIBILITY, REPLACEMENT)
- **targetOfferTemplate**: OfferTemplate
- **targetProduct**: Product
- **targetProductVersion**: ProductVersion
- **targetGroupedAttributes**: GroupedAttributes
- **targetAttribute**: Attribute
- **targetAttributeValue**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **targetTag**: Tag
- **ruleEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **commercialRuleItems**: Array<CommercialRuleItem>
- **disabled**: boolean
- **scopeType**: string (Valeurs: QUOTE, QUOTE_OFFER)
- **targetOfferAttribute**: boolean
- **targetOfferTemplateCode**: string
- **targetProductCode**: string
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ProductVersion
Type: object
Champs obligatoires: product, shortDescription, status, statusDate
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **product**: Product
- **currentVersion**: integer (int32) (Contraintes: min: 1)
- **status**: string (Valeurs: DRAFT, PUBLISHED, CLOSED)
- **statusDate**: string (date-time)
- **shortDescription**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **longDescription**: string
- **validity**: DatePeriod
- **tags**: Array<Tag>
- **attributes**: Array<ProductVersionAttribute>
- **groupedAttributes**: Array<GroupedAttributes>
- **transient**: boolean

### ProductVersionAttribute
Type: object
Champs obligatoires: attribute, display, mandatory, productVersion
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **sequence**: integer (int32)
- **attribute**: Attribute
- **mandatoryWithEl**: string
- **mandatory**: boolean
- **display**: boolean
- **readOnly**: boolean
- **defaultValue**: string
- **validationType**: string (Valeurs: REGEX, EL)
- **validationPattern**: string
- **validationLabel**: string
- **productVersion**: ProductVersion
- **transient**: boolean

### GroupedAttributes
Type: object
Champs obligatoires: code, disabled, display, mandatory, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **mandatory**: boolean
- **display**: boolean
- **sequence**: integer (int32)
- **commercialRules**: Array<CommercialRuleHeader>
- **attributes**: Array<Attribute>
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CommercialRuleItem
Type: object
Champs obligatoires: operator
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **commercialRuleHeader**: CommercialRuleHeader
- **operator**: string (Valeurs: AND, OR)
- **ruleItemEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **commercialRuleLines**: Array<CommercialRuleLine>
- **transient**: boolean

### CommercialRuleLine
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **commercialRuleItem**: CommercialRuleItem
- **sourceOfferTemplate**: OfferTemplate
- **sourceProduct**: Product
- **sourceProductVersion**: ProductVersion
- **sourceAttribute**: Attribute
- **sourceGroupedAttributes**: GroupedAttributes
- **sourceTag**: Tag
- **sourceAttributeValue**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **sourceGroupedAttributeValue**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **operator**: string (Valeurs: GREATER_THAN, LESS_THAN, EQUAL, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, NOT_EQUAL, EXISTS, CONTAINS, NOT_CONTAINS)
- **sourceOfferAttribute**: boolean
- **sourceOfferTemplateCode**: string
- **sourceProductCode**: string
- **transient**: boolean

### OfferTemplateAttribute
Type: object
Champs obligatoires: attribute, display, mandatory, offerTemplate
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **sequence**: integer (int32)
- **attribute**: Attribute
- **mandatoryWithEl**: string
- **mandatory**: boolean
- **display**: boolean
- **readOnly**: boolean
- **defaultValue**: string
- **validationType**: string (Valeurs: REGEX, EL)
- **validationPattern**: string
- **validationLabel**: string
- **offerTemplate**: OfferTemplate
- **transient**: boolean

### BusinessProductModel
Type: object
Champs obligatoires: code, disabled, license
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **moduleItems**: Array<MeveoModuleItem>
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **installed**: boolean
- **moduleSource**: string
- **script**: ScriptInstance
- **productTemplate**: ProductTemplate
- **descriptionI18n**: object
- **downloaded**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Calendar
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **calendarType**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **initDateEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **descriptionI18n**: object
- **initDate**: string (date-time)
- **calendarTypeWSubtypes**: string
- **initializationRequired**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### WalletTemplate
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **walletType**: string (Valeurs: POSTPAID, PREPAID)
- **consumptionAlertSet**: boolean
- **fastRatingLevel**: integer (int32)
- **lowBalanceLevel**: number
- **rejectLevel**: number
- **lowBalanceLevelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **rejectLevelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OfferComponent
Type: object
Champs obligatoires: offerTemplate
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **offerTemplate**: OfferTemplate
- **product**: Product
- **quantityMin**: integer (int32)
- **quantityMax**: integer (int32)
- **quantityDefault**: integer (int32)
- **tagsList**: Array<Tag>
- **mandatory**: boolean
- **sequence**: integer (int32)
- **display**: boolean
- **productSet**: string
- **transient**: boolean

### DiscountPlan
Type: object
Champs obligatoires: code, disabled, status, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **minDuration**: integer (int32)
- **maxDuration**: integer (int32)
- **discountPlanItems**: Array<DiscountPlanItem>
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **defaultDuration**: integer (int32)
- **durationUnit**: string (Valeurs: MONTH, DAY)
- **discountPlanType**: string (Valeurs: QUOTE, OFFER, PRODUCT, INVOICE, INVOICE_LINE, PROMO_CODE)
- **status**: string (Valeurs: ACTIVE, INACTIVE, DRAFT, IN_USE, EXPIRED)
- **statusDate**: string (date-time)
- **initialQuantity**: integer (int64)
- **usedQuantity**: integer (int64)
- **applicationLimit**: integer (int64)
- **applicationFilterEL**: string
- **discountPlanaApplicableEntities**: Array<ApplicableEntity>
- **incompatibleDiscountPlans**: Array<DiscountPlan>
- **applicableOnOverriddenPrice**: boolean
- **applicableOnDiscountedPrice**: boolean
- **sequence**: integer (int32)
- **expressionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **applicableOnContractPrice**: boolean
- **valid**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### DiscountPlanItem
Type: object
Champs obligatoires: allowToNegate, code, disabled, discountPlan, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **discountPlan**: DiscountPlan
- **invoiceCategory**: InvoiceCategory
- **invoiceSubCategory**: InvoiceSubCategory
- **expressionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **discountValue**: number
- **discountValueEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **discountPlanItemType**: string (Valeurs: PERCENTAGE, FIXED)
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **priority**: integer (int64)
- **accountingArticle**: AccountingArticle
- **targetAccountingArticle**: Array<AccountingArticle>
- **pricePlanMatrix**: PricePlanMatrix
- **allowToNegate**: boolean
- **applyByArticle**: boolean
- **sequence**: integer (int32)
- **lastDiscount**: boolean
- **finalSequence**: integer (int32)
- **description**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **active**: boolean
- **transient**: boolean

### PricePlanMatrix
Type: object
Champs obligatoires: code, disabled, eventCode, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **eventCode**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **offerTemplate**: OfferTemplate
- **versions**: Array<PricePlanMatrixVersion>
- **startSubscriptionDate**: string (date-time)
- **endSubscriptionDate**: string (date-time)
- **startRatingDate**: string (date-time)
- **endRatingDate**: string (date-time)
- **minQuantity**: number
- **maxQuantity**: number
- **minSubscriptionAgeInMonth**: integer (int64)
- **maxSubscriptionAgeInMonth**: integer (int64)
- **criteria1Value**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2Value**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3Value**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteriaEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **amountWithoutTaxEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **amountWithTaxEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **tradingCurrency**: TradingCurrency
- **tradingCountry**: TradingCountry
- **priority**: integer (int32)
- **seller**: Seller
- **validityCalendar**: Calendar
- **sequence**: integer (int64)
- **scriptInstance**: ScriptInstance
- **descriptionI18n**: object
- **woDescriptionEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **totalAmountEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumAmountEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceSubCategoryEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **validityFrom**: string (date-time)
- **validityDate**: string (date-time)
- **parameter1El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **parameter2El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **parameter3El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **chargeTemplate**: ChargeTemplate
- **contractItems**: Array<ContractItem>
- **discountPlanItems**: Array<DiscountPlanItem>
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PricePlanMatrixVersion
Type: object
Champs obligatoires: pricePlanMatrix, priceVersionType, status, statusDate
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **status**: string (Valeurs: DRAFT, PUBLISHED, CLOSED)
- **pricePlanMatrix**: PricePlanMatrix
- **currentVersion**: integer (int32)
- **label**: string
- **statusDate**: string (date-time)
- **validity**: DatePeriod
- **price**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **priceEL**: string
- **lines**: Array<PricePlanMatrixLine>
- **columns**: Array<PricePlanMatrixColumn>
- **priority**: integer (int32)
- **priceVersionType**: string (Valeurs: FIXED, PERCENTAGE)
- **statusChangeLog**: string
- **matrix**: boolean
- **transient**: boolean

### PricePlanMatrixLine
Type: object
Champs obligatoires: priority
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **pricePlanMatrixVersion**: PricePlanMatrixVersion
- **description**: string
- **valueEL**: string
- **priceWithoutTax**: number
- **value**: number
- **pricePlanMatrixValues**: Array<PricePlanMatrixValue>
- **priority**: integer (int32)
- **defaultLine**: boolean
- **transient**: boolean

### PricePlanMatrixValue
Type: object
Champs obligatoires: pricePlanMatrixColumn, pricePlanMatrixLine
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **pricePlanMatrixColumn**: PricePlanMatrixColumn
- **pricePlanMatrixLine**: PricePlanMatrixLine
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **stringValue**: string
- **dateValue**: string (date-time)
- **fromDateValue**: string (date-time)
- **toDateValue**: string (date-time)
- **fromDoubleValue**: number (double)
- **toDoubleValue**: number (double)
- **booleanValue**: boolean
- **transient**: boolean

### PricePlanMatrixColumn
Type: object
Champs obligatoires: code, position, pricePlanMatrixVersion, type
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **pricePlanMatrixVersion**: PricePlanMatrixVersion
- **position**: integer (int32)
- **type**: string (Valeurs: String, Long, Double, Range_Date, Range_Numeric, Boolean)
- **elValue**: string
- **offerTemplate**: OfferTemplate
- **product**: Product
- **attribute**: Attribute
- **pricePlanMatrixValues**: Array<PricePlanMatrixValue>
- **range**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ApplicableEntity
Type: object
Champs obligatoires: code
Propriétés:
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **entityClass**: string (Contraintes: longueur min: 0 · longueur max: 255)

### Document
Type: object
Champs obligatoires: code, creationDate, documentStatus, fileName, fileType, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **descriptionI18n**: object
- **fileType**: FileType
- **creationDate**: string (date-time)
- **fileName**: string
- **tags**: Array<string>
- **linkedAccountEntity**: AccountEntity
- **category**: DocumentCategory
- **documentStatus**: string (Valeurs: ACTIVE, INACTIVE, REJECTED)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### FileType
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AccountEntity
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalRef1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **externalRef2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **name**: Name
- **address**: Address
- **defaultLevel**: boolean
- **providerContact**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **primaryContact**: ProviderContact
- **businessAccountModel**: BusinessAccountModel
- **jobTitle**: string
- **contactInformation**: ContactInformation
- **vatNo**: string
- **registrationNo**: string
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumChargeTemplate**: OneShotChargeTemplate
- **minimumArticle**: AccountingArticle
- **isCompany**: boolean
- **legalEntityType**: Title
- **accountType**: string
- **contactInformationNullSafe**: ContactInformation
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### DocumentCategory
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **relativePath**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### SubscriptionRenewal
Type: object
Champs obligatoires: code
Propriétés:
- **autoRenew**: boolean
- **autoRenewDate**: string (date-time)
- **daysNotifyRenewal**: integer (int32)
- **endOfTermAction**: string (Valeurs: SUSPEND, TERMINATE)
- **id**: integer (int64)
- **version**: integer (int32)
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **applyAgreement**: boolean
- **invoiceAgreementImmediately**: boolean
- **applyReimbursment**: boolean
- **applyTerminationCharges**: boolean
- **overrideProrata**: string (Valeurs: NO_OVERRIDE, PRORATA, NO_PRORATA)
- **reimburseOneshots**: boolean
- **descriptionI18n**: object
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean
- **initialyActiveForUnit**: string (Valeurs: MONTH, DAY)
- **initialyActiveFor**: integer (int32)
- **calendarInitialyActiveFor**: Calendar
- **extendAgreementPeriodToSubscribedTillDate**: boolean
- **renewForUnit**: string (Valeurs: MONTH, DAY)
- **renewFor**: integer (int32)
- **calendarRenewFor**: Calendar
- **initialTermType**: string (Valeurs: RECURRING, CALENDAR, FIXED)
- **renewalTermType**: string (Valeurs: RECURRING, CALENDAR)

### BillingRule
Type: object
Champs obligatoires: disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **contract**: Contract
- **priority**: integer (int32)
- **criteriaEL**: string
- **invoicedBACodeEL**: string
- **active**: boolean
- **transient**: boolean

### EmailTemplate
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **media**: string (Valeurs: POSTAL_MAIL, EMAIL, SMS, IM, FAX, VOICE, WEBSERVICE, QUEUE, FTP_FILE, CFT_FILE, DATABASE, DUNNING_MEDIA)
- **tagStartDelimiter**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **tagEndDelimiter**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **type**: string (Valeurs: DUNNING, INVOICE, OTHER)
- **textContent**: string
- **translatedTextContent**: object
- **subject**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **htmlContent**: string
- **translatedHtmlContent**: object
- **translatedSubject**: object
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoiceValidationRule
Type: object
Champs obligatoires: code, invoiceType, priority, type
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **invoiceType**: InvoiceType
- **priority**: integer (int32)
- **validFrom**: string (date-time)
- **validTo**: string (date-time)
- **type**: string (Valeurs: SCRIPT, EXPRESSION_LANGUAGE)
- **failStatus**: string (Valeurs: REJECTED, SUSPECT, VALID)
- **validationScript**: ScriptInstance
- **validationEL**: string
- **ruleValues**: object
- **toReorder**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AccountingCodeMapping
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **accountingCode**: AccountingCode
- **accountingArticle**: AccountingArticle
- **billingCountry**: TradingCountry
- **billingCurrency**: TradingCurrency
- **sellerCountry**: TradingCountry
- **seller**: Seller
- **criteriaElValue**: string
- **transient**: boolean

### AddressBook
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **contacts**: Array<Contact>
- **customer**: Customer
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Contact
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalRef1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **externalRef2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **name**: Name
- **address**: Address
- **primaryContact**: ProviderContact
- **jobTitle**: string
- **contactInformation**: ContactInformation
- **vatNo**: string
- **registrationNo**: string
- **isCompany**: boolean
- **legalEntityType**: Title
- **assistantName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **assistantPhone**: string (Contraintes: longueur min: 0 · longueur max: 15)
- **position**: string (Contraintes: longueur min: 0 · longueur max: 200)
- **company**: string (Contraintes: longueur min: 0 · longueur max: 200)
- **websiteUrl**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **importedFrom**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **importedBy**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **socialIdentifier**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **agreedToUA**: boolean
- **contactPolicy**: CommunicationPolicy
- **messages**: Array<Message>
- **addressBook**: AddressBook
- **tags**: Array<string>
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 80)
- **comment**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **addressBookContacts**: Array<AddressBookContact>
- **contactCategories**: Array<ContactCategory>
- **enterprise**: boolean
- **prospect**: boolean
- **vip**: boolean
- **contactInformationNullSafe**: ContactInformation
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CommunicationPolicy
Type: object
Propriétés:
- **delayMinBetween2messages**: integer (int64)
- **nbMaxMessagePerDay**: integer (int64)
- **nbMaxMessagePerWeek**: integer (int64)
- **nbMaxMessagePerMonth**: integer (int64)

### Message
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **templateCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameters**: Array<MessageVariableValue>
- **campaign**: Campaign
- **contact**: Contact
- **media**: string (Valeurs: POSTAL_MAIL, EMAIL, SMS, IM, FAX, VOICE, WEBSERVICE, QUEUE, FTP_FILE, CFT_FILE, DATABASE, DUNNING_MEDIA)
- **subMedia**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **priority**: string (Valeurs: SLOW, NORMAL, URGENT)
- **status**: string (Valeurs: WAITING, PROCESSING, TREATED, REJECTED, CANCELED)
- **rejectionReason**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **transient**: boolean

### MessageVariableValue
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **message**: Message
- **value**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Campaign
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **scheduleDate**: string (date-time)
- **startDate**: string (date-time)
- **processingThreadId**: integer (int32)
- **endDate**: string (date-time)
- **priority**: string (Valeurs: SLOW, NORMAL, URGENT)
- **media**: string (Valeurs: POSTAL_MAIL, EMAIL, SMS, IM, FAX, VOICE, WEBSERVICE, QUEUE, FTP_FILE, CFT_FILE, DATABASE, DUNNING_MEDIA)
- **subMedia**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **useAnyMedia**: boolean
- **status**: string (Valeurs: SCHEDULED, RUNNING, PAUSED, CANCELED, TERMINATED)
- **messages**: Array<Message>
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AddressBookContact
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **addressBook**: AddressBook
- **contact**: Contact
- **position**: string
- **mainContact**: boolean
- **transient**: boolean

### ContactCategory
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CreditCategory
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **descriptionI18n**: object
- **provider**: Provider
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Provider
Type: object
Champs obligatoires: code, disabled, invoiceRounding, invoiceRoundingMode, rounding, roundingMode, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 60)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **disabled**: boolean
- **currency**: Currency
- **country**: Country
- **language**: Language
- **multicountryFlag**: boolean
- **multicurrencyFlag**: boolean
- **multilanguageFlag**: boolean
- **customer**: Customer
- **customerAccount**: CustomerAccount
- **billingAccount**: BillingAccount
- **userAccount**: UserAccount
- **paymentMethods**: Array<string>
- **rounding**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **invoiceRounding**: integer (int32)
- **maximumDelay**: integer (int32)
- **currentMatchingCode**: string
- **maximumDeferralPerInvoice**: integer (int32)
- **invoiceRoundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **bankCoordinates**: BankCoordinates
- **paymentPlanPolicy**: PaymentPlanPolicy
- **entreprise**: boolean
- **automaticInvoicing**: boolean
- **interBankTitle**: InterBankTitle
- **amountValidation**: boolean
- **levelDuplication**: boolean
- **email**: string (Contraintes: longueur min: 0 · longueur max: 100 · pattern: .+@.+\..{2,4})
- **displayFreeTransacInInvoice**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **discountAccountingCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **prepaidReservationExpirationDelayinMillisec**: integer (int64)
- **invoiceConfiguration**: InvoiceConfiguration
- **recognizeRevenue**: boolean
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **gdprConfiguration**: GdprConfiguration
- **paymentDeferral**: boolean
- **paymentPlan**: boolean
- **rumSequence**: GenericSequence
- **customerNoSequence**: GenericSequence
- **cdrDeduplicationKeyEL**: string (Contraintes: longueur min: 0 · longueur max: 500)
- **functionalCurrencyFlag**: boolean
- **activateCascadingDiscounts**: boolean
- **portalMessage**: string (Contraintes: longueur min: 0 · longueur max: 500)
- **invoiceConfigurationOrDefault**: InvoiceConfiguration
- **currentProvider**: boolean
- **gdprConfigurationNullSafe**: GdprConfiguration
- **parentCFEntities**: Array<ICustomFieldEntity>
- **active**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### UserAccount
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalRef1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **externalRef2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **name**: Name
- **address**: Address
- **defaultLevel**: boolean
- **providerContact**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **primaryContact**: ProviderContact
- **businessAccountModel**: BusinessAccountModel
- **jobTitle**: string
- **contactInformation**: ContactInformation
- **vatNo**: string
- **registrationNo**: string
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumChargeTemplate**: OneShotChargeTemplate
- **minimumArticle**: AccountingArticle
- **isCompany**: boolean
- **legalEntityType**: Title
- **status**: string (Valeurs: ACTIVE, CANCELED, TERMINATED, CLOSED)
- **statusDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **parentUserAccount**: UserAccount
- **userAccounts**: Array<UserAccount>
- **terminationDate**: string (date-time)
- **billingAccount**: BillingAccount
- **subscriptions**: Array<Subscription>
- **wallet**: WalletInstance
- **prepaidWallets**: object
- **counters**: object
- **terminationReason**: SubscriptionTerminationReason
- **isConsumer**: boolean
- **seller**: Seller
- **parentCFEntities**: Array<ICustomFieldEntity>
- **parentEntity**: BusinessEntity
- **accountType**: string
- **contactInformationNullSafe**: ContactInformation
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Subscription
Type: object
Champs obligatoires: code, userAccount, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **versionNumber**: integer (int32)
- **nextVersion**: Subscription
- **previousVersion**: Subscription
- **offer**: OfferTemplate
- **status**: string (Valeurs: CREATED, ACTIVE, CANCELED, RESILIATED, CLOSED, SUSPENDED, PENDING)
- **statusDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **subscribedTillDate**: string (date-time)
- **serviceInstances**: Array<ServiceInstance>
- **productInstances**: Array<ProductInstance>
- **accessPoints**: Array<Access>
- **edrs**: Array<EDR>
- **userAccount**: UserAccount
- **accountOperations**: Array<AccountOperation>
- **endAgreementDate**: string (date-time)
- **subscriptionTerminationReason**: SubscriptionTerminationReason
- **defaultLevel**: boolean
- **autoEndOfEngagement**: boolean
- **subscriptionRenewal**: SubscriptionRenewal
- **renewed**: boolean
- **notifyOfRenewalDate**: string (date-time)
- **renewalNotifiedDate**: string (date-time)
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumInvoiceSubCategory**: InvoiceSubCategory
- **minimumChargeTemplate**: OneShotChargeTemplate
- **billingCycle**: BillingCycle
- **billingRun**: BillingRun
- **seller**: Seller
- **ratingGroup**: string
- **discountPlanInstances**: Array<DiscountPlanInstance>
- **discountPlan**: DiscountPlan
- **emailTemplate**: EmailTemplate
- **mailingType**: string (Valeurs: MANUAL, AUTO, BATCH)
- **ccedEmails**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **email**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **electronicBilling**: boolean
- **salesPersonName**: string (Contraintes: longueur min: 0 · longueur max: 52)
- **counters**: object
- **contract**: Contract
- **totalInvoicingAmountWithoutTax**: number
- **totalInvoicingAmountWithTax**: number
- **totalInvoicingAmountTax**: number
- **initialSubscriptionRenewal**: string
- **paymentMethod**: PaymentMethod
- **order**: CommercialOrder
- **prestation**: string
- **validity**: DatePeriod
- **minimumArticle**: AccountingArticle
- **minInvoiceLines**: Array<InvoiceLine>
- **orderOffer**: OrderOffer
- **attributeInstances**: Array<AttributeInstance>
- **anyServiceActive**: boolean
- **renewalDate**: string (date-time)
- **subscriptionMonthsAge**: integer (int32)
- **subscriptionDaysAge**: integer (int32)
- **orderNumber**: string
- **subscriptionExpired**: boolean
- **fireRenewalNotice**: boolean
- **toValidity**: string (date-time)
- **fromValidity**: string (date-time)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **allDiscountPlanInstances**: Array<DiscountPlanInstance>
- **active**: boolean
- **transient**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string

### ServiceInstance
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **subscription**: Subscription
- **serviceTemplate**: ServiceTemplate
- **productVersion**: ProductVersion
- **quoteProduct**: QuoteProduct
- **invoicingCalendar**: Calendar
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **endAgreementDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **autoEndOfEngagement**: boolean
- **priceVersionDateSetting**: string (Valeurs: QUOTE, DELIVERY, RENEWAL, EVENT)
- **priceVersionDate**: string (date-time)
- **chargeInstances**: Array<ChargeInstance>
- **ratedTransactions**: Array<RatedTransaction>
- **subscriptionTerminationReason**: SubscriptionTerminationReason
- **quantity**: number
- **previousQuantity**: number
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **rateUntilDate**: string (date-time)
- **minimumAmountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumLabelEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **minimumInvoiceSubCategory**: InvoiceSubCategory
- **minimumChargeTemplate**: OneShotChargeTemplate
- **orderHistories**: Array<OrderHistory>
- **serviceRenewal**: SubscriptionRenewal
- **amountPS**: number
- **calendarPS**: Calendar
- **psInstances**: Array<PaymentScheduleInstance>
- **paymentDayInMonthPS**: integer (int32)
- **subscribedTillDate**: string (date-time)
- **renewed**: boolean
- **notifyOfRenewalDate**: string (date-time)
- **renewalNotifiedDate**: string (date-time)
- **counters**: object
- **initialServiceRenewal**: string
- **attributeInstances**: Array<AttributeInstance>
- **minimumArticle**: AccountingArticle
- **deliveryDate**: string (date-time)
- **orderItemId**: integer (int64)
- **orderItemAction**: string (Valeurs: ADD, MODIFY, DELETE)
- **recurringChargeInstances**: Array<RecurringChargeInstance>
- **subscriptionChargeInstances**: Array<SubscriptionChargeInstance>
- **terminationChargeInstances**: Array<TerminationChargeInstance>
- **usageChargeInstances**: Array<UsageChargeInstance>
- **discountPlanInstances**: Array<DiscountPlanInstance>
- **activationDate**: string (date-time)
- **quantityChanged**: boolean
- **descriptionAndStatus**: string
- **subscriptionExpired**: boolean
- **fireRenewalNotice**: boolean
- **seller**: Seller
- **serviceCharge**: ServiceCharge
- **parentCFEntities**: Array<ICustomFieldEntity>
- **allDiscountPlanInstances**: Array<DiscountPlanInstance>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QuoteProduct
Type: object
Champs obligatoires: productVersion, quantity, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **quote**: CpqQuote
- **quoteVersion**: QuoteVersion
- **productVersion**: ProductVersion
- **quantity**: number
- **quoteOffer**: QuoteOffer
- **quoteAttributes**: Array<QuoteAttribute>
- **quoteArticleLines**: Array<QuoteArticleLine>
- **discountPlan**: DiscountPlan
- **deliveryDate**: string (date-time)
- **productActionType**: string (Valeurs: CREATE, ACTIVATE, SUSPEND, TERMINATE, MODIFY)
- **terminationDate**: string (date-time)
- **terminationReason**: SubscriptionTerminationReason
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### CpqQuote
Type: object
Champs obligatoires: applicantAccount, billableAccount, code, orderInvoiceType, previousStatus, status
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **seller**: Seller
- **applicantAccount**: BillingAccount
- **status**: string
- **previousStatus**: string
- **statusDate**: string (date-time)
- **sendDate**: string (date-time)
- **quoteDate**: string (date-time)
- **deliveryDate**: string (date-time)
- **quoteLotDuration**: integer (int32)
- **opportunityRef**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **customerRef**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **customerName**: string (Contraintes: longueur min: 0 · longueur max: 52)
- **contactName**: string (Contraintes: longueur min: 0 · longueur max: 52)
- **registerNumber**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **salesPersonName**: string (Contraintes: longueur min: 0 · longueur max: 52)
- **billableAccount**: BillingAccount
- **validity**: DatePeriod
- **quoteNumber**: string
- **orderInvoiceType**: InvoiceType
- **userAccount**: UserAccount
- **totalInvoicingAmountWithoutTax**: number
- **totalInvoicingAmountWithTax**: number
- **totalInvoicingAmountTax**: number
- **minInvoiceLines**: Array<InvoiceLine>
- **billingRun**: BillingRun
- **validationDate**: string (date-time)
- **billingCycle**: BillingCycle
- **transient**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string

### InvoiceLine
The list of invoice lines
Type: object
Champs obligatoires: accountingArticleCode
Propriétés:
- **billingRunId**: integer (int64) — The id of billing run
- **accountingArticleCode**: string — The code of accounting article
- **serviceInstanceCode**: string — The code of service instance
- **serviceTemplateCode**: string — The code of service template
- **productVersionId**: integer (int64) — The id of product version
- **offerServiceTemplateId**: integer (int64) — The id of offer service template
- **taxAccountingCode**: string — The Tax Accounting Code
- **accessPoint**: string — The access point
- **rawAmount**: number — The raw amount
- **orderLotCode**: string — The orderLot code
- **commercialOrderId**: integer (int64) — The id of the commercial order
- **taxRecalculated**: boolean — the tax recalculated
- **discountPlanCode**: string — The code of discount plan
- **invoiceId**: integer (int64) — The id of the invoice
- **taxMode**: string — The Tax Mode
- **prestation**: string — The prestation
- **taxCode**: string — The code of tax
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **billingAccountCode**: string — The code of billing account
- **orderNumber**: string — The order number
- **quantity**: number — The quantity
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **amountWithoutTax**: number — The amount without tax
- **offerTemplateCode**: string — The code of offer template
- **subscriptionCode**: string — The code of subscription
- **unitPrice**: number — The unit price
- **orderRef**: string — The order reference
- **taxRate**: number — The tax rate
- **customFields**: CustomFieldsDto
- **discountRate**: number — The discount rate
- **discountAmount**: number — The discount amount
- **valueDate**: string (date-time) — The date value
- **productCode**: string — The code of product
- **label**: string — The label for invoice line
- **description**: string — The description
- **status**: string — the status (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### BillingRun
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **processDate**: string (date-time)
- **status**: string (Valeurs: NEW, PREINVOICED, PREVALIDATED, CANCELED, INVOICES_GENERATED, POSTINVOICED, POSTVALIDATED, VALIDATED, CANCELLING, REJECTED, CREATING_INVOICE_LINES, INVOICE_LINES_CREATED, INVOICES_CREATED, MINIMUM_ADDED, THRESHOLD_CHECKED, DISCOUNT_ADDED, TAX_COMPUTED, DRAFT_INVOICES)
- **statusDate**: string (date-time)
- **billingCycle**: BillingCycle
- **billingAccountNumber**: integer (int32)
- **billableBillingAcountNumber**: integer (int32)
- **producibleInvoiceNumber**: integer (int32)
- **producibleAmountWithoutTax**: number
- **producibleAmountTax**: number
- **producibleAmountWithTax**: number
- **prAmountWithoutTax**: number
- **prAmountWithTax**: number
- **prAmountTax**: number
- **invoices**: Array<Invoice>
- **billingRunLists**: Array<BillingRunList>
- **billableBillingAccounts**: Array<BillingAccount>
- **processType**: string (Valeurs: AUTOMATIC, MANUAL, FULL_AUTOMATIC)
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **invoiceDate**: string (date-time)
- **lastTransactionDate**: string (date-time)
- **rejectionReason**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **currency**: Currency
- **country**: Country
- **language**: Language
- **selectedBillingAccounts**: string
- **preInvoicingReports**: PreInvoicingReportsDTO
- **postInvoicingReports**: PostInvoicingReportsDTO
- **rejectedBillingAccounts**: Array<RejectedBillingAccount>
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **referenceDate**: string (Valeurs: TODAY, NEXT_INVOICE_DATE, LAST_TRANSACTION_DATE, END_DATE)
- **skipValidationScript**: boolean
- **collectionDate**: string (date-time)
- **computeDatesAtValidation**: boolean
- **nextBillingRun**: BillingRun
- **minimumApplied**: boolean
- **thresholdChecked**: boolean
- **discountApplied**: boolean
- **rejectAutoAction**: string (Valeurs: CANCEL, MOVE, MANUAL_ACTION, AUTOMATIC_VALIDATION)
- **suspectAutoAction**: string (Valeurs: CANCEL, MOVE, MANUAL_ACTION, AUTOMATIC_VALIDATION)
- **filters**: object
- **exceptionalRTIds**: Array<integer (int64)>
- **exceptionalILIds**: Array<integer (int64)>
- **invoiceType**: InvoiceType
- **runType**: string (Valeurs: CYCLE, EXCEPTIONAL)
- **xmlJobExecutionResultId**: integer (int64)
- **pdfJobExecutionResultId**: integer (int64)
- **descriptionI18n**: object
- **isQuarantine**: boolean
- **originBillingRun**: BillingRun
- **jobExecutions**: Array<JobExecutionResultImpl>
- **generateAO**: boolean
- **exceptionalBR**: boolean
- **invoiceNumber**: integer (int32)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **descriptionOrCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### BillingCycle
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **billingTemplateNameEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **calendar**: Calendar
- **lastTransactionDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **lastTransactionDateEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceDateProductionDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoicingThreshold**: number
- **invoiceType**: InvoiceType
- **dueDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **invoiceTypeEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **type**: string (Valeurs: BILLINGACCOUNT, SUBSCRIPTION, ORDER)
- **scriptInstance**: ScriptInstance
- **referenceDate**: string (Valeurs: TODAY, NEXT_INVOICE_DATE, LAST_TRANSACTION_DATE, END_DATE)
- **checkThreshold**: string (Valeurs: BEFORE_DISCOUNT, AFTER_DISCOUNT, POSITIVE_RT, POSITIVE_IL)
- **thresholdPerEntity**: boolean
- **descriptionI18n**: object
- **splitPerPaymentMethod**: boolean
- **collectionDateDelayEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **computeDatesAtValidation**: boolean
- **billingRunValidationScript**: ScriptInstance
- **filters**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Invoice
Type: object
Propriétés:
- **discountAmountWithoutTax**: number — discount amount without tax
- **productDate**: string (date-time) — The product date
- **adjustedInvoice**: Resource
- **externalRef**: string — The external ref
- **xmlDate**: string (date-time) — The xml date
- **pdfDate**: string (date-time) — The pdf date
- **emailSentDate**: string (date-time) — The date of email sent
- **rawAmount**: number — The raw amount
- **previousInvoiceNumber**: string — The previous invoice number
- **paymentStatusDate**: string (date-time) — The date of the payment status
- **amountWithoutTaxBeforeDiscount**: number — Amount without tax before discount
- **temporaryInvoiceNumber**: string — The temporary invoice number
- **invoiceLines**: Array<InvoiceLine> — The list of the invoice lines
- **commercialOrder**: Resource
- **cpqQuote**: Resource
- **invoiceTypeCode**: string — The invoice type code
- **categoryInvoiceAgregates**: Array<CategoryInvoiceAgregate> — The list of the caregory invoice agregates
- **listLinkedInvoices**: Array<integer (int64)> — The list of linked invoices
- **invoiceLinesTolink**: Array<integer (int64)> — The list of the invoice lines to link
- **invoiceAdjustmentCurrentSellerNb**: integer (int64) — The invoice adjustment current seller
- **invoiceAdjustmentCurrentProviderNb**: integer (int64) — The invoice adjustment current provider
- **dueBalance**: number — The due balance
- **discount**: number — The discount if any
- **rejectReason**: string — The rejected reason
- **paymentMethodType**: string — The payment method type (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **dueDate**: string (date-time) — The Due date
- **paymentMethod**: Resource
- **tradingCountry**: Resource
- **statusDate**: string (date-time) — The date of the status
- **sellerCode**: string — The seller code
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **billingAccountCode**: string — The billing account code
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **amountWithoutTax**: number — The amount without tax
- **paymentStatus**: string — The payement status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **iban**: string — The iban
- **alias**: string — The alias
- **subscription**: Resource
- **tradingLanguage**: Resource
- **quote**: Resource
- **billingRun**: Resource
- **xmlFilename**: string — The xml file name for generated invoice xml
- **pdfFilename**: string — The pdf file name for generated invoice PDF
- **amount**: number — The amount of the invoice
- **customFields**: CustomFieldsDto
- **tradingCurrency**: Resource
- **invoiceDate**: string (date-time) — The invoice date
- **discountRate**: number — The discount rate
- **recordedInvoice**: Resource
- **netToPay**: number — The net to pay
- **invoiceNumber**: string — The invoice number
- **initialCollectionDate**: string (date-time) — The initial collection date
- **discountPlan**: Resource
- **discountAmount**: number — The discount amount
- **cfValues**: Resource
- **cfAccumulatedValues**: Resource
- **order**: Resource
- **description**: string — The description of the invoice
- **status**: string — The status of the invoice. (Valeurs: NEW, SUSPECT, REJECTED, DRAFT, CANCELED, VALIDATED)
- **comment**: string — The comment for the invoice
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **alreadyAppliedMinimum**: boolean — Indicate if the invoice is already applied minumun
- **alreadySent**: boolean — Indicate if the invoice is already sent
- **dontSend**: boolean — Indicate if the invoice doesnt send
- **detailedInvoice**: boolean — Indicate if the invoice is detailed
- **alreadyAddedDiscount**: boolean — Indicate if the invoice is discount already added
- **draft**: boolean — Indicate if the invoice is draft
- **prepaid**: boolean — Indicate if the invoice is a prepaid

### Resource
The Order attached to this invoice
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
- **amountTax**: number
- **amountWithTax**: number
- **amountWithoutTax**: number
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
- **quantity**: number — The quantity
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **amountWithoutTax**: number — The amount without tax
- **description**: string — The description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SubcategoryInvoiceAgregateAmount
List of amounts by tax
Type: object
Propriétés:
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **amountWithoutTax**: number — The amount without tax
- **tax**: Tax
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### BillingRunList
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **invoice**: boolean
- **billingRun**: BillingRun
- **billingAccount**: BillingAccount
- **ratedAmountWithoutTax**: number
- **ratedAmountWithTax**: number
- **ratedAmount2WithoutTax**: number
- **ratedAmountTax**: number
- **transient**: boolean

### PreInvoicingReportsDTO
Type: object
Propriétés:
- **billingCycleCode**: string
- **billingAccountNumber**: integer (int32)
- **billableBillingAccountNumber**: integer (int32)
- **lastTransactionDate**: string (date-time)
- **invoiceDate**: string (date-time)
- **amoutWitountTax**: number
- **checkBANumber**: integer (int32)
- **directDebitBANumber**: integer (int32)
- **tipBANumber**: integer (int32)
- **wiretransferBANumber**: integer (int32)
- **creditDebitCardBANumber**: integer (int32)
- **checkBillableBANumber**: integer (int32)
- **directDebitBillableBANumber**: integer (int32)
- **tipBillableBANumber**: integer (int32)
- **wiretransferBillableBANumber**: integer (int32)
- **creditDebitCardBillableBANumber**: integer (int32)
- **checkBillableBAAmountHT**: number
- **directDebitBillableBAAmountHT**: number
- **tipBillableBAAmountHT**: number
- **wiretransferBillableBAAmountHT**: number
- **creditDebitCardBillableBAAmountHT**: number
- **taxesAmount**: number
- **subCategoriesAmountHT**: number

### PostInvoicingReportsDTO
Type: object
Propriétés:
- **invoicesNumber**: integer (int32)
- **positiveInvoicesNumber**: integer (int32)
- **negativeInvoicesNumber**: integer (int32)
- **globalAmount**: number
- **positiveInvoicesAmountHT**: number
- **positiveInvoicesTaxAmount**: number
- **positiveInvoicesAmount**: number
- **negativeInvoicesAmountHT**: number
- **negativeInvoicesTaxAmount**: number
- **negativeInvoicesAmount**: number
- **emptyInvoicesNumber**: integer (int32)
- **electronicInvoicesNumber**: integer (int32)
- **checkInvoicesNumber**: integer (int32)
- **directDebitInvoicesNumber**: integer (int32)
- **tipInvoicesNumber**: integer (int32)
- **wiretransferInvoicesNumber**: integer (int32)
- **creditDebitCardInvoicesNumber**: integer (int32)
- **npmInvoicesNumber**: integer (int32)
- **checkAmuontHT**: number
- **directDebitAmuontHT**: number
- **tipAmuontHT**: number
- **wiretransferAmuontHT**: number
- **creditDebitCardAmountHT**: number
- **npmAmountHT**: number
- **checkAmuont**: number
- **directDebitAmuont**: number
- **tipAmuont**: number
- **wiretransferAmuont**: number
- **creditDebitCardAmount**: number
- **npmAmount**: number

### RejectedBillingAccount
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **billingAccount**: BillingAccount
- **billingRun**: BillingRun
- **rejectCause**: string (Contraintes: longueur min: 0 · longueur max: 3000)
- **transient**: boolean

### JobExecutionResultImpl
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **jobInstance**: JobInstance
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **nbItemsToProcess**: integer (int64)
- **nbItemsCorrectlyProcessed**: integer (int64)
- **nbItemsProcessedWithWarning**: integer (int64)
- **nbItemsProcessedWithError**: integer (int64)
- **status**: string (Valeurs: RUNNING, COMPLETED, COMPLETED_MORE, CANCELLED, FAILED)
- **jobLauncherEnum**: string (Valeurs: TIMER, GUI, INCOMPLETE, TRIGGER, API)
- **warnings**: Array<string>
- **errors**: Array<string>
- **report**: string
- **moreToProcess**: boolean
- **nbItemsProcessed**: integer (int64)
- **transient**: boolean

### JobInstance
Type: object
Champs obligatoires: code, disabled, jobTemplate, limitToSingleNode, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **jobTemplate**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parametres**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **jobCategoryEnum**: JobCategoryEnum
- **executionResults**: Array<JobExecutionResultImpl>
- **timerEntity**: TimerEntity
- **queryScheduler**: QueryScheduler
- **followingJob**: JobInstance
- **runOnNodes**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **limitToSingleNode**: boolean
- **excludeInvoicesWithoutAmount**: boolean
- **verboseReport**: boolean
- **stopOnError**: boolean
- **jobSpeed**: string (Valeurs: SLOW, NORMAL, FAST, VERY_FAST)
- **providerCode**: string
- **runTimeValues**: object
- **runTimeParametres**: string
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### JobCategoryEnum
Type: object
Propriétés:
- **label**: string
- **name**: string
- **id**: integer (int32)

### TimerEntity
Type: object
Champs obligatoires: code, dayOfMonth, dayOfWeek, disabled, hour, minute, month, second, year
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **year**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **month**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **dayOfMonth**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **dayOfWeek**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **hour**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **minute**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **second**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **start**: string (date-time)
- **end**: string (date-time)
- **jobInstances**: Array<JobInstance>
- **timerSchedule**: string
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QueryScheduler
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **fileFormat**: string
- **usersToNotify**: Array<User>
- **emailsToNotify**: Array<string>
- **queryTimer**: QueryTimer
- **reportQuery**: ReportQuery
- **jobInstance**: JobInstance
- **isQueryScheduler**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### User
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **name**: Name
- **userName**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **email**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **password**: string
- **roles**: Array<string>
- **userRoles**: Array<Role>
- **userLevel**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **code**: string
- **description**: string
- **nameOrUsername**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **referenceDescription**: string
- **referenceCode**: string
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### Role
Type: object
Champs obligatoires: name, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **name**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **clientRole**: boolean
- **parentRole**: Role
- **roles**: Array<Role>
- **replicateInKc**: boolean
- **descriptionOrName**: string
- **referenceDescription**: string
- **referenceCode**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### QueryTimer
Type: object
Champs obligatoires: everyDayOfMonth, everyDayOfWeek, everyHour, everyMinute, everyMonth, everySecond
Propriétés:
- **year**: string
- **month**: string
- **everyMonth**: boolean
- **dayOfMonth**: string
- **everyDayOfMonth**: boolean
- **dayOfWeek**: string
- **everyDayOfWeek**: boolean
- **hour**: string
- **everyHour**: boolean
- **minute**: string
- **everyMinute**: boolean
- **second**: string
- **everySecond**: boolean

### ReportQuery
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **targetEntity**: string
- **visibility**: string (Valeurs: PUBLIC, PRIVATE, PROTECTED)
- **fields**: Array<string>
- **filters**: object
- **generatedQuery**: string
- **sortBy**: string
- **sortOrder**: string (Valeurs: DESCENDING, ASCENDING)
- **queryParameters**: object
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QuoteVersion
Type: object
Champs obligatoires: quote, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **quote**: CpqQuote
- **quoteVersion**: integer (int32)
- **status**: string (Valeurs: DRAFT, PUBLISHED, CLOSED)
- **statusDate**: string (date-time)
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **invoicingPlan**: InvoicingPlan
- **shortDescription**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **quoteOffers**: Array<QuoteOffer>
- **quoteArticleLines**: Array<QuoteArticleLine>
- **discountPlan**: DiscountPlan
- **xmlFilename**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **pdfFilename**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **contract**: Contract
- **comment**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **medias**: Array<Media>
- **quotePrices**: Array<QuotePrice>
- **referenceDescription**: string
- **referenceCode**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### InvoicingPlan
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **invoicingPlanItems**: Array<InvoicingPlanItem>
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### InvoicingPlanItem
Type: object
Champs obligatoires: advancement, billingPlan, code, disabled, rateToBill, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **billingPlan**: InvoicingPlan
- **advancement**: integer (int32)
- **rateToBill**: number
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QuoteOffer
Type: object
Champs obligatoires: code, offerTemplate, quoteVersion, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **offerTemplate**: OfferTemplate
- **billableAccount**: BillingAccount
- **quoteVersion**: QuoteVersion
- **quoteLot**: QuoteLot
- **quoteProduct**: Array<QuoteProduct>
- **quoteAttributes**: Array<QuoteAttribute>
- **position**: integer (int32)
- **discountPlan**: DiscountPlan
- **sequence**: integer (int32)
- **quotePrices**: Array<QuotePrice>
- **deliveryDate**: string (date-time)
- **userAccount**: UserAccount
- **quoteLineType**: string (Valeurs: CREATE, AMEND, TERMINATE)
- **subscription**: Subscription
- **contract**: Contract
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QuoteLot
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **name**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **duration**: integer (int32)
- **executionDate**: string (date-time)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QuoteAttribute
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **attribute**: Attribute
- **parentAttributeValue**: QuoteAttribute
- **assignedAttributeValue**: Array<QuoteAttribute>
- **stringValue**: string
- **dateValue**: string (date-time)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **quoteProduct**: QuoteProduct
- **quoteOffer**: QuoteOffer
- **value**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### QuotePrice
Type: object
Champs obligatoires: quoteVersion
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **quoteArticleLine**: QuoteArticleLine
- **quoteVersion**: QuoteVersion
- **priceLevelEnum**: string (Valeurs: ORDER, PRODUCT, QUOTE, OFFER)
- **priceTypeEnum**: string (Valeurs: RECURRING, ONE_SHOT_SUBSCRIPTION, ONE_SHOT_TERMINATION, ONE_SHOT_OTHER, USAGE, FIXED_DISCOUNT)
- **amountWithTax**: number
- **unitPriceWithoutTax**: number
- **amountWithoutTax**: number
- **amountWithoutTaxWithoutDiscount**: number
- **taxAmount**: number
- **taxRate**: number
- **priceOverCharged**: boolean
- **currencyCode**: string
- **recurrenceDuration**: integer (int64)
- **recurrencePeriodicity**: string
- **chargeTemplate**: ChargeTemplate
- **quoteOffer**: QuoteOffer
- **quantity**: number
- **discountedQuotePrice**: QuotePrice
- **uuid**: string
- **discountPlan**: DiscountPlan
- **discountValue**: number
- **discountPlanType**: string (Valeurs: PERCENTAGE, FIXED)
- **discountPlanItem**: DiscountPlanItem
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **discountedAmount**: number
- **sequence**: integer (int32)
- **pricePlanMatrixVersion**: PricePlanMatrixVersion
- **pricePlanMatrixLine**: PricePlanMatrixLine
- **contractItem**: ContractItem
- **tax**: Tax
- **transient**: boolean

### QuoteArticleLine
Type: object
Champs obligatoires: accountingArticle, billableAccount
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **quoteProduct**: QuoteProduct
- **billableAccount**: BillingAccount
- **quoteLot**: QuoteLot
- **accountingArticle**: AccountingArticle
- **quantity**: number
- **serviceQuantity**: number
- **quotePrices**: Array<QuotePrice>
- **quoteVersion**: QuoteVersion
- **transient**: boolean

### SubscriptionTerminationReason
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **applyAgreement**: boolean
- **invoiceAgreementImmediately**: boolean
- **applyReimbursment**: boolean
- **applyTerminationCharges**: boolean
- **overrideProrata**: string (Valeurs: NO_OVERRIDE, PRORATA, NO_PRORATA)
- **reimburseOneshots**: boolean
- **descriptionI18n**: object
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ChargeInstance
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 1)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **terminationDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **chargeTemplate**: ChargeTemplate
- **invoicingCalendar**: Calendar
- **chargeDate**: string (date-time)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **walletOperations**: Array<WalletOperation>
- **seller**: Seller
- **userAccount**: UserAccount
- **subscription**: Subscription
- **currency**: TradingCurrency
- **country**: TradingCountry
- **walletInstances**: Array<WalletInstance>
- **serviceInstance**: ServiceInstance
- **prepaidWalletInstances**: Array<WalletInstance>
- **prepaid**: boolean
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulatorCounterInstances**: Array<CounterInstance>
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **taxClassResolved**: TaxClass
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **walletOperationsSorted**: Array<WalletOperation>
- **counter**: CounterInstance
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### WalletOperation
Type: object
Champs obligatoires: billingAccount, quantity, tax, taxPercent, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **code**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **description**: string
- **created**: string (date-time)
- **updated**: string (date-time)
- **wallet**: WalletInstance
- **oldWallet**: WalletInstance
- **operationDate**: string (date-time)
- **invoicingDate**: string (date-time)
- **type**: string (Valeurs: CREDIT, DEBIT)
- **chargeInstance**: ChargeInstance
- **currency**: Currency
- **tax**: Tax
- **taxPercent**: number
- **taxClass**: TaxClass
- **unitAmountWithoutTax**: number
- **unitAmountWithTax**: number
- **unitAmountTax**: number
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **amountTax**: number
- **counter**: CounterInstance
- **parameter1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameterExtra**: string (Contraintes: longueur min: 0 · longueur max: 4000)
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **offerCode**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **seller**: Seller
- **priceplan**: PricePlanMatrix
- **reratedWalletOperation**: WalletOperation
- **refundsWalletOperation**: WalletOperation
- **inputUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **inputQuantity**: number
- **edr**: EDR
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **rawAmountWithoutTax**: number
- **rawAmountWithTax**: number
- **invoiceSubCategory**: InvoiceSubCategory
- **subscription**: Subscription
- **serviceInstance**: ServiceInstance
- **billingAccount**: BillingAccount
- **userAccount**: UserAccount
- **offerTemplate**: OfferTemplate
- **ratedTransaction**: RatedTransaction
- **status**: string (Valeurs: OPEN, TREATED, CANCELED, RESERVED, F_TO_RERATE, TO_RERATE, RERATED, SCHEDULED, REJECTED)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **accountingCode**: AccountingCode
- **fullRatingPeriod**: DatePeriod
- **chargeMode**: string (Valeurs: ChargeApplicationModeEnum.SUBSCRIPTION, ChargeApplicationModeEnum.AGREEMENT, ChargeApplicationModeEnum.REIMBURSMENT, ChargeApplicationModeEnum.RERATING, ChargeApplicationModeEnum.RERATING_REIMBURSEMENT)
- **sortIndex**: integer (int32)
- **rejectReason**: string
- **infoOrder**: OrderInfo
- **accountingArticle**: AccountingArticle
- **discountedWalletOperation**: integer (int64)
- **discountPlan**: DiscountPlan
- **discountValue**: number
- **discountPlanType**: string (Valeurs: PERCENTAGE, FIXED)
- **discountPlanItem**: DiscountPlanItem
- **discountedAmount**: number
- **sequence**: integer (int32)
- **overrodePrice**: boolean
- **rulesContract**: Contract
- **pricePlanMatrixVersion**: PricePlanMatrixVersion
- **pricePlanMatrixLine**: PricePlanMatrixLine
- **contract**: Contract
- **contractLine**: ContractItem
- **discountedWO**: WalletOperation
- **orderInfo**: OrderInfo
- **applyInAdvance**: boolean
- **unratedClone**: WalletOperation
- **clone**: WalletOperation
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### WalletInstance
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **walletTemplate**: WalletTemplate
- **userAccount**: UserAccount
- **creditExpiryDate**: string (date-time)
- **nextMatchingDate**: string (date-time)
- **lowBalanceLevel**: number
- **rejectLevel**: number
- **operations**: Array<WalletOperation>
- **ratedTransactions**: Array<RatedTransaction>
- **prepaid**: boolean
- **created**: string (date-time)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### RatedTransaction
Type: object
Champs obligatoires: billingAccount, seller, status, tax, taxPercent, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **created**: string (date-time)
- **wallet**: WalletInstance
- **billingAccount**: BillingAccount
- **originBillingAccount**: BillingAccount
- **userAccount**: UserAccount
- **seller**: Seller
- **usageDate**: string (date-time)
- **invoiceSubCategory**: InvoiceSubCategory
- **code**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **rejectReason**: string (Contraintes: longueur min: 0 · longueur max: 4000)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 4000)
- **unityDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **unitAmountWithoutTax**: number
- **unitAmountWithTax**: number
- **unitAmountTax**: number
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **amountTax**: number
- **doNotTriggerInvoicing**: boolean
- **parameter1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **parameterExtra**: string (Contraintes: longueur min: 0 · longueur max: 4000)
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **priceplan**: PricePlanMatrix
- **edr**: EDR
- **adjustedRatedTx**: RatedTransaction
- **subscription**: Subscription
- **chargeInstance**: ChargeInstance
- **tax**: Tax
- **taxPercent**: number
- **offerTemplate**: OfferTemplate
- **serviceInstance**: ServiceInstance
- **billingRun**: BillingRun
- **invoice**: Invoice
- **invoiceAgregateF**: SubCategoryInvoiceAgregate
- **status**: string (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED, PROCESSED)
- **updated**: string (date-time)
- **inputQuantity**: number
- **rawAmountWithoutTax**: number
- **rawAmountWithTax**: number
- **taxClass**: TaxClass
- **taxRecalculated**: boolean
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **sortIndex**: integer (int32)
- **type**: string (Valeurs: REGULAR, MINIMUM, AGGREGATED, MANUAL)
- **accountingCode**: AccountingCode
- **invoicingDate**: string (date-time)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **accountingArticle**: AccountingArticle
- **infoOrder**: OrderInfo
- **invoiceLine**: InvoiceLine
- **discountPlan**: DiscountPlan
- **discountedRatedTransaction**: integer (int64)
- **discountValue**: number
- **discountPlanType**: string (Valeurs: PERCENTAGE, FIXED)
- **discountPlanItem**: DiscountPlanItem
- **rulesContract**: Contract
- **sequence**: integer (int32)
- **orderInfo**: OrderInfo
- **prepaid**: boolean
- **taxOverriden**: boolean
- **sellerId**: integer (int64)
- **subscriptionId**: integer (int64)
- **taxId**: integer (int64)
- **taxClassId**: integer (int64)
- **billingAccountId**: integer (int64)
- **invoiceSubCategoryId**: integer (int64)
- **walletId**: integer (int64)
- **userAccountId**: integer (int64)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### EDR
Type: object
Champs obligatoires: subscription
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **subscription**: Subscription
- **originBatch**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **originRecord**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **eventDate**: string (date-time)
- **quantity**: number
- **parameter1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter7**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter8**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **parameter9**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **dateParam1**: string (date-time)
- **dateParam2**: string (date-time)
- **dateParam3**: string (date-time)
- **dateParam4**: string (date-time)
- **dateParam5**: string (date-time)
- **decimalParam1**: number
- **decimalParam2**: number
- **decimalParam3**: number
- **decimalParam4**: number
- **decimalParam5**: number
- **created**: string (date-time)
- **updated**: string (date-time)
- **accessCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **headerEDR**: EDR
- **extraParameter**: string
- **status**: string (Valeurs: OPEN, RATED, REJECTED, MEDIATING, AGGREGATED, DUPLICATED, CANCELLED)
- **rejectReason**: string
- **timesTried**: integer (int32)
- **eventKey**: string
- **eventVersion**: integer (int32)
- **walletOperation**: WalletOperation
- **quantityLeftToRate**: number
- **statusDate**: string (date-time)
- **transient**: boolean

### OrderInfo
Type: object
Propriétés:
- **order**: CommercialOrder
- **productVersion**: ProductVersion

### CommercialOrder
Type: object
Champs obligatoires: billingAccount, code, orderDate, orderInvoiceType, orderProgress, progressDate, rateInvoiced, seller, status, statusDate, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **orderProgressTmp**: integer (int32)
- **seller**: Seller
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **label**: string
- **billingAccount**: BillingAccount
- **quote**: CpqQuote
- **contract**: Contract
- **orderType**: OrderType
- **invoicingPlan**: InvoicingPlan
- **status**: string
- **statusDate**: string (date-time)
- **orderProgress**: integer (int32)
- **rateInvoiced**: integer (int32)
- **progressDate**: string (date-time)
- **orderDate**: string (date-time)
- **deliveryDate**: string (date-time)
- **customerServiceBegin**: string (date-time)
- **customerServiceDuration**: integer (int32)
- **externalReference**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **salesPersonName**: string (Contraintes: longueur min: 0 · longueur max: 52)
- **orderParent**: Order
- **invoices**: Array<Invoice>
- **orderInvoiceType**: InvoiceType
- **userAccount**: UserAccount
- **access**: Access
- **offers**: Array<OrderOffer>
- **orderLots**: Array<OrderLot>
- **orderPrices**: Array<OrderPrice>
- **oneShotTotalAmount**: number
- **quoteVersion**: QuoteVersion
- **discountPlan**: DiscountPlan
- **billingCycle**: BillingCycle
- **billingRun**: BillingRun
- **totalInvoicingAmountWithoutTax**: number
- **totalInvoicingAmountWithTax**: number
- **totalInvoicingAmountTax**: number
- **parentCFEntities**: Array<ICustomFieldEntity>
- **transient**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string

### OrderType
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Order
Type: object
Champs obligatoires: code, orderDate, status, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalId**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **deliveryInstructions**: string
- **orderDate**: string (date-time)
- **requestedStartDate**: string (date-time)
- **startDate**: string (date-time)
- **requestedCompletionDate**: string (date-time)
- **expectedCompletionDate**: string (date-time)
- **completionDate**: string (date-time)
- **priority**: integer (int32)
- **category**: string
- **status**: string (Valeurs: IN_CREATION, ACKNOWLEDGED, IN_PROGRESS, CANCELLED, COMPLETED, REJECTED, PENDING, HELD, FAILED, WAITING, DEFERRED, PARTIAL)
- **statusMessage**: string
- **orderItems**: Array<OrderItem>
- **routedToUserGroup**: string
- **receivedFromApp**: string
- **invoices**: Array<Invoice>
- **dueDateDelayEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **paymentMethod**: PaymentMethod
- **quote**: Quote
- **billingCycle**: BillingCycle
- **billingRun**: BillingRun
- **emailTemplate**: EmailTemplate
- **mailingType**: string (Valeurs: MANUAL, AUTO, BATCH)
- **ccedEmails**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **email**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **electronicBilling**: boolean
- **totalInvoicingAmountWithoutTax**: number
- **totalInvoicingAmountWithTax**: number
- **totalInvoicingAmountTax**: number
- **minInvoiceLines**: Array<InvoiceLine>
- **shippingAddress**: Address
- **userAccounts**: Array<UserAccount>
- **transient**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string

### OrderItem
Type: object
Champs obligatoires: action, code, itemId, order, status, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **order**: Order
- **itemId**: string
- **action**: string (Valeurs: ADD, MODIFY, DELETE)
- **userAccount**: UserAccount
- **orderItemProductOfferings**: Array<OrderItemProductOffering>
- **source**: string
- **status**: string (Valeurs: IN_CREATION, ACKNOWLEDGED, IN_PROGRESS, CANCELLED, COMPLETED, REJECTED, PENDING, HELD, FAILED, WAITING, DEFERRED, PARTIAL)
- **productInstances**: Array<ProductInstance>
- **subscription**: Subscription
- **shippingAddress**: Address
- **orderHistories**: Array<OrderHistory>
- **orderItemDto**: object
- **mainOffering**: ProductOffering
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OrderItemProductOffering
Type: object
Champs obligatoires: itemOrder, orderItem, productOffering
Propriétés:
- **id**: object
- **orderItem**: OrderItem
- **productOffering**: ProductOffering
- **itemOrder**: integer (int32)
- **transient**: boolean

### ProductInstance
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **userAccount**: UserAccount
- **subscription**: Subscription
- **productTemplate**: ProductTemplate
- **applicationDate**: string (date-time)
- **productChargeInstances**: Array<ProductChargeInstance>
- **quantity**: number
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **seller**: Seller
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ProductChargeInstance
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 1)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **terminationDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **chargeTemplate**: ChargeTemplate
- **invoicingCalendar**: Calendar
- **chargeDate**: string (date-time)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **walletOperations**: Array<WalletOperation>
- **seller**: Seller
- **userAccount**: UserAccount
- **subscription**: Subscription
- **currency**: TradingCurrency
- **country**: TradingCountry
- **walletInstances**: Array<WalletInstance>
- **serviceInstance**: ServiceInstance
- **prepaidWalletInstances**: Array<WalletInstance>
- **prepaid**: boolean
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulatorCounterInstances**: Array<CounterInstance>
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **taxClassResolved**: TaxClass
- **productChargeTemplate**: ProductChargeTemplate
- **productInstance**: ProductInstance
- **quantity**: number
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **walletOperationsSorted**: Array<WalletOperation>
- **counter**: CounterInstance
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CounterInstance
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **counterTemplate**: CounterTemplate
- **customer**: Customer
- **customerAccount**: CustomerAccount
- **userAccount**: UserAccount
- **billingAccount**: BillingAccount
- **subscription**: Subscription
- **serviceInstance**: ServiceInstance
- **counterPeriods**: Array<CounterPeriod>
- **usageChargeInstances**: Array<UsageChargeInstance>
- **chargeInstances**: Array<ChargeInstance>
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CounterTemplate
Type: object
Champs obligatoires: code, counterLevel, counterType, disabled
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **counterType**: string (Valeurs: USAGE, NOTIFICATION, USAGE_AMOUNT)
- **calendarCodeEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **calendar**: Calendar
- **ceiling**: number
- **unityDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **counterLevel**: string (Valeurs: SI, SU, UA, BA, CA, CUST)
- **ceilingExpressionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **notificationLevels**: string (Contraintes: longueur min: 0 · longueur max: 70)
- **accumulator**: boolean
- **accumulatorType**: string (Valeurs: MULTI_VALUE, SINGLE_VALUE)
- **filterEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **keyEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **valueEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### CounterPeriod
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **counterInstance**: CounterInstance
- **counterType**: string (Valeurs: USAGE, NOTIFICATION, USAGE_AMOUNT)
- **periodStartDate**: string (date-time)
- **periodEndDate**: string (date-time)
- **level**: number
- **value**: number
- **notificationLevels**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulator**: boolean
- **accumulatedValues**: object
- **accumulatorType**: string (Valeurs: MULTI_VALUE, SINGLE_VALUE)
- **notificationLevelsAsMap**: object
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### UsageChargeInstance
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 1)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **terminationDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **chargeTemplate**: ChargeTemplate
- **invoicingCalendar**: Calendar
- **chargeDate**: string (date-time)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **walletOperations**: Array<WalletOperation>
- **seller**: Seller
- **userAccount**: UserAccount
- **subscription**: Subscription
- **currency**: TradingCurrency
- **country**: TradingCountry
- **walletInstances**: Array<WalletInstance>
- **serviceInstance**: ServiceInstance
- **prepaidWalletInstances**: Array<WalletInstance>
- **prepaid**: boolean
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulatorCounterInstances**: Array<CounterInstance>
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **taxClassResolved**: TaxClass
- **counter**: CounterInstance
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **priority**: integer (int32)
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **walletOperationsSorted**: Array<WalletOperation>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OrderHistory
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **orderItem**: OrderItem
- **serviceInstance**: ServiceInstance
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **action**: string (Valeurs: ADD, MODIFY, DELETE)
- **eventDate**: string (date-time)
- **transient**: boolean

### PaymentMethod
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **alias**: string
- **preferred**: boolean
- **customerAccount**: CustomerAccount
- **paymentType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **userId**: string
- **info1**: string
- **info2**: string
- **info3**: string
- **info4**: string
- **info5**: string
- **tokenId**: string
- **token3DsId**: string
- **referenceDocument**: Document
- **action**: string
- **expired**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### Quote
Type: object
Champs obligatoires: code, quoteDate, status, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **externalId**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **quoteVersion**: string (Contraintes: longueur min: 0 · longueur max: 10)
- **notificationContact**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **quoteDate**: string (date-time)
- **validity**: DatePeriod
- **requestedCompletionDate**: string (date-time)
- **fulfillmentStartDate**: string (date-time)
- **completionDate**: string (date-time)
- **category**: string
- **status**: string (Valeurs: IN_PROGRESS, PENDING, CANCELLED, APPROVED, ACCEPTED, REJECTED)
- **statusMessage**: string
- **quoteItems**: Array<QuoteItem>
- **routedToUserGroup**: string
- **receivedFromApp**: string
- **userAccount**: UserAccount
- **invoices**: Array<Invoice>
- **order**: Order
- **generatePdf**: boolean
- **virtual**: boolean
- **userAccounts**: Array<UserAccount>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### QuoteItem
Type: object
Champs obligatoires: itemId, quote, status, userAccount
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **quote**: Quote
- **itemId**: string
- **quoteItemProductOfferings**: Array<QuoteItemProductOffering>
- **source**: string
- **status**: string (Valeurs: IN_PROGRESS, PENDING, CANCELLED, APPROVED, ACCEPTED, REJECTED)
- **userAccount**: UserAccount
- **quoteItemDto**: object
- **mainOffering**: ProductOffering
- **transient**: boolean

### QuoteItemProductOffering
Type: object
Champs obligatoires: itemOrder, productOffering, quoteItem
Propriétés:
- **id**: object
- **quoteItem**: QuoteItem
- **productOffering**: ProductOffering
- **itemOrder**: integer (int32)
- **transient**: boolean

### Access
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **accessUserId**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **subscription**: Subscription
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cacheKey**: string
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **active**: boolean
- **transient**: boolean

### OrderOffer
Type: object
Champs obligatoires: code, offerTemplate, order, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **order**: CommercialOrder
- **offerTemplate**: OfferTemplate
- **products**: Array<OrderProduct>
- **orderAttributes**: Array<OrderAttribute>
- **discountPlan**: DiscountPlan
- **quoteOffer**: QuoteOffer
- **deliveryDate**: string (date-time)
- **userAccount**: UserAccount
- **orderLineType**: string (Valeurs: CREATE, AMEND, TERMINATE)
- **subscription**: Subscription
- **terminationDate**: string (date-time)
- **terminationReason**: SubscriptionTerminationReason
- **contract**: Contract
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OrderProduct
Type: object
Champs obligatoires: order, quantity, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **order**: CommercialOrder
- **orderServiceCommercial**: OrderLot
- **orderOffer**: OrderOffer
- **productVersion**: ProductVersion
- **quantity**: number
- **orderAttributes**: Array<OrderAttribute>
- **discountPlan**: DiscountPlan
- **quoteProduct**: QuoteProduct
- **deliveryDate**: string (date-time)
- **productActionType**: string (Valeurs: CREATE, ACTIVATE, SUSPEND, TERMINATE, MODIFY)
- **terminationDate**: string (date-time)
- **terminationReason**: SubscriptionTerminationReason
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **serviceInstance**: ServiceInstance
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### OrderLot
Type: object
Champs obligatoires: code, order, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **order**: CommercialOrder
- **name**: string (Contraintes: longueur min: 0 · longueur max: 50)
- **quoteLot**: QuoteLot
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OrderAttribute
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **attribute**: Attribute
- **parentAttributeValue**: OrderAttribute
- **assignedAttributeValue**: Array<OrderAttribute>
- **stringValue**: string
- **dateValue**: string (date-time)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **commercialOrder**: CommercialOrder
- **orderLot**: OrderLot
- **orderProduct**: OrderProduct
- **accessPoint**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **orderOffer**: OrderOffer
- **value**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### OrderPrice
Type: object
Champs obligatoires: code, order
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **orderArticleLine**: OrderArticleLine
- **order**: CommercialOrder
- **priceLevelEnum**: string (Valeurs: ORDER, PRODUCT, QUOTE, OFFER)
- **priceTypeEnum**: string (Valeurs: RECURRING, ONE_SHOT_SUBSCRIPTION, ONE_SHOT_TERMINATION, ONE_SHOT_OTHER, USAGE, FIXED_DISCOUNT)
- **amountWithTax**: number
- **unitPriceWithoutTax**: number
- **amountWithoutTax**: number
- **amountWithoutTaxWithDiscount**: number
- **taxAmount**: number
- **taxRate**: number
- **priceOverCharged**: boolean
- **currencyCode**: string
- **recurrenceDuration**: integer (int64)
- **recurrencePeriodicity**: string
- **chargeTemplate**: ChargeTemplate
- **orderOffer**: OrderOffer
- **quantity**: number
- **discountedOrderPrice**: OrderPrice
- **discountPlan**: DiscountPlan
- **discountValue**: number
- **discountPlanType**: string (Valeurs: PERCENTAGE, FIXED)
- **discountPlanItem**: DiscountPlanItem
- **applyDiscountsOnOverridenPrice**: boolean
- **discountedAmount**: number
- **tax**: Tax
- **sequence**: integer (int32)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### OrderArticleLine
Type: object
Champs obligatoires: accountingArticle, code, order, quantity, quantityService
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **order**: CommercialOrder
- **orderCustomerService**: OrderLot
- **accountingArticle**: AccountingArticle
- **quantity**: number
- **quantityService**: number
- **orderProduct**: OrderProduct
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PaymentScheduleInstance
Type: object
Champs obligatoires: amount, calendar, code, disabled, endDate, paymentDayInMonth, paymentScheduleTemplate, serviceInstance, startDate, status, statusDate, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **status**: string (Valeurs: IN_PROGRESS, OBSOLETE, DONE, CANCELLED, TERMINATED)
- **statusDate**: string (date-time)
- **paymentScheduleTemplate**: PaymentScheduleTemplate
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **serviceInstance**: ServiceInstance
- **amount**: number
- **calendar**: Calendar
- **paymentDayInMonth**: integer (int32)
- **paymentScheduleInstanceItems**: Array<PaymentScheduleInstanceItem>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **active**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PaymentScheduleTemplate
Type: object
Champs obligatoires: advancePaymentInvoiceSubCategory, advancePaymentInvoiceType, amount, calendar, code, disabled, doPayment, generateAdvancePaymentInvoice, paymentDayInMonth, paymentLabel, serviceTemplate, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **paymentLabel**: string
- **paymentDayInMonth**: integer (int32)
- **amount**: number
- **calendar**: Calendar
- **serviceTemplate**: ServiceTemplate
- **advancePaymentInvoiceType**: InvoiceType
- **generateAdvancePaymentInvoice**: boolean
- **advancePaymentInvoiceSubCategory**: InvoiceSubCategory
- **doPayment**: boolean
- **paymentScheduleInstances**: Array<PaymentScheduleInstance>
- **applyAgreement**: boolean
- **scriptInstance**: ScriptInstance
- **amountEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **filterEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClass**: TaxClass
- **paymentDayInMonthEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **useBankingCalendar**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PaymentScheduleInstanceItem
Type: object
Champs obligatoires: disabled, dueDate, last, paymentScheduleInstance, requestPaymentDate
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **disabled**: boolean
- **paymentScheduleInstance**: PaymentScheduleInstance
- **dueDate**: string (date-time)
- **requestPaymentDate**: string (date-time)
- **recordedInvoice**: RecordedInvoice
- **invoice**: Invoice
- **last**: boolean
- **amount**: number
- **paid**: boolean
- **active**: boolean
- **transient**: boolean

### RecordedInvoice
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **matchingAmounts**: Array<MatchingAmount>
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **paymentHistories**: Array<PaymentHistory>
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **productionDate**: string (date-time)
- **invoiceDate**: string (date-time)
- **netToPay**: number
- **recordedInvoiceCatAgregates**: Array<RecordedInvoiceCatAgregate>
- **paymentScheduleInstanceItem**: PaymentScheduleInstanceItem
- **dunningDocument**: DunningDocument
- **invoice**: Invoice
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### MatchingAmount
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **matchingCode**: MatchingCode
- **accountOperation**: AccountOperation
- **matchingAmount**: number
- **transient**: boolean

### MatchingCode
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **matchingType**: string (Valeurs: A, M, A_TIP, A_DERICT_DEBIT)
- **matchingDate**: string (date-time)
- **matchingAmounts**: Array<MatchingAmount>
- **matchingAmountCredit**: number
- **matchingAmountDebit**: number
- **transient**: boolean

### DDRequestItem
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **amount**: number
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **dueDate**: string (date-time)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestLOT**: DDRequestLOT
- **accountOperations**: Array<AccountOperation>
- **errorMsg**: string (Contraintes: longueur min: 0 · longueur max: 1000)
- **automatedPayment**: AutomatedPayment
- **automatedRefund**: AutomatedRefund
- **rejectedFileName**: string (Contraintes: longueur min: 0 · longueur max: 1000)
- **transient**: boolean

### DDRequestLOT
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **fileName**: string
- **returnFileName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **sendDate**: string (date-time)
- **nbItemsOk**: integer (int32)
- **paymentCreated**: boolean
- **totalAmount**: number
- **ddrequestItems**: Array<DDRequestItem>
- **returnStatusCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **rejectedCause**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **nbItemsKo**: integer (int32)
- **ddRequestBuilder**: DDRequestBuilder
- **paymentOrRefundEnum**: string (Valeurs: PAYMENT, REFUND)
- **seller**: Seller
- **transient**: boolean

### DDRequestBuilder
Type: object
Champs obligatoires: code, disabled, paymentLevel, type, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **type**: string (Valeurs: CUSTOM, NATIF)
- **scriptInstance**: ScriptInstance
- **implementationClassName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **nbOperationPerFile**: integer (int64)
- **maxSizeFile**: integer (int64)
- **paymentLevel**: string (Valeurs: AO, CA)
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AutomatedPayment
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **paymentHistories**: Array<PaymentHistory>
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **dunningDocument**: DunningDocument
- **paymentOrder**: string
- **fees**: number
- **comment**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### RejectedPayment
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **paymentHistories**: Array<PaymentHistory>
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **rejectedType**: string (Valeurs: A, M)
- **rejectedDate**: string (date-time)
- **rejectedDescription**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **rejectedCode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **listAaccountOperationSupposedPaid**: Array<AccountOperation>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PaymentHistory
Type: object
Champs obligatoires: amountCts, customerAccountCode, operationCategory, operationDate, syncStatus
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **customerAccountCode**: string
- **customerAccountName**: string
- **sellerCode**: string
- **customerCode**: string
- **operationDate**: string (date-time)
- **lastUpdateDate**: string (date-time)
- **amountCts**: integer (int64)
- **syncStatus**: string (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **asyncStatus**: string (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **status**: string (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **externalPaymentId**: string
- **errorCode**: string
- **errorMessage**: string
- **errorType**: string (Valeurs: ERROR, REJECT)
- **paymentGatewayCode**: string
- **paymentMethodType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **paymentMethodName**: string
- **operationCategory**: string (Valeurs: DEBIT, CREDIT)
- **payment**: Payment
- **refund**: Refund
- **listAoPaid**: Array<AccountOperation>
- **transient**: boolean

### Payment
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **dunningDocument**: DunningDocument
- **paymentOrder**: string
- **fees**: number
- **comment**: string
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### JournalEntry
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **accountOperation**: AccountOperation
- **accountingCode**: AccountingCode
- **seller**: Seller
- **customerAccount**: CustomerAccount
- **direction**: string (Valeurs: DEBIT, CREDIT)
- **amount**: number
- **tax**: Tax
- **analyticCode1**: string
- **analyticCode2**: string
- **analyticCode3**: string
- **operationNumber**: integer (int64)
- **sellerCode**: string
- **clientUniqueId**: string
- **currency**: string
- **supportingDocumentRef**: Invoice
- **supportingDocumentType**: string
- **tradingCurrency**: string
- **tradingAmount**: number
- **auxiliaryAccountCode**: string
- **auxiliaryAccountLabel**: string
- **journalCode**: string
- **category**: string (Valeurs: ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSE)
- **account**: string
- **label**: string
- **customerCode**: string
- **customerName**: string
- **sellerName**: string
- **reference**: string
- **documentType**: string
- **matchingCode**: string
- **transient**: boolean

### DunningDocument
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **customerAccount**: CustomerAccount
- **subscription**: Subscription
- **dueInvoices**: Array<RecordedInvoice>
- **payments**: Array<Payment>
- **status**: string (Valeurs: OPEN, CLOSED)
- **paidAmount**: number
- **amountWithTax**: number
- **amountWithoutTax**: number
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### Refund
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AutomatedRefund
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **paymentHistories**: Array<PaymentHistory>
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### RecordedInvoiceCatAgregate
Type: object
Champs obligatoires: code, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dueDate**: string (date-time)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **transactionDate**: string (date-time)
- **transactionCategory**: string (Valeurs: DEBIT, CREDIT)
- **operationAction**: string (Valeurs: TO_REFUND, NONE)
- **reference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **accountingCode**: AccountingCode
- **accountingEntries**: Array<AccountingEntry>
- **accountCodeClientSide**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **amount**: number
- **amountWithoutTax**: number
- **taxAmount**: number
- **matchingAmount**: number
- **unMatchingAmount**: number
- **customerAccount**: CustomerAccount
- **matchingStatus**: string (Valeurs: O, L, P, C, I, R)
- **orderNumber**: string
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **bankLot**: string
- **bankReference**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **depositDate**: string (date-time)
- **bankCollectionDate**: string (date-time)
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **invoices**: Array<Invoice>
- **paymentInfo**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **paymentInfo6**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **billingAccountName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **ddRequestItem**: DDRequestItem
- **rejectedPayment**: RejectedPayment
- **seller**: Seller
- **subscription**: Subscription
- **collectionDate**: string (date-time)
- **accountingDate**: string (date-time)
- **journal**: Journal
- **status**: string (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED)
- **reason**: string (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **paymentAction**: string (Valeurs: PENDING_PAYMENT)
- **paymentDeferralCount**: integer (int32)
- **accountingExportFile**: string
- **accountingSchemeEntries**: Array<JournalEntry>
- **operationNumber**: integer (int64)
- **productionDate**: string (date-time)
- **invoiceDate**: string (date-time)
- **netToPay**: number
- **paymentScheduleInstanceItem**: PaymentScheduleInstanceItem
- **dunningDocument**: DunningDocument
- **invoice**: Invoice
- **recordedInvoice**: RecordedInvoice
- **categoryInvoiceAgregate**: CategoryInvoiceAgregate
- **subCategoryInvoiceAgregate**: SubCategoryInvoiceAgregate
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### AttributeInstance
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **attribute**: Attribute
- **parentAttributeValue**: AttributeInstance
- **assignedAttributeValue**: Array<AttributeInstance>
- **stringValue**: string
- **dateValue**: string (date-time)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **serviceInstance**: ServiceInstance
- **subscription**: Subscription
- **value**: object
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### RecurringChargeInstance
Type: object
Champs obligatoires: code, quantity, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 1)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **terminationDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **chargeTemplate**: ChargeTemplate
- **invoicingCalendar**: Calendar
- **chargeDate**: string (date-time)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **walletOperations**: Array<WalletOperation>
- **seller**: Seller
- **userAccount**: UserAccount
- **subscription**: Subscription
- **currency**: TradingCurrency
- **country**: TradingCountry
- **walletInstances**: Array<WalletInstance>
- **serviceInstance**: ServiceInstance
- **prepaidWalletInstances**: Array<WalletInstance>
- **prepaid**: boolean
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulatorCounterInstances**: Array<CounterInstance>
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **taxClassResolved**: TaxClass
- **recurringChargeTemplate**: RecurringChargeTemplate
- **subscriptionDate**: string (date-time)
- **nextChargeDate**: string (date-time)
- **chargedToDate**: string (date-time)
- **counter**: CounterInstance
- **quantity**: number
- **calendar**: Calendar
- **applyInAdvance**: boolean
- **chargeToDateOnTermination**: string (date-time)
- **anticipateEndOfSubscription**: boolean
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **walletOperationsSorted**: Array<WalletOperation>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### RecurringChargeTemplate
Type: object
Champs obligatoires: code, disabled, prorataOnPriceChange, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **productCharges**: Array<ProductChargeTemplateMapping>
- **type**: string (Valeurs: CREDIT, DEBIT)
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **amountEditable**: boolean
- **invoiceSubCategory**: InvoiceSubCategory
- **edrTemplates**: Array<TriggeredEDRTemplate>
- **inputUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **inputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **outputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **unitMultiplicator**: number
- **unitNbDecimal**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRule**: RevenueRecognitionRule
- **descriptionI18n**: object
- **filterExpression**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClass**: TaxClass
- **taxClassEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **ratingScript**: ScriptInstance
- **dropZeroWo**: boolean
- **sortIndexEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **attributes**: Array<Attribute>
- **roundingValuesComputed**: boolean
- **roundingUnityNbDecimal**: integer (int32)
- **roundingEdrNbDecimal**: integer (int32)
- **status**: string (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **internalNote**: string
- **quantityAttribute**: Attribute
- **applyContractOverRatingScript**: boolean
- **recurrenceType**: string (Valeurs: CALENDAR, PERIOD)
- **calendar**: Calendar
- **durationTermInMonth**: integer (int32)
- **subscriptionProrata**: boolean
- **terminationProrata**: boolean
- **prorataOnPriceChange**: boolean
- **applyInAdvance**: boolean
- **shareLevel**: string (Valeurs: PROVIDER, SELLER, CUSTOMER, CUSTOMER_ACCOUNT, BILLING_ACCOUNT, USER_ACCOUNT)
- **subscriptionProrataEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **terminationProrataEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **applyInAdvanceEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **durationTermInMonthEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **calendarCodeEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **applyTerminatedChargeToDateEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **attributeDuration**: Attribute
- **attributeCalendar**: Attribute
- **anticipateEndOfSubscription**: boolean
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TriggeredEDRTemplate
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **subscriptionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **meveoInstance**: MeveoInstance
- **conditionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **quantityEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **param1El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **param2El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **param3El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **param4El**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **opencellInstanceEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **triggeredEdrScript**: ScriptInstance
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### MeveoInstance
Type: object
Champs obligatoires: code, url
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **user**: User
- **customer**: Customer
- **productName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **productVersion**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **owner**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **md5**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **status**: string (Valeurs: UNKNOWN, PARENT, CHILD, PARTNER)
- **creationDate**: string (date-time)
- **updateDate**: string (date-time)
- **keyEntreprise**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **macAddress**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **machineVendor**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **installationMode**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **nbCores**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **memory**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **hdSize**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **osName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **osVersion**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **osArch**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **javaVmVersion**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **javaVmName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **javaVendor**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **javaVersion**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **asVendor**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **asVersion**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **url**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **authUsername**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **authPasswordDB**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **authPassword**: string
- **authPasswordKS**: string
- **clientId**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **clientSecret**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **authenticationType**: string (Valeurs: BASIC_AUTHENTICATION, OAUTH2)
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### SubscriptionChargeInstance
Type: object
Champs obligatoires: code, quantity, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 1)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **terminationDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **chargeTemplate**: ChargeTemplate
- **invoicingCalendar**: Calendar
- **chargeDate**: string (date-time)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **walletOperations**: Array<WalletOperation>
- **seller**: Seller
- **userAccount**: UserAccount
- **subscription**: Subscription
- **currency**: TradingCurrency
- **country**: TradingCountry
- **walletInstances**: Array<WalletInstance>
- **serviceInstance**: ServiceInstance
- **prepaidWalletInstances**: Array<WalletInstance>
- **prepaid**: boolean
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulatorCounterInstances**: Array<CounterInstance>
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **taxClassResolved**: TaxClass
- **quantity**: number
- **counter**: CounterInstance
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **walletOperationsSorted**: Array<WalletOperation>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### TerminationChargeInstance
Type: object
Champs obligatoires: code, quantity, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 1)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **terminationDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **chargeTemplate**: ChargeTemplate
- **invoicingCalendar**: Calendar
- **chargeDate**: string (date-time)
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **criteria3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **walletOperations**: Array<WalletOperation>
- **seller**: Seller
- **userAccount**: UserAccount
- **subscription**: Subscription
- **currency**: TradingCurrency
- **country**: TradingCountry
- **walletInstances**: Array<WalletInstance>
- **serviceInstance**: ServiceInstance
- **prepaidWalletInstances**: Array<WalletInstance>
- **prepaid**: boolean
- **orderNumber**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **accumulatorCounterInstances**: Array<CounterInstance>
- **applyDiscountsOnOverridenPrice**: boolean
- **overchargedUnitAmountWithoutTax**: number
- **taxClassResolved**: TaxClass
- **quantity**: number
- **counter**: CounterInstance
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **walletOperationsSorted**: Array<WalletOperation>
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### DiscountPlanInstance
Type: object
Champs obligatoires: uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **discountPlan**: DiscountPlan
- **billingAccount**: BillingAccount
- **subscription**: Subscription
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **status**: string (Valeurs: ACTIVE, APPLIED, IN_USE, EXPIRED)
- **statusDate**: string (date-time)
- **applicationCount**: integer (int64)
- **serviceInstance**: ServiceInstance
- **discountPlanInstanceStatus**: DiscountPlan
- **parentCFEntities**: Array<ICustomFieldEntity>
- **valid**: boolean
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### PaymentPlanPolicy
Type: object
Champs obligatoires: defaultInterestRate
Propriétés:
- **minAllowedReceivableAmount**: number
- **maxAllowedReceivableAmount**: number
- **minInstallmentAmount**: number
- **theresHoldForApproval**: number
- **maxPaymentPlanDuration**: integer (int32)
- **defaultInstallmentCount**: integer (int32)
- **defaultFeePerInstallmentPlan**: integer (int32)
- **installmentAmountRounding**: integer (int32)
- **splitEvenly**: boolean
- **allowCustomInstallmentPlan**: boolean
- **addInterestRate**: boolean
- **addInstallmentFee**: boolean
- **defaultBlockPayments**: boolean
- **requireInternalApproval**: boolean
- **defaultInterestRate**: integer (int32)
- **defaultRecurrenceUnit**: string (Valeurs: MONTH, DAY)
- **actionOnRemainingAmount**: string (Valeurs: FIRST, LAST, ADDITIONAL)
- **clearingPriority**: string (Valeurs: NEWEST, OLDEST, SMALLEST, BIGGEST)
- **defaultStartingDateOfPlan**: string (Valeurs: TODAY, LAST_DAY_OF_CURRENT_MONTH, FIRST_DAY_OF_NEXT_MONTH)
- **allowedPaymentMethods**: Array<string>
- **dunningDefaultPauseReason**: DunningPauseReason
- **allowedCreditCategories**: Array<CreditCategory>

### DunningPauseReason
Type: object
Champs obligatoires: dunningSettings, pauseReason
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **pauseReason**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **dunningSettings**: DunningSettings
- **transient**: boolean

### DunningSettings
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **dunningMode**: string (Valeurs: CUSTOMER_LEVEL, INVOICE_LEVEL)
- **maxDunningLevels**: integer (int32)
- **maxDaysOutstanding**: integer (int32)
- **allowInterestForDelay**: boolean
- **interestForDelayRate**: number
- **allowDunningCharges**: boolean
- **applyDunningChargeFxExchangeRate**: boolean
- **accountingArticle**: AccountingArticle
- **dunningAgents**: Array<DunningAgent>
- **dunningCollectionPlanStatuses**: Array<DunningCollectionPlanStatus>
- **dunningPauseReasons**: Array<DunningPauseReason>
- **dunningPaymentRetries**: Array<DunningPaymentRetry>
- **dunningStopReasons**: Array<DunningStopReason>
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### DunningAgent
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **external**: boolean
- **collectionAgency**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **agentFirstNameItem**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **agentLastNameItem**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **agentEmailItem**: string (Contraintes: longueur min: 0 · longueur max: 100)
- **dunningSettings**: DunningSettings
- **transient**: boolean

### DunningCollectionPlanStatus
Type: object
Champs obligatoires: description, dunningSettings, status
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **status**: string (Valeurs: ACTIVE, SUCCESS, FAILED, PAUSED, STOPPED)
- **description**: string
- **colorCode**: string
- **dunningSettings**: DunningSettings
- **transient**: boolean

### DunningPaymentRetry
Type: object
Champs obligatoires: dunningSettings, numPayRetries, payRetryFrequency, payRetryFrequencyUnit, paymentMethod
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **psp**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **numPayRetries**: integer (int32)
- **payRetryFrequencyUnit**: string (Valeurs: DAY, MONTH)
- **payRetryFrequency**: integer (int32)
- **dunningSettings**: DunningSettings
- **transient**: boolean

### DunningStopReason
Type: object
Champs obligatoires: dunningSettings, stopReason
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **stopReason**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **dunningSettings**: DunningSettings
- **transient**: boolean

### InterBankTitle
Type: object
Propriétés:
- **codeCreancier**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **codeEtablissementCreancier**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **codeCentre**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **nne**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **adresseTSA**: Address

### InvoiceConfiguration
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **displaySubscriptions**: boolean
- **displayServices**: boolean
- **displayOffers**: boolean
- **displayPricePlans**: boolean
- **displayEdrs**: boolean
- **displayProvider**: boolean
- **displayDetail**: boolean
- **displayCfAsXML**: boolean
- **displayBillingCycle**: boolean
- **displayOrders**: boolean
- **displayTaxDetails**: boolean
- **currentInvoiceNb**: integer (int64)
- **defaultInvoiceSubCategory**: InvoiceSubCategory
- **defaultGenericAccountingArticle**: AccountingArticle
- **defaultDiscountAccountingArticle**: AccountingArticle
- **defaultAdvancedPaymentAccountingArticle**: AccountingArticle
- **defaultInvoiceMinimumAccountingArticle**: AccountingArticle
- **displayWalletOperations**: boolean
- **displayUserAccountHierarchy**: boolean
- **transient**: boolean

### GdprConfiguration
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **inactiveSubscriptionLife**: integer (int32)
- **inactiveOrderLife**: integer (int32)
- **invoiceLife**: integer (int32)
- **accountingLife**: integer (int32)
- **customerProspectLife**: integer (int32)
- **mailingLife**: integer (int32)
- **aoCheckUnpaidLife**: integer (int32)
- **deleteSubscription**: boolean
- **deleteOrder**: boolean
- **deleteInvoice**: boolean
- **deleteAccounting**: boolean
- **deleteCustomerProspect**: boolean
- **deleteMailingLife**: boolean
- **deleteAoCheckUnpaidLife**: boolean
- **transient**: boolean

### ActionDunning
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **creationDate**: string (date-time)
- **typeAction**: string (Valeurs: FILE, LETTER, EMAIL, CHARGE)
- **status**: string (Valeurs: A, T, E)
- **statusDate**: string (date-time)
- **customerAccount**: CustomerAccount
- **recordedInvoice**: RecordedInvoice
- **dunningLOT**: DunningLOT
- **fromLevel**: string (Valeurs: R0, R1, R2, R3, R4, R5, R6)
- **toLevel**: string (Valeurs: R0, R1, R2, R3, R4, R5, R6)
- **actionPlanItem**: WFAction
- **amountDue**: number
- **transient**: boolean

### DunningLOT
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **fileName**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **actionType**: string (Valeurs: FILE, LETTER, EMAIL, CHARGE)
- **dunningHistory**: DunningHistory
- **actions**: Array<ActionDunning>
- **transient**: boolean

### DunningHistory
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **type**: string (Contraintes: longueur min: 0 · longueur max: 31)
- **executionDate**: string (date-time)
- **linesRead**: integer (int32)
- **linesInserted**: integer (int32)
- **linesRejected**: integer (int32)
- **dunningLots**: Array<DunningLOT>
- **transient**: boolean

### WFAction
Type: object
Champs obligatoires: actionEl, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **actionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **priority**: integer (int32)
- **conditionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **wfTransition**: WFTransition
- **userGroupCode**: string
- **transient**: boolean

### WFTransition
Type: object
Champs obligatoires: description, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **fromStatus**: string
- **toStatus**: string
- **priority**: integer (int32)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **workflow**: Workflow
- **wfDecisionRules**: Array<WFDecisionRule>
- **wfActions**: Array<WFAction>
- **conditionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **combinedEl**: string
- **transient**: boolean

### Workflow
Type: object
Champs obligatoires: code, disabled, wfType
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **wfType**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **transitions**: Array<WFTransition>
- **enableHistory**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### WFDecisionRule
Type: object
Champs obligatoires: conditionEl, name, type, value
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **name**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **value**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **type**: string (Valeurs: STRING, DATE, NUMBER, RANGE_STRING, RANGE_DATE, RANGE_NUMBER)
- **conditionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **model**: boolean
- **wfTransitions**: Array<WFTransition>
- **transient**: boolean

### PaymentPlan
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **amountToRecover**: number
- **amountPerInstallment**: number
- **remainingAmount**: number
- **actionOnRemainingAmount**: string (Valeurs: FIRST, LAST, ADDITIONAL)
- **numberOfInstallments**: integer (int32)
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **recurringUnit**: string (Valeurs: MONTH, DAY)
- **status**: string (Valeurs: DRAFT, ACTIVE, COMPLETED)
- **createdAos**: Array<AccountOperation>
- **targetedAos**: Array<AccountOperation>
- **customerAccount**: CustomerAccount
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### PaypalPaymentMethod
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **alias**: string
- **preferred**: boolean
- **customerAccount**: CustomerAccount
- **paymentType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **userId**: string
- **info1**: string
- **info2**: string
- **info3**: string
- **info4**: string
- **info5**: string
- **tokenId**: string
- **token3DsId**: string
- **referenceDocument**: Document
- **action**: string
- **expired**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### WirePaymentMethod
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **alias**: string
- **preferred**: boolean
- **customerAccount**: CustomerAccount
- **paymentType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **userId**: string
- **info1**: string
- **info2**: string
- **info3**: string
- **info4**: string
- **info5**: string
- **tokenId**: string
- **token3DsId**: string
- **referenceDocument**: Document
- **action**: string
- **expired**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### CheckPaymentMethod
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **alias**: string
- **preferred**: boolean
- **customerAccount**: CustomerAccount
- **paymentType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **userId**: string
- **info1**: string
- **info2**: string
- **info3**: string
- **info4**: string
- **info5**: string
- **tokenId**: string
- **token3DsId**: string
- **referenceDocument**: Document
- **action**: string
- **expired**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### StripePaymentMethod
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **alias**: string
- **preferred**: boolean
- **customerAccount**: CustomerAccount
- **paymentType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **userId**: string
- **info1**: string
- **info2**: string
- **info3**: string
- **info4**: string
- **info5**: string
- **tokenId**: string
- **token3DsId**: string
- **referenceDocument**: Document
- **action**: string
- **expired**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### DDPaymentMethod
Type: object
Champs obligatoires: disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **alias**: string
- **preferred**: boolean
- **customerAccount**: CustomerAccount
- **paymentType**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **userId**: string
- **info1**: string
- **info2**: string
- **info3**: string
- **info4**: string
- **info5**: string
- **tokenId**: string
- **token3DsId**: string
- **referenceDocument**: Document
- **action**: string
- **bankCoordinates**: BankCoordinates
- **mandateIdentification**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **mandateDate**: string (date-time)
- **expired**: boolean
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **transient**: boolean

### AccountingScheme
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **longDescription**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **longDescriptionI18n**: object
- **scriptInstance**: ScriptInstance
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ServiceChargeTemplateTermination
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **serviceTemplate**: ServiceTemplate
- **chargeTemplate**: OneShotChargeTemplate
- **counterTemplate**: CounterTemplate
- **walletTemplates**: Array<WalletTemplate>
- **accumulatorCounterTemplates**: Array<CounterTemplate>
- **transient**: boolean

### ServiceChargeTemplateUsage
Type: object
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **serviceTemplate**: ServiceTemplate
- **chargeTemplate**: UsageChargeTemplate
- **counterTemplate**: CounterTemplate
- **walletTemplates**: Array<WalletTemplate>
- **accumulatorCounterTemplates**: Array<CounterTemplate>
- **transient**: boolean

### UsageChargeTemplate
Type: object
Champs obligatoires: code, disabled, uuid
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **uuid**: string (Contraintes: longueur min: 0 · longueur max: 60)
- **cfValues**: CustomFieldValues
- **cfAccumulatedValues**: CustomFieldValues
- **disabled**: boolean
- **type**: string (Valeurs: CREDIT, DEBIT)
- **chargeType**: string (Contraintes: longueur min: 0 · longueur max: 5)
- **amountEditable**: boolean
- **invoiceSubCategory**: InvoiceSubCategory
- **edrTemplates**: Array<TriggeredEDRTemplate>
- **inputUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **ratingUnitDescription**: string (Contraintes: longueur min: 0 · longueur max: 20)
- **inputUnitOfMeasure**: UnitOfMeasure
- **ratingUnitOfMeasure**: UnitOfMeasure
- **inputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **outputUnitEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **unitMultiplicator**: number
- **unitNbDecimal**: integer (int32)
- **roundingMode**: string (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRule**: RevenueRecognitionRule
- **descriptionI18n**: object
- **filterExpression**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClass**: TaxClass
- **taxClassEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **ratingScript**: ScriptInstance
- **dropZeroWo**: boolean
- **sortIndexEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **attributes**: Array<Attribute>
- **roundingValuesComputed**: boolean
- **roundingUnityNbDecimal**: integer (int32)
- **roundingEdrNbDecimal**: integer (int32)
- **status**: string (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **internalNote**: string
- **quantityAttribute**: Attribute
- **applyContractOverRatingScript**: boolean
- **filterParam1**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **filterParam2**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **filterParam3**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **filterParam4**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **priority**: integer (int32)
- **triggerNextCharge**: boolean
- **triggerNextChargeEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **usageQuantityAttribute**: Attribute
- **priorityChanged**: boolean
- **chargeMainType**: string (Valeurs: RECURRING, ONESHOT, USAGE, PRODUCT)
- **descriptionI18nNullSafe**: object
- **active**: boolean
- **parentCFEntities**: Array<ICustomFieldEntity>
- **cfAccumulatedValuesNullSafe**: CustomFieldValues
- **dirtyCF**: boolean
- **cfvaluesCopy**: CustomFieldValues
- **cfValuesAsValues**: object
- **cfValuesNullSafe**: CustomFieldValues
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### BusinessServiceModel
Type: object
Champs obligatoires: code, disabled, license
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **disabled**: boolean
- **moduleItems**: Array<MeveoModuleItem>
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **installed**: boolean
- **moduleSource**: string
- **script**: ScriptInstance
- **serviceTemplate**: ServiceTemplate
- **duplicateService**: boolean
- **duplicatePricePlan**: boolean
- **descriptionI18n**: object
- **downloaded**: boolean
- **active**: boolean
- **parentEntity**: BusinessEntity
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **transient**: boolean

### ServicesToActivateDto
Type: object
Champs obligatoires: service
Propriétés:
- **service**: Array<ServiceToActivateDto>

### ServiceToActivateDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **overrideCode**: string
- **description**: string
- **quantity**: number
- **subscriptionDate**: string (date-time)
- **chargeInstanceOverrides**: ChargeInstanceOverridesDto
- **customFields**: CustomFieldsDto
- **rateUntilDate**: string (date-time)
- **amountPS**: number
- **calendarPSCode**: string
- **paymentDayInMonthPS**: integer (int32)
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **minimumInvoiceSubCategory**: string
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **serviceRenewal**: SubscriptionRenewalDto

### OfferRollbackDto
Type: object
Champs obligatoires: terminationReason
Propriétés:
- **terminationReason**: string

### ServiceInstanceToDelete
Type: object
Champs obligatoires: ids
Propriétés:
- **ids**: Array<integer (int64)> — List of Service instance to delete

### ActivateSubscriptionRequestDto
Type: object
Champs obligatoires: subscriptionCode
Propriétés:
- **subscriptionCode**: string

### SubscriptionForCustomerRequestDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **subscriptionClientId**: string

### SubscriptionForCustomerResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **subscriptionEndDate**: string

### ActivateServicesRequestDto
Type: object
Champs obligatoires: subscription
Propriétés:
- **subscription**: string
- **subscriptionValidityDate**: string (date-time)
- **servicesToActivateDto**: ServicesToActivateDto

### ApplyOneShotChargeInstanceRequestDto
Type: object
Champs obligatoires: oneShotCharge, operationDate, subscription
Propriétés:
- **oneShotCharge**: string
- **subscription**: string
- **productCode**: string
- **subscriptionValidityDate**: string (date-time)
- **wallet**: string
- **createWallet**: boolean
- **generateRTs**: boolean
- **operationDate**: string (date-time)
- **quantity**: number
- **description**: string
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string
- **criteria2**: string
- **criteria3**: string
- **customFields**: CustomFieldsDto

### ApplyProductRequestDto
Type: object
Champs obligatoires: operationDate, product
Propriétés:
- **product**: string
- **userAccount**: string
- **subscription**: string
- **subscriptionValidityDate**: string (date-time)
- **operationDate**: string (date-time)
- **quantity**: number
- **description**: string
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string
- **criteria2**: string
- **criteria3**: string
- **customFields**: CustomFieldsDto
- **seller**: string

### GetDueDateDelayResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **dueDateDelay**: DueDateDelayDto

### DueDateDelayDto
Type: object
Propriétés:
- **delayOrigin**: string (Valeurs: ORDER, CA, BC)
- **computedDelay**: integer (int32)
- **delayEL**: string

### SubscriptionsListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **subscriptions**: SubscriptionsListDto

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

### SubscriptionsListDto
Type: object
Propriétés:
- **listSize**: integer (int32)
- **subscription**: Array<SubscriptionDto>

### InstantiateServicesRequestDto
Type: object
Champs obligatoires: subscription
Propriétés:
- **subscription**: string
- **subscriptionValidityDate**: string (date-time)
- **servicesToInstantiate**: ServicesToInstantiateDto

### GetOneShotChargesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **oneshotCharges**: Array<OneShotChargeTemplateDto>
- **oneshotChargeInstances**: Array<OneShotChargeInstanceDto>

### OneShotChargeTemplateDto
Type: object
Champs obligatoires: code, oneShotChargeTemplateType
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **invoiceSubCategory**: string — The invoice sub category
- **amountEditable**: boolean — The amount can be editable
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description
- **inputUnitDescription**: string
- **ratingUnitDescription**: string
- **unitMultiplicator**: number
- **inputUnitOfMeasureCode**: string — code of unit measure
- **ratingUnitOfMeasureCode**: string — code of rating unit of measure
- **inputUnitEL**: string — input unit expression language
- **outputUnitEL**: string — output unit expression language
- **unitNbDecimal**: integer (int32) — EDR and WO quantity field value precision
- **roundingModeDtoEnum**: string — EDR and WO quantity field value rounding (Valeurs: NEAREST, DOWN, UP, HALF_EVEN)
- **revenueRecognitionRuleCode**: string — The revenue recognition rule code
- **filterExpression**: string — The filter expression (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxClassCode**: string — code of tax class
- **taxClassEl**: string — Expression to determine tax class
- **ratingScriptCode**: string — Code of a rating script
- **customFields**: CustomFieldsDto
- **triggeredEdrs**: TriggeredEdrTemplatesDto
- **dropZeroWo**: boolean — Enable/disable removing WO rated to 0
- **sortIndexEl**: string — Sorting index EL (Contraintes: longueur min: 0 · longueur max: 2000)
- **status**: string — ChargeTemplate status (Valeurs: DRAFT, ACTIVE, ARCHIVED)
- **linkedAttributes**: Array<string>
- **internalNote**: string — Internal Note
- **quantityAttribute**: string — Code of quantity attribute
- **applyContractOverRatingScript**: boolean — Applies the contract during rating script execution.
- **oneShotChargeTemplateType**: string — The one shot charge template type (Valeurs: oneShotChargeTemplateTypeEnum.subscription, oneShotChargeTemplateTypeEnum.termination, oneShotChargeTemplateTypeEnum.other)
- **immediateInvoicing**: boolean — The immediate invoicing

### TriggeredEdrTemplatesDto
The triggered edrs
Type: object
Propriétés:
- **triggeredEdr**: Array<TriggeredEdrTemplateDto> — list triggered EDR

### TriggeredEdrTemplateDto
list triggered EDR
Type: object
Champs obligatoires: code, quantityEl
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **subscriptionEl**: string
- **meveoInstanceCode**: string
- **conditionEl**: string
- **quantityEl**: string
- **param1El**: string
- **param2El**: string
- **param3El**: string
- **param4El**: string
- **opencellInstanceEL**: string
- **triggeredEdrScript**: string

### OneShotChargeInstanceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **operationDate**: string (date-time)
- **terminationDate**: string (date-time)
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **customFields**: CustomFieldsDto

### RateSubscriptionRequestDto
Type: object
Propriétés:
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **rateUntilDate**: string (date-time)

### RateSubscriptionResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **totalRatedCharges**: integer (int32)
- **ratedChargesResult**: object

### OperationSubscriptionRequestDto
Type: object
Champs obligatoires: subscriptionCode
Propriétés:
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **actionDate**: string (date-time)

### OperationServicesRequestDto
Type: object
Champs obligatoires: subscriptionCode
Propriétés:
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **servicesToUpdate**: Array<ServiceToUpdateDto>

### ServiceToUpdateDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **overrideCode**: string
- **description**: string
- **quantity**: number
- **actionDate**: string (date-time)
- **endAgreementDate**: string (date-time)
- **terminationDate**: string (date-time)
- **terminationReason**: string
- **serviceRenewal**: SubscriptionRenewalDto
- **customFields**: CustomFieldsDto

### GetServiceInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **serviceInstance**: ServiceInstanceDto

### GetListServiceInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **serviceInstances**: Array<ServiceInstanceDto>

### SubscriptionAndProductsToInstantiateDto
Type: object
Champs obligatoires: billingCycle, code, offerTemplate, productToInstantiateDto, seller, subscriptionDate, userAccount, versionNumber
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **versionNumber**: integer (int32)
- **nextVersion**: integer (int64)
- **previousVersion**: integer (int64)
- **userAccount**: string
- **offerTemplate**: string
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **endAgreementDate**: string (date-time)
- **status**: string (Valeurs: CREATED, ACTIVE, CANCELED, RESILIATED, CLOSED, SUSPENDED, PENDING)
- **statusDate**: string (date-time)
- **validityDate**: string (date-time)
- **customFields**: CustomFieldsDto
- **accesses**: AccessesDto
- **productsToInstantiate**: Array<ProductToInstantiateDto>
- **terminationReason**: string
- **orderNumber**: string
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **minimumInvoiceSubCategory**: string
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **renewed**: boolean
- **renewalNotifiedDate**: string (date-time)
- **renewalRule**: SubscriptionRenewalDto
- **billingCycle**: string
- **seller**: string — Seller code
- **autoEndOfEngagement**: boolean
- **ratingGroup**: string
- **electronicBilling**: boolean
- **email**: string
- **mailingType**: string
- **emailTemplate**: string
- **ccedEmails**: string
- **discountPlansForInstantiation**: Array<DiscountPlanDto>
- **discountPlansForTermination**: Array<string>
- **discountPlanInstances**: Array<DiscountPlanInstanceDto>
- **paymentMethod**: PaymentMethodDto
- **customerService**: string
- **salesPersonName**: string — The sales person name
- **discountPlanInstancesToRemove**: Array<string>
- **contractCode**: string — code of existing contract
- **productToInstantiateDto**: Array<ProductToInstantiateDto>

### SubscriptionAndServicesToActivateRequestDto
Type: object
Champs obligatoires: billingCycle, code, offerTemplate, seller, subscriptionDate, userAccount, versionNumber
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **versionNumber**: integer (int32)
- **nextVersion**: integer (int64)
- **previousVersion**: integer (int64)
- **userAccount**: string
- **offerTemplate**: string
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **endAgreementDate**: string (date-time)
- **status**: string (Valeurs: CREATED, ACTIVE, CANCELED, RESILIATED, CLOSED, SUSPENDED, PENDING)
- **statusDate**: string (date-time)
- **validityDate**: string (date-time)
- **customFields**: CustomFieldsDto
- **accesses**: AccessesDto
- **services**: ServiceInstancesDto
- **products**: ProductsDto
- **productInstances**: Array<ProductInstanceDto>
- **productsToInstantiate**: Array<ProductToInstantiateDto>
- **terminationReason**: string
- **orderNumber**: string
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **minimumInvoiceSubCategory**: string
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **renewed**: boolean
- **renewalNotifiedDate**: string (date-time)
- **renewalRule**: SubscriptionRenewalDto
- **billingCycle**: string
- **seller**: string — Seller code
- **autoEndOfEngagement**: boolean
- **ratingGroup**: string
- **electronicBilling**: boolean
- **email**: string
- **mailingType**: string
- **emailTemplate**: string
- **ccedEmails**: string
- **discountPlansForInstantiation**: Array<DiscountPlanDto>
- **discountPlansForTermination**: Array<string>
- **discountPlanInstances**: Array<DiscountPlanInstanceDto>
- **paymentMethod**: PaymentMethodDto
- **customerService**: string
- **salesPersonName**: string — The sales person name
- **discountPlanInstancesToRemove**: Array<string>
- **contractCode**: string — code of existing contract
- **servicesToActivateDto**: ServicesToActivateDto

### TerminateSubscriptionRequestDto
Type: object
Champs obligatoires: subscriptionCode, terminationDate, terminationReason
Propriétés:
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **terminationReason**: string
- **terminationDate**: string (date-time)

### TerminateSubscriptionServicesRequestDto
Type: object
Champs obligatoires: subscriptionCode, terminationDate, terminationReason
Propriétés:
- **services**: Array<string>
- **serviceIds**: Array<integer (int64)>
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **terminationReason**: string
- **terminationDate**: string (date-time)
- **action**: string (Valeurs: ADD, MODIFY, DELETE)

### UpdateServicesRequestDto
Type: object
Champs obligatoires: subscriptionCode
Propriétés:
- **subscriptionCode**: string
- **subscriptionValidityDate**: string (date-time)
- **servicesToUpdate**: Array<ServiceToUpdateDto>
- **autoEndOfEngagement**: boolean
- **rateUntilDate**: string (date-time)
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **attributeInstances**: Array<AttributeInstanceDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
