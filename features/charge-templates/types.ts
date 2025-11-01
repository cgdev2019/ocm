import type { ChargeTemplateFormSchema } from '@/features/charge-templates/schema';
import type { components } from '@/lib/api/generated/schema';

export type ChargeTemplateDto = components['schemas']['ChargeTemplateDto'];
export type GetChargeTemplateResponseDto = components['schemas']['GetChargeTemplateResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type ChargeTemplateFormValues = ChargeTemplateFormSchema;

export type ChargeTemplateListItem = {
  code: string;
  description?: string;
  invoiceSubCategory?: string;
  status?: ChargeTemplateStatus;
};

export type ChargeTemplateListParams = {
  query?: string | null;
};

export type ChargeTemplateStatus = NonNullable<ChargeTemplateDto['status']>;
