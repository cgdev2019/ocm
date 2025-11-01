'use client';

import { AccountingPeriodForm } from '@/features/accounting-periods/components/AccountingPeriodForm';
import { useRouter } from '@/lib/i18n/navigation';

export const AccountingPeriodCreateForm = () => {
  const router = useRouter();

  return (
    <AccountingPeriodForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.fiscalYear}`)}
    />
  );
};
