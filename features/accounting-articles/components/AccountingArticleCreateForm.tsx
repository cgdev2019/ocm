'use client';

import { AccountingArticleForm } from '@/features/accounting-articles/components/AccountingArticleForm';
import { useRouter } from '@/lib/i18n/navigation';

export const AccountingArticleCreateForm = () => {
  const router = useRouter();
  return (
    <AccountingArticleForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
    />
  );
};
