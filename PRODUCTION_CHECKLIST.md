# Production Checklist ✅

## Pre-Deployment Verification

### Code Quality
- [ ] Run linter: `pnpm lint`
- [ ] Fix all lint errors
- [ ] Run type checker: `pnpm type-check`
- [ ] No TypeScript errors
- [ ] All imports are correct
- [ ] No console.error or console.warn in production

### Functionality Testing
- [ ] Test all page navigation (page flip animation works)
- [ ] Hover effects visible on buttons and inputs
- [ ] Certificate gallery opens and displays PDFs
- [ ] Certificate download button works
- [ ] Contact form validates required fields
- [ ] Contact form submits successfully
- [ ] Toast notifications appear for success/error
- [ ] Mobile responsiveness verified (< 640px)
- [ ] Tablet responsiveness verified (640px - 1024px)
- [ ] Desktop layout correct (> 1024px)
- [ ] Portrait image scales correctly on all devices
- [ ] All GitHub project links work

### Environment Setup
- [ ] EmailJS account created at emailjs.com
- [ ] Gmail service configured in EmailJS
- [ ] Email template created in EmailJS
- [ ] API keys saved securely
- [ ] `.env.local` has all three keys for local testing
- [ ] `.env.production` template created
- [ ] `.env` file in `.gitignore`

### Build & Performance
- [ ] `pnpm run build` completes without errors
- [ ] No build warnings or deprecated warnings
- [ ] `dist` folder created successfully
- [ ] Build size reasonable (~116KB gzipped)
- [ ] `pnpm run preview` shows site working correctly
- [ ] No console errors in preview

### SEO & Metadata
- [ ] Meta description present in index.html
- [ ] OG tags configured for social sharing
- [ ] Twitter card meta tags present
- [ ] Page title is descriptive
- [ ] Favicon configured (if needed)
- [ ] robots.txt present (if needed)

### GitHub Setup
- [ ] Repository created and public
- [ ] All code committed: `git add .`
- [ ] Initial commit made: `git commit -m "..."`
- [ ] Repository pushed: `git push -u origin main`
- [ ] README.md added (optional but recommended)
- [ ] `.gitignore` prevents committing sensitive files

### Netlify Configuration
- [ ] `netlify.toml` exists in root
- [ ] Build command set to: `pnpm run build`
- [ ] Publish directory set to: `dist`
- [ ] Node version set to: `20`
- [ ] Redirects configured for React Router
- [ ] Security headers configured
- [ ] Caching rules set appropriately

## Deployment Steps

### Step 1: Connect Netlify
1. [ ] Go to app.netlify.com
2. [ ] Click "Add new site" → "Import an existing project"
3. [ ] Select GitHub provider
4. [ ] Authorize Netlify
5. [ ] Select your portfolio repository
6. [ ] Verify build settings (pnpm run build → dist)
7. [ ] Click "Deploy site"

### Step 2: Add Environment Variables
1. [ ] Go to Site settings → Build & deploy → Environment
2. [ ] Click "Edit variables"
3. [ ] Add VITE_EMAILJS_PUBLIC_KEY
4. [ ] Add VITE_EMAILJS_SERVICE_ID
5. [ ] Add VITE_EMAILJS_TEMPLATE_ID
6. [ ] Save environment variables

### Step 3: Trigger Redeploy
1. [ ] Site settings → Deploys
2. [ ] Click "Trigger deploy" → "Deploy site"
3. [ ] Wait for deployment to complete

### Step 4: Test Live Site
1. [ ] Visit provided Netlify URL
2. [ ] Test all pages load correctly
3. [ ] Test contact form sends email
4. [ ] Verify email arrives in inbox
5. [ ] Check toast notifications appear
6. [ ] Verify responsive on mobile

## Post-Deployment

### Monitoring
- [ ] Check Netlify Analytics for traffic
- [ ] Monitor deployment history for errors
- [ ] Review Core Web Vitals scores
- [ ] Set up error tracking (optional)

### Custom Domain (Optional)
- [ ] Purchase domain from registrar
- [ ] Go to Site settings → Domain management
- [ ] Add custom domain
- [ ] Update DNS records as instructed
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify SSL certificate issued

### Maintenance
- [ ] Schedule weekly link checks
- [ ] Monitor contact form submissions
- [ ] Review analytics monthly
- [ ] Update content as needed
- [ ] Keep dependencies updated: `pnpm update`

## Troubleshooting Quick Reference

| Issue | Solution |
|-------|----------|
| Build fails on Netlify | Check build logs, verify `pnpm` is available, check Node version |
| Email not sending | Verify env vars in Netlify, redeploy after adding env vars |
| 404 on page refresh | Verify netlify.toml redirects are configured |
| Site loads slowly | Check Core Web Vitals, review network tab, optimize images |
| Certificate PDFs won't open | Verify file paths in data/content.ts match actual files |
| Toasts not showing | Verify Sonner Toaster provider in main.tsx |

## Success Criteria

Your portfolio is successfully deployed when:
✅ Site loads without errors
✅ All pages navigate correctly with flip animation
✅ Contact form sends emails successfully
✅ Toast notifications appear
✅ Mobile/tablet/desktop layouts all correct
✅ Certificates display properly
✅ Project links work
✅ Performance is good (LCP < 2.5s)
✅ No console errors in browser DevTools

---

**Deployment ready! Follow the steps above to go live on Netlify.** 🚀
