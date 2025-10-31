import { z } from 'zod';

export const fileFormatFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  fileNamePattern: z.string().optional(),
  fileNameUniqueness: z.boolean().optional(),
  fileTypes: z.array(z.string().min(1)).optional(),
  configurationTemplate: z.string().optional(),
  recordName: z.string().optional(),
  inputDirectory: z.string().optional(),
  outputDirectory: z.string().optional(),
  rejectDirectory: z.string().optional(),
  archiveDirectory: z.string().optional(),
  jobCode: z.string().optional(),
});

export type FileFormatFormSchema = z.infer<typeof fileFormatFormSchema>;
