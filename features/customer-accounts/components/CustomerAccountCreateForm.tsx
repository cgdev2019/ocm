'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CustomerAccountForm } from '@/features/customer-accounts/components/CustomerAccountForm';

export const CustomerAccountCreateForm = () => {
  const router = useRouter();
  return <CustomerAccountForm onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
