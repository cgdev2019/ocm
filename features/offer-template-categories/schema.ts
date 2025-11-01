import { z } from 'zod';

export const offerTemplateCategoryFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  name: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  parentId: z.string().optional(),
  active: z.boolean().optional(),
  disabled: z.boolean().optional(),
});

export type OfferTemplateCategoryFormSchema = z.infer<typeof offerTemplateCategoryFormSchema>;
