# Images Directory

## 📁 Structure

```
fe/public/images/
├── logos/           # Logo files (PNG, SVG, JPG)
├── icons/           # Icon files (SVG, PNG)
├── illustrations/   # Illustration images
└── README.md        # This file
```

## 🎨 Usage

### Public Images (Static Assets)
- **Path**: `/images/logo.png`
- **Usage**: `<img src="/images/logo.png" alt="Logo" />`
- **Best for**: Static images, logos, favicons

### Asset Images (Processed by Vite)
- **Path**: `~/assets/images/logo.png`
- **Usage**: `import logo from '~/assets/images/logo.png'`
- **Best for**: Images that need optimization, processing

## 📝 Guidelines

### Logo Files
- **Format**: SVG (preferred), PNG with transparent background
- **Sizes**: 
  - Logo: 200x60px (header)
  - Favicon: 32x32px, 16x16px
  - Social: 1200x630px (Open Graph)

### Icon Files
- **Format**: SVG (preferred), PNG
- **Size**: 24x24px, 32x32px
- **Style**: Consistent with design system

### Illustrations
- **Format**: SVG, PNG, JPG
- **Optimization**: Compress for web
- **Alt text**: Always provide descriptive alt text

## 🚀 Examples

### Using Public Images
```vue
<template>
  <img src="/images/logos/tasknest-logo.svg" alt="TaskNest Logo" />
</template>
```

### Using Asset Images
```vue
<script setup>
import logo from '~/assets/images/logos/tasknest-logo.svg'
</script>

<template>
  <img :src="logo" alt="TaskNest Logo" />
</template>
```

## 📦 File Naming Convention

- **Logos**: `tasknest-logo.svg`, `tasknest-logo-white.svg`
- **Icons**: `icon-dashboard.svg`, `icon-settings.svg`
- **Illustrations**: `hero-illustration.svg`, `features-banner.png`

## 🔧 Optimization Tips

1. **SVG**: Use SVG for logos and icons (scalable, small size)
2. **PNG**: Use PNG for images with transparency
3. **JPG**: Use JPG for photos and complex images
4. **Compression**: Optimize images before adding to project
5. **Lazy Loading**: Use `loading="lazy"` for images below fold
