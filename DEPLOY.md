# Vercel Deployment Guide - muin.company

**Last Updated:** 2026-02-08  
**Current Status:** Site live on GitHub Pages, ready for Vercel migration  
**Build Status:** ✅ Builds successfully (Next.js 14.2.35)

---

## 📋 Pre-Deployment Checklist

- [x] Project builds successfully (`npm run build`)
- [x] Git repository clean and pushed to GitHub
- [x] Domain `muin.company` owned and accessible
- [x] `vercel.json` configuration file present
- [ ] Vercel account created/accessible
- [ ] Decision made: migrate DNS or use separate staging URL

---

## 🚀 Deployment Methods

### Method 1: Vercel Web Dashboard (Recommended for First-Time)

This method provides the most visibility and control during initial setup.

#### Step 1: Connect GitHub Repository

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Log in with GitHub account (recommended) or email

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - If not connected, authorize Vercel to access GitHub
   - Search for and select: `muin-company/muin-website`

3. **Configure Project**
   ```
   Framework Preset: Next.js (auto-detected)
   Root Directory: ./
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   Install Command: npm install (auto-detected)
   ```

4. **Environment Variables** (if needed in future)
   - Currently: None required
   - Click "Add" to add variables later
   - Example future variables:
     ```
     NEXT_PUBLIC_API_URL=https://api.muin.company
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - You'll get a URL like: `muin-website-abc123.vercel.app`

#### Step 2: Add Custom Domain

1. **In Vercel Project Settings**
   - Go to: Settings → Domains
   - Click "Add Domain"
   - Enter: `muin.company`
   - Click "Add"

2. **DNS Configuration** (Choose One)

   **Option A: Vercel Nameservers (Recommended)**
   ```
   Update at your domain registrar:
   
   Nameservers:
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
   
   **Option B: Manual DNS Records**
   ```
   Type    Name    Value                      TTL
   A       @       76.76.21.21               3600
   CNAME   www     cname.vercel-dns.com      3600
   ```

3. **Verify Domain**
   - Vercel will automatically check DNS propagation
   - Usually takes 5-60 minutes
   - You'll see "Valid Configuration" when ready

4. **Set as Production Domain**
   - After verification, set `muin.company` as production domain
   - All future Git pushes to `main` branch will auto-deploy here

---

### Method 2: Vercel CLI (Faster for Subsequent Deploys)

**Current Blocker:** ⚠️ Requires interactive browser OAuth login

#### Prerequisites

```bash
# Verify Vercel CLI installed
vercel --version  # Should show: Vercel CLI 50.13.2

# If not installed:
npm install -g vercel
```

#### One-Time Authentication

```bash
# This opens a browser for OAuth login
# ⚠️ AI agents cannot complete this step - requires human interaction
vercel login

# Follow browser prompts:
# 1. Choose login method (GitHub recommended)
# 2. Authorize Vercel
# 3. Browser will show "Logged in successfully"
# 4. Return to terminal
```

#### Deploy to Production

```bash
# Navigate to project
cd ~/muin/muin-website

# Deploy to production
vercel --prod

# Follow prompts:
# ? Set up and deploy "~/muin/muin-website"? [Y/n] Y
# ? Which scope do you want to deploy to? [Select your account]
# ? Link to existing project? [Y/n] n  # First time
# ? What's your project's name? muin-website
# ? In which directory is your code located? ./
# Auto-detected Project Settings (Next.js):
# - Build Command: next build
# - Output Directory: .next
# - Development Command: next dev --port $PORT
# ? Want to override the settings? [y/N] N

# Deployment will start
# URLs will be shown upon completion:
# Preview:     https://muin-website-abc123.vercel.app
# Production:  https://muin-website.vercel.app (if domain not configured)
```

#### Add Domain via CLI

```bash
# After first deployment, add custom domain
vercel domains add muin.company --project muin-website

# Verify domain
vercel domains inspect muin.company

# Check deployment status
vercel ls
```

---

## 🔧 Configuration Files

### vercel.json (Already Present)

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

**Key Settings:**
- **regions: ["icn1"]** - Seoul region for optimal Korea performance
- **headers** - Security headers for all routes
- **framework: nextjs** - Optimized Next.js deployment

### package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🌐 DNS Migration Guide

### Current Setup (GitHub Pages)

```
Type    Name    Value                    Status
A       @       185.199.108.153         🟢 Active
A       @       185.199.109.153         🟢 Active
A       @       185.199.110.153         🟢 Active
A       @       185.199.111.153         🟢 Active
CNAME   www     muin-company.github.io  🟢 Active
```

**Server:** GitHub.com  
**URL:** https://muin.company → GitHub Pages

### Target Setup (Vercel)

```
Type    Name    Value                      TTL
A       @       76.76.21.21               3600
CNAME   www     cname.vercel-dns.com      3600
```

**Server:** Vercel  
**URL:** https://muin.company → Vercel Edge Network

### Migration Strategy

**Option 1: Zero-Downtime (Recommended)**

