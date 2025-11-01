'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { CounterTemplateForm } from '@/features/counter-templates/components/CounterTemplateForm';
import { CounterTemplateList } from '@/features/counter-templates/components/CounterTemplateList';

export const CounterTemplateDashboard = () => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <Grid container spacing={4} component="section">
      <Grid size={{ xs: 12, lg: 5 }}>
        <CounterTemplateList onSelect={(code) => setSelectedCode(code)} />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <CounterTemplateForm selectedCode={selectedCode} />
      </Grid>
    </Grid>
  );
};
