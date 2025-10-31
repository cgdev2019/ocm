import { InvoiceSequenceDetail } from '@/features/invoice-sequences/components/InvoiceSequenceDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceSequenceDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceSequenceDetail code={code} />;
}
