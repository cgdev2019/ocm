'use client';

import { SellerForm } from '@/features/sellers/components/SellerForm';
import { useRouter } from '@/lib/i18n/navigation';

export const SellerCreateForm = () => {
  const router = useRouter();
  return <SellerForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
