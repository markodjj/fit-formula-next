import { ModernButton, ShadcnButton } from "./buttons";

export function ButtonDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Button UI Kit</h1>
          <p className="text-lg text-gray-600">Choose your preferred button styles</p>
        </div>

        {/* Modern Buttons */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Modern Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Variants</h3>
              <div className="space-y-3">
                <ModernButton variant="default">Default</ModernButton>
                <ModernButton variant="destructive">Destructive</ModernButton>
                <ModernButton variant="outline">Outline</ModernButton>
                <ModernButton variant="secondary">Secondary</ModernButton>
                <ModernButton variant="ghost">Ghost</ModernButton>
                <ModernButton variant="link">Link</ModernButton>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Special Effects</h3>
              <div className="space-y-3">
                <ModernButton variant="gradient">Gradient</ModernButton>
                <ModernButton variant="glass">Glass</ModernButton>
                <ModernButton variant="neon">Neon</ModernButton>
                <ModernButton variant="soft">Soft</ModernButton>
                <ModernButton variant="dark">Dark</ModernButton>
                <ModernButton variant="light">Light</ModernButton>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Sizes & Shapes</h3>
              <div className="space-y-3">
                <ModernButton size="sm">Small</ModernButton>
                <ModernButton size="default">Default</ModernButton>
                <ModernButton size="lg">Large</ModernButton>
                <ModernButton size="xl">Extra Large</ModernButton>
                <ModernButton rounded="full">Rounded Full</ModernButton>
              </div>
            </div>
          </div>
        </section>

        {/* ShadCN Buttons */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">ShadCN Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Variants</h3>
              <div className="space-y-3">
                <ShadcnButton variant="default">Default</ShadcnButton>
                <ShadcnButton variant="destructive">Destructive</ShadcnButton>
                <ShadcnButton variant="outline">Outline</ShadcnButton>
                <ShadcnButton variant="secondary">Secondary</ShadcnButton>
                <ShadcnButton variant="ghost">Ghost</ShadcnButton>
                <ShadcnButton variant="link">Link</ShadcnButton>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Sizes</h3>
              <div className="space-y-3">
                <ShadcnButton size="sm">Small</ShadcnButton>
                <ShadcnButton size="default">Default</ShadcnButton>
                <ShadcnButton size="lg">Large</ShadcnButton>
                <ShadcnButton size="icon">🔍</ShadcnButton>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Custom Styles</h3>
              <div className="space-y-3">
                <ShadcnButton className="bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600">
                  Custom Gradient
                </ShadcnButton>
                <ShadcnButton className="bg-black text-white hover:bg-gray-800 rounded-full">
                  Rounded Full
                </ShadcnButton>
                <ShadcnButton className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Custom Border
                </ShadcnButton>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Interactive Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Form Actions</h3>
              <div className="space-y-3">
                <ModernButton variant="gradient" size="lg" className="w-full">
                  Create Account
                </ModernButton>
                <ModernButton variant="outline" size="lg" className="w-full">
                  Learn More
                </ModernButton>
                <ModernButton variant="soft" size="lg" className="w-full">
                  Save Changes
                </ModernButton>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Navigation</h3>
              <div className="flex gap-3 flex-wrap">
                <ModernButton variant="ghost" size="sm">Home</ModernButton>
                <ModernButton variant="ghost" size="sm">About</ModernButton>
                <ModernButton variant="ghost" size="sm">Contact</ModernButton>
                <ModernButton variant="default" size="sm">Sign In</ModernButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 