import { InvoiceSubCategoryEditForm } from '@/features/invoice-sub-categories/components/InvoiceSubCategoryEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceSubCategoryEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceSubCategoryEditForm code={code} />;
}
