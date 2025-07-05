# Color Palette Implementation Guide

## Overview
This tech blog now features a modern dual-theme color system with smooth transitions between light and dark modes.

## Color Palettes

### Light Mode: "Code & Clarity"
- **Primary Background**: #FFFFFF
- **Surface/Card Background**: #F8F9FA
- **Primary Text**: #212529
- **Secondary Text**: #6C757D
- **Primary Accent**: #007BFF
- **Secondary Accent**: #28A745
- **Call to Action/Warning**: #FFC107
- **Error/Danger**: #DC3545

### Dark Mode: "Ocean Tech"
- **Primary Background**: #0D1117 (Deep ocean blue)
- **Surface/Card Background**: #161B22 (Dark ocean surface)
- **Primary Text**: #E6EDF3 (Bright white-blue)
- **Secondary Text**: #8B949E (Soft gray-blue)
- **Primary Accent**: #58A6FF (Vibrant blue)
- **Secondary Accent**: #3FB950 (Fresh green)
- **Call to Action/Warning**: #D29922 (Warm amber)
- **Error/Danger**: #F85149 (Coral red)

## Implementation Details

### 1. CSS Custom Properties
Colors are defined as CSS custom properties in `/src/styles/global.css`:
- Light mode uses default `:root` selector
- Dark mode uses `[data-theme="dark"]` selector
- Smooth transitions between themes (0.3s ease)

### 2. Tailwind Integration
Extended Tailwind config to use CSS variables:
- Access colors via `theme-*` prefix (e.g., `bg-theme-primary-bg`)
- Maintains Tailwind's utility-first approach
- Works seamlessly with existing Tailwind classes

### 3. Theme Toggle Component
- Located at `/src/components/ThemeToggle.astro`
- Fixed position (top-right corner)
- Respects system preferences by default
- Persists user choice in localStorage
- Smooth icon transitions

### 4. Usage Examples
```html
<!-- Background colors -->
<div class="bg-theme-primary-bg">Main background</div>
<div class="bg-theme-surface-bg">Card/surface background</div>

<!-- Text colors -->
<p class="text-theme-primary-text">Primary text</p>
<p class="text-theme-secondary-text">Secondary text</p>

<!-- Accent colors -->
<button class="bg-theme-primary-accent">Primary action</button>
<span class="text-theme-secondary-accent">Highlighted text</span>

<!-- Borders and hover states -->
<div class="border border-theme-border hover:bg-theme-hover-bg">
  Interactive element
</div>
```

### 5. Components Updated
- Layout.astro - Base styles and theme toggle
- Header.astro - Navigation colors
- PostCard.astro - Blog post cards
- ProjectCard.astro - Project cards
- Link.astro - Link styles
- post.css - Blog post content styles

### 6. Additional Features
- Prevents flash of unstyled content on page load
- Automatic theme detection based on system preferences
- Manual override with persistent storage
- Smooth color transitions for better UX
- Accessible theme toggle button

## Best Practices
1. Always use theme-aware color classes instead of hardcoded colors
2. Test both themes when making UI changes
3. Ensure sufficient contrast ratios for accessibility
4. Use semantic color names (primary, secondary) rather than specific colors