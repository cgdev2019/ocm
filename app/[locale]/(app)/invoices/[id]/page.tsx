import { InvoiceDetail } from '@/features/invoices/components/InvoiceDetail';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InvoiceDetailPage(props: Props) {
  const params = await props.params;
  const { id } = params;

  return <InvoiceDetail id={id} />;
}
