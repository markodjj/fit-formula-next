# Modern Button UI Kit

This directory contains a comprehensive button UI kit with the **Modern** button style for your Next.js application.

## ModernButton Component

The ModernButton is a versatile, professional button component with multiple variants and effects.

### Variants

**Basic Variants:**
- `default` - Standard primary button
- `destructive` - Red danger button
- `outline` - Bordered button
- `secondary` - Secondary button
- `ghost` - Transparent button
- `link` - Link-style button

**Special Effects:**
- `gradient` - Gradient background
- `glass` - Glass morphism effect
- `neon` - Neon glow effect
- `soft` - Soft blue styling
- `dark` - Dark theme
- `light` - Light theme

### Sizes

- `sm` - Small (h-8, px-3, text-xs)
- `default` - Default (h-10, px-4, py-2)
- `lg` - Large (h-12, px-8, text-base)
- `xl` - Extra large (h-14, px-10, text-lg, font-semibold)
- `icon` - Square icon button (h-10, w-10)

### Rounded Variants

- `default` - Default rounded (rounded-lg)
- `full` - Fully rounded (rounded-full)
- `none` - No rounding (rounded-none)
- `sm` - Small rounded (rounded-md)
- `lg` - Large rounded (rounded-xl)

## Usage Examples

```tsx
import { ModernButton } from "@/components/shared";

// Primary CTA
<ModernButton variant="gradient" size="lg">
  Book Session
</ModernButton>

// Secondary action
<ModernButton variant="outline" size="md">
  View Profile
</ModernButton>

// Tertiary action
<ModernButton variant="ghost" size="sm">
  Send Message
</ModernButton>

// Special effects
<ModernButton variant="glass" size="lg">
  Premium Feature
</ModernButton>

<ModernButton variant="neon" size="md">
  Special Offer
</ModernButton>

// Different rounded variants
<ModernButton rounded="full" variant="gradient">
  Rounded Button
</ModernButton>
```

## Coach Card Component

The `CoachCard` component demonstrates the Modern button style in a real-world online coaching context.

### Features:
- Professional coach profile layout
- Rating system with stars
- Client count and experience stats
- Specialty tags
- Modern button integration

### Usage:

```tsx
import { CoachCard, sampleCoaches } from "@/components/shared";

// Use sample data
<CoachCard {...sampleCoaches[0]} />

// Or with custom data
<CoachCard
  name="John Doe"
  specialty="Strength Training"
  rating={4.8}
  clients={150}
  experience="5+ years"
  price="$80"
  description="Certified personal trainer..."
  tags={["Strength", "Nutrition", "Online"]}
/>
```

## Customization

All buttons support:
- Custom `className` for additional styling
- All standard button props (onClick, disabled, etc.)
- TypeScript support with proper types
- Accessibility features (focus states, ARIA attributes)

## Perfect For

The Modern button style is ideal for:
- Professional coaching platforms
- Corporate wellness apps
- Clean, modern interfaces
- Consistent branding
- SaaS applications
- Business-focused apps

## Demo

Visit the homepage to see the Modern button style in action with coach cards and comprehensive examples. 