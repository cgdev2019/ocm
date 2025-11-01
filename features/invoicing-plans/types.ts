import type { components } from '@/lib/api/generated/schema';

export type InvoicingPlanDto = components['schemas']['InvoicingPlanDto'];
export type InvoicingPlanResponseDto = components['schemas']['InvoicingPlanResponseDto'];
export type InvoicingPlansResponseDto = components['schemas']['InvoicingPlansResponseDto'];

export type InvoicingPlanListItem = {
  code: string;
  description?: string;
};

export type InvoicingPlanFormValues = {
  code: string;
  description?: string;
  updatedCode?: string;
};
