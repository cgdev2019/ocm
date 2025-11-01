import type { components } from '@/lib/api/generated/schema';

export type ContactDto = components['schemas']['ContactDto'];

export type ContactListResponse = {
  actionStatus?: components['schemas']['ActionStatus'] | null;
  data?: ContactDto[] | null;
  results?: ContactDto[] | null;
  list?: ContactDto[] | null;
  contacts?:
    | ContactDto[]
    | {
        contact?: ContactDto[] | null;
        totalNumberOfRecords?: number | null;
      }
    | null;
  totalNumberOfRecords?: number | null;
  paging?: {
    totalNumberOfRecords?: number | null;
  } | null;
};

export type ContactListItem = {
  code: string;
  description?: string;
  company?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
};

export type ContactFormValues = {
  code: string;
  description?: string;
  company?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  comment?: string;
};

export type ContactDetail = ContactFormValues;

export type ContactListParams = {
  page: number;
  pageSize: number;
  search?: string | null;
};

export type ContactListResult = {
  items: ContactListItem[];
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
