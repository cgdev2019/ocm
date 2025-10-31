import { ConfigurationDetail } from '@/features/configuration/components/ConfigurationDetail';

type Props = {
  params: { key: string };
};

export default function ConfigurationDetailPage({ params }: Props) {
  const keyName = decodeURIComponent(params.key);
  return <ConfigurationDetail keyName={keyName} />;
}
