import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  CustomerFormValues,
  CustomerListItem,
  CustomersList,
  CustomersListParams,
  CustomerDto,
  CustomersResponseDto,
  GetCustomerResponseDto,
} from '@/features/customers/types';

export const DEFAULT_CUSTOMERS_PAGE_SIZE = 20;

const adaptCustomerList = (items: CustomerDto[] | undefined): CustomerListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    customerCategory: item.customerCategory ?? undefined,
    customerBrand: item.customerBrand ?? undefined,
    seller: item.seller ?? undefined,
    vatNo: item.vatNo ?? undefined,
    contactEmail: item.contactInformation?.email ?? undefined,
    city: item.contactInformation?.address?.city ?? undefined,
  }));

const mapFormToDto = (values: CustomerFormValues): CustomerDto => ({
  code: values.code,
  description: values.description,
  customerCategory: values.customerCategory,
  customerBrand: values.customerBrand,
  seller: values.seller,
  vatNo: values.vatNo,
  registrationNo: values.registrationNo,
  contactInformation: {
    email: values.contactEmail,
    phone: values.contactPhone,
    address: {
      address1: values.address1,
      city: values.city,
      country: values.country,
    },
  },
});

const mapDtoToForm = (dto: CustomerDto): CustomerFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  customerCategory: dto.customerCategory ?? '',
  customerBrand: dto.customerBrand ?? undefined,
  seller: dto.seller ?? undefined,
  vatNo: dto.vatNo ?? undefined,
  registrationNo: dto.registrationNo ?? undefined,
  contactEmail: dto.contactInformation?.email ?? undefined,
  contactPhone: dto.contactInformation?.phone ?? undefined,
  address1: dto.contactInformation?.address?.address1 ?? undefined,
  city: dto.contactInformation?.address?.city ?? undefined,
  country: dto.contactInformation?.address?.country ?? undefined,
});

const normalizeParams = (params: CustomersListParams = {}) => ({
  limit: params.limit ?? DEFAULT_CUSTOMERS_PAGE_SIZE,
  offset: params.offset ?? 0,
  sortBy: params.sortBy,
  sortOrder: params.sortOrder,
});

export const useCustomersList = (params?: CustomersListParams) => {
  const queryParams = normalizeParams(params);
  const requestQuery = {
    limit: queryParams.limit,
    offset: queryParams.offset,
    ...(queryParams.sortBy ? { sortBy: queryParams.sortBy } : {}),
    ...(queryParams.sortOrder ? { sortOrder: queryParams.sortOrder } : {}),
  } as const;

  return useQuery<CustomersList>({
    queryKey: queryKeys.customers.list(queryParams),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/account/customer/list47', {
        params: { query: requestQuery },
      });
      const payload = unwrapResponse<CustomersResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customers',
      );
      assertActionSuccess(payload.actionStatus, 'Customer list returned an error');

      const items = adaptCustomerList(payload.customers?.customer);
      const paging = payload.paging ?? {};
      const limit = paging.limit ?? queryParams.limit ?? DEFAULT_CUSTOMERS_PAGE_SIZE;
      const offset = paging.offset ?? queryParams.offset ?? 0;
      const totalRecords = paging.totalNumberOfRecords ?? items.length;

      return {
        items,
        paging: {
          totalRecords,
          limit,
          offset,
          sortBy: paging.sortBy ?? queryParams.sortBy,
          sortOrder: paging.sortOrder ?? queryParams.sortOrder,
        },
      } satisfies CustomersList;
    },
  });
};

export const useCustomer = (code: string | null) => {
  return useQuery({
    queryKey: queryKeys.customers.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/customer/{customerCode}', {
        params: { path: { customerCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetCustomerResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customer',
      );
      assertActionSuccess(payload.actionStatus, 'Customer retrieval failed');
      return payload.customer ? mapDtoToForm(payload.customer) : null;
    },
  });
};

export const useCustomerMutations = () => {
  const queryClient = useQueryClient();

  const upsert = useMutation({
    mutationFn: async (values: CustomerFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/customer/createOrUpdate', {
        body: dto,
      });
      const payload = unwrapResponse<ActionStatus>({ data: result.data, error: result.error }, 'Customer update failed');
      assertActionSuccess(payload, 'Customer update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.customers.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.customers.detail(variables.code) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/account/customer/{customerCode}', {
        params: { path: { customerCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>({ data: result.data, error: result.error }, 'Customer delete failed');
      assertActionSuccess(payload, 'Customer delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.customers.list() });
    },
  });

  return useMemo(() => ({ upsert, remove }), [remove, upsert]);
};
