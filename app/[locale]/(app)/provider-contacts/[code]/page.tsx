import { ProviderContactDetail } from '@/features/provider-contact/components/ProviderContactDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function ProviderContactDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <ProviderContactDetail code={code} />;
}