1. **Deploy to Vercel first** without changing DNS
   - Get Vercel URL: `muin-website-xyz.vercel.app`
   - Test thoroughly on Vercel URL

2. **Add domain in Vercel** but don't change DNS yet
   - Vercel will show "Pending Verification"
   - This is expected - DNS still points to GitHub

3. **Change DNS records**
   - Update all A records and CNAME at once
   - Use low TTL (300s) initially for quick rollback

4. **Monitor propagation**
   ```bash
   # Check DNS propagation
   dig muin.company +short
   # Should show: 76.76.21.21
   
   # Check server header
   curl -sI https://muin.company | grep server
   # Should show: server: Vercel
   ```

5. **Increase TTL** after 24h of stable operation
   - Change TTL to 3600 (1 hour) or 86400 (1 day)

**Option 2: Instant Switch (Riskier)**

1. Deploy to Vercel
2. Immediately update DNS
3. Accept 5-60 min propagation period
4. Monitor for issues

**Rollback Plan:**
```bash
# If issues occur, revert DNS to GitHub Pages IPs
# Keep old DNS records in a safe place
# DNS propagation will take 5-60 min to revert
```

---

## 📝 Environment Variables

### Current: None Required

The site is fully static with no backend dependencies.

### Future Considerations

Create `.env.local` (gitignored) for local development:

```bash
# API endpoints (when backend is added)
NEXT_PUBLIC_API_URL=https://api.muin.company

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=muin.company

# Feature flags
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
NEXT_PUBLIC_ENABLE_BLOG=false
```

**Adding to Vercel:**
1. Dashboard → Project → Settings → Environment Variables
2. Or via CLI: `vercel env add NEXT_PUBLIC_API_URL`
3. Redeploy for changes to take effect

---

## ✅ Post-Deployment Verification

### Automated Checks

```bash
# 1. Verify DNS resolution
dig muin.company +short
# Expected: 76.76.21.21

# 2. Check server header
curl -sI https://muin.company | grep -i server
# Expected: server: Vercel

# 3. Check SSL certificate
curl -vI https://muin.company 2>&1 | grep "CN="
# Expected: CN=muin.company

# 4. Verify redirects
curl -sI http://muin.company | grep location
# Expected: location: https://muin.company

curl -sI https://www.muin.company | grep location
# Expected: location: https://muin.company (if www configured)

# 5. Test build output
curl -s https://muin.company | grep -o "<title>.*</title>"
# Expected: <title>MUIN - AI-Enhanced Solutions</title>
```

### Manual Checks

- [ ] **Homepage loads:** https://muin.company
- [ ] **All sections visible:**
  - [ ] Hero section with MUIN logo
  - [ ] Products section
  - [ ] About MUIN
  - [ ] Team (ONE - CEO, MJ - COO)
  - [ ] Contact section
- [ ] **Product links work:**
  - [ ] tools.muin.company (may 404 if not deployed yet)
  - [ ] gumsi.muin.company (may 404 if not deployed yet)
- [ ] **Email links work:** `mailto:one@muin.company`, `mailto:mj@muin.company`
- [ ] **Responsive design:** Test mobile, tablet, desktop
- [ ] **Performance:**
  - [ ] Run Lighthouse audit (target: 90+ on all metrics)
  - [ ] Check Core Web Vitals in Vercel Analytics
- [ ] **Security headers:**
  ```bash
  curl -sI https://muin.company | grep -E "X-Frame-Options|X-Content-Type-Options|X-XSS-Protection"
  ```

### Vercel Dashboard Checks

1. **Deployments tab:** Verify latest deployment is "Ready"
2. **Analytics:** Check visitor data (if enabled)
3. **Domains:** Verify `muin.company` shows "Valid Configuration"
4. **Logs:** Check for any build or runtime errors

---

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected, Vercel auto-deploys on:
- **Production:** Every push to `main` branch → https://muin.company
- **Preview:** Every pull request → Unique preview URL

### Manual Deployment

```bash
# Deploy current branch to preview
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
git checkout feature-branch
vercel --prod
```

### Deployment Notifications

Configure in: Project Settings → Git → Deploy Hooks

Available integrations:
- Slack
- Discord (via webhook)
- Email
- Custom webhooks

---

## 🚨 Troubleshooting

### Issue: "No existing credentials found"

**Problem:** Vercel CLI not authenticated  
**Solution:**
```bash
vercel login
# Follow browser OAuth flow
# AI agents: This requires human intervention
```

### Issue: "Domain already in use"

**Problem:** Domain claimed by another Vercel account  
**Solution:**
1. Remove domain from other account, or
2. Transfer project to account with domain, or
3. Contact Vercel support

### Issue: Build fails with "Module not found"

**Problem:** Dependencies not installed  
**Solution:**
```bash
# Local test
rm -rf node_modules package-lock.json
npm install
npm run build

# Push fresh package-lock.json
git add package-lock.json
git commit -m "chore: update package-lock.json"
git push
```

### Issue: DNS not propagating

