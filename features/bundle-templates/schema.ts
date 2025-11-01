import { z } from 'zod';

export const bundleTemplateFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  name: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  modelCode: z.string().optional(),
  lifeCycleStatus: z.enum([
    'IN_STUDY',
    'IN_DESIGN',
    'IN_TEST',
    'ACTIVE',
    'LAUNCHED',
    'RETIRED',
    'OBSOLETE',
    'REJECTED',
  ]),
  productChargeTemplateCodes: z.string().min(1, 'forms.required'),
  bundleProductTemplateCodes: z.string().min(1, 'forms.required'),
  walletTemplateCodes: z.string().optional(),
  validFrom: z.string().optional(),
  validTo: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type BundleTemplateFormSchema = z.infer<typeof bundleTemplateFormSchema>;
