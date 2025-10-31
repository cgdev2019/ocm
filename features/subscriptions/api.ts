import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  ActivateServicesRequestDto,
  ApplyOneShotChargeInstanceRequestDto,
  ApplyProductRequestDto,
  GetDueDateDelayResponseDto,
  GetListServiceInstanceResponseDto,
  GetOneShotChargesResponseDto,
  GetServiceInstanceResponseDto,
  GetSubscriptionResponseDto,
  InstantiateServicesRequestDto,
  OfferRollbackDto,
  OperationServicesRequestDto,
  OperationSubscriptionRequestDto,
  RateSubscriptionRequestDto,
  RateSubscriptionResponseDto,
  ServiceInstanceToDelete,
  SubscriptionAndProductsToInstantiateDto,
  SubscriptionAndServicesToActivateRequestDto,
  SubscriptionDto,
  SubscriptionForCustomerRequestDto,
  SubscriptionForCustomerResponseDto,
  SubscriptionFormValues,
  SubscriptionListItem,
  SubscriptionPatchDto,
  SubscriptionsListResponseDto,
  TerminateSubscriptionRequestDto,
  TerminateSubscriptionServicesRequestDto,
  UpdateServicesRequestDto,
} from '@/features/subscriptions/types';
import type { components } from '@/lib/api/generated/schema';

export const DEFAULT_SUBSCRIPTIONS_PAGE_SIZE = 20;

const adaptList = (payload: SubscriptionsListResponseDto | undefined): SubscriptionListItem[] =>
  (payload?.subscriptions?.subscription ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    userAccount: item.userAccount ?? '',
    offerTemplate: item.offerTemplate ?? '',
    subscriptionDate: item.subscriptionDate ?? '',
    status: item.status ?? undefined,
    billingCycle: item.billingCycle ?? '',
    seller: item.seller ?? '',
  }));

const mapDtoToForm = (dto: SubscriptionDto): SubscriptionFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  versionNumber: dto.versionNumber ?? 1,
  userAccount: dto.userAccount,
  offerTemplate: dto.offerTemplate,
  subscriptionDate: dto.subscriptionDate,
  terminationDate: dto.terminationDate ?? undefined,
  endAgreementDate: dto.endAgreementDate ?? undefined,
  validityDate: dto.validityDate ?? undefined,
  status: dto.status ?? undefined,
  billingCycle: dto.billingCycle,
  seller: dto.seller,
  autoEndOfEngagement: dto.autoEndOfEngagement ?? undefined,
  renewed: dto.renewed ?? undefined,
  renewalNotifiedDate: dto.renewalNotifiedDate ?? undefined,
  email: dto.email ?? undefined,
});

const mapFormToDto = (values: SubscriptionFormValues): SubscriptionDto => ({
  code: values.code,
  description: values.description,
  versionNumber: values.versionNumber,
  userAccount: values.userAccount,
  offerTemplate: values.offerTemplate,
  subscriptionDate: values.subscriptionDate,
  terminationDate: values.terminationDate || undefined,
  endAgreementDate: values.endAgreementDate || undefined,
  validityDate: values.validityDate || undefined,
  status: values.status,
  billingCycle: values.billingCycle,
  seller: values.seller,
  autoEndOfEngagement: values.autoEndOfEngagement,
  renewed: values.renewed,
  renewalNotifiedDate: values.renewalNotifiedDate || undefined,
  email: values.email || undefined,
});

const invalidateSubscriptionQueries = (queryClient: ReturnType<typeof useQueryClient>, code?: string) => {
  queryClient.invalidateQueries({ queryKey: queryKeys.subscriptions.root });
  if (code) {
    queryClient.invalidateQueries({ queryKey: queryKeys.subscriptions.detail(code) });
  }
};

type PagingAndFiltering = components['schemas']['PagingAndFiltering'];

type SubscriptionListFilters = {
  userAccountCode?: string | null;
  query?: string | null;
};

