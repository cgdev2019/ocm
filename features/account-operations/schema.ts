import { z } from 'zod';

const numericString = z
  .string()
  .min(1, 'forms.required')
  .refine((value) => !Number.isNaN(Number(value)), 'forms.invalidNumber');

const optionalNumericString = z
  .string()
  .optional()
  .refine(
    (value) => {
      if (value === undefined || value === null || value.trim().length === 0) {
        return true;
      }
      return !Number.isNaN(Number(value));
    },
    'forms.invalidNumber',
  );

export const assignAccountOperationFormSchema = z.object({
  accountOperationId: numericString,
  customerAccountCode: z.string().min(1, 'forms.required'),
  customerAccountId: optionalNumericString,
});

export type AssignAccountOperationFormSchema = z.infer<typeof assignAccountOperationFormSchema>;
