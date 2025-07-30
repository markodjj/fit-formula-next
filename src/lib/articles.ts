import articlesData from './articles.json';

export interface Article {
  id: string;
  name: string;
  text1: string;
  kalorije: {
    p1: string;
    k: string;
    p2: string;
  };
  proteini: string;
  hidrati: string;
  masti: string;
  vlakna: string;
  zdravlje: {
    t1: string;
    k: string;
  };
}

export interface ArticleData {
  [key: string]: Article;
}

// Convert the JSON data to our Article interface
export function getAllArticles(): Article[] {
  const articles: Article[] = [];
  
  for (const [name, data] of Object.entries(articlesData)) {
    articles.push({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      ...data as Omit<Article, 'id' | 'name'>
    });
  }
  
  return articles;
}

export function getArticleByName(name: string): Article | null {
  const articles = getAllArticles();
  
  // Decode URL-encoded characters and normalize
  const decodedName = decodeURIComponent(name);
  const normalizedName = decodedName.toLowerCase().replace(/\s+/g, '-');
  
  return articles.find(article => 
    article.name.toLowerCase() === decodedName.toLowerCase() ||
    article.id === normalizedName ||
    article.id === name.toLowerCase().replace(/\s+/g, '-')
  ) || null;
}

// Generate static paths for all articles
export function getArticlePaths() {
  const articles = getAllArticles();
  return articles.map(article => ({
    article: article.id
  }));
} 