# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd ~/muin/muin-website
vercel --prod
```

4. Configure custom domain:
- Go to Vercel dashboard
- Select the project
- Settings → Domains
- Add `muin.company`
- Update DNS records as instructed

### Option 2: GitHub Integration

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Select `muin-company/muin-website` from GitHub
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add custom domain `muin.company` in project settings

## DNS Configuration

Point your domain to Vercel:

```
A Record:  @  →  76.76.21.21
CNAME:     www  →  cname.vercel-dns.com
```

Or follow Vercel's instructions in the dashboard.

## Environment Variables

Currently no environment variables needed. For future use:

```bash
# Create .env.local (not committed to git)
NEXT_PUBLIC_API_URL=https://api.muin.company
```

## Post-Deployment Checklist

- [ ] Verify domain is accessible: https://muin.company
- [ ] Test all product links (tools, gumsi)
- [ ] Verify email links work
- [ ] Check mobile responsiveness
- [ ] Test SEO metadata (og tags)
- [ ] Verify performance scores (Lighthouse)

## Monitoring

Monitor at:
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Search Console](https://search.google.com/search-console)

## Future Enhancements

- [ ] Implement full i18n with language switcher
- [ ] Add blog/news section
- [ ] Integrate analytics (GA4, Plausible)
- [ ] Add contact form with backend
- [ ] Implement dark/light mode toggle
- [ ] Add animations (Framer Motion)
