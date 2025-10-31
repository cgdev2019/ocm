import { ProviderContactEditForm } from '@/features/provider-contact/components/ProviderContactEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function ProviderContactEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <ProviderContactEditForm code={code} />;
}
