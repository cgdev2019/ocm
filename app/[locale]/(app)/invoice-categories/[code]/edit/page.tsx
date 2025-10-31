import { InvoiceCategoryEditForm } from '@/features/invoice-categories/components/InvoiceCategoryEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceCategoryEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceCategoryEditForm code={code} />;
}
