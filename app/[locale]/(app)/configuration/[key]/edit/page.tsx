import { ConfigurationEditForm } from '@/features/configuration/components/ConfigurationEditForm';

type Props = {
  params: Promise<{ key: string }>;
};

export default async function ConfigurationEditPage({ params }: Props) {
  const { key } = await params;
  const keyName = decodeURIComponent(key);

  return <ConfigurationEditForm keyName={keyName} />;
}
