'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { OfferTemplateCategoryForm } from '@/features/offer-template-categories/components/OfferTemplateCategoryForm';
import { OfferTemplateCategoryList } from '@/features/offer-template-categories/components/OfferTemplateCategoryList';

export const OfferTemplateCategoryDashboard = () => {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <Grid container spacing={4} component="section">
      <Grid size={{ xs: 12, lg: 5 }}>
        <OfferTemplateCategoryList onSelect={(code) => setSelectedCode(code)} />
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <OfferTemplateCategoryForm selectedCode={selectedCode} />
      </Grid>
    </Grid>
  );
};
