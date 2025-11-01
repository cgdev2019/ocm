import type { components } from '@/lib/api/generated/schema';

export type InvoicingPlanItemDto = components['schemas']['InvoicingPlanItemDto'];
export type InvoicingPlanItemResponseDto = components['schemas']['InvoicingPlanItemResponseDto'];
export type InvoicingPlanItemsResponseDto = components['schemas']['InvoicingPlanItemsResponseDto'];

export type InvoicingPlanItemListItem = {
  code: string;
  description?: string;
  billingPlanCode?: string;
  advancement?: number;
  rateToBill?: number;
};

export type InvoicingPlanItemFormValues = {
  code: string;
  description?: string;
  billingPlanCode?: string;
  advancement?: number;
  rateToBill?: number;
  updatedCode?: string;
};
