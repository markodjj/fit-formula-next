"use client";

import { useState, useMemo } from "react";
import { Nutrition } from "@/lib/nutritions";
import { getAllArticles } from "@/lib/articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModernButton } from "@/components/shared";
import { Loading } from "@/components/ui/loading";
import { Search, ChevronLeft, ChevronRight, ExternalLink, Scale, BarChart3, Info, X } from "lucide-react";
import Link from "next/link";

interface ComparisonPageClientProps {
  nutritions: Nutrition[];
}

export default function ComparisonPageClient({ nutritions }: ComparisonPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroceries, setSelectedGroceries] = useState<Nutrition[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
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
  const handleSearchChange = async (value: string) => {
    setIsSearching(true);
    setSearchTerm(value);
    setCurrentPage(1);
    
    // Simulate search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsSearching(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight break-words">
              Uporedi Namirnice
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uporedite nutritivne vrednosti različitih namirnica i pronađite najbolje opcije za vašu ishranu
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Left Side - Search and Selection */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-gray-900 text-sm sm:text-base">Pretražite namirnice</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                  <Input
                    placeholder="Pretražite namirnice..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-8 sm:pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-xs sm:text-sm"
                  />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Loading size="sm" variant="spinner" />
                    </div>
                  )}
                </div>
                
                {/* Results Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm text-gray-600 gap-2">
                  <span>
                    Prikazano {startIndex + 1}-{Math.min(endIndex, filteredGroceries.length)} od {filteredGroceries.length} namirnica
                  </span>
                  {searchTerm && (
                    <span>
                      Rezultati za: &ldquo;{searchTerm}&rdquo;
                    </span>
                  )}
                </div>

                {/* Groceries List */}
                <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                  {isSearching ? (
                    <div className="flex items-center justify-center py-8">
                      <Loading size="md" variant="dots" text="Pretražujem..." />
                    </div>
                  ) : currentGroceries.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-xs sm:text-sm">Nema rezultata za vašu pretragu</p>
                    </div>
                  ) : (
                    currentGroceries.map((item) => (
                      <Card 
                        key={item.id} 
                        className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 border-gray-200 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                      >
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base truncate">{item.name}</h3>
                              <p className="text-xs text-gray-600">
                                {item.calories} kcal • {item.protein}g proteina • {item.carbohydrates}g ugljenih hidrata • {item.fats}g masti
                              </p>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                              <span className="inline-flex items-center px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200">
                                {item.macronutrient}
                              </span>
                              <ModernButton
                                onClick={() => addToComparison(item)}
                                disabled={selectedGroceries.length >= 5 || selectedGroceries.find(g => g.id === item.id) !== undefined}
                                variant="outline"
                                size="sm"
                                className="text-xs px-2 sm:px-3"
                              >
                                Dodaj
                              </ModernButton>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-gray-200 gap-3 sm:gap-4">
                    <div className="text-xs sm:text-sm text-gray-600">
                      Strana {currentPage} od {totalPages}
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                      <ModernButton
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="text-xs px-2 sm:px-3"
                      >
                        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Prethodna
                      </ModernButton>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <ModernButton
                            key={page}
                            variant={currentPage === page ? "gradient" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 p-0 text-xs"
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
                        className="text-xs px-2 sm:px-3"
                      >
                        Sledeća
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </ModernButton>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Comparison Table */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900 text-sm sm:text-base">Uporedna tabela</CardTitle>
                  </div>
                  {selectedGroceries.length > 0 && (
                    <ModernButton
                      onClick={clearComparison}
                      variant="outline"
                      size="sm"
                      className="text-xs px-2 sm:px-3"
                    >
                      Obriši sve
                    </ModernButton>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {selectedGroceries.length === 0 ? (
                  <div className="text-center py-6 sm:py-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Info className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">Dodajte namirnice za uporednu analizu</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Možete dodati do 5 namirnica</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4 overflow-x-auto">
                    {/* Mobile View - Cards */}
                    <div className="block lg:hidden space-y-3">
                      {selectedGroceries.map((item) => (
                        <Card key={item.id} className="p-3 sm:p-4 bg-white/60 backdrop-blur-sm border border-gray-200">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">{item.name}</h3>
                              <ModernButton
                                onClick={() => removeFromComparison(item.id)}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                              >
                                <X className="h-3 w-3" />
                              </ModernButton>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                              <div className="text-center">
                                <div className="text-blue-600 font-semibold">{item.calories} kcal</div>
                                <div className="text-gray-500">Kalorije</div>
                              </div>
                              <div className="text-center">
                                <div className="text-green-600 font-semibold">{item.protein}g</div>
                                <div className="text-gray-500">Proteini</div>
                              </div>
                              <div className="text-center">
                                <div className="text-orange-600 font-semibold">{item.carbohydrates}g</div>
                                <div className="text-gray-500">Ugljeni hidrati</div>
                              </div>
                              <div className="text-center">
                                <div className="text-red-600 font-semibold">{item.fats}g</div>
                                <div className="text-gray-500">Masti</div>
                              </div>
                            </div>
                            {findArticleForNutrition(item.name) && (
                              <div className="flex justify-center">
                                <Link href={createArticleUrl(findArticleForNutrition(item.name)!)}>
                                  <ModernButton variant="outline" size="sm" className="text-xs">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    Pročitaj
                                  </ModernButton>
                                </Link>
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>

                    {/* Desktop View - Table */}
                    <div className="hidden lg:block space-y-4">
                      {/* Table Header */}
                      <div className="grid grid-cols-6 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg font-semibold text-gray-900 text-sm">
                        <div>Namirnica</div>
                        <div className="text-center">Kalorije</div>
                        <div className="text-center">Proteini</div>
                        <div className="text-center">Ugljeni hidrati</div>
                        <div className="text-center">Masti</div>
                        <div className="text-center">Akcija</div>
                      </div>

                      {/* Table Rows */}
                      {selectedGroceries.map((item) => (
                        <div key={item.id} className="grid grid-cols-6 gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200">
                          <div className="font-medium text-gray-900 text-sm truncate">{item.name}</div>
                          <div className="text-center text-blue-600 font-semibold text-sm">{item.calories} kcal</div>
                          <div className="text-center text-green-600 font-semibold text-sm">{item.protein}g</div>
                          <div className="text-center text-orange-600 font-semibold text-sm">{item.carbohydrates}g</div>
                          <div className="text-center text-red-600 font-semibold text-sm">{item.fats}g</div>
                          <div className="flex items-center justify-center gap-2">
                            {findArticleForNutrition(item.name) && (
                              <Link href={createArticleUrl(findArticleForNutrition(item.name)!)}>
                                <ModernButton variant="outline" size="sm" className="text-xs">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Pročitaj
                                </ModernButton>
                              </Link>
                            )}
                            <ModernButton
                              onClick={() => removeFromComparison(item.id)}
                              variant="outline"
                              size="sm"
                              className="text-xs"
                            >
                              <X className="h-3 w-3" />
                            </ModernButton>
                          </div>
                        </div>
                      ))}
                    </div>
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