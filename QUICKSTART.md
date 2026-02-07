# Quick Start - Deploy to Vercel

**TL;DR:** Two ways to deploy. Web Dashboard is easiest for first time.

---

## Option 1: Web Dashboard (5 minutes) 👈 RECOMMENDED

1. Go to: https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select `muin-company/muin-website` from GitHub
4. Click "Deploy" (settings auto-detected)
5. Add custom domain: Settings → Domains → `muin.company`
6. Update DNS as instructed by Vercel

**Done!** ✅

---

## Option 2: CLI (2 minutes)

```bash
cd ~/muin/muin-website

# One-time setup
vercel login  # Opens browser for auth

# Deploy
./scripts/deploy.sh --prod

# Or manually:
vercel --prod
```

**Done!** ✅

---

## After Deployment

```bash
# Verify it worked
./scripts/verify-deployment.sh muin.company

# Should see:
# Server: Vercel ✅
```

---

## Current Blocker

🔒 **Vercel CLI not authenticated**

To use CLI method, run:
```bash
vercel login
```
This requires browser interaction (can't be automated).

**Alternative:** Use Web Dashboard method (no CLI needed)

---

## Full Documentation

- **DEPLOY.md** - Complete deployment guide
- **DEPLOYMENT_STATUS.md** - Current status & next steps
- **scripts/README.md** - Script documentation

---

**Next action:** Choose Option 1 or 2 and deploy! 🚀
