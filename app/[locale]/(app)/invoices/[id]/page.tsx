import { InvoiceDetail } from '@/features/invoices/components/InvoiceDetail';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InvoiceDetailPage({ params }: Props) {
  const { id } = await params;

  return <InvoiceDetail id={id} />;
}
