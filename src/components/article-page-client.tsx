"use client";

import { useState, useMemo } from "react";
import { Nutrition } from "@/lib/nutritions";
import { getAllArticles } from "@/lib/articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModernButton } from "@/components/shared";
import { Loading } from "@/components/ui/loading";
import { Search, ChevronLeft, ChevronRight, ExternalLink, BookOpen, Target, Info } from "lucide-react";
import Link from "next/link";

interface ArticlePageClientProps {
  nutritions: Nutrition[];
}

export default function ArticlePageClient({ nutritions }: ArticlePageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'nutritions' | 'articles'>('nutritions');
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
  const handleSearchChange = async (value: string) => {
    setIsSearching(true);
    setSearchTerm(value);
    setCurrentPage(1);
    
    // Simulate search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsSearching(false);
  };

  // Handle tab change
  const handleTabChange = async (tab: 'nutritions' | 'articles') => {
    setIsSearching(true);
    setActiveTab(tab);
    setSearchTerm("");
    setCurrentPage(1);
    
    // Simulate tab change delay for better UX
    await new Promise(resolve => setTimeout(resolve, 200));
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight break-words hyphens-auto">
                  Pronađite Svoje Omiljene Namirnice!
                </h1>
              </div>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
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
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 text-sm sm:text-base">Kako koristiti pretragu</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-600">Unesite naziv namirnice u polje za pretragu</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-600">Rezultati se prikazuju u realnom vremenu</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-600">Kliknite na dugme &ldquo;Pročitaj&rdquo; za detaljne članke o namirnicama</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-gray-600">Koristite paginaciju za navigaciju kroz rezultate</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Searchable List */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900 text-xs sm:text-sm lg:text-base">
                      Pretraga {activeTab === 'nutritions' ? 'namirnica' : 'članaka'}
                    </CardTitle>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <ModernButton
                      variant={activeTab === 'nutritions' ? 'gradient' : 'outline'}
                      size="sm"
                      onClick={() => handleTabChange('nutritions')}
                      className="text-xs px-2 sm:px-3"
                    >
                      Namirnice
                    </ModernButton>
                    <ModernButton
                      variant={activeTab === 'articles' ? 'gradient' : 'outline'}
                      size="sm"
                      onClick={() => handleTabChange('articles')}
                      className="text-xs px-2 sm:px-3"
                    >
                      Članci
                    </ModernButton>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                  <Input
                    placeholder={`Pretražite ${activeTab === 'nutritions' ? 'namirnice' : 'članke'}...`}
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
                    Prikazano {startIndex + 1}-{Math.min(endIndex, filteredData.length)} od {filteredData.length} {activeTab === 'nutritions' ? 'namirnica' : 'članaka'}
                  </span>
                  {searchTerm && (
                    <span>
                      Rezultati za: &ldquo;{searchTerm}&rdquo;
                    </span>
                  )}
                </div>

                {/* Data List */}
                <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                  {isSearching ? (
                    <div className="flex items-center justify-center py-8">
                      <Loading size="md" variant="dots" text="Pretražujem..." />
                    </div>
                  ) : currentData.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-sm">Nema rezultata za vašu pretragu</p>
                    </div>
                  ) : (
                    currentData.map((item: Nutrition | ReturnType<typeof getAllArticles>[0]) => (
                      <Card 
                        key={item.id} 
                        className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 border-gray-200 hover:border-blue-300 bg-white/60 backdrop-blur-sm"
                      >
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 truncate text-xs sm:text-sm lg:text-base">{item.name}</h3>
                              {activeTab === 'nutritions' ? (
                                <p className="text-xs text-gray-600 mt-1">
                                  {'calories' in item ? `${item.calories} kcal • ${item.protein}g proteina • ${item.carbohydrates}g ugljenih hidrata • ${item.fats}g masti` : ''}
                                </p>
                              ) : (
                                <p className="text-xs text-gray-600 mt-1">
                                  Detaljne informacije o nutritivnim vrednostima i zdravstvenim prednostima
                                </p>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                              {activeTab === 'nutritions' ? (
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                  <span className="inline-flex items-center px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200">
                                    {'macronutrient' in item ? item.macronutrient : ''}
                                  </span>
                                  {findArticleForNutrition(item.name) && (
                                    <Link href={createArticleUrl(findArticleForNutrition(item.name)!)} className="w-full sm:w-auto">
                                      <ModernButton variant="outline" size="sm" className="w-full sm:w-auto text-xs px-2 sm:px-3">
                                        <ExternalLink className="h-3 w-3 mr-1" />
                                        Pročitaj
                                      </ModernButton>
                                    </Link>
                                  )}
                                </div>
                              ) : (
                                <Link href={createItemUrl(item)} className="w-full sm:w-auto">
                                  <ModernButton variant="outline" size="sm" className="w-full sm:w-auto text-xs px-2 sm:px-3">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    Pročitaj
                                  </ModernButton>
                                </Link>
                              )}
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
                        <ChevronLeft className="h-3 w-3 mr-1" />
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
                        <ChevronRight className="h-3 w-3 ml-1" />
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