import { InvoicingPlanEditForm } from '@/features/invoicing-plans/components/InvoicingPlanEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function InvoicingPlanEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <InvoicingPlanEditForm code={code} />;
}
