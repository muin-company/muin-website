#!/bin/bash
# Verify muin.company deployment
# Usage: ./scripts/verify-deployment.sh [URL]

URL="${1:-https://muin.company}"

echo "Verifying deployment at: $URL"
echo "================================"
echo ""

# Check HTTP status
echo "1. HTTP Status:"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
if [ "$STATUS" == "200" ]; then
    echo "   ✅ Status: $STATUS (OK)"
else
    echo "   ❌ Status: $STATUS (Expected 200)"
fi

# Check server header
echo ""
echo "2. Hosting Provider:"
SERVER=$(curl -sI "$URL" | grep -i "^server:" | cut -d' ' -f2- | tr -d '\r')
echo "   Server: $SERVER"
if [[ "$SERVER" == *"Vercel"* ]]; then
    echo "   ✅ Deployed on Vercel"
elif [[ "$SERVER" == *"GitHub"* ]]; then
    echo "   ⚠️  Deployed on GitHub Pages"
else
    echo "   ℹ️  Unknown hosting provider"
fi

# Check title
echo ""
echo "3. Page Title:"
TITLE=$(curl -s "$URL" | grep -oP '(?<=<title>)[^<]+' | head -1)
echo "   $TITLE"

# Check response time
echo ""
echo "4. Response Time:"
TIME=$(curl -s -o /dev/null -w "%{time_total}" "$URL")
echo "   ${TIME}s"

# Check SSL certificate
echo ""
echo "5. SSL Certificate:"
if curl -sI "$URL" | grep -q "HTTP/2"; then
    echo "   ✅ HTTPS/2 enabled"
else
    echo "   ⚠️  HTTP/1.1 or no HTTPS"
fi

# Check critical content
echo ""
echo "6. Content Verification:"
CONTENT=$(curl -s "$URL")

if echo "$CONTENT" | grep -q "MUIN"; then
    echo "   ✅ MUIN branding present"
else
    echo "   ❌ MUIN branding missing"
fi

if echo "$CONTENT" | grep -q "일하는 AI"; then
    echo "   ✅ Korean tagline present"
else
    echo "   ❌ Korean tagline missing"
fi

if echo "$CONTENT" | grep -q "tools.muin.company"; then
    echo "   ✅ Tools link present"
else
    echo "   ❌ Tools link missing"
fi

if echo "$CONTENT" | grep -q "gumsi"; then
    echo "   ✅ Gumsi link present"
else
    echo "   ❌ Gumsi link missing"
fi

echo ""
echo "================================"
echo "Verification complete!"
