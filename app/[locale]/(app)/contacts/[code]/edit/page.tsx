import { notFound } from 'next/navigation';
import { ContactEditForm } from '@/features/contacts/components/ContactEditForm';

export default function ContactEditPage({ params }: { params: { code?: string } }) {
  if (!params.code) {
    notFound();
  }

  return <ContactEditForm code={decodeURIComponent(params.code)} />;
}
