import { ConfigurationDetail } from '@/features/configuration/components/ConfigurationDetail';

type Props = {
  params: Promise<{ key: string }>;
};

export default async function ConfigurationDetailPage({ params }: Props) {
  const { key } = await params;
  const keyName = decodeURIComponent(key);

  return <ConfigurationDetail keyName={keyName} />;
}
