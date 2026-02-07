#!/bin/bash
# Deployment Verification Script
# Usage: ./scripts/verify-deployment.sh [domain]

DOMAIN="${1:-muin.company}"

echo "🔍 Verifying deployment for: $DOMAIN"
echo "===================================="
echo ""

# DNS Resolution
echo "1. DNS Resolution:"
dig +short "$DOMAIN" A | while read ip; do
    echo "   ✓ $ip"
done
echo ""

# Server Check
echo "2. Server Header:"
SERVER=$(curl -sI "https://$DOMAIN" | grep -i "^server:" | cut -d' ' -f2-)
echo "   Server: $SERVER"
if [[ "$SERVER" == *"Vercel"* ]]; then
    echo "   ✅ Hosted on Vercel"
elif [[ "$SERVER" == *"GitHub"* ]]; then
    echo "   ⚠️  Still on GitHub Pages"
else
    echo "   ❓ Unknown server"
fi
echo ""

# SSL Certificate
echo "3. SSL Certificate:"
CERT_INFO=$(curl -vI "https://$DOMAIN" 2>&1 | grep "CN=")
echo "   $CERT_INFO"
echo ""

# HTTP → HTTPS Redirect
echo "4. HTTP Redirect:"
REDIRECT=$(curl -sI "http://$DOMAIN" | grep -i "^location:" | cut -d' ' -f2-)
if [[ "$REDIRECT" == *"https"* ]]; then
    echo "   ✅ Redirects to HTTPS: $REDIRECT"
else
    echo "   ⚠️  No HTTPS redirect"
fi
echo ""

# Security Headers
echo "5. Security Headers:"
curl -sI "https://$DOMAIN" | grep -E "X-Frame-Options|X-Content-Type-Options|X-XSS-Protection" | while read header; do
    echo "   ✓ $header"
done
echo ""

# Page Title
echo "6. Page Content:"
TITLE=$(curl -s "https://$DOMAIN" | grep -o "<title>.*</title>" | sed 's/<[^>]*>//g')
echo "   Title: $TITLE"
echo ""

# Status Summary
echo "=================================="
echo "Verification complete!"
echo ""
echo "Manual checks needed:"
echo "  - Visit https://$DOMAIN in browser"
echo "  - Test all navigation links"
echo "  - Verify mobile responsiveness"
echo "  - Run Lighthouse audit"
echo ""
