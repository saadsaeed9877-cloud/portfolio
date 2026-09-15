# Complete Netlify Deployment Guide

## Prerequisites
- GitHub account with your project repository
- Netlify account (free at [netlify.com](https://netlify.com))
- Your EmailJS API keys ready

## Step 1: Prepare Your Code

### 1.1 Push to GitHub
```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add GitHub as remote
git remote add origin https://github.com/yourusername/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 1.2 Verify Build Works Locally
```bash
# Test production build
pnpm run build

# Preview production build locally
pnpm run preview
```

## Step 2: Connect to Netlify

### 2.1 Connect GitHub Repository
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your portfolio repository
6. Click **"Next"**

### 2.2 Configure Build Settings
1. **Build command:** `pnpm run build`
2. **Publish directory:** `dist`
3. **Node version:** `20`
4. Click **"Deploy site"**

Netlify will now deploy your site! 🚀

## Step 3: Add Environment Variables

### 3.1 In Netlify Dashboard
1. Go to your site settings
2. Navigate to **"Build & deploy"** → **"Environment"**
3. Click **"Edit variables"**
4. Add your EmailJS credentials:

```
VITE_EMAILJS_PUBLIC_KEY = your_actual_public_key
VITE_EMAILJS_SERVICE_ID = service_xxxxx
VITE_EMAILJS_TEMPLATE_ID = template_xxxxx
```

5. **Redeploy** your site after adding environment variables
   - Site settings → Deploys → Trigger deploy → Deploy site

## Step 4: Verify Email Functionality

1. Wait for deployment to complete (check Deploys tab)
2. Visit your live site URL (provided by Netlify)
3. Go to Contact page
4. Test the contact form:
   - Fill out name, email, and message
   - Click "Dispatch Letter"
   - You should see a success toast notification
   - Check your email inbox for the message

## Step 5: Custom Domain (Optional)

### 5.1 Add Your Domain
1. Site settings → **"Domain management"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `saad-portfolio.com`)
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate automatically

## Step 6: Enable Advanced Features

### 6.1 Continuous Deployment
- Every push to `main` branch automatically deploys
- Check "Deploys" tab to see deployment history

### 6.2 Deploy Previews
- Every pull request gets a preview URL
- Share preview URLs with others before merging

### 6.3 Analytics
- Site settings → **"Analytics"**
- Monitor site traffic and performance
- View Core Web Vitals metrics

## Troubleshooting

### Deployment Fails
**Problem:** Build command fails  
**Solution:**
1. Check build logs in Netlify dashboard
2. Ensure all dependencies are correct: `pnpm install`
3. Verify Node version matches (v20)
4. Run `pnpm run build` locally to replicate error

### Email Not Sending
**Problem:** Contact form doesn't send emails  
**Solution:**
1. Verify environment variables are set in Netlify
2. Check that variable names match exactly:
   - `VITE_EMAILJS_PUBLIC_KEY` (not `VITE_EMAILJS_PUBLIC_keys`)
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
3. Redeploy after changing variables
4. Check browser console for errors

### Page Shows 404 on Refresh
**Problem:** React Router routing broken on page refresh  
**Solution:**
- netlify.toml redirect rule is already configured
- If issue persists, verify netlify.toml exists in root directory

### Performance Issues
**Problem:** Site loads slowly  
**Solution:**
1. Check Core Web Vitals in [PageSpeed Insights](https://pagespeed.web.dev)
2. Verify images are optimized
3. Check network tab in DevTools for slow assets
4. Review Netlify Analytics for performance metrics

## Deployment Checklist

Before going live:
- [ ] All files committed to GitHub
- [ ] Environment variables set in Netlify
- [ ] Build completes successfully
- [ ] Site deploys without errors
- [ ] All pages load and navigate correctly
- [ ] Contact form sends emails
- [ ] Toast notifications appear
- [ ] Mobile responsiveness verified
- [ ] Certificate gallery works
- [ ] Portfolio projects link to GitHub

## Monitoring & Maintenance

### Weekly
- Check Netlify Analytics for traffic
- Verify all links work correctly
- Test contact form occasionally

### Monthly
- Review Core Web Vitals scores
- Check for any deployment errors
- Monitor email delivery

### Quarterly
- Update dependencies: `npm update`
- Review and optimize performance
- Backup important data

## Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify CLI Guide](https://cli.netlify.com)
- [React Router Deployment](https://reactrouter.com/start/deployment)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## Quick Commands

```bash
# Local development
pnpm dev

# Production build
pnpm build

# Preview build locally
pnpm preview

# Type checking
pnpm type-check

# Linting
pnpm lint

# Deploy via Netlify CLI (optional)
pnpm add -g netlify-cli
netlify deploy --prod
```

---

**Your portfolio is now production-ready and deployed! 🎉**

For questions or issues, refer to the troubleshooting section or check Netlify documentation.
