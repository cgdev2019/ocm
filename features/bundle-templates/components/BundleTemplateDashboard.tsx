'use client';

import { Stack } from '@mui/material';
import { BundleTemplateForm } from '@/features/bundle-templates/components/BundleTemplateForm';

export const BundleTemplateDashboard = () => (
  <Stack spacing={4} component="section">
    <BundleTemplateForm />
  </Stack>
);
