import { InvoiceDetail } from '@/features/invoices/components/InvoiceDetail';

type Props = {
  params: { id: string };
};

export default function InvoiceDetailPage({ params }: Props) {
  return <InvoiceDetail id={params.id} />;
}
