'use client';

import { Stack } from '@mui/material';
import { WalletBalanceSection } from '@/features/wallet/components/WalletBalanceSection';
import { WalletOperationForm } from '@/features/wallet/components/WalletOperationForm';
import { WalletOperationsList } from '@/features/wallet/components/WalletOperationsList';
import { WalletReservationForm } from '@/features/wallet/components/WalletReservationForm';
import { WalletTemplateForm } from '@/features/wallet/components/WalletTemplateForm';

export const WalletDashboard = () => (
  <Stack spacing={4} component="section">
    <WalletOperationsList />
    <WalletOperationForm />
    <WalletBalanceSection />
    <WalletReservationForm />
    <WalletTemplateForm />
  </Stack>
);
