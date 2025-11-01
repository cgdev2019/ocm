import { notFound } from 'next/navigation';
import { ContactDetail } from '@/features/contacts/components/ContactDetail';

export default function ContactDetailPage({ params }: { params: { code?: string } }) {
  if (!params.code) {
    notFound();
  }

  return <ContactDetail code={decodeURIComponent(params.code)} />;
}
