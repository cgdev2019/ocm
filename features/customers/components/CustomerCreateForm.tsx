'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CustomerForm } from '@/features/customers/components/CustomerForm';

export const CustomerCreateForm = () => {
  const router = useRouter();
  return <CustomerForm onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
