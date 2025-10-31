'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CurrencyIsoForm } from '@/features/currency-iso/components/CurrencyIsoForm';

export const CurrencyIsoCreateForm = () => {
  const router = useRouter();
  return <CurrencyIsoForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
