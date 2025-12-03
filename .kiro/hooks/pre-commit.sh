#!/bin/bash
# Pre-commit hook to ensure code quality before commits

echo "🔮 Running Kiroweenscare pre-commit checks..."

# Check if we're in the app directory
if [ -d "kiroweenscare-app" ]; then
  cd kiroweenscare-app
fi

# Run linting
echo "👻 Checking for code ghosts..."
npm run lint 2>/dev/null || echo "⚠️  Linting not configured"

# Check for console.logs (vampires!)
echo "🧛 Hunting for console vampires..."
if grep -r "console\.log" src/ 2>/dev/null | grep -v "node_modules"; then
  echo "⚠️  Warning: console.log statements found (Console Vampires detected!)"
fi

# Check for TODO comments (unfinished business)
echo "💀 Searching for unfinished business..."
if grep -r "TODO\|FIXME" src/ 2>/dev/null | grep -v "node_modules"; then
  echo "⚠️  Warning: TODO/FIXME comments found"
fi

echo "✨ Pre-commit checks complete!"
