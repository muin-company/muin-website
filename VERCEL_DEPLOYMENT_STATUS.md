# VERCEL DEPLOYMENT STATUS - muin.company

**Date:** 2026-02-08 04:50 KST  
**Status:** ⚠️ Currently on GitHub Pages, NOT Vercel  
**Assignee:** Subagent vercel-deploy-muin

---

## Current Situation

### ✅ What's Working
- **Domain:** `muin.company` is LIVE and accessible
- **Hosting:** GitHub Pages (via `muin-company.github.io`)
- **Content:** Full landing page with all sections working
- **Build:** Next.js project builds successfully locally
- **Repository:** `muin-company/muin-website` on GitHub

### ❌ What's Missing
- **Vercel Deployment:** Site is NOT deployed to Vercel
- **Vercel CLI Auth:** No local Vercel credentials configured
- **Vercel Project:** No Vercel project exists for this repo

---

## Deployment Verification

### Current Hosting Details
```bash
# Domain check
$ curl -sI https://muin.company
Server: GitHub.com  ← GitHub Pages, NOT Vercel
Content-Type: text/html; charset=utf-8
Last-Modified: Sat, 07 Feb 2026 09:28:04 GMT

# Build verification
$ npm run build
✓ Generating static pages (5/5)
Route (app)                              Size     First Load JS
┌ ○ /                                    8.83 kB        96.1 kB
└ ○ /_not-found                          875 B          88.1 kB
```

### Site Content Verification
✅ Hero section with MUIN branding  
✅ Products section (links to tools.muin.company, gumsi.muin.company)  
✅ About MUIN section  
✅ Team section (ONE - CEO, MJ - COO)  
✅ Contact section with email links  
✅ Responsive design (Tailwind CSS)  
✅ SEO metadata configured

### Infrastructure Notes
- **GitHub Repo:** `https://github.com/muin-company/muin-website`
- **Current DNS:** Points to GitHub Pages
- **Redirect:** `muin-company.github.io` → `muin.company`
- **Subdomains:** `tools.muin.company` and `gumsi.muin.company` NOT configured yet

---

## Required Actions for Vercel Deployment

### Option 1: Web Dashboard (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Select GitHub → `muin-company/muin-website`
4. Configure:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Root Directory: `./`
5. Deploy
6. Add custom domain `muin.company` in project settings
7. Update DNS records as instructed by Vercel

### Option 2: Vercel CLI
Requires authentication (interactive browser flow):
```bash
cd ~/muin/muin-website
vercel login  # Opens browser for auth
vercel --prod  # Deploy to production
vercel domains add muin.company  # Add custom domain
```

---

## Environment Variables

**Currently:** None required  
**Future considerations:**
- `NEXT_PUBLIC_API_URL` - If backend API is added
- `NEXT_PUBLIC_GA_ID` - For Google Analytics
- `VERCEL_ENV` - Auto-set by Vercel

---

## DNS Migration Considerations

### Current Setup (GitHub Pages)
```
Type    Name    Value
A       @       185.199.108.153 (GitHub Pages IP)
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     muin-company.github.io
```

### Required for Vercel
```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

**⚠️ Impact:** DNS changes will cause ~5-60 min downtime during propagation

---

## Post-Deployment Checklist

Once deployed to Vercel:
- [ ] Verify `https://muin.company` loads from Vercel (check Server header)
- [ ] Test all page sections (Hero, Products, About, Team, Contact)
- [ ] Verify product links (tools.muin.company, gumsi.muin.company)
- [ ] Check email links work
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Verify SSL certificate
- [ ] Check Vercel Analytics dashboard
- [ ] Update README.md with new deployment info

---

## Alternative: Keep Both

**Consideration:** Since GitHub Pages is free and already working, you could:
1. Keep `muin.company` on GitHub Pages (current)
2. Deploy to Vercel with auto-generated URL (e.g., `muin-website.vercel.app`)
3. Use Vercel URL for staging/preview
4. Migrate DNS when ready

This allows testing Vercel deployment without touching production.

---

## Next Steps

**Immediate:**
1. **Authenticate with Vercel:** Either via CLI or web dashboard
2. **Create Vercel project** from `muin-company/muin-website` repo
3. **Deploy to Vercel** (will get auto URL like `muin-website-*.vercel.app`)

**After Verification:**
4. **Update DNS** to point to Vercel (if migrating from GitHub Pages)
5. **Configure custom domain** `muin.company` in Vercel
6. **Verify production deployment**

**Current Blocker:** 🔒 **Authentication Required**  
Vercel CLI requires browser-based OAuth flow. Main agent or human (ONE) needs to complete authentication.

---

## Resources

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Docs - Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/domains)
- [GitHub to Vercel Integration](https://vercel.com/docs/git)
