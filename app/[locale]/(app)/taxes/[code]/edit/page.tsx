import { TaxEditForm } from '@/features/taxes/components/TaxEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TaxEditPage(props: Props) {
  const { code } = await props.params;

  return <TaxEditForm code={code} />;
}
