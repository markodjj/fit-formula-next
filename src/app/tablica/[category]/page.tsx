import { Metadata } from "next";
import { getAllNutritions, categories } from "@/lib/nutritions";
import GroceryTable from "@/components/GroceryTable";

interface PageProps {
  params: Promise<{ category: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.path,
  }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = categories.find(cat => cat.path === category);
  const categoryName = categoryInfo?.name || category;

  return {
    title: `Tabela namirnica - ${categoryName} | Fit Formula`,
    description: `Detaljna tabela kalorijskih vrednosti i nutritivnog sastava namirnica iz kategorije ${categoryName}. Pronađite kalorije, proteine, ugljene hidrate i masti za sve namirnice.`,
    keywords: [
      `${categoryName}`,
      "kalorije",
      "proteini",
      "ugljeni hidrati",
      "masti",
      "nutritivne vrednosti",
      "tabela namirnica",
      "ishrana",
      "fit formula"
    ],
    openGraph: {
      title: `Tabela namirnica - ${categoryName}`,
      description: `Detaljna tabela kalorijskih vrednosti i nutritivnog sastava namirnica iz kategorije ${categoryName}.`,
      type: "website",
      locale: "sr_RS",
    },
    twitter: {
      card: "summary_large_image",
      title: `Tabela namirnica - ${categoryName}`,
      description: `Detaljna tabela kalorijskih vrednosti i nutritivnog sastava namirnica iz kategorije ${categoryName}.`,
    },
    alternates: {
      canonical: `/tablica/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const allNutritions = await getAllNutritions();
  const categoryNutritions = allNutritions.filter(
    (item) => item.category.toLowerCase().replace(/\s/g, "-") === category
  );

  const categoryInfo = categories.find(cat => cat.path === category);
  const categoryName = categoryInfo?.name || category;

  return (
    <GroceryTable 
      groceries={categoryNutritions} 
      categoryName={categoryName}
    />
  );
} 