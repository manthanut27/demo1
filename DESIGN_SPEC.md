# Epicure Restaurant - Design Specification

## 🎨 Visual Identity

### Brand Personality
- **Premium**: High-end dining experience
- **Elegant**: Sophisticated and refined
- **Warm**: Inviting and approachable
- **Modern**: Contemporary and fresh
- **Trustworthy**: Reliable and professional

### Logo Design
- **Primary**: ChefHat icon + "Epicure" wordmark
- **Colors**: Primary orange (#f2740a) with gradient text effect
- **Typography**: Playfair Display for wordmark
- **Usage**: Always maintain minimum clear space around logo

## 🎨 Color System

### Primary Colors
```css
/* Warm Orange Palette */
--primary-50: #fef7ee    /* Lightest background */
--primary-100: #fdedd3   /* Light background */
--primary-200: #fbd8a5   /* Subtle accent */
--primary-300: #f8bc6d   /* Muted accent */
--primary-400: #f59632   /* Medium accent */
--primary-500: #f2740a   /* Primary brand */
--primary-600: #e35800   /* Primary hover */
--primary-700: #bc4102   /* Primary active */
--primary-800: #953408   /* Dark accent */
--primary-900: #772b09   /* Darkest accent */
```

### Secondary Colors
```css
/* Cool Gray Palette */
--secondary-50: #f8fafc   /* Lightest background */
--secondary-100: #f1f5f9  /* Light background */
--secondary-200: #e2e8f0  /* Subtle border */
--secondary-300: #cbd5e1  /* Light border */
--secondary-400: #94a3b8  /* Medium text */
--secondary-500: #64748b  /* Body text */
--secondary-600: #475569  /* Headings */
--secondary-700: #334155  /* Dark headings */
--secondary-800: #1e293b  /* Very dark */
--secondary-900: #0f172a  /* Darkest */
```

### Accent Colors
```css
/* Success Green */
--accent-50: #f0fdf4
--accent-100: #dcfce7
--accent-500: #22c55e
--accent-600: #16a34a
--accent-800: #14532d

/* Status Colors */
--success: #22c55e
--warning: #f59e0b
--error: #ef4444
--info: #3b82f6
```

## 📝 Typography

### Font Families
```css
/* Primary - Headings */
font-family: 'Playfair Display', serif;

/* Secondary - Body Text */
font-family: 'Inter', system-ui, sans-serif;

/* Monospace - Code */
font-family: 'Fira Code', monospace;
```

### Type Scale
```css
/* Headings */
--text-4xl: 2.25rem;    /* 36px - Hero headings */
--text-3xl: 1.875rem;   /* 30px - Page headings */
--text-2xl: 1.5rem;     /* 24px - Section headings */
--text-xl: 1.25rem;     /* 20px - Card headings */
--text-lg: 1.125rem;    /* 18px - Large text */

/* Body */
--text-base: 1rem;      /* 16px - Default body */
--text-sm: 0.875rem;    /* 14px - Small text */
--text-xs: 0.75rem;     /* 12px - Caption text */
```

### Font Weights
- **Light**: 300 (Inter only)
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## 📐 Spacing System

### Base Unit: 4px (0.25rem)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## 🧩 Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--primary-600);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background: var(--primary-700);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--secondary-200);
  color: var(--secondary-800);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
.btn-secondary:hover {
  background: var(--secondary-300);
}
```

#### Outline Button
```css
.btn-outline {
  border: 2px solid var(--primary-600);
  color: var(--primary-600);
  background: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}
.btn-outline:hover {
  background: var(--primary-600);
  color: white;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07);
  border: 1px solid var(--secondary-100);
  overflow: hidden;
}

.card-hover {
  transition: box-shadow 0.2s;
}
.card-hover:hover {
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Forms
```css
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--secondary-300);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input-field:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(242, 116, 10, 0.1);
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-primary {
  background: var(--primary-100);
  color: var(--primary-800);
}

.badge-success {
  background: var(--accent-100);
  color: var(--accent-800);
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
}

.badge-danger {
  background: #fee2e2;
  color: #991b1b;
}
```

## 🎭 Animation & Transitions

### Standard Transitions
```css
/* Default transition for interactive elements */
transition: all 0.2s ease-in-out;

/* Color transitions */
transition: color 0.2s, background-color 0.2s;

/* Transform transitions */
transition: transform 0.3s ease-out;

/* Opacity transitions */
transition: opacity 0.3s ease-in-out;
```

### Custom Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceGentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default: 320px+ (Mobile) */
@media (min-width: 640px)  { /* sm - Small tablets */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1024px) { /* lg - Laptops */ }
@media (min-width: 1280px) { /* xl - Desktops */ }
@media (min-width: 1536px) { /* 2xl - Large screens */ }
```

### Container Sizes
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}
@media (min-width: 768px) {
  .container { max-width: 768px; }
}
@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}
@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}
@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
```

## 🖼️ Image Guidelines

### Aspect Ratios
- **Hero Images**: 16:9 (1920x1080)
- **Dish Images**: 4:3 (800x600)
- **Chef Photos**: 1:1 (400x400)
- **Category Images**: 3:2 (1200x800)

### Image Optimization
- **Format**: WebP with JPEG fallback
- **Compression**: 80-85% quality
- **Lazy Loading**: Implemented for performance
- **Responsive**: Multiple sizes for different screens

## 🎯 Accessibility Standards

### Color Contrast
- **Normal Text**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio

### Focus States
```css
.focus-visible:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(242, 116, 10, 0.5);
  border-radius: 0.25rem;
}
```

### ARIA Labels
- All interactive elements have descriptive labels
- Form inputs have associated labels
- Navigation landmarks are properly marked
- Status messages are announced to screen readers

## 🌟 Visual Hierarchy

### Heading Structure
1. **H1**: Page titles (Hero sections)
2. **H2**: Main section headings
3. **H3**: Subsection headings
4. **H4**: Card titles and form labels
5. **H5**: Small headings within cards
6. **H6**: Caption headings

### Content Hierarchy
- **Primary Actions**: Use primary button styling
- **Secondary Actions**: Use secondary or outline styling
- **Destructive Actions**: Use danger styling
- **Information**: Use info styling
- **Success Messages**: Use success styling

## 🎨 Layout Patterns

### Grid Systems
```css
/* 12-column grid for complex layouts */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

/* Flexible grid for cards */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

### Flexbox Utilities
```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
```

## 🎪 Interactive States

### Hover Effects
- **Cards**: Subtle shadow increase
- **Buttons**: Color and scale changes
- **Links**: Color transitions
- **Images**: Subtle scale transforms

### Loading States
- **Skeleton Screens**: For content loading
- **Spinners**: For button actions
- **Progress Bars**: For multi-step processes
- **Pulse Animations**: For placeholder content

### Error States
- **Form Fields**: Red border and error message
- **Buttons**: Disabled state with reduced opacity
- **Cards**: Subtle error styling
- **Toast Notifications**: Error-specific styling

This design system ensures consistency, accessibility, and a premium user experience across all devices and platforms.
