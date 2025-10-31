import { ScriptInstanceEditForm } from '@/features/script-instances/components/ScriptInstanceEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function ScriptInstanceEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <ScriptInstanceEditForm code={code} />;
}
