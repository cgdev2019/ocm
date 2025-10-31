import { ConfigurationDetail } from '@/features/configuration/components/ConfigurationDetail';

type Props = {
  params: Promise<{ key: string }>;
};

export default async function ConfigurationDetailPage(props: Props) {
  const params = await props.params;
  const { key } = params;
  const keyName = decodeURIComponent(key);

  return <ConfigurationDetail keyName={keyName} />;
}
