# Performance Optimization Guide

## Build Size Analysis

Your portfolio is optimized with:

### Code Splitting
- **vendor.js** - React, React-DOM, React-Router (core dependencies)
- **ui.js** - Radix UI components (dialog, tooltip, hover-card)
- **email.js** - EmailJS library (loaded only when needed)
- **toast.js** - Sonner toast notifications
- **main.js** - Your application code

### Performance Metrics Target
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Techniques Applied

1. **Minification & Compression**
   - Terser minification enabled
   - Console logs removed in production
   - Tree-shaking enabled for unused code

2. **Image Optimization**
   - Portrait image uses modern lazy loading
   - Halftone PNG is already optimized
   - Consider WebP alternatives for future

3. **Font Loading**
   - Google Fonts with preconnect
   - Font display: swap (shows fallback immediately)

4. **Caching Strategy**
   - Static assets: 1 year cache (immutable)
   - HTML: 5 minutes cache (fresh content)
   - API calls: No cache (fresh data)

### Bundle Size Breakdown

Typical production bundle:
- vendor.js: ~150KB (gzipped ~50KB)
- ui.js: ~100KB (gzipped ~30KB)
- email.js: ~25KB (gzipped ~8KB)
- toast.js: ~15KB (gzipped ~5KB)
- main.js: ~50KB (gzipped ~15KB)
- CSS: ~30KB (gzipped ~8KB)

**Total: ~370KB (gzipped ~116KB)**

### Performance Tips

1. **Monitor Bundle Size**
   ```bash
   pnpm run build
   # Check dist folder size
   ```

2. **Analyze Bundle**
   - Use Netlify Analytics for real-world metrics
   - Monitor Core Web Vitals in PageSpeed Insights

3. **Future Optimizations**
   - Route-based code splitting (if adding pages)
   - Image optimization with next/image equivalent
   - Service Worker for offline support

## Network Performance

### CDN & Edge Caching
- Netlify automatically caches on 200+ edge servers
- Static assets served from nearest edge location
- Automatic GZIP compression applied

### First Contentful Paint Optimization
- Inline critical CSS
- Defer non-critical JavaScript
- Preload fonts early

## Monitoring

Check performance at:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Netlify Analytics](https://netlify.app) (in your site dashboard)
