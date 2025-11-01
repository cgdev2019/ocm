'use client';

import { ContactCategoryForm } from '@/features/contact-categories/components/ContactCategoryForm';
import { useRouter } from '@/lib/i18n/navigation';

export const ContactCategoryCreateForm = () => {
  const router = useRouter();
  return (
    <ContactCategoryForm
      mode="create"
      onSuccess={(values) => router.replace(`../${encodeURIComponent(values.code)}`)}
    />
  );
};
