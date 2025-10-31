import { OccTemplateEditForm } from '@/features/occ-templates/components/OccTemplateEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function OccTemplateEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <OccTemplateEditForm code={code} />;
}
