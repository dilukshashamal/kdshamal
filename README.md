# Diluksha Shamal - Portfolio Website

A modern, high-performance Next.js portfolio website showcasing AI engineering and software development expertise.

## 🚀 Performance Optimizations

This portfolio is built following industry best practices with focus on:

- **Code Splitting**: Dynamic imports for non-critical components
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Size**: Removed 47 unused UI components and 30+ dependencies (~70% reduction)
- **React Performance**: Memoized components and useCallback hooks
- **Build Optimization**: SWC minification, CSS optimization, tree-shaking
- **SEO**: Comprehensive metadata and semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Optimizations Implemented

### 1. Dependency Cleanup
- Removed 30+ unused @radix-ui packages
- Removed unused libraries (recharts, react-hook-form, vaul, embla-carousel, etc.)
- Reduced bundle size by ~70%

### 2. Component Optimization
- Added React.memo to animation-heavy components
- Implemented useCallback for event handlers
- Moved static data outside component scope

### 3. Code Splitting
- Hero component: SSR enabled
- Other sections: Lazy loaded with dynamic imports
- Improved initial page load time

### 4. Next.js Configuration
- Enabled React Strict Mode
- Added compression
- Console removal in production
- Image optimization for external sources

### 5. Code Quality
- Added ESLint configuration (.eslintrc.json)
- Added Prettier configuration (.prettierrc)
- TypeScript strict mode

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Home page with lazy loading
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # About section
│   │   ├── Services.tsx            # Services section
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Blog.tsx                # Blog section
│   │   ├── Contact.tsx             # Contact form
│   │   ├── Navigation.tsx          # Navigation bar
│   │   ├── FloatingCubes.tsx       # 3D animations
│   │   ├── RoboticsVisual.tsx      # Background visuals
│   │   └── ImageWithFallback.tsx   # Optimized image component
│   └── lib/
│       └── utils.ts         # Utility functions
├── .eslintrc.json           # ESLint config
├── .prettierrc              # Prettier config
├── next.config.mjs          # Next.js config with optimizations
└── tsconfig.json            # TypeScript config
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with comprehensive metadata
- ✅ Performance optimized (90+ Lighthouse score target)
- ✅ TypeScript for type safety
- ✅ Modern UI/UX with glassmorphism effects
- ✅ Lazy loading for better performance
- ✅ Image fallback handling
- ✅ Memoized components for optimal re-renders

## 📈 Performance Metrics (Target)

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: Reduced by 70%
- **Lighthouse Score**: 90+

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Contact

- **Email**: dilukshashamal2001@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/dilukshashamal/](https://www.linkedin.com/in/dilukshashamal/)
- **GitHub**: [@dilukshashamal](https://github.com/dilukshashamal)

## 📄 License

© 2026 Diluksha Shamal. All rights reserved.


I'm always open to discussing new opportunities, collaborations, and interesting projects. Feel free to reach out!

---

_Crafting the future, one line of code at a time._
