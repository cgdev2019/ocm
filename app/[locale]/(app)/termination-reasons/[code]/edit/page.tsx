import { TerminationReasonEditForm } from '@/features/termination-reasons/components/TerminationReasonEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TerminationReasonEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <TerminationReasonEditForm code={code} />;
}