**Problem:** DNS changes take time  
**Check progress:**
```bash
# Check from multiple locations
dig muin.company @8.8.8.8
dig muin.company @1.1.1.1

# Use online tools
https://dnschecker.org/#A/muin.company
```

**Wait time:** Usually 5-60 min, can take up to 48h

### Issue: 404 on deployment

**Problem:** Build output directory mismatch  
**Solution:** Verify `vercel.json`:
```json
{
  "outputDirectory": ".next"  // Must match Next.js output
}
```

---

## 🔐 Security Considerations

### HTTPS

- ✅ Auto-provisioned by Vercel
- ✅ Auto-renewed SSL certificates (Let's Encrypt)
- ✅ HTTP → HTTPS redirect enabled by default

### Headers

Security headers configured in `vercel.json`:
```json
"headers": [
  {
    "key": "X-Content-Type-Options",
    "value": "nosniff"
  },
  {
    "key": "X-Frame-Options",
    "value": "DENY"  // Prevents clickjacking
  },
  {
    "key": "X-XSS-Protection",
    "value": "1; mode=block"
  }
]
```

**Future additions to consider:**
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- Referrer-Policy

### Environment Variables

- ✅ Never commit `.env.local` to git (already in `.gitignore`)
- ✅ Use `NEXT_PUBLIC_` prefix for client-side vars
- ✅ Sensitive keys (API keys, tokens) should be server-side only

---

## 📊 Monitoring & Analytics

### Vercel Analytics

Built-in analytics available at:
- Dashboard → Project → Analytics
- Real-time visitor data
- Core Web Vitals
- Top pages and referrers

**Enable:** Project Settings → Analytics → Enable

### External Analytics (Future)

**Google Analytics 4:**
```bash
# Add to .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Install package
npm install --save-dev @next/third-parties
```

**Plausible Analytics (Privacy-friendly):**
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=muin.company
```

Add to `app/layout.tsx`:
```tsx
<Script defer data-domain="muin.company" src="https://plausible.io/js/script.js" />
```

---

## 🎯 Next Steps After Deployment

### Immediate (Day 1)
- [ ] Verify deployment successful
- [ ] Run all post-deployment checks
- [ ] Update `README.md` with new deployment URL
- [ ] Announce deployment to team

### Short-term (Week 1)
- [ ] Monitor Vercel Analytics for traffic patterns
- [ ] Check for any errors in Vercel logs
- [ ] Set up deployment notifications (Slack/Discord)
- [ ] Configure Web Vitals monitoring
- [ ] Run security scan (Mozilla Observatory)

### Medium-term (Month 1)
- [ ] Deploy subdomains:
  - [ ] tools.muin.company
  - [ ] gumsi.muin.company
- [ ] Set up staging environment (separate Vercel project)
- [ ] Configure preview deployments for PRs
- [ ] Add Google Analytics or Plausible
- [ ] Implement contact form with backend

### Long-term
- [ ] Implement blog/news section
- [ ] Add i18n with language switcher (Korean/English)
- [ ] Integrate with CMS (Sanity/Contentful)
- [ ] Add dark/light mode toggle
- [ ] Implement animations (Framer Motion)
- [ ] Set up E2E testing (Playwright)

---

## 📚 Resources

### Official Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [CLI Reference](https://vercel.com/docs/cli)

### Vercel Dashboard Links
- [Dashboard Home](https://vercel.com/dashboard)
- [Import Project](https://vercel.com/new)
- [Domains Management](https://vercel.com/dashboard/domains)
- [Usage & Billing](https://vercel.com/dashboard/usage)

### Support
- [Vercel Support](https://vercel.com/support)
- [Vercel Discord](https://discord.gg/vercel)
- [GitHub Issues](https://github.com/vercel/vercel/issues)

---

## 📝 Deployment Log Template

Keep a record of deployments in `DEPLOYMENT_LOG.md`:

```markdown
## Deployment: YYYY-MM-DD HH:MM KST

**Type:** Production / Preview  
**Trigger:** Manual / Git Push / PR  
**Branch:** main  
**Commit:** abc1234  
**URL:** https://muin.company  
**Deployer:** [Name]  

**Changes:**
- Feature/fix description

**Verification:**
- [ ] Build successful
- [ ] All pages load
- [ ] Mobile responsive
- [ ] Performance acceptable

**Issues:** None / [Description]  
**Rollback:** N/A / [Steps taken]
```

---

## ⚠️ Current Blocker: Authentication Required

**Status:** Vercel CLI requires interactive OAuth login  
**Who can complete:** Human user (ONE or MJ)  
**Estimated time:** 2-3 minutes  

**Steps to unblock:**
1. Open terminal
2. Run: `cd ~/muin/muin-website && vercel login`
3. Browser will open
4. Log in with GitHub account
5. Authorize Vercel
6. Return to terminal (authenticated)
7. Run: `vercel --prod`

**Alternative:** Use Vercel Web Dashboard (Method 1) - no CLI authentication required

---

**Document Version:** 1.0  
**Created:** 2026-02-08  
**Last Updated:** 2026-02-08  
**Maintained by:** MJ (COO)  
**Review Schedule:** After each deployment
