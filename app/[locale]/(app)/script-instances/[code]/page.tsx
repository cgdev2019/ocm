import { ScriptInstanceDetail } from '@/features/script-instances/components/ScriptInstanceDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function ScriptInstanceDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <ScriptInstanceDetail code={code} />;
}
