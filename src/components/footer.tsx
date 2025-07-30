import { Instagram, Mail, Phone, Calculator, Target, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ModernButton } from "@/components/shared";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Fit Formula
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Vaš pouzdani partner za zdravu ishranu i fitness. Pronađite savršenu ravnotežu 
              između ukusne hrane i vaših fitness ciljeva.
            </p>
            <div className="flex items-center gap-3">
              <ModernButton variant="glass" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Kontaktiraj nas
              </ModernButton>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <Calculator className="h-4 w-4 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Kalkulatori</h3>
            </div>
            <div className="space-y-3">
              <Link 
                href="/calculator/kalorije-kalkulator" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>Kalkulator kalorija</span>
              </Link>
              <Link 
                href="/calculator/bmr-kalkulator" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>BMR kalkulator</span>
              </Link>
              <Link 
                href="/calculator/tdee-kalkulator" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>TDEE kalkulator</span>
              </Link>
              <Link 
                href="/uporedi" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>Uporedi namirnice</span>
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Resursi</h3>
            </div>
            <div className="space-y-3">
              <Link 
                href="/tablica/meso" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>Tablica kalorija</span>
              </Link>
              <Link 
                href="/article" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>Članci i saveti</span>
              </Link>
              <Link 
                href="/onama" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                <span>O nama</span>
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Kontakt</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Personalni trener i nutricionista
              </p>
              <div className="space-y-3">
                <Link 
                  href="https://www.instagram.com/fitformula.stefan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <span>@fitformula.stefan</span>
                </Link>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>fitformula.stefan@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>+381 XX XXX XXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                <Heart className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm text-gray-400">
                © 2024 Fit Formula. Sva prava zadržana.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/onama" className="text-gray-400 hover:text-white transition-colors duration-200">
                O nama
              </Link>
              <Link href="/uporedi" className="text-gray-400 hover:text-white transition-colors duration-200">
                Uporedi vrednosti
              </Link>
              <Link href="/article" className="text-gray-400 hover:text-white transition-colors duration-200">
                Članci
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 