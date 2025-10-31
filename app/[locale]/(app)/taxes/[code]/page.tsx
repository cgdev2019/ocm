import { TaxDetail } from '@/features/taxes/components/TaxDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TaxDetailPage(props: Props) {
  const { code } = await props.params;

  return <TaxDetail code={code} />;
}
