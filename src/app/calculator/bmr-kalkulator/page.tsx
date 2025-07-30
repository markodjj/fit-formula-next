"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernButton } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loading } from "@/components/ui/loading";
import { calculatorData } from "@/lib/calculator-data";
import { Calculator, Target, TrendingUp, Info, CheckCircle, Activity } from "lucide-react";

export default function BMRCalculator() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
  });
  const [bmr, setBmr] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateBMR = async () => {
    const { age, gender, weight, height } = formData;
    
    if (!age || !weight || !height) {
      alert("Molimo popunite sva polja");
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Mifflin-St Jeor Equation
    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    setBmr(Math.round(bmrValue));
    setIsCalculating(false);
  };

  const data = calculatorData["bmr-kalkulator"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {data.h1}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.p1}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calculator Form */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Unesite vaše podatke</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Popunite sva polja da biste izračunali vaš BMR
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age">Godine</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Unesite vaše godine"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label>Pol</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Muški</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Ženski</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <Label htmlFor="weight">Težina (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Unesite vašu težinu"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Height */}
              <div className="space-y-2">
                <Label htmlFor="height">Visina (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Unesite vašu visinu"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Calculate Button */}
              <ModernButton
                onClick={calculateBMR}
                disabled={isCalculating}
                className="w-full"
                variant="gradient"
                size="lg"
              >
                {isCalculating ? (
                  <div className="flex items-center space-x-2">
                    <Loading size="sm" variant="spinner" />
                    <span>Računam...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5" />
                    <span>Izračunaj BMR</span>
                  </div>
                )}
              </ModernButton>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Result Card */}
            {bmr && (
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-gray-900">Vaš BMR rezultat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-blue-600">
                      {bmr.toLocaleString()} kcal
                    </div>
                    <p className="text-gray-600">
                      Ovo je vaša bazalna metabolička stopa (BMR) - kalorije koje vaše telo troši u mirovanju.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Information Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-gray-900">Šta je BMR?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">
                      BMR je minimalna količina kalorija koju vaše telo troši u potpunom mirovanju
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">
                      Koristi se kao osnova za izračunavanje ukupnih dnevnih kalorija
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">
                      Zavisno od vašeg nivoa aktivnosti, vaš TDEE će biti veći od BMR-a
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 