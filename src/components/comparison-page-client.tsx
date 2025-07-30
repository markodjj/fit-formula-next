"use client";

import { useState, useMemo } from "react";
import { Nutrition } from "@/lib/nutritions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModernButton } from "@/components/shared";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, X, ExternalLink, Scale, Target, BarChart3, Info } from "lucide-react";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

interface ComparisonPageClientProps {
  nutritions: Nutrition[];
}

export default function ComparisonPageClient({ nutritions }: ComparisonPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroceries, setSelectedGroceries] = useState<Nutrition[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get articles data for linking
  const articles = getAllArticles();

  // Function to find corresponding article for nutrition item
  const findArticleForNutrition = (nutritionName: string) => {
    return articles.find(article => 
      article.name.toLowerCase() === nutritionName.toLowerCase()
    );
  };

  // Function to create proper URL for article
  const createArticleUrl = (article: ReturnType<typeof getAllArticles>[0]) => {
    return `/article/${encodeURIComponent(article.id)}`;
  };

  // Filter groceries based on search term
  const filteredGroceries = useMemo(() => {
    return nutritions.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [nutritions, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredGroceries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGroceries = filteredGroceries.slice(startIndex, endIndex);

  // Reset to first page when search term changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Add grocery to comparison
  const addToComparison = (grocery: Nutrition) => {
    if (selectedGroceries.length < 5 && !selectedGroceries.find(item => item.id === grocery.id)) {
      setSelectedGroceries([...selectedGroceries, grocery]);
    }
  };

  // Remove grocery from comparison
  const removeFromComparison = (groceryId: number) => {
    setSelectedGroceries(selectedGroceries.filter(item => item.id !== groceryId));
  };

  // Clear all comparisons
  const clearComparison = () => {
    setSelectedGroceries([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Searchable Grocery List */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Uporedi Nutritivne Vrednosti
                </h1>
              </div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Pronađite namirnice u listi sa leve strane i dodajte ih u tabelu za poređenje. 
                  Možete dodati maksimalno 5 namirnica za poređenje njihovih nutritivnih vrednosti.
                </p>
                <p>
                  Klikom na dugme &ldquo;Dodaj&rdquo; dodajte namirnicu u tabelu za poređenje. 
                  Klikom na dugme &ldquo;Pročitaj&rdquo; možete pristupiti detaljnim člancima o namirnicama.
                </p>
              </div>
            </div>

            {/* Searchable Grocery List */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900">Pretraga namirnica</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Pretražite namirnice..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Results Info */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>
                    Prikazano {startIndex + 1}-{Math.min(endIndex, filteredGroceries.length)} od {filteredGroceries.length} namirnica
                  </span>
                  {searchTerm && (
                    <span>
                      Rezultati za: &ldquo;{searchTerm}&rdquo;
                    </span>
                  )}
                </div>

                {/* Grocery List */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {currentGroceries.map((item) => (
                    <Card 
                      key={item.id} 
                      className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 border-gray-200 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.calories} kcal • {item.protein}g proteina • {item.carbohydrates}g ugljenih hidrata • {item.fats}g masti
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200">
                              {item.macronutrient}
                            </span>
                            {findArticleForNutrition(item.name) && (
                              <Link href={createArticleUrl(findArticleForNutrition(item.name)!)}>
                                <ModernButton variant="outline" size="sm">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Pročitaj
                                </ModernButton>
                              </Link>
                            )}
                            <ModernButton
                              variant="outline"
                              size="sm"
                              onClick={() => addToComparison(item)}
                              disabled={selectedGroceries.length >= 5 || selectedGroceries.find(g => g.id === item.id) !== undefined}
                            >
                              <Plus className="h-4 w-4 mr-1" />
                              Dodaj
                            </ModernButton>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      Strana {currentPage} od {totalPages}
                    </div>
                    <div className="flex items-center space-x-3">
                      <ModernButton
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Prethodna
                      </ModernButton>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <ModernButton
                            key={page}
                            variant={currentPage === page ? "gradient" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="w-8 h-8 p-0"
                          >
                            {page}
                          </ModernButton>
                        ))}
                      </div>
                      <ModernButton
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Sledeća
                      </ModernButton>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Comparison Table */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Tabela za poređenje
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Dodajte namirnice sa leve strane da biste uporedili njihove nutritivne vrednosti.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                      <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900">
                        Poređenje namirnica ({selectedGroceries.length}/5)
                      </CardTitle>
                    </div>
                  </div>
                  {selectedGroceries.length > 0 && (
                    <ModernButton variant="outline" size="sm" onClick={clearComparison}>
                      <X className="h-4 w-4 mr-1" />
                      Obriši sve
                    </ModernButton>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {selectedGroceries.length === 0 ? (
                  <div className="text-center py-12 text-gray-600">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                    </div>
                    <p className="text-lg font-medium mb-2">Nema namirnica za poređenje</p>
                    <p className="text-sm">Dodajte namirnice sa leve strane da biste počeli poređenje</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Namirnica</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Kalorije</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Proteini</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Ugljeni hidrati</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Masti</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Akcija</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedGroceries.map((item, index) => (
                          <tr 
                            key={item.id} 
                            className={`border-b border-gray-200 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                            } hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-colors duration-200`}
                          >
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <span className="font-semibold text-gray-900">{item.name}</span>
                                <Badge className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200">
                                  {item.macronutrient}
                                </Badge>
                              </div>
                            </td>
                            <td className="text-right py-3 px-4 font-semibold text-blue-600">{item.calories} kcal</td>
                            <td className="text-right py-3 px-4 font-semibold text-green-600">{item.protein}g</td>
                            <td className="text-right py-3 px-4 font-semibold text-orange-600">{item.carbohydrates}g</td>
                            <td className="text-right py-3 px-4 font-semibold text-purple-600">{item.fats}g</td>
                            <td className="text-right py-3 px-4">
                              <ModernButton
                                variant="outline"
                                size="sm"
                                onClick={() => removeFromComparison(item.id)}
                              >
                                <X className="h-4 w-4" />
                              </ModernButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 