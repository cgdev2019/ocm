import { InvoiceTypeDetail } from '@/features/invoice-types/components/InvoiceTypeDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceTypeDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceTypeDetail code={code} />;
}
