'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { DiscountPlanForm } from '@/features/discount-plans/components/DiscountPlanForm';
import { DiscountPlanList } from '@/features/discount-plans/components/DiscountPlanList';

export const DiscountPlanDashboard = () => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <Grid container spacing={4} component="section">
      <Grid size={{ xs: 12, lg: 5 }}>
        <DiscountPlanList onSelect={(code) => setSelectedCode(code)} />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <DiscountPlanForm selectedCode={selectedCode} />
      </Grid>
    </Grid>
  );
};
