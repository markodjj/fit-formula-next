import { getAllNutritions } from "@/lib/nutritions";
import ComparisonPageClient from "@/components/comparison-page-client";

export default async function ComparisonPage() {
  const nutritions = await getAllNutritions();
  return <ComparisonPageClient nutritions={nutritions} />;
} 