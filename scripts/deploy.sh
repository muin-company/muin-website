#!/bin/bash
# Vercel Deployment Script for muin.company
# Usage: ./scripts/deploy.sh [--preview|--prod]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="muin-website"
PRODUCTION_DOMAIN="muin.company"

echo -e "${BLUE}🚀 Vercel Deployment Script${NC}"
echo "================================"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI not found${NC}"
    echo "Install with: npm install -g vercel"
    exit 1
fi

echo -e "${GREEN}✓${NC} Vercel CLI installed: $(vercel --version | head -1)"

# Check if authenticated
if ! vercel whoami &> /dev/null; then
    echo -e "${RED}❌ Not authenticated with Vercel${NC}"
    echo ""
    echo "Run: vercel login"
    echo "This will open a browser for authentication"
    exit 1
fi

echo -e "${GREEN}✓${NC} Authenticated as: $(vercel whoami 2>&1)"

# Check git status
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠${NC} Uncommitted changes detected:"
    git status -s
    echo ""
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo -e "${GREEN}✓${NC} Git status clean"

# Run build test
echo ""
echo -e "${BLUE}Building project...${NC}"
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Build successful"
else
    echo -e "${RED}❌ Build failed${NC}"
    echo "Run 'npm run build' to see errors"
    exit 1
fi

# Determine deployment type
DEPLOY_TYPE="${1:---preview}"

if [[ "$DEPLOY_TYPE" == "--prod" ]]; then
    echo ""
    echo -e "${YELLOW}⚠ Production Deployment${NC}"
    echo "This will deploy to: $PRODUCTION_DOMAIN"
    echo ""
    read -p "Are you sure? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    
    echo ""
    echo -e "${BLUE}🚀 Deploying to production...${NC}"
    vercel --prod
else
    echo ""
    echo -e "${BLUE}🚀 Deploying preview...${NC}"
    vercel
fi

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Test the deployment URL"
echo "  2. Check Vercel dashboard for analytics"
echo "  3. Monitor for errors"
echo ""
