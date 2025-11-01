import { InvoicingPlanDetail } from '@/features/invoicing-plans/components/InvoicingPlanDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoicingPlanDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoicingPlanDetail code={code} />;
}
