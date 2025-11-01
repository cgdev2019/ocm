import { z } from 'zod';

const payloadSchema = z.string().min(1, 'forms.required');

export const registerCdrSchema = z.object({
  payload: payloadSchema,
});

export const processCdrSchema = z.object({
  payload: payloadSchema,
});

export const chargeCdrSchema = z.object({
  payload: payloadSchema,
  isVirtual: z.boolean().optional(),
  rateTriggeredEdr: z.boolean().optional(),
  maxDepth: z.number().int().min(0).optional(),
  returnEDRs: z.boolean().optional(),
  returnWalletOperations: z.boolean().optional(),
  returnWalletOperationDetails: z.boolean().optional(),
  returnCounters: z.boolean().optional(),
  generateRTs: z.boolean().optional(),
});

export const notifyRejectedCdrsSchema = z.object({
  payload: payloadSchema,
  ipAddress: z.string().optional(),
});

export const reserveCdrSchema = z.object({
  payload: payloadSchema,
});

export const reservationActionSchema = z.object({
  reservationId: z.number({ invalid_type_error: 'forms.invalidNumber' }).int().min(1, 'forms.required'),
  consumedQuantity: z.number({ invalid_type_error: 'forms.invalidNumber' }).min(0).optional(),
});

export const createCdrSchema = z.object({
  eventDate: z.string().optional(),
  quantity: z.number({ invalid_type_error: 'forms.invalidNumber' }).min(0).optional(),
  accessCode: z.string().optional(),
  parameter1: z.string().optional(),
  parameter2: z.string().optional(),
  parameter3: z.string().optional(),
  extraParam: z.string().optional(),
});

export type RegisterCdrSchema = z.infer<typeof registerCdrSchema>;
export type ProcessCdrSchema = z.infer<typeof processCdrSchema>;
export type ChargeCdrSchema = z.infer<typeof chargeCdrSchema>;
export type NotifyRejectedCdrsSchema = z.infer<typeof notifyRejectedCdrsSchema>;
export type ReservationActionSchema = z.infer<typeof reservationActionSchema>;
export type ReserveCdrSchema = z.infer<typeof reserveCdrSchema>;
export type CreateCdrSchema = z.infer<typeof createCdrSchema>;
