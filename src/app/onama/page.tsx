import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernButton } from "@/components/shared";
import { Instagram, Mail, Phone, MapPin, Award, Users, Target, Heart, Star, TrendingUp, Zap, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nama - Fit Formula",
  description: "Upoznajte naš tim i saznajte više o Fit Formula - vašem pouzdanom partneru za zdravu ishranu i fitness.",
  keywords: [
    "Fit Formula",
    "personalni trener",
    "nutricionista",
    "fitness",
    "ishrana",
    "Stefan",
    "fitformula.stefan"
  ],
  openGraph: {
    title: "O nama - Fit Formula",
    description: "Upoznajte naš tim i saznajte više o Fit Formula - vašem pouzdanom partneru za zdravu ishranu i fitness.",
    type: "website",
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "O nama - Fit Formula",
    description: "Upoznajte naš tim i saznajte više o Fit Formula - vašem pouzdanom partneru za zdravu ishranu i fitness.",
  },
  alternates: {
    canonical: "https://fitformula.com/onama",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                O Fit Formula
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vaš pouzdani partner za zdravu ishranu i fitness. Pomažemo vam da postignete 
              vaše ciljeve kroz personalizovane planove ishrane i treninga.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Coach Information */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Upoznajte našeg trenera
                </h2>
              </div>
              
              {/* Coach Image Placeholder */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center border border-gray-200 shadow-lg">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-medium">Slika trenera</p>
                      <p className="text-sm text-gray-500">Ovde će biti postavljena slika</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coach Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Stefan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Personalni trener i nutricionista sa višegodišnjim iskustvom u fitness industriji. 
                    Specijalizovan za planiranje ishrane i personalne treninge.
                  </p>
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Certifikati i obuke
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Personalni trener - [Naziv certifikata]</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Nutricionista - [Naziv certifikata]</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Fitness instruktor - [Naziv certifikata]</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Kontakt informacije
                  </h4>
                  <div className="space-y-3">
                    <Link 
                      href="https://www.instagram.com/fitformula.stefan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50 hover:border-blue-300 transition-colors group"
                    >
                      <Instagram className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700 group-hover:text-gray-900">@fitformula.stefan</span>
                    </Link>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">email@example.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">+381 XX XXX XXX</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border border-blue-200/50">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Beograd, Srbija</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Values */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Naše usluge
                </h2>
              </div>
              
              {/* Services Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-gray-900">Personalni treninzi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Individualizovani planovi treninga prilagođeni vašim ciljevima i mogućnostima. 
                      Praćenje napretka i prilagođavanje programa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-gray-900">Planiranje ishrane</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Personalizovani planovi ishrane koji odgovaraju vašem stilu života. 
                      Saveti za zdravo kuvanje i planiranje obroka.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-gray-900">Online konsultacije</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Online sesije za klijente koji ne mogu da dolaze u teretanu. 
                      Praćenje napretka kroz aplikacije i video pozive.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-gray-900">Edukacija</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Edukativni sadržaj o ishrani, treningu i zdravom načinu života. 
                      Praktični saveti i zanimljive činjenice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Naša misija
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Naša misija je da pomognemo ljudima da postignu svoje fitness ciljeve kroz 
                  personalizovane pristupe treningu i ishrani. Verujemo da svako može da 
                  postigne svoje ciljeve uz pravu podršku i znanje.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Fokusiramo se na održivost i dugoročne rezultate, umesto na brze fiksne. 
                  Naš pristup je zasnovan na nauci i iskustvu, a rezultati govore sami za sebe.
                </p>
              </div>
            </div>

            {/* Gallery Placeholder */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Galerija
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Slika {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Spremni da počnete?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Kontaktirajte nas da saznamo kako možemo da vam pomognemo da postignete vaše fitness ciljeve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://www.instagram.com/fitformula.stefan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ModernButton variant="gradient" size="lg">
                    <Instagram className="h-4 w-4 mr-2" />
                    Kontaktirajte nas
                  </ModernButton>
                </Link>
                <Link href="/calculator/kalorije-kalkulator">
                  <ModernButton variant="outline" size="lg">
                    <Target className="h-4 w-4 mr-2" />
                    Kalkulator kalorija
                  </ModernButton>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 