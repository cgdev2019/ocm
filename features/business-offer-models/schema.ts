import { z } from 'zod';

export const businessOfferModelFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  disabled: z.boolean().optional(),
  license: z
    .enum([
      'APACHE',
      'BSD3_N',
      'BSD3_R',
      'BSD2_S',
      'FREE_BSD',
      'GPL',
      'AGPL',
      'LGPL',
      'MIT',
      'MOZ',
      'CDDL',
      'EPL',
      'OPEN',
      'COM',
    ])
    .optional(),
  offerTemplateCode: z.string().min(1, 'forms.required'),
});

export type BusinessOfferModelFormSchema = z.infer<typeof businessOfferModelFormSchema>;
