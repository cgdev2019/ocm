import type { components } from '@/lib/api/generated/schema';

export type ChargeCdrResponseDto = components['schemas']['ChargeCDRResponseDto'];
export type ProcessCdrResponseDto = components['schemas']['ProcessCDRResponseDto'];
export type CdrReservationResponseDto = components['schemas']['CdrReservationResponseDto'];
export type PrepaidReservationDto = components['schemas']['PrepaidReservationDto'];
export type CdrDto = components['schemas']['CdrDto'];
export type CdrListDto = components['schemas']['CdrListDto'];

export type RegisterCdrFormValues = {
  payload: string;
};

export type ProcessCdrFormValues = {
  payload: string;
};

export type ChargeCdrFormValues = {
  payload: string;
  isVirtual?: boolean;
  rateTriggeredEdr?: boolean;
  maxDepth?: number;
  returnEDRs?: boolean;
  returnWalletOperations?: boolean;
  returnWalletOperationDetails?: boolean;
  returnCounters?: boolean;
  generateRTs?: boolean;
};

export type NotifyRejectedCdrsFormValues = {
  payload: string;
  ipAddress?: string;
};

export type ReservationActionFormValues = {
  reservationId: number;
  consumedQuantity?: number;
};

export type ReserveCdrFormValues = {
  payload: string;
};

export type CreateCdrFormValues = {
  eventDate?: string;
  quantity?: number;
  accessCode?: string;
  parameter1?: string;
  parameter2?: string;
  parameter3?: string;
  extraParam?: string;
};

export type ChargeCdrSummary = {
  message?: string;
  amountWithoutTax?: number;
  amountTax?: number;
  amountWithTax?: number;
  walletOperationCount?: number;
  reservationIds?: number[];
  edrIds?: number[];
};

export type ProcessCdrSummary = {
  message?: string;
  processedCount: number;
  rejectedCount: number;
  errors: Array<{ cdrId?: number; rejectReason?: string }>;
};

export type ReservationSummary = {
  message?: string;
  reservationId?: number;
  availableQuantity?: number;
};
