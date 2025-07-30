import { Metadata } from 'next';
import { getArticleByName, getArticlePaths } from '@/lib/articles';
import ArticlePage from '@/components/article-page';

interface PageProps {
  params: Promise<{ article: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

// Generate static paths for all articles
export async function generateStaticParams() {
  return getArticlePaths();
}

// Generate metadata for each article page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { article } = await params;
  const articleData = getArticleByName(article);
  
  if (!articleData) {
    return {
      title: 'Članak nije pronađen',
      description: 'Traženi članak nije pronađen.',
    };
  }

  const title = `${articleData.name} - Nutritivne vrednosti i zdravstvene prednosti`;
  const description = articleData.text1.replace(/<[^>]*>/g, '').substring(0, 160);
  
  return {
    title,
    description,
    keywords: [
      articleData.name,
      'nutritivne vrednosti',
      'kalorije',
      'proteini',
      'zdravlje',
      'ishrana',
      'fit formula'
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://fitformula.com/article/${article}`,
      siteName: 'Fit Formula',
      locale: 'sr_RS',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://fitformula.com/article/${article}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { article } = await params;
  const articleData = getArticleByName(article);
  
  if (!articleData) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Članak nije pronađen</h1>
          <p className="text-muted-foreground">
            Traženi članak nije pronađen. Molimo proverite URL adresu.
          </p>
        </div>
      </div>
    );
  }

  return <ArticlePage article={articleData} />;
} 