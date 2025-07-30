import { getAllNutritions } from "@/lib/nutritions";
import ArticlePageClient from "@/components/article-page-client";

export default async function ArticlePage() {
  const nutritions = await getAllNutritions();
  
  return <ArticlePageClient nutritions={nutritions} />;
} 