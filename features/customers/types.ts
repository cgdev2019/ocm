import type { components } from '@/lib/api/generated/schema';

export type CustomerDto = components['schemas']['CustomerDto'];
export type CustomersResponseDto = components['schemas']['CustomersResponseDto'];
export type GetCustomerResponseDto = components['schemas']['GetCustomerResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];
type PagingAndFiltering = components['schemas']['PagingAndFiltering'];

export type CustomerListItem = {
  code: string;
  description?: string;
  customerCategory?: string;
  customerBrand?: string;
  seller?: string;
  vatNo?: string;
  contactEmail?: string;
  city?: string;
};

export type CustomerFormValues = {
  code: string;
  description?: string;
  customerCategory: string;
  customerBrand?: string;
  seller?: string;
  vatNo?: string;
  registrationNo?: string;
  contactEmail?: string;
  contactPhone?: string;
  address1?: string;
  city?: string;
  country?: string;
};

export type CustomersListParams = Pick<PagingAndFiltering, 'limit' | 'offset' | 'sortBy' | 'sortOrder'>;

export type CustomersListPaging = {
  totalRecords: number;
  limit: number;
  offset: number;
  sortBy?: PagingAndFiltering['sortBy'];
  sortOrder?: PagingAndFiltering['sortOrder'];
};

export type CustomersList = {
  items: CustomerListItem[];
  paging: CustomersListPaging;
};
