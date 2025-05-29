# DecorativeBackground Component Usage

## Overview
The `DecorativeBackground` component is a reusable component that provides decorative circular background elements for various sections of the website. It replaces the manual creation of background elements and provides a consistent, configurable approach.

## Components Using DecorativeBackground

### ✅ Refactored Components

1. **Solutions.tsx** (`src/components/MainPage/Solutions.tsx`)
   - **Variant**: `light` 
   - **Usage**: Default light variant with amber decorative elements
   - **Background**: `bg-gradient-to-b from-white to-neutral-100`

2. **FAQSection.tsx** (`src/components/MainPage/FAQSection.tsx`)
   - **Variant**: `light`
   - **Usage**: Custom elements configuration
   - **Background**: `bg-gradient-to-b from-amber-50/50 to-white`
   - **Custom Elements**:
     ```tsx
     elements={[
       { position: "top-right", size: "lg", opacity: "high", intensity: "medium" },
       { position: "bottom-left", size: "lg", opacity: "medium", intensity: "medium" },
       { position: "center-right", size: "sm", opacity: "low", intensity: "medium" },
     ]}
     ```

3. **About.tsx** (`src/components/About/About.tsx`)
   - **Variant**: `neutral`
   - **Usage**: Default neutral variant with neutral-colored decorative elements
   - **Background**: `bg-gradient-to-b from-neutral-50 to-white`

4. **References.tsx** (`src/components/MainPage/References.tsx`)
   - **Variant**: `dark`
   - **Usage**: Default dark variant with blurred amber elements
   - **Background**: `bg-gradient-to-b from-neutral-900 to-neutral-950`

## Component API

### Props

```typescript
type DecorativeBackgroundProps = {
  /** Background variant theme */
  variant?: "light" | "dark" | "neutral" | "custom";
  /** Array of background configurations */
  elements?: BackgroundConfig[];
  /** Additional className for the container */
  className?: string;
  /** Children to render above the background */
  children?: React.ReactNode;
};
```

### Background Configuration

```typescript
type BackgroundConfig = {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | 
           "center-left" | "center-right" | "top-center" | "bottom-center" | "custom";
  size: "sm" | "md" | "lg" | "xl";
  opacity: "low" | "medium" | "high";
  intensity: "light" | "medium" | "dark";
  blur?: boolean;
  customPosition?: string; // When position is "custom"
  customColor?: string;    // Custom color classes
};
```

## Variants

### Light Variant (`variant="light"`)
- **Colors**: `bg-amber-50`, `bg-amber-100`, `bg-amber-200`
- **Default Elements**: 3 elements with different sizes and positions
- **Use Case**: Light backgrounds, white/neutral sections

### Dark Variant (`variant="dark"`)
- **Colors**: `bg-amber-500/5` with blur effects
- **Default Elements**: 2 large blurred elements
- **Use Case**: Dark backgrounds, high contrast sections

### Neutral Variant (`variant="neutral"`)
- **Colors**: `bg-neutral-100`, `bg-neutral-200`, `bg-neutral-300`
- **Default Elements**: 3 elements similar to light but with neutral colors
- **Use Case**: Neutral gray backgrounds

### Custom Variant (`variant="custom"`)
- **Colors**: No default colors (use `customColor` in elements)
- **Default Elements**: None (must specify `elements` prop)
- **Use Case**: Complete customization

## Usage Examples

### Basic Usage with Default Elements
```tsx
<DecorativeBackground
  variant="light"
  className="py-24 bg-gradient-to-b from-white to-neutral-100"
>
  <section>
    {/* Your content */}
  </section>
</DecorativeBackground>
```

### Custom Elements Configuration
```tsx
<DecorativeBackground
  variant="custom"
  elements={[
    { 
      position: "top-left", 
      size: "xl", 
      opacity: "medium", 
      intensity: "light",
      customColor: "bg-blue-200"
    },
    { 
      position: "bottom-right", 
      size: "lg", 
      opacity: "high", 
      intensity: "medium",
      blur: true,
      customColor: "bg-purple-300"
    },
  ]}
  className="py-24 bg-gradient-to-r from-blue-50 to-purple-50"
>
  <section>
    {/* Your content */}
  </section>
</DecorativeBackground>
```

### Fully Custom Positioning
```tsx
<DecorativeBackground
  variant="custom"
  elements={[
    { 
      position: "custom",
      customPosition: "top-1/4 left-3/4 transform -translate-x-1/2",
      size: "md", 
      opacity: "low", 
      intensity: "medium",
      customColor: "bg-emerald-200"
    },
  ]}
  className="min-h-screen bg-emerald-50"
>
  <section>
    {/* Your content */}
  </section>
</DecorativeBackground>
```

## Benefits

1. **Consistency**: Standardized decorative elements across components
2. **Maintainability**: Single source of truth for background styles
3. **Flexibility**: Configurable variants and custom elements
4. **Reusability**: Easy to apply to new components
5. **Performance**: Optimized class generation and rendering
6. **Accessibility**: Proper z-index management and non-interactive elements

## Migration

### Before (Manual Background Elements)
```tsx
<section className="py-24 bg-white relative overflow-hidden">
  <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 transform -translate-x-1/3 -translate-y-1/4"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 transform translate-x-1/3 translate-y-1/4"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Content */}
  </div>
</section>
```

### After (DecorativeBackground Component)
```tsx
<DecorativeBackground variant="light" className="py-24 bg-white">
  <section>
    <div className="container mx-auto px-4">
      {/* Content */}
    </div>
  </section>
</DecorativeBackground>
```

## Notes

- The component automatically handles `relative`, `overflow-hidden`, and z-index management
- Children are wrapped in a `relative z-10` container for proper layering
- All positioning uses Tailwind CSS transform utilities for consistency
- The component is fully TypeScript-typed for better developer experience 