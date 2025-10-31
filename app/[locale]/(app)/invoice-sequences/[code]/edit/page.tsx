import { InvoiceSequenceEditForm } from '@/features/invoice-sequences/components/InvoiceSequenceEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceSequenceEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceSequenceEditForm code={code} />;
}
