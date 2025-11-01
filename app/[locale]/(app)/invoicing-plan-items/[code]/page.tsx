import { InvoicingPlanItemDetail } from '@/features/invoicing-plan-items/components/InvoicingPlanItemDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoicingPlanItemDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoicingPlanItemDetail code={code} />;
}
