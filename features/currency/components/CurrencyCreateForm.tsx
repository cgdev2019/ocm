'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CurrencyForm } from '@/features/currency/components/CurrencyForm';

export const CurrencyCreateForm = () => {
  const router = useRouter();
  return <CurrencyForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
