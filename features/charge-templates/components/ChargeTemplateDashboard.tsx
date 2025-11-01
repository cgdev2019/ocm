'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { ChargeTemplateForm } from '@/features/charge-templates/components/ChargeTemplateForm';
import { ChargeTemplateList } from '@/features/charge-templates/components/ChargeTemplateList';

export const ChargeTemplateDashboard = () => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <Grid container spacing={4} component="section">
      <Grid size={{ xs: 12, lg: 5 }}>
        <ChargeTemplateList onSelect={(code) => setSelectedCode(code)} />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <ChargeTemplateForm selectedCode={selectedCode} />
      </Grid>
    </Grid>
  );
};
