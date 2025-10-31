import { TitleEditForm } from '@/features/titles/components/TitleEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TitleEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <TitleEditForm code={code} />;
}
