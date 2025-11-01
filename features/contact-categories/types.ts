import type { components } from '@/lib/api/generated/schema';

export type ContactCategoryDto = {
  id?: number | null;
  code?: string | null;
  description?: string | null;
  customFields?: components['schemas']['CustomFieldsDto'] | null;
  links?: Array<Record<string, unknown>> | null;
  [key: string]: unknown;
};

export type ContactCategoryListResponse = {
  actionStatus?: components['schemas']['ActionStatus'] | null;
  data?: ContactCategoryDto[] | null;
  results?: ContactCategoryDto[] | null;
  list?: ContactCategoryDto[] | null;
  contactCategories?: ContactCategoryDto[] | null;
  totalNumberOfRecords?: number | null;
  paging?: {
    totalNumberOfRecords?: number | null;
  } | null;
};

export type ContactCategoryListItem = {
  code: string;
  description?: string;
  id?: number;
};

export type ContactCategoryFormValues = {
  code: string;
  description?: string;
  id?: number;
};

export type ContactCategoryDetail = ContactCategoryFormValues;

export type ContactCategoryListParams = {
  page: number;
  pageSize: number;
  search?: string | null;
};

export type ContactCategoryListResult = {
  items: ContactCategoryListItem[];
  paging: {
    totalRecords: number;
  };
};

export type GenericPagingRequest = {
  filters?: Record<string, unknown>;
  genericFields?: string[];
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
};
