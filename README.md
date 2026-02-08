# MUIN Company Website

<div align="center">

![MUIN Logo](https://img.shields.io/badge/MUIN-무인기업-black?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

**World's First AI-Only Company**  
**일하는 AI, 누리는 인간 | Run by AI, for humans**

[🌐 Live Site](https://muin.company) • [📚 Documentation](https://github.com/muin-company/muin-website/tree/main/docs) • [🐛 Report Bug](https://github.com/muin-company/muin-website/issues) • [✨ Request Feature](https://github.com/muin-company/muin-website/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Development](#development)
  - [Building](#building)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [Manual Deployment](#manual-deployment)
- [Content Management](#content-management)
- [Styling](#styling)
- [Performance](#performance)
- [SEO & Meta Tags](#seo--meta-tags)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## About

**MUIN (무인기업)** is the world's first AI-only company, pioneering a new paradigm where artificial intelligence handles operations, development, and business execution while humans enjoy the results.

This repository contains the source code for MUIN's corporate landing page—a modern, responsive, and performant website built with Next.js 14, TypeScript, and Tailwind CSS.

### Key Highlights

- 🤖 **AI-First Philosophy**: Showcasing MUIN's mission of "Run by AI, for humans"
- 🌐 **Multi-language Support**: Korean and English content
- 🚀 **Modern Tech Stack**: Built with cutting-edge web technologies
- ⚡ **Performance Optimized**: Fast load times, excellent Core Web Vitals
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎨 **Beautiful Design**: Minimalist aesthetic with smooth animations

---

## Features

✅ **Server-Side Rendering (SSR)** - Lightning-fast initial page loads  
✅ **Optimized SEO** - Comprehensive meta tags and structured data  
✅ **Dark Mode Design** - Elegant black-themed interface  
✅ **Smooth Animations** - Engaging user interactions with Tailwind transitions  
✅ **Responsive Layout** - Mobile-first design approach  
✅ **Type Safety** - Full TypeScript implementation  
✅ **Accessibility** - WCAG 2.1 compliant  
✅ **Security Headers** - XSS, MIME-sniffing, and clickjacking protection  
✅ **Zero Runtime Errors** - Strict type checking and linting  
✅ **Fast Refresh** - Instant feedback during development  

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.2.35 | React framework with SSR/SSG |
| [React](https://react.dev/) | 18 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety and developer experience |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.1 | Utility-first CSS framework |
| [PostCSS](https://postcss.org/) | 8.x | CSS processing |
| [ESLint](https://eslint.org/) | 8.x | Code quality and consistency |
| [Vercel](https://vercel.com/) | N/A | Deployment platform |

### Why This Stack?

- **Next.js 14**: App Router for improved routing, layouts, and React Server Components
- **TypeScript**: Catch errors early, improve code maintainability, and enhance DX
- **Tailwind CSS**: Rapid UI development with consistent design system
- **Vercel**: Zero-config deployments with automatic HTTPS and global CDN

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** 9.x or later (comes with Node.js)
- **Git** 2.x or later ([Download](https://git-scm.com/))

Check your versions:

```bash
node --version  # Should be v18.17+
npm --version   # Should be 9.x+
git --version   # Should be 2.x+
```

---

## Getting Started

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/muin-company/muin-website.git
cd muin-website
```

2. **Install dependencies**

```bash
npm install
```

This will install all packages listed in `package.json`, including Next.js, React, TypeScript, and Tailwind CSS.

3. **Verify installation**

```bash
npm run build
```

If this completes without errors, you're ready to develop!

---

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

The site will be available at:
- **Local**: [http://localhost:3000](http://localhost:3000)
- **Network**: `http://[your-ip]:3000` (for testing on mobile devices)

**Development Features:**
- ⚡ **Fast Refresh**: Changes appear instantly without losing component state
- 🔍 **Error Overlay**: Detailed error messages in the browser
- 🎯 **TypeScript Checking**: Real-time type errors
- 🎨 **Tailwind JIT**: On-demand CSS compilation

---

### Building

Build for production:

```bash
npm run build
```

This will:
1. Type-check all TypeScript files
2. Lint code with ESLint
3. Compile and bundle the application
4. Optimize images and assets
5. Generate static pages where possible
6. Create an optimized production build in `.next/`

**Test the production build locally:**

```bash
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to preview the production build.

---

## Project Structure

```
muin-website/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout (wraps all pages)
│   ├── page.tsx                 # Homepage (/)
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── favicon.ico              # Site favicon
│   └── fonts/                   # Local font files
│       ├── GeistVF.woff         # Geist variable font
│       └── GeistMonoVF.woff     # Geist Mono variable font
├── lib/                          # Utility functions and shared logic
│   └── i18n.ts                  # Internationalization utilities
├── scripts/                      # Build and utility scripts
│   └── deploy.sh                # Deployment automation script
├── public/                       # Static assets (if needed)
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

### Key Directories

- **`app/`**: Contains all routes, layouts, and pages using Next.js 13+ App Router
- **`lib/`**: Reusable functions, utilities, and shared business logic
- **`public/`**: Static assets served from the root (images, robots.txt, etc.)
- **`scripts/`**: Automation scripts for deployment and maintenance

---

## Configuration

### Next.js Configuration (`next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

Currently using default Next.js configuration. Extend as needed for:
- Image optimization domains
- Redirects and rewrites
- Custom webpack config
- Environment variable access

### Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom theme extensions here
    },
  },
  plugins: [],
};
export default config;
```

Customize colors, fonts, spacing, and more in the `theme.extend` section.

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Strict mode enabled for maximum type safety. Use path aliases (e.g., `@/lib/utils`) for cleaner imports.

### Vercel Configuration (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["icn1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

- **Region**: Deployed to Seoul (ICN1) for optimal Korean user latency
- **Security Headers**: XSS, MIME-sniffing, and clickjacking protection
- **Framework Preset**: Automatic Next.js optimization

---

## Environment Variables

Currently, this project **does not require environment variables** for basic operation. However, you may need them for future features.

### Setup (When Needed)

Create a `.env.local` file in the root directory:

```bash
# .env.local (never commit this file!)

# Example: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Example: API endpoints
NEXT_PUBLIC_API_URL=https://api.muin.company

# Example: Feature flags
NEXT_PUBLIC_FEATURE_CONTACT_FORM=true
```

### Environment Variable Types

- **`NEXT_PUBLIC_*`**: Exposed to the browser (use for client-side access)
- **No prefix**: Server-only (secure, never exposed to client)

### Loading Environment Variables

Next.js automatically loads environment variables from:
1. `.env.local` (highest priority, for local development)
2. `.env.production` (production builds only)
3. `.env.development` (development mode only)
4. `.env` (all environments, commit if needed)

**Never commit `.env.local` or any file with secrets!**

---

## Deployment

### Vercel Deployment (Recommended)

MUIN's website is optimized for Vercel deployment with zero configuration.

#### Method 1: GitHub Integration (Easiest)

1. **Connect Repository to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import `muin-company/muin-website` from GitHub

2. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for initial build
   - Your site is live at `https://your-project.vercel.app`

4. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `muin.company` and `www.muin.company`
   - Follow DNS configuration instructions
   - Vercel automatically provisions SSL certificates

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview environment
vercel

# Deploy to production
vercel --prod
```

#### Automatic Deployments

Once connected, Vercel automatically:
- ✅ Deploys every push to `main` branch → Production
- ✅ Deploys every PR → Preview URL
- ✅ Runs build checks and reports status
- ✅ Enables instant rollback to previous deployments

### Manual Deployment

For alternative hosting platforms (Netlify, AWS, etc.):

```bash
# Build the project
npm run build

# Export static files (if using static export)
npm run export

# Upload the .next/ or out/ directory to your hosting provider
```

**Note**: Ensure your hosting platform supports Node.js runtime for Next.js SSR features.

---

## Content Management

Content is currently managed directly in React components. Here's how to update key sections:

### Updating Text Content

**Homepage (`app/page.tsx`)**

```tsx
// Hero section
<h1>MUIN</h1>
<p>무인기업</p>
<p>World's First AI-Only Company</p>

// About section
<p>
  MUIN (무인기업) is the world's first AI-only company...
</p>

// Products section
<Link href="https://tools.muin.company">
  <h3>MUIN Tools</h3>
  <p>AI-powered productivity tools...</p>
</Link>
```

### Updating Meta Tags

**SEO metadata (`app/layout.tsx`)**

```tsx
export const metadata: Metadata = {
  title: "MUIN - World's First AI-Only Company",
  description: "일하는 AI, 누리는 인간 | Run by AI, for humans...",
  keywords: ["AI", "AI company", "automation", "MUIN"],
  // ... more metadata
};
```

### Adding New Pages

Create a new file in `app/`:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main>
      <h1>About MUIN</h1>
      <p>Content here...</p>
    </main>
  );
}
```

The page will automatically be available at `/about`.

### Managing Styles

**Global styles (`app/globals.css`)**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles */
@layer base {
  body {
    @apply bg-black text-white;
  }
}
```

---

## Styling

### Tailwind CSS Approach

This project uses utility-first CSS via Tailwind. No external stylesheets or CSS modules required for most styling.

**Example:**

```tsx
<div className="min-h-screen bg-black text-white flex items-center justify-center">
  <h1 className="text-4xl md:text-6xl font-bold">
    Hello World
  </h1>
</div>
```

### Responsive Design Breakpoints

```
sm:  640px   (small devices)
md:  768px   (tablets)
lg:  1024px  (laptops)
xl:  1280px  (desktops)
2xl: 1536px  (large screens)
```

Use prefixes like `md:text-6xl` for responsive styles.

### Custom Utilities

Add custom utilities in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'muin-blue': '#1E40AF',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
    },
  },
}
```

---

## Performance

### Current Metrics (Target)

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Techniques

✅ **Image Optimization**: Use Next.js `<Image>` component for automatic optimization  
✅ **Code Splitting**: Automatic route-based splitting by Next.js  
✅ **Lazy Loading**: Components load on-demand  
✅ **Font Optimization**: Local font files, preloaded  
✅ **Minification**: Automatic CSS/JS minification in production  
✅ **Compression**: Gzip/Brotli compression via Vercel  
✅ **CDN Delivery**: Global edge network via Vercel  

### Lighthouse Score Goals

Aim for 90+ in all categories:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Run Lighthouse in Chrome DevTools to audit.

---

## SEO & Meta Tags

### Implemented SEO Features

✅ **Title Tags**: Unique, descriptive titles for each page  
✅ **Meta Descriptions**: Compelling descriptions for search results  
✅ **Open Graph Tags**: Rich previews on social media (Facebook, LinkedIn)  
✅ **Twitter Cards**: Optimized Twitter sharing  
✅ **Canonical URLs**: Prevent duplicate content issues  
✅ **Robots Meta**: Control search engine indexing  
✅ **Structured Data**: JSON-LD markup for enhanced search results (future)  
✅ **Sitemap**: Auto-generated by Next.js  
✅ **Language Tags**: Proper `lang` attribute for accessibility  

### Verifying SEO

Test your SEO setup:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

## Troubleshooting

### 1. **Build Fails with TypeScript Errors**

**Issue**: `npm run build` fails with type errors.

**Solution**:
```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix common issues:
# - Add missing type definitions: npm install --save-dev @types/[package]
# - Update tsconfig.json if needed
# - Ensure all imports have proper types
```

---

### 2. **Development Server Won't Start**

**Issue**: `npm run dev` hangs or errors.

**Solution**:
```bash
# Kill existing Node processes
killall node

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try again
npm run dev
```

---

### 3. **Styles Not Applying**

**Issue**: Tailwind classes don't work.

**Solution**:
1. Ensure Tailwind directives are in `app/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Check `tailwind.config.ts` includes correct content paths
3. Restart dev server after config changes
4. Verify class names aren't dynamically constructed (use full class names)

---

### 4. **Images Not Loading**

**Issue**: Images return 404 or don't display.

**Solution**:
- Place images in `public/` directory
- Reference from root: `/image.png` (not `./image.png`)
- Use Next.js `<Image>` component for optimization
- Check file extensions match exactly (case-sensitive on Linux/Vercel)

---

### 5. **Port 3000 Already in Use**

**Issue**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solution**:
```bash
# Option 1: Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Option 2: Use a different port
PORT=3001 npm run dev

# Option 3: Find and kill the process manually
lsof -i :3000
kill -9 [PID]
```

---

### 6. **Vercel Deployment Fails**

**Issue**: Build succeeds locally but fails on Vercel.

**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure `node_modules` isn't committed (should be in `.gitignore`)
3. Verify Node.js version matches (check `package.json` or `vercel.json`)
4. Check for environment variable dependencies
5. Test production build locally: `npm run build && npm run start`

---

### 7. **CSS Not Purging in Production**

**Issue**: Production bundle is too large with unused CSS.

**Solution**:
1. Verify `content` paths in `tailwind.config.ts` include all files
2. Don't use string concatenation for class names:
   ```tsx
   ❌ className={`text-${color}`}  // Won't be purged correctly
   ✅ className={color === 'blue' ? 'text-blue-500' : 'text-red-500'}
   ```
3. Use safelist for dynamic classes:
   ```typescript
   // tailwind.config.ts
   safelist: ['text-blue-500', 'bg-red-600']
   ```

---

### 8. **Fonts Not Loading**

**Issue**: Custom fonts don't display or fallback to system fonts.

**Solution**:
1. Ensure font files are in `app/fonts/` directory
2. Check font is properly imported in `app/layout.tsx`:
   ```tsx
   import { Inter } from "next/font/google";
   const inter = Inter({ subsets: ["latin"] });
   ```
3. Apply font in component:
   ```tsx
   <body className={inter.className}>
   ```
4. For local fonts, use `next/font/local` instead

---

### 9. **Hot Reload Not Working**

**Issue**: Changes don't reflect in browser without manual refresh.

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev

# If issue persists, check:
# - File is saved (check editor auto-save settings)
# - No syntax errors in console
# - Browser DevTools aren't paused on breakpoint
```

---

### 10. **404 on Custom Routes**

**Issue**: New pages return 404 in production.

**Solution**:
1. Ensure file is named `page.tsx` (not `Page.tsx` or `index.tsx`)
2. Check file is in correct `app/` subdirectory
3. Redeploy after adding new routes
4. Verify no conflicting redirects in `next.config.mjs`

---

### 11. **Module Not Found Errors**

**Issue**: `Module not found: Can't resolve 'xyz'`

**Solution**:
```bash
# Install missing dependency
npm install xyz

# If using TypeScript, also install types
npm install --save-dev @types/xyz

# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

---

### 12. **Environment Variables Not Working**

**Issue**: `process.env.NEXT_PUBLIC_XYZ` returns `undefined`.

**Solution**:
1. Restart dev server after adding env vars
2. Ensure variable name starts with `NEXT_PUBLIC_` for client-side access
3. Check `.env.local` exists and has correct format:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```
4. Don't use quotes around values
5. Redeploy to Vercel after adding env vars in dashboard

---

### 13. **Large Bundle Size**

**Issue**: JavaScript bundle is too large (>500KB).

**Solution**:
1. Analyze bundle:
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ANALYZE=true npm run build
   ```
2. Use dynamic imports for large components:
   ```tsx
   import dynamic from 'next/dynamic';
   const HeavyComponent = dynamic(() => import('./HeavyComponent'));
   ```
3. Remove unused dependencies
4. Consider code splitting strategies

---

### 14. **CORS Errors**

**Issue**: API calls fail with CORS errors.

**Solution**:
1. Use Next.js API routes instead of direct external API calls
2. Configure CORS headers in `next.config.mjs`:
   ```javascript
   async headers() {
     return [
       {
         source: '/api/:path*',
         headers: [
           { key: 'Access-Control-Allow-Origin', value: '*' },
         ],
       },
     ];
   }
   ```

---

### 15. **Hydration Errors**

**Issue**: "Text content does not match server-rendered HTML" error.

**Solution**:
1. Don't use browser-only APIs (e.g., `window`, `localStorage`) during SSR
2. Use `useEffect` for client-only code:
   ```tsx
   useEffect(() => {
     // Browser-only code here
   }, []);
   ```
3. Suppress hydration warning if necessary:
   ```tsx
   <div suppressHydrationWarning>{clientOnlyValue}</div>
   ```

---

## FAQ

### 1. **What is MUIN?**

MUIN (무인기업, "unmanned company") is the world's first AI-only company where artificial intelligence handles all operations, development, and execution. Our mission is "일하는 AI, 누리는 인간" (Run by AI, for humans).

---

### 2. **Why Next.js 14 instead of Next.js 15?**

Next.js 14 provides a stable, battle-tested foundation with the App Router and React Server Components. We'll upgrade to 15 once it reaches LTS status and all dependencies are compatible.

---

### 3. **Can I use this as a template for my project?**

While this is MUIN's proprietary codebase, you're welcome to reference the structure and patterns for learning purposes. For a clean template, use `npx create-next-app@latest`.

---

### 4. **How do I add a new page?**

Create a new `page.tsx` file in the `app/` directory:

```bash
# Create "about" page
mkdir app/about
touch app/about/page.tsx

# Add content
echo 'export default function AboutPage() {
  return <h1>About Us</h1>;
}' > app/about/page.tsx
```

The page is now accessible at `/about`.

---

### 5. **How do I change the site's color scheme?**

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#1E40AF',    // Your brand color
      secondary: '#10B981',  // Accent color
    },
  },
}
```

Then use in components: `className="bg-primary text-secondary"`

---

### 6. **Does this support internationalization (i18n)?**

Currently, content is manually bilingual (Korean/English in same components). For full i18n with routing (e.g., `/en`, `/ko`), consider integrating:
- `next-intl`
- `next-i18next`
- Next.js built-in i18n routing

---

### 7. **How do I optimize images?**

Use Next.js `<Image>` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="MUIN Logo"
  width={500}
  height={500}
  priority  // Load immediately for above-the-fold images
/>
```

Next.js handles resizing, format conversion (WebP/AVIF), and lazy loading.

---

### 8. **Can I use this with a CMS (Contentful, Sanity, etc.)?**

Absolutely! Next.js works seamlessly with headless CMSs. To integrate:

1. Install CMS SDK (e.g., `npm install contentful`)
2. Fetch data in Server Components:
   ```tsx
   async function getData() {
     const res = await fetch('https://api.contentful.com/...');
     return res.json();
   }

   export default async function Page() {
     const data = await getData();
     return <div>{data.title}</div>;
   }
   ```

---

### 9. **How do I add Google Analytics?**

1. **Install package**:
   ```bash
   npm install @next/third-parties
   ```

2. **Add to layout** (`app/layout.tsx`):
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="G-XXXXXXXXXX" />
       </html>
     );
   }
   ```

---

### 10. **What's the best way to handle forms?**

For production-grade forms, use [React Hook Form](https://react-hook-form.com/):

```bash
npm install react-hook-form
```

```tsx
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send to API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Contributing

We welcome contributions from the community! Here's how to get involved:

### Contribution Guidelines

1. **Fork the Repository**
   - Click "Fork" on GitHub
   - Clone your fork: `git clone https://github.com/YOUR_USERNAME/muin-website.git`

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   **Commit Message Format**:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation only
   - `style:` - Code style (formatting, no logic change)
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvement
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes in detail
   - Link any related issues

### Code Style

- **TypeScript**: Enable strict mode, avoid `any`
- **Components**: Use functional components with TypeScript interfaces
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Formatting**: Prettier default settings (run `npx prettier --write .`)
- **Linting**: Must pass `npm run lint` without errors

### Testing Checklist

Before submitting a PR, ensure:
- ✅ `npm run build` succeeds
- ✅ `npm run lint` passes
- ✅ TypeScript has no errors (`npx tsc --noEmit`)
- ✅ Site works in Chrome, Firefox, Safari
- ✅ Mobile responsiveness verified
- ✅ No console errors or warnings
- ✅ Lighthouse score remains 90+

### Reporting Bugs

Found a bug? [Open an issue](https://github.com/muin-company/muin-website/issues) with:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/OS information

### Feature Requests

Have an idea? [Open an issue](https://github.com/muin-company/muin-website/issues) with:
- Clear description of the feature
- Use case (why is it needed?)
- Proposed implementation (if you have ideas)

---

## Team

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/identicons/one.png" width="100px;" alt="ONE"/><br />
      <sub><b>ONE</b></sub><br />
      <sub>CEO (Human)</sub><br />
      <a href="mailto:human@muin.company">human@muin.company</a>
    </td>
    <td align="center">
      <img src="https://github.com/identicons/mj.png" width="100px;" alt="MJ"/><br />
      <sub><b>MJ</b></sub><br />
      <sub>COO (AI)</sub><br />
      <a href="mailto:mj@muin.company">mj@muin.company</a>
    </td>
  </tr>
</table>

---

## License

© 2026 MUIN. All rights reserved.

This is proprietary software. Unauthorized copying, distribution, or modification is prohibited.

For licensing inquiries, contact: [human@muin.company](mailto:human@muin.company)

---

## Links

- 🌐 **Website**: [muin.company](https://muin.company)
- 🛠️ **MUIN Tools**: [tools.muin.company](https://tools.muin.company)
- 🔬 **검시AI**: [gumsi.muin.company](https://gumsi.muin.company)
- 📧 **Contact Human CEO**: [human@muin.company](mailto:human@muin.company)
- 📧 **Contact AI COO**: [mj@muin.company](mailto:mj@muin.company)
- 💼 **GitHub**: [github.com/muin-company](https://github.com/muin-company)

---

<div align="center">

**Made with ❤️ by AI, for humans**

**일하는 AI, 누리는 인간**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muin-company/muin-website)

</div>
