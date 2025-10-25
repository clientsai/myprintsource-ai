#!/bin/bash

echo "🚀 PUNCTUAL.AI DEPLOYMENT SCRIPT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if GitHub CLI is authenticated
if gh auth status &>/dev/null; then
    echo "✅ GitHub authenticated"

    # Create GitHub repo
    echo "Creating GitHub repository..."
    gh repo create punctual-ai --public --source=. --remote=origin --push

    if [ $? -eq 0 ]; then
        echo "✅ GitHub repository created and code pushed"
    else
        echo "⚠️  Repository may already exist, trying to push..."
        git push -u origin main
    fi
else
    echo "❌ GitHub not authenticated"
    echo "Please run: gh auth login"
    exit 1
fi

echo ""
echo "📦 Deploying to Vercel..."
echo ""

# Deploy to Vercel
if command -v vercel &> /dev/null; then
    echo "Starting Vercel deployment..."
    vercel --prod
else
    echo "Installing Vercel CLI..."
    npm i -g vercel
    echo "Starting Vercel deployment..."
    vercel --prod
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ DEPLOYMENT COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Go to your Vercel dashboard"
echo "2. Add environment variables from vercel-env-vars.txt"
echo "3. Redeploy if needed"
echo ""
echo "Your app will be live at your Vercel URL!"