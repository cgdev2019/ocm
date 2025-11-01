import { AccountingArticleEditForm } from '@/features/accounting-articles/components/AccountingArticleEditForm';

type PageProps = {
  params: { code: string };
};

export default function EditAccountingArticlePage({ params }: PageProps) {
  return <AccountingArticleEditForm code={params.code} />;
}
