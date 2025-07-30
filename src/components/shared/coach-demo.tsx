import { CoachCard, sampleCoaches } from "./coach-card";
import { ModernButton } from "./buttons";

export function CoachDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Online Coach Cards</h1>
          <p className="text-lg text-gray-600 mb-8">
            Modern button style for professional coaching platforms
          </p>
        </div>

        {/* Coach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleCoaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>

        {/* Modern Button Showcase */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Modern Button Style Showcase</h2>
          
          <div className="space-y-8">
            {/* Basic Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Basic Variants</h3>
              <div className="flex flex-wrap gap-3">
                <ModernButton variant="default">Default</ModernButton>
                <ModernButton variant="destructive">Destructive</ModernButton>
                <ModernButton variant="outline">Outline</ModernButton>
                <ModernButton variant="secondary">Secondary</ModernButton>
                <ModernButton variant="ghost">Ghost</ModernButton>
                <ModernButton variant="link">Link</ModernButton>
              </div>
            </div>

            {/* Special Effects */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Special Effects</h3>
              <div className="flex flex-wrap gap-3">
                <ModernButton variant="gradient">Gradient</ModernButton>
                <ModernButton variant="glass">Glass</ModernButton>
                <ModernButton variant="neon">Neon</ModernButton>
                <ModernButton variant="soft">Soft</ModernButton>
                <ModernButton variant="dark">Dark</ModernButton>
                <ModernButton variant="light">Light</ModernButton>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <ModernButton size="sm">Small</ModernButton>
                <ModernButton size="default">Default</ModernButton>
                <ModernButton size="lg">Large</ModernButton>
                <ModernButton size="xl">Extra Large</ModernButton>
              </div>
            </div>

            {/* Rounded Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Rounded Variants</h3>
              <div className="flex flex-wrap gap-3">
                <ModernButton rounded="default">Default</ModernButton>
                <ModernButton rounded="full">Full Rounded</ModernButton>
                <ModernButton rounded="none">No Rounded</ModernButton>
                <ModernButton rounded="sm">Small Rounded</ModernButton>
                <ModernButton rounded="lg">Large Rounded</ModernButton>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Real-World Usage Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Primary Actions</h3>
              <div className="p-6 bg-gray-50 rounded-lg space-y-4">
                <ModernButton variant="gradient" size="lg" className="w-full">
                  Book Session
                </ModernButton>
                <ModernButton variant="outline" size="lg" className="w-full">
                  View Profile
                </ModernButton>
                <ModernButton variant="ghost" size="lg" className="w-full">
                  Send Message
                </ModernButton>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Secondary Actions</h3>
              <div className="p-6 bg-gray-50 rounded-lg space-y-4">
                <div className="flex gap-2">
                  <ModernButton variant="soft" size="sm" className="flex-1">
                    Follow
                  </ModernButton>
                  <ModernButton variant="outline" size="sm" className="flex-1">
                    Share
                  </ModernButton>
                </div>
                <div className="flex gap-2">
                  <ModernButton variant="ghost" size="sm" className="flex-1">
                    Save
                  </ModernButton>
                  <ModernButton variant="destructive" size="sm" className="flex-1">
                    Report
                  </ModernButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Style Benefits */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Modern Style?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">Perfect for:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Professional coaching platforms</li>
                <li>• Corporate wellness apps</li>
                <li>• Clean, modern interfaces</li>
                <li>• Consistent branding</li>
                <li>• SaaS applications</li>
                <li>• Business-focused apps</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Clean, professional appearance</li>
                <li>• Subtle effects and animations</li>
                <li>• Excellent accessibility</li>
                <li>• Consistent design system</li>
                <li>• Multiple variants for flexibility</li>
                <li>• TypeScript support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 