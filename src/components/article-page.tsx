"use client";

import { Article } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ModernButton } from '@/components/shared';
import { ArrowLeft, Flame, Zap, Heart, Leaf, Shield, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto p-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/article">
            <ModernButton variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Nazad na članke
            </ModernButton>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {article.name}
            </h1>
          </div>
          <div 
            className="text-lg text-gray-600 leading-relaxed max-w-4xl"
            dangerouslySetInnerHTML={{ __html: article.text1 }}
          />
        </div>

        {/* Nutrition Sections */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Kalorije */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                  <Flame className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-gray-900">Kalorije</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {article.kalorije.p1}
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                <p className="font-semibold text-orange-700">
                  {article.kalorije.k}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {article.kalorije.p2}
              </p>
            </CardContent>
          </Card>

          {/* Proteini */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Proteini</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.proteini }}
              />
            </CardContent>
          </Card>

          {/* Ugljeni hidrati */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-gray-900">Ugljeni hidrati</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.hidrati }}
              />
            </CardContent>
          </Card>

          {/* Masti */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-gray-900">Masti</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.masti }}
              />
            </CardContent>
          </Card>

          {/* Vlakna */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle className="text-gray-900">Vlakna</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.vlakna }}
              />
            </CardContent>
          </Card>

          {/* Zdravlje */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-gray-900">Zdravlje</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.zdravlje.t1 }}
              />
              {article.zdravlje.k && (
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-700">
                    {article.zdravlje.k}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-2xl">Zaključak</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-lg">
                {article.name} je namirnica sa bogatim nutritivnim profilom koja može 
                značajno doprineti vašem zdravlju i dobrobiti. Redovna konzumacija 
                ove namirnice, u kombinaciji sa balansiranom ishranom i redovnim 
                vežbanjem, može pomoći u postizanju vaših zdravstvenih i fitness ciljeva.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator/kalorije-kalkulator">
              <ModernButton variant="gradient" size="lg">
                <Flame className="h-4 w-4 mr-2" />
                Kalkulator kalorija
              </ModernButton>
            </Link>
            <Link href="/tablica/meso">
              <ModernButton variant="outline" size="lg">
                <BookOpen className="h-4 w-4 mr-2" />
                Tabela namirnica
              </ModernButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 