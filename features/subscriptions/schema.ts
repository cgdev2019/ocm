import { z } from 'zod';

const optionalString = z
  .string()
  .optional()
  .or(z.literal(''))
  .transform((value) => (value ? value : undefined));

export const subscriptionFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  versionNumber: z.preprocess(
    (value) => {
      if (typeof value === 'number') {
        return value;
      }
      if (typeof value === 'string' && value.trim() !== '') {
        const parsed = Number(value);
        return Number.isNaN(parsed) ? undefined : parsed;
      }
      return undefined;
    },
    z
      .number({ required_error: 'forms.required', invalid_type_error: 'forms.invalidNumber' })
      .int('forms.invalidNumber'),
  ),
  userAccount: z.string().min(1, 'forms.required'),
  offerTemplate: z.string().min(1, 'forms.required'),
  subscriptionDate: z.string().min(1, 'forms.required'),
  terminationDate: optionalString,
  endAgreementDate: optionalString,
  validityDate: optionalString,
  status: z
    .enum(['CREATED', 'ACTIVE', 'CANCELED', 'RESILIATED', 'CLOSED', 'SUSPENDED', 'PENDING'])
    .optional(),
  billingCycle: z.string().min(1, 'forms.required'),
  seller: z.string().min(1, 'forms.required'),
  autoEndOfEngagement: z.boolean().optional(),
  renewed: z.boolean().optional(),
  renewalNotifiedDate: optionalString,
  email: z
    .string()
    .email('forms.invalidEmail')
    .optional()
    .or(z.literal(''))
    .transform((value) => (value ? value : undefined)),
});

export type SubscriptionFormSchema = z.infer<typeof subscriptionFormSchema>;