export const useSubscriptions = (filters?: SubscriptionListFilters) => {
  const normalizedFilters = filters
    ? {
        userAccountCode: filters.userAccountCode ?? undefined,
        query: filters.query ?? undefined,
      }
    : undefined;

  return useQuery({
    queryKey: queryKeys.subscriptions.list(normalizedFilters ?? null),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/list', {
        params: {
          query: {
            userAccountCode: normalizedFilters?.userAccountCode,
            query: normalizedFilters?.query,
          },
        },
      });
      const payload = unwrapResponse<SubscriptionsListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load subscriptions',
      );
      assertActionSuccess(payload.actionStatus, 'Subscription list returned an error');
      return adaptList(payload);
    },
  });
};

export const useSubscriptionListSearch = () =>
  useMutation({
    mutationFn: async (body: PagingAndFiltering) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/list', { body });
      const payload = unwrapResponse<SubscriptionsListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to search subscriptions',
      );
      assertActionSuccess(payload.actionStatus, 'Subscription search returned an error');
      return adaptList(payload);
    },
  });

export const useSubscription = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.subscriptions.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription', {
        params: { query: { subscriptionCode: code } },
      });
      const payload = unwrapResponse<GetSubscriptionResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load subscription',
      );
      assertActionSuccess(payload.actionStatus, 'Subscription retrieval failed');
      return payload.subscription ? mapDtoToForm(payload.subscription) : null;
    },
  });

export const useSubscriptionsByCustomer = (customerCode: string | null) =>
  useQuery({
    queryKey: queryKeys.subscriptions.byCustomer(customerCode ?? 'unknown'),
    enabled: Boolean(customerCode),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/findByCustomer', {
        params: { query: { customerCode: customerCode ?? undefined } },
      });
      const payload = unwrapResponse<SubscriptionsListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customer subscriptions',
      );
      assertActionSuccess(payload.actionStatus, 'Customer subscriptions request failed');
      return adaptList(payload);
    },
  });

export const useSubscriptionDueDateDelay = (
  criteria?: {
    subscriptionCode?: string;
    subscriptionValidityDate?: string;
    invoiceNumber?: string;
    invoiceTypeCode?: string;
    orderCode?: string;
  },
) =>
  useQuery({
    queryKey: queryKeys.subscriptions.dueDateDelay(criteria ?? null),
    enabled: Boolean(criteria?.subscriptionCode || criteria?.invoiceNumber || criteria?.orderCode),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/dueDateDelay', {
        params: { query: criteria ?? {} },
      });
      const payload = unwrapResponse<GetDueDateDelayResponseDto>(
        { data: result.data, error: result.error },
        'Unable to retrieve due date delay',
      );
      assertActionSuccess(payload.actionStatus, 'Due date delay request failed');
      return payload.dueDateDelay ?? null;
    },
  });

export const useSubscriptionServiceInstance = (
  criteria: {
    subscriptionCode?: string;
    serviceInstanceId?: number;
    serviceInstanceCode?: string;
    subscriptionValidityDate?: string;
  },
) =>
  useQuery({
    queryKey: queryKeys.subscriptions.serviceInstance(criteria),
    enabled:
      Boolean(criteria.subscriptionCode) || Boolean(criteria.serviceInstanceId) || Boolean(criteria.serviceInstanceCode),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/serviceInstance', {
        params: { query: criteria },
      });
      const payload = unwrapResponse<GetServiceInstanceResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load service instance',
      );
      assertActionSuccess(payload.actionStatus, 'Service instance request failed');
      return payload.serviceInstance ?? null;
    },
  });

export const useSubscriptionServiceInstances = (
  criteria?: {
    subscriptionCode?: string;
    subscriptionValidityDate?: string;
    serviceInstanceCode?: string;
  },
) =>
  useQuery({
    queryKey: queryKeys.subscriptions.serviceInstances(criteria ?? null),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/serviceInstances', {
        params: { query: criteria ?? {} },
      });
      const payload = unwrapResponse<GetListServiceInstanceResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load service instances',
      );
      assertActionSuccess(payload.actionStatus, 'Service instances request failed');
      return payload.serviceInstances ?? [];
    },
  });

