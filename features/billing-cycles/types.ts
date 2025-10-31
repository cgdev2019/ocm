import type { components } from '@/lib/api/generated/schema';

export type BillingCycleDto = components['schemas']['BillingCycleDto'];
export type GetBillingCycleResponse = components['schemas']['GetBillingCycleResponse'];
export type BillingCyclesResponseDto = components['schemas']['BillingCyclesResponseDto'];

export type BillingCycleListItem = {
  code: string;
  description?: string;
  calendar: string;
  type?: BillingCycleDto['type'];
  invoiceDateDelay?: number;
  dueDateDelay?: number;
};

export type BillingCycleFormValues = {
  code: string;
  description?: string;
  calendar: string;
  invoiceDateDelayEL: string;
  invoiceDateDelay?: number;
  dueDateDelay?: number;
  dueDateDelayEL?: string;
  type?: BillingCycleDto['type'];
  referenceDate?: BillingCycleDto['referenceDate'];
  invoicingThreshold?: number;
  computeDatesAtValidation?: boolean;
};
