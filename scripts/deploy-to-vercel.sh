#!/bin/bash
# Deploy muin.company to Vercel
# Usage: ./scripts/deploy-to-vercel.sh [--prod]

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}Error: Vercel CLI is not installed${NC}"
    echo "Install with: npm install -g vercel"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: Must run from project root${NC}"
    exit 1
fi

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo -e "${YELLOW}Not logged in to Vercel${NC}"
    echo "Running: vercel login"
    vercel login
fi

echo -e "${GREEN}Starting deployment...${NC}"

# Build locally first to catch errors
echo "Running local build..."
npm run build

if [ "$1" == "--prod" ] || [ "$1" == "-p" ]; then
    echo -e "${YELLOW}Deploying to PRODUCTION...${NC}"
    vercel --prod
else
    echo -e "${YELLOW}Deploying to PREVIEW...${NC}"
    vercel
fi

echo -e "${GREEN}Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Verify deployment URL works"
echo "2. Add custom domain: vercel domains add muin.company"
echo "3. Update DNS records as instructed"
