import { ModernButton } from "@/components/shared";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Calculator, 
  Table, 
  BookOpen, 
  Scale, 
  Users, 
  Star, 
  ArrowRight, 
  Instagram,
  Mail,
  Phone,
  Target,
  Heart,
  TrendingUp,
  CheckCircle,
  Zap,
  Award
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border-blue-200">
                    <Target className="h-3 w-3 mr-1" />
                    Vaš partner za zdravu ishranu
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Fit Formula
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Vaš put do zdravlja
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Pronađite savršenu ravnotežu između ukusne hrane i vaših fitness ciljeva. 
                  Naši alati i resursi pomažu vam da donesete informisane odluke o ishrani.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/calculator/kalorije-kalkulator">
                  <ModernButton variant="gradient" size="lg">
                    <Calculator className="h-5 w-5 mr-2" />
                    Izračunaj kalorije
                  </ModernButton>
                </Link>
                <Link href="/tablica/meso">
                  <ModernButton variant="outline" size="lg">
                    <Table className="h-5 w-5 mr-2" />
                    Pogledaj tablice
                  </ModernButton>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Hero Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center border border-blue-200/50 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Heart className="h-16 w-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 font-medium">Hero slika</p>
                    <p className="text-sm text-gray-500">Personalni trener u akciji</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Sve što vam je potrebno za zdravu ishranu
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Naši alati i resursi pomažu vam da donesete informisane odluke o ishrani i postignete vaše fitness ciljeve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Kalkulatori</CardTitle>
                <CardDescription className="text-gray-600">
                  Precizni kalkulatori za BMR, TDEE i kalorije
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    BMR kalkulator za bazalni metabolizam
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    TDEE kalkulator za ukupne potrebe
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Kalkulator kalorija za planiranje
                  </li>
                </ul>
                <Link href="/calculator/kalorije-kalkulator">
                  <ModernButton variant="ghost" size="sm" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Izračunaj sada <ArrowRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Table className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Tablica kalorija</CardTitle>
                <CardDescription className="text-gray-600">
                  Detaljne informacije o nutritivnim vrednostima
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Preko 100 namirnica
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Detaljne nutritivne vrednosti
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Kategorizovano po tipu hrane
                  </li>
                </ul>
                <Link href="/tablica/meso">
                  <ModernButton variant="ghost" size="sm" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Pogledaj tablice <ArrowRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Članci i saveti</CardTitle>
                <CardDescription className="text-gray-600">
                  Edukativni sadržaj o ishrani i fitnessu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Detaljni članci o namirnicama
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Saveti za planiranje ishrane
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Zanimljive činjenice o hrani
                  </li>
                </ul>
                <Link href="/article">
                  <ModernButton variant="ghost" size="sm" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Pročitaj članke <ArrowRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Poređenje namirnica</CardTitle>
                <CardDescription className="text-gray-600">
                  Uporedite nutritivne vrednosti različitih namirnica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Uporedite do 5 namirnica
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Detaljne nutritivne vrednosti
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Lako planiranje obroka
                  </li>
                </ul>
                <Link href="/uporedi">
                  <ModernButton variant="ghost" size="sm" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Uporedi sada <ArrowRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Personalni pristup</CardTitle>
                <CardDescription className="text-gray-600">
                  Individualni planovi ishrane i treninga
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Personalizovani planovi ishrane
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Individualni trening programi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Praćenje napretka
                  </li>
                </ul>
                <Link href="/onama">
                  <ModernButton variant="ghost" size="sm" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Saznaj više <ArrowRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Kontinuirana podrška</CardTitle>
                <CardDescription className="text-gray-600">
                  Redovno praćenje i prilagođavanje planova
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Redovne konsultacije
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Prilagođavanje planova
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Motivacija i podrška
                  </li>
                </ul>
                <Link href="/onama">
                  <ModernButton variant="ghost" size="sm" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Kontaktiraj nas <ArrowRight className="h-4 w-4 ml-1" />
                  </ModernButton>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border-blue-200">
                    <Users className="h-3 w-3 mr-1" />
                    Personalni trener
                  </Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Stefan - Vaš personalni trener i nutricionista
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sa dugogodišnjim iskustvom u fitness industriji, pomažem klijentima da postignu 
                  svoje ciljeve kroz personalizovane planove ishrane i treninga.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Planovi ishrane</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Personalizovani planovi prilagođeni vašim ciljevima i životnom stilu
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Trening programi</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Individualni trening programi za snagu, kondiciju i opšte zdravlje
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Praćenje napretka</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Redovno praćenje rezultata i prilagođavanje planova
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Motivacija</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Kontinuirana podrška i motivacija za postizanje ciljeva
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/onama">
                  <ModernButton variant="gradient" size="lg">
                    <Users className="h-5 w-5 mr-2" />
                    Saznaj više o meni
                  </ModernButton>
                </Link>
                <Link href="https://www.instagram.com/fitformula.stefan" target="_blank">
                  <ModernButton variant="outline" size="lg">
                    <Instagram className="h-5 w-5 mr-2" />
                    Pratite na Instagramu
                  </ModernButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Coach Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center border border-blue-200/50 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 font-medium">Slika trenera</p>
                    <p className="text-sm text-gray-500">Stefan - Personalni trener</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Šta kažu naši klijenti
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uspesne priče naših klijenata koji su postigli svoje ciljeve uz našu podršku.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  &ldquo;Stefan je odličan trener! Pomogao mi je da izgubim 15kg i postignem svoje ciljeve. 
                  Njegovi planovi ishrane su jednostavni za praćenje i daju rezultate.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marija S.</p>
                    <p className="text-sm text-gray-600">-15kg za 6 meseci</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  &ldquo;Kalkulatori na sajtu su mi pomogli da razumem koliko kalorija mi treba. 
                  Stefan je dodatno objasnio sve i napravio personalizovan plan.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marko D.</p>
                    <p className="text-sm text-gray-600">+8kg mišićne mase</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  &ldquo;Tablica kalorija mi je pomogla da planiram obroke. 
                  Stefan je odličan u objašnjavanju i motivaciji.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ana K.</p>
                    <p className="text-sm text-gray-600">Bolje planiranje ishrane</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-300" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Spremni da postignete svoje ciljeve?
              </h2>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Kontaktirajte me za personalizovane planove ishrane i treninga. 
              Zajedno ćemo postići vaše fitness ciljeve!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://www.instagram.com/fitformula.stefan" target="_blank">
              <ModernButton variant="glass" size="lg">
                <Instagram className="h-5 w-5 mr-2" />
                Kontaktiraj na Instagramu
              </ModernButton>
            </Link>
            <Link href="/onama">
              <ModernButton variant="light" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Saznaj više o meni
              </ModernButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-2">
              <Instagram className="h-5 w-5" />
              <span>@fitformula.stefan</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              <span>fitformula.stefan@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+381 XX XXX XXX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
