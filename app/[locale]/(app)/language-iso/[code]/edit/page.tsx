import { LanguageIsoEditForm } from '@/features/language-iso/components/LanguageIsoEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function LanguageIsoEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <LanguageIsoEditForm code={code} />;
}
