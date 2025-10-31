import type { components } from '@/lib/api/generated/schema';

type PagingAndFiltering = components['schemas']['PagingAndFiltering'];

export type InvoiceDto = components['schemas']['InvoiceDto'];
export type InvoicesDto = components['schemas']['InvoicesDto'];
export type GetInvoiceResponseDto = components['schemas']['GetInvoiceResponseDto'];
export type InvoicesResponseDto = components['schemas']['InvoicesDto'];
export type CreateInvoiceResponseDto = components['schemas']['CreateInvoiceResponseDto'];

export type InvoiceListItem = {
  id: number | string;
  invoiceNumber?: string;
  status?: string;
  invoiceType?: string;
  amountWithTax?: number;
  dueDate?: string;
  customerAccount?: string;
};

export type InvoiceMode = 'AGGREGATED' | 'DETAILLED';

export type InvoiceFormValues = {
  billingAccountCode: string;
  invoiceType: string;
  invoiceMode: InvoiceMode;
  invoiceDate: string;
  dueDate: string;
  rawAmount: number;
  discountAmount: number;
  amountWithTax?: number;
  amountWithoutTax?: number;
};

export type InvoicesListParams = {
  query?: string;
} & Pick<PagingAndFiltering, 'limit' | 'offset' | 'sortBy' | 'sortOrder'>;

export type InvoicesListPaging = {
  totalRecords: number;
  limit: number;
  offset: number;
  sortBy?: PagingAndFiltering['sortBy'];
  sortOrder?: PagingAndFiltering['sortOrder'];
};

export type InvoicesList = {
  items: InvoiceListItem[];
  paging: InvoicesListPaging;
};
