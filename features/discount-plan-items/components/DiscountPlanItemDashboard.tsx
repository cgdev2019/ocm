'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { DiscountPlanItemForm } from '@/features/discount-plan-items/components/DiscountPlanItemForm';
import { DiscountPlanItemList } from '@/features/discount-plan-items/components/DiscountPlanItemList';

export const DiscountPlanItemDashboard = () => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <Grid container spacing={4} component="section">
      <Grid size={{ xs: 12, lg: 5 }}>
        <DiscountPlanItemList onSelect={(code) => setSelectedCode(code)} />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <DiscountPlanItemForm selectedCode={selectedCode} />
      </Grid>
    </Grid>
  );
};
