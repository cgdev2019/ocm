import { ContactCategoryDetail } from '@/features/contact-categories/components/ContactCategoryDetail';

export default function ContactCategoryDetailPage({ params }: { params: { code: string } }) {
  return <ContactCategoryDetail code={decodeURIComponent(params.code)} />;
}
