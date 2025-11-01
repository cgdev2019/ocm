'use client';

import { AccountingCodeForm } from '@/features/accounting-codes/components/AccountingCodeForm';
import { useRouter } from '@/lib/i18n/navigation';

export const AccountingCodeCreateForm = () => {
  const router = useRouter();
  return (
    <AccountingCodeForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
