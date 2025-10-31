import { InvoiceCategoryDetail } from '@/features/invoice-categories/components/InvoiceCategoryDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceCategoryDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceCategoryDetail code={code} />;
}
