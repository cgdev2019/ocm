import { z } from 'zod';

export const pdfInvoiceSearchSchema = z.object({
  invoiceNumber: z.string().optional(),
  customerAccountCode: z.string().optional(),
});

export type PdfInvoiceSearchSchema = z.infer<typeof pdfInvoiceSearchSchema>;
