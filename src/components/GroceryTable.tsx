"use client";

import { useState, useMemo } from "react";
import { Nutrition } from "@/lib/nutritions";
import { getAllArticles } from "@/lib/articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModernButton } from "@/components/shared";
import { Loading } from "@/components/ui/loading";
import { Search, ChevronLeft, ChevronRight, ExternalLink, Scale, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

interface GroceryTableProps {
  groceries: Nutrition[];
  categoryName: string;
}

export default function GroceryTable({ groceries, categoryName }: GroceryTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const itemsPerPage = 10;

  // Get articles data
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
    return groceries.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [groceries, searchTerm]);

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

  if (!groceries || groceries.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Nema podataka</h2>
            <p className="text-gray-600">Nema namirnica u ovoj kategoriji.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {categoryName}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pretražite i pronađite nutritivne vrednosti namirnica iz kategorije {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Search and Table */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle className="text-gray-900">Pretraga namirnica</CardTitle>
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
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Loading size="sm" variant="spinner" />
                </div>
              )}
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

            {/* Table */}
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
                  {isSearching ? (
                    <tr>
                      <td colSpan={6} className="py-8">
                        <div className="flex items-center justify-center">
                          <Loading size="md" variant="dots" text="Pretražujem..." />
                        </div>
                      </td>
                    </tr>
                  ) : currentGroceries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500">
                        <p className="text-sm">Nema rezultata za vašu pretragu</p>
                      </td>
                    </tr>
                  ) : (
                    currentGroceries.map((item, index) => (
                      <tr 
                        key={item.id} 
                        className={`border-b border-gray-200 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        } hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-colors duration-200`}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-900">{item.name}</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200">
                              {item.macronutrient}
                            </span>
                          </div>
                        </td>
                        <td className="text-right py-3 px-4 font-semibold text-blue-600">{item.calories} kcal</td>
                        <td className="text-right py-3 px-4 font-semibold text-green-600">{item.protein}g</td>
                        <td className="text-right py-3 px-4 font-semibold text-orange-600">{item.carbohydrates}g</td>
                        <td className="text-right py-3 px-4 font-semibold text-purple-600">{item.fats}g</td>
                        <td className="text-right py-3 px-4">
                          <div className="flex items-center justify-end gap-2">
                            {findArticleForNutrition(item.name) && (
                              <Link href={createArticleUrl(findArticleForNutrition(item.name)!)}>
                                <ModernButton variant="outline" size="sm">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Pročitaj
                                </ModernButton>
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
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
                    <ChevronLeft className="h-4 w-4 mr-1" />
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
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Information Card */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-gray-900">O nutritivnim vrednostima</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-semibold text-green-600">Kalorije</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ukupan energetski sadržaj namirnice izražen u kilokalorijama (kcal).
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-blue-600">Proteini</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Gradivni materijal za mišiće i tkiva, izražen u gramima (g).
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h4 className="font-semibold text-orange-600">Ugljeni hidrati</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Glavni izvor energije za organizam, izražen u gramima (g).
                </p>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200/50">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Napomena:</strong> Vrednosti su izražene na 100g namirnice. 
                Za precizno planiranje ishrane, uvek proverite deklaraciju na pakovanju.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 