import type { CounterTemplateFormSchema } from '@/features/counter-templates/schema';
import type { components } from '@/lib/api/generated/schema';

export type CounterTemplateDto = components['schemas']['CounterTemplateDto'];
export type GetCounterTemplateResponseDto = components['schemas']['GetCounterTemplateResponseDto'];
export type CounterTemplatesResponseDto = components['schemas']['CounterTemplatesResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type CounterTemplateFormValues = CounterTemplateFormSchema;

export type CounterTemplateListItem = {
  code: string;
  description?: string;
  type?: CounterTemplateDto['type'];
  counterLevel?: CounterTemplateDto['counterLevel'];
  unity?: string;
};

export type CounterTemplateListParams = {
  query?: string | null;
};
