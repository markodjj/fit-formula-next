"use client";

import { useState, useMemo } from "react";
import { Nutrition } from "@/lib/nutritions";
import { getAllArticles } from "@/lib/articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModernButton } from "@/components/shared";
import { Search, ChevronLeft, ChevronRight, ExternalLink, BookOpen, Target, Info } from "lucide-react";
import Link from "next/link";

interface ArticlePageClientProps {
  nutritions: Nutrition[];
}

export default function ArticlePageClient({ nutritions }: ArticlePageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'nutritions' | 'articles'>('nutritions');
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

  // Function to create proper URL for any item (handles both nutrition and article types)
  const createItemUrl = (item: Nutrition | ReturnType<typeof getAllArticles>[0]) => {
    if ('text1' in item) {
      // This is an Article
      return `/article/${encodeURIComponent(item.id)}`;
    } else {
      // This is a Nutrition - find corresponding article
      const article = findArticleForNutrition(item.name);
      return article ? `/article/${encodeURIComponent(article.id)}` : '#';
    }
  };

  // Filter data based on search term and active tab
  const filteredData = useMemo(() => {
    const data = activeTab === 'nutritions' ? nutritions : articles;
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [nutritions, articles, searchTerm, activeTab]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Reset to first page when search term changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Handle tab change
  const handleTabChange = (tab: 'nutritions' | 'articles') => {
    setActiveTab(tab);
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Pronađite Svoje Omiljene Namirnice!
                </h1>
              </div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Dobrodošli u našu bazu namirnica! Ovdje možete brzo i lako
                  pretražiti različite vrste namirnica koristeći našu pretragu. Samo
                  unesite naziv namirnice u polje za pretragu, a lista ispod će se
                  automatski filtrirati kako biste lakše pronašli ono što tražite.
                </p>
                <p>
                  Klikom na određenu namirnicu, bićete preusmereni na stranicu sa
                  detaljnim informacijama o njoj – uključujući nutritivne vrednosti,
                  savete za upotrebu i zanimljive činjenice. Za namirnice koje imaju
                  detaljne članke, prikazaće se dugme &ldquo;Pročitaj&rdquo; koje vas vodi na
                  kompletnu analizu te namirnice.
                </p>
                <p>
                  Bilo da planirate obrok, istražujete nove sastojke ili samo želite
                  da saznate više o svojim omiljenim namirnicama, ovde ste na pravom
                  mestu. Počnite pretragu odmah!
                </p>
              </div>
            </div>

            {/* Additional Info Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900">Kako koristiti pretragu</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600">Unesite naziv namirnice u polje za pretragu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600">Rezultati se prikazuju u realnom vremenu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600">Kliknite na dugme &ldquo;Pročitaj&rdquo; za detaljne članke o namirnicama</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600">Koristite paginaciju za navigaciju kroz rezultate</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Searchable List */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900">
                      Pretraga {activeTab === 'nutritions' ? 'namirnica' : 'članaka'}
                    </CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    <ModernButton
                      variant={activeTab === 'nutritions' ? 'gradient' : 'outline'}
                      size="sm"
                      onClick={() => handleTabChange('nutritions')}
                    >
                      Namirnice
                    </ModernButton>
                    <ModernButton
                      variant={activeTab === 'articles' ? 'gradient' : 'outline'}
                      size="sm"
                      onClick={() => handleTabChange('articles')}
                    >
                      Članci
                    </ModernButton>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder={`Pretražite ${activeTab === 'nutritions' ? 'namirnice' : 'članke'}...`}
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                {/* Results Info */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>
                    Prikazano {startIndex + 1}-{Math.min(endIndex, filteredData.length)} od {filteredData.length} {activeTab === 'nutritions' ? 'namirnica' : 'članaka'}
                  </span>
                  {searchTerm && (
                    <span>
                      Rezultati za: &ldquo;{searchTerm}&rdquo;
                    </span>
                  )}
                </div>

                {/* Data List */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {currentData.map((item: Nutrition | ReturnType<typeof getAllArticles>[0]) => (
                    <Card 
                      key={item.id} 
                      className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 border-gray-200 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            {activeTab === 'nutritions' ? (
                              <p className="text-sm text-gray-600 mt-1">
                                {'calories' in item ? `${item.calories} kcal • ${item.protein}g proteina • ${item.carbohydrates}g ugljenih hidrata • ${item.fats}g masti` : ''}
                              </p>
                            ) : (
                              <p className="text-sm text-gray-600 mt-1">
                                Detaljne informacije o nutritivnim vrednostima i zdravstvenim prednostima
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            {activeTab === 'nutritions' ? (
                              <div className="flex items-center gap-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200">
                                  {'macronutrient' in item ? item.macronutrient : ''}
                                </span>
                                {findArticleForNutrition(item.name) && (
                                  <Link href={createArticleUrl(findArticleForNutrition(item.name)!)}>
                                    <ModernButton variant="outline" size="sm">
                                      <ExternalLink className="h-4 w-4 mr-1" />
                                      Pročitaj
                                    </ModernButton>
                                  </Link>
                                )}
                              </div>
                            ) : (
                              <Link href={createItemUrl(item)}>
                                <ModernButton variant="outline" size="sm">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Pročitaj
                                </ModernButton>
                              </Link>
                            )}
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
          </div>
        </div>
      </div>
    </div>
  );
} 