import { ConfigurationEditForm } from '@/features/configuration/components/ConfigurationEditForm';

type Props = {
  params: Promise<{ key: string }>;
};

export default async function ConfigurationEditPage(props: Props) {
  const params = await props.params;
  const { key } = params;
  const keyName = decodeURIComponent(key);

  return <ConfigurationEditForm keyName={keyName} />;
}
