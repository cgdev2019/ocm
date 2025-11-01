'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { BusinessOfferModelForm } from '@/features/business-offer-models/components/BusinessOfferModelForm';
import { BusinessOfferModelList } from '@/features/business-offer-models/components/BusinessOfferModelList';

export const BusinessOfferModelDashboard = () => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <Grid container spacing={4} component="section">
      <Grid size={{ xs: 12, lg: 5 }}>
        <BusinessOfferModelList onSelect={(code) => setSelectedCode(code)} />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <BusinessOfferModelForm selectedCode={selectedCode} />
      </Grid>
    </Grid>
  );
};
