import { ModernButton } from "./buttons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CoachCardProps {
  name: string;
  specialty: string;
  rating: number;
  clients: number;
  experience: string;
  price: string;
  description: string;
  tags: string[];
}

export function CoachCard({
  name,
  specialty,
  rating,
  clients,
  experience,
  price,
  description,
  tags,
}: CoachCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Coach Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <p className="text-white/90 text-sm">{specialty}</p>
            </div>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                {i < rating ? "★" : "☆"}
              </span>
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating})</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {clients}+ clients
          </Badge>
        </div>
        
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="font-semibold text-gray-900">{experience}</div>
            <div className="text-gray-600">Experience</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="font-semibold text-gray-900">{price}</div>
            <div className="text-gray-600">Per Session</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons - Modern Style */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <ModernButton variant="gradient" size="sm" className="flex-1">
              Book Session
            </ModernButton>
            <ModernButton variant="outline" size="sm">
              View Profile
            </ModernButton>
          </div>
          <ModernButton variant="ghost" size="sm" className="w-full">
            Send Message
          </ModernButton>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample coach data
export const sampleCoaches = [
  {
    name: "Sarah Johnson",
    specialty: "Strength Training",
    rating: 4.9,
    clients: 127,
    experience: "8+ years",
    price: "$75",
    description: "Certified personal trainer specializing in strength training and muscle building. Helping clients achieve their fitness goals through personalized programs.",
    tags: ["Strength", "Muscle Building", "Nutrition", "Online Training"],
  },
  {
    name: "Mike Chen",
    specialty: "Weight Loss",
    rating: 4.8,
    clients: 89,
    experience: "6+ years",
    price: "$65",
    description: "Weight loss specialist with a focus on sustainable lifestyle changes. Expert in HIIT and cardio training.",
    tags: ["Weight Loss", "HIIT", "Cardio", "Lifestyle"],
  },
  {
    name: "Emma Rodriguez",
    specialty: "Yoga & Flexibility",
    rating: 4.9,
    clients: 156,
    experience: "10+ years",
    price: "$85",
    description: "Yoga instructor and flexibility expert. Helping clients improve mobility, reduce stress, and find balance.",
    tags: ["Yoga", "Flexibility", "Meditation", "Stress Relief"],
  },
]; 