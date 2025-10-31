import type { components } from '@/lib/api/generated/schema';

export type PdfInvoiceResponse = components['schemas']['PdfInvoiceResponse'];

export type PdfInvoiceResult = {
  actionMessage?: string;
  pdfInvoice: string[];
};

export type PdfInvoiceSearchParams = {
  invoiceNumber?: string;
  customerAccountCode?: string;
};
