import { InvoiceTypeEditForm } from '@/features/invoice-types/components/InvoiceTypeEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceTypeEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceTypeEditForm code={code} />;
}