export const useSubscriptionOneshotCharges = (
  criteria?: { subscriptionCode?: string; validityDate?: string },
) =>
  useQuery({
    queryKey: queryKeys.subscriptions.oneShotCharges(criteria ?? null),
    enabled: Boolean(criteria?.subscriptionCode),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/listOneshotChargeOthers', {
        params: { query: criteria ?? {} },
      });
      const payload = unwrapResponse<GetOneShotChargesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load one-shot charges',
      );
      assertActionSuccess(payload.actionStatus, 'One-shot charges request failed');
      return payload;
    },
  });

export const useSubscriptionVersion = () =>
  useQuery({
    queryKey: queryKeys.subscriptions.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/subscription/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load subscription service version',
      );
      assertActionSuccess(payload, 'Subscription version request failed');
      return payload.message ?? '';
    },
  });

export const useSubscriptionMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: SubscriptionFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/subscription', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription creation failed',
      );
      assertActionSuccess(payload, 'Subscription creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: SubscriptionFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billing/subscription', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription update failed',
      );
      assertActionSuccess(payload, 'Subscription update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: SubscriptionFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/subscription/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription upsert failed',
      );
      assertActionSuccess(payload, 'Subscription upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const createOrUpdatePartial = useMutation({
    mutationFn: async (values: SubscriptionFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/subscription/createOrUpdatePartial', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription partial upsert failed',
      );
      assertActionSuccess(payload, 'Subscription partial upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const activate = useMutation({
    mutationFn: async (payload: { subscriptionCode: string; subscriptionValidityDate?: string }) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/activate', {
        params: { query: { subscriptionValidityDate: payload.subscriptionValidityDate } },
        body: payload.subscriptionCode,
      });
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription activation failed',
      );
      assertActionSuccess(response, 'Subscription activation failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const activatePatched = useMutation({
    mutationFn: async (payload: {
      subscriptionCode: string;
      updateEffectiveDate?: boolean;
      newEffectiveDate?: string;
    }) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/activatePatchedSubscription', {
        params: {
          query: {
            updateEffectiveDate: payload.updateEffectiveDate,
            newEffectiveDate: payload.newEffectiveDate,
          },
        },
        body: payload.subscriptionCode,
      });
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Patched subscription activation failed',
      );
      assertActionSuccess(response, 'Patched subscription activation failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const activateForCustomer = useMutation({
    mutationFn: async (values: SubscriptionForCustomerRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/activateForCustomer', {
        body: values,
      });
      const payload = unwrapResponse<SubscriptionForCustomerResponseDto>(
        { data: result.data, error: result.error },
        'Subscription activation for customer failed',
      );
      assertActionSuccess(payload.actionStatus, 'Subscription activation for customer failed');
      return payload;
    },
    onSuccess: (_data, variables) =>
      invalidateSubscriptionQueries(queryClient, variables.subscriptionCode ?? variables.code),
  });

  const activateServices = useMutation({
    mutationFn: async (values: ActivateServicesRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/activateServices', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription service activation failed',
      );
      assertActionSuccess(payload, 'Subscription service activation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscription),
  });

  const instantiateServices = useMutation({
    mutationFn: async (values: InstantiateServicesRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/instantiateServices', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscription service instantiation failed',
      );
      assertActionSuccess(payload, 'Subscription service instantiation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscription),
  });

  const applyOneShotCharge = useMutation({
    mutationFn: async (values: ApplyOneShotChargeInstanceRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/applyOneShotChargeInstance', {
        body: values,
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Apply one-shot charge failed',
      );
      assertActionSuccess(payload, 'Apply one-shot charge failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscription),
  });

  const applyProduct = useMutation({
    mutationFn: async (values: ApplyProductRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/applyProduct', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Apply product failed',
      );
      assertActionSuccess(payload, 'Apply product failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscription),
  });

  const cancelRenewal = useMutation({
    mutationFn: async (payload: { subscriptionCode: string; subscriptionValidityDate?: string }) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/billing/subscription/cancelSubscriptionRenewal/{subscriptionCode}',
        {
          params: {
            path: { subscriptionCode: payload.subscriptionCode },
            query: { subscriptionValidityDate: payload.subscriptionValidityDate },
          },
        },
      );
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Cancel subscription renewal failed',
      );
      assertActionSuccess(response, 'Cancel subscription renewal failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const cancelTermination = useMutation({
    mutationFn: async (payload: { subscriptionCode: string; subscriptionValidityDate?: string }) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/billing/subscription/cancelSubscriptionTermination/{subscriptionCode}',
        {
          params: {
            path: { subscriptionCode: payload.subscriptionCode },
            query: { subscriptionValidityDate: payload.subscriptionValidityDate },
          },
        },
      );
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Cancel subscription termination failed',
      );
      assertActionSuccess(response, 'Cancel subscription termination failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const subscribeAndActivateProducts = useMutation({
    mutationFn: async (values: SubscriptionAndProductsToInstantiateDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/billing/subscription/subscribeAndActivateProducts',
        { body: values },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscribe and activate products failed',
      );
      assertActionSuccess(payload, 'Subscribe and activate products failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const subscribeAndActivateServices = useMutation({
    mutationFn: async (values: SubscriptionAndServicesToActivateRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/billing/subscription/subscribeAndActivateServices',
        { body: values },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscribe and activate services failed',
      );
      assertActionSuccess(payload, 'Subscribe and activate services failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const subscribeAndInstantiateProducts = useMutation({
    mutationFn: async (values: SubscriptionAndProductsToInstantiateDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/billing/subscription/subscribeAndInstantiateProducts',
        { body: values },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Subscribe and instantiate products failed',
      );
      assertActionSuccess(payload, 'Subscribe and instantiate products failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const suspend = useMutation({
    mutationFn: async (values: OperationSubscriptionRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/billing/subscription/suspend', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Suspend subscription failed',
      );
      assertActionSuccess(payload, 'Suspend subscription failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const suspendServices = useMutation({
    mutationFn: async (values: OperationServicesRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/billing/subscription/suspendServices', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Suspend subscription services failed',
      );
      assertActionSuccess(payload, 'Suspend subscription services failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const resume = useMutation({
    mutationFn: async (values: OperationSubscriptionRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/billing/subscription/resume', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Resume subscription failed',
      );
      assertActionSuccess(payload, 'Resume subscription failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const resumeServices = useMutation({
    mutationFn: async (values: OperationServicesRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/billing/subscription/resumeServices', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Resume subscription services failed',
      );
      assertActionSuccess(payload, 'Resume subscription services failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const terminatePost = useMutation({
    mutationFn: async (values: TerminateSubscriptionRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/terminate', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Terminate subscription failed',
      );
      assertActionSuccess(payload, 'Terminate subscription failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const terminatePut = useMutation({
    mutationFn: async (values: TerminateSubscriptionRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/billing/subscription/terminate', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Terminate subscription failed',
      );
      assertActionSuccess(payload, 'Terminate subscription failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const terminateServices = useMutation({
    mutationFn: async (values: TerminateSubscriptionServicesRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/terminateServices', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Terminate subscription services failed',
      );
      assertActionSuccess(payload, 'Terminate subscription services failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const updateServices = useMutation({
    mutationFn: async (values: UpdateServicesRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/billing/subscription/updateServices', { body: values });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Update subscription services failed',
      );
      assertActionSuccess(payload, 'Update subscription services failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const rate = useMutation({
    mutationFn: async (values: RateSubscriptionRequestDto) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/subscription/rate', { body: values });
      const payload = unwrapResponse<RateSubscriptionResponseDto>(
        { data: result.data, error: result.error },
        'Rate subscription failed',
      );
      assertActionSuccess(payload.actionStatus, 'Rate subscription failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  const patchOffer = useMutation({
    mutationFn: async (payload: { code: string; patch: SubscriptionPatchDto }) => {
      const apiClient = getApiClient();
      const result = await apiClient.PATCH('/api/rest/billing/subscription/{code}/offer', {
        params: { path: { code: payload.code } },
        body: payload.patch,
      });
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Patch subscription offer failed',
      );
      assertActionSuccess(response, 'Patch subscription offer failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const rollbackOffer = useMutation({
    mutationFn: async (payload: { code: string; request: OfferRollbackDto }) => {
      const apiClient = getApiClient();
      const result = await apiClient.PATCH('/api/rest/billing/subscription/{code}/offer/rollback', {
        params: { path: { code: payload.code } },
        body: payload.request,
      });
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Rollback subscription offer failed',
      );
      assertActionSuccess(response, 'Rollback subscription offer failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.code),
  });

  const deleteServiceInstance = useMutation({
    mutationFn: async (payload: { subscriptionId: number; body: ServiceInstanceToDelete }) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billing/subscription/{subscriptionId}/delete-si', {
        params: { path: { subscriptionId: payload.subscriptionId } },
        body: payload.body,
      });
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Delete subscription service instance failed',
      );
      assertActionSuccess(response, 'Delete subscription service instance failed');
      return response;
    },
    onSuccess: () => invalidateSubscriptionQueries(queryClient),
  });

  const deleteOneShotCharge = useMutation({
    mutationFn: async (payload: { subscriptionCode: string; oneshotChargeCode: string; validityDate?: string }) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE(
        '/api/rest/billing/subscription/oneShotCharge/{subscriptionCode}/{oneshotChargeCode}',
        {
          params: {
            path: {
              subscriptionCode: payload.subscriptionCode,
              oneshotChargeCode: payload.oneshotChargeCode,
            },
            query: { validityDate: payload.validityDate },
          },
        },
      );
      const response = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Delete subscription one-shot charge failed',
      );
      assertActionSuccess(response, 'Delete subscription one-shot charge failed');
      return response;
    },
    onSuccess: (_data, variables) => invalidateSubscriptionQueries(queryClient, variables.subscriptionCode),
  });

  return useMemo(
    () => ({
      create,
      update,
      createOrUpdate,
      createOrUpdatePartial,
      activate,
      activatePatched,
      activateForCustomer,
      activateServices,
      instantiateServices,
      applyOneShotCharge,
      applyProduct,
      cancelRenewal,
      cancelTermination,
      subscribeAndActivateProducts,
      subscribeAndActivateServices,
      subscribeAndInstantiateProducts,
      suspend,
      suspendServices,
      resume,
      resumeServices,
      terminatePost,
      terminatePut,
      terminateServices,
      updateServices,
      rate,
      patchOffer,
      rollbackOffer,
      deleteServiceInstance,
      deleteOneShotCharge,
    }),
    [
      activate,
      activateForCustomer,
      activatePatched,
      activateServices,
      applyOneShotCharge,
      applyProduct,
      cancelRenewal,
      cancelTermination,
      create,
      createOrUpdate,
      createOrUpdatePartial,
      deleteOneShotCharge,
      deleteServiceInstance,
      instantiateServices,
      patchOffer,
      rate,
      resume,
      resumeServices,
      rollbackOffer,
      subscribeAndActivateProducts,
      subscribeAndActivateServices,
      subscribeAndInstantiateProducts,
      suspend,
      suspendServices,
      terminatePost,
      terminatePut,
      terminateServices,
      update,
      updateServices,
    ],
  );
};
