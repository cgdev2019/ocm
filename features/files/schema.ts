import { z } from 'zod';

export const directoryFormSchema = z.object({
  path: z.string().min(1, 'forms.required'),
});

export const fileOperationFormSchema = z.object({
  path: z.string().min(1, 'forms.required'),
});

export const fileUploadFormSchema = z.object({
  filename: z.string().min(1, 'forms.required'),
  fileFormat: z.string().optional(),
  fileData: z.string().optional(),
});

export const base64UploadFormSchema = z.object({
  filepath: z.string().min(1, 'forms.required'),
  content: z.string().min(1, 'forms.required'),
});

export type DirectoryFormSchema = z.infer<typeof directoryFormSchema>;
export type FileOperationFormSchema = z.infer<typeof fileOperationFormSchema>;
export type FileUploadFormSchema = z.infer<typeof fileUploadFormSchema>;
export type Base64UploadFormSchema = z.infer<typeof base64UploadFormSchema>;
