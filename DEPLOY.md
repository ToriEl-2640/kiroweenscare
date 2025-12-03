# Quick Deployment Guide

## Option 1: Vercel (Recommended - 2 minutes)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate.

3. **Deploy:**
   ```bash
   cd /workspaces/kiroweenscare
   vercel --prod
   ```

4. **Your app will be live!** Copy the URL and add it to README.md

## Option 2: Netlify (Alternative - 2 minutes)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   cd kiroweenscare-app
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Option 3: GitHub Pages (Free - 5 minutes)

1. **Install gh-pages:**
   ```bash
   cd kiroweenscare-app
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/kiroweenscare",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Option 4: Manual Upload (No CLI needed)

### Vercel (via Web):
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Set build command: `cd kiroweenscare-app && npm install && npm run build`
5. Set output directory: `kiroweenscare-app/dist`
6. Click "Deploy"

### Netlify (via Web):
1. Go to https://netlify.com
2. Drag and drop the `kiroweenscare-app/dist` folder
3. Done!

## After Deployment

1. Copy your deployment URL
2. Update README.md:
   ```markdown
   ## 🎬 Demo
   
   **Live App:** https://your-app-url.vercel.app
   **Demo Video:** [Coming soon]
   ```

3. Test the live app
4. Commit and push changes

## Troubleshooting

**Build fails?**
- Make sure you're in the right directory
- Run `npm install` first
- Check that `npm run build` works locally

**404 errors?**
- Verify the output directory is set to `kiroweenscare-app/dist`
- Check that index.html exists in dist folder

**Styling broken?**
- Ensure Tailwind CSS is properly configured
- Check that all CSS files are imported
