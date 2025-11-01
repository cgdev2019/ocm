import { ContactCategoryEditForm } from '@/features/contact-categories/components/ContactCategoryEditForm';

export default function ContactCategoryEditPage({ params }: { params: { code: string } }) {
  return <ContactCategoryEditForm code={decodeURIComponent(params.code)} />;
}
