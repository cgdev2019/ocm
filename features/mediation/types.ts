import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/lib/api/helpers';

export type ChargeCdrResponseDto = components['schemas']['ChargeCDRResponseDto'];
export type ProcessCdrResponseDto = components['schemas']['ProcessCDRResponseDto'];
export type CdrReservationResponseDto = components['schemas']['CdrReservationResponseDto'];
export type PrepaidReservationDto = components['schemas']['PrepaidReservationDto'];
export type CdrDto = components['schemas']['CdrDto'];
export type CdrListDto = components['schemas']['CdrListDto'];

export type CdrProcessingMode = 'STOP_ON_FIRST_FAIL' | 'PROCESS_ALL' | 'ROLLBACK_ON_ERROR';

export type RegisterCdrFormValues = {
  payload: string;
  isReturnEDRs?: boolean;
  mode?: CdrProcessingMode;
};

export type ProcessCdrFormValues = {
  payload: string;
};

export type ChargeCdrFormValues = {
  payload: string;
  isVirtual?: boolean;
  isRateTriggeredEdr?: boolean;
  maxDepth?: number;
  isReturnEDRs?: boolean;
  isReturnWalletOperations?: boolean;
  isReturnWalletOperationDetails?: boolean;
  isReturnCounters?: boolean;
  isGenerateRTs?: boolean;
  mode?: CdrProcessingMode;
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
  isReturnEDRs?: boolean;
  mode?: CdrProcessingMode;
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

export type CdrListInputRequest = {
  cdrs: string[];
  isReturnEDRs?: boolean;
  mode?: CdrProcessingMode;
};

export type ChargeCdrListInputRequest = CdrListInputRequest & {
  isVirtual?: boolean;
  isRateTriggeredEdr?: boolean;
  isReturnWalletOperations?: boolean;
  isReturnWalletOperationDetails?: boolean;
  isReturnCounters?: boolean;
  isGenerateRTs?: boolean;
  maxDepth?: number;
};

export type ChargeCdrListResult = {
  actionStatus?: ActionStatus | null;
  amountWithoutTax?: number | null;
  amountTax?: number | null;
  amountWithTax?: number | null;
  walletOperationCount?: number | null;
  chargedCDRs?: (ChargeCdrResponseDto | null | undefined)[] | null;
};
