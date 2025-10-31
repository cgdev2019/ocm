import type { SubscriptionFormSchema } from '@/features/subscriptions/schema';
import type { components } from '@/lib/api/generated/schema';

export type SubscriptionDto = components['schemas']['SubscriptionDto'];
export type SubscriptionsListDto = components['schemas']['SubscriptionsListDto'];
export type SubscriptionsListResponseDto = components['schemas']['SubscriptionsListResponseDto'];
export type GetSubscriptionResponseDto = components['schemas']['GetSubscriptionResponseDto'];
export type SubscriptionPatchDto = components['schemas']['SubscriptionPatchDto'];
export type OfferRollbackDto = components['schemas']['OfferRollbackDto'];
export type ActivateServicesRequestDto = components['schemas']['ActivateServicesRequestDto'];
export type ApplyOneShotChargeInstanceRequestDto =
  components['schemas']['ApplyOneShotChargeInstanceRequestDto'];
export type ApplyProductRequestDto = components['schemas']['ApplyProductRequestDto'];
export type SubscriptionForCustomerRequestDto = components['schemas']['SubscriptionForCustomerRequestDto'];
export type SubscriptionForCustomerResponseDto = components['schemas']['SubscriptionForCustomerResponseDto'];
export type SubscriptionAndServicesToActivateRequestDto =
  components['schemas']['SubscriptionAndServicesToActivateRequestDto'];
export type SubscriptionAndProductsToInstantiateDto =
  components['schemas']['SubscriptionAndProductsToInstantiateDto'];
export type InstantiateServicesRequestDto = components['schemas']['InstantiateServicesRequestDto'];
export type OperationSubscriptionRequestDto = components['schemas']['OperationSubscriptionRequestDto'];
export type OperationServicesRequestDto = components['schemas']['OperationServicesRequestDto'];
export type RateSubscriptionRequestDto = components['schemas']['RateSubscriptionRequestDto'];
export type RateSubscriptionResponseDto = components['schemas']['RateSubscriptionResponseDto'];
export type TerminateSubscriptionRequestDto = components['schemas']['TerminateSubscriptionRequestDto'];
export type TerminateSubscriptionServicesRequestDto =
  components['schemas']['TerminateSubscriptionServicesRequestDto'];
export type UpdateServicesRequestDto = components['schemas']['UpdateServicesRequestDto'];
export type GetDueDateDelayResponseDto = components['schemas']['GetDueDateDelayResponseDto'];
export type GetOneShotChargesResponseDto = components['schemas']['GetOneShotChargesResponseDto'];
export type GetServiceInstanceResponseDto = components['schemas']['GetServiceInstanceResponseDto'];
export type GetListServiceInstanceResponseDto = components['schemas']['GetListServiceInstanceResponseDto'];
export type ServiceInstanceToDelete = components['schemas']['ServiceInstanceToDelete'];

export type SubscriptionListItem = {
  code: string;
  description?: string;
  userAccount: string;
  offerTemplate: string;
  subscriptionDate: string;
  status?: SubscriptionDto['status'];
  billingCycle: string;
  seller: string;
};

export type SubscriptionListPaging = {
  totalRecords: number;
  limit: number;
  offset: number;
  sortBy?: string;
  sortOrder?: components['schemas']['PagingAndFiltering']['sortOrder'];
};

export type SubscriptionList = {
  items: SubscriptionListItem[];
  paging: SubscriptionListPaging;
};

export type SubscriptionListParams = {
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: components['schemas']['PagingAndFiltering']['sortOrder'];
  userAccountCode?: string | null;
  query?: string | null;
};

export type SubscriptionFormValues = SubscriptionFormSchema;
