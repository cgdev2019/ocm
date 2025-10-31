import { InvoiceSubCategoryDetail } from '@/features/invoice-sub-categories/components/InvoiceSubCategoryDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoiceSubCategoryDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoiceSubCategoryDetail code={code} />;
}
