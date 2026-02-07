# Deployment Scripts

Automation scripts for deploying muin.company to Vercel.

## Scripts

### deploy.sh
Automated deployment script with pre-flight checks.

**Usage:**
```bash
# Preview deployment
./scripts/deploy.sh

# Production deployment
./scripts/deploy.sh --prod
```

**Features:**
- ✅ Checks Vercel CLI installation
- ✅ Verifies authentication status
- ✅ Runs build test before deployment
- ✅ Checks git status for uncommitted changes
- ✅ Prompts for confirmation on production deploys
- ✅ Color-coded output

**Requirements:**
- Vercel CLI installed (`npm install -g vercel`)
- Authenticated with Vercel (`vercel login`)
- Git working directory clean (or user confirmation)

### verify-deployment.sh
Post-deployment verification script.

**Usage:**
```bash
# Verify current site
./scripts/verify-deployment.sh muin.company

# Verify Vercel deployment
./scripts/verify-deployment.sh muin-website-abc123.vercel.app
```

**Checks:**
1. DNS resolution (A records)
2. Server header (GitHub Pages vs Vercel)
3. SSL certificate validity
4. HTTP → HTTPS redirect
5. Security headers (X-Frame-Options, etc.)
6. Page content (title tag)

**Use cases:**
- After DNS migration to verify server change
- After deployment to verify site is live
- Debugging deployment issues
- Regular health checks

## Quick Start

### First-time deployment

```bash
# 1. Authenticate (opens browser)
vercel login

# 2. Deploy
./scripts/deploy.sh --prod

# 3. Verify
./scripts/verify-deployment.sh [deployment-url]
```

### Subsequent deployments

```bash
# Already authenticated, just deploy
./scripts/deploy.sh --prod
```

## Troubleshooting

### "command not found: vercel"
Install Vercel CLI:
```bash
npm install -g vercel
```

### "Not authenticated with Vercel"
Run authentication:
```bash
vercel login
```
This opens a browser for OAuth login.

### "Build failed"
Run locally to see errors:
```bash
npm run build
```

### Scripts not executable
Make them executable:
```bash
chmod +x scripts/*.sh
```

## See Also
- [DEPLOY.md](../DEPLOY.md) - Full deployment guide
- [DEPLOYMENT_STATUS.md](../DEPLOYMENT_STATUS.md) - Current status
- [Vercel Documentation](https://vercel.com/docs)
