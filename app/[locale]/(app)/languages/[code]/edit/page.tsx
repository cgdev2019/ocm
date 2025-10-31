import { LanguageEditForm } from '@/features/languages/components/LanguageEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function LanguageEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <LanguageEditForm code={code} />;
}
