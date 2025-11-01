import type {
  WalletBalanceFormSchema,
  WalletOperationFiltersSchema,
  WalletOperationFormSchema,
  WalletReservationFormSchema,
  WalletTemplateFormSchema,
} from '@/features/wallet/schema';
import type { components } from '@/lib/api/generated/schema';

export type WalletOperationDto = components['schemas']['WalletOperationDto'];
export type WalletReservationDto = components['schemas']['WalletReservationDto'];
export type WalletTemplateDto = components['schemas']['WalletTemplateDto'];
export type WalletBalanceDto = components['schemas']['WalletBalanceDto'];
export type WalletBalanceResponseDto = components['schemas']['WalletBalanceResponseDto'];
export type FindWalletOperationsDto = components['schemas']['FindWalletOperationsDto'];
export type FindWalletOperationsResponseDto = components['schemas']['FindWalletOperationsResponseDto'];
export type WalletBalanceAmountsDto = components['schemas']['AmountsDto'];
export type PagingAndFiltering = components['schemas']['PagingAndFiltering'];
export type ActionStatus = components['schemas']['ActionStatus'];
export type GetWalletTemplateResponseDto = components['schemas']['GetWalletTemplateResponseDto'];

export type WalletOperationFilters = WalletOperationFiltersSchema;
export type WalletOperationFormValues = WalletOperationFormSchema;
export type WalletReservationFormValues = WalletReservationFormSchema;
export type WalletBalanceFormValues = WalletBalanceFormSchema;
export type WalletTemplateFormValues = WalletTemplateFormSchema;

export type WalletOperationListItem = {
  id: string;
  code: string;
  description?: string;
  userAccount?: string;
  walletTemplate?: string;
  type?: WalletOperationDto['type'];
  status?: WalletOperationDto['status'];
  quantity?: number;
  unitAmountWithoutTax?: number;
  unitAmountWithTax?: number;
  amountWithoutTax?: number;
  amountWithTax?: number;
  amountTax?: number;
  currency?: string;
  operationDate?: string;
  subscription?: string;
  offerCode?: string;
};

export type WalletOperationsResult = {
  items: WalletOperationListItem[];
  totalRecords: number;
};

export type WalletBalanceResult = {
  amountWithTax?: number;
  amountWithoutTax?: number;
  message?: string;
};
