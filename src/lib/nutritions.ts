export interface Nutrition {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fats: number;
  type: string;
  macronutrient: string;
  category: string;
}

export const categories = [
  { name: "Meso", path: "meso" },
  { name: "Žitarice", path: "zitarice" },
  { name: "Povrće", path: "povrce" },
  { name: "Voće", path: "voce" },
  { name: "Jaja", path: "jaja" },
  { name: "Riba", path: "riba" },
  { name: "Mlečni proizvodi", path: "mlecni-proizvodi" },
];

export async function getAllNutritions(): Promise<Nutrition[]> {
  // In a real app, this would fetch from an API
  // For now, we'll import the JSON data
  const nutritionsData = await import('./nutritions.json');
  return nutritionsData.default;
}

export async function getNutritionsByCategory(category: string): Promise<Nutrition[]> {
  const allNutritions = await getAllNutritions();
  return allNutritions.filter(
    (item: Nutrition) => item.category.toLowerCase().replace(/\s/g, "-") === category
  );
} 