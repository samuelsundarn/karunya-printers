# GitHub Pages Deployment Guide

## Setup Complete ✅

Your Karunya Printers website is now ready for GitHub Pages deployment!

## What's Been Configured

1. **gh-pages package** - Installed for easy deployment
2. **Vite configuration** - Updated with correct base path for GitHub Pages
3. **Package.json** - Updated with deployment scripts and homepage URL
4. **Router configuration** - Updated to work with GitHub Pages subdirectory
5. **.nojekyll file** - Added to prevent Jekyll processing

## Deployment Steps

### 1. Push to GitHub
Make sure all your changes are committed and pushed to your GitHub repository:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Deploy to GitHub Pages
Run the deployment command:

```bash
npm run deploy
```

This will:
- Build the project for production
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### 3. Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/samuelsundarn/karunya-printers`
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 4. Access Your Site
Your site will be available at: `https://samuelsundarn.github.io/karunya-printers`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run preview` - Preview production build locally

## Notes

- The site is configured to work at the `/karunya-printers` path on GitHub Pages
- All routing will work correctly with the configured basename
- Images and assets are properly configured for the subdirectory deployment
- The `.nojekyll` file ensures GitHub Pages doesn't interfere with the build

## Troubleshooting

If you encounter issues:
1. Make sure the repository name matches "karunya-printers"
2. Ensure GitHub Pages is enabled in repository settings
3. Check that the gh-pages branch was created after deployment
4. Wait a few minutes for GitHub Pages to update after deployment
