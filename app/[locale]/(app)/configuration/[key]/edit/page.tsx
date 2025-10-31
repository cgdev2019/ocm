import { ConfigurationEditForm } from '@/features/configuration/components/ConfigurationEditForm';

type Props = {
  params: { key: string };
};

export default function ConfigurationEditPage({ params }: Props) {
  const keyName = decodeURIComponent(params.key);
  return <ConfigurationEditForm keyName={keyName} />;
}
