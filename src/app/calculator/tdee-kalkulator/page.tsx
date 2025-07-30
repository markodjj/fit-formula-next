"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernButton } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { calculatorData } from "@/lib/calculator-data";
import { Calculator, Target, TrendingUp, Info, CheckCircle, Zap, Activity } from "lucide-react";

export default function TDEECalculator() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activityLevel: "",
  });
  const [tdee, setTdee] = useState<number | null>(null);
  const [bmr, setBmr] = useState<number | null>(null);

  const activityLevels = [
    { value: "sedentary", label: "Sedentaran (malo ili nema vežbanja)", multiplier: 1.2 },
    { value: "light", label: "Lagano aktivan (1-3 dana vežbanja nedeljno)", multiplier: 1.375 },
    { value: "moderate", label: "Umereno aktivan (3-5 dana vežbanja nedeljno)", multiplier: 1.55 },
    { value: "active", label: "Veoma aktivan (6-7 dana vežbanja nedeljno)", multiplier: 1.725 },
    { value: "very_active", label: "Ekstremno aktivan (teški fizički rad ili sport)", multiplier: 1.9 },
  ];

  const calculateTDEE = () => {
    const { age, gender, weight, height, activityLevel } = formData;
    
    if (!age || !weight || !height || !activityLevel) {
      alert("Molimo popunite sva polja");
      return;
    }

    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    // Find activity multiplier
    const activity = activityLevels.find(level => level.value === activityLevel);
    if (!activity) {
      alert("Molimo izaberite nivo aktivnosti");
      return;
    }

    // Calculate TDEE
    const tdeeValue = bmrValue * activity.multiplier;

    setBmr(Math.round(bmrValue));
    setTdee(Math.round(tdeeValue));
  };

  const data = calculatorData["tdee-kalkulator"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
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
                <div>
                  <CardTitle className="text-gray-900">Unesite vaše podatke</CardTitle>
                  <CardDescription className="text-gray-600">
                    Popunite sve podatke za precizno izračunavanje TDEE-a
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Age */}
              <div className="space-y-3">
                <Label htmlFor="age" className="text-gray-700 font-medium">Starost (godine)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Unesite vašu starost"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-medium">Pol</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value: string) => setFormData({ ...formData, gender: value })}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" className="text-blue-600" />
                    <Label htmlFor="male" className="text-gray-700">Muški</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" className="text-blue-600" />
                    <Label htmlFor="female" className="text-gray-700">Ženski</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Weight */}
              <div className="space-y-3">
                <Label htmlFor="weight" className="text-gray-700 font-medium">Težina (kg)</Label>
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
              <div className="space-y-3">
                <Label htmlFor="height" className="text-gray-700 font-medium">Visina (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Unesite vašu visinu"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Activity Level */}
              <div className="space-y-3">
                <Label htmlFor="activity" className="text-gray-700 font-medium">Nivo aktivnosti</Label>
                <Select
                  value={formData.activityLevel}
                  onValueChange={(value: string) => setFormData({ ...formData, activityLevel: value })}
                >
                  <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Izaberite nivo aktivnosti" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <ModernButton onClick={calculateTDEE} variant="gradient" size="lg" className="w-full">
                <Calculator className="h-5 w-5 mr-2" />
                {data.btn}
              </ModernButton>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* TDEE Result */}
            {tdee && (
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-purple-800">
                        Vaš TDEE rezultat
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {tdee}
                    </div>
                    <div className="text-lg font-semibold text-purple-700">
                      kcal/dan
                    </div>
                    <p className="text-sm text-purple-600 mt-2">
                      Ukupan dnevni utrošak energije
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* BMR Result */}
            {bmr && (
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-200/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-green-800">
                        Vaš BMR rezultat
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {bmr}
                    </div>
                    <div className="text-lg font-semibold text-green-700">
                      kcal/dan
                    </div>
                    <p className="text-sm text-green-600 mt-2">
                      Bazalni metabolizam (stanje mirovanja)
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Information Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900">Zašto je TDEE važan?</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {data.ul.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 leading-relaxed">{data.p2}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 